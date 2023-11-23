type Points = { points: number, rank: number } | null
type TotalPoints = { total: number } & Points | null

type MapTypes = "Novice" | "Moderate" | "Brutal" | "Insane" | "Dummy" | "DDmaX.Easy" | "DDmaX.Next" | "DDmaX.Pro" | "DDmaX.Nut" | "Oldschool" | "Solo" | "Race" | "Fun"

type MapRecord = {
    timestamp: number,
    map: string,
    time: number
}
type MapRecordLastFinished = MapRecord & {
    country: Countries,
    type: MapTypes
}
type MapFinished = {
    points: number,
    total_finishes: number,
    finishes: number,
    team_rank?: number,
    rank?: number,
    time?: number,
    first_finish?: number,
}

type MapTypePoints = {
    [key in MapTypes]: {
        points: TotalPoints
        team_rank: Points
        rank: Points
        maps: { [key: string]: MapFinished }
    }
};

type PlayerInfo = {
    player: string
    points: TotalPoints
    team_rank: Points
    rank: Points
    points_last_month: Points
    points_last_week: Points
    first_finish: MapRecord
    last_finishes: Array<MapRecordLastFinished>
    favorite_partners: Array<{ name: string, finishes: number }>
    types: MapTypePoints
    activity: Array<{ date: string, hours_played: number }>
    hours_played_past_365_days: number
}

type UserInfo = {
    date: Ref<string>
    name: Ref<String>
    country: Ref<Countries>
    skinName: Ref<String>
    skinSrcPath: Ref<String>
    playerInfo: Ref<PlayerInfo>
    mappersInfo: Ref<MappersData>
    teedataAuthorInfo: Ref<TeeData_Author>
    /**
     * @type {Ref<Date>}
     * @description the userinfo updated date stamp
     */
    stamp: Ref<Date>
    isFirstComeIn: Ref<boolean>
}