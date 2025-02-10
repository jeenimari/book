<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>도서목록</title>

<link rel="stylesheet" href="../css/bookCreate.css">


</head>
<body>
<div class="container">
        <h2>도서 생성</h2>
        <form id="createBookForm" onsubmit="return createBook(event)">
            <div class="form-group">
                <label for="title">도서 이름:</label>
                <input type="text" id="title" name="title" required>
            </div>	
            <div class="form-group">
                <label for="author">저자:</label>
                <input type="text" id="author" name="author" required>
            </div>
            <div class="form-group">
                <label for="publisher">출판사:</label>
                <input type="text" id="publisher" name="publisher" required>
            </div>
            <button type="submit" class="btn-submit">Submit</button>
        </form>
    </div>
 <script src="../js/bookCreate.js"></script>
</body>
</html>