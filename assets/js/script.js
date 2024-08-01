document.addEventListener('DOMContentLoaded', function(){
    const display = document.getElementById('display')

    //Función para manejar el clic del botón
    function handleClick(event) {
        const buttonValue = event.target.innerText;
        switch (buttonValue) {
            case 'C':
                clearDisplay();
                break;
            case 'DEL':
                deleteLastChar();
                break;
            case '=':
                calculate()
                break;
            default:
                appendToDisplay(buttonValue)
        }
    }

    //Función para agregar valor a mostrar
    function appendToDisplay(value){
        display.value += value;
    }
    //Función para borrar la pantalla

    function clearDisplay(){
        display.value = '';
    }

    // Función para borrar el último número
    function deleteLastChar(){
        display.value = display.value.slice(0, -1);
    }

    // Función para calcular el resultado
    function calculate(){
        try {
            const result = eval(display.value)
            display.value = result
        } catch (error) {
            display.value = 'Error'
        }
    }

    //Agregar detectores de eventos a los botones
    const buttons = document.querySelectorAll('button')
        buttons.forEach(button => {
            button.addEventListener('click', handleClick)
        })

})