document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    let currentInput = '';

    buttons.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonText = e.target.textContent;

            if (buttonText === '=') {
                // Utilizar try-catch para manejar expresiones matemáticas inválidas
                try {
                    display.textContent = eval(currentInput);
                } catch (error) {
                    display.textContent = 'Error';
                }
                currentInput = '';
            }  else if (buttonText === 'C') {
                resetCalculator();
            }else {
                currentInput += buttonText;
                display.textContent = currentInput;
            }
        }
    });
    function resetCalculator() {
        document.getElementById('display').textContent = '0';
        currentInput = '';
    }
});
