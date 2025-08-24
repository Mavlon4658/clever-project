const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '(000) 000-00-00',
        })
    });
}

const checkCodeInputes = document.querySelectorAll('.check-code input');
const checkCodeSubmit = document.querySelector('.check-code__submit');
if (checkCodeInputes.length) {

    checkCodeInputes.forEach((input, index) => {
        IMask(input, {
            mask: '0',
        })

        input.addEventListener("input", () => {
            if (input.value.length > 0 && index < checkCodeInputes.length - 1) {
                checkCodeInputes[index + 1].focus();
            }
            checkComplete();
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                checkCodeInputes[index - 1].focus();
            }
        });
    });

    function checkComplete() {
        const code = Array.from(checkCodeInputes).map(input => input.value).join("");
        if (code.length < checkCodeInputes.length) {
            checkCodeSubmit.classList.add('disabled');
        } else {
            checkCodeSubmit.classList.remove('disabled')
        }
    }
}

const anonsSwp = new Swiper('.anons .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    // initialSlide: 2,
    effect: 'fade',
    allowTouchMove: false,
    navigation: {
        nextEl: '.anons .swiper .btn-neutral',
    }
})
const anonsSwpPagination = document.querySelector('.anons .swp-pagination');
if (document.querySelector('.anons .swiper')) {
    for (let i = 1; i <= anonsSwp.slides.length; i++) {
        let span = document.createElement('span');
        anonsSwpPagination.appendChild(span);
    }
    anonsSwp.on('slideChange', function (e) {
        for (let i = 1; i <= anonsSwp.slides.length; i++) {
            if (i <= anonsSwp.realIndex+1) {
                document.querySelectorAll('.anons .swp-pagination span')[i-1].classList.add('active');
            } else {
                document.querySelectorAll('.anons .swp-pagination span')[i-1].classList.remove('active');
            }
        }
    });
}