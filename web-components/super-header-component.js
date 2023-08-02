class SuperHeaderComponent extends HTMLElement { // definisce che questa classe sia estesa all'html

    constructor() {
        super();

        this.attachShadow({ mode: 'open' }) //shadowroot gestisce quello che in js standard è il document 
    }




    connectedCallback() {

        this.render()



    }

    render() {



        this.shadowRoot.innerHTML = `
        <style>

       
        .header{
            
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin:0;
            padding:0;
           
        }

        .btn-header {
            display: flex;
            justify-content: space-around;
            gap:30px;
        
        
        }
        
        .btn-header button {
        
            width: 100px;
            height: 40px;
            border-radius: 26px;
            box-shadow: none;
            border: none;
            font-weight: 500;
            
        }
        
        #search {
            background-color: #d9d9d9;
            border:none;
            width: 60%;
            height: 50px;
            border-radius:28px;
        
        }
        #logo-reddit{
            width:10%;
        }
        #download-app-btn {
            background-color: rgb(174, 172, 172);
        }
        
        #login-btn {
            background-color: orangered;
            color: white;
        }

        </style>

        <header> 
        <div class="header"> 
            <img id="logo-reddit" src="./web-components/assets/Reddit-logo.png" alt="">
            <input type="search" name="search" placeholder="    Search Reddit" id="search">
            <div class="btn-header"> 
                <button id="download-app-btn"> Scarica App  </button>
                <button id="login-btn"> Login </button>
            </div>
        </div>
    </header>
        
       `

        // const style = document.createElement('style');
        // //style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`;
        // this.shadowRoot.appendChild(style);





    }

    //queste due funzioni vanno sempre in coppia. uno osserva i cambiamenti degli attributi e l'altro li mette in pratica renderizzando la pagina
    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue !== newValue) {
            this.render()

        }
    }

    static get observedAttributes() {
        return ['title-color', 'super-title']
    }
}

customElements.define('super-header', SuperHeaderComponent); //definisce che questa classe venga associata all element creato da me