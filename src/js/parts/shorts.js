function shortVideoAction() {
    if (!document.querySelector('.custom-page')) {
        return;
    }

    const videoBoxes = document.querySelectorAll('.example-card');
    videoBoxes.forEach(videoBox => {
        if (videoBox) {
            const preview = videoBox.querySelector('.example-card__preview');
            const playButton = videoBox.querySelector('.example-card__play');
            const iframe = videoBox.querySelector('iframe');

            function playVideo() {
                if (!preview) {
                    return;
                }


                const аctiveFrame = document.querySelector('.example-card._play');
                if (аctiveFrame) {
                    item.classList.remove('_play')
                    let frame = аctiveFrame.querySelector('iframe');
                    const src = frame.src;
                    console.log('videoBoxes');

                    if (!src.includes('autoplay')) {
                        const separator = src.includes('?') ? '&' : '?';
                        frame.src = src + separator + 'autoplay=0';
                    } else {
                        frame.src = src.replace(/autoplay=([^&]*)/, 'autoplay=0');
                    }
                }


                // Запускаем видео (добавляем autoplay параметр к src)
                const currentSrc = iframe.src;
                if (!currentSrc.includes('autoplay')) {
                    const separator = currentSrc.includes('?') ? '&' : '?';
                    iframe.src = currentSrc + separator + 'autoplay=1';
                } else {
                    iframe.src = currentSrc.replace(/autoplay=([^&]*)/, 'autoplay=1');
                }
                videoBox.classList.add('_play')
            }

            // Вешаем обработчики на клик
            if (playButton) {
                playButton.addEventListener('click', playVideo);
            }
            videoBox.addEventListener('click', playVideo);
        }
    })
}

shortVideoAction();