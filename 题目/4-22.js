// // // // // var name = 'Tom';
// // // // // (function() {
// // // // // if (typeof name == 'undefined') {
// // // // //   var name = 'Jack';
// // // // //   console.log('Goodbye ' + name);
// // // // // } else {
// // // // //   console.log('Hello ' + name);
// // // // // }
// // // // // })();

// // // // // for (let i = 0; i < 10; i++) {
// // // // //   (function(j) {setTimeout(() => {
// // // // //     console.log(j)
// // // // //   }, 1000)})(i)
// // // // // }

// // // // async function async1(){
// // // //    console.log('async1 start'); //3
// // // //     await async2();
// // // //     console.log('async1 end') //5
// // // // }
// // // // async function async2(){
// // // //     console.log('async2') //4
// // // // }

// // // // console.log('script start');  //1
// // // // async1();
// // // // console.log('script end') //2

// // // const url = "https://www.yunlizhihui.com?username=luyon&level=3&part=tPart";

// // // // { username: 'luyon', level: 3, part: tPart }

// // // let obj = {}
// // // let parArr = url.split('?')[1].split('&')
// // // parArr.forEach(x => {
// // //   let strArr = x.split('=')
// // //   obj[strArr[0]] = strArr[1]
// // // })

// // // console.log(obj)

// // function wait () {
// //   return new Promise(resolve =>
// //     setTimeout(resolve, 3 * 1000)
// //   )
// // }

// // async function main() {
// //   console.time();
// //   const x = wait();
// //   await x
// //   const y = wait();
// //   await y
// //   const z = wait();
// //   await z
// //   console.timeEnd();
// // }
// // main();

// const fn = async () => {
//   let a = await new Promise(res => res(2))
//   return a
// }

// fn().then(res => {
//   console.log(res)
// })
// // console.log(fn())


// mounted () {
//   let axios1 = axios.get()
//   this.data1 = axios1
//   let axios2 = axios.get()
//   this.data2 = axios2
//   let axios3 = axios.get()
//   ...
//   let axios4 = axios.get()
//   ...
// }