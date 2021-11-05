// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }

// }

//THIS IS A SHIORT CUT TO CREATE A MODEL AS ABOVE the difference is in the constructor: add public before prpperty

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}

