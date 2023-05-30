//the `fruits` array is imported from the `foods.js` file
import fruits from './foods';
//the `choice` and `remove` functions are imported from the `helpers.js` file
import { choice, remove } from './helpers';

//the `choice` function is used to randomly select a fruit from the `fruits` array and store it in the `fruit` variable
const fruit = choice(fruits);
//the selected fruit is logged to the console using template literals
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');
//the `remove` function is called to remove the selected fruit from the `fruits` array
remove(fruits, fruit);
//the updated length of the `fruits` array is logged to the console
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);