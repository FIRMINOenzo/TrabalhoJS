/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function lerDados(nomeChave){
    //localStorage.clear();
    if  (window.localStorage){
        let aux = JSON.parse(
            localStorage.getItem(nomeChave));
        let dados;
        if (aux != null){
           dados = aux;
        }
        else{
            dados = [];
        }
        return dados;
    }
    else{
        alert("operacao não disponível");        
    }
    return false;
}

function gravaDados(nomeChave, conteudo){
    if (window.localStorage){        
        let dados = JSON.stringify(conteudo);
        localStorage.setItem(nomeChave,dados);
        //alert(dados);
    }
    else{
        alert("Operação não disponível.");
    }
}

function relogio(){
    let tempo = new Date;
    let h = (tempo.getHours() < 10 ? "0": "" ) 
            + tempo.getHours() ;
    let m = (tempo.getMinutes() < 10 ? "0": "") 
            + tempo.getMinutes();
    let s = (tempo.getSeconds() < 10 ? "0":"")
            + tempo.getSeconds();
    return h +":"+m+":"+s;
}

function produtosIniciais(){
    let listaprodutos = [];
    let produto={id:"Calça Jeans masculina", 
                 descricao:"Calça Jeans Masculina azul escuro",
                 valor:55.87,
                 qtde:3,
                 url: "data:image/jpeg;base64,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"};
    listaprodutos.push(produto);
    produto={id:"Calça Jeans feminina", 
                 descricao:"Calça Jeans feminina ciano",
                 valor:60.55,
                 qtde:20,
                 url:"https://images-americanas.b2w.io/produtos/01/00/img/107095/5/107095590_1GG.jpg"};
    listaprodutos.push(produto);
    produto={id:"Batedeira", 
                 descricao:"Batederira planetária",
                 valor:120.67,
                 qtde:20,
                 url: "./imagens/03868a5f80e6b886ea5805d9bac1a81e.jpg"};
    listaprodutos.push(produto);
    produto={id:"Mouse", 
                 descricao:"Mouse sem fio bluetooth",
                 valor:20.00,
                 qtde:1,
                 url:"https://img.ibxk.com.br/2020/05/21/21010449898023.jpg?w=1120&h=420&mode=crop&scale=both"};
    listaprodutos.push(produto);
    return listaprodutos;
}
function atribuir(td1, td2, td3, td4, ){
        td1.value = vet
}
function valor(numero){
    // formata um valor no padrão da moeda do Brasil
    return new Intl.NumberFormat("pt-BR",
            {style:"currency",
             currency:"BRL"})
                 .format(numero);
         // R$
}

/* declaração 
 * valor => conteudo que será armazenado
 * nome => nome do cookie
 * duracao => tempo em milessegundos
 * obs 1 segundo é igual a 1000
 *     1 minuto é igual a 1000*60
 *     1 hora é igual a 1000*60*60
 *     1 dia é igual a 1000*60*60*24
 */
function criarCookie(valor,nome,duracao){
 
  const d = new Date();
  d.setTime(d.getTime() + duracao);
  let expira = "expires="+ d.toUTCString();
  document.cookie = nome + "=" + JSON.stringify(valor) + ";" + expira + ";path=/";

}

function lerCookie(nome) {
  let identificacao = nome + "=";
  let cookieDecodificado = decodeURIComponent(document.cookie);
  let vetorCookies = cookieDecodificado.split(';');
  for(let i = 0; i < vetorCookies.length; i++) {
    let umcookie = vetorCookies[i];
    while (umcookie.charAt(0) == ' ') {
      umcookie = umcookie.substring(1);
    }
    if (umcookie.indexOf(identificacao) == 0) {
      return JSON.parse(umcookie.substring(identificacao.length, umcookie.length));
    }
  }
  return "";
}