export default class ValidaCPF {

    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')

        });
    }

    sequencia() {

        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);

        this.NovoCPF = cpfParcial + digito1 + digito2;

    }

    static geraDigito(cpfSemDigitos) {

        const cpfArray = Array.from(cpfSemDigitos);

        let contador = cpfSemDigitos.length + 1;

        const total = cpfArray.reduce((ac, valor)=>{

            ac += (contador * Number(valor))
            contador --;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);

        return digito > 9 ? '0': String(digito);
    }

    valida() {

        if(!this.cpfLimpo) return false;
       
        if(typeof this.cpfLimpo !== 'string') return false;
     
        if(this.cpfLimpo.length !== 11) return false;
    
        if(this.sequencia()) return false;
        
        this.geraNovoCpf();


        console.log(this.NovoCPF, this.cpfLimpo);
        return this.NovoCPF === this.cpfLimpo;
        
    }

}
