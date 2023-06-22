


window.document.addEventListener('scroll', () => {
    const lastKnownPosition = window.scrollY
    if (lastKnownPosition > 10) {
        document.querySelector(".navbar").style.backgroundColor = "white";
        document.querySelector(".navbar").style.borderBottom = "none";

    } else {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
        document.querySelector(".navbar").style.borderBottom = "1px solid #000";
    }
})