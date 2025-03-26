// ///String methods
// const name="Shannu"
// console.log(name.length)
// console.log(name.charAt(2))
// console.log(name.charCodeAt(3))
// console.log(name.toUpperCase())
// // const sha="sHANNU"
// console.log("sHaNnU".toLowerCase())
// const a=["sha","kri","poth"]
// console.log(a[0][1].concat("","nmukha"),a[1].concat("","shna"),a[2][2].concat("ini"))
// // const re= a.map(x)=>{
// //     a.x+"krish"
// // }
// // console.log(re)
// const name1="   shann   "
// console.log(name1.trim())
// console.log(name1.trimStart())
// console.log(name1.trimEnd())
// const numerser="2"
// console.log(numerser.padStart(4,"b"))
// console.log(numerser.padEnd(5,"o"))
// const name2=["shan",'kri',"pot","hini","lorem"]
// console.log(name2.indexOf("lorem"))
// const name7="iam shanmukha krishna nice to meet you"
// console.log(name7.replace("i","e"))
// console.log(name7.replaceAll("a","e"))
// console.log(name7.match("shanmukha"))

/// Array methods
// console.log([10,20,30,40,50].length)
// console.log([10,20,30,40,50].toString())
// console.log([10,20,30,40,50].at(2))
// console.log([10,20,30,40,50].pop())
// console.log([10,20,30,40,50].push("100"))


            //higher order function in java script//


// 1.map(it will take single parameter and take input as array and produce output as array)
// 2.filter(it will take the single parameter and it will take input as array and produce 
//             output as array and it will filter the array based on the condition)
// 3.reduce(it will take two parameters and it will take input as array produce single element as output)

// const name3=[10,20,30,40,50]
// const map=name3.map((x)=>{
//     return x+10
// }).filter((x)=>{
//     return x>=20
// }).reduce((pre,curr)=>{
//     return pre>curr?pre:curr
// },name3[0])// here name3[0] is here the starting index we defined
// console.log(map)

            //DOM(document object model)//

const abc=document.getElementById('abc')
abc.innerText="Welcome to Tax calculator"
const def=document.getElementById('def')
def.innerText="Enter"
function shanmukha(){
    const bcd=document.getElementById('bcd').value
    console.log(bcd)
    const end=document.getElementById('final')
    end.innerText="the 5% tax of your salary is : "+(bcd*(5/100))
    console.log(end.innerText)
}