const page1 = document.querySelector('#page1');
// const page2 = document.querySelector('.page2');
// const page3 = document.querySelector('.page3');
// const page4 = document.querySelector('.page4');
// const page5 = document.querySelector('.page5');
// const page6 = document.querySelector('.page6');
// const page7 = document.querySelector('.page7');
const main = document.querySelectorAll('body div');
console.log(page1)


document.addEventListener('wheel', (e) => {
    if(e.deltaY > 0) {
        e.target.nextElementSibling.classList.add('active');
        e.target.classList.remove('active')  
        if(e.target.nextElementSibling.classList == 'active' ){
            // console.log('activa')
           e.target.nextElementSibling.scrollIntoView({behavior: 'smooth'});
    }
    }

    if(e.deltaY < 0) {
        e.target.previousElementSibling.classList.add('active');
        e.target.classList.remove('active')  
        e.target.previousElementSibling.scrollIntoView({behavior: 'smooth'});
    }
        
    if(e.target == document.getElementById("last")){

        // console.log('last')

       page1.scrollIntoView({behavior: 'smooth'});
    }
})



    