// 페이지 로드 후 화면 높이 출력
window.addEventListener("load", function () {
  // 화면의 현재 높이 확인
  var currentHeight = window.innerHeight;

  // 화면 높이를 표시할 요소 찾기
  var heightDisplay = document.getElementById("height-display");

  // 화면 높이 출력
  heightDisplay.textContent = "현재 화면 높이: " + currentHeight + "px";
});

// 화면 크기 변경 시에도 화면 높이 업데이트
window.addEventListener("resize", function () {
  var currentHeight = window.innerHeight;
  var heightDisplay = document.getElementById("height-display");
  heightDisplay.textContent = "현재 화면 높이: " + currentHeight + "px";
});
