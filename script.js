console.log('Script Loaded');

function navigate(page) {
    window.location.href = page;
}

function openPostModal() {
    document.getElementById("post-modal").style.display = "block";
}

function closePostModal() {
    document.getElementById("post-modal").style.display = "none";
}

function submitPost() {
    let postContent = document.getElementById("post-content").value.trim();
    let imageUpload = document.getElementById("image-upload").files[0];

    if (postContent || imageUpload) {
        let postsContainer = document.getElementById("posts-container") || document.getElementById("feed-container");
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
        closePostModal();
    } else {
        alert("Please enter text or select an image to post.");
    }
}

function saveProfile() {
    let username = document.getElementById("username").value.trim();
    if (username) {
        localStorage.setItem("username", username);
        alert("Profile updated successfully!");
    } else {
        alert("Please enter a valid username.");
    }
}

function followUser() {
    let userToFollow = document.getElementById("userToFollow").value.trim();
    if (userToFollow) {
        let followingList = document.getElementById("followingList");
        let listItem = document.createElement("li");
        listItem.innerText = userToFollow;
        followingList.appendChild(listItem);
        alert("You are now following " + userToFollow);
    } else {
        alert("Please enter a username to follow.");
    }
}
