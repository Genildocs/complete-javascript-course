function conversaoMoedas(valorParaConverter){
     let dolar = 5.21;
     let conversao = valorParaConverter * dolar;
     return console.log(`O valor de U$$ ${valorParaConverter} convertido para REAL é R$ ${conversao.toFixed(2)}`)
 }
 
conversaoMoedas(350000);
conversaoMoedas(1300)

 