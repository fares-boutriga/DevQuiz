// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const faqForm = document.querySelector("#faqForm");
    const faqList = document.querySelector("#faqList");

    // Load FAQs from localStorage
    const loadFAQs = () => {
        const faqs = JSON.parse(localStorage.getItem("faqs")) || [];
        faqList.innerHTML = faqs.map((faq, index) => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${faq}</span>
                <button class="btn btn-danger btn-sm" onclick="deleteFAQ(${index})">Supprimer</button>
            </li>
        `).join("");
    };

    // Add FAQ
    faqForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const faqInput = document.querySelector("#faqInput");
        const faqs = JSON.parse(localStorage.getItem("faqs")) || [];
        faqs.push(faqInput.value);
        localStorage.setItem("faqs", JSON.stringify(faqs));
        faqInput.value = "";
        loadFAQs();
    });

    // Delete FAQ
    window.deleteFAQ = (index) => {
        const faqs = JSON.parse(localStorage.getItem("faqs")) || [];
        faqs.splice(index, 1);
        localStorage.setItem("faqs", JSON.stringify(faqs));
        loadFAQs();
    };

    loadFAQs();
});
