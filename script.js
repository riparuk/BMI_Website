function getAdvices(bmi, classification) {
  const advice = [
    {
      level: "Severe Thinness",
      tips: "1. Prioritaskan asupan kalori dengan makanan yang kaya nutrisi.\n2. Makan lebih sering untuk meningkatkan asupan energi.\n3. Konsultasikan dengan seorang profesional kesehatan untuk pemantauan medis teratur.\n4. Pertimbangkan suplemen gizi jika direkomendasikan oleh dokter.\n5. Fokus pada makanan tinggi protein dan lemak sehat.",
    },
    {
      level: "Moderate Thinness",
      tips: "1. Pilih makanan dengan kualitas nutrisi tinggi.\n2. Pastikan makanan Anda mengandung protein, karbohidrat, lemak, sayuran, dan buah-buahan.\n3. Konsultasikan dengan ahli gizi untuk rencana makan yang sesuai.\n4. Jangan lupakan aktivitas fisik yang sehat dan ringan.\n5. Pertimbangkan dukungan psikologis jika Anda merasa cemas tentang berat badan Anda.",
    },
    {
      level: "Mild Thinness",
      tips: "1. Pertahankan pola makan seimbang dan teratur.\n2. Tambahkan camilan sehat di antara waktu makan utama.\n3. Fokus pada asupan protein untuk membangun massa otot.\n4. Pertimbangkan aktivitas fisik yang menyenangkan seperti berjalan kaki atau yoga.\n5. Pertimbangkan dukungan teman atau keluarga untuk menjaga motivasi Anda.",
    },
    {
      level: "Normal",
      tips: "1. Pertahankan pola makan seimbang dengan variasi makanan.\n2. Lanjutkan rutinitas olahraga yang teratur.\n3. Pertimbangkan makan dengan porsi yang sesuai dengan rasa lapar Anda.\n4. Pantau berat badan Anda secara berkala.\n5. Berfokus pada kesehatan dan kebugaran, bukan hanya angka berat badan.",
    },
    {
      level: "Overweight",
      tips: "1. Kurangi konsumsi makanan tinggi lemak dan gula.\n2. Tingkatkan asupan serat dengan makanan seperti sayuran dan buah-buahan.\n3. Tetapkan target penurunan berat badan yang realistis.\n4. Lakukan olahraga aerobik seperti berlari, bersepeda, atau berenang.\n5. Pertimbangkan konsultasi dengan seorang ahli gizi untuk rencana diet yang sesuai.",
    },
    {
      level: "Obese Class I",
      tips: "1. Kurangi porsi makan dan batasi makanan olahan.\n2. Komitmen pada program penurunan berat badan yang sehat.\n3. Pertimbangkan dukungan medis atau terapi.\n4. Tingkatkan aktivitas fisik secara bertahap.\n5. Monitor kemajuan Anda secara teratur.",
    },
    {
      level: "Obese Class II",
      tips: "1. Konsultasikan dengan seorang ahli obesitas atau spesialis kesehatan.\n2. Pertimbangkan opsi perawatan seperti operasi bariatrik.\n3. Fokus pada perubahan pola makan yang berkelanjutan.\n4. Rutin menjalani pemeriksaan kesehatan.\n5. Dapatkan dukungan psikologis jika diperlukan.",
    },
    {
      level: "Obese Class III",
      tips: "1. Konsultasikan dengan seorang spesialis obesitas segera.\n2. Evaluasi semua pilihan perawatan yang mungkin termasuk operasi.\n3. Komitmen untuk perubahan pola makan dan gaya hidup yang drastis.\n4. Tingkatkan aktivitas fisik secara berkelanjutan.\n5. Dapatkan dukungan dari tim perawatan kesehatan.",
    },
  ];

  // Anda dapat menggunakan objek ini dalam kode JavaScript Anda untuk menampilkan saran berdasarkan kategori berat badan.

  // Anda dapat menggunakan objek ini dalam kode JavaScript Anda untuk menampilkan saran berdasarkan kategori berat badan.
  const adviceDiv = document.getElementById("advice");
  adviceDiv.innerHTML = "Loading...";

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
        if (typeof callback === "function") {
          callback(); // Jalankan callback setelah animasi selesai
        }
      }
    }, 200);
  }

  // Mendapatkan tips untuk kategori berdasarkan argument classification
  const adviceText = advice.find((item) => item.level === classification).tips;
  setTimeout(() => {
    adviceDiv.innerHTML = "";
    // Mulai animasi teks di dalam elemen "advice"
    animateTextToAdviceDiv(adviceText, function () {
      // Perintah lain yang ingin dijalankan setelah animasi selesai
      adviceDiv.innerHTML = marked.parse(adviceText);
    });
  }, 1500);
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Konversi tinggi ke meter

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Masukkan berat dan tinggi yang valid.";
    return;
  }

  const bmi = weight / (height * height);

  let result =
    "BMI Anda adalah " + `<strong>${bmi.toFixed(2)}</strong>` + ".\n";
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

  result += " Klasifikasi: " + `<strong>${classification}</strong>`;
  document.getElementById("result").innerHTML =
    result + "<br>" + "Saran untuk anda : \n";

  // Mendapatkan advice
  getAdvices(bmi, classification);
}

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar untuk menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// // Fungsi untuk mengosongkan input berat
// function clearWeight() {
//   document.getElementById("weight").value = "";
// }

// // Fungsi untuk mengosongkan input tinggi
// function clearHeight() {
//   document.getElementById("height").value = "";
// }
