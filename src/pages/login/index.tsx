import {useRouter} from "next/router";
const Login = () =>{

    const router = useRouter()


    const login = () =>{
        window.open('https://discord.com/api/oauth2/authorize?client_id=1085234510649622548&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=code&scope=identify%20guilds',"_parent")
        // window.location.replace("https://discord.com/api/oauth2/authorize?client_id=1085234510649622548&redirect_ur[…]%3A3000%2Fdashboards&response_type=code&scope=identify%20guilds")
    }
    return(
        <>
            <div className="bg-[#0B0B0B] w-full h-screen mx-auto">

                <div className="flex flex-col justify-center h-full">

                    <div className="flex justify-center">
                    <button onClick={login} className="px-5 py-1 rounded-full bg-red-500 text-white ">
                        Login
                    </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login
