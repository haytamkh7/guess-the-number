window.onload = function() {
    let min = 1;
    let max = 10;

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateNumberAndColor() {
        var randomNumber = generateRandomNumber(min, max);
        document.getElementById('random-number').innerText = randomNumber;
    }

    function setNewRange() {
        min = 1;
        max = 10;
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
