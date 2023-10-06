function getAdvice(bmi, classification) {
  // Ganti dengan API key yang valid
  const apiKey = "AIzaSyBGCHbCDAwFVKyL_C78oZ - fhjSoK3jbhbU";

  // Mengambil elemen-elemen HTML
  // const generateButton = document.getElementById("generateButton");
  const adviceDiv = document.getElementById("advice1");
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
        text: storyPrompt,
      },
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        const storyText = data.candidates[0].output;
        adviceDiv.innerHTML = "";

        // Mulai animasi teks di dalam elemen "advice"
        animateTextToAdviceDiv(storyText, function () {
          // Perintah lain yang ingin dijalankan setelah animasi selesai
          adviceDiv.innerHTML = marked.parse(storyText);
        });
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }

  // Menambahkan event listener untuk tombol Generate
  generateStory();
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

  let result = "BMI Anda adalah " + bmi.toFixed(2) + ".\n";
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

  result += " Klasifikasi: " + classification;
  document.getElementById("result").innerHTML = result;

  // Mendapatkan advice
  document.getElementById("advice0").innerHTML = "Advice for you : \n";
  getAdvice(bmi, classification);
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
