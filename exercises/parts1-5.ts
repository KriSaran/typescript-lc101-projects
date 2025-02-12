// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';
// Part 1: Declare (5) Variables With Type
//let spacecraftName : string='Determination';
//let speedMph : number=17500;
let kiloMetersToMars : number=225000000;
let kiloMetersToMoon : number=384400;
//let milesPerKilometer : number=0.621;


// Part 2: Print Days to Mars

//console.log(milesToMars);
/*function daysToMars(distanceToMars:number): number{
    let milesToMars: number=(distanceToMars*milesPerKilometer);
    let hoursToMars:number=milesToMars/speedMph;
    return hoursToMars/24;

}*/

// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class
class spaceCraft{
    milesPerKilometer: number=0.621;
   name : string;
    speedMph:number;
    constructor(name:string,speedMph:number){
        this.name=name;
        this.speedMph=speedMph;
    }
        getDaysToLocation(kilometersAway:number):number{
        let milesToMoon: number=(kilometersAway*this.milesPerKilometer);
        let hoursToMoon: number=(milesToMoon/this.speedMph);
        return hoursToMoon/24;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
    
};
let spaceShuttle = new spaceCraft('Determination', 17500);

//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(100)} days to get to Moon..`);

//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(100)} days to get to Mars.`);


// Create an instance of the class here:

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kiloMetersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kiloMetersToMoon)); 

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
