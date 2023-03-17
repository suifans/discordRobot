import {useRouter} from "next/router";
const Login = () =>{

    const router = useRouter()
    return(
        <>
            <div className="bg-[#0B0B0B] w-full h-screen mx-auto">

                <div className="flex flex-col justify-center h-full">

                    <div className="flex justify-center">
                    <button onClick={()=>{window.location.replace("/dashboards")}} className="px-5 py-1 rounded-full bg-red-500 text-white ">
                        Login
                    </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login
