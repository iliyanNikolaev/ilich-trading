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
    goldSwingStrategy: 'pages/gold-swing-strategy.html',
};

async function navigateTo(pageKey) {
    const appDiv = document.getElementById('app');

    if (pages[pageKey]) {
        try {
            const response = await fetch(pages[pageKey]);
            if (response.ok) {
                const html = await response.text();
                appDiv.innerHTML = html;
            } else {
                appDiv.innerHTML = '<h1>404: Страницата не е намерена</h1>';
            }
        } catch (error) {
            appDiv.innerHTML = '<h1>Грешка при зареждане</h1>';
        }
    } else {
        appDiv.innerHTML = '<h1>404: Страницата не е намерена</h1>';
    }
}

function explain(term) {
    const explanations = {
        'Pullbacks': 'Pullback е временно движение срещу основната посока на тренда. При мечи тренд цената се покачва за кратко, преди евентуално да продължи надолу.',
        'Rallies': 'Rally е временно възстановяване нагоре в мечи тренд. Трейдърите, които следват тренда, могат да наблюдават такива движения за потенциални SELL възможности.',
    };
    const text = explanations[term] || 'Обяснение не е налично.';
    document.getElementById('modal-text').textContent = text;
    document.getElementById('modal').style.display = 'block';
}

// Затваряне на модалния прозорец
 document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// Зареждаме началната страница при стартиране
window.onload = () => navigateTo('home');
