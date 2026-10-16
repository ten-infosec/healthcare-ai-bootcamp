// 배열 ( Array )

let mixed = [ 1, 2, 3, 4, "10", true ] ;
// 여러 종류의 자료형을 섞는 건 지양한다.

let numbers = [ 1, 2, 3, 4] ;

console.log(numbers[0]) // 1
console.log(numbers.at(-1)) // 4

for(const num of numbers) {
    console.log(num);
}

console.log(numbers.slice( 1, 3 )); // [ 2 , 3 ]