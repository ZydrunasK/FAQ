const acorDOM = document.querySelectorAll('.acordeaon');
console.log(acorDOM);


for (const aco of acorDOM) {    
    aco.addEventListener('click', function () {
        this.classList.toggle('active');
        const desc = this.nextElementSibling;

        if (desc.style.maxHeight) {
            desc.style.maxHeight = null;
        } 
        else {
            desc.style.maxHeight = desc.scrollHeight +'px';
        }
    })
}