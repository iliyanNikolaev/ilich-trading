const pages = {
    home: { file: 'pages/home.html', title: 'Начало и основи' },
    trend: { file: 'pages/trend.html', title: 'Тренд и пазарна структура' },
    supportResistance: { file: 'pages/support-resistance.html', title: 'Подкрепа и съпротива' },
    fvg: { file: 'pages/fvg.html', title: 'Fair Value Gap' },
    emaStrategy: { file: 'pages/ema-strategy.html', title: 'EMA 50 и EMA 200' },
    basicCandles: { file: 'pages/basic-candles.html', title: 'Единични свещни модели' },
    doubleCandles: { file: 'pages/double-candles.html', title: 'Двойни свещни модели' },
    tripleCandles: { file: 'pages/triple-candles.html', title: 'Тройни свещни модели' },
    continuationPatterns: { file: 'pages/continuation-patterns.html', title: 'Продължаващи модели' },
    smt: { file: 'pages/smt.html', title: 'SMT дивергенция' },
    amdStrategy: { file: 'pages/amd-strategy.html', title: 'AMD и Premium / Discount' },
    goldSwingStrategy: { file: 'pages/gold-swing-strategy.html', title: 'Gold Swing Strategy' },
    riskManagement: { file: 'pages/risk-management.html', title: 'Управление на риска' }
};

let activePageRequest = 0;

async function navigateTo(pageKey) {
    const page = pages[pageKey];
    const app = document.getElementById('app');
    if (!page || !app) {
        if (app) app.innerHTML = '<section class="lesson"><h1>Страницата не е намерена</h1><p>Избери урок от менюто.</p></section>';
        return;
    }

    const requestId = ++activePageRequest;
    app.setAttribute('aria-busy', 'true');
    app.innerHTML = '<div class="loading-state"><span class="loading-spinner"></span> Зареждане…</div>';

    try {
        const response = await fetch(page.file, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        if (requestId !== activePageRequest) return;
        app.innerHTML = html;
        app.removeAttribute('aria-busy');
        document.title = `${page.title} | Ilich Trading Academy`;
        updateActiveNavigation(pageKey);
        closeMobileMenu();
        app.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } catch (error) {
        if (requestId !== activePageRequest) return;
        app.removeAttribute('aria-busy');
        app.innerHTML = `
            <section class="lesson">
                <div class="lesson-hero"><span class="eyebrow">ВЪЗНИКНА ПРОБЛЕМ</span><h1>Страницата не можа да се зареди</h1>
                <p>Провери дали приложението се стартира през локален сървър, а не чрез директно отваряне на HTML файла.</p></div>
                <div class="callout callout-warning"><strong>Техническа бележка</strong><p>${escapeHtml(error.message)}. Fetch API изисква HTTP сървър за зареждане на вътрешните страници.</p></div>
            </section>`;
    }
}

function updateActiveNavigation(pageKey) {
    document.querySelectorAll('.nav-link').forEach((button) => {
        const isActive = button.dataset.page === pageKey;
        button.classList.toggle('is-active', isActive);
        if (isActive) button.setAttribute('aria-current', 'page');
        else button.removeAttribute('aria-current');
    });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
}

function openModal(title, text) {
    const modal = document.getElementById('modal');
    if (!modal) return;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.querySelector('.modal-close')?.focus();
}

function explain(term) {
    const explanations = {
        'Pullback': 'Временно движение срещу основната посока на тренда. При възходящ тренд цената се връща надолу; при низходящ тренд се покачва. Търсим дали след това основната посока ще се възобнови.',
        'Rally': 'Временно покачване на цената. В низходящ тренд такова покачване може да бъде корекция, но само структурата и последващото потвърждение показват дали спадът ще продължи.',
        'BOS': 'Break of Structure е пробив на значим локален връх или дъно в посоката на текущото движение. В това ръководство използваме затваряне на свещта отвъд нивото като по-строго потвърждение.',
        'Retest': 'След пробив цената се връща към пробитото ниво. Наблюдаваме дали то ще задържи цената от другата страна. Ретестът може да не се случи и не гарантира продължение.'
    };
    openModal(term, explanations[term] || 'Обяснение не е налично.');
}

function closeMobileMenu() {
    document.getElementById('sidebar')?.classList.remove('is-open');
    document.getElementById('nav-overlay')?.setAttribute('hidden', '');
    const toggle = document.getElementById('menu-toggle');
    toggle?.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('nav-overlay');
    const toggle = document.getElementById('menu-toggle');
    if (!sidebar || !overlay || !toggle) return;
    const shouldOpen = !sidebar.classList.contains('is-open');
    sidebar.classList.toggle('is-open', shouldOpen);
    if (shouldOpen) overlay.removeAttribute('hidden');
    else overlay.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', String(shouldOpen));
}

document.addEventListener('click', (event) => {
    const pageButton = event.target.closest('[data-page]');
    if (pageButton) {
        navigateTo(pageButton.dataset.page);
        return;
    }
    if (event.target.closest('#menu-toggle')) toggleMobileMenu();
    if (event.target.closest('#nav-overlay')) closeMobileMenu();
    if (event.target.closest('.modal-close')) {
        const modal = document.getElementById('modal');
        modal?.classList.remove('is-open');
        modal?.setAttribute('aria-hidden', 'true');
    }
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('is-open');
        event.target.setAttribute('aria-hidden', 'true');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileMenu();
        const modal = document.getElementById('modal');
        modal?.classList.remove('is-open');
        modal?.setAttribute('aria-hidden', 'true');
    }
});

window.navigateTo = navigateTo;
window.explain = explain;
window.addEventListener('DOMContentLoaded', () => navigateTo('home'));
