const bookmark = document.querySelector('.heading-cta-button-bookmark');
const label = document.querySelector('label');

bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmarked');
    label.classList.toggle('bookmarked-label');

    if(label.classList.contains('bookmarked-label')) {
        label.textContent = "Bookmarked";
    }
    else {
        label.textContent = "Bookmark";
    }
    
});