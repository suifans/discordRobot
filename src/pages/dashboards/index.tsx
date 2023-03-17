import Left_header from "../../components/left_header";
import Top_header from "../../components/top_header";
import {useAtom} from "jotai";
import {DiscordList} from "../../jotai";
import {useEffect} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const DashBoards = () =>{
    const [discordList,setDiscordList] =useAtom(DiscordList)
    const AddDiscordList = () =>{
        setDiscordList([{name:"SuiRobot",img:"/user_logo.png",id:"1"},
            {name:"SuiRobot2",img:"/user_logo.png",id:"2"}])
    }
    useEffect(()=>{
        if(discordList[0].name !==""){
            // window.location.replace("/dashboard")
        }
    },[])
    return (
        <div className="h-screen w-full">
            <div className="flex h-full">
                <Left_header/>
                <div className="flex flex-1 flex-col overflow-hidden">
                    <Top_header/>
                    {/* Main content */}
                    <div className="flex flex-1 items-stretch overflow-hidden">
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

                            {/* Primary column */}
                            {/*   {status === EthosConnectStatus.Loading ? (*/}
                            {/*        <div className="text-white">Loading...</div>*/}
                            {/*    ) : status === EthosConnectStatus.NoConnection ? (*/}
                            {/*        <div className="flex flex-col h-full   justify-center">*/}
                            {/*            <div className="flex justify-center">*/}
                            {/*        <button onClick={ethos.showSignInModal} className="px-5 py-1 rounded-full bg-black text-white">*/}
                            {/*           Sign</button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    ) : (*/}
                            {/*       <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col p-5">*/}
                            {/*           <img className="h-56 w-96" src="/群体机器人.png" alt=""/>*/}
                            {/*           <ethos.components.AddressWidget/>*/}
                            {/*       </section>*/}
                            {/*    )}*/}
                                {/* Your content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashBoards


