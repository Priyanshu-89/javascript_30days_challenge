document.addEventListener('DOMContentLoaded', () => {
    const createPostForm = document.getElementById('createPostForm');
    const postsFeed = document.getElementById('postsFeed');
    const postSection = document.getElementById('postSection');
    const postsSection = document.getElementById('postsSection');
    const currentUser = localStorage.getItem('user'); // Get the logged-in user
    const logoutButton = document.getElementById('logoutButton');

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    console.log('Current User:', currentUser);
    console.log('Posts:', posts);

    const renderPosts = () => {
        postsFeed.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            if (post.username === currentUser) {
                postElement.classList.add('current-user-post'); // Style for the logged-in user's posts
                console.log(`Post by current user found at index ${index}`);
            }
            postElement.innerHTML = `
                <div class="post-header">
                    <span class="post-username">${post.username}</span>
                    <span class="post-timestamp">${new Date(post.timestamp).toLocaleString()}</span>
                </div>
                <p class="post-text">${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}
                <div class="post-actions">
                    <button class="like-button" data-index="${index}">Like (${post.likes || 0})</button>
                    <button class="comment-button" data-index="${index}">Comment (${post.comments ? post.comments.length : 0})</button>
                    ${post.username === currentUser ? `<button class="delete-button" data-index="${index}">Delete</button>` : ''}
                </div>
                <div class="comments">
                    ${post.comments ? post.comments.map(comment => `<p>${comment}</p>`).join('') : ''}
                    <form class="comment-form" data-index="${index}">
                        <input type="text" placeholder="Add a comment..." required>
                        <button type="submit">Add Comment</button>
                    </form>
                </div>
            `;
            postsFeed.appendChild(postElement);
        });
    };

    const updatePost = (index, updatedPost) => {
        posts[index] = updatedPost;
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    };

    const deletePost = (index) => {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    };

    createPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('usernameInput').value;
        const postText = document.getElementById('postText').value;
        const postImage = document.getElementById('postImage').files[0];

        if (!username || !postText) {
            alert('Username and post text are required.');
            return;
        }

        let imageUrl = '';

        if (postImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                imageUrl = reader.result;

                const newPost = { username, text: postText, image: imageUrl, timestamp: new Date().toISOString(), likes: 0, comments: [] };
                posts.push(newPost);

                localStorage.setItem('posts', JSON.stringify(posts));
                renderPosts();
                createPostForm.reset();
            };
            reader.readAsDataURL(postImage);
        } else {
            const newPost = { username, text: postText, image: imageUrl, timestamp: new Date().toISOString(), likes: 0, comments: [] };
            posts.push(newPost);

            localStorage.setItem('posts', JSON.stringify(posts));
            renderPosts();
            createPostForm.reset();
        }
    });

    postsFeed.addEventListener('click', (e) => {
        if (e.target.classList.contains('like-button')) {
            const index = e.target.getAttribute('data-index');
            const post = posts[index];
            post.likes = (post.likes || 0) + 1;
            updatePost(index, post);
        }

        if (e.target.classList.contains('delete-button')) {
            const index = e.target.getAttribute('data-index');
            if (confirm('Are you sure you want to delete this post?')) {
                deletePost(index);
            }
        }
    });

    postsFeed.addEventListener('submit', (e) => {
        if (e.target.classList.contains('comment-form')) {
            e.preventDefault();
            const index = e.target.getAttribute('data-index');
            const commentInput = e.target.querySelector('input');
            const post = posts[index];
            const comment = commentInput.value;
            post.comments = post.comments || [];
            post.comments.push(comment);
            updatePost(index, post);
            commentInput.value = '';
        }
    });

    renderPosts();
});
