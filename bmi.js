function getAdvice(bmi, classification) {
    // Ganti dengan API key yang valid
    const apiKey = "API-KEY";

    // Mengambil elemen-elemen HTML
    // const generateButton = document.getElementById("generateButton");
    const adviceDiv = document.getElementById("advice1");
    adviceDiv.innerHTML = 'Loading...';
    
    // Fungsi untuk menampilkan teks animasi
    function animateTextToAdviceDiv(text, callback) {
        let index = 0;
        const words = String(text).split(" ");
        const interval = setInterval(() => {
            if (index < words.length) {
                adviceDiv.textContent += words[index] + " ";
                index++;
            } else {
                clearInterval(interval);
                if (typeof callback === 'function') {
                    callback(); // Jalankan callback setelah animasi selesai
                }
            }
        }, 100);
    }
    
    // Fungsi untuk mengambil dan menampilkan cerita berdasarkan prompt pengguna
    async function generateStory() {
        const storyPrompt = `please give short list advice for me who has a bmi score of ${bmi} and a ${classification} category.`;

        if (storyPrompt === "") {
            alert("Prompt not exist");
            return;
        }

        const requestData = {
            prompt: {
                text: storyPrompt
            }
        };

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`;

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        const storyText = data.candidates[0].output;
        adviceDiv.innerHTML = '';

        // Mulai animasi teks di dalam elemen "advice"
        animateTextToAdviceDiv(storyText, function() {
            // Perintah lain yang ingin dijalankan setelah animasi selesai
            adviceDiv.innerHTML = marked.parse(storyText);
        });
    })
    .catch(error => {
    console.error('Terjadi kesalahan:', error);
    });

    }

    // Menambahkan event listener untuk tombol Generate
    generateStory();
}

		// Create an object for advice data:
		const advice = [
		// Severe Thinness (BMI di bawah 16)
		{
			level: "Severe Thinness",
			tips: [
				"Prioritaskan asupan kalori dengan makanan yang kaya nutrisi.",
				"Makan lebih sering untuk meningkatkan asupan energi.",
				"Konsultasikan dengan seorang profesional kesehatan untuk pemantauan medis teratur.",
				"Pertimbangkan suplemen gizi jika direkomendasikan oleh dokter.",
				"Fokus pada makanan tinggi protein dan lemak sehat."
			]
		},
		
		// Moderate Thinness (BMI antara 16 dan 17)
		{
			level: "Moderate Thinness",
			tips: [
				"Pilih makanan dengan kualitas nutrisi tinggi.",
				"Pastikan makanan Anda mengandung protein, karbohidrat, lemak, sayuran, dan buah-buahan.",
				"Konsultasikan dengan ahli gizi untuk rencana makan yang sesuai.",
				"Jangan lupakan aktivitas fisik yang sehat dan ringan.",
				"Pertimbangkan dukungan psikologis jika Anda merasa cemas tentang berat badan Anda."
			]
		},

		// Mild Thinness (BMI antara 17 dan 18.5)
		{
			level: "Mild Thinness",
			tips: [
				"Pertahankan pola makan seimbang dan teratur.",
				"Tambahkan camilan sehat di antara waktu makan utama.",
				"Fokus pada asupan protein untuk membangun massa otot.",
				"Pertimbangkan aktivitas fisik yang menyenangkan seperti berjalan kaki atau yoga.",
				"Pertimbangkan dukungan teman atau keluarga untuk menjaga motivasi Anda."
			]
		},

		// Normal (BMI antara 18.5 dan 25)
		{
			level: "Normal",
			tips: [
				"Pertahankan pola makan seimbang dengan variasi makanan.",
				"Lanjutkan rutinitas olahraga yang teratur.",
				"Pertimbangkan makan dengan porsi yang sesuai dengan rasa lapar Anda.",
				"Pantau berat badan Anda secara berkala.",
				"Berfokus pada kesehatan dan kebugaran, bukan hanya angka berat badan."
			]
		},

		// Overweight (BMI antara 25 dan 30)
		{
			level: "Overweight",
			tips: [
				"Kurangi konsumsi makanan tinggi lemak dan gula.",
				"Tingkatkan asupan serat dengan makanan seperti sayuran dan buah-buahan.",
				"Tetapkan target penurunan berat badan yang realistis.",
				"Lakukan olahraga aerobik seperti berlari, bersepeda, atau berenang.",
				"Pertimbangkan konsultasi dengan seorang ahli gizi untuk rencana diet yang sesuai."
			]
		}
	];


function getAdvices(level) {

    // Create an object for advice data:
	    const advice = [
            // Severe Thinness (BMI di bawah 16)
            {
                level: "Severe Thinness",
                tips: [
                    "Prioritaskan asupan kalori dengan makanan yang kaya nutrisi.",
                    "Makan lebih sering untuk meningkatkan asupan energi.",
                    "Konsultasikan dengan seorang profesional kesehatan untuk pemantauan medis teratur.",
                    "Pertimbangkan suplemen gizi jika direkomendasikan oleh dokter.",
                    "Fokus pada makanan tinggi protein dan lemak sehat."
                ]
            },
            
            // Moderate Thinness (BMI antara 16 dan 17)
            {
                level: "Moderate Thinness",
                tips: [
                    "Pilih makanan dengan kualitas nutrisi tinggi.",
                    "Pastikan makanan Anda mengandung protein, karbohidrat, lemak, sayuran, dan buah-buahan.",
                    "Konsultasikan dengan ahli gizi untuk rencana makan yang sesuai.",
                    "Jangan lupakan aktivitas fisik yang sehat dan ringan.",
                    "Pertimbangkan dukungan psikologis jika Anda merasa cemas tentang berat badan Anda."
                ]
            },
    
            // Mild Thinness (BMI antara 17 dan 18.5)
            {
                level: "Mild Thinness",
                tips: [
                    "Pertahankan pola makan seimbang dan teratur.",
                    "Tambahkan camilan sehat di antara waktu makan utama.",
                    "Fokus pada asupan protein untuk membangun massa otot.",
                    "Pertimbangkan aktivitas fisik yang menyenangkan seperti berjalan kaki atau yoga.",
                    "Pertimbangkan dukungan teman atau keluarga untuk menjaga motivasi Anda."
                ]
            },
    
            // Normal (BMI antara 18.5 dan 25)
            {
                level: "Normal",
                tips: [
                    "Pertahankan pola makan seimbang dengan variasi makanan.",
                    "Lanjutkan rutinitas olahraga yang teratur.",
                    "Pertimbangkan makan dengan porsi yang sesuai dengan rasa lapar Anda.",
                    "Pantau berat badan Anda secara berkala.",
                    "Berfokus pada kesehatan dan kebugaran, bukan hanya angka berat badan."
                ]
            },
    
            // Overweight (BMI antara 25 dan 30)
            {
                level: "Overweight",
                tips: [
                    "Kurangi konsumsi makanan tinggi lemak dan gula.",
                    "Tingkatkan asupan serat dengan makanan seperti sayuran dan buah-buahan.",
                    "Tetapkan target penurunan berat badan yang realistis.",
                    "Lakukan olahraga aerobik seperti berlari, bersepeda, atau berenang.",
                    "Pertimbangkan konsultasi dengan seorang ahli gizi untuk rencana diet yang sesuai."
                ]
            }
        ];
    const adviceDiv = document.getElementById("advice1");
    adviceDiv.innerHTML = 'Loading...';

		// Fungsi untuk menampilkan teks animasi
		function animateTextToAdviceDiv(text, callback) {
				let index = 0;
				const words = String(text).split(" ");
				const interval = setInterval(() => {
						if (index < words.length) {
								adviceDiv.textContent += words[index] + " ";
								index++;
						} else {
								clearInterval(interval);
								if (typeof callback === 'function') {
										callback(); // Jalankan callback setelah animasi selesai
								}
						}
				}, 100);
		}

	
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Masukkan berat dan tinggi yang valid.";
        return;
    }

    const bmi = weight / (height * height);

    let result = "BMI Anda adalah " + bmi.toFixed(2) + ". ";
    let classification = "";

    if (bmi < 16) {
        classification = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
        classification = "Moderate Thinness";
    } else if (bmi >= 17 && bmi < 18.5) {
        classification = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        classification = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        classification = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        classification = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
        classification = "Obese Class II";
    } else {
        classification = "Obese Class III";
    }

    result += "Klasifikasi: " + classification;
    document.getElementById("result").innerHTML = result;
    
    // Mendapatkan advice
    document.getElementById("advice0").innerHTML = 'Advice for you : \n';
    getAdvice(bmi, classification);
}

