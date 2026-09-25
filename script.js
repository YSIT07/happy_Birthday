/*
function playMusic() {
    var audio = document.getElementById("song");
    audio.play();
    alert ("Wishing you a fantastic year filled with joy and success!❤️");
}
*/

const envelope = document.getElementById("envelope");
const cardModal = document.getElementById("cardModal");
const closeBtn = document.getElementById("closeBtn");

// open envelope flap, then pop up full card after animation and play music

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    // Play the audio track
    song.play().catch(error => {
        console.log("Audio play failed", error);
    });

    setTimeout(() => {
        cardModal.classList.add("show");
    }, 400);
});

// Function to stop audio
function stopAudio() {
    song.pause();
    song.currentTime = 0; // Resets audio back to start
}

//close modal and stop music when clicking x 

closeBtn.addEventListener("click", () => {
    cardModal.classList.remove("show");
    envelope.classList.remove("open");
    stopAudio();
});

// Close modal and stop music when clicking outside the letter

cardModal.addEventListener("click", (e) => {
    if (e.target === cardModal) {
        
cardModal.classList.remove("show");
    envelope.classList.remove("open");
    stopAudio();
    }
});