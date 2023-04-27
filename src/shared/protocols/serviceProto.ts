import { ServiceProto } from 'tsrpc-proto';
import { ReqHello, ResHello } from './v1/Hello/PtlHello';
import { ReqAddRule, ResAddRule } from './v1/Rules/PtlAddRule';
import { ReqDelRule, ResDelRule } from './v1/Rules/PtlDelRule';
import { ReqGetAllRules, ResGetAllRules } from './v1/Rules/PtlGetAllRules';
import { ReqAddDcUserTestRules, ResAddDcUserTestRules } from './v1/Test/PtlAddDcUserTestRules';
import { ReqAddDcUserTestRulesNumber, ResAddDcUserTestRulesNumber } from './v1/Test/PtlAddDcUserTestRulesNumber';
import { ReqDelDcUserTestRulesNumber, ResDelDcUserTestRulesNumber } from './v1/Test/PtlDelDcUserTestRulesNumber';
import { ReqGetDcUserTestRules, ResGetDcUserTestRules } from './v1/Test/PtlGetDcUserTestRules';
import { ReqGetDcUserTestRulesNumber, ResGetDcUserTestRulesNumber } from './v1/Test/PtlGetDcUserTestRulesNumber';
import { ReqGetDcNavUserToken, ResGetDcNavUserToken } from './v1/User/PtlGetDcNavUserToken';
import { ReqGetDcUserAllGuilds, ResGetDcUserAllGuilds } from './v1/User/PtlGetDcUserAllGuilds';
import { ReqGetDcUserGuildInfo, ResGetDcUserGuildInfo } from './v1/User/PtlGetDcUserGuildInfo';
import { ReqGetDcUserInfo, ResGetDcUserInfo } from './v1/User/PtlGetDcUserInfo';
import { ReqGetDcUserToken, ResGetDcUserToken } from './v1/User/PtlGetDcUserToken';
import { ReqVerifyUserSucc, ResVerifyUserSucc } from './v1/Verify/PtlVerifyUserSucc';

export interface ServiceType {
    api: {
        "v1/Hello/Hello": {
            req: ReqHello,
            res: ResHello
        },
        "v1/Rules/AddRule": {
            req: ReqAddRule,
            res: ResAddRule
        },
        "v1/Rules/DelRule": {
            req: ReqDelRule,
            res: ResDelRule
        },
        "v1/Rules/GetAllRules": {
            req: ReqGetAllRules,
            res: ResGetAllRules
        },
        "v1/Test/AddDcUserTestRules": {
            req: ReqAddDcUserTestRules,
            res: ResAddDcUserTestRules
        },
        "v1/Test/AddDcUserTestRulesNumber": {
            req: ReqAddDcUserTestRulesNumber,
            res: ResAddDcUserTestRulesNumber
        },
        "v1/Test/DelDcUserTestRulesNumber": {
            req: ReqDelDcUserTestRulesNumber,
            res: ResDelDcUserTestRulesNumber
        },
        "v1/Test/GetDcUserTestRules": {
            req: ReqGetDcUserTestRules,
            res: ResGetDcUserTestRules
        },
        "v1/Test/GetDcUserTestRulesNumber": {
            req: ReqGetDcUserTestRulesNumber,
            res: ResGetDcUserTestRulesNumber
        },
        "v1/User/GetDcNavUserToken": {
            req: ReqGetDcNavUserToken,
            res: ResGetDcNavUserToken
        },
        "v1/User/GetDcUserAllGuilds": {
            req: ReqGetDcUserAllGuilds,
            res: ResGetDcUserAllGuilds
        },
        "v1/User/GetDcUserGuildInfo": {
            req: ReqGetDcUserGuildInfo,
            res: ResGetDcUserGuildInfo
        },
        "v1/User/GetDcUserInfo": {
            req: ReqGetDcUserInfo,
            res: ResGetDcUserInfo
        },
        "v1/User/GetDcUserToken": {
            req: ReqGetDcUserToken,
            res: ResGetDcUserToken
        },
        "v1/Verify/VerifyUserSucc": {
            req: ReqVerifyUserSucc,
            res: ResVerifyUserSucc
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 12,
    "services": [
        {
            "id": 12,
            "name": "v1/Hello/Hello",
            "type": "api"
        },
        {
            "id": 6,
            "name": "v1/Rules/AddRule",
            "type": "api"
        },
        {
            "id": 9,
            "name": "v1/Rules/DelRule",
            "type": "api"
        },
        {
            "id": 10,
            "name": "v1/Rules/GetAllRules",
            "type": "api"
        },
        {
            "id": 13,
            "name": "v1/Test/AddDcUserTestRules",
            "type": "api"
        },
        {
            "id": 14,
            "name": "v1/Test/AddDcUserTestRulesNumber",
            "type": "api"
        },
        {
            "id": 17,
            "name": "v1/Test/DelDcUserTestRulesNumber",
            "type": "api"
        },
        {
            "id": 15,
            "name": "v1/Test/GetDcUserTestRules",
            "type": "api"
        },
        {
            "id": 16,
            "name": "v1/Test/GetDcUserTestRulesNumber",
            "type": "api"
        },
        {
            "id": 18,
            "name": "v1/User/GetDcNavUserToken",
            "type": "api"
        },
        {
            "id": 5,
            "name": "v1/User/GetDcUserAllGuilds",
            "type": "api"
        },
        {
            "id": 4,
            "name": "v1/User/GetDcUserGuildInfo",
            "type": "api"
        },
        {
            "id": 2,
            "name": "v1/User/GetDcUserInfo",
            "type": "api"
        },
        {
            "id": 8,
            "name": "v1/User/GetDcUserToken",
            "type": "api"
        },
        {
            "id": 11,
            "name": "v1/Verify/VerifyUserSucc",
            "type": "api"
        }
    ],
    "types": {
        "v1/Hello/PtlHello/ReqHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "hello",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Hello/PtlHello/ResHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Rules/PtlAddRule/ReqAddRule": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "description",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "chain_type",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "token_type",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "smart_contract_address",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "min_token_amount",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "max_token_amount",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Rules/PtlAddRule/ResAddRule": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Rules/PtlDelRule/ReqDelRule": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Rules/PtlDelRule/ResDelRule": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Rules/PtlGetAllRules/ReqGetAllRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Rules/PtlGetAllRules/ResGetAllRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rule_list",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Test/PtlAddDcUserTestRules/ReqAddDcUserTestRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Test/PtlAddDcUserTestRules/ResAddDcUserTestRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Test/PtlAddDcUserTestRulesNumber/ReqAddDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "description",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "chain_type",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "number",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Test/PtlAddDcUserTestRulesNumber/ResAddDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Test/PtlDelDcUserTestRulesNumber/ReqDelDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Test/PtlDelDcUserTestRulesNumber/ResDelDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Test/PtlGetDcUserTestRules/ReqGetDcUserTestRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Test/PtlGetDcUserTestRules/ResGetDcUserTestRules": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Test/PtlGetDcUserTestRulesNumber/ReqGetDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Test/PtlGetDcUserTestRulesNumber/ResGetDcUserTestRulesNumber": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 2,
                    "name": "rules",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcNavUserToken/ReqGetDcNavUserToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcNavUserToken/ResGetDcNavUserToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserAllGuilds/ReqGetDcUserAllGuilds": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserAllGuilds/ResGetDcUserAllGuilds": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id_list",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserGuildInfo/ReqGetDcUserGuildInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserGuildInfo/ResGetDcUserGuildInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_info",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserInfo/ReqGetDcUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserInfo/ResGetDcUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_info",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserToken/ReqGetDcUserToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/User/PtlGetDcUserToken/ResGetDcUserToken": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Verify/PtlVerifyUserSucc/ReqVerifyUserSucc": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "guild_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "role_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Verify/PtlVerifyUserSucc/ResVerifyUserSucc": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};