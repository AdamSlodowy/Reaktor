import {schema} from 'normalizr';



export const todo =  new schema.Entity("todos");
export const arrayOfTodos =  new schema.Array(todo);


export const db = [                   //
    {                                 //
        id: 11,                       //
        power: 100,                   // CAR one
        owner: {                      //
            id:1,                     //
            name: "Tomek"             //
        }                             //
    },
    {                                 //
        id: 22,                       //
        power: 300,                   // CAR two
        owner: {                      //
            id:2,                     //
            name: "Adam"              //
        }                             //
    },
    {                                 //
        id: 33,                       //
        power: 500,                   // CAR one
        owner: {                      //
            id:1,                     //
            name: "Tomek"             //
        }                             //
    },

];
export const owner = new schema.Entity("wlasciciel");
export const car = new schema.Entity("wozek", {owner: owner});
export const carArr = new schema.Array(car);




