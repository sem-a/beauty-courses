import { show, toggle, hide} from 'slidetoggle';

const offset = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export const scrollAnim = () => {

  window.addEventListener('scroll', animOnscroll);

  function animOnscroll () {
      
    const animItem = document.querySelector('.theory__items') as HTMLElement;
    const image = document.querySelector('.theory-and-teacher-photo') as HTMLElement;
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 2.5;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if(animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    };

    if( (window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight) ) {
      image.classList.add('_active');
    } else {
      image.classList.remove('_active');
      if ( window.pageYOffset > animItemOffset - animItemPoint ) {

        image.classList.add('_bottom')
      }
    }
  }
  if (window.innerWidth > 1100) {
    animOnscroll();
  } else {
    const image = document.querySelector('.theory-and-teacher-photo') as HTMLElement;
    image.classList.remove('_active');
    image.classList.add('_bottom');
  }
};

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
