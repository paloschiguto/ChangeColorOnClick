const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal', 'aqua', 'silver', 'gold', 'beige', 'coral', 'crimson', 'indigo', 'ivory', 'khaki', 'lavender', 'orchid', 'plum', 'salmon', 'sienna', 'tan', 'turquoise', 'violet', 'azure', 'bronze', 'chartreuse', 'chocolate', 'emerald', 'fuchsia', 'gainsboro', 'honeydew', 'hotpink', 'lavenderblush', 'lightblue', 'lightgreen', 'limegreen', 'midnightblue'
]

const btn = document.getElementById('btn')
const colorName = document.querySelector('.color')

btn.addEventListener('click', function(){
    const armazenaRandomColor = randomColor()
    document.body.style.background = colors[armazenaRandomColor]
    colorName.textContent = colors[armazenaRandomColor]
})

function randomColor (){
    return Math.floor(Math.random() * colors.length)
}