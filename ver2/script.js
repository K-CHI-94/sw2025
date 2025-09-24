document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("robotNameInput");
  const confirmBtn = document.getElementById("confirmBtn");
  const robotNameInputBox = document.querySelector(".robot_name_input");
  const myRobotNameBox = document.querySelector(".my_robot_name");
  const robotNameDisplay = document.getElementById("robotNameDisplay");
  const resetBtn = document.getElementById("resetBtn");
  const robotStepImg = document.querySelector(".robot_step"); // 로봇 단계 이미지

  // 저장된 이름 불러오기
  const savedName = localStorage.getItem("robotName");
  if (savedName) {
    robotNameDisplay.textContent = savedName;
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";
    robotStepImg.src = "./images/robot_lv1.png"; // 저장된 이름이 있으면 lv1 이미지 표시
  }

  // 확인 버튼 클릭 시
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (name === "") {
      alert("이름을 입력해주세요!");
      return;
    }

    // 이름 저장
    localStorage.setItem("robotName", name);

    // 이름 반영
    robotNameDisplay.textContent = name;

    // 입력창 숨기고 결과 보여주기
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";

    // 이미지 교체
    robotStepImg.src = "./images/robot_lv1.png";
  });

  // Enter 키 입력 시도 동일하게 처리
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      confirmBtn.click();
    }
  });

  // 리셋 버튼 클릭 시
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("robotName"); // 저장된 이름 삭제
    robotNameDisplay.textContent = "test"; // 기본값으로 되돌리기
    input.value = ""; // 입력창 초기화
    myRobotNameBox.style.display = "none";
    robotNameInputBox.style.display = "flex";

    // 이미지 원래대로 돌리기
    robotStepImg.src = "./images/robot_step.png";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code_input");
  const btnBox = document.querySelector(".btn_box .btn_grye"); // 버튼 선택

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus(); // 다음 input으로 포커스 이동
        } else {
          input.blur(); // 마지막 입력칸에서는 포커스 해제

          // ✅ 마지막 input이 채워졌을 때 버튼 색상 변경
          if (btnBox) {
            btnBox.classList.remove("btn_grye");
            btnBox.classList.add("btn_basic");
          }
        }
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus(); // 백스페이스 시 이전 input으로 이동
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("robotNameInput");
  const confirmBtn = document.getElementById("confirmBtn");
  const robotNameInputBox = document.querySelector(".robot_name_input");
  const myRobotNameBox = document.querySelector(".my_robot_name");
  const robotNameDisplay = document.getElementById("robotNameDisplay");
  const resetBtn = document.getElementById("resetBtn");
  const robotStepImg = document.querySelector(".robot_step"); // 로봇 단계 이미지
  const robotLevelDisplay = document.getElementById("robotLevel");
  const robotImg = document.querySelector(".robot_img");

  // 저장된 이름 불러오기
  const savedName = localStorage.getItem("robotName");
  const savedLevel = localStorage.getItem("robotLevel") || 1;  // 기본 레벨 1
  const levelImages = [
    { img: './images/robot_lv1.png', robot: './images/robot/robot1.png', levelText: 'Lv.1' },
    { img: './images/robot_lv2.png', robot: './images/robot/robot2.png', levelText: 'Lv.2' },
    { img: './images/robot_lv3.png', robot: './images/robot/robot3.png', levelText: 'Lv.3' },
    { img: './images/robot_lv4.png', robot: './images/robot/robot4.png', levelText: 'Lv.4' },
    { img: './images/robot_lv5.png', robot: './images/robot/robot5.png', levelText: 'Lv.5' },
  ];

  if (savedName) {
    robotNameDisplay.textContent = savedName;
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";
  }

  // 로봇 레벨에 맞는 이미지와 레벨 텍스트 설정
  updateRobotLevel(savedLevel);

  // 확인 버튼 클릭 시
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (name === "") {
      alert("이름을 입력해주세요!");
      return;
    }

    // 이름 저장
    localStorage.setItem("robotName", name);

    // 이름 반영
    robotNameDisplay.textContent = name;

    // 입력창 숨기고 결과 보여주기
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";

    // 이미지 교체
    updateRobotLevel(savedLevel);
  });

  // Enter 키 입력 시 동일하게 처리
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      confirmBtn.click();
    }
  });

  // 리셋 버튼 클릭 시
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("robotName"); // 저장된 이름 삭제
    robotNameDisplay.textContent = "test"; // 기본값으로 되돌리기
    input.value = ""; // 입력창 초기화
    myRobotNameBox.style.display = "none";
    robotNameInputBox.style.display = "flex";

    // 이미지 원래대로 돌리기
    updateRobotLevel(1);
  });

  // 코드 입력 상자 처리
  const inputs = document.querySelectorAll(".code_input");
  const btnBox = document.querySelector(".btn_box .btn_grye"); // 버튼 선택

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      checkAllInputs();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  // 모든 입력칸이 채워졌는지 확인
  function checkAllInputs() {
    const isAllFilled = Array.from(inputs).every((input) => input.value.length === 1);
    if (isAllFilled) {
      btnBox.classList.remove("btn_grye");
      btnBox.classList.add("btn_basic");
      btnBox.style.pointerEvents = "auto";
    } else {
      btnBox.classList.remove("btn_basic");
      btnBox.classList.add("btn_grye");
      btnBox.style.pointerEvents = "none";
    }
  }

  // 버튼 클릭 시 페이지 이동
  btnBox.addEventListener("click", (e) => {
    if (btnBox.classList.contains("btn_basic")) {
      // 레벨업 처리
      let currentLevel = parseInt(localStorage.getItem("robotLevel") || 1);
      if (currentLevel < 5) {
        currentLevel++;
        localStorage.setItem("robotLevel", currentLevel);
        updateRobotLevel(currentLevel);
      }
      window.location.href = "robot.html";
    } else {
      e.preventDefault(); // btn_grye 상태일 때 링크 이동 방지
    }
  });

  // 레벨업 후 로봇 상태 업데이트
  function updateRobotLevel(level) {
    const levelData = levelImages[level - 1];
    robotStepImg.src = levelData.img;
    robotLevelDisplay.textContent = levelData.levelText;
    robotImg.src = levelData.robot;
  }

  // 페이지 로드 시 초기 상태 설정
  checkAllInputs();
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("robotNameInput");
  const confirmBtn = document.getElementById("confirmBtn");
  const robotNameInputBox = document.querySelector(".robot_name_input");
  const myRobotNameBox = document.querySelector(".my_robot_name");
  const robotNameDisplay = document.getElementById("robotNameDisplay");
  const resetBtn = document.getElementById("resetBtn");
  const robotStepImg = document.querySelector(".robot_step"); // 로봇 단계 이미지
  const robotLevelDisplay = document.getElementById("robotLevel");
  const robotImg = document.querySelector(".robot_img");

  // 저장된 이름과 레벨 불러오기
  const savedName = localStorage.getItem("robotName");
  const savedLevel = localStorage.getItem("robotLevel") ? parseInt(localStorage.getItem("robotLevel")) : 1; // 기본 레벨 1

  const levelImages = [
    { img: "./images/robot_lv1.png", robot: "./images/robot/robot1.png", levelText: "Lv.1" },
    { img: "./images/robot_lv2.png", robot: "./images/robot/robot2.png", levelText: "Lv.2" },
    { img: "./images/robot_lv3.png", robot: "./images/robot/robot3.png", levelText: "Lv.3" },
    { img: "./images/robot_lv4.png", robot: "./images/robot/robot4.png", levelText: "Lv.4" },
    { img: "./images/robot_lv5.png", robot: "./images/robot/robot5.png", levelText: "Lv.5" },
  ];

  if (savedName) {
    robotNameDisplay.textContent = savedName;
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";
  }

  // 로봇 레벨에 맞는 이미지와 레벨 텍스트 설정
  updateRobotLevel(savedLevel);

  // 확인 버튼 클릭 시
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (name === "") {
      alert("이름을 입력해주세요!");
      return;
    }

    // 이름 저장
    localStorage.setItem("robotName", name);

    // 이름 반영
    robotNameDisplay.textContent = name;

    // 입력창 숨기고 결과 보여주기
    robotNameInputBox.style.display = "none";
    myRobotNameBox.style.display = "flex";

    // 이미지 교체 (저장된 레벨 반영)
    updateRobotLevel(savedLevel);
  });

  // Enter 키 입력 시 동일하게 처리
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      confirmBtn.click();
    }
  });

  // 리셋 버튼 클릭 시
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("robotName"); // 저장된 이름 삭제
    robotNameDisplay.textContent = "test"; // 기본값으로 되돌리기
    input.value = ""; // 입력창 초기화
    myRobotNameBox.style.display = "none";
    robotNameInputBox.style.display = "flex";

    // 이미지 원래대로 돌리기
    updateRobotLevel(1);
  });

  // 레벨업 후 로봇 상태 업데이트
  function updateRobotLevel(level) {
    const levelData = levelImages[level - 1]; // 1부터 시작하는 레벨 처리
    robotStepImg.src = levelData.img;
    robotLevelDisplay.textContent = levelData.levelText;
    robotImg.src = levelData.robot;
  }
});
