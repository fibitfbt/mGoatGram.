console.log('Script Loaded');

const API_KEY = "api_a2V5X2MxOWE1ZjBkNGZiMTdkNWQ2OWZmMWUwNzAzOTlkYzkzOnNrXzdhYjJmYjJjZmU1YjQ2MGZlYzRjN2EyM2E0OTE2Nzc4N2QwZDNmYjAyZTkyNmYyNg";
const APP_ID = "app_0cb3ee4cf388a7d41c9401e1fe0b950a";
const WORLDCOIN_URL = "worldapp://mini-app?app_id=" + APP_ID;

document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = WORLDCOIN_URL;
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

document.getElementById("new-post-btn").addEventListener("click", function() {
    let postContent = prompt("Enter your post content:");
    if (postContent) {
        let postsContainer = document.getElementById("posts-container");
        let newPost = document.createElement("p");
        newPost.innerText = postContent;
        postsContainer.appendChild(newPost);
    }
});

