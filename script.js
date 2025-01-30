
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // PROFILE HANDLING - Simpan Nama & Gambar Profil
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

    // LOAD PROFILE DATA FROM LOCAL STORAGE
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    const savedProfilePic = localStorage.getItem("profilePic");
    if (savedProfilePic) {
        profilePic.src = savedProfilePic;
    }

    // 🔥 PASTIKAN "NEW POST" BERFUNGSI & DISIMPAN DALAM LOCAL STORAGE 🔥
    const newPostButton = document.getElementById("newPostButton");
    const postModal = document.getElementById("postModal");
    const closeModal = document.querySelector(".close");
    const submitPostButton = document.getElementById("submitPost");
    const postList = document.getElementById("post-list");

    function savePostsToLocalStorage() {
        localStorage.setItem("feedPosts", postList.innerHTML);
    }

    function loadPostsFromLocalStorage() {
        const savedPosts = localStorage.getItem("feedPosts");
        if (savedPosts) {
            postList.innerHTML = savedPosts;
        }
    }

    if (newPostButton) {
        newPostButton.addEventListener("click", function() {
            postModal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function() {
            postModal.style.display = "none";
        });
    }

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            const postText = document.getElementById("postText").value.trim();
            const postImageInput = document.getElementById("postImage");

            if (postText || postImageInput.files.length > 0) {
                const postCard = document.createElement("div");
                postCard.classList.add("post-card");

                let postContent = `<div class="post-content"><h3>New User</h3>`;

                if (postText) {
                    postContent += `<p>${postText}</p>`;
                }

                if (postImageInput.files.length > 0) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        postContent += `<img src="${event.target.result}" class="post-image">`;
                        postCard.innerHTML = postContent + `</div>`;
                        postList.prepend(postCard);
                        savePostsToLocalStorage();
                    };
                    reader.readAsDataURL(postImageInput.files[0]);
                } else {
                    postCard.innerHTML = postContent + `</div>`;
                    postList.prepend(postCard);
                    savePostsToLocalStorage();
                }

                postModal.style.display = "none";
                document.getElementById("postText").value = "";
                postImageInput.value = "";
            } else {
                alert("Please write something or upload an image.");
            }
        });
    }

    loadPostsFromLocalStorage(); // Load post yang disimpan di Local Storage

    // 🔥 NAVIGASI - PASTIKAN BUTTON NAVIGATION BERFUNGSI 🔥
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
