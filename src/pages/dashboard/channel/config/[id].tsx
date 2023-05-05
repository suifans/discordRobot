import Left_header from "../../../../components/left_header";
import Top_header from "../../../../components/top_header";
import {useAtom} from "jotai";
import {DiscordList} from "../../../../jotai";
import {useEffect, useState} from "react";
import {request} from "undici";
import {useRouter} from "next/router";
import { Switch } from "@headlessui/react";
import {CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, XMarkIcon} from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Config = () =>{
    const router = useRouter()
    const [enabled, setEnabled] = useState(false)

    const [checkLoading,setCheckLoading] = useState(false)

    const [openState,setOpenState] = useState(false)
    const [checkState,setCheckState] = useState(false)
    useEffect(()=>{

        if(router.isReady){
        }

    },[router.isReady])

    const check = () =>{
        if(!checkLoading){
            setCheckLoading(true)

            setTimeout(()=>{
                setCheckLoading(false)
                setCheckState(true)
                setOpenState(true)
            },3000)
        }

    }

    return (
        <div className="h-screen ">
            <div className="flex h-full">
                <Left_header/>
                <div className="flex w-full flex-col overflow-hidden">
                    <Top_header/>
                    {/* Main content */}

                    <div className={"h-screen  overflow-y-auto bg-black p-10"}>

                        <div className={openState?"":"hidden"}>
                        <div className={checkState?"rounded-md bg-green-300/50 p-4 py-6  xl:w-1/2":"hidden"}>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <CheckCircleIcon className="h-7 w-7 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className=" font-medium text-white text-xl font-semibold">Check complete</p>
                                    <div className="text-sm  text-gray-100 mt-5">
                                        No errors found in bot configuration.
                                    </div>
                                </div>
                                <div className="ml-auto pl-3">
                                    <div className="-mx-1.5 -my-1.5">
                                        <button
                                            onClick={()=>{setOpenState(false)}}
                                            type="button"
                                            className="inline-flex rounded-md  p-1.5 text-white "
                                        >
                                            <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={checkState?"hidden":"rounded-md bg-yellow-50 p-4 py-6  xl:w-1/2"}>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                                            totam eius aperiam dolorum.
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-auto pl-3">
                                    <div className="-mx-1.5 -my-1.5">
                                        <button
                                            onClick={()=>{setOpenState(false)}}
                                            type="button"
                                            className="inline-flex rounded-md  p-1.5 text-black "
                                        >
                                            <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="text-white text-2xl font-semibold mt-5">
                            Bot config
                        </div>
                        <div className="pt-10 grid grid-cols-1 gap-4 text-white xl:w-1/2 2xl:w-4/12">
                            <div className="flex justify-between items-center pb-5">
                                <div>
                                    Background balance check
                                    <div className="text-neutral-500 text-sm mt-2">
                                        Membership verification in regular intervals is enabled.
                                    </div>
                                </div>

                                <div className="">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none '
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        >
        <span
            className={classNames(
                enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                                    </Switch>
                                </div>

                            </div>

                            <div className="flex justify-between items-center border-t border-neutral-500 pt-5">
                                <div>
                                    Check Bot Configuration
                                    <div className="text-neutral-500  text-sm mt-2">
                                        Check if the bot is properly configured
                                    </div>
                                </div>

                                <button onClick={check}  className={classNames(checkLoading?"bg-white text-black":"hover:bg-neutral-900 duration-500",'border border-white rounded-xl text-center px-10 py-2 ')}>
                                    {checkLoading?"Checking...":"Check configuration"}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}










export default Config


