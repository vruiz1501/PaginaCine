document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
 
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const cardName = card.getAttribute('data-name').toLowerCase();
            if (cardName.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});