//the `choice` function takes an array `items` as input and returns a randomly selected item from that array.
//it generates a random index using `Math.random()` and `Math.floor()` functions then retrieves the item at that index from the `items` array.
export function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

//the `remove` function takes an array `items` and an item `item` as input.
//it removes the first occurrence of the `item` from the `items` array, if it exists.
//it uses the `indexOf` mehtod to find the index of the `item` in the array, and if found, it uses the `splice()` method to remove that item from the array
//the removed item is then returned, or `undefined` if the item was not found in teh array
export function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        return items.splice(index, 1) [0];
    }
    return undefined;
}