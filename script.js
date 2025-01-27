// Check if user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if (!isLoggedIn) {
  alert('You must log in to access this page.');
  window.location.href = 'login.html';
}

// Logout functionality
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    alert('You have been logged out.');
    window.location.href = 'login.html';
  });
}

// Simulated Profile Data
let username = localStorage.getItem('username') || 'Username';
let profilePicture = localStorage.getItem('profilePicture') || 'user-placeholder.png';
let isVerified = JSON.parse(localStorage.getItem('isVerified')) || false;
let postCount = 10;
let followerCount = 100;

// Load Profile Information
function loadProfile() {
  document.querySelector('#usernameDisplay .username').textContent = username;
  document.querySelector('#profilePicture').src = profilePicture;
  document.querySelector('#verifiedBadge').style.display = isVerified ? 'inline-block' : 'none';
  document.querySelector('#postCount').textContent = postCount;
  document.querySelector('#followerCount').textContent = followerCount;
}

// Edit Profile Functionality
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileForm = document.getElementById('editProfileForm');
const editUsernameInput = document.getElementById('editUsername');
const editProfileImageInput = document.getElementById('editProfileImage');
const verifiedCheckbox = document.getElementById('verifiedCheckbox');
const cancelEditBtn = document.getElementById('cancelEdit');

// Show Edit Form
editProfileBtn.addEventListener('click', () => {
  editProfileForm.classList.remove('hidden');
  editUsernameInput.value = username;
  verifiedCheckbox.checked = isVerified;
});

// Save Profile Changes
editProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Update username
  const newUsername = editUsernameInput.value.trim();
  if (newUsername) {
    username = newUsername;
    localStorage.setItem('username', username);
  }

  // Update profile picture if a new file is uploaded
  const file = editProfileImageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicture = reader.result;
      localStorage.setItem('profilePicture', profilePicture);
      loadProfile(); // Reload profile after updating
    };
    reader.readAsDataURL(file);
  }

  // Update verified status
  isVerified = verifiedCheckbox.checked;
  localStorage.setItem('isVerified', isVerified);

  // Hide the form and reload profile
  editProfileForm.classList.add('hidden');
  loadProfile();
});

// Cancel Edit
cancelEditBtn.addEventListener('click', () => {
  editProfileForm.classList.add('hidden');
});

// Load profile on page load
loadProfile();
