import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {HomeIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {useAtom} from "jotai";
import {DiscordList, MobileMenuOpen} from "../../jotai";
import { useRouter } from 'next/router'
import Link from "next/link";
const navigation = [
    { name: 'Bot Config', href: 'home',current: true },
    { name: 'TGRs', href: 'go',current: false },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Left_header = () =>{
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useAtom(MobileMenuOpen)
    const [discordList,setDiscordList] =useAtom(DiscordList)
    const [loginOut,setLoginOut] =useState(false)
    const [pathname,setPathname] = useState("")
    const [selectDiscord,setSelectDiscord] = useState(0)

    const AddDiscordList = () =>{
        setDiscordList([{name:"SuiRobot",img:"/user_logo.png",id:"1"},{name:"SuiRobot2",img:"/user_logo.png",id:"2"}])
        Select("1",0)
    }

    const Select = (id,index) =>{
        setSelectDiscord(index)

        router.push(`/dashboard/${id}`)
    }



    return(
        <>
            <div className="hidden w-80 overflow-y-auto md:block">

                <div className="flex w-full  h-screen ">

                    <div className="p-4  bg-neutral-900 ">
                        <img
                            className="border-b  w-12 h-12  pb-2"
                            src="https://cc.collab.land/static/media/Logo-Mark-Color.cfa3e870.svg"
                            alt="Your Company"
                        />
                        <div className={discordList[0].name ==""? "hidden":"mt-3 "}>
                            {discordList.map((item,index)=>(
                                // border-l-2 border-amber-400
                                    <button key={item.name} onClick={()=>{Select(item.id,index)}} className={" flex mb-3"}>
                                    <img className="rounded-lg w-12 h-12 border border-gray-100 " src={item.img} alt=""/>
                                    </button>
                            ))}
                        </div>

                        <div className="gap-3 mt-3">
                            <button onClick={AddDiscordList} className="text-white w-12 h-12 text-2xl  border-yellow-500 border rounded-lg ">
                                <i className="fa fa-plus" aria-hidden="true" />
                            </button>

                        </div>
                    </div>

                    <div className=" h-screen w-full flex flex-col justify-between  bg-neutral-800  ">
                        <div className="px-3 pt-3">
                        <div className={"text-white p-3 flex items-center"}>
                            {/*<img className="w-6 h-6 rounded-full mr-2" src="/discord 1.svg" alt=""/> */}
                            {discordList[0].name == "" ? "---------" : `${discordList[selectDiscord].name}`}
                        </div>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div className="text-xs  font-medium text-gray-200">
                                    Administration
                                </div>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} legacyBehavior>
                            <a
                                className={classNames(
                                    item.current ? ' text-white' : 'text-white/20',
                                    'group flex w-full  items-center  text-sm  font-medium'
                                )}
                            >
                                <span className="">{item.name}</span>
                            </a>
                            </Link>
                        ))}
                            </div>
                    </div>

                        <div className="bg-neutral-700  px-4 py-3   items-center flex justify-between">
                            <div className="flex items-center">
                                    <img className="rounded-full w-6 h-6" src="https://cdn.discordapp.com/avatars/876496252269903873/231c8fa0ab999ee0e6236760b8fa35d6.png" alt=""/>
                                    <div className="text-sm text-white font-semibold ml-2">
                                        Green.
                                    </div>
                            </div>
                            <div>
                                <button onClick={()=>{setLoginOut(true)}} className="text-white text-xl text-gray-400">
                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20 md:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-black pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-1 right-0 -mr-14 p-1">
                                        <button
                                            type="button"
                                            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            <span className="sr-only">Close sidebar</span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <img
                                        className=" w-auto"
                                        src="LOGO.svg"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                    <nav className="flex h-full flex-col">
                                        <div className="space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? ' text-white'
                                                            : '',
                                                        'group flex items-center rounded-md py-2 px-3 text-sm font-medium'
                                                    )}
                                                >

                                                    <span>{item.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={loginOut} as={Fragment}>
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
                                       Log out
                                   </div>

                                    <div className="text-center py-5 text-white font-light">
                                        Are you sure you want to log out?
                                    </div>

                                    <div className="flex justify-center ">
                                        <button onClick={() => setLoginOut(false)}  className=" border border-white text-white w-36 py-1.5 rounded-xl mr-5">
                                            Cancel
                                        </button>
                                        <button  onClick={()=>{
                                            setLoginOut(false)
                                            window.location.replace("/login")
                                        }} className="bg-red-500  text-white w-36 py-1.5 rounded-xl mr-5">
                                            Log out
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
export default Left_header
