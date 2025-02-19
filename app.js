const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }

    })

})

const obse = new IntersectionObserver((entre)=> {
    entre.forEach((entri)=> {
        if (entri.isIntersecting){
            entri.target.classList.add('reveal');
        }else{
            entri.target.classList.remove('reveal')
        }
    })
})
const rightSde = new IntersectionObserver((income)=> {
    income.forEach((ri)=> {
        if (ri.isIntersecting){
            ri.target.classList.add('revealing');
        }else{
            ri.target.classList.remove('revealing')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));



const elementsNew = document.querySelectorAll('.left')
elementsNew.forEach((el)=> obse.observe(el));

const rights = document.querySelectorAll('.right')
rights.forEach((el)=> rightSde.observe(el));
