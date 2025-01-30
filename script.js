// Fungsi navigasi untuk butang footer
function navigate(page) {
    console.log("Navigating to:", page);
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up buttons.");

    // =================================
    // 1. Fungsi Save Profile (Diperbaiki)
    // =================================
    function saveProfile() {
        const usernameInput = document.getElementById("username");
        if (!usernameInput) {
            console.error("Username input not found!");
            return;
        }

        const username = usernameInput.value.trim();
        if (!username) {
            alert("Username cannot be empty.");
            return;
        }

        localStorage.setItem("username", username);
        alert("Profile saved successfully!");
        console.log("Profile saved:", username);
    }

    // Event listener untuk save profile
    const saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.addEventListener("click", saveProfile);
    }

    // =================================
    // 2. Event Listener Umum untuk Logging (Diperbaiki)
    // =================================
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            console.log("Button clicked:", event.target.innerText);
        });
    });

    // =================================
    // 3. Fungsi Submit Post (Diperbaiki)
    // =================================
    const submitPostButton = document.getElementById("submitPost");
    const postContentInput = document.getElementById("postContent");
    const postsContainer = document.getElementById("postsContainer");

    if (submitPostButton && postContentInput && postsContainer) {
        submitPostButton.addEventListener("click", function() {
            const postContent = postContentInput.value.trim();
            if (postContent) {
                const newPost = document.createElement("div");
                newPost.innerText = postContent;
                postsContainer.appendChild(newPost);
                postContentInput.value = "";
                alert("Post created successfully!");
            } else {
                alert("Please enter content before posting.");
            }
        });
    }

    // =================================
    // 4. Fungsi Follow User (Diperbaiki)
    // =================================
    const followButton = document.querySelector("[data-follow-button]");
    const userToFollowInput = document.getElementById("userToFollow");
    const followingList = document.getElementById("followingList");

    if (followButton && userToFollowInput && followingList) {
        followButton.addEventListener("click", function() {
            const username = userToFollowInput.value.trim();
            if (username) {
                const newFollow = document.createElement("li");
                newFollow.innerText = username;
                followingList.appendChild(newFollow);
                userToFollowInput.value = "";
                alert("You are now following " + username);
            } else {
                alert("Please enter a username to follow.");
            }
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up buttons.");

    // Navigasi butang profile
    const profileButton = document.getElementById("profileButton");
    if (profileButton) {
        profileButton.addEventListener("click", function() {
            navigate("profile.html");
        });
    }

    // Navigasi butang lain
    const feedButton = document.getElementById("feedButton");
    if (feedButton) {
        feedButton.addEventListener("click", function() {
            navigate("feed.html");
        });
    }

    const followButton = document.querySelector("[data-follow-button]");
    if (followButton) {
        followButton.addEventListener("click", function() {
            alert("Follow button clicked!");
        });
    }
});
