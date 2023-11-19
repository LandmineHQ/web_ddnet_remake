const config = {
    DEAMON_PARSE_MAPPERS_URL: "./mappers",
    DEAMON_PROTOCOL_SKINS_URL: "./skins",
    TEEDATA_AUTHOR_URL: "./teedata/author?name=Landmine地雷",
    TEEDATA_SKINS_URL: "./teedata/skinSource?name=default",
    DDNET_PLAYER_INFO_URL: "https://ddnet.org/players/?json2=Landmine地雷",
    DDNET_SKINS_NORMAL_URI: "https://ddnet.org/skins/skin/",
    DDNET_SKINS_COMMUNITY_URI: "https://ddnet.org/skins/skin/community/",
}

if (import.meta.env.DEV) {
    config.DEAMON_PARSE_MAPPERS_URL = "http://localhost:3000/mappers"
    config.DEAMON_PROTOCOL_SKINS_URL = "http://localhost:3000/skins"
    config.TEEDATA_AUTHOR_URL = "http://localhost:3000/teedata/author?name=Landmine地雷"
    config.TEEDATA_SKINS_URL = "http://localhost:3000/teedata/skinSource?name=default"
}

export { config }