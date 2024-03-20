const image = document.getElementById('dook'); // 이미지 요소를 가져옵니다.
const sound = document.getElementById('sound1'); // 오디오 요소를 가져옵니다.

image.addEventListener('click', function() {
  sound.play(); // 이미지 클릭 시 오디오 재생
});
