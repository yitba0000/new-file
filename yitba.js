let sections = document.querySelectorAll("section");
let navlinks = doucment.querySelectorAll("header nav a");
window.addEventListener(onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                doucment.querySelector('header nav a [href*= ' + id + ']').classlist.add('active');
            });
        };
    });
});
const typed = new Typed('.multiple-text' , {
    strings: ['Frontend Developer' , 'Youtuber' , 'backEndDeveloper'] ,
    typeSpeed:100 ,
    backSpeed:100 ,
    backdelay:100 ,
    loop:true ,
})