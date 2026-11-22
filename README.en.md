# Ilich Trading Academy

**Languages:** [Български](README.md) · [English](README.en.md)

**Ilich Trading Academy** is a bilingual educational web application in Bulgarian and English, designed as a practical guide for people who want to learn about trading — from essential market concepts to reading price charts, understanding technical analysis and building a trading plan.

The application uses examples from the **XAU/USD** gold market, while the technical analysis principles covered in the lessons can also be applied to other financial instruments.

## Live Demo

[Open the Live Demo](https://ilich-trading.netlify.app/)

## About the Project

The goal of Ilich Trading Academy is to explain complex trading concepts in clear language and connect them to practical chart situations. The content is organized to help beginners build their knowledge step by step:

1. Understand what trading is and how the result of a trade is determined.
2. Identify the direction and structure of the market.
3. Recognize important price areas and interpret price behavior around them.
4. Understand Japanese candlesticks and common chart patterns.
5. Explore different analytical methods and trading strategies.
6. Plan risk, position size and potential loss before entering a trade.

The learning materials include definitions, explanations, examples, practical scenarios and guidance on when a pattern should not be treated as a standalone trading signal.

## Languages

The application is available in **Bulgarian and English**. Use the **BG / EN** switch in the top bar to change the interface language. Your selection is saved in the browser and restored on your next visit.

## Learning Content

### 1. Introduction and Trading Basics

An introduction to trading, financial markets and the XAU/USD instrument. Covers BUY and SELL positions, position size, spread and the role of a Stop Loss.

### 2. Trends and Market Structure

Learn to identify bullish, bearish and sideways markets by reading the sequence of swing highs and lows — Higher High (HH), Higher Low (HL), Lower High (LH) and Lower Low (LL).

### 3. Support and Resistance

Learn how to identify price zones where buyers and sellers have previously shown interest. Covers breakouts, retests and role reversals between support and resistance.

### 4. Fair Value Gap (FVG)

An introduction to price imbalances, how to identify an FVG and how it may be used as additional context during analysis. An FVG does not guarantee that price will return to it or fill it.

### 5. EMA 50 and EMA 200

Understand exponential moving averages, how to read them and how they can help identify trends and observe pullbacks.

### 6. Japanese Candlesticks

- **Single-candle patterns** — Doji, Hammer, Inverted Hammer, Hanging Man, Shooting Star and others.
- **Two-candle patterns** — Engulfing, Tweezer Top/Bottom, Inside Bar, Outside Bar, Dark Cloud Cover and Piercing Line.
- **Three-candle patterns** — Morning Star, Evening Star, Three White Soldiers, Three Black Crows and others.
- **Continuation patterns** — Flags, Pennants, Rising Three Methods, Falling Three Methods and Inside Bar as a possible pause in price movement.

Candlestick patterns are explained in the context of the trend and key price zones, rather than as automatic trade signals.

### 7. Methods and Strategies

- **SMT Divergence** — compare correlated instruments and look for differences in their swing highs or lows.
- **AMD and Premium / Discount** — explore accumulation, liquidity-taking moves and subsequent distribution, as well as price positioning relative to a defined range.
- **Gold Swing Strategy** — a practical strategy for both bullish and bearish markets. It covers multi-timeframe analysis, market structure, pullbacks, Break of Structure (BOS), retests, confirmation and planning BUY or SELL scenarios.

### 8. Risk Management

Learn the fundamentals of risk control: Stop Loss, position sizing, leverage, margin and the risk/reward ratio. The focus is on calculating potential loss before entering a trade, rather than chasing profits.

## Recommended Learning Path

For beginners, the following order is recommended:

1. **Introduction and Trading Basics** — become familiar with the terminology and how a trade works.
2. **Trends and Market Structure** — learn how to identify the market's direction.
3. **Support and Resistance** — start marking important price areas.
4. **Candlesticks and Chart Patterns** — use them as additional information about price reactions.
5. **Methods and Strategies** — explore different analytical approaches and confirmation conditions.
6. **Risk Management** — plan risk before considering any trade.

You do not need to use every pattern or method at the same time. It is better to understand the core concepts first and then practise them consistently.

## Core Principles

- **Context before signal:** identify the broader market structure before looking for a specific entry.
- **Confirmation before action:** reaching a zone or printing a single candle is not enough to justify a trade.
- **Plan before entry:** the entry, Stop Loss, target and position size should be considered in advance.
- **Do not chase price:** when a move has already happened without a valid entry, wait for the next opportunity.
- **No pattern is guaranteed:** technical formations describe possible scenarios, not certain future price movements.

## Tech Stack

The project is built with core web technologies:

- **HTML5** — page structure and content.
- **CSS3** — visual design, responsive layouts and mobile navigation.
- **Vanilla JavaScript** — navigation, dynamic lesson loading, language switching and interactive elements.
- **Fetch API** — dynamically loads the learning pages.
- **WebP** — optimized images for faster loading.
- **localStorage** — saves the selected language in the browser.

The application does not require a frontend framework or a build process. Lesson pages are loaded dynamically through the Fetch API, so the project must be served through a local HTTP server rather than opening `index.html` directly using `file://`.

## Run Locally

1. Open the `client` directory in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.

## Project Structure

```text
ilich-trading/
└── client/
    ├── index.html          # Main application shell, header and navigation
    ├── app.js              # Routing, lesson loading and language selection
    ├── styles.css          # Shared design system and responsive styles
    ├── pages/              # Bulgarian lesson pages
    │   ├── home.html
    │   ├── trend.html
    │   ├── support-resistance.html
    │   ├── fvg.html
    │   ├── ema-strategy.html
    │   ├── basic-candles.html
    │   ├── double-candles.html
    │   ├── triple-candles.html
    │   ├── continuation-patterns.html
    │   ├── smt.html
    │   ├── amd-strategy.html
    │   ├── gold-swing-strategy.html
    │   ├── risk-management.html
    │   └── en/               # English versions of the lesson pages
    └── images/              # Optimized WebP illustrations
```

## Responsive Design

The interface is designed for both desktop and mobile devices. Navigation switches to a mobile menu, content rearranges based on screen width, and images and lesson sections scale to provide a comfortable reading experience on smaller screens.

## Disclaimer

Ilich Trading Academy is an educational project. Its content does not constitute investment advice, a personalized recommendation or a BUY/SELL signal. Examples are provided for learning purposes and do not guarantee future results.

Trading financial instruments — especially CFDs and leveraged products — involves a high risk of losing capital. Before trading with real money, make sure you understand the instrument's characteristics, margin requirements and potential losses.

---

Created as a practical learning project for gradually building knowledge of trading and technical analysis.
