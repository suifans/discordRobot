import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";


const MobileMenuOpen = atom(false)

const LoadingState = atom(false)



const VerifyPop_up_boxState = atom(false)

const VerifyState = atom({
    type:"",
    hash:"",
    state:false
})

const USER_ID = atomWithStorage("USER_ID","")
const DiscordUser = atomWithStorage('DiscordUser',{id:"",username:"",avatar:""})

const discordList = [
    { icon: '', id: '',name: "" ,owner:false,permissions:"",permissions_new:""},
]
const DiscordList = atom(discordList)

const DiscordRoleInfo = atom([])

const SelectDiscordList = atom(0)

const OPTIONS = [
    {color:"",name: "",id: "" },
];
const DiscordGuildRoleList = atom(OPTIONS)

export {VerifyPop_up_boxState,VerifyState,DiscordRoleInfo,SelectDiscordList,MobileMenuOpen,LoadingState,DiscordList,DiscordUser,DiscordGuildRoleList,USER_ID}
