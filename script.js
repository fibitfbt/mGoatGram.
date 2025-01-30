
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // NAVIGATION
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            if (page) {
                window.location.href = page;
            }
        });
    });

    // PROFILE PICTURE UPLOAD HANDLING
    const profilePicInput = document.getElementById("upload-profile-pic");
    const profilePic = document.getElementById("profile-picture");
    const saveButton = document.getElementById("saveButton");

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
            const username = document.getElementById("username").value.trim();
            if (username) {
                localStorage.setItem("username", username);
                alert("Profile updated successfully!");
            }
        });
    }

    // LOAD PROFILE DATA FROM LOCAL STORAGE
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }

    const savedProfilePic = localStorage.getItem("profilePic");
    if (savedProfilePic) {
        profilePic.src = savedProfilePic;
    }
});
