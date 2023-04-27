import Left_header from "../../../../components/left_header";
import Top_header from "../../../../components/top_header";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useAtom} from "jotai";
import {
    DiscordGuildRoleList,
    DiscordList,
    DiscordRoleInfo,
    LoadingState,
    SelectDiscordList,
    USER_ID, VerifyPop_up_boxState, VerifyState
} from "../../../../jotai";
import {client} from "../../../../client";
import Loading from "../../../../components/loading";
import {GetDcUserAllGuilds} from "../../../../components/math";
import Pop_up_box from "../../../../components/pop_up_box";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Add = (props) =>{
    const router = useRouter()
    const [discordGuildRoleList,setDiscordGuildRoleList] = useAtom(DiscordGuildRoleList)

    const [role,setRole] =useState({name:"-------",color:"0"})
    const [guild_id,setGuild_id] =useState("")
    const [role_id,setRole_id] =useState("")

    const [user_id,setUser_id] = useAtom(USER_ID)

    const [selectDiscordList,setSelectDiscordList] =useAtom(SelectDiscordList)
    const [discordList,setDiscordList] =useAtom(DiscordList)

    const [discordRoleInfo,setDiscordRoleInfo] = useAtom(DiscordRoleInfo)

    const [,setSop_up_boxState] = useAtom(VerifyPop_up_boxState)
    const [,setVerifyState] =useAtom(VerifyState)
    const [openLoading,setOpenLoading] =useAtom(LoadingState)
    useEffect(()=>{
        if (router.isReady) {
            setOpenLoading(true)
            setGuild_id(router.query.addId[0])
            setRole_id(router.query.addId[1])
            const guild_id = router.query.addId[0]
            const role_id = router.query.addId[1]
            const query = async () =>{
                if(user_id!==""){
                    if(discordGuildRoleList[0].id !==""){
                        const allGuildRet = await GetDcUserAllGuilds(user_id)
                        if(allGuildRet.length>0){
                            setDiscordList(allGuildRet)
                            const index = allGuildRet.findIndex(target =>target.id == guild_id)
                            if(index==-1){
                                setSelectDiscordList(0)
                            }else {
                                setSelectDiscordList(index)
                            }
                        }
                        const index = discordGuildRoleList.findIndex(target =>target.id == role_id)
                        if(index !==-1){
                            setRole(discordGuildRoleList[index])
                        }


                        console.log(discordRoleInfo)
                        const whetherSetUpIndex =discordRoleInfo.findIndex(target =>target.role_id == role_id)
                        if(whetherSetUpIndex !==-1){
                            const data = discordRoleInfo[whetherSetUpIndex];
                            if(document.getElementById("description")!==null){
                                (document.getElementById("description") as HTMLInputElement).value = data.description;
                                (document.getElementById("min") as HTMLInputElement).value = data.number;
                            }

                        }
                        setOpenLoading(false)
                    }else {
                        router.back()
                    }

                }
            }

            query()

        }
    },[router.isReady])

    // const Save = async () => {
    //     setOpenLoading(true)
    //
    //     // const description = (document.getElementById("description") as HTMLInputElement).value
    //     // const smart_contract_address = (document.getElementById("address") as HTMLInputElement).value
    //     // const min_token_amount = (document.getElementById("min") as HTMLInputElement).value
    //     // const max_token_amount = (document.getElementById("max") as HTMLInputElement).value
    //
    //     // console.log(typeof description,smart_contract_address,min_token_amount,max_token_amount)
    //
    //     const userInfoRet = await client.callApi('v1/Rules/AddRule', {
    //         guild_id,
    //         role_id,
    //         description:"asdasd",
    //         chain_type: "sui",
    //         token_type: "nft",
    //         smart_contract_address:"asdasda",
    //         max_token_amount:"asdasd",
    //         min_token_amount:"asdasd",
    //
    //     });
    //     console.log(userInfoRet)
    //     if(userInfoRet.isSucc){
    //
    //         setOpenLoading(false)
    //         setVerifyState({state:true,type:"Add",hash: ""})
    //         setSop_up_boxState(true)
    //
    //         router.back()
    //     }else {
    //         setOpenLoading(false)
    //         setVerifyState({state:false,type:"Add",hash: ""})
    //         setSop_up_boxState(true)
    //     }
    //
    // }

    const Save = async () =>{
        setOpenLoading(true)
        const description = (document.getElementById("description") as HTMLInputElement).value
        const number = (document.getElementById("min") as HTMLInputElement).value

        const userInfoRet = await client.callApi('v1/Test/AddDcUserTestRulesNumber', {
            chain_type: "Sui",
            description,
            guild_id,
            number,
            role_id
        });
        console.log(userInfoRet)
        if(userInfoRet.isSucc){

            setOpenLoading(false)
            setVerifyState({state:true,type:"Add",hash: ""})
            setSop_up_boxState(true)

            router.back()
        }else {
            setOpenLoading(false)
            setVerifyState({state:false,type:"Add",hash: ""})
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
                    <Loading/>
                        <div className="h-screen  overflow-y-auto bg-black p-10">
                            <button onClick={()=>router.back()} className="text-white">
                                👈 Back
                            </button>
                            <div className="text-white text-2xl font-semibold mt-4">
                                <div className="flex items-center">
                                    <div className={`w-4 h-4 rounded-sm  mr-2`} style={{backgroundColor:`#${role.color=="0"?"fafafa":Number(role.color).toString(16)}`}}>

                                    </div>
                                    <span className="text-sm font-medium">{role.name}</span>
                                </div>
                            </div>
                            <div className="pt-5  ">
                                <div className="mt-2 w-80 xl:w-100">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                        Description
                                    </label>
                                    <div className="mt-2 ">
                                        <input
                                            id="description"
                                            required
                                            autoComplete="off"
                                            placeholder="Description"
                                            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 w-80 xl:w-100">
                                    <label htmlFor="Chain" className="flex justify-between text-sm font-medium text-gray-300">
                                       Chain Type
                                    </label>
                                    <div className="mt-2 text-white py-3 font-semibold text-xl">
                                       Sui
                                    </div>
                                </div>

                                {/*<div className="mt-4 w-80 xl:w-100">*/}
                                {/*    <label htmlFor="Token" className="flex justify-between text-sm font-medium text-gray-300">*/}
                                {/*        Token Type*/}
                                {/*    </label>*/}
                                {/*    <div className="mt-2 text-white py-3 font-semibold text-xl">*/}
                                {/*        NFT*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<div className="mt-4 w-80 xl:w-100">*/}
                                {/*    <label htmlFor="Address" className="flex justify-between text-sm font-medium text-gray-300">*/}
                                {/*        Address*/}
                                {/*    </label>*/}
                                {/*    <div className="mt-2 ">*/}
                                {/*        <input*/}
                                {/*            id="address"*/}
                                {/*            required*/}
                                {/*            autoComplete="off"*/}
                                {/*            placeholder="Input address"*/}
                                {/*            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<div className="mt-4 w-80 xl:w-100 flex justify-between items-center">*/}
                                {/*    <div className="w-1/2">*/}
                                {/*    <label htmlFor="Min" className="flex justify-between text-sm font-medium text-gray-300">*/}
                                {/*        Min Amount*/}
                                {/*    </label>*/}
                                {/*    <div className="mt-2 ">*/}
                                {/*        <input*/}
                                {/*            id="min"*/}
                                {/*            required*/}
                                {/*            autoComplete="off"*/}
                                {/*            placeholder="Enter min amount of token"*/}
                                {/*            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="w-1/2 ml-4">*/}
                                {/*        <label htmlFor="Max" className="flex justify-between text-sm font-medium text-gray-300">*/}
                                {/*            Max Amount of tokens (optional)*/}
                                {/*        </label>*/}
                                {/*        <div className="mt-2 ">*/}
                                {/*            <input*/}
                                {/*                id="max"*/}
                                {/*                required*/}
                                {/*                autoComplete="off"*/}
                                {/*                placeholder="Enter max amount of token"*/}
                                {/*                className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"*/}
                                {/*            />*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="w-56">
                                    <label htmlFor="Min" className="flex justify-between text-sm font-medium text-gray-300">
                                        Min Amount
                                    </label>
                                    <div className="mt-2 ">
                                        <input
                                            id="min"
                                            required
                                            autoComplete="off"
                                            placeholder="Enter min amount of token"
                                            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <button onClick={Save} className="bg-yellow-400 text-black px-8 mt-10 w-48 justify-center   py-2.5 rounded-lg text-sm flex items-center" >
                                  Save
                                </button>
                            </div>
                        </div>

                </div>
            </div>
        </div>

    )
}



export default Add


