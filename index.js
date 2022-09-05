const cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats);

function destructivelyAppendCat(){
    cats.push('Ralph');
    console.log(destructivelyAppendCat);
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
    console.log(destructivelyPrependCat);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(destructivelyRemoveFirstCat);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(destructivelyRemoveLastCat);
}

function appendCat () {
    const appendCat = [...cats, "Broom"];
    console.log(appendCat)
}

function prependCat () {
   const prependCat = ["Arnold", ...cats];
   console.log(prependCat)
}

function removeLastCat(){
    cats.slice(2);
    console.log(removeLastCat);
}

function removeFirstCat(){
    cats.slice(0);
    console.log(removeFirstCat);
}