function display_jpeg_image(image_path) {
  var image = new Image();
  image.src = image_path;
  image.onload = function() {
    var periodicTable = document.getElementById("periodic-table");
    periodicTable.src = image.src;
    periodicTable.alt = "주기율표";
  };
}

function convert_base(number_str, from_base, to_base) {
  var decimal_number = parseInt(number_str, from_base);

  // 결과를 16진수 또는 10진수로 변환
  var result = (to_base === 16) ? decimal_number.toString(16) : decimal_number.toString();
  return result;
}

function generate_password() {
  var ps_setting = ["Be", "B", "F", "Ca", "Ba", "Ac"];
  var Oxpassword = ["0x"];

  for (var i = 0; i < 3; i++) {
    var del_range = Math.floor(Math.random() * ps_setting.length);
    Oxpassword.push(ps_setting[del_range]);
    Oxpassword.sort();
    ps_setting.splice(del_range, 1);
  }

  return parseInt(Oxpassword.join(""), 16);
}

var password = generate_password();
console.log(password);

var hint_count = 0;
var passwordForm = document.getElementById("password-form");
var passwordInput = document.getElementById("password-input");
var resultDiv = document.getElementById("result");

passwordForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var guess = passwordInput.value;

  if (String(password) === guess) {
    resultDiv.textContent = "정답입니다!";
  } else if (guess === "hint") {
    hint_count++;
    if (hint_count === 1) {
      resultDiv.textContent = "첫 번째 힌트: 보이는 게 다가 아니다.";
    } else if (hint_count === 2) {
      resultDiv.textContent = "두 번째 힌트: 원소 기호 -> 16진수.";
    } else if (hint_count === 3) {
      resultDiv.textContent = "세 번째 힌트: 16진수 -> 10진수.";
    } else {
      resultDiv.textContent = "사용 가능한 모든 힌트를 사용했습니다.(허접 ㅋㅋ)";
    }
  } else if (guess === "convert") {
    var user_input = prompt("변환할 숫자를 입력하세요 ('exit'를 입력하면 종료됩니다.): ");
    if (user_input.toLowerCase() === "exit") {
      resultDiv.textContent = "프로그램을 종료합니다.";
    } else {
      var from_base = parseInt(prompt("입력된 숫자의 진수를 입력하세요: "));
      var to_base = parseInt(prompt("변환할 진수를 입력하세요: "));
      var result = convert_base(user_input, from_base, to_base);
      resultDiv.textContent = user_input + "(" + from_base + "진수)를 " + result + " (" + to_base + "진수)로 변환 결과: " + result;
    }
  } else if (guess == "유승우") {
      resultDiv.textContent = password;
  } else {
    resultDiv.textContent = "틀렸습니다. 다시 시도하세요.";
  }
});

display_jpeg_image("periodic_table.png");