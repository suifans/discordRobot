import Left_header from "../../components/left_header";
import Top_header from "../../components/top_header";
import {useAtom} from "jotai";
import {
    DiscordGuildRoleList,
    DiscordList,
    DiscordUser,
    LoadingState,
    USER_ID,
    VerifyPop_up_boxState,
    VerifyState
} from "../../jotai";
import {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {request} from "undici";
import {client} from "../../client";
import {Dialog, Transition} from "@headlessui/react";
import RadioButton from "../../components/RadioButton";
import {GetDcUserAllGuilds} from "../../components/math";
import Pop_up_box from "../../components/pop_up_box";
import Loading from "../../components/loading";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const DashBoard = () =>{

    const router = useRouter()
    const [discordList,setDiscordList] =useAtom(DiscordList)
    const [discordUser,setDiscordUser] =useAtom(DiscordUser)
    const [user_id,setUser_id] = useAtom(USER_ID)
    const AddDiscordList = () =>{
        window.open('https://discord.com/api/oauth2/authorize?client_id=1085234510649622548&permissions=268445744&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=code&scope=identify%20guilds%20bot',"_parent")
        // window.open('https://discord.com/api/oauth2/authorize?client_id=1085234510649622548&permissions=268438548&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=code&scope=identify%20guilds%20applications.commands%20bot',"_parent")

    }
    const [,setSop_up_boxState] = useAtom(VerifyPop_up_boxState)
    const [,setVerifyState] =useAtom(VerifyState)
    const [,setOpenLoading] =useAtom(LoadingState)
    useEffect(()=>{
        if (router.isReady) {
            setOpenLoading(true)
            let code = router.query.code
            console.log(code)
                const query = async () =>{
                    const ret = await client.callApi('v1/User/GetDcUserToken', {
                        code:`${code}`
                    });
                    if(ret.isSucc){
                       const user_id = ret.res.user_id
                        setUser_id(user_id)
                        const userInfoRet = await client.callApi('v1/User/GetDcUserInfo', {
                            user_id
                        });
                        const data = JSON.parse(userInfoRet.res.user_info)
                        setDiscordUser({id:data.id,username:data.username,avatar:data.avatar})

                        const allGuildRet = await GetDcUserAllGuilds(user_id)
                        if(allGuildRet.length>0){
                            setOpenLoading(false)
                            setDiscordList(allGuildRet)
                           await router.push(`/dashboard/channel/${allGuildRet[0].id}`)
                        }else {
                            setOpenLoading(false)
                            await router.push("/dashboard")
                        }
                    }

                }
                query()
        }
    },[router.isReady])


    return (
        <div className="">
            <Pop_up_box/>
            <Loading/>
            <div className="flex ">
                <Left_header/>

                <div className="w-full  overflow-hidden">
                    <Top_header/>
                    <div className="flex flex-1 items-stretch overflow-hidden h-screen">
                        <div className="flex-1 flex justify-center items-center overflow-y-auto bg-black ">
                            <div className="text-white flex flex-col justify-center text-center items-center">
                                <img className="w-24 h-24" src="https://cc.collab.land/static/media/emptyServerList.3ffcc671.png" alt=""/>

                                <div className="my-5 text-xl font-semibold">
                                    You don’t have any servers connected yet.<br/>
                                    Start your first Tokenized Community with us
                                </div>
                                <button onClick={AddDiscordList} className="bg-yellow-400 text-black px-8  py-2.5 rounded-lg text-sm" >
                                    Connect bot
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}




export default DashBoard


