import {Bars3BottomLeftIcon, HomeIcon} from "@heroicons/react/24/outline";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {useAtom} from "jotai";
import {MobileMenuOpen} from "../../jotai";
import {useRouter} from "next/router";


const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Top_header = () =>{

    const [mobileMenuOpen, setMobileMenuOpen] = useAtom(MobileMenuOpen)
    const router = useRouter();
    const [pathname,setPathname] = useState("")
    useEffect(()=>{
        const content = router.pathname
        const fetchUserBounty = async () => {
            setPathname(content)

        }
        fetchUserBounty()

    },[router.query.slug])
    return(
        <>
            <header className="w-full md:hidden">
                <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-500  md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                      <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex flex-1 justify-between px-4 sm:px-6">
                        <div className="flex flex-col justify-center text-black font-semibold ">
                            {pathname== "/home" ? (
                                <div className="">
                                    Welcome to SxDx.
                                </div>

                            ) : pathname=== "/go" ? (
                                    <div>
                                        This is go
                                    </div>
                                ) :
                                <div>
                                    Welcome to SxDx.
                                </div>
                            }
                        </div>
                        <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                            {/* Profile dropdown */}


                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Top_header
