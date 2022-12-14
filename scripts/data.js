//birds for sale below

let birds = [
    {
        id: 1,
        name: 'africanGreyParrot',
        price: 5000,
        quantity: 1
    },
    {
        id: 2,
        name: 'blueMacaw',
        price: 10000,
        quantity:1
    },
    {
        id: 3,
        name: 'blueAndYellowMacaw',
        price: 12000,
        quantity: 1
    },
    {
        id: 4,
        name: 'budgerigar',
        price: 100,
        quantity: 1
    }
    
];

//bird food for sale below

let birdFeed = [
    {
        id: 5,
        name: 'budgerigarSeed',
        price: 250,
        quantity: 1
    },
    {
        id: 6,
        name: 'parrotSeed',
        price: 350,
        quantity:1
    },
    {
        id: 7,
        name: 'parakeetSeed',
        price: 350,
        quantity: 1
    },
    {
        id: 8,
        name: 'canarySeed',
        price: 440,
        quantity: 1
    }
    
];

//bird houses for sale below (cages)

let birdHouses = [
    {
        id: 9,
        name: 'threeByTwo',
        price: 250,
        quantity: 1
    },
    {
        id: 10,
        name: 'oneByThree',
        price: 6000,
        quantity:1
    },
    {
        id: 11,
        name: 'oneByTwo',
        price: 4500,
        quantity: 1
    },
    {
        id: 12,
        name: 'oneByOne',
        price: 2500,
        quantity: 1
    }
    
];
// for(let bird in birds) {
//     console.log(`${bird[birds].name} ${[].quantity} ${[].price}`);
// }


localStorage.setItem('bird', JSON.stringify(birds))



// for(let feed in birdFeed) {
//     console.log(`${[].name} ${[].quantity} ${[].price}`);
// }

localStorage.setItem('feed', JSON.stringify(birdFeed))



// for(let birdHouse in birdHouses) {
//     console.log(`${[].name} ${[].quantity} ${[].price}`);
// }

localStorage.setItem('houses', JSON.stringify(birdHouses))




// checkout button below


document.getElementById('btn-id').addEventListener ('click', myBTN); 


function myBTN(){
    document.getElementsByClassName('contain').innerHTML
}
