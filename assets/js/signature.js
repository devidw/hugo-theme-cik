// add class when signature becomes visible through scrolling
var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        let signature = entries[0].target
        signature.classList.add('in-view')
    }
}, { threshold: [1] })

observer.observe(document.querySelector("#signature"))