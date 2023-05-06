import { show, toggle, hide} from 'slidetoggle';

// const offset = (el: HTMLElement) => {
//   const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }

// export const scrollAnim = () => {

//   window.addEventListener('scroll', animOnscroll);

//   function animOnscroll () {
      
//     const animItem = document.querySelector('.theory__items') as HTMLElement;
//     const image = document.querySelector('.theory-and-teacher-photo') as HTMLElement;
//     const animItemHeight = animItem.offsetHeight;
//     const animItemOffset = offset(animItem).top;
//     const animStart = 2.5;

//     let animItemPoint = window.innerHeight - animItemHeight / animStart;
//     if(animItemHeight > window.innerHeight) {
//       animItemPoint = window.innerHeight - window.innerHeight / animStart;
//     };

//     if( (window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight) ) {
//       image.classList.add('_active');
//     } else {
//       image.classList.remove('_active');
//       if ( window.pageYOffset > animItemOffset - animItemPoint ) {

//         image.classList.add('_bottom')
//       }
//     }
//   }
//   if (window.innerWidth > 1100) {
//     animOnscroll();
//   } else {
//     const image = document.querySelector('.theory-and-teacher-photo') as HTMLElement;
//     image.classList.remove('_active');
//     image.classList.add('_bottom');
//   }
// };

export const headerColor = () => {
  const header = document.querySelector('.header');
  const number = document.querySelector('.phone');
  const logoDark = document.querySelector('.dark-logo') as HTMLElement;
  const logoWhite = document.querySelector('.white-logo') as HTMLElement;
  window.addEventListener('scroll', () => {
    if(window.scrollY > 60) {
      header?.classList.add('header-color');
      number?.classList.remove('phone')
      number?.classList.add('dark');
      logoWhite.style.display = 'none';
      logoDark.style.display = 'block';
    } else {
      header?.classList.remove('header-color');
      number?.classList.add('phone')
      number?.classList.remove('dark');
      logoWhite.style.display = 'block';
      logoDark.style.display = 'none';
    }
  });
};

export const openQuestion = () => {
  const btn = document.querySelectorAll('.question__flex');
  for (let i = 0; i < btn.length; i++) {
    const btnTemp = btn[i] as HTMLElement;
    const content = btnTemp.nextElementSibling as HTMLElement;
    btnTemp.addEventListener('click', () => {
      toggle(content, {
        miliseconds: 300,
        transitionFunction: 'ease-in',
        onAnimationStart: () => {
          const arrow = btnTemp.children;
          arrow[1].classList.toggle('theory-active')
        },
        onAnimationEnd: () => {
        },
        onOpen: () => {
          const plus = btnTemp.children[1];
          plus.classList.add('plus-active');
        },
        onClose: () => {
          const plus = btnTemp.children[1];
          plus.classList.remove('plus-active');
        },
        elementDisplayStyle: 'inline-block',
      });
    });
  }
}

export const  phone = () => {
  const phone = document.getElementById('phone') as HTMLInputElement;
  phone.onclick = function () {
    phone.value = '+';
  };
  let old = 0;

  phone.onkeydown = function () {
    var curLen = phone.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen == 2) phone.value = phone.value + '(';

    if (curLen == 6) phone.value = phone.value + ')-';

    if (curLen == 11) phone.value = phone.value + '-';

    if (curLen == 14) phone.value = phone.value + '-';

    if (curLen > 16) phone.value = phone.value.substring(0, phone.value.length - 1);

    old++;
  }
}

export const openWork = () => {
  const btn = document.querySelector('.btn__work') as HTMLElement;
  const content = document.querySelector('.hide-content') as HTMLElement;
  btn.addEventListener('click', () => {
    toggle(content, {
      miliseconds: 1000,
      transitionFunction: 'ease-in',
      onAnimationStart: () => {
      },
      onAnimationEnd: () => {
      },
      onOpen: () => {
        btn.innerHTML = 'Скрыть'
        const work = document.querySelector('.raskrit') as HTMLElement;
        work.classList.add('_active');
      },
      onClose: () => {
        btn.innerHTML = 'Показать еще'
      },
      elementDisplayStyle: 'inline-block',
    });
  });
}

export const openTheory = () => {
  const btn = document.querySelector('.btn__acc') as HTMLElement;
  const content = document.querySelector('.theory__items') as HTMLElement;
  btn.addEventListener('click', () => {
    toggle(content, {
      miliseconds: 300,
      transitionFunction: 'ease-in',
      onAnimationStart: () => {
      },
      onAnimationEnd: () => {
      },
      onOpen: () => {
      },
      onClose: () => {
      },
      elementDisplayStyle: 'inline-block',
    });
  });
}

export const openAccordion = () => {
  const btn = document.querySelectorAll('.name__theory');
  for (let i = 0; i < btn.length; i++) {
    const btnTemp = btn[i] as HTMLElement;
    const content = btnTemp.nextElementSibling as HTMLElement;
    btnTemp.addEventListener('click', () => {
      toggle(content, {
        miliseconds: 300,
        transitionFunction: 'ease-in',
        onAnimationStart: () => {
          const arrow = btnTemp.children;
          arrow[1].classList.toggle('theory-active')
        },
        onAnimationEnd: () => {
        },
        onOpen: () => {
        },
        onClose: () => {
        },
        elementDisplayStyle: 'inline-block',
      });
    });
  }
};
