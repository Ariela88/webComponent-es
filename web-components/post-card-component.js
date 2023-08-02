class PostCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.post){
            console.log(this.post);
            this.shadowRoot.innerHTML = '';

            const div = document.createElement('div');
            this.shadowRoot.appendChild(div);
    
            const h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(this.post.title));
            div.appendChild(h3);

            this.shadowRoot.innerHTML = `
            <style>
            .card{
                width:400px;
                position:relative;
                float:right;
                display: flex;
                width: 70%;
                flex-direction: column;
                background-color: white;
                border-radius: 16px;
                padding: 16px;
                margin-bottom: 4px;
                
               
            }
            .card img{
                width:60%;
                border-radius:20px;
            }
            .card-title{
                width:100%;
                flex-wrap:wrap;
                font-size: 20px;
                font-weight: bold;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .card-author{
                font-size: large;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .card-details{
                display: flex;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .card-details{
                flex:1;
                display:flex;
                flex-direction:column;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            </style>
            `;

            this.shadowRoot.innerHTML += `
            <div class="card">
            <span class="card-author">${this.post.data.author_fullname}</span>
                <span class="card-title">${this.post.data.title}</span>
                <img src="${this.post.data.thumbnail}" alt="">
                <div class="card-details">
                    <span class="card-detail">${this.post.data.created}</span>
                    <a href= "${this.post.data.url}" target="_blank" rel="noopener noreferrer">link al post originale</a>
                </div>
            </div>
            `
            console.log(post.title);

            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode('cancellami'));
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => this.emitEvent())
        }
    }

    emitEvent(){
        const customEvent = new CustomEvent('card-clicked', {detail: this.post.title});
        this.dispatchEvent(customEvent);
    }



}


customElements.define('post-card', PostCardComponent);