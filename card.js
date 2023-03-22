class Card{
    constructor({
        imageUrl,
    }){
        this.imageUrl = imageUrl;
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
           document.addEventListener('mousemove',this.#handleMouseMove);
        });


    }

    #handleMouseMove=(e) => {
        if(!this.#startPoint) return;
        const {clientX, clientY} = e;
        this.#offsetX = clientX - this.#startPoint.x;
        this.#offsetY = clientY - this.#startPoint.y;
        this.element.style.transform = `translate(${this.
        #offsetX}px, ${this.#offsetY}px)`;
       

    }
}