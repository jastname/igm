window.onload = function() {
  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var userAnswer = document.getElementById('userAnswer').value;
    var correctAnswer = '10121415'; // 예시로 사용된 정답입니다.

    if (userAnswer === correctAnswer) {
      // 답이 맞으면 next.html 페이지로 이동합니다.
      window.location.href = "../3/index.html";
    } else {
      alert('ㅋ넌 그냥 나가라');
    }
  });
}