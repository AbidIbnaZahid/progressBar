let percent = document.querySelectorAll(".persent")
let percentArray = Array.from(percent)
let progressBar = document.querySelectorAll(".progress-bar")
let progressBarArray = Array.from(progressBar)

progressBarArray.map((item) => {
    let count = 0
    function progressBar() {
        count++
        item.innerHTML = count + "%"
        item.style.width = count + "%"
        item.style.height = "20px"
        if (count == item.dataset.limit) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    }, 21)
})