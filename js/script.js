//config carouselHero 
 const controls= document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItens = items.length

controls.forEach(control =>{
  control.addEventListener('click',()=>{
    const isLeft = 
    control.classList.contains('arrowLeft')
      if (isLeft){
        currentItem -=1

      }else { 
        currentItem += 1
      }

      if (currentItem >= maxItens){
        currentItem = 0
      }
      if (currentItem < 0){
        currentItem=maxItens -1
      }
      items.forEach(item=>
        item.classList.remove('currentItem')
        )
        items[currentItem].scrollIntoView ({
          inline:'center',
          behavior:'smooth',
          block: 'nearest'
        
        })
        items[currentItem].classList.add('currentItem')
  })
})



let principaisProd = document.getElementById('principais-produtos-container') 
console.log(principaisProd)

produtosData = [{
  id:'golaOTrad',
  nome: 'CAMISA GOLA O TRADICIONAL',
  valor: 20,
  img:'../img/img1.png',
  tamanhos: ['PP','P','M'],
},
{ 
  id:'golaoBBLK',
  nome: 'CAMISA GOLA O BBLK',
  valor: 19.00,
  img:'../img/img2.png',
  tamanhos: ['PP','P','M','G','GG','XGG'],
},
{
  id:'golaPOLO',
  nome: 'CAMISA POLO TECIDA',
  valor: 28,
  img:'../img/img3.png',
  tamanhos: ['PP','P','M','G','GG','XGG','XXGG','XXXGG'],
},
{ 
id:'golaOInf',
nome: 'CAMISA GOLA O INFANTIL',
valor: 19,
img:'../img/img4.png',
tamanhos:['2<BR>ANS', '4<BR>ANS','6<BR>ANS','8<BR>ANS', '10<BR>ANS','12<BR>ANS']
},
{
  id:'BONÉ',
  nome: 'BONÉ ABA CURVA',
  valor: 15,
  img:'../img/img5.png',
  tamanhos: ['QUANTIDADE'],
}]

let gerarPrudotos = () => {
  return (principaisProd.innerHTML += produtosData.map((x) => {
    if (!x.tamanhos || !Array.isArray(x.tamanhos)) {
      console.error("Produto sem tamanhos definidos ou tamanhos não é um array:", x);
      return '';
    }
    
    let tamanhosHTML = x.tamanhos.map(tamanho => {
      return `
        <div class="size">
          <button class="sizeBtn">+</button>
          <a href="#">${tamanho}<P class="quantidade"></P></a>
          <button class="sizeBtn">-</button>
        </div>
      `;
    }).join("");

    return `
      <div class="produto" id="produto">
        <img src=${x.img} alt="" class="produto-imagem" >
        <div class="produto-desc">
          <h1 class="produto-nome">${x.nome}</h1>
          <h1 class="produto-valor">R$ ${x.valor},00</h1>
          <div class="sizeDropdown">
            ${tamanhosHTML}
          </div>
        </div>
      </div>
      
    `;
  }).join(""));
}



gerarPrudotos()

//config carouselHero 
const controlsprod= document.querySelectorAll('.cu')
let currentprod = 1
const prod = document.querySelectorAll('.produto')
const maxprod = prod.length

controlsprod.forEach(controlsprod =>{
  
  controlsprod.addEventListener('click',()=>{
    console.log(currentprod)
    const isLeft = 
    controlsprod.classList.contains('arrowLeft')
      if (isLeft){
        currentprod -=1

      }else { 
        currentprod += 1
      }

      if (currentprod >= maxprod){
        currentprod = 0
      }
      if (currentprod < 0){
        currentprod=maxprod -1
      }
      prod.forEach(product=>
        product.classList.remove('currentproduct')
        )
        prod[currentprod].scrollIntoView ({
          inline:'center',
          behavior:'smooth',
          block: 'nearest'
        
        })
        prod[currentprod].classList.add('currentproduct')
  })
})

let quantidade = function() {
  let quantidadeAumentar = function() {
    let btns = document.querySelectorAll('.sizeBtn');
    
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log('clicou');
        

        let quantidadeValor = btn.closest('.size').querySelector('.quantidade');

        if (btn.innerHTML == '+') {
          // Atualize o conteúdo do elemento .quantidade
          Number(quantidadeValor.innerHTML ++); 
        }
        else if (btn.innerHTML == '-') {
          Number(quantidadeValor.innerHTML --)
        }if(quantidadeValor.innerHTML<=0){
          quantidadeValor.innerHTML='' 
        }
      });
    });
  };

  quantidadeAumentar();
};

quantidade();

