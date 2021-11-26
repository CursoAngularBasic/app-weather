import { Weather } from "./weather.model";

export class Current{
    dt!: number;
    sunrise!: number;
    sunset!: number;
    temp!: any;
    feels_like!: number;
    pressure!: number;
    humidity!: number;
    dew_point!: number;
    uvi!: number;
    clouds!:number;
    visibility!: number;
    wind_speed!: number;
    wind_deg!: number;
    weather!: Array<Weather>
}
