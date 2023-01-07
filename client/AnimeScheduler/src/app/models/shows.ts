import { Season } from "./seasons";
import { Weekday } from "./weekday";

export interface Show{
    id: number;
    name: string;
    link?: string;
    season: string;
    year: number;
    weekday: Weekday;
    completed: boolean;
    episodeOn?: number;
    episodeTotal: number;
    startDate?: Date;
    endDate?: Date;
    seasonOn?: number
}

export interface ShowView{
    id: number;
    name: string;
    season: Season;
    year: Date;
    weekday: Weekday;
    episodeOn?: number;
    episodeTotal: number;
    startDate?: Date;
    endDate?: Date;
    seasonOn?: number  
}

//Notes:
/*
Season is an enum
weekday is an enum
watchdate is a date which needs to be piped
same for release date
*/