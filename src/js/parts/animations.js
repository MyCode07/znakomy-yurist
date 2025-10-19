import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger);


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
        }
    })
});

function animate(elem) {
    const delay = elem.dataset.delay ? elem.dataset.delay * 1000 : 0

    if (elem.hasAttribute('data-animate-left')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-left');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-right')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-right');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-top')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-top');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-bottom')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-bottom');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-opacity')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-opacity');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-svg')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-svg');
        }, delay);
    }
}

const animateElems = document.querySelectorAll('[data-animate]');
export const animateAction = () => {
    if (!animateElems.length) return;

    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}

// stagger animations
const observerStagger = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animateStagger(targets)
});

function animateStagger(elem) {
    gsap.to(elem, {
        opacity: 1,
        duration: 0.4,
        x: 0,
        y: 0,
        y: 0,
        ease: 'easeInOut',
        stagger: 0.2,
    });
}

const animateElemsStagger = document.querySelectorAll('[data-animate-stagger]');
export const animateStaggerAction = () => {
    if (!animateElemsStagger.length) return
    animateElemsStagger.forEach(elem => {
        observerStagger.observe(elem);
    })
}

export const animateOrder = () => {
    if (window.innerWidth <= 768) return;

    const supportLines = gsap.utils.toArray(".order-item");
    const order = document.querySelector('.order');

    if (!supportLines.length) return

    let top = document.querySelector('.header').getBoundingClientRect().height;
    top += 50

    supportLines.forEach((text, i) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: order,
                start: () => "top -" + (window.innerHeight * i),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                toggleActions: "play none reverse none",
                invalidateOnRefresh: true,
            }
        })
            .to(text, { y: 0 + i * 67 })
    });

    ScrollTrigger.create({
        trigger: "section.order",
        scrub: true,
        // markers: true,
        pin: true,
        start: () => `top ${top}`,
        end: () => "+=" + ((supportLines.length + 1) * window.innerHeight),
        invalidateOnRefresh: true,
    });

}

export const animateServiceCards = () => {
    const serviceItems = document.querySelectorAll('.services li');
    if (!serviceItems || window.innerWidth <= 1024) return

    serviceItems.forEach((item, index) => {

        createScrollAnimation({
            elem: item,
            scale: 0.9 + (index / 100),
            start: `top 45%`,
            end: `+=${item.getBoundingClientRect().height / 2}`
        })

    })


    function createScrollAnimation(params) {
        gsap.to(params.elem, {
            scale: params.scale,
            rotateX: "-10deg",
            immediateRender: !0,
            scrollTrigger: {
                trigger: params.elem,
                start: params.start,
                end: params.end,
                // scrub: !0,
                scrub: 1,
                // markers: true,
            },
        })
    }
}

export const animateAdvantages = () => {
    const advantagesItems = document.querySelectorAll('.advantages-card');
    const svg = document.querySelector('.advantages svg');
    if (!advantagesItems || window.innerWidth <= 1024) return

    let width = 40

    advantagesItems.forEach(item => {
        width += item.getBoundingClientRect().width;
    });


    gsap.to('.advantages ol', {
        x: -width,
        immediateRender: !0,
        scrollTrigger: {
            trigger: '.advantages',
            start: 'top top',
            end: `+=${width}`,
            // scrub: !0,
            scrub: 1,
            // markers: true,
            pin: true,
        },
    })

    if (svg) {
        gsap.to(svg, {
            clipPath: "inset(0% 0% 0% 0%)",
            x: '-25%',
            scrollTrigger: {
                trigger: '.advantages',
                start: 'top top',
                end: `+=${width}`,
                scrub: 1,
            }
        })
    }
}