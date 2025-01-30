
// Fungsi navigasi untuk butang footer
function navigate(page) {
    console.log("Navigating to:", page);
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up buttons.");

    // Event delegation untuk semua butang
    document.body.addEventListener("click", function(event) {
        if (event.target.matches(".btn")) {
            console.log("Button clicked:", event.target.id);

            // Handle butang profil
            if (event.target.id === "profileButton") {
                navigate("profile.html");
            }

            // Handle butang feed
            if (event.target.id === "feedButton") {
                navigate("feed.html");
            }

            // Handle butang save profile
            if (event.target.id === "saveButton") {
                saveProfile();
            }
        }
    });

    // Fungsi Save Profile
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
});
