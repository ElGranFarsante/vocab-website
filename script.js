function searchWord() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const lessons = document.querySelectorAll('.lesson');
    let found = false;

    lessons.forEach(lesson => {
        const words = lesson.querySelectorAll('li');
        words.forEach(word => {
            if (word.textContent.toLowerCase().includes(input)) {
                word.style.backgroundColor = 'yellow';
                found = true;
            } else {
                word.style.backgroundColor = '';
            }
        });
    });

    if (!found) {
        alert('Word not found!');
    }
}
