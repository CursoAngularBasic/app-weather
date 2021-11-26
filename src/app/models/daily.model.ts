import { Hourly } from "./hourly.model";
import { Temp } from "./temp.model";

export class Daily extends Hourly{
    moonrise!: number;
    moonset!: number;
    moon_phase!: number;
    temp!:Temp;
    clouds!: number;
    uvi!: number;
    fecha!:string
}