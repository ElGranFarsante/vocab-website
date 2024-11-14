function searchWord() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const lessons = document.querySelectorAll(".lesson");

    lessons.forEach((lesson) => {
        let hasMatch = false;
        const words = lesson.querySelectorAll("li");

        words.forEach((word) => {
            const wordText = word.textContent.toLowerCase();
            
            if (searchInput && wordText.includes(searchInput)) {
                hasMatch = true;
                // Highlight the matching word
                const regex = new RegExp(`(${searchInput})`, "gi");
                word.innerHTML = word.innerHTML.replace(regex, "<span class='highlight'>$1</span>");
            } else {
                // Remove any previous highlights if there's no match
                word.innerHTML = word.innerHTML.replace(/<span class='highlight'>(.*?)<\/span>/g, "$1");
            }
        });

        // Show or hide the lesson based on whether it has a match
        if (hasMatch) {
            lesson.style.display = "block";
        } else {
            lesson.style.display = "none";
        }
    });
}
