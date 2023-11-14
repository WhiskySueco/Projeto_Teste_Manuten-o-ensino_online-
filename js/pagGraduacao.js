function filterByPrice(priceRange) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const priceElement = card.querySelector('.text-success');
        const price = parseFloat(priceElement.textContent.replace('R$ ', ''));

        switch (priceRange) {
            case 'below100':
                card.style.display = price < 100 ? '' : 'none';
                break;
            case '100to200':
                card.style.display = price >= 100 && price <= 200 ? '' : 'none';
                break;
            case 'above200':
                card.style.display = price > 200 ? '' : 'none';
                break;
            default:
                card.style.display = '';
        }
    });
}
