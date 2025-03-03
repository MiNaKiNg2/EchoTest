document.addEventListener("DOMContentLoaded", function() {
    let postImages = document.querySelectorAll(".post-image");

    postImages.forEach(image => {
        if (image.getAttribute("src").trim() !== "") {
            image.classList.remove("d-none");
        }
    });
});
const image = document.getElementById("imageUpload");
const imageReview = document.getElementById("imagePreview");
const btnCreatePost = document.getElementById("addPostButton");
const postContent = document.getElementById("postContent");
const removeImage = document.getElementById("removeImage");

image.addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            imageReview.src = e.target.result;
            imageReview.classList.remove("d-none");
            removeImage.classList.remove("d-none");
        }
        reader.readAsDataURL(file);
        document.querySelector(".sginup-box").style.marginTop = "100px";
    }
});

btnCreatePost.addEventListener("click", function(event) {
    event.preventDefault();

    if (postContent.value.trim() === "" && image.files.length === 0) {
        alert("Please enter post content or upload an image");
        return;
    }

});
removeImage.addEventListener("click", function() {
    imagePreview.src = "";
    imagePreview.classList.add("d-none");
    removeImage.classList.add("d-none");
    imageInput.value = "";
});
document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});