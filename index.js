const songs = [
  {
    "id": 1,
    "title": "Adventure of a Lifetime",
    "artist": "Coldplay",
    "genre": "metalcore",
    "albumArt": "album-cover/Adventure of a Lifetime.png",
    "audioSrc": "songs/Adventure of a Lifetime.mp3",
  },
  {
    "id": 2,
    "title": "Cold (feat. Future)",
    "artist": "Maroon 5, Future",
    "genre": "pop",
    "albumArt": "album-cover/Cold (feat. Future).png",
    "audioSrc": "songs/Cold (feat. Future).mp3",
  },
  {
    "id": 3,
    "title": "All Rise",
    "artist": "Blue",
    "genre": "pop",
    "albumArt": "album-cover/All Rise.png",
    "audioSrc": "songs/All Rise.mp3",
  },
  {
    "id": 4,
    "title": "Bloody Power Fame",
    "artist": "Coldrain",
    "genre": "metalcore",
    "albumArt": "album-cover/Bloody Power Fame.png",
    "audioSrc": "songs/Bloody Power Fame.mp3",
  },
  {
    "id": 5,
    "title": "CASTLE OF GLASS",
    "artist": "Linkin Park",
    "genre": "rock",
    "albumArt": "album-cover/CASTLE OF GLASS.png",
    "audioSrc": "songs/CASTLE OF GLASS.mp3",
  },
  {
    "id": 6,
    "title": "Let Her Go (feat. Ed Sheeran)",
    "artist": "Passenger, Ed Sheeran",
    "genre": "blues",
    "albumArt": "album-cover/Let Her Go (feat. Ed Sheeran).png",
    "audioSrc": "songs/Let Her Go (feat. Ed Sheeran)mp3",
  },
  {
    "id": 7,
    "title": "Like a Prayer",
    "artist": "Madonna",
    "genre": "pop",
    "albumArt": "album-cover/Like a Prayer.png",
    "audioSrc": "songs/Like a Prayer.mp3",
  },
  {
    "id": 8,
    "title": "My Love",
    "artist": "Westlife",
    "genre": "pop",
    "albumArt": "album-cover/My Love.png",
    "audioSrc": "songs/My Love.mp3",
  },
  {
    "id": 9,
    "title": "Real Gone",
    "artist": "Sheryl Crow",
    "genre": "rock",
    "albumArt": "album-cover/Real Gone.png",
    "audioSrc": "songs/Real Gone.mp3",
  },
  {
    "id": 10,
    "title": "Way down We Go",
    "artist": "Kaleo",
    "genre": "blues",
    "albumArt": "album-cover/Way down We Go.png",
    "audioSrc": "songs/Way down We Go.mp3",
  }
]


//Variables
let currentSong = 0;
let currentGenre = 'all';
let playlistList = {};
let currentPlaylistName = '';

//Elements
const genreList = document.getElementById('genre-filter');
const allSongsContainer = document.getElementById('song-list');
const searchSongInput = document.getElementById('search-songs');
const playerImg = document.getElementById('album-art');
const playerTitle = document.getElementById('song-title');
const playerArtist = document.getElementById('song-artist');
const playerAudio = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const addToPlaylistBtn = document.getElementById('add-to-playlist');
const removeFromPlaylistBtn = document.getElementById('remove-from-playlist');
const createPlaylistInput = document.getElementById('playlist-name');
const createPlaylistBtn = document.getElementById('create-playlist');
const searchCurrentPlaylistInput = document.getElementById('search-current-playlist');
const currentPlaylistContainer = document.getElementById('current-playlist');
const searchAllPlaylistInput = document.getElementById('search-playlists');
const allPlaylistContainer = document.getElementById('all-playlists');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Toggle theme
themeToggle.addEventListener('change', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  themeLabel.textContent = themeToggle.checked ? 'Light' : 'Dark';
  document.querySelectorAll('.sidebar, .main-content, .playlist-section, .player').forEach(el => {
    el.classList.toggle('dark-theme');
  });
}


//Load Songs
function showSongs() {
  let list = [];
  if (currentGenre === 'all') {
    list = songs;
  }
  else {
    list = songs.filter((song) => { return song.genre === currentGenre });
  }

  list.forEach((song) => {
    const temp = document.createElement('li');
    temp.textContent = song.title;
    allSongsContainer.appendChild(temp);

    temp.addEventListener('click', () => {
      currentSong = song.id - 1;
      renderCurrentSong();
    })
  })
}

genreList.addEventListener('change', () => {
  allSongsContainer.innerHTML = '';
  currentGenre = genreList.value;
  showSongs();
})


//Search Song
function searchSong() {
  allSongsContainer.innerHTML = '';

  let list = [];
  const input = searchSongInput.value;

  list = songs.filter((song) => {
    return song.title.includes(input);
  })

  list.forEach((song) => {
    const temp = document.createElement('li');
    temp.textContent = song.title;
    allSongsContainer.appendChild(temp);

    temp.addEventListener('click', () => {
      currentSong = song.id - 1;
      renderCurrentSong();
    })
  })
}

searchSongInput.addEventListener('input', searchSong);


//Load Player
function renderCurrentSong() {
  const song = songs[currentSong];

  playerImg.src = song.albumArt;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerAudio.src = song.audioSrc;
}

function previousSong() {
  if (currentSong > 0) {
    currentSong--;
    renderCurrentSong();
  }
}
prevBtn.addEventListener('click', previousSong);

function nextSong() {
  if (currentSong < songs.length - 1) {
    currentSong++;
    renderCurrentSong();
  }
}
nextBtn.addEventListener('click', nextSong);

function addToPlaylist() {
  if (currentPlaylistName != '') {
    const currentPlaylist = playlistList[currentPlaylistName];
    currentPlaylist.push(songs[currentSong]);
    renderPlaylistSong();
  }
}
addToPlaylistBtn.addEventListener('click', addToPlaylist);

function removeFromPlaylist() {
  const song = songs[currentSong];
  const currentPlaylist = playlistList[currentPlaylistName];

  if (currentPlaylist.includes(song)) {
    const index = currentPlaylist.indexOf(song);
    currentPlaylist.splice(index, 1);
  }
  renderPlaylistSong();
}
removeFromPlaylistBtn.addEventListener('click', removeFromPlaylist);


//All Playlist
function createPlaylist() {
  if (createPlaylistInput.value) {
    const playlistName = createPlaylistInput.value;
    createPlaylistInput.value = '';
    const playlistNames = Object.keys(playlistList);

    if (!playlistNames.includes(playlistName)) {
      playlistList[playlistName] = [];
      loadAllPlaylist();
    }
  }
}
createPlaylistBtn.addEventListener('click', createPlaylist);

//Load All Playlist
function loadAllPlaylist() {
  allPlaylistContainer.innerHTML = '';
  const playlistNames = Object.keys(playlistList);

  playlistNames.forEach((name) => {
    const temp = document.createElement('li');
    temp.textContent = name;
    allPlaylistContainer.appendChild(temp);

    temp.addEventListener('click', () => {
      currentPlaylistName = name;
      renderPlaylistSong();
    })
  })
}


//Load Current Playlist
function renderPlaylistSong() {
  currentPlaylistContainer.innerHTML = '';

  if (playlistList[currentPlaylistName]) {
    const currentPlaylist = playlistList[currentPlaylistName];
    currentPlaylist.forEach((song) => {
      const songName = document.createElement('li');
      songName.textContent = song.title, '-', song.artist;
      currentPlaylistContainer.appendChild(songName);

      songName.addEventListener('click', () => {
        currentSong = song.id - 1;
        renderCurrentSong();
      })
    })
  }
}

//Search Current Playlist
function searchCurrentPlaylist() {
  currentPlaylistContainer.innerHTML = '';

  let list = [];
  let input = searchCurrentPlaylistInput.value;

  list = playlistList[currentPlaylistName].filter((song) => {
    return song.title.includes(input);
  })

  list.forEach((song) => {
    const temp = document.createElement('li');
    temp.textContent = song.title;
    currentPlaylistContainer.appendChild(temp);

    temp.addEventListener('click', () => {
      currentSong = song.id - 1;
      renderCurrentSong();
    })
  })
}

searchCurrentPlaylistInput.addEventListener('input', searchCurrentPlaylist);


//Search Playlists
function searchAllPlaylist() {
  allPlaylistContainer.innerHTML = '';

  let list = [];
  let input = searchAllPlaylistInput.value;
  const playlistNames = Object.keys(playlistList);

  list = playlistNames.filter((name) => { return name.includes(input) });

  list.forEach((name) => {
    const temp = document.createElement('li');
    temp.textContent = name;
    allPlaylistContainer.appendChild(temp);

    temp.addEventListener('click', () => {
      currentPlaylistName = name;
      renderPlaylistSong();
    })
  })
}

searchAllPlaylistInput.addEventListener('input', searchAllPlaylist);



renderCurrentSong();
showSongs();
loadAllPlaylist();
renderPlaylistSong();