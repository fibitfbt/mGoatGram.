// Mini App Handler for mGoatGram with Worldcoin API
console.log('Mini App Handler Loaded');

const API_KEY = "api_a2V5X2MxOWE1ZjBkNGZiMTdkNWQ2OWZmMWUwNzAzOTlkYzkzOnNrXzdhYjJmYjJjZmU1YjQ2MGZlYzRjN2EyM2E0OTE2Nzc4N2QwZDNmYjAyZTkyNmYyNg";
const APP_ID = "app_0cb3ee4cf388a7d41c9401e1fe0b950a";
const WORLDCOIN_VERIFY_URL = "https://developer.worldcoin.org/api/v2/verify/" + APP_ID;

async function authenticateWithWorldcoin(nullifierHash, proof, merkleRoot, verificationLevel, action) {
    try {
        const response = await fetch(WORLDCOIN_VERIFY_URL, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify({ 
                nullifier_hash: nullifierHash,
                proof: proof,
                merkle_root: merkleRoot,
                verification_level: verificationLevel,
                action: action
            })
        });

        const data = await response.json();
        if (data.success) {
            console.log("Worldcoin Verification Successful", data);
            localStorage.setItem("user", JSON.stringify({ verified: true, data: data }));
        } else {
            console.error("Worldcoin Verification Failed", data);
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
