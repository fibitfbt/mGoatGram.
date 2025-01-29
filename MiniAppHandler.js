// Mini App Handler for mGoatGram with Worldcoin API
console.log('Mini App Handler Loaded');

// Worldcoin API integration
async function authenticateWithWorldcoin() {
    try {
        const response = await fetch("https://id.worldcoin.org/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ app_id: "mGoatGram" })
        });

        const data = await response.json();
        if (data.success) {
            console.log("Worldcoin Authentication Successful", data);
            localStorage.setItem("user", JSON.stringify(data.user));
        } else {
            console.error("Worldcoin Authentication Failed");
        }
    } catch (error) {
        console.error("Error connecting to Worldcoin API:", error);
    }
}

// Subscription management
function checkSubscription() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.subscription) {
        return user.subscription;
    }
    return "free";  // Default to free user
}

function upgradeToPremium() {
    console.log("Upgrading to Premium...");
    localStorage.setItem("user", JSON.stringify({ subscription: "premium" }));
}

function upgradeToSuperPremium() {
    console.log("Upgrading to Super Premium...");
    localStorage.setItem("user", JSON.stringify({ subscription: "super_premium" }));
}

export { authenticateWithWorldcoin, checkSubscription, upgradeToPremium, upgradeToSuperPremium };
