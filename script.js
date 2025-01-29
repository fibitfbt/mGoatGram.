// Fungsi navigasi untuk butang footer
function navigate(page) {
    window.location.href = page;
}

// Tambahkan event listener untuk butang yang tidak berfungsi
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up buttons.");

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            console.log("Button clicked:", event.target.innerText);
        });
    });

    // Fungsi submit post
    let submitPostButton = document.getElementById("submitPost");
    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            let postContent = document.getElementById("postContent").value.trim();
            if (postContent) {
                let postsContainer = document.getElementById("postsContainer");
                let newPost = document.createElement("div");
                newPost.innerText = postContent;
                postsContainer.appendChild(newPost);
                document.getElementById("postContent").value = "";
                alert("Post created successfully!");
            } else {
                alert("Please enter content before posting.");
            }
        });
    }

    // Fungsi follow user
    let followButton = document.querySelector("button[onclick='followUser()']");
    if (followButton) {
        followButton.addEventListener("click", function() {
            let username = document.getElementById("userToFollow").value.trim();
            if (username) {
                let followingList = document.getElementById("followingList");
                let newFollow = document.createElement("li");
                newFollow.innerText = username;
                followingList.appendChild(newFollow);
                document.getElementById("userToFollow").value = "";
                alert("You are now following " + username);
            } else {
                alert("Please enter a username to follow.");
            }
        });
    }
});
