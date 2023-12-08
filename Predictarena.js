const leagueList = document.querySelector('.leaguebar')
const drop = document.querySelector('.dropdown')

leagueList.addEventListener('click',()=>{
    drop.style.visibility = 'visible'
    drop.style.transition = 'all 1s'
});
drop.addEventListener('mouseover',()=>{
    drop.style.visibility = 'visible'
});
drop.addEventListener('mouseout',()=>{
    drop.style.visibility = 'hidden'
});

const mobileMenu = document.querySelector('.burgericon')
const closeMobilemenu = document.querySelector('.closeicon')
const mobileDropdown = document.querySelector('.mobile-dropdown')


mobileMenu.addEventListener('click',(x)=>{
    let range1 = window.matchMedia('(max-width: 47em)')
    if(range1.matches){
    closeMobilemenu.style.visibility = 'visible'
    mobileDropdown.style.visibility = 'visible'
    mobileMenu.style.visibility = 'hidden'
    }
    else{
        closeMobilemenu.style.visibility = 'hidden'
        mobileDropdown.style.visibility = 'hidden'
        mobileMenu.style.visibility = 'hidden'
    }

})

closeMobilemenu.addEventListener('click',(x)=>{
    let range2 =window.matchMedia('(max-width:47em)')
    if(range2.matches){
    mobileDropdown.style.visibility = 'hidden'
    mobileMenu.style.visibility = 'visible'
    closeMobilemenu.style.visibility = 'hidden'
    }
    else{
        mobileDropdown.style.visibility = 'hidden'
        mobileMenu.style.visibility = 'hidden'
        closeMobilemenu.style.visibility = 'hidden'
    }
})


//Image Slider

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
