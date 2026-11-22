const pages = {
    home: { file: 'pages/home.html', enFile: 'pages/en/home.html', titleBg: 'Начало и основи', titleEn: 'Trading Basics' },
    trend: { file: 'pages/trend.html', enFile: 'pages/en/trend.html', titleBg: 'Тренд и пазарна структура', titleEn: 'Trend and Market Structure' },
    supportResistance: { file: 'pages/support-resistance.html', enFile: 'pages/en/support-resistance.html', titleBg: 'Подкрепа и съпротива', titleEn: 'Support and Resistance' },
    fvg: { file: 'pages/fvg.html', enFile: 'pages/en/fvg.html', titleBg: 'Fair Value Gap', titleEn: 'Fair Value Gap' },
    emaStrategy: { file: 'pages/ema-strategy.html', enFile: 'pages/en/ema-strategy.html', titleBg: 'EMA 50 и EMA 200', titleEn: 'EMA 50 and EMA 200' },
    basicCandles: { file: 'pages/basic-candles.html', enFile: 'pages/en/basic-candles.html', titleBg: 'Единични свещни модели', titleEn: 'Single-Candle Patterns' },
    doubleCandles: { file: 'pages/double-candles.html', enFile: 'pages/en/double-candles.html', titleBg: 'Двойни свещни модели', titleEn: 'Two-Candle Patterns' },
    tripleCandles: { file: 'pages/triple-candles.html', enFile: 'pages/en/triple-candles.html', titleBg: 'Тройни свещни модели', titleEn: 'Three-Candle Patterns' },
    continuationPatterns: { file: 'pages/continuation-patterns.html', enFile: 'pages/en/continuation-patterns.html', titleBg: 'Продължаващи модели', titleEn: 'Continuation Patterns' },
    smt: { file: 'pages/smt.html', enFile: 'pages/en/smt.html', titleBg: 'SMT дивергенция', titleEn: 'SMT Divergence' },
    amdStrategy: { file: 'pages/amd-strategy.html', enFile: 'pages/en/amd-strategy.html', titleBg: 'AMD и Premium / Discount', titleEn: 'AMD and Premium / Discount' },
    goldSwingStrategy: { file: 'pages/gold-swing-strategy.html', enFile: 'pages/en/gold-swing-strategy.html', titleBg: 'Gold Swing Strategy', titleEn: 'Gold Swing Strategy' },
    riskManagement: { file: 'pages/risk-management.html', enFile: 'pages/en/risk-management.html', titleBg: 'Управление на риска', titleEn: 'Risk Management' }
};

const shellText = {
    bg: {
        learningMode: 'Учебен режим', menu: 'Меню', learningPath: 'ТВОЯТ УЧЕБЕН ПЪТ',
        learningPathText: 'От първата графика до самостоятелен анализ.',
        groupStart: 'СТАРТ', navHome: 'Начало и основи', groupStructure: 'ПАЗАРНА СТРУКТУРА',
        navTrend: 'Тренд и структура', navSupport: 'Подкрепа и съпротива', navFvg: 'Fair Value Gap',
        navEma: 'EMA 50 и EMA 200', groupCandles: 'ЯПОНСКИ СВЕЩИ', navBasicCandles: 'Единични модели',
        navDoubleCandles: 'Двойни модели', navTripleCandles: 'Тройни модели', navContinuation: 'Продължаващи модели',
        groupStrategies: 'МЕТОДИ И СТРАТЕГИИ', navSmt: 'SMT дивергенция', navAmd: 'AMD и Premium / Discount',
        navGold: 'Gold Swing Strategy', groupRisk: 'РИСК И ДИСЦИПЛИНА', navRisk: 'Управление на риска',
        footerMotto: 'УЧИ СЕ · НАБЛЮДАВАЙ · ЗАПИСВАЙ',
        footerNote: 'Няма гарантирани сигнали. Първо разбиране, после практика.',
        loading: 'Зареждане на учебното съдържание…', modalKicker: 'КРАТКО ОБЯСНЕНИЕ',
        footerDisclaimer: 'Образователно съдържание · Не е инвестиционен съвет',
        pageNotFound: 'Страницата не е намерена', chooseLesson: 'Избери урок от менюто.',
        loadErrorKicker: 'ВЪЗНИКНА ПРОБЛЕМ', loadErrorTitle: 'Страницата не можа да се зареди',
        loadErrorText: 'Провери дали приложението се стартира през локален сървър, а не чрез директно отваряне на HTML файла.',
        technicalNote: 'Техническа бележка', fetchError: 'Fetch API изисква HTTP сървър за зареждане на вътрешните страници.',
        brandLabel: 'Ilich Trading Academy - начало', sidebarLabel: 'Основна навигация', closeModal: 'Затвори',
        unknownExplanation: 'Обяснение не е налично.'
    },
    en: {
        learningMode: 'Learning mode', menu: 'Menu', learningPath: 'YOUR LEARNING PATH',
        learningPathText: 'From your first chart to independent market analysis.',
        groupStart: 'GET STARTED', navHome: 'Trading basics', groupStructure: 'MARKET STRUCTURE',
        navTrend: 'Trend and structure', navSupport: 'Support and resistance', navFvg: 'Fair Value Gap',
        navEma: 'EMA 50 and EMA 200', groupCandles: 'JAPANESE CANDLESTICKS', navBasicCandles: 'Single-candle patterns',
        navDoubleCandles: 'Two-candle patterns', navTripleCandles: 'Three-candle patterns', navContinuation: 'Continuation patterns',
        groupStrategies: 'METHODS AND STRATEGIES', navSmt: 'SMT divergence', navAmd: 'AMD and Premium / Discount',
        navGold: 'Gold Swing Strategy', groupRisk: 'RISK AND DISCIPLINE', navRisk: 'Risk management',
        footerMotto: 'LEARN · OBSERVE · RECORD',
        footerNote: 'There are no guaranteed signals. Understand first, practise second.',
        loading: 'Loading learning content…', modalKicker: 'QUICK EXPLANATION',
        footerDisclaimer: 'Educational content · Not investment advice',
        pageNotFound: 'Page not found', chooseLesson: 'Choose a lesson from the menu.',
        loadErrorKicker: 'SOMETHING WENT WRONG', loadErrorTitle: 'The page could not be loaded',
        loadErrorText: 'Make sure the app is running through a local web server rather than opening the HTML file directly.',
        technicalNote: 'Technical note', fetchError: 'Fetch API requires an HTTP server to load internal pages.',
        brandLabel: 'Ilich Trading Academy - home', sidebarLabel: 'Main navigation', closeModal: 'Close',
        unknownExplanation: 'No explanation is available.'
    }
};

let currentLanguage = readSavedLanguage();
let currentPageKey = 'home';
let activePageRequest = 0;

function readSavedLanguage() {
    try {
        return localStorage.getItem('ilich-trading-language') === 'en' ? 'en' : 'bg';
    } catch (_) {
        return 'bg';
    }
}

function saveLanguage(language) {
    try {
        localStorage.setItem('ilich-trading-language', language);
    } catch (_) {
        // The app still works if browser storage is unavailable.
    }
}

function applyShellLanguage() {
    const language = shellText[currentLanguage] || shellText.bg;
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (Object.prototype.hasOwnProperty.call(language, key)) {
            element.textContent = language[key];
        }
    });

    const brand = document.querySelector('.brand');
    if (brand) brand.setAttribute('aria-label', language.brandLabel);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.setAttribute('aria-label', language.sidebarLabel);
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) modalClose.setAttribute('aria-label', language.closeModal);
    const languageGroup = document.querySelector('.language-switch');
    if (languageGroup) languageGroup.setAttribute('aria-label', currentLanguage === 'bg' ? 'Избор на език' : 'Language selection');

    document.querySelectorAll('[data-language]').forEach((button) => {
        const active = button.dataset.language === currentLanguage;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    const meta = document.getElementById('meta-description');
    if (meta) {
        meta.content = currentLanguage === 'en'
            ? 'A practical trading academy covering market structure, technical analysis, trading strategies and risk management.'
            : 'Практическа академия за трейдинг: пазарна структура, технически анализ, стратегии и управление на риска.';
    }
}

async function setLanguage(language) {
    if (language !== 'bg' && language !== 'en') return;
    if (language === currentLanguage) return;

    const previousScroll = window.scrollY;
    currentLanguage = language;
    saveLanguage(language);
    applyShellLanguage();
    await navigateTo(currentPageKey, false);
    window.scrollTo({ top: previousScroll, behavior: 'auto' });
}

async function navigateTo(pageKey, scrollToTop = true) {
    const page = pages[pageKey];
    const app = document.getElementById('app');
    const language = shellText[currentLanguage] || shellText.bg;
    if (!page || !app) {
        if (app) app.innerHTML = `<section class="lesson"><h1>${language.pageNotFound}</h1><p>${language.chooseLesson}</p></section>`;
        return;
    }

    currentPageKey = pageKey;
    const requestId = ++activePageRequest;
    app.setAttribute('aria-busy', 'true');
    app.innerHTML = `<div class="loading-state"><span class="loading-spinner"></span>${language.loading}</div>`;

    try {
        const file = currentLanguage === 'en' ? page.enFile : page.file;
        const response = await fetch(file, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        if (requestId !== activePageRequest) return;
        app.innerHTML = html;
        app.removeAttribute('aria-busy');
        const pageTitle = currentLanguage === 'en' ? page.titleEn : page.titleBg;
        document.title = `${pageTitle} | Ilich Trading Academy`;
        updateActiveNavigation(pageKey);
        closeMobileMenu();
        app.focus({ preventScroll: true });
        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        }
    } catch (error) {
        if (requestId !== activePageRequest) return;
        app.removeAttribute('aria-busy');
        app.innerHTML = `
            <section class="lesson">
                <div class="lesson-hero"><span class="eyebrow">${language.loadErrorKicker}</span><h1>${language.loadErrorTitle}</h1>
                <p>${language.loadErrorText}</p></div>
                <div class="callout callout-warning"><strong>${language.technicalNote}</strong><p>${escapeHtml(error.message)}. ${language.fetchError}</p></div>
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
        bg: {
            'Pullback': 'Временно движение срещу основната посока на тренда. При възходящ тренд цената се връща надолу; при низходящ тренд се покачва. Търсим дали след това основната посока ще се възобнови.',
            'Rally': 'Временно покачване на цената. В низходящ тренд такова покачване може да бъде корекция, но само структурата и последващото потвърждение показват дали спадът ще продължи.',
            'BOS': 'Break of Structure е пробив на значим локален връх или дъно в посоката на текущото движение. В това ръководство използваме затваряне на свещта отвъд нивото като по-строго потвърждение.',
            'Retest': 'След пробив цената се връща към пробитото ниво. Наблюдаваме дали то ще задържи цената от другата страна. Ретестът може да не се случи и не гарантира продължение.'
        },
        en: {
            'Pullback': 'A temporary move against the main trend direction. In an uptrend, price moves down; in a downtrend, it moves up. We watch whether the main direction resumes afterwards.',
            'Rally': 'A temporary rise in price. During a downtrend, it may be a pullback, but only market structure and subsequent confirmation can show whether the decline may continue.',
            'BOS': 'Break of Structure is a break of a significant local high or low in the direction of the current move. In this guide, a candle close beyond the level is used as the stricter confirmation rule.',
            'Retest': 'After a breakout, price returns to the broken level. We watch whether the level holds from the other side. A retest may not happen and does not guarantee continuation.'
        }
    };
    const language = shellText[currentLanguage] || shellText.bg;
    const text = explanations[currentLanguage][term] || language.unknownExplanation;
    openModal(term, text);
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
    const languageButton = event.target.closest('[data-language]');
    if (languageButton) {
        setLanguage(languageButton.dataset.language);
        return;
    }

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
window.addEventListener('DOMContentLoaded', () => {
    applyShellLanguage();
    navigateTo('home');
});
