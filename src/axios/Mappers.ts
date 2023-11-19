import axios from "axios";
import { config as URLCONFIG } from "./URLConfig";

async function getMappers(): Promise<MappersData | null> {
    return await axios(URLCONFIG.DEAMON_PARSE_MAPPERS_URL)
        .then((response) => {
            return response.data as MappersData
        })
        .catch((error) => {
            console.log(error)
            return null
        })
}

async function getSkinSrcPath(skinName: string): Promise<string> {
    const defaultSkin = "./src/assets/svg/logo.svg"
    let skinSrcPath: string = defaultSkin
    const skins: SkinsData = await axios.get(URLCONFIG.DEAMON_PROTOCOL_SKINS_URL) // detect ddnetDB
        .then((response) => {
            if (response.status === 200) return response.data
        }).catch((error) => console.log(error))
    let type;
    for (const item of skins.skins) {
        if (item.name === skinName) {
            type = item.type
            switch (type) { // detect user skin is in the database
                case "normal":
                    skinSrcPath = URLCONFIG.DDNET_SKINS_NORMAL_URI + skinName + '.' + item.imgtype
                    break
                case "community":
                    skinSrcPath = URLCONFIG.DDNET_SKINS_COMMUNITY_URI + skinName + '.' + item.imgtype
                    break
            }
            break
        }
    }

    if (skinSrcPath === defaultSkin) { // not in the ddnetDB, now detect TEEDATA
        const url = new URL(URLCONFIG.TEEDATA_SKINS_URL)
        // get params
        url.searchParams.set("name", skinName)
        skinSrcPath = await axios.get(url.toString()).then(response => {
            const srcPath = response.data
            if (response.status !== 404) { // get skinSrc at TEEDATA
                return `https://teedata.net/databasev2${srcPath}`
            }
            return skinSrcPath
        }).catch(err => {
            console.log(err)
            return skinSrcPath
        })
    }
    return skinSrcPath
}

async function getAuthor(name: string): Promise<TeeData_Author> {
    const url = new URL(URLCONFIG.TEEDATA_AUTHOR_URL)
    url.searchParams.set("name", name.replace(/[\u4e00-\u9fa5]/g, ''))
    const result = await axios.get(url.toString()).then(res => {
        if (res.status !== 404) {
            return res.data
        }
        return null

    }).catch(err => {
        console.log(err)
        return null
    })
    return result
}

export {
    getMappers,
    getSkinSrcPath,
    getAuthor
}

