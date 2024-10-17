 // Fungsi untuk mendapatkan waktu saat ini
 function updateTime() {
  const now = new Date();
  const targetDate = new Date('2024-12-31');
  const timeDifference = targetDate - now;

  // Hitung waktu yang tersisa
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format jam, menit, detik
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // Perbarui elemen HTML dengan waktu yang tersisa
  document.getElementById('hari').textContent = days;
  document.getElementById('jam').textContent = formattedHours;
  document.getElementById('menit').textContent = formattedMinutes;
  document.getElementById('detik').textContent = formattedSeconds;

  // Jika waktu habis
  if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').textContent = "Acara sedang berlangsung!";
  }
}

// Panggil fungsi updateTime setiap detik
const countdownInterval = setInterval(updateTime, 1000);

// Set tanggal
const tanggal = new Date('2024-09-12');
const formattedTanggal = tanggal.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById('tanggal').textContent = formattedTanggal;

//Untuk salin no rekening
function scrollToSection2() {
  document.getElementById("section-2").scrollIntoView({
    behavior: 'smooth'
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
  }, function(err) {
      console.error("Gagal menyalin teks: ", err);
  });
}

function putarMusik(){
  const musik = document.querySelector('#musik');
  const imgmusik = document.querySelector('#imgmusik');
  if(musik.paused){
      musik.play();
      imgmusik.src = "assets/img/off-volume.png";
  }else{
      musik.pause();
      imgmusik.src = "assets/img/on-volume.png";
  }
}


//Untuk audio
function putarMusik(){
  const musik = document.querySelector('#musik');
  const imgmusik = document.querySelector('#imgmusik');

  if(musik.paused){
    musik.play();
    imgmusik.src = "assets/icons/off-volume.png";
  } else {
    musik.pause();
    imgmusik.src = "assets/icons/on-volume.png";
  }
}


// Untuk clear Field
document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault();
  
  document.getElementById('sender-name').value = '';
  document.getElementById('message').value = '';
  
  alert('Pesan telah dikirim!');
});
