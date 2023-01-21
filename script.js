function changeColor() {
    let colorOption = document.getElementById('list').value;
    if (colorOption === 'red') {
        document.body.style.backgroundColor = 'red'
    }
    if (colorOption === 'green') {
        document.body.style.backgroundColor = 'green'
    }
    if (colorOption === 'blue') {
        document.body.style.backgroundColor = 'blue'
    }
    if (colorOption === 'purple') {
        document.body.style.backgroundColor = 'purple'
    }
    if (colorOption === 'yellow') {
        document.body.style.backgroundColor = 'yellow'
    }
}