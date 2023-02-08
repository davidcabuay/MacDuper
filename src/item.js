
export const  itemArr = [
    {
        name: 'screwdriver',
        img: '/scripts/temp.png',
        id: 0
    },
    {
        name: 'copper wire',
        img: '/scripts/temp.png',
        id: 1
    },
    {
        name: 'sharpie',
        img: '/scripts/temp.png',
        id: 2
    },
    {
        name: 'paper clip',
        img: '/scripts/temp.png',
        id: 3
    },
    {
        name: 'paper towel',
        img: 'paper towel',
        id: 4
    },
    {
        name: 'toothpaste',
        img: '/scripts/temp.png',
        id: 5
    },
    {
        name: 'toothbrush',
        img: '/scripts/temp.png',
        id: 6
    },
    {
        name: 'quarter',
        img: '/scripts/temp.png',
        id: 7
    },
    {
        name: 'tide pod',
        img: '/scripts/temp.png',
        id: 8
    },
    {
        name: 'pizza',
        img: '/scripts/temp.png',
        id: 9
    },
    {
        name: 'loose thread',
        img: '/scripts/temp.png',
        id: 10
    },
    {
        name: 'hotdog',
        img: '/scripts/temp.png',
        id:11
    }
]

const itemWidth= 40;
const itemHeight = 30;

const maxHeight = canvas.offsetHeight - itemHeight;
const maxWidth = canvas.offsetWidth - itemWidth;

const randomCoordinate = function(){
    const x = Math.floor( Math.random() * maxWidth);
    const y = Math.floor( Math.random () * maxHeight);
    const r = [x,y];
    return r;
}




class Item{



}

module.exports = Item;