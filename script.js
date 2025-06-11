function criaCalculadora(){
    return{
        
        get inicia(){
            this.cliqueBotoes()
        },
        display: document.querySelector('.display'),
        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)   
                }
            }.bind(this))
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia 