// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');


// constants
const urls = [
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1618355281112-e1c89201b2d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1652278854423-e56b8bb1b80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1624513764370-f29d72dc4e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
    'https://images.unsplash.com/photo-1646495003511-5906221732be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80'


];

// variables
let cardCount = 0;

// functions
function appendNewCard(){
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        onLike:() => {
            like.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            like.classList.toggle('trigger')

        },
        onDislike:()=>{
            dislike.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            dislike.classList.toggle('trigger')

        }
    });
   // card.element.style.setProperty('--i',cardCount%5);
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing');
    cards.forEach((card,index)=>{
        card.style.setProperty('--i', index);
  });
}

//first 5 cards
for(let i=0;i<5;i++){
    appendNewCard();
}