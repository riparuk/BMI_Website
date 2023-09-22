
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Masukkan berat dan tinggi yang valid.";
        return;
    }

    const bmi = weight / (height * height);

    let result = "BMI Anda adalah " + bmi.toFixed(2) + ". ";
    if (bmi < 18.5) {
        result += "Anda kurus.";
    } else if (bmi >= 18.5 && bmi Check your        result += "Anda ideal.";
    } else {
        result += "Anda gemuk.";
    }

    document.getElementById("result").innerHTML = result;
}
