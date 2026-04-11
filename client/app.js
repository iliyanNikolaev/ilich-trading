const pages = {
    home: 'pages/home.html',
    trend: 'pages/trend.html',
    supportResistance: 'pages/support-resistance.html',
    fvg: 'pages/fvg.html',
    emaStrategy: 'pages/ema-strategy.html',
    basicCandles: 'pages/basic-candles.html',
    doubleCandles: 'pages/double-candles.html',
    tripleCandles: 'pages/triple-candles.html',
    continuationPatterns: 'pages/continuation-patterns.html',
    smt: 'pages/smt.html',
};

async function navigateTo(pageKey) {
    const appDiv = document.getElementById('app');
    // Проверка дали страницата съществува
    if (pages[pageKey]) {
        try {
            const response = await fetch(pages[pageKey]);
            if (response.ok) {
                const html = await response.text();
                appDiv.innerHTML = html;
            } else {
                appDiv.innerHTML = "<h1>404: Страницата не е намерена</h1>";
            }
        } catch (error) {
            appDiv.innerHTML = "<h1>Грешка при зареждане</h1>";
        }
    } else {
        appDiv.innerHTML = "<h1>404: Страницата не е намерена</h1>";
    }
}

function explain(term) {
    const explanations = {
        'Pullbacks': 'Pullback е временно движение срещу тренда, често към ниво на подкрепа. Използва се за вход в сделки с тренда.',
        'Rallies': 'Rally е временно движение нагоре в мечи тренд, към ниво на съпротива. Използва се за вход в short позиции.',
    };
    const text = explanations[term] || 'Обяснение не е налично.';
    document.getElementById('modal-text').textContent = text;
    document.getElementById('modal').style.display = 'block';
}

// Затваряне на модала
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Зареждаме началната страница при стартиране
window.onload = () => navigateTo('home');