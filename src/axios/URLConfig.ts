let baseUrl: string = "http://ddnet.landmine.top"
const config = {
    DEAMON_PARSE_MAPPERS_URL: "/mappers",
    DEAMON_PROTOCOL_SKINS_URL: "/skins",
    TEEDATA_AUTHOR_URL: "/teedata/author?name=Landmine地雷",
    TEEDATA_SKINS_URL: "/teedata/skinSource?name=default",
    DDNET_PLAYER_INFO_URL: "https://ddnet.org/players/?json2=Landmine地雷",
    DDNET_SKINS_NORMAL_URI: "https://ddnet.org/skins/skin/",
    DDNET_SKINS_COMMUNITY_URI: "https://ddnet.org/skins/skin/community/",
}
if (import.meta.env.DEV) baseUrl = "https://localhost:3000"
config.DEAMON_PARSE_MAPPERS_URL = baseUrl + config.DEAMON_PARSE_MAPPERS_URL
config.DEAMON_PROTOCOL_SKINS_URL = baseUrl + config.DEAMON_PROTOCOL_SKINS_URL
config.TEEDATA_AUTHOR_URL = baseUrl + config.TEEDATA_AUTHOR_URL
config.TEEDATA_SKINS_URL = baseUrl + config.TEEDATA_SKINS_URL

export { config }