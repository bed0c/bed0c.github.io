// music.js

// Müzik ve buton elementlerini seçiyoruz
const audio = new Audio('/MUSIC/Music.mp3');
const musicToggle = document.querySelector('.music-toggle');
const soundOffImg = '/IMAGES/sound-off.png';
const soundOnImg = '/IMAGES/sound-on.png';

// Başlangıçta ses kapalı olacak
let isMusicPlaying = false;

// Müzik kontrol butonuna tıklama olayı ekliyoruz
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        // Eğer müzik çalıyor ise durdur
        audio.pause();
        musicToggle.querySelector('img').src = soundOffImg;
    } else {
        // Eğer müzik çalmıyor ise başlat
        audio.play();
        musicToggle.querySelector('img').src = soundOnImg;
    }
    // Müzik oynama durumunu değiştir
    isMusicPlaying = !isMusicPlaying;
});

// Sayfa yüklendiğinde müziğin durumunu kontrol etmek için
window.addEventListener('load', () => {
    // Varsayılan olarak ses kapalı olacak
    musicToggle.querySelector('img').src = soundOffImg;
});
