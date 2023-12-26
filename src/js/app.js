import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '@/css/app.scss'

const main = async () => {
    const lazysizes = await import(/* webpackChunkName: "lazysizes" */'lazysizes');
    return null;
};

main().then(() => {
    // Hide all the placeholder images when lazyload image is unveiled (also works with AJAX loaded content)
    document.addEventListener('lazyloaded', function(e){
        const imageThatJustLoaded = e.target;
        if (imageThatJustLoaded.previousElementSibling && imageThatJustLoaded.previousElementSibling.classList.contains('placeholder')) {
            imageThatJustLoaded.previousElementSibling.classList.add('opacity-0');
        }
    });
})
