<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>도서상세정보</title>
 <link rel="stylesheet" href="../css/bookDetail.css">
</head>
<body>
 <div class="container">
        <h2>도서 상세 정보</h2>
        <div id="bookDetail" class="detail-container">
            <!-- JavaScript로 데이터 삽입 -->
        </div>
        <div class="button-group">
            <button class="btn-back" onclick="goToList()">뒤로가기</button>
            <button class="btn-edit" onclick="goToEdit()">수정하기</button>
            <button class="btn-delete" onclick="deleteBook()">삭제하기</button>
        </div>
    </div>
    <script src="../js/bookDetail.js"></script>
</body>
</html>