interface IVeicoli{
    speed:number;//no modificatori visibilità
    aumentaVelocita(vel?:number):void
    riduciVelocita(vel?:number):void
}

class Automobili implements IVeicoli{
    speed: number;
    aumentaVelocita(vel?:number):void{
        throw new Error("Method not implemented")
    }
    riduciVelocita(vel?:number):void{
        throw new Error("Method not implemented")
    }
}