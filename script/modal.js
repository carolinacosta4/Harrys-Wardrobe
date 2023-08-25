function openImage(imageUrl) {
    let modal = document.getElementById('imageModal')
    let modalContent = document.getElementById('modalContent')
    
    modal.style.display = 'flex'
    modalContent.src = imageUrl
}

function closeImage() {
    let modal = document.getElementById('imageModal')
    modal.style.display = 'none'
}