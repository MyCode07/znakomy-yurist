import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const searchPopup = document.querySelector('.search');


// menu arrow buttom
const arrow = `<button><svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 0.5L6 5.5L11 0.5" stroke-width="1.25"/></svg></button>`;

// add menu summenu opener button
const submenuList = [...document.querySelectorAll('.menu ul li'), ...document.querySelectorAll('.header ul li'), ...document.querySelectorAll('.header__left div')];
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function (e) {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        let menu = item.closest('ul');
        if (item.closest('.header__left')) {
            menu = item.closest('div');
        }
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}



document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!document.querySelector('.custom-page')) {
        return;
    }

    if (targetEl.classList.contains('header__burger')) {
        burger.classList.add('_active');
        menu.classList.add('_open');
        lockPadding();
    }

    if (targetEl.classList.contains('menu-close')) {
        burger.classList.remove('_active');
        menu.classList.remove('_open');
        unLockPadding();
    }

    if (targetEl.hasAttribute('data-open-search')) {
        searchPopup.classList.add('_open');
    }

    if (targetEl.hasAttribute('data-close-search')) {
        searchPopup.classList.remove('_open');
    }

    if (!targetEl.hasAttribute('data-open-search') && !targetEl.closest('.search') && searchPopup && searchPopup.classList.contains('_open')) {
        searchPopup.classList.remove('_open');
    }

    if (targetEl.classList.contains('header__search')) {
        document.querySelector('.search-popup').classList.add('_open');
    }

    if (targetEl.classList.contains('search-popup')) {
        targetEl.classList.remove('_open');
    }
})