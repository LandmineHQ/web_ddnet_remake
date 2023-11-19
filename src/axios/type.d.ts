interface MappersData {
    total: number
    authors: {
        [name: string]: {
            total?: number
            type?: { [key: string]: number }
        }
    }
}

type SkinsData = {
    version: string
    skins: Array<{
        name: string
        type: "normal" | "community"
        hd: { udh: boolean }
        creator: string
        license: string
        bodypart: string
        gameversion: "tw-0.6" | string
        date: string
        skinpack: string
        imgtype: "png"
    }>
}

type TeeData_SKIN = {
    id: number,
    name: string,
    folder_path: string,
    file_path: string,
    thumbnail_path: string,
    extension: ".png",
    author_id: number,
    checksum: string,
    size: number,
    width: number,
    height: number,
    status: string,
    created_at: string,
    updated_at: string,
    author: {
        id: number,
        name: string,
        country_code: Countries,
        created_at: string,
        updated_at: string,
        avatar: {
            "id": 1664,
            "skin_id": 1,
            "created_at": "2023-09-26T13:33:04.689Z",
            "updated_at": "2023-09-26T13:33:04.000Z",
            "user_id": 1793,
            "skin": {
                "id": 1,
                "name": "default",
                "folder_path": "/skins/default",
                "file_path": "/skins/default/default.png",
                "thumbnail_path": "/skins/default/default.thumbnail.png",
                "extension": ".png",
                "author_id": 1,
                "checksum": "dcb7dfca2cc5c177466b746e9db7e5f0",
                "size": 3774,
                "width": 256,
                "height": 128,
                "status": "accepted",
                "created_at": "2023-09-22T04:29:01.243Z",
                "updated_at": "2023-09-22T04:29:01.243Z"
            }
        },
        "roles": [
            {
                "id": 2,
                "name": "member",
                "created_at": "2023-09-22T04:29:01.113Z",
                "updated_at": "2023-09-22T04:29:01.113Z"
            }
        ],
        "_count": {
            "skins": 14,
            "mapres": 0,
            "gameskins": 0,
            "emoticons": 0,
            "cursors": 0,
            "particles": 0,
            "entities": 0,
            "fonts": 0,
            "templates": 0
        }
    },
    _count: { downloads: number }
}

type TeeData_Author = {
    "id": number,
    "name": string,
    "country_code": string,
    "created_at": string,
    "updated_at": string,
    "avatar": {
        "id": number,
        "skin_id": number,
        "created_at": string,
        "updated_at": string,
        "user_id": number,
        "skin": {
            "id": number,
            "name": string,
            "folder_path": string,
            "file_path": string,
            "thumbnail_path": string,
            "extension": ".png",
            "author_id": string,
            "checksum": string,
            "size": number,
            "width": number,
            "height": number,
            "status": string,
            "created_at": string,
            "updated_at": string
        }
    },
    "roles": [
        {
            "id": number,
            "name": string,
            "created_at": string,
            "updated_at": string
        }
    ],
    "_count": {
        skins: number,
        mapres: number,
        gameskins: number,
        emoticons: number,
        cursors: number,
        particles: number,
        entities: number,
        fonts: number,
        templates: number
    }
}