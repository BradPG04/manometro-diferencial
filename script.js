function calculatePressure() {
    const height = parseFloat(document.getElementById('height').value);
    const liquid = document.getElementById('liquid').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    // Validación de entrada
    if (isNaN(height) || height < 0) {
        resultDiv.innerHTML = '<span class="text-red-500">Por favor, ingrese una altura válida (cm).</span>';
        return;
    }

    // Constantes
    const g = 9.81; // Aceleración gravitacional (m/s²)
    const density = liquid === 'water' ? 1000 : 13560; // Densidad (kg/m³)
    const heightMeters = height / 100; // Convertir cm a metros

    // Calcular presión en Pascals (Pa)
    let pressure = density * g * heightMeters;

    // Convertir a la unidad seleccionada
    let result;
    if (unit === 'mbar') {
        result = pressure / 100; // 1 mbar = 100 Pa
    } else if (unit === 'mmh2o') {
        result = pressure / 9.81; // 1 mmH₂O ≈ 9.81 Pa
    } else {
        result = pressure; // Pa
    }

    // Redondear a 2 decimales
    result = Math.round(result * 100) / 100;

    resultDiv.innerHTML = `Presión diferencial: ${result} ${unit === 'pa' ? 'Pa' : unit === 'mbar' ? 'mbar' : 'mmH₂O'}`;
}