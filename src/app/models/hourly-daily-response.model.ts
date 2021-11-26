import { Current } from "./current.model";
import { Daily } from "./daily.model";
import { Hourly } from "./hourly.model";
import { Minutely } from "./minutely.model";

export class HourlyDailyResponse{
    lat!: number;
    lon!: number;
    timezone!: string;
    timezone_offset!: number;
    current!: Current;
    minutely!: Array<Minutely>;
    hourly!: Array<Hourly>;
    daily!: Array<Daily>;
}