class Card{

    constructor({
        imageUrl,
        onDismiss,
        onLike,
        onDislike
    }){
        this.imageUrl = imageUrl;
        this.onDismiss = onDismiss;
        this.onLike = onLike;
        this.onDislike = onDislike;
        this.#init();
    }

    //private properties
    #startPoint;
    #offsetX;
    #offsetY;


    //private methods
    #init = ()=>{
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = this.imageUrl;
        card.append(img);
        this.element = card;
        this.#listenToMouseEvents();
    }

    #listenToMouseEvents= () => {
        // mouse down
        this.element.addEventListener('mousedown',e=>{
           const {clientX, clientY}=e;
           this.#startPoint = {x:clientX,y:clientY};
           //no transition when moving
           this.element.style.transition='';
           document.addEventListener('mousemove',this.#handleMouseMove);
        });
       
        // mouseup
        document.addEventListener('mouseup',this.#handleMouseUp);
        
        // prevent drag
        this.element.addEventListener('dragstart',e=>{
            e.preventDefault();
        });
    }

    #handleMouseMove=(e) => {
        if(!this.#startPoint) return;
        const {clientX, clientY} = e;
        this.#offsetX = clientX - this.#startPoint.x;
        this.#offsetY = clientY - this.#startPoint.y;

        const rotate = this.#offsetX * 0.1;

        this.element.style.transform = `translate(${this.
        #offsetX}px, ${this.#offsetY}px) rotate(${rotate}deg)`;

        //dismiss card when moving too far away
        if(Math.abs(this.#offsetX) > this.element.clientWidth * 0.7){
            const direction = this.#offsetX > 0 ? 1 : -1;
            this.#dismiss(direction);
        }
       

    }
    #handleMouseUp= (e) => {
        this.#startPoint = null;
        document.removeEventListener('mousemove',this.#handleMouseMove);
        // transition when move back
        this.element.style.transition='transform 0.5s';
        this.element.style.transform = '';


    }

    #dismiss = (direction)=>{
        this.#startPoint = null;
        document.removeEventListener('mouseup',this.#handleMouseUp);
        document.removeEventListener('mousemove',this.#handleMouseMove);

        this.element.style.transition = 'transform 1s';
        this.element.style.transform = `translate(${direction * window.innerWidth}px,
             ${this.#offsetY}px) rotate(${90 * direction}deg)`;
             this.element.classList.add('dismissing');
             setTimeout(()=>{
               this.element.remove();
             }, 1000);
             
             if(typeof this.onDismiss === 'function'){
                this.onDismiss();
             }
             if(typeof this.onLike === 'function' && 
             direction ===1){
                this.onLike();
                console.log('like')
             }
             if(typeof this.onDislike === 'function' &&
             direction === -1){
                this.onDislike();
                console.log('dislike')
             }
                   
    }

}

function helpFunction() {    
    alert("Swipe right to like the user, swipe left to skip. If you match you can chat in the messages page.");
};

  //  alert("For an opportunity to match, swipe left if you don't like and right if you do!");


