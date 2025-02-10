document.addEventListener('DOMContentLoaded', function() {
    loadBookDetail();
});

function loadBookDetail() {
    const id = window.location.pathname.split('/').pop();
    
    fetch(`/books/${id}`)
        .then(response => response.json())
        .then(book => {
            const detailContainer = document.getElementById('bookDetail');
            detailContainer.innerHTML = `
                <p>도서 번호: ${book.id}</p>
                <p>도서명: ${book.title}</p>
                <p>저자: ${book.author}</p>
                <p>출판사: ${book.publisher}</p>
                <p>생성일: ${book.createdAt}</p>
                <p>수정일: ${book.updatedAt}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}

function goToList() {
    window.location.href = '/books/list';
}

function goToEdit() {
    const id = window.location.pathname.split('/').pop();
    window.location.href = `/books/update/${id}`;
}

function deleteBook() {
    const id = window.location.pathname.split('/').pop();
    
    if(confirm('정말 삭제하시겠습니까?')) {
        fetch(`/books/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if(response.ok) {
                window.location.href = '/books/list';
            }
        })
        .catch(error => console.error('Error:', error));
    }
}