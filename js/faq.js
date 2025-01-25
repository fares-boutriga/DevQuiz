const faqForm = document.getElementById('faq-form');
const faqList = document.getElementById('faq-list');
const editFaqModal = new bootstrap.Modal(document.getElementById('editFaqModal'));
const editFaqForm = document.getElementById('edit-faq-form');
const editQuestionInput = document.getElementById('edit-question');
const editAnswerInput = document.getElementById('edit-answer');

const faqs = [];
let editIndex = null;

faqForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const questionInput = document.getElementById('faq-question');
    const answerInput = document.getElementById('faq-answer');

    const newFaq = {
        question: questionInput.value,
        answer: answerInput.value
    };

    faqs.push(newFaq);
    questionInput.value = '';
    answerInput.value = '';
    renderFaqs();
});

editFaqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (editIndex !== null) {
        faqs[editIndex].question = editQuestionInput.value;
        faqs[editIndex].answer = editAnswerInput.value;
        editIndex = null;
        editFaqModal.hide();
        renderFaqs();
    }
});

function renderFaqs() {
    faqList.innerHTML = '';

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const faqQuestion = document.createElement('h5');
        faqQuestion.textContent = `Q: ${faq.question}`;

        const faqAnswer = document.createElement('p');
        faqAnswer.textContent = `A: ${faq.answer}`;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Modifier';
        editBtn.className = 'btn btn-sm btn-warning me-2';
        editBtn.onclick = () => startEditFaq(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'btn btn-sm btn-danger';
        deleteBtn.onclick = () => deleteFaq(index);

        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);
        faqItem.appendChild(editBtn);
        faqItem.appendChild(deleteBtn);

        faqList.appendChild(faqItem);
    });
}

function startEditFaq(index) {
    editIndex = index;
    editQuestionInput.value = faqs[index].question;
    editAnswerInput.value = faqs[index].answer;
    editFaqModal.show();
}

function deleteFaq(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette FAQ ?')) {
        faqs.splice(index, 1);
        renderFaqs();
    }
}