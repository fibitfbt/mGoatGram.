document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // PENGURUSAN PROFILE
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

    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    const savedProfilePic = localStorage.getItem("profilePic");
    if (savedProfilePic) {
        profilePic.src = savedProfilePic;
    }

    // 🔥 PENGURUSAN "NEW POST" DI createPost.html 🔥
    const submitPostButton = document.getElementById("submitPost");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            const postText = document.getElementById("postText").value.trim();
            const postImageInput = document.getElementById("postImage");

            if (postText || postImageInput.files.length > 0) {
                let savedPosts = localStorage.getItem("feedPosts");
                let postList = savedPosts ? JSON.parse(savedPosts) : [];

                const newPost = { text: postText, image: null };

                if (postImageInput.files.length > 0) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        newPost.image = event.target.result;
                        postList.unshift(newPost);
                        localStorage.setItem("feedPosts", JSON.stringify(postList));
                        window.location.href = "feed.html"; // Navigasi balik ke Feed
                    };
                    reader.readAsDataURL(postImageInput.files[0]);
                } else {
                    postList.unshift(newPost);
                    localStorage.setItem("feedPosts", JSON.stringify(postList));
                    window.location.href = "feed.html"; // Navigasi balik ke Feed
                }
            } else {
                alert("Please write something or upload an image.");
            }
        });
    }

    // 🔥 PENGURUSAN PAPARAN POST DI feed.html 🔥
    const postListContainer = document.getElementById("post-list");

    function loadPostsToFeed() {
        const savedPosts = localStorage.getItem("feedPosts");
        if (savedPosts && postListContainer) {
            postListContainer.innerHTML = "";
            const posts = JSON.parse(savedPosts);
            posts.forEach(post => {
                const postCard = document.createElement("div");
                postCard.classList.add("post-card");

                let postContent = `<div class="post-content"><h3>New User</h3>`;
                if (post.text) {
                    postContent += `<p>${post.text}</p>`;
                }
                if (post.image) {
                    postContent += `<img src="${post.image}" class="post-image">`;
                }
                postCard.innerHTML = postContent + `</div>`;
                postListContainer.appendChild(postCard);
            });
        }
    }

    loadPostsToFeed(); // Pastikan post dipaparkan di Feed

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
