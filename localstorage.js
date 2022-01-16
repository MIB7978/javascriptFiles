
let arr = ['apple','oranhe','guva']



localStorage.setItem('name','suraj')
localStorage.setItem('name2','ram')
localStorage.setItem('fruit',JSON.stringify(arr))

// localStorage.clear()
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))
console.log(JSON.parse(localStorage.getItem('fruit')))
console.log(localStorage.getItem('name2'))

sessionStorage.setItem('sname','ssuraj')
sessionStorage.setItem('sname2','ram')
sessionStorage.setItem('sfruit',JSON.stringify(arr))
