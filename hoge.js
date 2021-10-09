// pow() という関数（引数を2乗して返す）を持つオブジェクト型 CalcMan型
var man = {
    pow: function (num) {
        return num * num;
    }
};
var takuma = {
    name: 'takuma',
    age: 34,
    pow: function (num) { return num * num; }
};
console.log(takuma.pow(2));
// optional型
// type Human = {
//   name?: string
//   age: number
// }
// 
// const human: Human = {
//   age: 34
// }
// 
// console.log(human)
////////////////////// オブジェクト型
// type Human {
//   name: string,
//   age: number,
// }
// 
// type Fighter {
//   punch: () => void
// } | Human
// 
// type OnePunchMan = Human | Fighter
// 
// const human: Human = {
//   name: '196',
//   age: 28,
// }
// 
// const punchman: OnePunchMan = {
//   name: 'ha',
//   age: 28,
//   punch: () => console.log('punch!!!')
// }
// 
// console.log(human)
/////////////////////////////////////////////////////////////////
// 数字を受け取る
// 0ならエラー
// 2の倍数なら true
// それ以外なら 'hello'
//
// const fun = (num: number): boolean | string | never => {
//     if (num == 0) {
//       throw "0にするな！"
//     }
//     if (num % 2 == 0) {
//       return true
//     } 
//     return 'hello'
// }
// 
// console.log(fun(0))
