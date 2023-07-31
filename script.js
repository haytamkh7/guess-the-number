window.onload = function() {
    let min = 1;
    let max = 10;
    let state = 1;

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
    document.getElementById('cover-div').style.display = 'block';

    // Add a click event listener to the cover div
    document.getElementById('cover-div').addEventListener('click', function() {
        generateNumberAndColor();
        document.getElementById('random-number').style.display = 'block';
        document.getElementById('cover-div').style.display = 'none';
    
        setTimeout(function() {
            state = state % 10 + 1;
            setNewRange();
            document.getElementById('random-number').style.display = 'none';
            document.getElementById('cover-div').style.display = 'block';
            document.getElementById('state').innerText = `${state}/10`;
        }, 2000);
    });
    
}
