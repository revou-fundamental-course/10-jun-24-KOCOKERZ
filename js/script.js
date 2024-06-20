function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const temperatureType = document.getElementById('temperatureType').value;
    const outputTemperature = document.getElementById('outputTemperature');
    const conversionExplanation = document.getElementById('conversionExplanation');

    if (isNaN(inputTemperature)) {
        alert('Harap masukkan suhu yang valid.');
        return;
    }

    let convertedTemperature, explanation;

    if (temperatureType === 'celsius') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        explanation = `${inputTemperature}°C sama dengan (${inputTemperature} x 9/5) + 32 = ${convertedTemperature.toFixed(2)}°F`;
    } else {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        explanation = `${inputTemperature}°F sama dengan (${inputTemperature} - 32) x 5/9 = ${convertedTemperature.toFixed(2)}°C`;
    }

    outputTemperature.value = convertedTemperature.toFixed(2);
    conversionExplanation.value = explanation;
}

function resetForm() {
    document.getElementById('inputTemperature').value = '';
    document.getElementById('outputTemperature').value = '';
    document.getElementById('conversionExplanation').value = '';
}
