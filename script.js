document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sticker-grid');
    const totalStickers = 150; // Apenas para demonstração inicial
    let collectedCount = 0;

    // Gerando figurinhas ilustrativas
    for (let i = 1; i <= totalStickers; i++) {
        const stickerEl = document.createElement('div');
        stickerEl.classList.add('sticker');
        stickerEl.textContent = i;
        
        // Marcando algumas aleatoriamente como coletadas para a UI ficar legal
        if (Math.random() > 0.85) {
            stickerEl.classList.add('collected');
            collectedCount++;
        }

        // Interação de clique simples
        stickerEl.addEventListener('click', () => {
            stickerEl.classList.toggle('collected');
        });

        grid.appendChild(stickerEl);
    }

    // Atualiza os stats baseados na demonstração
    const pct = Math.round((collectedCount / totalStickers) * 100);
    document.querySelectorAll('.value')[0].textContent = pct + '%';
    document.querySelectorAll('.value')[1].textContent = totalStickers - collectedCount;
});
