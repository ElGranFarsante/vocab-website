function searchWord() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const lessons = document.querySelectorAll(".lesson");

    lessons.forEach(lesson => {
        const words = lesson.querySelectorAll("li");
        let found = false;

        words.forEach(word => {
            const wordText = word.innerText.toLowerCase();
            if (wordText.includes(input)) {
                word.style.display = "list-item";
                found = true;
            } else {
                word.style.display = "none";
            }
        });

        lesson.style.display = found ? "block" : "none";
    });
}

function resetSearch() {
    document.getElementById("search-input").value = "";
    const lessons = document.querySelectorAll(".lesson");

    lessons.forEach(lesson => {
        const words = lesson.querySelectorAll("li");
        words.forEach(word => {
            word.style.display = "list-item";
        });
        lesson.style.display = "block";
    });
}
