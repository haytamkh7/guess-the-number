window.onload = function() {
    let min = 0;
    let max = 1000;
    
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function generateNumberAndColor() {
        var randomNumber = generateRandomNumber(min, max);
        var randomColor = generateRandomColor();

        document.body.style.backgroundColor = randomColor;
        document.getElementById('random-number').innerText = randomNumber;
    }

    function setNewRange() {
        min = generateRandomNumber(0, 1000);
        max = min + generateRandomNumber(0, 1000 - min);
        document.getElementById('min-range').innerText = `${min}`;
        document.getElementById('max-range').innerText = `${max}`;
    }

    // Set initial range and hide number
    document.body.style.backgroundColor = 'black';
    setNewRange();
    document.getElementById('random-number').style.display = 'none';

    // Add a click event listener to the button
    document.getElementById('change-btn').addEventListener('click', function() {
        if (document.getElementById('random-number').style.display === 'none') {
            generateNumberAndColor();
            document.getElementById('random-number').style.display = 'block';
        } else {
            setNewRange();
            document.getElementById('random-number').style.display = 'none';
        }
    });
}
