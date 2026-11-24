import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { MOCK_QUIZ_QUESTIONS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';

let qIdx = 0;
let answered = false;

initAppLayout({
  screenId: 'M11a',
  group: 'B',
  title: MOCK_QUIZ_QUESTIONS[0].indexLabel,
  breadcrumb: 'Lá Chắn Số / Bài kiểm tra nhận diện',
  activeNav: 'learn',
  mobileNav: null,
  headerMode: 'quiz',
  backTo: 'M09',
  progressPercent: MOCK_QUIZ_QUESTIONS[0].progressPercent,
  showFab: false,
});

const smsEl = document.getElementById('m11a-sms');
const qEl = document.getElementById('m11a-question');
const expEl = document.getElementById('m11a-explain');
const expTitle = document.getElementById('m11a-exp-title');
const expBody = document.getElementById('m11a-exp-body');
const choices = document.querySelectorAll('[data-ans]');

function renderQ() {
  const q = MOCK_QUIZ_QUESTIONS[qIdx];
  answered = false;
  smsEl.textContent = q.fakeMessage;
  qEl.textContent = q.question;
  expEl.classList.add('is-hidden');
  expEl.classList.remove('m11a-explain--ok', 'm11a-explain--err');
  choices.forEach((b) => b.classList.remove('is-selected'));

  const titleEl = document.querySelector('.app-header__title');
  const progEl = document.querySelector('.app-header__progress-fill');
  if (titleEl) titleEl.textContent = q.indexLabel;
  if (progEl) progEl.style.width = `${q.progressPercent}%`;
}

choices.forEach((btn) =>
  btn.addEventListener('click', () => {
    const q = MOCK_QUIZ_QUESTIONS[qIdx];
    const ok = btn.getAttribute('data-ans') === q.correctAnswer;
    answered = true;
    choices.forEach((b) => b.classList.toggle('is-selected', b === btn));
    expEl.classList.remove('is-hidden', 'm11a-explain--ok', 'm11a-explain--err');
    expEl.classList.add(ok ? 'm11a-explain--ok' : 'm11a-explain--err');
    expTitle.textContent = ok ? 'Chính xác!' : 'Cẩn thận nhé!';
    expBody.textContent = ok ? q.explanationCorrect : q.explanationWrong;
  })
);

document.getElementById('m11a-next')?.addEventListener('click', () => {
  if (qIdx < MOCK_QUIZ_QUESTIONS.length - 1 && answered) {
    qIdx += 1;
    renderQ();
  } else {
    goTo('M11b');
  }
});

renderQ();
