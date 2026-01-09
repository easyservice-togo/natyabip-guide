
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
    let translations = {};

    if (lang === 'fr') {
        translations = window.translations_fr;
    } else {
        translations = window.translations_en;
    }

    // Apply translations
    if (translations) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    }

    // Update active button
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

function downloadPDF() {
    window.print();
}
