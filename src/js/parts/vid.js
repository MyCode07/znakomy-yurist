const videoBox = document.querySelector('.video__box');
if (videoBox) {

    const videoBoxIframe = document.querySelector('.video__box iframe');
    const preview = document.querySelector('.video__box-preview');
    const playButton = document.querySelector('.video__box-play');
    const iframe = document.querySelector('.video__box iframe');


    function playVideo() {
        // Скрываем элементы
        preview.style.display = 'none';
        playButton.style.display = 'none';
        videoBoxIframe.style.pointerEvents = 'all';

        // Запускаем видео (добавляем autoplay параметр к src)
        const currentSrc = iframe.src;
        if (!currentSrc.includes('autoplay')) {
            const separator = currentSrc.includes('?') ? '&' : '?';
            iframe.src = currentSrc + separator + 'autoplay=1';
        }
    }

    // Вешаем обработчики на клик
    playButton.addEventListener('click', playVideo);
    videoBox.addEventListener('click', playVideo);
}
