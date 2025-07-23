const moodData = {
  happy: {
    quote: "Happiness is not by chance, but by choice.",
    song: "https://www.youtube.com/watch?v=ZbZSe6N_BXs"
  },
  sad: {
    quote: "This too shall pass. Hold on.",
    song: "https://www.youtube.com/watch?v=ho9rZjlsyYY"
  },
  angry: {
    quote: "Take a breath. Peace begins with you.",
    song: "https://www.youtube.com/watch?v=YVkUvmDQ3HY"
  },
  chill: {
    quote: "Relax. Recharge. Refocus.",
    song: "https://www.youtube.com/watch?v=5qap5aO4i9A"
  },
  romantic: {
    quote: "You are my today and all of my tomorrows.",
    song: "https://www.youtube.com/watch?v=2Vv-BfVoq4g&list=RD2Vv-BfVoq4g&start_radio=1"
  }
};

document.querySelectorAll('.mood-card').forEach(card => {
  card.addEventListener('click', () => {
    const mood = card.getAttribute('data-mood');
    const result = moodData[mood];

    const resultBox = document.getElementById('result');
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <h2>💬 Quote:</h2>
      <p><em>"${result.quote}"</em></p>
      <h2>🎵 Song:</h2>
      <a href="${result.song}" target="_blank">Click here to listen</a>
    `;
  });
});