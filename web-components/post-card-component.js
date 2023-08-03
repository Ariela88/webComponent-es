class PostCardComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.post) {
            this.shadowRoot.innerHTML = '';

            this.shadowRoot.innerHTML = `
                <style>
                    .card {
                        width: 400px;
                        position: relative;
                        float: right;
                        display: flex;
                        width: 70%;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 16px;
                        padding: 16px;
                        margin-bottom: 4px;
                    }
                    .card img {
                        width: 60%;
                        border-radius: 20px;
                    }
                    .card-title {
                        width: 100%;
                        flex-wrap: wrap;
                        font-size: 20px;
                        font-weight: bold;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                    .card-author {
                        font-size: large;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                    .card-details {
                        display: flex;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                    .card-details {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                </style>
            `;

            const div = document.createElement('div');
            div.classList.add('card');

            const h3 = document.createElement('h3');
            h3.textContent = this.post.title;
            div.appendChild(h3);

            const cardDetailsDiv = document.createElement('div');
            cardDetailsDiv.classList.add('card-details');
           

            const timestamp = this.post.data.created;
            const oreFormattate = toHumanTime(timestamp);
            const timestampDisplayElement = document.createElement('span');
            timestampDisplayElement.classList.add('card-detail');
            timestampDisplayElement.textContent = oreFormattate;
            cardDetailsDiv.appendChild(timestampDisplayElement);

            this.shadowRoot.appendChild(div);

            const cardAuthorSpan = document.createElement('span');
            cardAuthorSpan.classList.add('card-author');
            cardAuthorSpan.textContent = this.post.data.author_fullname;
            div.appendChild(cardAuthorSpan);

            const cardTitleSpan = document.createElement('span');
            cardTitleSpan.classList.add('card-title');
            cardTitleSpan.textContent = this.post.data.title;
            div.appendChild(cardTitleSpan);

            const cardImage = document.createElement('img');
            cardImage.src = this.post.data.thumbnail;
            cardImage.alt = '';
            div.appendChild(cardImage);

            const link = document.createElement('a');
            link.href = this.post.data.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'link al post originale';
            cardDetailsDiv.appendChild(link);
             div.appendChild(cardDetailsDiv);


           
            // const deleteBtn = document.createElement('button');
            // deleteBtn.textContent = 'cancellami';
            // div.appendChild(deleteBtn);
            // deleteBtn.addEventListener('click', () => this.emitEvent());
        }
    }

    emitEvent() {
        const customEvent = new CustomEvent('card-clicked', { detail: this.post.title });
        this.dispatchEvent(customEvent);
    }
}

function toHumanTime(timestamp) {
   

    const timestampInMils = timestamp * 1000
    const now = Date.now()

    const delta = now - timestampInMils

    let second = parseInt(delta / 1000)
    if(second < 60){
        return second + ' secondi fa'
    }
    
    let minuti = parseInt(second / 60)
    if(minuti < 60){
        return minuti + ' minuti fa'
    }

    let ore = parseInt((minuti / 60));
    if(ore < 24){
        return ore + ' ore fa'
    } 
   
    return parseInt(ore / 24) + ' giorni fa'
   
}

customElements.define('post-card', PostCardComponent);
