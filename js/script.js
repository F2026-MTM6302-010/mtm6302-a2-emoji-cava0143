const emojiCodes = [
    127846, 
    127847, 
    127848, 
    127849,
    127850,
    127874,
    127856,
    127851,
    127852,
    127853,
    127854,
    127855];

const gallery = document.querySelector("#emoji-gallery");

function showEmojis(count = emojiCodes.length){
    gallery.innerHTML = ""

    /* Show the emojis from 0 to the maximum that I have. They gonna find based on the const that I created in the beginning emojiCodes, and they gonna string them from the code that I provided. */
    for (let i = 0; i < count; i++){
    const code = emojiCodes[i]; /* Get a number of my array and save to a variable called code */
    const emoji = String.fromCodePoint(code); /* Converts the number on code to a emoji emoji that I added */

    /* Create the card based on the div created on HTML and classList creates a class on html called emoji-card*/
    const card = document.createElement("div");
    card.classList.add("emoji-card");

    /* It shows the emoji img and the decimal code of the emoji */
    card.innerHTML = `
    <span>${emoji}</span>
    <span>${code}</span>
    `;
    /* Create this element as a child of gallery, like emoji-card is a child of mom gallery */
    gallery.appendChild(card);   
    }
}

showEmojis();