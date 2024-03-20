function checkAnswer(answer) {
  var response;
  if (answer === 'D') {
    response = "정답입니다! 무는 무겁습니다!";
    document.getElementById('answer').className = 'correct';
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "다음 페이지로 이동";
    btn.className = "nextButton"; // 새로운 클래스 추가
    btn.onclick = function() {
      location.href = "../2/index.html";
    };
    document.body.appendChild(btn);
  } else {
    response = "틀렸습니다. 다시 한번 생각해보세요.";
    document.getElementById('answer').className = 'incorrect';
  }
  document.getElementById('answer').innerText = response;
}