console.log("hello")


let element = document.createElement('li')
let tnode = document.createTextNode("i am calm")

element.appendChild(tnode)
element.className ='primaryli'
element.id = "primaryul"

let ul = document.querySelector('.myul')
ul.appendChild(element)

console.log(element)



let element1 = document.createElement('h3')
let tnode1 = document.createTextNode("i am peacelover")
element1.appendChild(tnode1)


ul.replaceChild(element1,document.querySelector('#fui'))

ul.removeChild(document.querySelector('#lui'))







