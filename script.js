function changeColor() {
    const colors = document.getElementById('list');
    document.body.style.backgroundColor = colors.options[colors.selectedIndex].value;
}