/*
    daily-grind.js

    Here are instructions copied from the assignment:
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Here are the items we need for each coffee:
    name - Bubble Tea for example
    pic - An image of Bubble tea
    day - For example, Wednesday. 
    color - a color to match the coffee
    desc - A description of the coffee
*/
let myDate = new Date();
let myDay = myDate.getDay();
let today = '';

switch (myDay) {
  case 0:
    today = 'Sunday';
    break;

  case 1:
    today = 'Monday';
    break;

  case 2:
    today = 'Tuesday';
    break;

  case 3:
    today = 'Wednesday';
    coffee = {
      name: 'Bubble Tea',
      pic: 'images/bubble-tea.jpg',
      day: 'Wednesday',
      alt: 'A pic of bubble tea',
      color: 'pink',
      desc: `I like me some bubble tea!`,
    };
    break;

  default:
    today = 'something went wrong';
}

alert(today);
console.log(coffee);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee) {
  let myReturn = `
            <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;

  return myReturn;
}