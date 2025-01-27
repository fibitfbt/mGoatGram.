// Simulate a user login
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('username', 'Bypass User');
console.log("Bypass login enabled. User logged in as:", localStorage.getItem('username'));

// Check if the user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if (!isLoggedIn) {
  alert('You must log in to access this page.');
  window.location.href = 'login.html';
}

// Logout function
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  alert('You have been logged out.');
  window.location.href = 'login.html';
});

// Simulated API Key (replace with real API Key if available)
const API_KEY = 'api_a2V5X2MxOWE1ZjBkNGZi';

// Element references
const postsContainer = document.querySelector('.posts-container');
const newPostButton = document.querySelector('.new-post-btn');

// Simulated posts data (replace with real API call if available)
const mockPosts = [
  {
    id: 1,
    username: 'nadya',
    image: 'https://via.placeholder.com/400',
    likes: 1,
    comments: 2,
  },
  {
    id: 2,
    username: 'hello',
    image: 'https://via.placeholder.com/400',
    likes: 5,
    comments: 3,
  },
];

// Function to fetch posts from API or use mock data
async function fetchPosts() {
  try {
    // Uncomment this section if an actual API is available
    // const response = await fetch('https://developer.worldcoin.org/api/v1/posts', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json',
    //   }
    // });
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch posts: ${response.status}`);
    // }
    // const data = await response.json();
    // renderPosts(data.posts);

    // Use mock data for now
    renderPosts(mockPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
  }
}

// Function to render posts dynamically
function renderPosts(posts) {
  postsContainer.innerHTML = ''; // Clear previous posts
  if (posts.length === 0) {
    postsContainer.innerHTML = `
      <p>No posts yet.</p>
      <a href="createPost.html" class="create-post-link">Create a new post!</a>
    `;
  } else {
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post-card');
      postDiv.innerHTML = `
        <div class="post-header">
          <img src="user-placeholder.png" alt="${post.username}" class="user-icon">
          <span class="username">${post.username}</span>
        </div>
        <img src="${post.image}" alt="Post Image" class="post-image">
        <div class="post-info">
          <p>${post.likes} Like${post.likes > 1 ? 's' : ''} - ${post.comments} Comment${post.comments > 1 ? 's' : ''}</p>
        </div>
      `;
      postsContainer.appendChild(postDiv);
    });
  }
}

// Event listener for "New Post" button
newPostButton.addEventListener('click', () => {
  alert('Redirecting to the "Create Post" page...');
  window.location.href = 'createPost.html';
});

// Fetch and display posts when the page loads
fetchPosts();
