let isPlaying = false;
const audio = new Audio('URL_DEL_STREAM_DE_TU_RADIO');
const trackInfo = document.getElementById('track-info');

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('play-pause').innerText = 'Escuchar ahora';
    } else {
        audio.play();
        document.getElementById('play-pause').innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

audio.addEventListener('playing', () => {
    fetch('URL_DE_LA_API_DE_ZENO_FM')
        .then(response => response.json())
        .then(data => {
            trackInfo.innerText = `${data.artist} - ${data.title}`;
        })
        .catch(error => {
            trackInfo.innerText = 'No se pudo cargar la información de la canción';
        });
});

audio.addEventListener('pause', () => {
    trackInfo.innerText = 'Cargando información de la canción...';
});
