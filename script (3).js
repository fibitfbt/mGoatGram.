if (!localStorage.getItem("followingList")) { 
    localStorage.setItem("followingList", "[]"); 
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded, setting up event listeners.");

    // 🔥 PENGURUSAN PROFILE 🔥
    const profilePicInput = document.getElementById("upload-profile-pic");
    const profilePic = document.getElementById("profile-picture");
    const saveButton = document.getElementById("saveButton");
    const usernameInput = document.getElementById("username");

    // Pratonton Gambar & Simpan ke Server
    if (profilePicInput) {
        profilePicInput.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePic.src = event.target.result;
                    
                    // Hantar gambar ke server
                    const formData = new FormData();
                    formData.append("profilePic", file);
                    
                    fetch("/api/uploadProfilePic", {
                        method: "POST",
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            localStorage.setItem("profilePic", data.imageUrl);
                            alert("Profile picture updated!");
                        } else {
                            alert("Error uploading profile picture.");
                        }
                    })
                    .catch(error => console.error("Error:", error));
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Simpan Profil ke Server
    if (saveButton) {
        saveButton.addEventListener("click", function() {
            const username = usernameInput.value;
            const profilePicUrl = localStorage.getItem("profilePic") || "";

            fetch("/api/saveProfile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, profilePic: profilePicUrl })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Profile saved successfully!");
                } else {
                    alert("Failed to save profile.");
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }
});
