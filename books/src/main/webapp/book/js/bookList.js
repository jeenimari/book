document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
});

function loadBooks() {
    fetch('/books/list')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('bookTableBody');
            tableBody.innerHTML = '';
            
            data.forEach(book => {
                const row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>
                            <a href="/books/list/${book.id}">${book.title}</a>
                        </td>
                        <td>${book.author}</td>
                        <td>${book.publisher}</td>
                        <td>
                            <button class="btn-delete" onclick="deleteBook(${book.id})">
                                삭제하기
                            </button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error:', error));
}

function deleteBook(id) {
    if(confirm('정말 삭제하시겠습니까?')) {
        fetch(`/books/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if(response.ok) {
                loadBooks();
            }
        })
        .catch(error => console.error('Error:', error));
    }
}