function getAndSetInitialLineCount() {
    let initial = document.querySelector('article > p, article > .paragraph > p')
    // console.log(initial)

    if (!initial) {
        return
    }

    let initialHeight = initial.offsetHeight
    // console.log(initialHeight)

    let lineHeight = 30

    let initialLines = initialHeight / lineHeight
    initialLines = Math.floor(initialLines)
    // console.log(initialLines)

    // limit maximal number of lines
    if (initialLines > 3) {
        initialLines = 3
    }

    if (initialLines > 1) {
        initial.style.setProperty('--initial-lines', initialLines)
        initial.setAttribute('data-lines', initialLines)
    }
}

window.addEventListener('load', getAndSetInitialLineCount)
window.addEventListener('resize', getAndSetInitialLineCount)