/**
 * BUILD this object described below and then solve the problems followed.
 * Howdy friend! Thank you so much for doing this. I'm thinking this all out loud, so be patient with me. I would like to organize my menu items so that its easy to access for my team. Here is an example of one of our items, hopefully, you can create an object out of it!

 * The name of this new item is called Kale Caesar Salad
 * However, the chef nicknamed it All Hail Kale.
 * When a customer orders this item, the reference id is SLD001
 * Here is the description of this item, "Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist"
 * This item is not high in calories
 * The ingredients includes: Kale, Caesar dressing, Anchovy paste, Grilled corn, Parmesan cheese, and Croutons
 * I would like the computer to automatically tell the chef how many ingredients are in this item
 */
const caesarSalad = {
    nickName: "All Hail Kale",
    reference: "SLD001",
    description: "Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist",
    highCalories: false,
    ingredients: ["Kale", "Caesar dressing", "Anchovy paste", "Grilled corn", "Parmesan cheese","Croutons"]
}

// 1
// It would be nice to track the year I added the dish to my menu. My salad was added in 2017.
caesarSalad.yearAdded = 2017;
console.log(caesarSalad);
// 2
// Although we provide breakfast, lunch, and dinner, not all dishes are available around the clock. Please add something to track which menu the dish will be featured on. The Kale Caesar Salad is for lunch and dinner.
caesarSalad.meal = ["lunch", "dinner"];
console.log(caesarSalad);

// 3
// Yikes! When I first did the menu, I broke dishes down to low and high in calories.  I don't like this anymore, so can you remove it and change it to the number of calories? The Kale Caesar Salad stands at 560 calories.
delete caesarSalad.highCalories;
console.log(caesarSalad);

// 4
// Don't you think the nickname is stupid? Remove it.
delete caesarSalad.nickName;
console.log(caesarSalad);

// 5
// OMG!  I forgot to add lemon juice to the list of ingredients.  Can you add this?
caesarSalad.ingredients.push("lemon juice");
console.log(caesarSalad);

// 6
// I want to make sure that I don't use too many ingredients for this menu item. Can you please tell me how many I am currently using?
console.log(caesarSalad.ingredients.length); // 7
