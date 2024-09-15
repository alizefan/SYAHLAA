let currentPage = 1;

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < 5) {
        document.getElementById(`imgPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`txtPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`imgPage${currentPage + 1}`).style.transform = 'rotateY(0)';
        document.getElementById(`txtPage${currentPage + 1}`).style.transform = 'rotateY(0)';
        currentPage++;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        document.getElementById(`imgPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`txtPage${currentPage}`).style.transform = 'rotateY(-180deg)';
        document.getElementById(`imgPage${currentPage - 1}`).style.transform = 'rotateY(0)';
        document.getElementById(`txtPage${currentPage - 1}`).style.transform = 'rotateY(0)';
        currentPage--;
    }
});

// Get modal element
var modal = document.getElementById("notificationModal");

// Get button that opens the modal
var btn = document.getElementById("notifyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
