function criaCalculadora(){
    return{
        get inicia(){
            this.cliqueBotoes()
        },
        apagaDisplay(){
            this.display.value = ''
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1) 
        },
        resolveQuestao(operacao){
            
            const resultado = eval(`${operacao}`)
            return resultado
        },
        display: document.querySelector('.display'),
        cliqueBotoes(){
            document.addEventListener('click', (e)=>{
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)   
                }
                if(el.classList.contains('btn-numX')){
                    this.btnParaDisplay('*')
                }
                if (el.classList.contains('btn-clear')){
                    this.apagaDisplay()
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')){
                    const resultado = this.resolveQuestao(this.display.value)
                    this.display.value = resultado
                }
                
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },
        
    }
}

const calculadora = criaCalculadora()
calculadora.inicia 