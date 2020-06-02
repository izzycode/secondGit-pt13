alert('Hello world')
let colors = ['hotpink', 'papayawhip', 'chocolate', 'aqua']
let counter = 0
document.body.addEventListener('click', () => {
  document.body.style.background = colors[counter%4]
  counter++
})