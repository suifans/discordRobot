import {atom} from "jotai";


const MobileMenuOpen = atom(false)

const LoadingState = atom(false)

const DiscordList = atom([{name:"",img:"",id:""}])

export {MobileMenuOpen,LoadingState,DiscordList}
