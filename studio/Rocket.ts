import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {//implements Payload{
    name:string;
    totalCapacity: number;
    cargoItems: Cargo[]=[];
    astronauts:Astronaut[]=[];
   // massKg:number;
constructor(name:string,totalCapacity:number){
    this.name=name;
    this.totalCapacity=totalCapacity;
}
sumMass(items: Payload[]): number {
    let total: number = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].massKg;
    }
    return total;
  }
  currentMassKg(): number{
    return this.sumMass(this.astronauts)+ this.sumMass(this.cargoItems);;
  }
  canAdd(item: Payload): boolean{
    return item.massKg+this.currentMassKg() <= this.totalCapacity;
  }
 
  addCargo(cargo: Cargo): boolean{

    if(this.canAdd(cargo)){
        this.cargoItems.push(cargo);
        return true;
    }
    return false;
  }

  addAstronaut(astronaut: Astronaut): boolean{
    if(this.canAdd(astronaut)){
        this.astronauts.push(astronaut);
        return true;
    }
    return false;
  }


}