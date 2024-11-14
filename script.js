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
</script>

