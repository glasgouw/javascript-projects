let colorList = [];

for (let i = 1; i <= 3; i++) {
    let color = prompt("Enter a color: " + i);
    colorList.push(color);
}

alert('Your list of colors is: ' + colorList.join(', '));
