// Search Function
function searchWord() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const lessons = document.querySelectorAll(".lesson");

    lessons.forEach(lesson => {
        const words = lesson.getElementsByTagName("strong");
        let found = false;

        Array.from(words).forEach(word => {
            if (word.textContent.toLowerCase().includes(input)) {
                lesson.style.display = "block";
                found = true;
            }
        });

        if (!found) {
            lesson.style.display = "none";
        }
    });
}

// Scroll Animation for Lessons
document.addEventListener("scroll", () => {
    const lessons = document.querySelectorAll(".lesson");
    lessons.forEach(lesson => {
        const rect = lesson.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            lesson.classList.add("visible");
        }
    });
});
