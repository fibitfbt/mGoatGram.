console.log('Script Loaded');

document.getElementById("followUserBtn").addEventListener("click", function() {
    let userToFollow = document.getElementById("userToFollow").value.trim();
    if (userToFollow) {
        let followingList = document.getElementById("followingList");
        let listItem = document.createElement("li");
        listItem.innerText = userToFollow;
        followingList.appendChild(listItem);
        localStorage.setItem("following_" + userToFollow, "true");
        alert("You are now following " + userToFollow);
    } else {
        alert("Please enter a username to follow.");
    }
});

// Load following list from localStorage
window.onload = function() {
    let followingList = document.getElementById("followingList");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("following_")) {
            let listItem = document.createElement("li");
            listItem.innerText = key.replace("following_", "");
            followingList.appendChild(listItem);
        }
    }
};
