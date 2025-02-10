function createBook(event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지
    
    const bookData = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value
    };
    
    fetch('/books', {  // POST 요청 URL 수정
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData)
    })
    .then(response => {
        if(response.ok) {
            alert('도서가 성공적으로 생성되었습니다.');
            window.location.href = '/books/list';  // 목록 페이지로 리다이렉트
        } else {
            alert('도서 생성에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('도서 생성 중 오류가 발생했습니다.');
    });

    return false;
}