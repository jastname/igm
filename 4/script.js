window.onload = function() {
  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var userAnswer = document.getElementById('userAnswer').value;
    var correctAnswer = '채찬'; // 예시로 사용된 정답입니다.

    if (userAnswer === correctAnswer) {
      // 답이 맞으면 next.html 페이지로 이동합니다.
      window.location.href = "../5/index.html";
    } else {
      alert('이건 좀');
    }
  });
}