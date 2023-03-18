// let counter = 0;
// while(counter <= 50) {
//     console.log(counter);
//     counter++;
// }

// let counter_two = 0;
// while(counter_two >= -50) {
//     console.log(counter_two);
//     counter_two--;
// }

// let counter_three = 2;
// while(counter_three <= 100) {
//     console.log(counter_three);
//     counter_three = counter_three + 2;
// }

let names = [`Cynthia`, `Miggel`, `Isael`];
let points = [5, 8, 12];
let injured = [false, false, false];
let i = 0;


while(i < names.length) {
    if(!injured[i]) {
        console.log(`${names[i]} has scored ${points[i]} points`);
    }
    i++;
}



