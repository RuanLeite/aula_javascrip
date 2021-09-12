function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com/")
    //window.location.href = "https://google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1 + n2;
}
*/
/*var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/
//alert (soma(5,10));
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}


alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
//var nome = "Ruan";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem" + idade + "anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(n1 - n2);
//console.log(n1 * n2);
//console.log(n1 / n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");  //Colocar na lista
//lista.pop("pêra")   //Retirar da lista

//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "))

//console.log(lista.length); //Tamanho da lista
//console.log(lista.reverse());  //Trazer os elementos ao contrario
//console.log(lista);
//console.log(lista[0]);
//console.log(lista[1]);
//console.log(lista[2]);

//var fruta = {nome: "maçã", cor:"vermelha"}
//console.log(fruta.nome);
//console.log(fruta.cor);
//alert(fruta.cor);

//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/



/*var count
for(count=0; count <= 5; count++){
    alert(count);
};*/


/*var d = new Date();
alert(d.getMonth()+1)
alert(d.getMinutes());
alert(d.getHours();
alert(d.getDay()))
*/

