"use strict";

const life = {
    lucky: {
        image: "https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg",
        message: "you are a lucky man!"
    },
    unlucky: {
        image: "https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866_1280.jpg",
        message: "not your day..."
    }
};

const choice = Math.floor( Math.random() * 2 ) ? 'lucky' : 'unlucky';
console.log(`here it is : ${choice}`);

wallpaper.src = life[ choice ].image;
message.textContent = life[ choice ].message;
