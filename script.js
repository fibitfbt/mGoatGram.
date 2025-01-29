document.addEventListener('DOMContentLoaded', () => {
    console.log('mGoatGram Loaded!');

    const newPostBtn = document.getElementById('newPostBtn');
    const postContainer = document.getElementById('postContainer');
    const profileBtn = document.getElementById('profileBtn');
    const followBtn = document.getElementById('followBtn');
    const feedBtn = document.getElementById('feedBtn');

    if (!newPostBtn || !postContainer || !profileBtn || !followBtn || !feedBtn) {
        console.error('Required elements not found!');
        return;
    }

    // Load subscription check functions from MiniAppHandler.js
    import { authenticateWithWorldcoin, checkSubscription, upgradeToPremium, upgradeToSuperPremium } from './MiniAppHandler.js';

    // Ensure user is authenticated
    authenticateWithWorldcoin().then(() => {
        console.log('User authenticated with Worldcoin');
        updateSubscriptionUI();
        loadProfile();
    }).catch(err => console.error("Worldcoin authentication failed:", err));

    // Display user subscription status and add badge
    function updateSubscriptionUI() {
        const subscription = checkSubscription();
        let badge = "";

        if (subscription === "premium") {
            badge = "🐐 <span style='color: blue;'>Premium</span>";
        } else if (subscription === "super_premium") {
            badge = "🐐 <span style='color: gold;'>Super Premium</span>";
        }

        document.body.insertAdjacentHTML('afterbegin', `<p>Current Subscription: <strong>${subscription.toUpperCase()}</strong> ${badge}</p>`);
    }

    // Navigation event listeners
    profileBtn.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });

    followBtn.addEventListener('click', () => {
        window.location.href = 'followers.html';
    });

    feedBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Post creation logic
    newPostBtn.addEventListener('click', () => {
        const subscription = checkSubscription();
        const postContent = prompt('Enter your post content:');

        if (postContent) {
            if (subscription === "free") {
                const existingPosts = document.querySelectorAll('.post').length;
                if (existingPosts >= 1) {
                    alert("Free users can only post once per day. Upgrade to Premium for unlimited posts!");
                    return;
                }
            }
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<p>${postContent}</p>`;
            postContainer.appendChild(postElement);
        }
    });

    // Profile Picture & Username Management
    function loadProfile() {
        const savedUsername = localStorage.getItem("username") || "Default Username";
        const savedProfilePic = localStorage.getItem("profilePic") || "default-avatar.png";
        
        document.getElementById("usernameDisplay").textContent = savedUsername;
        document.getElementById("profileImage").src = savedProfilePic;
    }

    document.getElementById("editProfileBtn").addEventListener("click", () => {
        const newUsername = prompt("Enter your new username:");
        if (newUsername) {
            localStorage.setItem("username", newUsername);
            document.getElementById("usernameDisplay").textContent = newUsername;
        }
    });

    document.getElementById("profileUpload").addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem("profilePic", e.target.result);
                document.getElementById("profileImage").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

});