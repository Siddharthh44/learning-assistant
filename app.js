// Folio's demo data and learning state live in one small module so the app
// remains usable as a static site without a server or API key.
const SAMPLE_NOTES = `Cells are the basic structural and functional units of life. All living organisms are made of one or more cells. The cell theory states that all organisms are composed of cells, the cell is the basic unit of life, and new cells arise from pre-existing cells.\n\nThe cell membrane is a selectively permeable barrier made mainly of a phospholipid bilayer. It regulates what enters and leaves the cell. The cytoplasm is the jelly-like material inside the membrane where many chemical reactions happen. The nucleus stores DNA and directs cell activities.\n\nMitochondria release usable energy through cellular respiration. Ribosomes build proteins. The endoplasmic reticulum helps make and transport proteins and lipids. The Golgi apparatus modifies, sorts, and packages molecules. Plant cells also have a rigid cell wall for support and chloroplasts, where photosynthesis converts light energy into chemical energy. A large central vacuole stores water and helps maintain pressure in plant cells.\n\nProkaryotic cells, such as bacteria, do not have a membrane-bound nucleus. Eukaryotic cells have a nucleus and membrane-bound organelles. Plant and animal cells are both eukaryotic, but plant cells have a cell wall and chloroplasts.`;

const SUBJECTS = [
  { id: 'biology', name: 'Biology', icon: '✿', color: '#7eaa8b', topics: [
    { title: 'The building blocks of life', subtitle: 'Cells & their structures', description: 'Get to know the tiny structures that make every living thing possible.', notes: SAMPLE_NOTES },
    { title: 'Energy in living systems', subtitle: 'Photosynthesis & respiration', description: 'Follow the energy that powers every living thing.', notes: 'Photosynthesis takes place in chloroplasts. Plants use light energy, carbon dioxide, and water to make glucose and oxygen. Chlorophyll absorbs light. Cellular respiration takes place mainly in mitochondria and releases energy from glucose. It uses oxygen and produces carbon dioxide and water. Photosynthesis stores energy in glucose, while respiration releases usable energy from it. The two processes are connected through their inputs and outputs.' },
    { title: 'The web of life', subtitle: 'Ecosystems & relationships', description: 'Explore how organisms depend on one another and their environment.', notes: 'An ecosystem includes organisms and the physical environment they interact with. Producers make their own food, usually using sunlight. Consumers get energy by eating other organisms. Decomposers break down dead material and return nutrients to the environment. A food chain shows one path of energy transfer; food webs connect many chains. Energy decreases at each trophic level, while matter cycles through ecosystems.' },
  ]},
  { id: 'literature', name: 'Literature', icon: '❝', color: '#c69d80', topics: [
    { title: 'Reading between the lines', subtitle: 'Theme & close reading', description: 'Find the deeper ideas hiding in a story.', notes: 'A theme is a central idea or insight about life that a text develops. It is different from a topic, which is a broad subject such as friendship. Readers infer theme by noticing character choices, conflict, imagery, and how the story ends. A strong interpretation uses evidence from the text. Motifs are recurring images or ideas that can help reinforce a theme.' },
    { title: 'The shape of a story', subtitle: 'Plot & structure', description: 'See how writers build momentum and meaning.', notes: 'Plot is the sequence of events in a story. Exposition introduces the setting and characters. Rising action builds tension through conflict. The climax is the turning point, followed by falling action and resolution. A story may use flashbacks or multiple viewpoints to change how readers understand events. Structure shapes pacing, suspense, and emphasis.' },
  ]},
  { id: 'physics', name: 'Physics', icon: '◉', color: '#8d87a7', topics: [
    { title: 'A world in motion', subtitle: 'Forces & movement', description: 'Make sense of the pushes and pulls all around you.', notes: 'A force is a push or pull measured in newtons. Newton’s first law says an object maintains its state of motion unless acted on by a net external force. The second law relates net force, mass, and acceleration: F = ma. The third law says interacting objects exert equal and opposite forces on each other. Speed is distance divided by time; velocity also includes direction.' },
    { title: 'Energy at work', subtitle: 'Work & energy', description: 'Discover how energy changes form and moves between objects.', notes: 'Energy is the capacity to cause change or do work. Kinetic energy is energy of motion; gravitational potential energy depends on height. Work is done when a force moves an object through a distance in the direction of that force. Energy is conserved: it can change form or transfer between objects, but the total amount remains constant in a closed system.' },
  ]},
  { id: 'history', name: 'History', icon: '⌂', color: '#b79959', topics: [
    { title: 'The ancient world', subtitle: 'Early civilizations', description: 'Meet the people and ideas that shaped the first cities.', notes: 'Early civilizations grew near rivers that provided water, fertile soil, and transport. Agriculture created food surpluses, allowing some people to specialize in crafts, trade, and government. Writing systems helped record laws, trade, and history. Cities developed social structures and institutions. Mesopotamia grew between the Tigris and Euphrates; ancient Egypt depended on the Nile.' },
    { title: 'Ideas that changed the world', subtitle: 'Trade & exchange', description: 'Trace the routes that carried goods, beliefs, and inventions.', notes: 'Trade routes connected distant societies and moved more than goods. Merchants carried technologies, religions, languages, and ideas. The Silk Roads linked East Asia with Central Asia, the Middle East, and Europe. Indian Ocean trade used seasonal monsoon winds. Trade encouraged cultural exchange but also spread disease and could reinforce unequal power.' },
  ]},
];

const QUESTION_SETS = {
  biology: [
    ['What is the basic structural and functional unit of life?', 'cell'],
    ['According to cell theory, where do new cells come from?', 'pre-existing cells'],
    ['What selectively permeable structure controls what enters and leaves a cell?', 'cell membrane'],
    ['Which cell structure stores DNA and directs cell activities?', 'nucleus'],
    ['Which organelle releases usable energy through cellular respiration?', 'mitochondria'],
    ['What do ribosomes build?', 'proteins'],
    ['Which organelle modifies, sorts, and packages molecules?', 'golgi apparatus'],
    ['Where does photosynthesis happen in plant cells?', 'chloroplasts'],
    ['What structure gives plant cells rigid support outside the membrane?', 'cell wall'],
    ['What key feature do eukaryotic cells have that prokaryotic cells lack?', 'membrane-bound nucleus'],
  ],
  literature: [
    ['What does a theme express about life?', 'central idea'], ['What is a motif?', 'recurring'], ['What broad subject is different from a theme?', 'topic'], ['What should support an interpretation?', 'evidence'], ['What builds tension in plot?', 'rising action'], ['What is the turning point of a story?', 'climax'], ['What introduces characters and setting?', 'exposition'], ['What follows the climax?', 'falling action'], ['What can multiple viewpoints change?', 'understanding'], ['What does story structure shape besides suspense?', 'pacing'],
  ],
  physics: [
    ['What is a force?', 'push or pull'], ['What unit measures force?', 'newtons'], ['State Newton’s second law formula.', 'f=ma'], ['What does velocity include that speed does not?', 'direction'], ['What law describes inertia?', 'first law'], ['What happens to motion without a net external force?', 'maintains'], ['What is kinetic energy?', 'energy of motion'], ['What is work in physics?', 'force moves'], ['What is gravitational potential energy dependent on?', 'height'], ['What happens to energy in a closed system?', 'conserved'],
  ],
  history: [
    ['Why did early civilizations grow near rivers?', 'water'], ['What enabled job specialization?', 'food surpluses'], ['What did writing systems help record?', 'laws'], ['Between which rivers did Mesopotamia grow?', 'tigris and euphrates'], ['What river supported ancient Egypt?', 'nile'], ['What connected East Asia to Europe via central regions?', 'silk roads'], ['Which trade used seasonal monsoon winds?', 'indian ocean'], ['Besides goods, what did merchants carry?', 'ideas'], ['What could trade spread along with ideas?', 'disease'], ['What did agriculture help create?', 'food surpluses'],
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storageKey = 'folio-learning-state-v1';
const freshState = () => ({ selectedSubject: 'biology', progress: {}, history: [], customSubjects: [] });
let state;
try { state = { ...freshState(), ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; } catch { state = freshState(); }
let activeTopicIndex = 0;
let activeNotes = '';
let quizItems = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizMissed = [];
let quizAnswered = false;
let toastTimer;

function allSubjects() { return [...SUBJECTS, ...state.customSubjects]; }
function selectedSubject() { return allSubjects().find(item => item.id === state.selectedSubject) || allSubjects()[0]; }
function progressFor(subjectId, topicIndex) { return state.progress[`${subjectId}:${topicIndex}`] || { mastered: false, attempts: 0, best: 0 }; }
function save() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function setView(view) {
  $$('.nav-link').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  $$('.view').forEach(section => section.classList.toggle('active', section.id === `${view}View`));
  if (view === 'progress') renderProgress();
  $('#sidebar').classList.remove('open');
}
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2500); }
function renderSubjects() {
  const subject = selectedSubject();
  $('#subjectList').innerHTML = allSubjects().map(item => {
    const mastered = item.topics.filter((_, i) => progressFor(item.id, i).mastered).length;
    return `<button class="subject-item ${item.id === subject.id ? 'active' : ''}" data-subject="${item.id}"><span class="subject-dot" style="background:${item.color || '#8ca28a'}"></span>${escapeHtml(item.name)}<span class="subject-count">${mastered}/${item.topics.length}</span></button>`;
  }).join('');
  $$('.subject-item').forEach(button => button.addEventListener('click', () => { state.selectedSubject = button.dataset.subject; activeTopicIndex = firstUnmastered(selectedSubject()); save(); render(); }));
}
function firstUnmastered(subject) { const found = subject.topics.findIndex((_, i) => !progressFor(subject.id, i).mastered); return found < 0 ? subject.topics.length - 1 : found; }
function render() {
  const subject = selectedSubject();
  activeTopicIndex = Math.min(activeTopicIndex, subject.topics.length - 1);
  const topic = subject.topics[activeTopicIndex];
  const p = progressFor(subject.id, activeTopicIndex);
  $('#breadcrumbSubject').textContent = subject.name;
  $('#currentSubjectTitle').textContent = subject.name;
  $('#topicIcon').textContent = subject.icon || '✳';
  $('#topicTag').textContent = `TOPIC ${String(activeTopicIndex + 1).padStart(2, '0')}`;
  $('#topicSubjectEyebrow').textContent = `${subject.name.toUpperCase()} · FOUNDATIONS`;
  $('#topicTitle').textContent = topic.title;
  $('#topicDescription').textContent = topic.description;
  $('#topicProgressText').textContent = p.mastered ? 'Topic mastered' : p.attempts ? `${p.attempts} ${p.attempts === 1 ? 'attempt' : 'attempts'} so far` : 'Your topic progress';
  $('#topicProgressPercent').textContent = p.mastered ? '100%' : '0%';
  $('#topicProgressBar').style.width = p.mastered ? '100%' : '0%';
  $('#openTopicBtn').innerHTML = `${p.mastered ? 'Review topic' : p.attempts ? 'Continue learning' : 'Start learning'} <span>→</span>`;
  $('#topicCount').textContent = `${subject.topics.length} topics`;
  $('#topicList').innerHTML = subject.topics.map((item, index) => {
    const itemProgress = progressFor(subject.id, index);
    const locked = index > 0 && !progressFor(subject.id, index - 1).mastered;
    return `<button class="topic-row ${itemProgress.mastered ? 'done' : ''} ${locked ? 'locked' : ''}" data-topic="${index}" ${locked ? 'aria-disabled="true"' : ''}><span class="topic-num">${itemProgress.mastered ? '✓' : String(index + 1).padStart(2, '0')}</span><span class="topic-row-info"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span></span><span class="topic-row-status">${itemProgress.mastered ? 'Mastered' : locked ? 'Locked' : index === activeTopicIndex ? 'Current' : 'Ready'}</span><span class="topic-row-arrow">${locked ? '⌑' : '→'}</span></button>`;
  }).join('');
  $$('.topic-row').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.topic);
    if (index > 0 && !progressFor(subject.id, index - 1).mastered) return showToast('Master the previous topic with 10/10 to unlock this one.');
    activeTopicIndex = index; render(); if (!progressFor(subject.id, index).mastered) openNotes();
  }));
  renderSubjects(); renderDashboardBits();
}
function renderDashboardBits() {
  const mastered = allSubjects().reduce((sum, s) => sum + s.topics.filter((_, i) => progressFor(s.id, i).mastered).length, 0);
  $('#weekTopics').textContent = mastered;
  $('#weekMessage').textContent = mastered ? 'Look at you, building momentum.' : 'Small steps add up.';
  const heights = [23, 42, 31, 54, 38, 66, mastered ? 72 : 18];
  $('#weekChart').innerHTML = heights.map((height, i) => `<i class="${i === 6 ? 'today' : ''}" style="--h:${height}%" title="${['M','T','W','T','F','S','S'][i]}"></i>`).join('');
  $('#streakDays').textContent = mastered ? `${Math.min(mastered, 7)} day${mastered === 1 ? '' : 's'}` : '0 days';
  $('#streakDots').innerHTML = Array.from({ length: 7 }, (_, i) => `<i class="${i < Math.min(mastered, 7) ? 'filled' : ''}"></i>`).join('');
}
function renderProgress() {
  const subjects = allSubjects();
  const totalTopics = subjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const mastered = subjects.reduce((sum, subject) => sum + subject.topics.filter((_, i) => progressFor(subject.id, i).mastered).length, 0);
  const attempts = Object.values(state.progress).reduce((sum, value) => sum + value.attempts, 0);
  const avg = state.history.length ? Math.round(state.history.reduce((sum, entry) => sum + entry.score, 0) / state.history.length) : 0;
  const stats = [['Topics mastered', mastered, `of ${totalTopics} total`], ['Overall progress', `${totalTopics ? Math.round(mastered / totalTopics * 100) : 0}%`, 'across your subjects'], ['Quiz attempts', attempts, 'keep showing up'], ['Average score', state.history.length ? `${avg}/10` : '—', 'across all sessions']];
  $('#statsGrid').innerHTML = stats.map(([label, value, small]) => `<article class="stat-card"><span>${label}</span><strong>${value}</strong><small>${small}</small></article>`).join('');
  $('#subjectProgressList').innerHTML = subjects.map(subject => {
    const count = subject.topics.filter((_, i) => progressFor(subject.id, i).mastered).length;
    return `<div class="subject-progress-row"><div class="subject-progress-name"><span class="subject-dot" style="background:${subject.color || '#8ca28a'}"></span>${escapeHtml(subject.name)}</div><div class="dashboard-track"><i style="width:${Math.round(count / subject.topics.length * 100)}%"></i></div><div class="subject-progress-count">${count}/${subject.topics.length}</div></div>`;
  }).join('');
  $('#historyList').innerHTML = state.history.length ? state.history.slice().reverse().slice(0, 12).map(item => `<div class="history-row"><span class="history-symbol">${item.score === 10 ? '✓' : '↻'}</span><div><strong>${escapeHtml(item.topic)}</strong><span>${escapeHtml(item.subject)} · ${new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} · attempt ${item.attempt}</span></div><span class="history-score">${item.score}/10</span></div>`).join('') : '<div class="empty-state">Your study sessions will show up here. Start a topic to begin.</div>';
}
function escapeHtml(text) { return String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function openModal(html) { $('#modalContent').innerHTML = html; $('#modalBackdrop').hidden = false; $('#modal').scrollTop = 0; }
function closeModal() { $('#modalBackdrop').hidden = true; stopListening(); }
function header(step, title, copy) {
  const steps = ['Notes', 'Summary', 'Quiz', 'Evaluation'];
  return `<div class="modal-header"><div class="eyebrow">${selectedSubject().name.toUpperCase()} · TOPIC ${String(activeTopicIndex + 1).padStart(2, '0')}</div><h2 id="modalTitle">${title}</h2><p>${copy}</p></div><div class="workflow-steps">${steps.map((name, i) => `<span class="workflow-step ${i === step ? 'active' : i < step ? 'done' : ''}"><i class="step-no">${i < step ? '✓' : i + 1}</i>${name}</span>${i < 3 ? '<i class="workflow-line"></i>' : ''}`).join('')}</div>`;
}
function openNotes() {
  const topic = selectedSubject().topics[activeTopicIndex];
  activeNotes = topic.notes;
  openModal(`${header(0, 'Start with your notes', 'Add your class notes or reference material. We’ll turn them into a focused study guide and quiz.')}<label class="field-label" for="subjectSelect">Subject</label><select id="subjectSelect" class="select-input">${allSubjects().map(s => `<option value="${s.id}" ${s.id === selectedSubject().id ? 'selected' : ''}>${escapeHtml(s.name)}</option>`).join('')}</select><label class="field-label" for="topicNameInput">Topic name</label><input class="text-input" id="topicNameInput" value="${escapeHtml(topic.title)}" maxlength="80"><label class="field-label" for="notesInput">Your notes <small>Paste or edit your material below</small></label><textarea class="notes-input" id="notesInput" placeholder="Paste your class notes here…">${escapeHtml(activeNotes)}</textarea><label class="upload-zone" for="fileInput"><span class="upload-symbol">↑</span><span><strong>Upload a text file</strong><small>.txt or .md · Your file stays on this device</small></span><input type="file" id="fileInput" accept=".txt,.md,text/plain,text/markdown"></label><div class="hint-box">For the best quiz, include key terms, definitions, and facts you need to remember.</div><button class="primary-button modal-primary" id="makeSummaryBtn">Make my study guide <span>→</span></button>`);
  $('#subjectSelect').addEventListener('change', event => { state.selectedSubject = event.target.value; activeTopicIndex = firstUnmastered(selectedSubject()); save(); render(); openNotes(); });
  $('#fileInput').addEventListener('change', async event => { const file = event.target.files?.[0]; if (!file) return; if (file.size > 1_000_000) return showToast('Please choose a text file smaller than 1 MB.'); $('#notesInput').value = await file.text(); });
  $('#makeSummaryBtn').addEventListener('click', () => { const notes = $('#notesInput').value.trim(); if (notes.length < 60) return showToast('Add a little more detail first (at least 60 characters).'); activeNotes = notes; const name = $('#topicNameInput').value.trim(); if (name) selectedSubject().topics[activeTopicIndex].title = name; render(); openSummary(); });
}
function summarize(notes) {
  const sentences = notes.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]?/g)?.map(s => s.trim()).filter(s => s.length > 25) || [];
  const terms = [...new Set((notes.match(/\b[A-Z][a-zA-Z-]{3,}|\b[a-zA-Z-]{7,}\b/g) || []).map(word => word.toLowerCase()))].slice(0, 7);
  const important = sentences.slice(0, 4);
  return { overview: important.slice(0, 2).join(' '), points: important.slice(2).concat(terms.length ? [`Key terms to remember: ${terms.join(', ')}.`] : []).slice(0, 4), terms };
}
function openSummary() {
  const summary = summarize(activeNotes);
  const points = summary.points.map(point => `<div class="summary-point">${escapeHtml(point)}</div>`).join('');
  openModal(`${header(1, 'A study guide, made for you', `A quick read on ${escapeHtml(selectedSubject().topics[activeTopicIndex].title)}. Your quiz will come from this material.`)}<section class="summary-section"><h3>The big picture</h3><p>${escapeHtml(summary.overview || activeNotes.slice(0, 420))}</p></section><section class="summary-section"><h3>Remember these</h3><div class="summary-points">${points || `<div class="summary-point">Read your notes closely and look for the main ideas.</div>`}</div></section><div class="hint-box">Read through once, then see what you can recall without looking.</div><div class="quiz-footer"><button class="secondary-button" id="backToNotes">← Edit notes</button><button class="primary-button modal-primary" id="startQuizBtn" style="width:auto;padding:0 18px;margin:0">I’m ready for the quiz <span>→</span></button></div>`);
  $('#backToNotes').addEventListener('click', openNotes);
  $('#startQuizBtn').addEventListener('click', startQuiz);
}
function normalized(text) { return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9=+\s-]/g, ' ').replace(/\s+/g, ' ').trim(); }
function buildQuiz(notes, subjectId) {
  const fixed = QUESTION_SETS[subjectId] || QUESTION_SETS.biology;
  const noteText = normalized(notes);
  // Choose questions whose expected idea occurs in these notes. For uploaded
  // material, create additional grounded prompts from its own sentences.
  const chosen = fixed.filter(([, answer]) => {
    const core = normalized(answer).split(' ').filter(word => word.length > 3 && !['that','with','from','into','which','where','their','through','what','does','have','this','they','each'].includes(word));
    return core.length > 0 && core.every(word => noteText.includes(word));
  }).slice(0, 10);
  const sentences = notes.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]?/g)?.map(s => s.trim()).filter(s => s.length > 45) || [];
  for (const sentence of sentences) {
    if (chosen.length >= 10) break;
    const candidate = sentence.replace(/^(the|a|an)\s+/i, '');
    const match = candidate.match(/^(.{8,65}?)\s+(is|are|was|were|has|have|stores|controls|releases|builds|makes|includes|uses|occurs|takes place|helps|provides|converts|directs|regulates|contains|connects|shows|means|states|describes)\s+(.{3,100})$/i);
    if (match) {
      const answer = match[1].trim();
      const question = `According to your notes, what ${match[2].toLowerCase()} ${answer.toLowerCase()}?`;
      if (answer.length < 70 && !chosen.some(([q]) => q === question)) chosen.push([question, sentence.replace(/[.]+$/, '').trim()]);
    }
  }
  // If a short upload has too few definitional statements, turn salient phrases
  // into recall checks that still require a note-backed answer.
  const keywords = [...new Set((notes.match(/\b[A-Z][a-zA-Z-]{4,}/g) || []).map(term => term.toLowerCase()).concat((notes.match(/\b[a-zA-Z-]{7,}\b/g) || []).map(term => term.toLowerCase())))];
  for (const keyword of keywords) {
    if (chosen.length >= 10) break;
    const sentence = sentences.find(value => normalized(value).includes(normalized(keyword)));
    if (sentence && !chosen.some(([q]) => q === `What do your notes say about ${keyword}?`)) chosen.push([`What do your notes say about ${keyword}?`, sentence]);
  }
  if (chosen.length < 10) {
    for (const sentence of sentences) {
      if (chosen.length >= 10) break;
      const phrase = sentence.replace(/[.]+$/, '').slice(0, 65);
      if (!chosen.some(([question]) => question === `What key fact do your notes give about “${phrase}”?`)) chosen.push([`What key fact do your notes give about “${phrase}”?`, sentence]);
    }
  }
  if (chosen.length < 10) {
    const fallback = sentences.length ? sentences : [notes];
    while (chosen.length < 10) { const source = fallback[chosen.length % fallback.length]; const snippet = source.replace(/[.]+$/, '').slice(0, 65); chosen.push([`What detail appears in this note: “${snippet}”?`, source]); }
  }
  return chosen.slice(0, 10).map(([question, answer]) => ({ question, answer, tokens: normalized(answer).split(' ').filter(word => word.length >= 4) }));
}
function startQuiz() { quizItems = buildQuiz(activeNotes, selectedSubject().id); quizIndex = 0; quizCorrect = 0; quizMissed = []; quizAnswered = false; showQuestion(); }
function showQuestion(feedback) {
  const item = quizItems[quizIndex];
  openModal(`${header(2, 'A little practice', 'Answer in your own words. You’ll need 10 out of 10 to master this topic and move on.')}<div class="quiz-progress-row"><span>Question ${quizIndex + 1} of 10</span><span>${quizCorrect} correct so far</span></div><div class="quiz-progress"><i style="width:${quizIndex / 10 * 100}%"></i></div><article class="question-card"><div class="question-number">QUESTION ${String(quizIndex + 1).padStart(2, '0')}</div><h3>${escapeHtml(item.question)}</h3><div class="answer-toolbar"><label for="answerInput">Your answer</label><button class="voice-button" id="voiceBtn" type="button">◉ &nbsp;Answer by voice</button></div><textarea class="notes-input quiz-answer" id="answerInput" placeholder="Type your answer here…" ${quizAnswered ? 'disabled' : ''}></textarea><div id="inlineFeedback">${feedback || ''}</div></article><div class="quiz-footer"><span class="keyboard-hint">Take your time — you can do this.</span>${quizAnswered ? `<button class="primary-button modal-primary" id="nextQuestionBtn" style="width:auto;padding:0 18px;margin:0">${quizIndex === 9 ? 'See my results' : 'Next question'} <span>→</span></button>` : '<button class="primary-button modal-primary" id="checkAnswerBtn" style="width:auto;padding:0 18px;margin:0">Check answer <span>→</span></button>'}</div>`);
  if (!quizAnswered) {
    $('#checkAnswerBtn').addEventListener('click', checkAnswer);
    $('#voiceBtn').addEventListener('click', toggleListening);
    $('#answerInput').addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') checkAnswer(); });
  } else $('#nextQuestionBtn').addEventListener('click', () => { quizIndex++; if (quizIndex >= 10) showResults(); else { quizAnswered = false; showQuestion(); } });
}
function checkAnswer() {
  const response = $('#answerInput').value.trim();
  if (response.length < 2) return showToast('Write or say a short answer first.');
  const item = quizItems[quizIndex];
  const answerText = normalized(response);
  const exact = normalized(item.answer);
  const coverage = item.tokens.length ? item.tokens.filter(token => answerText.includes(token)).length / item.tokens.length : answerText.includes(exact);
  // Answers must contain the central concept, not merely echo a long source
  // sentence. A little phrasing freedom keeps typed and spoken answers usable.
  const correct = answerText === exact || answerText.includes(exact) || coverage >= (item.tokens.length > 5 ? 0.52 : item.tokens.length > 2 ? 0.66 : 1);
  quizAnswered = true;
  if (correct) quizCorrect++; else quizMissed.push({ question: item.question, expected: item.answer, given: response });
  const feedback = correct
    ? '<div class="quiz-feedback correct"><strong>That’s right — nicely done.</strong><p>You’ve got the key idea. Keep going!</p></div>'
    : `<div class="quiz-feedback incorrect"><strong>Not quite yet — that’s okay.</strong><p>Review this idea: <b>${escapeHtml(item.answer)}</b>. You can retry the topic after you see your results.</p></div>`;
  showQuestion(feedback);
}
function showResults() {
  const subject = selectedSubject();
  const topic = subject.topics[activeTopicIndex];
  const perfect = quizCorrect === 10;
  const key = `${subject.id}:${activeTopicIndex}`;
  const previous = progressFor(subject.id, activeTopicIndex);
  const attempt = previous.attempts + 1;
  state.progress[key] = { mastered: previous.mastered || perfect, attempts: attempt, best: Math.max(previous.best, quizCorrect) };
  state.history.push({ subject: subject.name, topic: topic.title, score: quizCorrect, attempt, date: new Date().toISOString() });
  save(); render();
  const strengths = perfect ? ['You recalled every core idea accurately.', 'You demonstrated confident understanding.', 'You’re ready to build on this foundation.'] : quizCorrect ? [`You answered ${quizCorrect} question${quizCorrect === 1 ? '' : 's'} correctly.`, 'You remembered some important details.', 'Reviewing the missed ideas will strengthen recall.'] : ['You completed all ten questions.', 'You now know which ideas need another look.', 'A second pass through your study guide can help.'];
  const weak = quizMissed.slice(0, 4).map(item => item.question);
  openModal(`${header(3, perfect ? 'Topic mastered — lovely work!' : 'You’re learning with every try', perfect ? 'You cleared the mastery check. Your next topic is ready whenever you are.' : 'You need a perfect 10/10 to unlock the next topic. Review your missed ideas and give it another go.')}<div class="result-score"><div class="score-circle">${quizCorrect}/10</div><div><strong>${perfect ? 'A perfect score.' : 'A good start.'}</strong><p>${perfect ? 'You’ve earned your next step.' : `Best score: ${state.progress[key].best}/10 · Attempt ${attempt}`}</p></div></div><div class="feedback-columns"><section class="feedback-panel"><h4>Your strengths</h4><ul>${strengths.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></section><section class="feedback-panel"><h4>Keep practicing</h4><ul>${(weak.length ? weak : ['No missed questions. Keep your knowledge fresh with a quick review.']).map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></section></div>${perfect ? `<div class="mastery-banner"><span class="mastery-icon">✳</span><div><strong>Mastery unlocked</strong><p>Your progress is saved on this device. The next topic is now available.</p></div></div>` : `<section class="summary-section"><h3>Ideas to revisit</h3>${quizMissed.slice(0, 5).map(item => `<div class="quiz-review-item"><strong>${escapeHtml(item.question)}</strong><p>Study guide answer: ${escapeHtml(item.expected)}</p></div>`).join('')}</section><div class="hint-box">Improvement idea: reread the “Remember these” section, then try again. You’ll need all 10 correct to continue.</div>`}<div class="quiz-footer"><button class="secondary-button" id="closeResultsBtn">Back to study room</button><button class="primary-button modal-primary" id="resultActionBtn" style="width:auto;padding:0 18px;margin:0">${perfect ? (activeTopicIndex < subject.topics.length - 1 ? 'Next topic' : 'Choose a subject') : 'Try again'} <span>→</span></button></div>`);
  $('#closeResultsBtn').addEventListener('click', closeModal);
  $('#resultActionBtn').addEventListener('click', () => {
    if (!perfect) { openSummary(); return; }
    closeModal();
    if (activeTopicIndex < subject.topics.length - 1) { activeTopicIndex++; render(); showToast('Next topic unlocked — you’ve got this.'); }
    else { setView('study'); showToast('You’ve mastered every topic in this subject!'); }
  });
}
let recognition = null;
function toggleListening() {
  if (recognition) return stopListening();
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return showToast('Voice input is not supported here. Try Chrome or type your answer.');
  recognition = new SpeechRecognition(); recognition.lang = 'en-US'; recognition.interimResults = true;
  recognition.onresult = event => { const input = $('#answerInput'); if (!input) return; input.value = [...event.results].map(result => result[0].transcript).join(' '); };
  recognition.onend = () => { recognition = null; const btn = $('#voiceBtn'); if (btn) { btn.classList.remove('listening'); btn.textContent = '◉  Answer by voice'; } };
  recognition.onerror = () => { stopListening(); showToast('I couldn’t hear that. Please try again or type your answer.'); };
  recognition.start(); const btn = $('#voiceBtn'); btn.classList.add('listening'); btn.textContent = '●  Listening…';
}
function stopListening() { if (recognition) { recognition.onend = null; recognition.stop(); recognition = null; } const btn = $('#voiceBtn'); if (btn) { btn.classList.remove('listening'); btn.textContent = '◉  Answer by voice'; } }
function addSubject() {
  openModal(`${header(0, 'Add a subject', 'Create a focused space for the next thing you want to learn.')}<label class="field-label" for="newSubjectName">Subject name</label><input id="newSubjectName" class="text-input" maxlength="40" placeholder="e.g. Chemistry"><label class="field-label" for="newTopicName">First topic</label><input id="newTopicName" class="text-input" maxlength="80" placeholder="e.g. Atoms & elements"><label class="field-label" for="newTopicNotes">Starting notes</label><textarea id="newTopicNotes" class="notes-input" placeholder="Add a few facts to start learning…"></textarea><button class="primary-button modal-primary" id="saveSubjectBtn">Create subject <span>→</span></button>`);
  $('#saveSubjectBtn').addEventListener('click', () => {
    const name = $('#newSubjectName').value.trim(), title = $('#newTopicName').value.trim(), notes = $('#newTopicNotes').value.trim();
    if (!name || !title || notes.length < 60) return showToast('Add a subject, topic, and at least 60 characters of notes.');
    const id = `custom-${Date.now()}`;
    state.customSubjects.push({ id, name, icon: '✳', color: '#8ca28a', topics: [{ title, subtitle: 'Your first topic', description: `A focused study session in ${name}.`, notes }] });
    state.selectedSubject = id; activeTopicIndex = 0; save(); render(); openNotes();
  });
}
function init() {
  const now = new Date(); $('#todayLabel').textContent = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  $$('.nav-link').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  $('#openTopicBtn').addEventListener('click', () => { if (progressFor(selectedSubject().id, activeTopicIndex).mastered) openSummary(); else openNotes(); });
  $('#changeSubjectBtn').addEventListener('click', () => { const list = $('#subjectList'); list.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); showToast('Choose a subject from your sidebar.'); });
  $('#addSubjectBtn').addEventListener('click', addSubject);
  $('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', event => { if (event.target === $('#modalBackdrop')) closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#modalBackdrop').hidden) closeModal(); });
  render();
}
init();
