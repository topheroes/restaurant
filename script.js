const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const cards = document.querySelector('.cards');

let current = 0;
let width = window.getComputedStyle(cards);

width = parseInt(width.width);
const cardList = document.querySelectorAll('.cards__img');
const handleNextClick = (e)=>{
    
    const next = (current + 1) % (cardList.length / 3);
    
    cardList.forEach( (e)=>{
        console.log( `${-width * next}px`);
        
        e.style.left =  `${-width * next}px`
    }   );

    current = next;

}
nextArrow.addEventListener('click', handleNextClick)

const handlePrevClick = (e) => {
    const prev = (current - 1) % (cardList.length / 3);

    cardList.forEach( (e)=>{
        console.log( `${width * prev}px`);
        
        e.style.left =  `${width * prev}px`
    }   );

    current = prev;

} 
prevArrow.addEventListener('click', handlePrevClick)