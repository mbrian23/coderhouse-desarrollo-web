function removeSkeletonClass(element) {
    element.classList.remove("skeleton")
}

document.querySelectorAll(".skeleton").forEach(function (element) {
    if (element.complete) {
        removeSkeletonClass(element)
    }
    element.addEventListener("load", (e) => {
        removeSkeletonClass(e.target)
    })
})
