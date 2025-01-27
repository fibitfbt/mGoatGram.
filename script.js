document.addEventListener('DOMContentLoaded', () => {
  // Variables for elements
  const editProfileButton = document.getElementById('editProfileButton');
  const editProfileForm = document.getElementById('editProfileForm');
  const editUsernameInput = document.getElementById('editUsernameInput');
  const editProfilePictureInput = document.getElementById('editProfilePictureInput');
  const saveProfileButton = document.getElementById('saveProfileButton');
  const cancelEditButton = document.getElementById('cancelEditButton');
  const profileUsernameDisplay = document.querySelector('.username');
  const profilePictureDisplay = document.querySelector('.profile-picture');

  // Initial profile data
  let profileData = {
    username: 'Default Username',
    picture: 'user-placeholder.png',
  };

  // Load profile data into UI
  function loadProfile() {
    profileUsernameDisplay.textContent = profileData.username;
    profilePictureDisplay.src = profileData.picture;
  }

  // Show edit profile form
  editProfileButton.addEventListener('click', () => {
    editProfileForm.classList.remove('hidden');
    editUsernameInput.value = profileData.username;
  });

  // Save profile changes
  saveProfileButton.addEventListener('click', () => {
    const newUsername = editUsernameInput.value.trim();
    if (newUsername) {
      profileData.username = newUsername;
    }

    const file = editProfilePictureInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        profileData.picture = e.target.result;
        loadProfile();
      };
      reader.readAsDataURL(file);
    } else {
      loadProfile();
    }

    editProfileForm.classList.add('hidden');
  });

  // Cancel editing
  cancelEditButton.addEventListener('click', () => {
    editProfileForm.classList.add('hidden');
  });

  // Load profile on page load
  loadProfile();
});
