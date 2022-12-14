//forEach
const array = ['tiger','lion','panda'] 
array.forEach( (ele)=>{
    console.log(ele)
})

//push
array.push('dog')

array.forEach( (ele)=>{
    console.log(ele)
})

//unshift
const fruits = ['apple', 'banana']

fruits.unshift('grapes');
console.log(fruits);

//findIndex
index = fruits.findIndex(findFruit);

function findFruit(fruit){
    return fruit == 'banana';
}

console.log(index);

//sort reverse
const ages = [2,3,4,5];
ages.sort();
ages.reverse();

//findIndex
index2 = ages.findIndex(findAge)
function findAge(age){
    return age>3
}
console.log(index2)

const cars = {type:"fiat", model:"400", color:"white"};
