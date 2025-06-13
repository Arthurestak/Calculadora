function criaCalculadora(){
    return{
        inicia(){
            this.cliqueBotoes()
            this.btEnter()
        },
        display: document.querySelector('.display'),
        btEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.key === 'Enter'){
                    const resultado = this.realizaConta(this.display.value)
                    this.display.value = resultado
                }
            })
        },
        realizaConta(operacao){
            try{
                const resultado = eval(`${operacao}`)
                return resultado
            }
            catch(e){
                alert(`Ocorreu um erro "${e}"`)
            }
        },
        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.display.value += el.innerText
                }
                if (el.classList.contains('btn-eq')){
                    const resultado = this.realizaConta(this.display.value)
                    this.display.value = resultado
                }
                if (el.classList.contains('btn-del')){
                    this.display.value = this.display.value.slice(0, -1)
                }
                if (el.classList.contains('btn-numX')){
                    this.display.value += '*'
                }
                if (el.classList.contains('btn-clear')){
                    this.display.value = ''
                }
            })
        },
        
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()