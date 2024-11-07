function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        inicia(){
         this.cliqueBotoes();
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice (0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta inválida!")
                    return;
                }
                this.display.value = conta;
                return;
            }catch(e){
                alert("Conta inválida!")
            }
        },


       cliqueBotoes(){
        document.addEventListener('click', function(e){
            const el= e.target;
            console.log(el);

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
            this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
            this.apagaUm();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
            if(el.classList.contains('btn-numX')){
                this.btnParaDisplay('*')
            }
        }.bind(this));
           
       },

       btnParaDisplay(valor){
        this.display.value += valor;
       }, 
       

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
