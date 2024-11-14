<script>
    const languageMenu = document.getElementById('language-menu');
    const lessons = document.querySelectorAll('.lesson');

    languageMenu.addEventListener('change', function() {
        const selectedLanguage = languageMenu.value;

        lessons.forEach(lesson => {
            if (lesson.dataset.language === selectedLanguage || selectedLanguage === 'all') {
                lesson.style.display = 'block';
            } else {
                lesson.style.display = 'none';
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    const lessonLinks = document.querySelectorAll('header nav ul li a');
    lessonLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

</script>
function searchWord() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const lessons = document.querySelectorAll('.lesson');

    lessons.forEach(lesson => {
        const words = lesson.querySelectorAll('li');
        let found = false;

        words.forEach(word => {
            if (word.textContent.toLowerCase().includes(input)) {
                word.style.display = 'list-item';
                found = true;
            } else {
                word.style.display = 'none';
            }
        });

        // Show or hide the entire lesson section based on search results
        lesson.style.display = found ? 'block' : 'none';
    });
}

