document.addEventListener("DOMContentLoaded", function() {
    const submitPostButton = document.getElementById("submitPost");
    const postContent = document.getElementById("postContent");
    const imageUpload = document.getElementById("imageUpload");
    const postsContainer = document.getElementById("postsContainer");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            const content = postContent.value.trim();
            const imageFile = imageUpload.files[0];

            if (!content && !imageFile) {
                alert("Please enter text or upload an image to post.");
                return;
            }

            const postElement = document.createElement("div");
            postElement.className = "post";

            if (content) {
                const textElement = document.createElement("p");
                textElement.textContent = content;
                postElement.appendChild(textElement);
            }

            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imgElement = document.createElement("img");
                    imgElement.src = event.target.result;
                    imgElement.style.maxWidth = "100%";
                    postElement.appendChild(imgElement);
                };
                reader.readAsDataURL(imageFile);
            }

            postsContainer.appendChild(postElement);
            postContent.value = "";
            imageUpload.value = "";
        });
    }

    // Handle navigation buttons
    document.getElementById("homeBtn").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("profileBtn").addEventListener("click", function() {
        window.location.href = "profile.html";
    });
});
