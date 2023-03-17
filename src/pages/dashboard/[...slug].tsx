import Left_header from "../../components/left_header";
import Top_header from "../../components/top_header";
import {useAtom} from "jotai";
import {DiscordList} from "../../jotai";
import {useEffect} from "react";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const DashBoard = () =>{
    const router = useRouter()
    const [discordList,setDiscordList] =useAtom(DiscordList)
    const AddDiscordList = () =>{
        setDiscordList([{name:"SuiRobot",img:"/user_logo.png",id:"1"}])
    }
    useEffect(()=>{
        if (router.isReady) {


        }
    },[router.isReady])

    const selectRole = () =>{
        router.push(`/dashboard/add/1/1`)
    }
    return (
        <div className="">
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
                            <div className="pt-44 flex justify-center items-center">
                                <div className="text-white flex flex-col justify-center text-center items-center">
                                    <div className="my-5 text-xl font-semibold">
                                        You haven’t configured token permission for your roles yet.<br/>
                                        Select a role to get started!
                                    </div>
                                    <button onClick={selectRole} className="bg-yellow-400 text-black px-8  py-2.5 rounded-lg text-sm flex items-center" >
                                        <div className="text-2xl mr-4">
                                            +
                                        </div>Select role
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


