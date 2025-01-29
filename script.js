document.addEventListener('DOMContentLoaded', () => {
    console.log('mGoatGram Loaded!');

    const newPostBtn = document.getElementById('newPostBtn');
    const postContainer = document.getElementById('postContainer');

    if (!newPostBtn || !postContainer) {
        console.error('Required elements not found!');
        return;
    }

    // Load subscription check functions from MiniAppHandler.js
    import { authenticateWithWorldcoin, checkSubscription, upgradeToPremium, upgradeToSuperPremium } from './MiniAppHandler.js';

    // Ensure user is authenticated
    authenticateWithWorldcoin().then(() => {
        console.log('User authenticated with Worldcoin');
        updateSubscriptionUI();
    }).catch(err => console.error("Worldcoin authentication failed:", err));

    // Display user subscription status
    function updateSubscriptionUI() {
        const subscription = checkSubscription();
        document.body.insertAdjacentHTML('afterbegin', `<p>Current Subscription: <strong>${subscription.toUpperCase()}</strong></p>`);

        if (subscription === "free") {
            const upgradePremiumBtn = document.createElement('button');
            const upgradeSuperPremiumBtn = document.createElement('button');

            upgradePremiumBtn.innerText = "Upgrade to Premium (3 WLD)";
            upgradeSuperPremiumBtn.innerText = "Upgrade to Super Premium (6 WLD)";

            upgradePremiumBtn.addEventListener('click', () => {
                upgradeToPremium();
                location.reload();
            });

            upgradeSuperPremiumBtn.addEventListener('click', () => {
                upgradeToSuperPremium();
                location.reload();
            });

            document.body.appendChild(upgradePremiumBtn);
            document.body.appendChild(upgradeSuperPremiumBtn);
        }
    }

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
});