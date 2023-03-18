// let counter = 0;
// while(counter <= 50) {
//     console.log(counter);
//     counter++;
// }

for(let i = 0; i <= 50; i++) {
    console.log(i);
}

// let counter_two = 0;
// while(counter_two >= -50) {
//     console.log(counter_two);
//     counter_two--;
// }

for(let i = 0; i >= -50; i--) {
    console.log(i);
}

// let counter_three = 2;
// while(counter_three <= 100) {
//     console.log(counter_three);
//     counter_three = counter_three + 2;
// }

for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}

let names = [`Cynthia`, `Miggel`, `Isael`];
let points = [5, 8, 12];
let is_injured = [false, false, false];

// let i = 0;
// while(i < names.length) {
//     if(is_injured[i] === false) {
//         console.log(`${names[i]} has scored ${points[i]} points`);
//     }
//     i++;
// }

for(let i = 0; i < names.length; i++) {
    if(is_injured[i] === false) {
        console.log(`${names[i]} has scored ${points[i]} points`);
    }
}

