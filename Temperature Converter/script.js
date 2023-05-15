function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let input_temp = document.querySelector("#input_temp");
    let output_temp = document.querySelector("#output_temp");
    let result = document.querySelector("#result");
    if (inputValue == "") {
        alert("Enter any temperature Value ...")
        location.reload()
    }
    else if (input_temp.value == "celcius" && output_temp.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    else if (input_temp.value == "celcius" && output_temp.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (input_temp.value == "celcius" && output_temp.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    else if (input_temp.value == "celcius" && output_temp.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * (9 / 5) + 491.67
        result.innerHTML = Rankine.toFixed(2) + " R"
    }
    else if (input_temp.value == "fahrenheit" && output_temp.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    else if (input_temp.value == "fahrenheit" && output_temp.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (input_temp.value == "fahrenheit" && output_temp.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    else if (input_temp.value == "fahrenheit" && output_temp.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) + 459.67
        result.innerHTML = Rankine.toFixed(2) + " R"
    }
    else if (input_temp.value == "kelvin" && output_temp.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 273.15
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    else if (input_temp.value == "kelvin" && output_temp.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (input_temp.value == "kelvin" && output_temp.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    else if (input_temp.value == "kelvin" && output_temp.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * 1.8
        result.innerHTML = Rankine.toFixed(2) + " R"
    }
    
}
