<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>도서목록 </title>
<link rel="stylesheet" href="../css/bookList.css">

</head>
<body>
<div class="container">
        <table>
            <thead>
                <tr>
                    <th>책 번호</th>
                    <th>도서명</th>
                    <th>저자</th>
                    <th>출판사</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="bookTableBody">
                <!-- JavaScript로 데이터 삽입 -->
            </tbody>
        </table>
        <button class="btn-create" onclick="location.href='create'">도서 생성하기</button>
    </div>
   <script src="../js/bookList.js"></script>
</body>
</html>