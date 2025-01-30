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
    document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // 🔥 PENGURUSAN FEED & POST 🔥
    const postList = document.getElementById("post-list");

    function loadPostsFromLocalStorage() {
        const savedPosts = localStorage.getItem("feedPosts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    }

    function displayPosts() {
        const posts = loadPostsFromLocalStorage();
        postList.innerHTML = "";

        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");

            let postContent = `<div class="post-content"><h3>${post.username}</h3>`;
            if (post.text) {
                postContent += `<p>${post.text}</p>`;
            }
            if (post.image) {
                postContent += `<img src="${post.image}" class="post-image" style="width: 100%; max-height: 300px; object-fit: cover;">`;
            }
            postCard.innerHTML = postContent + `</div>`;
            postList.appendChild(postCard);
        });
    }

    if (postList) {
        displayPosts();
    }

    // 🔥 PENGURUSAN "NEW POST" 🔥
    document.addEventListener("DOMContentLoaded", function() {
    const submitPostButton = document.getElementById("submitPost");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            const postText = document.getElementById("postText").value.trim();
            const postImageInput = document.getElementById("postImage");

            if (postText || postImageInput.files.length > 0) {
                let posts = JSON.parse(localStorage.getItem("feedPosts")) || [];
                const newPost = {
                    username: localStorage.getItem("username") || "New User",
   document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // 🔥 PENGURUSAN FEED & POST 🔥
    const postList = document.getElementById("post-list");

    function loadPostsFromLocalStorage() {
        const savedPosts = localStorage.getItem("feedPosts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    }

    function displayPosts() {
        const posts = loadPostsFromLocalStorage();
        postList.innerHTML = "";

        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");

            let postContent = `<div class="post-content"><h3>${post.username}</h3>`;
            if (post.text) {
                postContent += `<p>${post.text}</p>`;
            }
            if (post.image) {
                postContent += `<img src="${post.image}" class="post-image" style="width: 100%; max-height: 300px; object-fit: cover;">`;
            }
            postCard.innerHTML = postContent + `</div>`;
            postList.appendChild(postCard);
        });
    }

    if (postList) {
        displayPosts();
    }

    // 🔥 PENGURUSAN "NEW POST" 🔥
    const submitPostButton = document.getElementById("submitPost");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            console.log("Post button clicked!");

            const postText = document.getElementById("postText").value.trim();
            const postImageInput = document.getElementById("postImage");
            let posts = loadPostsFromLocalStorage();

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
                    window.location.href = "feed.html";
                };
                reader.readAsDataURL(postImageInput.files[0]);
            } else {
                posts.unshift(newPost);
                localStorage.setItem("feedPosts", JSON.stringify(posts));
                console.log("Post saved, redirecting to Feed...");
                window.location.href = "feed.html";
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
