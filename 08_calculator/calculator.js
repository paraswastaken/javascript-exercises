const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(a of arr){
    sum = sum + a;
  }
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  for(a of arr){
    prod = prod * a;
  }
  return prod;
};

const power = function(a, b) {
	let out = 1;
  while(b!=0){
    out = out*a
    b--;
  }
  return out;
};

const factorial = function(a) {
	let temp = 1;
  while(a!=0){
    temp=temp*a;
    a--;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
