
// Scroll to top functionality
const btnBackToTop = document.getElementById("btnBackToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// No cache needed with inline objects, but keeping function structure
function setLanguage(lang) {
    const translations = lang === 'fr' ? window.translations_fr : window.translations_en;
    document.documentElement.lang = lang;

    if (translations) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    }

    document.querySelectorAll('.btn-lang').forEach(btn => {
        const btnLang = (btn.dataset.lang || btn.textContent.trim().toLowerCase()).toLowerCase();
        const isActive = btnLang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

function downloadPDF() {
    window.print();
}
