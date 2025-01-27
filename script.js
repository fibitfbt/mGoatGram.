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

// Reference to posts container
const postsContainer = document.querySelector('.posts-container');

// Simulated posts data (mock data)
const mockPosts = [
  {
    id: 1,
    username: 'nadya',
    image: 'https://via.placeholder.com/400',
    likes: 5,
    comments: 3,
  },
  {
    id: 2,
    username: 'hello',
    image: 'https://via.placeholder.com/400',
    likes: 12,
    comments: 7,
  },
];

// Function to fetch posts (using mock data for now)
async function fetchPosts() {
  try {
    // Uncomment this section if using an actual API
    // const response = await fetch('https://api.yourendpoint.com/posts', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json',
    //   }
    // });
    // if (!response.ok) throw new Error(`Failed to fetch posts: ${response.status}`);
    // const data = await response.json();

    renderPosts(mockPosts); // Use mock data
  } catch (error) {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
  }
}

// Function to render posts dynamically
function renderPosts(posts) {
  postsContainer.innerHTML = ''; // Clear previous content

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p>No posts available. Create a new post!</p>';
    return;
  }

  posts.forEach((post) => {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.innerHTML = `
      <div class="post-header">
        <strong>${post.username}</strong>
      </div>
      <img src="${post.image}" alt="Post Image" class="post-image">
      <div class="post-footer">
        <p>${post.likes} Likes - ${post.comments} Comments</p>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });
}

// Call fetchPosts to load posts on page load
fetchPosts();
