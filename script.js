document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // 🔥 PENGURUSAN PROFILE 🔥
    const profilePicInput = document.getElementById("upload-profile-pic");
    const profilePic = document.getElementById("profile-picture");
    const saveButton = document.getElementById("saveButton");
    const usernameInput = document.getElementById("username");

    if (profilePicInput) {
        profilePicInput.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePic.src = event.target.result;
                    localStorage.setItem("profilePic", event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (saveButton) {
        saveButton.addEventListener("click", function() {
            const username = usernameInput.value.trim();
            if (username) {
                localStorage.setItem("username", username);
                alert("Profile saved successfully!");
            } else {
                alert("Please enter a username before saving.");
            }
        });
    }

    // Muatkan Data Profil dari Local Storage
    const savedUsername = localStorage.getItem("username");
    if (savedUsername && usernameInput) {
        usernameInput.value = savedUsername;
    }

    const savedProfilePic = localStorage.getItem("profilePic");
    if (savedProfilePic && profilePic) {
        profilePic.src = savedProfilePic;
    }

    // 🔥 PENGURUSAN "NEW POST" 🔥
    const submitPostButton = document.getElementById("submitPost");
    const postTextInput = document.getElementById("postText");
    const postImageInput = document.getElementById("postImage");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            console.log("Post button clicked!");

            const postText = postTextInput.value.trim();
            let posts = JSON.parse(localStorage.getItem("feedPosts")) || [];

            const newPost = { 
                username: localStorage.getItem("username") || "New User", 
                text: postText, 
                image: null 
            };

            if (postImageInput.files.length > 0) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    newPost.image = event.target.result;
                    posts.unshift(newPost);
                    localStorage.setItem("feedPosts", JSON.stringify(posts));
                    console.log("Post saved, redirecting to Feed...");
                    window.location.href = "feed.html"; // Navigasi ke Feed selepas post berjaya
                };
                reader.readAsDataURL(postImageInput.files[0]);
            } else {
                posts.unshift(newPost);
                localStorage.setItem("feedPosts", JSON.stringify(posts));
                console.log("Post saved, redirecting to Feed...");
                window.location.href = "feed.html"; // Navigasi ke Feed selepas post berjaya
            }
        });
    }

    // 🔥 NAVIGASI 🔥
    const feedNav = document.getElementById("nav-feed");
    const profileNav = document.getElementById("nav-profile");
    const followingNav = document.getElementById("nav-following");

    if (feedNav) {
        feedNav.addEventListener("click", function() {
            window.location.href = "feed.html";
        });
    }

    if (profileNav) {
        profileNav.addEventListener("click", function() {
            window.location.href = "profile.html";
        });
    }

    if (followingNav) {
        followingNav.addEventListener("click", function() {
            window.location.href = "following.html";
        });
    }
});
