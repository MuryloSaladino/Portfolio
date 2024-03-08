window.addEventListener('scroll', () => {

    const bar = document.getElementById("bar")
    const body = document.body
    const html = document.documentElement
    const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) - 911
    

    bar.style.width = String((Number(window.scrollY)/ height * 100))+'vw'
})