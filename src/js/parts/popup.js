document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!document.querySelector('.custom-page')) {
        return;
    }

    if (targetEl.hasAttribute('data-open-popup')) {
        e.preventDefault();
        const id = targetEl.getAttribute('data-open-popup');
        let popup = document.querySelector(`.popup#${id}`);
        if (id == 'popup-widget') {
            popup = document.querySelector(`.popup-widget`);
        }

        if (popup) {
            popup.classList.add('_open')
        }
    }

    if (targetEl.classList.contains('popup') || targetEl.classList.contains('popup-widget')) {
        targetEl.classList.remove('_open')
        closePopup(targetEl)
    }

    if (targetEl.classList.contains('popup-close') || targetEl.hasAttribute('data-close-popup')) {
        let popup = targetEl.closest('.popup');

        if (targetEl.closest('.popup-widget')) {
            popup = document.querySelector(`.popup-widget`);
        }

        closePopup(popup)
    }
})


function closePopup(popup) {
    popup.classList.remove('_open')
}