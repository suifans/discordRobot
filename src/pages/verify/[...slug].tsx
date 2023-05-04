import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {client} from "../../client";
import {useAtom} from "jotai";
import {LoadingState, VerifyPop_up_boxState, VerifyState} from "../../jotai";
import Pop_up_box from "../../components/pop_up_box";
import Loading from "../../components/loading";
import {ethos, EthosConnectStatus, SignInButton} from "ethos-connect";

const  NextPage = () => {
    const router = useRouter()
    const { wallet,status } = ethos.useWallet()
    const nfts = wallet?.contents?.nfts;
    const [userDetail,setUserDetail]  = useState({id:"",userName:"",avatar:""})
    const [guildDetail,setGuildDetail]  = useState({id:"",guildName:"",icon:""})
    const [,setSop_up_boxState] = useAtom(VerifyPop_up_boxState)
    const [,setVerifyState] =useAtom(VerifyState)
    const [,setOpenLoading] =useAtom(LoadingState)
    const [address,setAddress] = useState("")
    useEffect(()=>{
        if(router.isReady){
            // setOpenLoading(true)
            const query = async () => {
                // const guild_id = router.query.slug[0]
                // const user_id = router.query.slug[1]
                // const userInfoRet = await client.callApi('v1/User/GetDcUserInfo', {
                //     user_id
                // });
                // console.log(userInfoRet,guild_id)
                // const userData = JSON.parse(userInfoRet.res.user_info)
                // setUserDetail({
                //     id:userData.id,
                //     userName:userData.username+userData.discriminator,
                //     avatar:userData.avatar}
                // )
                // console.log(userData)
                // const rolesRes = await client.callApi('v1/User/GetDcUserGuildInfo', {
                //     guild_id
                // });
                // const guildData = JSON.parse(rolesRes.res.guild_info)
                // setGuildDetail({
                //     id:guildData.id,
                //     guildName:guildData.name,
                //     icon:guildData.icon}
                // )
                // console.log(guildData)
                // setOpenLoading(false)
            }
            query()
        }
    },[router.isReady])


    useEffect(() => {
        if (!wallet) return
        setAddress(wallet.address)
        ethos.hideSignInModal()
        console.log(wallet.address)
    }, [wallet])


    const verify =async () =>{
        console.log(nfts)
        setOpenLoading(true)
        const getAllRules = await client.callApi('v1/Rules/GetAllRules', {
            guild_id: guildDetail.id
        });

       if(getAllRules.isSucc){
           const rulesList = JSON.parse(getAllRules.res.rule_list)

           console.log(rulesList)
           let state = true
           for(let i=0; i<rulesList.length;i++ ){
               let amount = 0
               for (let x = 0; x < nfts.length; x++) {
                   if(rulesList[i].smart_contract_address == nfts[x].package){
                       amount++
                   }
               }
               if( amount >= rulesList[i].min_token_amount && amount <= rulesList[i].max_token_amount ){
                   const rolesRes = await client.callApi('v1/Verify/VerifyUserSucc', {
                       role_id: rulesList[i].role_id, user_id: userDetail.id, guild_id: guildDetail.id
                   });
                   state= rolesRes.isSucc
                   console.log(rolesRes)
               }else {
                   console.log("not ")
               }
           }
           if(state){
               setOpenLoading(false)
               // location.replace("/verify/result")

           }else {
               setOpenLoading(false)
               setVerifyState({state:false,type:"Verify",hash: ""})
               setSop_up_boxState(true)

           }
       }else {
           setOpenLoading(false)
           setVerifyState({state:false,type:"NetWork",hash: ""})
           setSop_up_boxState(true)
       }


    }

    return (
       <div className="w-screen h-screen bg-black">
           <Pop_up_box/>
           <Loading/>
           <div className="p-10">
           <div className=" rounded-full h-20  p-8 flex justify-between text-black font-semibold text-2xl bg-gray-200 items-center">
               <div>
                   Sui.Robots
               </div>
               <div className="flex items-center">
                   <img className="w-10 h-10 rounded-full mr-4" src={`https://cdn.discordapp.com/avatars/${userDetail.id}/${userDetail.avatar}.png`} alt=""/>

                   <img className="w-12 rounded-full" src={`https://cdn.discordapp.com/icons/${guildDetail.id}/${guildDetail.icon}.png`} alt=""/>

               </div>
           </div>
               <div className="mx-auto max-w-2xl bg-white rounded-lg flex flex-col   mt-10 p-8">
                   <div className="mx-auto text-center">
                   <div className="text-3xl font-semibold ">
                       Verify with Existing Wallets
                   </div>
                   <div className="text-gray-500">
                       Please select a wallet to verify with
                   </div>

                       {status === EthosConnectStatus.Loading ? (
                           <div>Loading...</div>
                       ) : status === EthosConnectStatus.NoConnection ? (

                               <button className="w-36 py-2 mt-4 rounded-lg bg-amber-400 text-white" onClick={ethos.showSignInModal}>Sign in</button>

                       ) : (
                           // status is EthosConnectStatus.Connected
                           <div className="mt-10">
                               <div className="text-left font-light">
                                   Current community
                               </div>
                               <div className=" rounded-xl border border-yellow-400 mt-2">
                                   <div className="text-center rounded-t-xl p-2 bg-yellow-300 text-sm">
                                       SuiRobots
                                   </div>
                                   <div className="text-center rounded-b-lg  text-xs p-3">
                                       Sui {address}
                                   </div>
                               </div>

                               <div className="flex justify-between mt-5">
                                   <button onClick={wallet?.address?verify:()=>{}} className="w-36 text-center bg-gray-500 rounded-lg py-1 text-white
                                   hover:bg-yellow-400 duration-300 ">
                                       Verify
                                   </button>
                                   <button onClick={wallet?.disconnect} className="border-gray-300 w-36 text-center border-2  rounded-lg py-1 text-gray-400
                                   hover:bg-red-500 duration-300 hover:border-red-500 hover:text-white">
                                       Disconnect
                                   </button>
                               </div>

                               <button  onClick={ethos.showSignInModal} className="mt-8 text-sm">
                                   Verify with a New Wallet
                               </button>

                           </div>
                       )}

                   </div>
               </div>

       </div>
       </div>
    );
};

export default NextPage;
