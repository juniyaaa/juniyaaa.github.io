const h2 = document.querySelector('h2')


function paintclock() {
    const time = new Date()
    hours = String(time.getHours()).padStart(2,"0")
    Minutes = String(time.getMinutes()).padStart(2,"0")
    seconds = String(time.getSeconds()).padStart(2,"0")
    const currentTime = `${hours}:${Minutes}:${seconds}`
    h2.innerText = currentTime
}

paintclock()
setInterval(paintclock, 1000)