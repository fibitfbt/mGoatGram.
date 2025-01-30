
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

    // SAVE PROFILE FUNCTION
    const saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.addEventListener("click", function() {
            const username = document.getElementById("username").value.trim();
            const profilePicInput = document.getElementById("upload-profile-pic");
            
            if (username) {
                localStorage.setItem("username", username);
                alert("Username saved successfully!");
            }

            if (profilePicInput.files.length > 0) {
                const file = profilePicInput.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    localStorage.setItem("profilePic", event.target.result);
                    document.getElementById("profile-picture").src = event.target.result;
                    alert("Profile picture updated!");
                };
                reader.readAsDataURL(file);
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
        document.getElementById("profile-picture").src = savedProfilePic;
    }
});
