type Points = { points: number, rank: number }
type TotalPoints = { total: number } & Points

type MapTypes = "Novice" | "Moderate" | "Brutal" | "Insane" | "Dummy" | "DDmaX.Easy" | "DDmaX.Next" | "DDmaX.Pro" | "DDmaX.Nut" | "Oldschool" | "Solo" | "Race" | "Fun"

type MapRecord = { timestamp: number, map: string, time: number }
type MapRecordLastFinished = MapRecord & { country: Countries, type: MapTypes }
type MapFinished = Points & { total_finishes: number, finishes: number, time: number, first_finish: number }
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
    activity: Array<{ data: string, hours_played: number }>
    hours_played_past_365_days: number
}

interface UserInfo {
    name: Ref<String>
    country: Ref<Countries>
    skin: Ref<String>
    details: Ref<PlayerInfo>
}