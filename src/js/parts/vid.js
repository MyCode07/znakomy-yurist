function videoAction() {
    if (!document.querySelector('.custom-page')) {
        return;
    }

    const videoBoxes = document.querySelectorAll('.video__box');
    videoBoxes.forEach(videoBox => {
        if (videoBox) {
            const videoBoxIframe = videoBox.querySelector('iframe');
            const preview = videoBox.querySelector('.video__box-preview');
            const playButton = videoBox.querySelector('.video__box-play');
            const iframe = videoBox.querySelector('.iframe');

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
    })
}

videoAction();