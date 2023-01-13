/******CARD SLIDER ******/

 //selectors
const wrapper = document.querySelector('.slider-wrapper');
const indicators = [...document.querySelectorAll('.btn')];

let currentTestimonial = 0; 

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
});

/**********************************************************************/
/*FAQ SECTION*/

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];
      
        faq.classList.toggle('show');
        button.classList.toggle('border');
        icon.classList.toggle('rotate');
    })
} )
