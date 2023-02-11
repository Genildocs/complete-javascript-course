/* calculo de IMC */

let mark = {
     nomeCompleto : 'Mark Miller',
     peso : 78,
     altura : 1.69,
     calculoImc : function(){
          this.imc = this.peso / (this.altura**2)
          return this.imc; 
     }
}


let john = {
     nomeCompleto : 'John Smith',
     peso : 92,
     altura : 1.95,
     calculoImc : function(){
          this.imc = this.peso / (this.altura**2)
          return this.imc; 
     }
}
mark.calculoImc();
john.calculoImc();



function comparaImc(mark, john){
     if(mark.imc > john.imc){
          return `O IMC de ${mark.nomeCompleto} (${mark.imc.toFixed(1)}) é maior do que o IMC de ${john.nomeCompleto} (${john.imc.toFixed(1)})`
     }else if(john.imc > mark.imc){
          return `O IMC de ${john.nomeCompleto} (${john.imc.toFixed(1)}) é maior do que o IMC de ${mark.nomeCompleto} (${mark.imc.toFixed(1)})`
     }else{
          return `São iguais: Mark (${mark.imc.toFixed(1)}) , John (${john.imc.toFixed(1)})  `
     }
}

console.log(comparaImc(mark, john));