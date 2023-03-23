import {client} from "../../client";

const GetDcUserAllGuilds = async (user_id) =>{
    const allGuildRet = await client.callApi('v1/User/GetDcUserAllGuilds', {
        user_id
    });
    const guild_id_list =JSON.parse(allGuildRet.res.guild_id_list)
    return guild_id_list
}

export {GetDcUserAllGuilds}
