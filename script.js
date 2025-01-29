document.addEventListener("DOMContentLoaded", function() {
    console.log('Script loaded and event listeners attached.');

    // Ensure buttons are clickable
    document.getElementById("upload-profile-pic").addEventListener("change", updateProfilePicture);
    document.getElementById("save-profile").addEventListener("click", saveProfile);
    document.getElementById("buy-blue-badge").addEventListener("click", function() {
        purchaseBadge('blue');
    });
    document.getElementById("buy-gold-badge").addEventListener("click", function() {
        purchaseBadge('gold');
    });

    function updateProfilePicture() {
        let file = document.getElementById("upload-profile-pic").files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profile-picture").src = e.target.result;
                localStorage.setItem("profilePicture", e.target.result);
            };
            reader.readAsDataURL(file);
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

    function purchaseBadge(type) {
        let badgeContainer = document.getElementById("badge-display");
        let badge = document.createElement("span");
        badge.classList.add("badge");

        if (type === "blue") {
            badge.innerText = "🐐 Blue Goat Badge";
            badge.style.color = "blue";
            localStorage.setItem("goatBadge", "blue");
        } else if (type === "gold") {
            badge.innerText = "🐐 Gold Goat Badge";
            badge.style.color = "gold";
            localStorage.setItem("goatBadge", "gold");
        }

        badgeContainer.innerHTML = "";
        badgeContainer.appendChild(badge);
        alert("Badge purchased successfully!");
    }

    // Load saved profile data on page load
    let savedUsername = localStorage.getItem("username");
    let savedProfilePic = localStorage.getItem("profilePicture");
    let savedBadge = localStorage.getItem("goatBadge");

    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }

    if (savedProfilePic) {
        document.getElementById("profile-picture").src = savedProfilePic;
    }

    if (savedBadge) {
        purchaseBadge(savedBadge);
    }
});