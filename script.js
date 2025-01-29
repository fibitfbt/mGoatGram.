console.log('Script Loaded');

document.getElementById("new-post-btn").addEventListener("click", function() {
    document.getElementById("post-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("post-modal").style.display = "none";
});

document.getElementById("submit-post-btn").addEventListener("click", function() {
    let postContent = document.getElementById("post-content").value.trim();
    let imageUpload = document.getElementById("image-upload").files[0];

    if (postContent || imageUpload) {
        let postsContainer = document.getElementById("posts-container");
        let newPost = document.createElement("div");
        newPost.classList.add("post");

        let textElement = document.createElement("p");
        textElement.innerText = postContent;
        newPost.appendChild(textElement);

        if (imageUpload) {
            let imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(imageUpload);
            imgElement.style.width = "100%";
            imgElement.style.borderRadius = "10px";
            newPost.appendChild(imgElement);
        }

        postsContainer.appendChild(newPost);
        document.getElementById("post-modal").style.display = "none";
    } else {
        alert("Please enter text or select an image to post.");
    }
});

document.getElementById("feed-btn").addEventListener("click", function() {
    window.location.href = "feed.html";
});

document.getElementById("profile-btn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.getElementById("follow-btn").addEventListener("click", function() {
    window.location.href = "follow.html";
});
