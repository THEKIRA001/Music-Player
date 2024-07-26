[
    {
        "title": "Death Bed",
        "artist": "Powfu",
        "genre": "Pop",
        "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
        "id": "1"
    },
    {
        "title": "Bad Liar",
        "artist": "Imagine Dragons",
        "genre": "Rock",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
        "id": "2"
    },
    {
        "title": "Faded",
        "artist": "Alan Walker",
        "genre": "Rock",
        "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
        "id": "3"
    },
    {
        "title": "Hate Me",
        "artist": "Ellie Goulding",
        "genre": "Hip hop",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "4"
    },
    {
        "title": "Solo",
        "artist": "Clean Bandit",
        "genre": "Pop",
        "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
        "id": "5"
    },
    {
        "title": "Without Me",
        "artist": "Halsey",
        "genre": "Pop",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
        "id": "6"
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