
const gridContainer = document.querySelector('.grid-container')

const totBomb = 16;

const myBomb = [];

reset();

for (let i = 1; i <=100 ; i++){
  const square = getSquare(i);
  console.log(square);
  gridContainer.append(square)
}

// FUNCTIONS/////

function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
// cosi stampo i numeri
// sq.innerHTML = numero;    
  sq._sqID = numero;

  sq.addEventListener('click', function(){
// this restituisce l'elemento contenitore
    console.log(this);

    // in questo caso uso la proprietà dataset
    // const numero = this.dataset.squid;

    // in questo caso uso proprietà custom che è più versatile
    const numero =this._sqID;

    this.innerHTML = (!this.classList.contains('clicked')) 
                      ? this.innerHTML = numero
                      : this.innerHTML = '';

    this.classList.toggle('clicked');
    this.classList.toggle(getOddEvenClass( numero ));
  })

  return sq;
}


function reset(){
  console.log(this);
  gridContainer.innerHTML = '';
}

function getOddEvenClass(n){
  if(n % 2 === 0){
    return 'even';
  } 
  return 'odd';
}

function nBomb(variDiff) {

  const numBom - [];
  let contatoreSquare;

  for (let i = 1; i <= totBomb; i++){

  }
}

























