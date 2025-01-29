document.addEventListener('DOMContentLoaded', () => {
    console.log('mGoatGram Loaded!');
    const newPostBtn = document.getElementById('newPostBtn');
    const postContainer = document.getElementById('postContainer');
    const upgradePremiumBtn = document.createElement('button');
    const upgradeSuperPremiumBtn = document.createElement('button');

    // Import functions from MiniAppHandler.js
    import { authenticateWithWorldcoin, checkSubscription, upgradeToPremium, upgradeToSuperPremium } from './MiniAppHandler.js';

    // Display user subscription status
    function updateSubscriptionUI() {
        const subscription = checkSubscription();
        document.body.insertAdjacentHTML('afterbegin', `<p>Current Subscription: <strong>${subscription.toUpperCase()}</strong></p>`);

        if (subscription === "free") {
            upgradePremiumBtn.innerText = "Upgrade to Premium (3 WLD)";
            upgradeSuperPremiumBtn.innerText = "Upgrade to Super Premium (6 WLD)";
            document.body.appendChild(upgradePremiumBtn);
            document.body.appendChild(upgradeSuperPremiumBtn);
        }
    }

    // Event listeners for upgrading subscriptions
    upgradePremiumBtn.addEventListener('click', () => {
        upgradeToPremium();
        location.reload();
    });

    upgradeSuperPremiumBtn.addEventListener('click', () => {
        upgradeToSuperPremium();
        location.reload();
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

    // Authenticate user with Worldcoin on page load
    authenticateWithWorldcoin();
    updateSubscriptionUI();
});