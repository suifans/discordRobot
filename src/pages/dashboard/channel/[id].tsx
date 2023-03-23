import Left_header from "../../../components/left_header";
import Top_header from "../../../components/top_header";
import {useAtom} from "jotai";
import {
    DiscordGuildRoleList,
    DiscordList,
    DiscordRoleInfo,
    DiscordUser, LoadingState,
    SelectDiscordList,
    USER_ID, VerifyPop_up_boxState, VerifyState
} from "../../../jotai";
import React, {Fragment, useEffect, useState} from "react";
import {Router, useRouter} from "next/router";
import {request} from "undici";
import {client} from "../../../client";
import {Dialog, Transition} from "@headlessui/react";
import RadioButton from "../../../components/RadioButton";
import {GetDcUserAllGuilds} from "../../../components/math";
import Add from "./add/[...addId]";
import Pop_up_box from "../../../components/pop_up_box";
import Loading from "../../../components/loading";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Channel = () =>{
    const router = useRouter()
    const { id } = router.query;

    const RoseList = [{name: "", id: "", color:"0"}]
    const [notSetRoleList,setNotSetRoleList] =useState(RoseList)
    const [setUpRolesList,setSetUpRolesList] =useState([[{name: "", id: "", color:"0"}]])
    const [activeOption, setActiveOption] = useState("");
    const [openSelectDiscordRole,setOpenSelectDiscordRole] = useState(false)
    const [removeRole,setRemoveRole] = useState({name: "", id: "", color:"0"})
    const [openSelectRemoveRole,setOpenSelectRemoveRole] = useState(false)
    const [discordList,setDiscordList] =useAtom(DiscordList)
    const [discordGuildRoleList,setDiscordGuildRoleList] = useAtom(DiscordGuildRoleList)
    const [discordRoleInfo,setDiscordRoleInfo] = useAtom(DiscordRoleInfo)
    const [user_id,setUser_id] = useAtom(USER_ID)
    const [selectDiscordList,setSelectDiscordList] =useAtom(SelectDiscordList)

    const [,setSop_up_boxState] = useAtom(VerifyPop_up_boxState)
    const [,setVerifyState] =useAtom(VerifyState)
    const [,setOpenLoading] =useAtom(LoadingState)

    const handleChange = (value: string) => {
        setActiveOption(value);
    };

    useEffect(()=>{
        if (router.isReady) {
            setOpenLoading(true)
            const guild_id = router.query.id
            const query = async () =>{
                if(user_id!==""){
                    const allGuildRet = await GetDcUserAllGuilds(user_id)

                    if(allGuildRet.length>0){
                        setDiscordList(allGuildRet)

                      const index = allGuildRet.findIndex(target =>target.id == guild_id)
                       if(index==-1){
                           setSelectDiscordList(0)
                       }else {
                           setSelectDiscordList(index)
                       }
                    }else {

                    }

                    const getAllRules = await client.callApi('v1/Rules/GetAllRules', {
                        guild_id: `${guild_id}`
                    });


                    const rulesList =getAllRules.res ? JSON.parse(getAllRules.res.rule_list) : []
                    //
                    setDiscordRoleInfo(rulesList)

                    const rolesRes = await client.callApi('v1/User/GetDcUserGuildInfo', {
                        guild_id: `${guild_id}`
                    });
                    const realRolesList = JSON.parse(rolesRes.res.guild_info).roles

                    console.log(realRolesList)

                    if(realRolesList){
                        for (let z= 0 ;z<realRolesList.length;z++){
                            if(realRolesList[z].tags){
                                realRolesList.splice(z,1);
                            }
                        }
                        setDiscordGuildRoleList(realRolesList)
                        let notSetRoleList = JSON.parse(JSON.stringify(realRolesList))

                        let setUpRolesList = []
                        for(let i = 0; i < rulesList.length; i++){
                            let value = rulesList[i].role_id
                            for(let a = 0; a < notSetRoleList.length; a++){
                                if (value == notSetRoleList[a].id) {
                                    let removeList = notSetRoleList.splice(a,1);
                                    setUpRolesList.push(removeList)
                                    break;
                                }
                            }
                        }
                        setNotSetRoleList(notSetRoleList)

                        // console.log(setUpRolesList)
                        if(setUpRolesList.length!=0){
                            setSetUpRolesList(setUpRolesList)
                        }

                    }else {
                        router.push("/dashboard")
                    }



                }else {
                    router.push("/dashboard")
                }
                setOpenLoading(false)
            }
            query()


        }
    },[router.isReady,router.query.id])

    const selectRole = () =>{
        setOpenSelectDiscordRole(true)
        // router.push(`/dashboard/add/1/1`)
    }
    const Apply = (activeOption) =>{
        if(activeOption!==""){
            router.push(`/dashboard/channel/add/${discordList[selectDiscordList].id}/${activeOption}`)
        }

    }

    const RemoveRole = async (role_id) => {
        setOpenLoading(true)
        const res = await client.callApi('v1/Rules/DelRule', {
            role_id,
            guild_id: `${router.query.id}`
        });
        if(res.isSucc){
            setOpenLoading(false)
            setVerifyState({state:true,type:"Remove",hash: ""})
            setSop_up_boxState(true)
            location.reload();
        }else {
            setOpenLoading(false)
            setVerifyState({state:false,type:"Remove",hash: ""})
            setSop_up_boxState(true)
        }


    }
    return (
        <div className="">
            <Pop_up_box/>
            <Loading/>
            <div className="flex ">
                <Left_header/>
                <div className="w-full  overflow-hidden">
                    <Top_header/>
                    <div className="h-screen  overflow-y-auto bg-black p-10">
                        <div className="text-white text-2xl font-semibold">
                            Token Granted Roles page
                        </div>
                        <div className="pt-20 grid grid-cols-6 gap-4">
                            <div>
                            </div>

                        </div>
                        <div className="pt-10 flex flex-wrap gap-4 items-center">
                            <div className={setUpRolesList[0][0].name==""?"hidden":"flex flex-wrap gap-4 items-center"}>
                            {setUpRolesList.map(item=>(
                                <div key={item[0].id} className="px-2 flex justify-between items-center pl-5 py-1.5  rounded-lg border w-56 h-10">
                                    <button  onClick={()=>Apply(item[0].id)}className="flex items-center">
                                    <div className={`w-4 h-4 rounded-sm `} style={{backgroundColor:`#${item[0].color=="0"?"fafafa":Number(item[0].color).toString(16)}`}}>

                                    </div>
                                    <span className="text-sm font-medium text-white truncate pl-1">{item[0].name}</span>
                                    </button>

                                    <button  onClick={()=> {
                                        setRemoveRole({name: item[0].name, id: item[0].id, color:item[0].color}),
                                        setOpenSelectRemoveRole(true)
                                    }} className="">
                                        <i className="fa fa-trash-o text-white" aria-hidden="true" />
                                    </button>
                                    </div>
                            ))}
                            </div>
                            <button onClick={selectRole} className="border text-white w-56 h-10 py-1.5 rounded-lg text-sm flex justify-center items-center" >
                                <div className="text-xl text-white mr-4">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                </div>Select role
                            </button>

                        </div>
                    </div>



                    <Transition.Root show={openSelectDiscordRole} as={Fragment}>
                        <Dialog as="div" className="fixed z-40 inset-0 overflow-y-auto " onClose={()=>false}>
                            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl   sm:block sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 bg-neutral-700 bg-opacity-70 transition-opacity" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <div className="inline-block align-bottom p-0.5 rounded-lg    rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                        <div className="bg-neutral-700 px-4 py-5 sm:px-6 rounded-md">
                                            <div className="text-center text-white font-semibold text-xl">
                                                Select Discord role
                                            </div>

                                            <div className="text-center py-5 text-white font-light  scrollbar-thin scrollbar-thumb-custom  scrollbar-thumb-rounded-full overflow-auto">
                                                <div className={notSetRoleList.length ==0?"hidden":"h-90"}>
                                                    <RadioButton options={notSetRoleList} activeOption={activeOption} onChange={handleChange} />
                                                </div>
                                                <div className={notSetRoleList.length ==0?"font-semibold":"hidden"}>
                                                    No more optional
                                                </div>
                                            </div>

                                            <div className="flex justify-center mt-4">
                                                <button onClick={() => setOpenSelectDiscordRole(false)}  className="border border-white text-white w-36 py-1.5 rounded-xl ">
                                                    Cancel
                                                </button>
                                                <button  onClick={()=>{
                                                    Apply(activeOption)
                                                }} className={notSetRoleList.length ==0?"hidden":"bg-red-500  text-white w-36 py-1.5 rounded-xl ml-5"}>
                                                    Apply
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <Transition.Root show={openSelectRemoveRole} as={Fragment}>
                        <Dialog as="div" className="fixed z-40 inset-0 overflow-y-auto " onClose={()=>false}>
                            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center shadow-2xl   sm:block sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 bg-neutral-700 bg-opacity-70 transition-opacity" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <div className="inline-block align-bottom p-0.5 rounded-lg    rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle   ">
                                        <div className="bg-neutral-700 px-4 py-5 sm:px-6 rounded-md">
                                            <div className="text-center text-white font-semibold text-xl">
                                                Remove Discord role
                                            </div>

                                            <div className="text-center py-5 text-white font-light  scrollbar-thin scrollbar-thumb-custom  scrollbar-thumb-rounded-full overflow-auto">
                                                <div className="flex items-center justify-center">
                                                    <div className={`w-4 h-4 rounded-sm `} style={{backgroundColor:`#${removeRole.color=="0"?"fafafa":Number(removeRole.color).toString(16)}`}}>

                                                    </div>
                                                    <span className="text-sm font-medium text-white truncate pl-1">{removeRole.name}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-center mt-4">
                                                <button onClick={() => setOpenSelectRemoveRole(false)}  className=" border border-white text-white w-36 py-1.5 rounded-xl mr-5">
                                                    Cancel
                                                </button>
                                                <button  onClick={()=> RemoveRole(removeRole.id)} className="bg-red-500  text-white w-36 py-1.5 rounded-xl mr-5">
                                                    Remove
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
            </div>
        </div>
    )
}


export default Channel


