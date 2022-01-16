
let ele = document.createElement("a")
let ele1 = document.createElement("h1")
ele1.appendChild(ele);
let tnode = document.createTextNode('Go to Facebook')
ele.appendChild(tnode)

ele.setAttribute("href","https://www.facebook.com")

document.querySelector('body').appendChild(ele1)

console.log(ele)