import Left_header from "../../../components/left_header";
import Top_header from "../../../components/top_header";
import {useAtom} from "jotai";
import {DiscordList} from "../../../jotai";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

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
    return (
        <div className="">
            <div className="flex ">
                <Left_header/>
                <div className="w-full  overflow-hidden">
                    <Top_header/>

                        <div className="h-screen  overflow-y-auto bg-black p-10">
                            <Link href="" className="text-white">
                                👈 Back
                            </Link>
                            <div className="text-white text-2xl font-semibold">
                                MOD
                            </div>
                            <div className="pt-20  ">
                                <div className="mt-2 w-80 xl:w-100">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                        Description
                                    </label>
                                    <div className="mt-2 ">
                                        <input
                                            id="Twitter"
                                            required
                                            autoComplete="off"
                                            placeholder="Description"
                                            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 w-80 xl:w-100">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                       Chain Type
                                    </label>
                                    <div className="mt-2 text-white py-3 font-semibold text-xl">
                                       Sui
                                    </div>
                                </div>

                                <div className="mt-4 w-80 xl:w-100">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                        Token Type
                                    </label>
                                    <div className="mt-2 text-white py-3 font-semibold text-xl">
                                        NFT
                                    </div>
                                </div>

                                <div className="mt-4 w-80 xl:w-100">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                        Address
                                    </label>
                                    <div className="mt-2 ">
                                        <input
                                            id=""
                                            required
                                            autoComplete="off"
                                            placeholder="Input address"
                                            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 w-80 xl:w-100 flex justify-between items-center">
                                    <div className="w-1/2">
                                    <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                        Min Amount
                                    </label>
                                    <div className="mt-2 ">
                                        <input
                                            id=""
                                            required
                                            autoComplete="off"
                                            placeholder="Enter min amount of token"
                                            className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                        />
                                    </div>
                                    </div>
                                    <div className="w-1/2 ml-4">
                                        <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-300">
                                            Max Amount of tokens (optional)
                                        </label>
                                        <div className="mt-2 ">
                                            <input
                                                id=""
                                                required
                                                autoComplete="off"
                                                placeholder="Enter max amount of token"
                                                className="outline-none  w-full p-3 border  rounded-lg shadow-sm placeholder-gray-400  sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <button className="bg-yellow-400 text-black px-8 mt-10 w-48 justify-center   py-2.5 rounded-lg text-sm flex items-center" >
                                  Save
                                </button>
                            </div>
                        </div>

                </div>
            </div>
        </div>

    )
}

export default DashBoard


