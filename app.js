// State Management
const state = {
  currentStep: "intro", // "intro", "quiz", "loading", "result"
  currentQuestionIndex: 0,
  answers: [] // Array of { questionId, type, key, selectedText, questionText }
};

// UI Elements
const landingSection = document.getElementById("landing-section");
const quizSection = document.getElementById("quiz-section");
const loadingSection = document.getElementById("loading-section");
const resultSection = document.getElementById("result-section");

const btnStart = document.getElementById("btn-start");
const btnRestart = document.getElementById("btn-restart");
const btnCopy = document.getElementById("btn-copy");

const quizCard = document.getElementById("quiz-card");
const progressText = document.getElementById("progress-text");
const progressBarInner = document.getElementById("progress-bar-inner");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const loadingStatus = document.getElementById("loading-status");
const toast = document.getElementById("toast");

// Helper: Generate Neo-brutalism 3D SVGs
function getGeometrySVG(shape, hexColor) {
  switch (shape) {
    case "triangle":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <polygon points="54,18 94,88 14,88" fill="#111827" />
          <polygon points="50,14 90,84 10,84" fill="${hexColor}" stroke="#111827" stroke-width="6" stroke-linejoin="round"/>
        </svg>
      `;
    case "square":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <rect x="19" y="19" width="70" height="70" rx="4" fill="#111827" />
          <rect x="15" y="15" width="70" height="70" rx="4" fill="${hexColor}" stroke="#111827" stroke-width="6" />
        </svg>
      `;
    case "squiggle":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <path d="M 24 24 C 44 24, 24 78, 44 78 C 64 78, 64 24, 84 24" fill="none" stroke="#111827" stroke-width="14" stroke-linecap="round" />
          <path d="M 20 20 C 40 20, 20 74, 40 74 C 60 74, 60 20, 80 20" fill="none" stroke="${hexColor}" stroke-width="12" stroke-linecap="round" />
        </svg>
      `;
    case "circle":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <circle cx="54" cy="54" r="35" fill="#111827" />
          <circle cx="50" cy="50" r="35" fill="${hexColor}" stroke="#111827" stroke-width="6" />
        </svg>
      `;
    case "star":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <polygon points="53,8 67,39 101,39 73,60 84,94 53,73 22,94 33,60 5,39 39,39" fill="#111827" />
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="${hexColor}" stroke="#111827" stroke-width="6" stroke-linejoin="round"/>
        </svg>
      `;
    case "lightning":
      return `
        <svg viewBox="0 0 100 100" class="w-36 h-36 svg-3d">
          <polygon points="58,8 18,58 48,58 38,98 88,48 58,48" fill="#111827" />
          <polygon points="55,5 15,55 45,55 35,95 85,45 55,45" fill="${hexColor}" stroke="#111827" stroke-width="6" stroke-linejoin="round"/>
        </svg>
      `;
    default:
      return "";
  }
}

// Show Toast Alert
function showToast(message) {
  toast.innerText = message;
  toast.classList.remove("opacity-0", "translate-y-4");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-4");
  }, 2500);
}

// Initialize Website Introduction
function initIntro() {
  document.getElementById("intro-title").innerText = QUIZ_DATA.intro.title;
  document.getElementById("intro-subtitle").innerText = QUIZ_DATA.intro.subtitle;
}

// Render Current Question
function renderQuestion() {
  const currentQ = QUIZ_DATA.questions[state.currentQuestionIndex];
  
  // Update Progress
  const currentNum = state.currentQuestionIndex + 1;
  const totalNum = QUIZ_DATA.questions.length;
  progressText.innerText = `${currentNum} / ${totalNum}`;
  progressBarInner.style.width = `${(currentNum / totalNum) * 100}%`;

  // Update text
  questionText.innerText = currentQ.text;

  // Clear options and render new ones
  optionsContainer.innerHTML = "";
  currentQ.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "w-full text-left p-4 rounded-xl bg-white border-4 border-gray-900 shadow-[4px_4px_0px_0px_#111827] text-gray-800 font-medium hover:bg-yellow-50 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111827] transition-all duration-100 text-base md:text-lg flex gap-3 items-start";
    
    // Key marker style (e.g. A, B, C...)
    btn.innerHTML = `
      <span class="inline-block bg-gray-900 text-white rounded-md px-2 py-0.5 font-bold text-sm tracking-wider neo-border-sm">${opt.key}</span>
      <span class="flex-1">${opt.text}</span>
    `;

    btn.addEventListener("click", () => handleSelectOption(opt, currentQ.text));
    optionsContainer.appendChild(btn);
  });
}

// Handle Option Select
function handleSelectOption(option, qText) {
  // Save answer
  state.answers.push({
    questionId: QUIZ_DATA.questions[state.currentQuestionIndex].id,
    type: option.type,
    key: option.key,
    selectedText: option.text,
    questionText: qText
  });

  const nextIndex = state.currentQuestionIndex + 1;

  if (nextIndex < QUIZ_DATA.questions.length) {
    // Smooth transition
    quizCard.classList.remove("slide-in");
    quizCard.classList.add("slide-out");

    setTimeout(() => {
      state.currentQuestionIndex = nextIndex;
      renderQuestion();
      quizCard.classList.remove("slide-out");
      quizCard.classList.add("slide-in");
    }, 200);
  } else {
    // End of quiz, switch to loading screen
    transitionToLoading();
  }
}

// Transition to loading screen
function transitionToLoading() {
  state.currentStep = "loading";
  
  quizSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");

  const funnyMessages = [
    "正在分析你的專題雷包指數...",
    "偵測到本組雷氣值異常，正在開啟排毒過濾程序...",
    "正在連線到專題教授的當人黑名單資料庫...",
    "正在評估下學期重修學分費用的可能性...",
    "正在生成您與組員的血壓升高速率報告..."
  ];

  let msgIndex = 0;
  loadingStatus.innerText = funnyMessages[msgIndex];

  // Cycle funny messages every 450ms
  const intervalId = setInterval(() => {
    msgIndex++;
    if (msgIndex < funnyMessages.length) {
      loadingStatus.innerText = funnyMessages[msgIndex];
    }
  }, 450);

  // Transition to results after 2 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    calculateAndShowResult();
  }, 2000);
}

// Calculation & Tie-breaker Logic
function calculateAndShowResult() {
  const counts = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0,
    type6: 0
  };

  state.answers.forEach((ans) => {
    counts[ans.type]++;
  });

  // Priority weights: Type 6 > Type 1 > Type 5 > Type 3 > Type 2 > Type 4
  const priority = {
    type6: 5,
    type1: 4,
    type5: 3,
    type3: 2,
    type2: 1,
    type4: 0
  };

  let maxCount = -1;
  let finalType = "";

  Object.keys(counts).forEach((type) => {
    const count = counts[type];
    if (count > maxCount) {
      maxCount = count;
      finalType = type;
    } else if (count === maxCount) {
      if (priority[type] > priority[finalType]) {
        finalType = type;
      }
    }
  });

  const resultData = QUIZ_DATA.results[finalType];
  renderResultPage(resultData);
}

// Render Result Screen
function renderResultPage(result) {
  state.currentStep = "result";
  loadingSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  // Render SVG graphics
  const graphicContainer = document.getElementById("result-graphic-container");
  graphicContainer.innerHTML = getGeometrySVG(result.shape, result.hexColor);

  // Fill result information
  const resultNameEl = document.getElementById("result-name");
  resultNameEl.innerText = result.name;
  
  // Custom background color depending on personality
  resultNameEl.className = `inline-block px-6 py-3 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0px_0px_#111827] text-xl md:text-3xl font-extrabold ${result.color} text-white text-center mb-6 slide-in`;

  document.getElementById("result-description").innerText = result.desc;
  document.getElementById("result-power").innerText = result.power;
  document.getElementById("result-partner").innerText = result.partner;
  document.getElementById("result-enemy").innerText = result.enemy;

  // Style details container with personality accent
  const detailsCard = document.getElementById("result-details-card");
  detailsCard.className = `p-6 rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_#111827] ${result.accentBg} space-y-4`;

  // Render History Section ("你的靈魂拷問紀錄")
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  state.answers.forEach((ans, idx) => {
    const historyItem = document.createElement("div");
    historyItem.className = "p-4 rounded-xl border-2 border-gray-900 bg-white shadow-[2px_2px_0px_0px_#111827] space-y-1.5";
    historyItem.innerHTML = `
      <div class="flex items-start gap-2">
        <span class="inline-block bg-gray-900 text-white rounded px-1.5 py-0.5 text-xs font-bold shrink-0">Q${idx + 1}</span>
        <p class="text-sm font-semibold text-gray-800">${ans.questionText}</p>
      </div>
      <div class="pl-7 text-sm font-medium ${result.textColor}">
        ➔ 選擇了：<span class="underline decoration-wavy">${ans.selectedText}</span>
      </div>
    `;
    historyList.appendChild(historyItem);
  });
}

// Copy results to clipboard
function handleCopy() {
  const resultName = document.getElementById("result-name").innerText;
  const siteUrl = "https://saisai1110.github.io/project-quiz/";
  const copyText = `【畢業專題防止鬧翻檢查表】\n我的專題靈魂檢測結果是：\n✨ ${resultName} ✨\n\n快來測看看你是神隊友還是寄生獸！\n測驗連結 👉 ${siteUrl}`;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(copyText)
      .then(() => {
        showToast("📋 結果已成功複製到剪貼簿！快分享給朋友！");
      })
      .catch((err) => {
        console.error("Clipboard error: ", err);
        fallbackCopyText(copyText);
      });
  } else {
    fallbackCopyText(copyText);
  }
}

// Fallback copy for non-HTTPS or unsupported browsers
function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToast("📋 結果已複製到剪貼簿！");
    } else {
      showToast("⚠️ 複製失敗，請手動複製網址分享");
    }
  } catch (err) {
    console.error("Fallback copy error: ", err);
    showToast("⚠️ 瀏覽器不支援自動複製，請手動選取分享");
  }

  document.body.removeChild(textArea);
}

// Restart Quiz
function handleRestart() {
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.currentStep = "intro";

  resultSection.classList.add("hidden");
  landingSection.classList.remove("hidden");
  
  // Re-animate landing page elements
  landingSection.classList.add("slide-in");
  setTimeout(() => {
    landingSection.classList.remove("slide-in");
  }, 400);
}

// Event Listeners
btnStart.addEventListener("click", () => {
  state.currentStep = "quiz";
  landingSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  renderQuestion();
});

btnRestart.addEventListener("click", handleRestart);
btnCopy.addEventListener("click", handleCopy);

// Initialize application on load
window.addEventListener("DOMContentLoaded", () => {
  initIntro();
});
