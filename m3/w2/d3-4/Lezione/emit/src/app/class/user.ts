import { IUser } from "../interface/user";

export class User implements IUser {
    name: string;
    lastName: string;
    gender: string;

    constructor(name: string, lastName: string, gender: string){
        this.name= name;
        this.lastName= lastName;
        this.gender= gender;
    }
}
