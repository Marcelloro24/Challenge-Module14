const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create post.');
        }
    }
};

const deletePostHandler = async (event) => {
    if (event.target.matches('.delete-post')) {
        const postId = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to delete post.');
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('.col-12')
    .addEventListener('click', deletePostHandler); 