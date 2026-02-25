function videoAction() {
    if (!document.querySelector('.custom-page')) {
        return;
    }

    const videoBoxes = document.querySelectorAll('.video__box');
    videoBoxes.forEach(videoBox => {
        if (videoBox) {
            const preview = videoBox.querySelector('.video__box-preview');
            const playButton = videoBox.querySelector('.video__box-play');
            const iframe = videoBox.querySelector('iframe');

            function playVideo() {
                if (!preview) {
                    return;
                }

                // Скрываем элементы
                preview.style.display = 'none';
                playButton.style.display = 'none';
                iframe.style.pointerEvents = 'all';

                // Запускаем видео (добавляем autoplay параметр к src)
                const currentSrc = iframe.src;
                if (!currentSrc.includes('autoplay')) {
                    const separator = currentSrc.includes('?') ? '&' : '?';
                    iframe.src = currentSrc + separator + 'autoplay=1';
                }
            }

            // Вешаем обработчики на клик
            if (playButton) {
                playButton.addEventListener('click', playVideo);
            }
            videoBox.addEventListener('click', playVideo);
        }
    })
}

videoAction();