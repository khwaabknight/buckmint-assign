import { Dayjs } from "dayjs"

export type MemberType = {
    id:number,
    name:string,
    email:string,
    image:string,
}

export type MeetingDataType = {
    time:string,
    date:Dayjs,
    members:MemberType[],
}