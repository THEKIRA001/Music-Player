const songs = [
    {
      "id": 1,
      "title": "Shape Of You",
      "artist": "Ed Sheeran",
      "genre": "Pop",
      "albumArt": "images/shape-of-you.jpg",
      "audioSrc": "audio/shape-of-you.mp3"
    },
    {
      "id": 2,
      "title": "Cold (feat. Future)",
      "artist": "Maroon 5, Future",
      "genre": "Pop",
      "albumArt": "images/all-of-me.jpg",
      "audioSrc": "audio/all-of-me.mp3"
    },
    {
      "id": 3,
      "title": "Someone Like You",
      "artist": "Adele",
      "genre": "Pop",
      "albumArt": "images/someone-like-you.jpg",
      "audioSrc": "audio/someone-like-you.mp3"
    },
    {
      "id": 4,
      "title": "Wonderwall",
      "artist": "Oasis",
      "genre": "Rock",
      "albumArt": "images/wonderwall.jpg",
      "audioSrc": "audio/wonderwall.mp3"
    },
    {
      "id": 5,
      "title": "Sugar",
      "artist": "Maroon 5",
      "genre": "Pop",
      "albumArt": "images/sugar.jpg",
      "audioSrc": "audio/sugar.mp3"
    },
    {
      "id": 6,
      "title": "Locked Away",
      "artist": "R. City",
      "genre": "Hip-Hop",
      "albumArt": "images/locked-away.jpg",
      "audioSrc": "audio/locked-away.mp3"
    },
    {
      "id": 7,
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "genre": "Rock",
      "albumArt": "images/bohemian-rhapsody.jpg",
      "audioSrc": "audio/bohemian-rhapsody.mp3"
    },
    {
      "id": 8,
      "title": "Hallelujah",
      "artist": "Jeff Buckley",
      "genre": "Folk",
      "albumArt": "images/hallelujah.jpg",
      "audioSrc": "audio/hallelujah.mp3"
    },
    {
      "id": 9,
      "title": "Rolling in the Deep",
      "artist": "Adele",
      "genre": "Pop",
      "albumArt": "images/rolling-in-the-deep.jpg",
      "audioSrc": "audio/rolling-in-the-deep.mp3"
    },
    {
      "id": 10,
      "title": "Imagine",
      "artist": "John Lennon",
      "genre": "Rock",
      "albumArt": "images/imagine.jpg",
      "audioSrc": "audio/imagine.mp3"
    }
  ]


const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Toggle theme
themeToggle.addEventListener('change', toggleTheme);

function toggleTheme(){
    document.body.classList.toggle('dark-theme');
    themeLabel.textContent = themeToggle.checked ? 'Light' : 'Dark';
    document.querySelectorAll('.sidebar, .main-content, .playlist-section, .player').forEach(el => {
        el.classList.toggle('dark-theme');
    });
}
