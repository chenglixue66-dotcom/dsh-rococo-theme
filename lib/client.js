/**
 * dsh-rococo-theme — browser half. 「洛可可组件语系」
 *
 * 纯主题插件：apply() 时向 <head> 注入一份覆盖层样式。
 * 视觉语言由以下组件词汇构成：
 *  1. 模切吊牌导航（die-cut hang tags）：侧栏项 = 带绳孔小白牌，微倾斜 + 弹簧动画；
 *  2. 磨砂玻璃面板（frosted glass）：输入卡 / 工具票根 / 侧栏导轨；
 *  3. 香槟金线（champagne）：描边、选中条、分隔饰、齿孔票根；
 *  4. 花体字点缀：Pinyon/Cormorant 斜体用于占位符与小标签；
 *  5. 账簿细线对话流 + 扇贝蕾丝代码块 + 蝴蝶结输入卡。
 *
 * 样式代码为原创实现。所有标识符限定在 factory 作用域内，
 * 且任何执行错误都被捕获 —— 主题绝不允许弄崩 web boot。
 */
window.__ModuleLoader__.load({
  id: 'dsh-rococo-theme',
  factory: (require) => {
    // 防御：factory 内任何错误都不得导致「entry did not activate」
    try {
      const module = { exports: {} }
      const exports = module.exports
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })

      const CSS = `
/* ==========================================================================
   Rococo 设计令牌
   ========================================================================== */
:root {
  --tri-ivory: #FBFAF6;
  --tri-paper: #F7F3EA;
  --tri-fog: #7C93BA;
  --tri-fog-soft: #8C9DC0;
  --tri-ink: #2E3B68;
  --tri-dusty: #DCE3EE;
  --tri-champ: #C7A86A;
  --tri-champ-l: #E9D7A8;
  --tri-champ-d: #A8874A;
  --tri-spring: cubic-bezier(.22,1.3,.36,1);
  --tri-serif: "Playfair Display","Songti SC","STSong","Noto Serif CJK SC",Georgia,serif;
  --tri-corm: "Cormorant Garamond","Songti SC","STSong","Noto Serif CJK SC",serif;
  --tri-script: "Pinyon Script","Savoye LET","Snell Roundhand","Apple Chancery","Brush Script MT",cursive;
  --tri-mono: "JetBrains Mono","SF Mono","IBM Plex Mono",Menlo,monospace;
}

/* ==========================================================================
   Shell 变量覆盖 · 浅色「凡尔赛晨厅」
   ========================================================================== */
body:not([data-ds-dark-theme]) {
  --dsw-alias-bg-base: #DFE4EE;
  --dsw-alias-bg-layer-1: #F7FAFC;
  --dsw-alias-bg-module-platform: #EDF1F7;
  --dsw-alias-border-l1: rgba(91,108,147,.22);
  --dsw-alias-border-l2: rgba(91,108,147,.3);
  --dsw-alias-border-l3: rgba(91,108,147,.38);
  --dsw-alias-border-l4: rgba(91,108,147,.46);
  --dsw-alias-label-primary: #161A24;
  --dsw-alias-label-primary-bluish: #4E5E8E;
  --dsw-alias-label-primary-dimmed: #4A5A86;
  --dsw-alias-label-secondary: #5B6C93;
  --dsw-alias-label-tertiary: #7C8AB4;
  --dsw-alias-label-caption: #8C9DC0;
  --dsw-alias-label-dimmed: #9AA7C4;
  --dsw-alias-separator-primary: rgba(180,150,90,.4);
  --dsw-alias-interactive-bg-hover: rgba(255,255,255,.5);
  --dsw-alias-interactive-bg-hover-solid: #F1F4FA;
  --dsw-alias-button-elevated-fill: #F7FAFC;
  --dsw-alias-button-floating-fill: #F7FAFC;
  --dsw-alias-button-floating-hover: #EDF1F7;
  --dsw-alias-button-info-fill: rgba(220,227,238,.55);
  --dsw-alias-button-info-hover: rgba(220,227,238,.9);
  --dsw-alias-markdown-code-block: #F4F6FA;
  --dsw-alias-scrollbar-bg-l1: rgba(91,108,147,.16);
  --dsw-alias-scrollbar-bg-l2: rgba(91,108,147,.38);
  --dsw-alias-scrollbar-hover-l2: rgba(74,90,134,.55);
  --dsw-alias-turn-trigger-bg: rgba(247,250,252,.7);
  --dsw-alias-turn-trigger-bg-hover: rgba(247,250,252,.95);
  --dsw-font-family: "Noto Serif CJK SC","Noto Serif SC","Songti SC","STSong",serif;
}

/* ==========================================================================
   Shell 变量覆盖 · 深色「夜曲」
   ========================================================================== */
body[data-ds-dark-theme] {
  --dsw-alias-bg-base: #161D36;
  --dsw-alias-bg-layer-1: #1C2444;
  --dsw-alias-bg-module-platform: #20294D;
  --dsw-alias-border-l1: #354267;
  --dsw-alias-border-l2: #3F4E78;
  --dsw-alias-border-l3: #4A5A88;
  --dsw-alias-border-l4: #56679A;
  --dsw-alias-label-primary: #E4E8F2;
  --dsw-alias-label-primary-bluish: #A9BCE4;
  --dsw-alias-label-primary-dimmed: #93A2CC;
  --dsw-alias-label-secondary: #7C8CB8;
  --dsw-alias-label-tertiary: #66769F;
  --dsw-alias-label-caption: #56658C;
  --dsw-alias-label-dimmed: #4A5880;
  --dsw-alias-separator-primary: rgba(217,190,140,.24);
  --dsw-alias-interactive-bg-hover: rgba(217,190,140,.09);
  --dsw-alias-interactive-bg-hover-solid: #2A3560;
  --dsw-alias-button-elevated-fill: #262F58;
  --dsw-alias-button-floating-fill: #2A3460;
  --dsw-alias-button-floating-hover: #323D6C;
  --dsw-alias-button-info-fill: rgba(63,78,120,.5);
  --dsw-alias-button-info-hover: rgba(63,78,120,.8);
  --dsw-alias-markdown-code-block: #232D55;
  --dsw-alias-scrollbar-bg-l1: rgba(217,190,140,.16);
  --dsw-alias-scrollbar-bg-l2: rgba(217,190,140,.4);
  --dsw-alias-scrollbar-hover-l2: rgba(217,190,140,.62);
  --dsw-alias-turn-trigger-bg: rgba(63,78,120,.55);
  --dsw-alias-turn-trigger-bg-hover: rgba(63,78,120,.85);
  --dsw-font-family: "Playfair Display","Songti SC","STSong","Noto Serif CJK SC",Georgia,serif;
}

/* ==========================================================================
   全局纸面 · 象牙底 + 天光晕染
   ========================================================================== */
body {
  background: linear-gradient(168deg, #B9BDD8 0%, #DFE4EE 55%, #EFF1EC 100%) !important;
  font-family: var(--tri-serif);
  font-variant-numeric: oldstyle-nums;
}
body[data-ds-dark-theme] {
  background: linear-gradient(168deg, #10152A 0%, #1B2340 55%, #232B48 100%) !important;
}

/* 细颗粒纸感 */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483000;
  opacity: .05;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.55'/></svg>");
}
body[data-ds-dark-theme]::after { mix-blend-mode: screen; opacity: .04; }

/* 四角卷草纹（极淡） */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147482999;
  opacity: .5;
  background:
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C7A86A' stroke-opacity='.38' stroke-width='1.1' stroke-linecap='round'><path d='M8 112 C8 70 24 40 58 26 C44 42 40 58 44 74 C30 82 16 96 8 112 Z'/><path d='M14 108 C20 84 34 66 52 56'/><circle cx='50' cy='38' r='2.4' fill='%23C7A86A' fill-opacity='.45' stroke='none'/></g></svg>") no-repeat left 10px top 10px / 84px 84px,
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23C7A86A' stroke-opacity='.38' stroke-width='1.1' stroke-linecap='round'><path d='M112 8 C112 50 96 80 62 94 C76 78 80 62 76 46 C90 38 104 24 112 8 Z'/><path d='M106 12 C100 36 86 54 68 64'/><circle cx='70' cy='82' r='2.4' fill='%23C7A86A' fill-opacity='.45' stroke='none'/></g></svg>") no-repeat right 10px bottom 10px / 84px 84px;
}
body[data-ds-dark-theme]::before { opacity: .4; }

::selection { background: rgba(233,215,168,.85); color: #2E3B68; }
body[data-ds-dark-theme] ::selection { background: rgba(217,190,140,.4); color: #E4E8F2; }

/* 滚动条 · 香槟细轨 */
* { scrollbar-width: thin; scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) transparent; }
*::-webkit-scrollbar { width: 8px; height: 8px; }
*::-webkit-scrollbar-thumb { background: var(--dsw-alias-scrollbar-bg-l2); border-radius: 8px; border: 2px solid transparent; background-clip: content-box; }
*::-webkit-scrollbar-thumb:hover { background: var(--dsw-alias-scrollbar-hover-l2); background-clip: content-box; }
*::-webkit-scrollbar-track { background: transparent; }

/* 焦点环 · 香槟 */
:focus-visible { outline: 2px solid rgba(199,168,106,.65) !important; outline-offset: 2px; border-radius: 6px; }

/* ==========================================================================
   ① 模切吊牌侧栏导航
   ========================================================================== */
[data-shell-leading] {
  background:
    repeating-linear-gradient(90deg, rgba(199,168,106,.05) 0 2px, transparent 2px 10px),
    linear-gradient(180deg, rgba(251,250,246,.55), rgba(247,243,234,.35)) !important;
  border-right: 1px solid rgba(199,168,106,.28) !important;
  box-shadow: inset -1px 0 0 rgba(255,255,255,.6), 3px 0 18px -10px rgba(46,59,104,.28);
  backdrop-filter: blur(10px) saturate(1.15);
  -webkit-backdrop-filter: blur(10px) saturate(1.15);
}
body[data-ds-dark-theme] [data-shell-leading] {
  background:
    repeating-linear-gradient(90deg, rgba(217,190,140,.05) 0 2px, transparent 2px 10px),
    linear-gradient(180deg, rgba(32,41,77,.5), rgba(28,36,68,.35)) !important;
  border-right-color: rgba(217,190,140,.24) !important;
  box-shadow: inset -1px 0 0 rgba(228,232,242,.05), 3px 0 18px -10px rgba(0,0,0,.45);
}

/* 面板行 → 吊牌（晾衣绳式：左侧垂直绳轨，水平短绳穿过每枚吊牌的孔） */
[data-shell-leading] nav[aria-label] { gap: 14px !important; padding: 6px 8px; position: relative; }
/* 垂直绳轨 */
[data-shell-leading] nav[aria-label]::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 2px;
  bottom: 2px;
  width: 2px;
  pointer-events: none;
  background:
    radial-gradient(circle 1.6px at 50% 1.6px, rgba(168,135,74,.8) 1.3px, transparent 1.8px),
    radial-gradient(circle 1.6px at 50% calc(100% - 1.6px), rgba(168,135,74,.8) 1.3px, transparent 1.8px),
    linear-gradient(180deg, transparent, rgba(168,135,74,.55) 5%, rgba(168,135,74,.55) 95%, transparent);
  background-size: 100% 100%, 100% 100%, 1.2px 100%;
  background-position: center, center, center;
  background-repeat: no-repeat;
}
body[data-ds-dark-theme] [data-shell-leading] nav[aria-label]::before {
  background:
    radial-gradient(circle 1.6px at 50% 1.6px, rgba(217,190,140,.75) 1.3px, transparent 1.8px),
    radial-gradient(circle 1.6px at 50% calc(100% - 1.6px), rgba(217,190,140,.75) 1.3px, transparent 1.8px),
    linear-gradient(180deg, transparent, rgba(217,190,140,.5) 5%, rgba(217,190,140,.5) 95%, transparent);
  background-size: 100% 100%, 100% 100%, 1.2px 100%;
  background-position: center, center, center;
  background-repeat: no-repeat;
}
[data-shell-leading] nav[aria-label] > button {
  position: relative;
  background: linear-gradient(180deg, #FFFEFB, #F6F1E4) !important;
  border: 1px solid rgba(199,168,106,.4) !important;
  border-radius: 10px !important;
  padding-left: 26px !important;
  margin: 0 2px 0 18px;
  box-shadow:
    0 0 0 2px rgba(251,250,246,.95),
    0 0 0 3px rgba(199,168,106,.28),
    0 5px 12px -5px rgba(46,59,104,.3) !important;
  transform: rotate(-.5deg);
  transition: transform .4s var(--tri-spring), box-shadow .3s ease, background .3s ease;
}
[data-shell-leading] nav[aria-label] > button:nth-child(2n) { transform: rotate(.45deg); }
[data-shell-leading] nav[aria-label] > button:hover {
  transform: rotate(0deg) translateY(-1.5px) scale(1.02);
  box-shadow:
    0 0 0 2px rgba(251,250,246,.95),
    0 0 0 3px rgba(199,168,106,.5),
    0 9px 20px -7px rgba(46,59,104,.4) !important;
  background: linear-gradient(180deg, #FFFEFB, #F9F5E9) !important;
}
/* 水平短绳 + 绳孔（左端金珠压在绳轨上 → 绳身 → 右端穿过吊牌孔） */
[data-shell-leading] nav[aria-label] > button::before {
  content: "";
  position: absolute;
  left: -17px;
  top: calc(50% - 3.5px);
  width: 30px;
  height: 7px;
  pointer-events: none;
  background:
    radial-gradient(circle 1.7px at 1.7px 50%, rgba(168,135,74,.95) 1.4px, transparent 1.9px),
    radial-gradient(circle 3.5px at calc(100% - 3.5px) 50%,
      #FFFFFF 0 1.6px,
      rgba(168,135,74,.85) 1.9px 2.7px,
      rgba(168,135,74,0) 3.1px),
    linear-gradient(180deg, transparent calc(50% - .6px), rgba(168,135,74,.62) calc(50% - .6px) calc(50% + .6px), transparent calc(50% + .6px));
  background-size: 100% 100%, 100% 100%, calc(100% - 5px) 100%;
  background-position: center, center, 2.5px center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 1px 1px rgba(46,59,104,.18));
  transition: transform .4s var(--tri-spring);
}
[data-shell-leading] nav[aria-label] > button:nth-child(2n)::before { transform: translateY(1.3px); }
[data-shell-leading] nav[aria-label] > button:nth-child(2n+1)::before { transform: translateY(-1.3px); }
[data-shell-leading] nav[aria-label] > button:hover::before { transform: translateY(0); }
body[data-ds-dark-theme] [data-shell-leading] nav[aria-label] > button::before {
  background:
    radial-gradient(circle 1.7px at 1.7px 50%, rgba(217,190,140,.9) 1.4px, transparent 1.9px),
    radial-gradient(circle 3.5px at calc(100% - 3.5px) 50%,
      #3A4670 0 1.6px,
      rgba(217,190,140,.8) 1.9px 2.7px,
      rgba(217,190,140,0) 3.1px),
    linear-gradient(180deg, transparent calc(50% - .6px), rgba(217,190,140,.55) calc(50% - .6px) calc(50% + .6px), transparent calc(50% + .6px));
  background-size: 100% 100%, 100% 100%, calc(100% - 5px) 100%;
  background-position: center, center, 2.5px center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,.32));
}
/* 选中态 · 香槟竖条 + 压感 */
[data-shell-leading] nav[aria-label] > button[aria-current="page"] {
  background: linear-gradient(180deg, #FBF6E8, #F3ECD7) !important;
  box-shadow:
    0 0 0 2px rgba(251,250,246,.95),
    0 0 0 3px rgba(199,168,106,.55),
    inset 0 0 0 1px rgba(199,168,106,.3),
    0 6px 14px -6px rgba(168,135,74,.45) !important;
  transform: rotate(0deg);
}
[data-shell-leading] nav[aria-label] > button[aria-current="page"]::after {
  content: "";
  position: absolute;
  left: -7px;
  top: 50%;
  width: 3px;
  height: 20px;
  transform: translateY(-50%);
  border-radius: 2px;
  background: linear-gradient(180deg, var(--tri-champ-l), var(--tri-champ));
  box-shadow: 0 1px 3px rgba(168,135,74,.5);
}
body[data-ds-dark-theme] [data-shell-leading] nav[aria-label] > button {
  background: linear-gradient(180deg, #2B3560, #252F58) !important;
  border-color: rgba(217,190,140,.38) !important;
  box-shadow:
    0 0 0 2px rgba(28,36,68,.95),
    0 0 0 3px rgba(217,190,140,.24),
    0 5px 12px -5px rgba(0,0,0,.5) !important;
}
body[data-ds-dark-theme] [data-shell-leading] nav[aria-label] > button::before {
  background: radial-gradient(circle at 34% 32%, #3A4670, #232C50 78%);
  box-shadow: inset 0 0 0 1.6px rgba(217,190,140,.6), 0 1px 2px rgba(0,0,0,.4);
}
body[data-ds-dark-theme] [data-shell-leading] nav[aria-label] > button[aria-current="page"] {
  background: linear-gradient(180deg, #333E6E, #2B3660) !important;
}

/* ==========================================================================
   ② 扇贝纸输入卡 + 蝴蝶结（Rococo .field 工艺）
   ========================================================================== */
[data-composer-card] {
  position: relative;
  isolation: isolate;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: drop-shadow(0 12px 22px rgba(70,85,125,.22));
}
/* 四面扇贝纸身 */
[data-composer-card]::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle 8px at 7px 8px, #FBFCFE 97%, transparent) 3px 0 / 14px 16px repeat-x,
    radial-gradient(circle 8px at 7px 8px, #FBFCFE 97%, transparent) 3px 100% / 14px 16px repeat-x,
    radial-gradient(circle 8px at 8px 7px, #FBFCFE 97%, transparent) 0 3px / 16px 14px repeat-y,
    radial-gradient(circle 8px at 8px 7px, #FBFCFE 97%, transparent) 100% 3px / 16px 14px repeat-y,
    linear-gradient(#FBFCFE, #FBFCFE) 7px 7px / calc(100% - 14px) calc(100% - 14px) no-repeat;
}
body[data-ds-dark-theme] [data-composer-card]::before {
  background:
    radial-gradient(circle 8px at 7px 8px, #2C3766 97%, transparent) 3px 0 / 14px 16px repeat-x,
    radial-gradient(circle 8px at 7px 8px, #2C3766 97%, transparent) 3px 100% / 14px 16px repeat-x,
    radial-gradient(circle 8px at 8px 7px, #2C3766 97%, transparent) 0 3px / 16px 14px repeat-y,
    radial-gradient(circle 8px at 8px 7px, #2C3766 97%, transparent) 100% 3px / 16px 14px repeat-y,
    linear-gradient(#2C3766, #2C3766) 7px 7px / calc(100% - 14px) calc(100% - 14px) no-repeat;
}
/* 顶部蝴蝶结 */
[data-composer-card]::after {
  content: "";
  position: absolute;
  top: -12px;
  left: 50%;
  width: 50px;
  height: 24px;
  transform: translateX(-50%);
  pointer-events: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 24'><g fill='%23C7A86A' fill-opacity='0.9'><path d='M24 12 C20 5 11 3 4 6.5 C.8 8.5 .8 15.5 4 17.5 C11 21 20 19 24 12 Z'/><path d='M26 12 C30 5 39 3 46 6.5 C49.2 8.5 49.2 15.5 46 17.5 C39 21 30 19 26 12 Z'/><circle cx='25' cy='12' r='3.4'/><path d='M23 14 L19.5 23 L24 20.8 L26.2 23 L27 14 Z' fill-opacity='0.72'/></g></svg>") no-repeat center / contain;
  filter: drop-shadow(0 2px 2px rgba(46,59,104,.28));
  transition: transform .4s var(--tri-spring);
}
[data-composer-card]:hover::after { transform: translateX(-50%) rotate(-4deg) scale(1.06); }
body[data-ds-dark-theme] [data-composer-card] {
  filter: drop-shadow(0 14px 26px rgba(0,0,0,.4));
}

/* 占位符 · 花体（大号铜板手写） */
[data-composer-placeholder] {
  font-family: var(--tri-script) !important;
  font-size: 21px !important;
  color: #8C9DC0 !important;
  letter-spacing: .015em;
}
body[data-ds-dark-theme] [data-composer-placeholder] { color: #66769F !important; }

/* 统计数字 · 古体数字 */
[data-composer-stat] { font-variant-numeric: oldstyle-nums; letter-spacing: .03em; }

/* 火漆小牌 chips */
[data-composer-chip] {
  border: 1px solid rgba(199,168,106,.5) !important;
  border-radius: 99px !important;
  background: linear-gradient(180deg, rgba(233,215,168,.2), rgba(199,168,106,.12)) !important;
  color: #7A6234 !important;
  font-size: 11.5px;
  letter-spacing: .05em;
  transition: transform .35s var(--tri-spring), box-shadow .3s;
}
[data-composer-chip]:hover { transform: translateY(-1px); }
[data-composer-chip-selected], [data-composer-chip][data-selected] {
  background: linear-gradient(180deg, #D3B47C, #B4915A) !important;
  color: #FFFEFB !important;
  box-shadow: 0 3px 10px -3px rgba(168,135,74,.7), inset 0 1px 0 rgba(255,255,255,.35);
}
body[data-ds-dark-theme] [data-composer-chip] {
  border-color: rgba(217,190,140,.42) !important;
  color: #D9BE8C !important;
  background: linear-gradient(180deg, rgba(217,190,140,.14), rgba(217,190,140,.08)) !important;
}

/* ==========================================================================
   ③ 对话流 · Rococo 双气泡（用户雾紫 / 助手墨蓝）
   ========================================================================== */
[data-chat-flow] {
  background: radial-gradient(1000px 340px at 50% 0%, rgba(255,255,255,.14), transparent 70%);
  background-attachment: local;
}
body[data-ds-dark-theme] [data-chat-flow] {
  background: radial-gradient(1000px 340px at 50% 0%, rgba(124,147,186,.07), transparent 70%);
  background-attachment: local;
}

/* —— 用户消息：右侧雾紫气泡（大圆角尾巴） —— */
[data-chat-flow-kind="user"] {
  align-items: flex-end !important;
}
[data-chat-flow] [class*="_bubble"] {
  background: linear-gradient(180deg, #F8F3F6, #EEE7EF) !important;
  color: #3A3550 !important;
  border: .5px solid rgba(180,150,90,.45) !important;
  border-radius: 20px 20px 30px 20px !important;
  padding: 12px 18px !important;
  box-shadow: 0 6px 18px rgba(46,58,99,.14), inset 0 1px 0 rgba(255,255,255,.7);
  max-width: 78%;
}
[data-chat-flow] [class*="_bubble"] p { color: #3A3550; }
body[data-ds-dark-theme] [data-chat-flow] [class*="_bubble"] {
  background: linear-gradient(180deg, #3C466E, #333D64) !important;
  color: #E7E2F0 !important;
  border-color: rgba(217,190,140,.4) !important;
  box-shadow: 0 6px 18px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.08);
}
body[data-ds-dark-theme] [data-chat-flow] [class*="_bubble"] p { color: #E7E2F0; }

/* —— 助手回复：磨砂玻璃气泡 + 斜体尾签（按 Rococo 截图） —— */
[class*="XNZzAa_body"] {
  position: relative;
  background: linear-gradient(170deg, rgba(248,250,253,.76), rgba(235,240,248,.62));
  backdrop-filter: blur(18px) saturate(1.25);
  -webkit-backdrop-filter: blur(18px) saturate(1.25);
  border: .5px solid rgba(255,255,255,.85);
  border-radius: 24px 24px 24px 8px;
  box-shadow: 0 14px 32px -18px rgba(40,52,95,.35), inset 0 0 0 .5px rgba(180,150,90,.18);
  padding: 16px 22px 26px;
  color: #2C3242;
}
[class*="XNZzAa_body"]::after {
  content: "for you, only";
  position: absolute;
  right: 18px;
  bottom: 7px;
  font-family: var(--tri-corm);
  font-style: italic;
  font-size: 12.5px;
  letter-spacing: .04em;
  color: #93A3C4;
  pointer-events: none;
}
[class*="XNZzAa_body"] h1,
[class*="XNZzAa_body"] h2,
[class*="XNZzAa_body"] h3,
[class*="XNZzAa_body"] h4 { color: #2E3A63; }
[class*="XNZzAa_body"] strong { color: #26305A; }
[class*="XNZzAa_body"] a { color: #4E5E8E; text-decoration-color: rgba(78,94,142,.3); }
[class*="XNZzAa_body"] a:hover { color: #33406B; }
[class*="XNZzAa_body"] p code,
[class*="XNZzAa_body"] li code {
  background: rgba(91,108,147,.09);
  border: 1px solid rgba(91,108,147,.16);
  color: #4E5E8E;
  padding: 1px 6px;
  border-radius: 6px;
}
body[data-ds-dark-theme] [class*="XNZzAa_body"] {
  background: linear-gradient(170deg, rgba(48,58,100,.74), rgba(38,48,86,.64));
  border-color: rgba(217,190,140,.22);
  color: #E4E9F5;
}
body[data-ds-dark-theme] [class*="XNZzAa_body"] h1,
body[data-ds-dark-theme] [class*="XNZzAa_body"] h2,
body[data-ds-dark-theme] [class*="XNZzAa_body"] h3,
body[data-ds-dark-theme] [class*="XNZzAa_body"] h4 { color: #F3E5BD; }
body[data-ds-dark-theme] [class*="XNZzAa_body"] strong { color: #F7EFD8; }
body[data-ds-dark-theme] [class*="XNZzAa_body"] a { color: #B7C8EE; }
/* 思考过程：气泡内淡一档 */
[class*="thinkBody"],
[class*="_reasoning"] {
  color: #7C8AB4;
  font-style: italic;
}
body[data-ds-dark-theme] [class*="thinkBody"],
body[data-ds-dark-theme] [class*="_reasoning"] { color: #A9B6D4; }

/* —— 每行对话的徽章头像（Rococo .av） —— */
/* 助手：小鲸鱼头像（取挂件当前角色图 /dsh-whale/image.png）+ 香槟描边 */
[data-chat-flow-kind]:has([class*="XNZzAa_body"]) {
  position: relative;
  padding-left: 48px;
}
[data-chat-flow-kind]:has([class*="XNZzAa_body"])::before {
  /* !important：回合分隔规则（[data-chat-turn] + [data-chat-turn]::before）会命中同一个
     伪元素、把圆点画成 ◆，这里必须压过它，否则头像不显示。 */
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 2px !important;
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  display: block !important;
  background: url("/dsh-whale/image.png") center center / cover no-repeat,
              radial-gradient(circle at 35% 30%, #7C8AB4, #3C4870 72%) !important;
  box-shadow:
    0 0 0 1px rgba(180,150,90,.55),
    0 0 0 3px rgba(251,252,254,.75),
    0 4px 10px -2px rgba(40,52,95,.35);
}
/* 用户：香槟渐变圆 + ❦ */
[data-chat-flow-kind="user"] {
  position: relative;
  padding-right: 48px;
}
[data-chat-flow-kind="user"]::before {
  content: "❦";
  position: absolute;
  right: 0;
  top: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 14px;
  color: #FFFDF6;
  text-shadow: 0 1px 2px rgba(122,94,46,.55);
  background: radial-gradient(circle at 35% 30%, #F3E2B4, #C7A86A 58%, #A8874A);
  box-shadow:
    0 0 0 1px rgba(180,150,90,.6),
    0 0 0 3px rgba(251,252,254,.75),
    0 4px 10px -2px rgba(40,52,95,.3);
}
body[data-ds-dark-theme] [data-chat-flow-kind]:has([class*="XNZzAa_body"])::before,
body[data-ds-dark-theme] [data-chat-flow-kind="user"]::before {
  box-shadow:
    0 0 0 1px rgba(217,190,140,.5),
    0 0 0 3px rgba(27,35,64,.8),
    0 4px 10px -2px rgba(0,0,0,.45);
}


/* —— 气泡角贴纸（Rococo 桌面小物） —— */
[data-chat-flow-kind]:has([class*="XNZzAa_body"])::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 64px;
  height: 64px;
  pointer-events: none;
  background: center / contain no-repeat;
  filter: drop-shadow(0 4px 6px rgba(40,52,95,.22));
}
[data-chat-flow-kind]:has([class*="XNZzAa_body"]):nth-of-type(4n+1)::after {
  right: -20px; top: -22px; width: 74px; height: 74px;
  background-image: url("data:image/webp;base64,UklGRkgTAABXRUJQVlA4WAoAAAAQAAAAUAAAbQAAQUxQSOkGAAABoHbbtilJntE+50bZHmbbtm3btm3btm3bdpfR7rLNzIx7zv4QL6Li3YiImACkqFhxCCO/7wlFnVQ8SKPzrLohwAseabykToiq4iqac/HmCKpScwqggCtoxvE9UQCgNSUQtFi7H+TakrnrCvps3gVSOxIkYJUvGyZdi3Npzqb1cMU4G7UFmgWtDQWAwrd08pobS/ysq8jI/3oAgNSAYIVzHr/rGY/uxvJmbnz+jLO3ACQ5wVHTWd6y3EjSSRZf7gpJTLFNA2OMlrGsbka+2UIkLcFzLDJHi74zQlKC8JVbHjQ/F5oUgCcY83DnEem9ktshCEkpdmhkvpFPiyQVcAstH+e4TpC0rs5vRNu0BCtOpOcS+RgEiX9My8X4jkJSEgyaT8/FOb1HWgFH0pn31tCUFA8x5uQ8ByEhldbf5xZ5LzQdCeg7jpbbG4UgyQAt1phLz+1rICQi0vKab3405u2ccdX6EElCcTVTXbAXNAXFyvO9aCl4E8f3giRxJ42JRl4GzU/R9W9Px4e0geYWsHOkp+Js3CCJCxmZrPHEXDQEAIoHWUzpjqwQpAoCQEqeSOuRDAEgyyToddouEBRwJWNKd5UItj20I2QZRPr+zqbzoAVcmNbxUCjOa+Dn3UQqU3mQjVy0MlReTcl5FFSxwgI28WZoRYqVF5hFXgYNH6dkvKPkUsZo0/tBK7uYxujvBbT5kZbSIwho/rlHGs+oTPQDNxrHdke7X9N6CAX0m0ij+RsiFSh6j6PTOW81tPsltWbYsEincXRnSCWrzs9oXA/d/kxMmmFHGumctQK0kpXmZCxYHV3+SutBFLBeI53OyQMg5QS9x9NpHNkVAyan9XN7Qe//aTSO6FiJYu35GX9111fpTDjyesHy0+l0LlgPWi5gN8+Y3W9gIy2lIr8oyHqNGdwHoZK9mDF9YKuvknJvOAxYe2nWXpUdRSeN01bAEfSEjJM26NFi7YaqnEIjycbvPvqfic+dNOQnJ0v2rmxv0lnbTu5WiTR7lMZSM0/NzayEkU8UpEzApqyDzqWrSMhQxcAJ9JozDu0ESAlQ0OdYrLkin2zTpSUAwTEffD9qIb3myKXTJ4y8JAh2YX3dBXIai+Z1wj36ScAR7qyf5uei/Re0esJ/+m+2hF5HnLb3mtNodcQ4c/3wGWMdifylzaB/6XXEOXO90+j1hMYb3qKxnjp/nEivK+TCJtbdWfXGF33HSM/wmvIM98jPDnM2MTt6rbhF9xKSS3eWqxtIyyDdPD0zZ/lFTRMPBbD1lbu8ziInHnDfRNagk1wy8oajJjHy3423GwCBAPiaRf7XEQP2POcbelrO1084cKPO0OEs8s82gAJoFjZppHHe2gLgNsaknDOWBwDdPbobjw7NAKCAU2jGpu3RTDsOpSVl/Lm1Bg24iZGRL4oAEMGzjDSejgLWWcy0neN7QgXhSxqdf3SBAIK2Q2iMvB8FHEJPbckGJX1m0elcujEUUKwwnU7jB6K4gJYWyT2gim2cJI3HZm1nJI2j2whuSc92gQacTM+4CaHkBBrpnNARuCw155L1S66mkYx8CQoEXJo1riNwSnIe90YIuI8x442s80uMv7QA9qSnRePt0IBby7xZojiQTka+CkX/yW7l3NP4JqCAc+gZTyKUrL+IzsgboIp7WM6Yq3u5ST1RwK4sNV5SIug00s3d90NQrDCTlhE5eyy9apG0DOe8tRDQY6o73W07KADFXSxGm9QHKmg+Mss5easTaFUyvn/YYpZp2BxBcQOL1sSvW4sACFh7MYu8BwpFzwkZxs8H4/ocvsC2nxQz3HdDQdHhG5JTNoCiVHHyHH7cUwSKPpPLnA55M4f/ugFv0cpB0PuFcZ9sAEW2YM1tWwOAoOv/GeSB2npY1ZyzV1c8yEg6GzZHAATStzkE5QWAZISfS5yLVsPgqTnEbYELs+asBgUgABSVahCUKp5zI82/KmDzBnqV6DwK2LaRTvM/2kEAQFRQVcURjGSRhwH70KsWeTXQZYxHGh+BIleR1l+zqciPWgacQmP1HkPAFSwWbcmGeUGx6t/ksAEo4BzGHJ6GSOfvSF4PRd6C5W+5rAck4BC6V+9WqKLnE6NvbCaSGwQAFAFbNrJqxtMRIEArpClBBVB0/59WJWdxWwRAFCpJlBW8UjXzcd0hACBIWrE/ixZtGZwWrchHoKhBkbY/k2SMFTGSZOMmtQHFWj9Mf2cIK3dOfXH0lLMhUhMQtBqILhfcNoVexk7cZ2V06wdBrSpK24wv59wXEEBQu6ISdPmllZwUmokqar3l725l4kYQ1L7ifDZ5SZFfFlAPVToOoRvduGQraD2AYM3vnE7+ezAU9VHR7uCvffRpfSFIEQBWUDggOAwAALAtAJ0BKlEAbgA+TSCLRCKiIRksVRwoBMSygGU4ZBaoDz8B6Sf8lunud79GfkzdbB/J/UA6TD93vRzxwDxu/xH4ieZvhd9L5jmG/pk1Nevf9x/ePOHvB4AXtHdCQAfoP9u/5nfzaiPr19T/6PuAfy/+rf8j1A/yXgw/Vf9H+unwB/z3+yf+b1Hs5/1R7Bf8+/t//T7D3olfqw2wzmCSRiVqOaOmVzQoToNAHCo6iLkBjAJOR6u7+GD43uhNOKNAHIrMKuOW6lspXzSbJfmp3xhGvWvsCQZmIsnBClCu9DYsKwoekj6i4ojEMSQ+J4Z/+pgvlmXtaVghlFuvpwNrLS0tUaeSXtnIg9KyOAr3GXZQ3m5lPyRv/2W7ZWDgOkGpZ4SA5RjPtDg5udqp4/NuYqzzp2MFqA7yuXigSFPHV0gYZuTlzK3pi4PyLG85hLAh6qz0K3060xlGaYArCnW1sXbHkZRA4S6usZ1r3ASnXOpumqq894AAAP7/DWuv/y0YDlAyJcfUxoag3k71cjCXHsmprwLD//lVgZETYbAt6vwvdflxNLkcLjUj0MCNEQa3S0Hm+8JnIF4VbkInUUyjp2bd9zeJW8JpH6p1dP94NP4dp1bNg83WLEh5jvrBupMW8qeiFmyQskNe4SX4vi+vmu+mu2a7KUPXBh88r4pNcpebB5NWylN11bAjMT2c0YP1nANS/G5swIUbHm//OOvru7fdHAR7JIok8tfvy/vkPJG5ipJkSaqQhFcIusuuoVArHGvWxb69xC+m8hJxWz3v+C4o+Z+w/f/oYXv1bFCIdKNGJVboy5TTCoNkAekbI1Zz4ieUqOrj/Jc3KNIN7Tgx7zR9e9wmcC/hrx31V2FlVME/JwZ0Pv/yGvmbFj/+kAYw20Cq3wO9OzOf0XK8ThL7UdVzAQUaWMhw0GCLtEy2N1QMNZ2ST8n47VrGuMeZCIXbvCM8rExCN5I1uD8U4Kn8j20yr0o878c9PtoI7gWXizZUmFSAaC7dCB/ekeQsa8mLvNCLppL5WpzXVWNYG/Eylfvr+BLdkrv4yxIyBpxixCCXjFeM3/I9JQdAn9g0t571e3UJlB2Y1OGJ4cIrKz1cSnuL6bIeof/ViVdwpqd2L3CPvQKwbvngt7NP8BTsE/C/DotnYQQw3Ci/H2aGo19kK8BqxCMg2OvmgyQnxisjGNwXqCH3shyZ/AoflNPptk9qbJ1dGj31/6ElGZp4UQjp54iZFQZUt/P1syawQ9Dwkd+ZRt/J8XR/15xsnScj9mITPOpTVUkCMWyK+qQ8TQ4l+op0KWt8M612ZmLn1xRIH+dTkkxIjwKNkRU4Gb3hxTbY1Rl/KznggOT72GzDdCDW6JOmbbDDN987OCO1g0Ibt+apCk1tsXQ97NLxn4KBk3hz3+725D8wDFNFAhAO8WRqwB84g5i2g0l+c8Gr6nu6Mlapl9BoZjGxvTnRKcRcHFaQcNTSaDlO5kRhyzLHWG0xwkRNBD9Z4b0beoN9kku0he2R/UjwOtfo7p4tyKtOavsJLslRHxjdC1eTK3Hz4XW8/q0JRrn+jVjmb1W7WquJTPiHDYxoRS/EgsFueH4IcX1fiMi7bDl5AnWirlmjOjFXKrutnPb59/JALr7hbF2DAeIKhWfUj6yKDkTnSNGRe+aPi/HyLfLVWRM6s+7zxhLUY0GEaZGqafebhXaCop2EgwPTR2exMET51ks+c868YETpQhO1lkkmTZt4HMjGHSDDkvQ315kOhz+UoEse1pVgKBI8Qp54b5SJGeVNNBKxp/1Vmw2jvmHkDg79M+z48/3ttMeFdjNMhfy4/yyeLv6u5T9lehvd+hIdbofJ/Ewy/oY8Nl8qMrKs9FZk5d9ULaoDyAf/p+5ehWp2+CyWG3cS/ljVheamB1kkzAmkIYLWaqqAizHmZrydTer9YiEhJgP62GOi+LxCfyy7eU8rXlAkgb+s/efCkf8ZbjrkCppMy82EjCzB/kQqMUkgMO7mBRvgu8digskLJ7GuLLXuTKNSxQH0OWBKbF2aSEbPbxjTLViKEFELZrHgrTAceW358sZkRwRGqGyZ7cgLp7o1tG4d9uqS0DtB+dUjOrFfS/qD8bn4X1l3s3KbTuwurwRefv9CZGJTd06ZaCRSv4T62/Y9qpNIbqWFO5LazCjRh5/htKXcnML/m2ucpdu34jFYaKOj+WqspCKxktLjY3mZNNDRHbjdwqo2IGfy36GY3HYQOqYfxUXzGiIikcbscT5/5LitRWw2m94VC2RbAGUnFtqkTXm8IRAYvn41xcufc7T4DBnqUdXLmnTaO3FY1ly+VaG+ghXSsJr1vpfEDOrRoMNM+XBs72qXb/7CPuE8DOrR9uDPLfsB20L2YdMZ8k3zfGNh5CiXtcr0s+ADbPRwCo9bXLjkQvNAPQYQWZli6rG167E3glMNKsNXCrOX/1xMgmNbsV2QldsD+iXhFUmPt8yHv+Zd4HrJVRt3X8JzXw72GxSZkVEQptYwFc6KT8G19D9+KXuwAv3wwAARKbwHFCMMVVfQrlY5fTfbZ3La6g3aS+GvjG0vmZ6dw4IvxuINBcXhLsoBDEsvsQVeGBvip43hgFtHWQk7m8568sNfCb3xl7KuuxGa0EW2LUIHEGLI2BEZvvFuxzRO70dQyM0xgDF+4Lc9rXPLINgRCY1C8Whdfc7Uqvh9nC+A56VeQaYNhIXSuIoxt/YlYO0m2M5XwYLyyWBBsD44oEWrWnZPE1u2xCd8UDCvPd2oEJNeCbIBnjYw+W67CnKF/lh0uBwWLaBNlkXisteOXBocwCSljQBxwL9o+hksMFbUkt3P4Q7j4wdp1rHUmo6q8YBcdTn/SlHv10fYnLFmibNHCY6vSeoQ1Q/Wv3PwFGb4PTmJr9NlcFtf9D8gdBHUae7rNqQPpqFHzQ38xsxE/X/GPKeMlpygsCr0WU/24RnLpn36x1NHZehRtWgJQeR3xYBc1K8LEJdODdfHb1gw0lyPe/yjaaFY4Rf+9/7CiBZXYM0+gEeW/YlAahqrutt5nvvBjQ9mSW1IjyfrLLbwjs45OTmIu0ODsq/J3Tq/ZGE6RA7KHY0TwAIEPVDYgM3w1W23EiFefXBXgYSkuN5fCnhNgPwhQr5Akaf3CXpQJ5w3mjtH3CsG8DoJq5ocu4WDvQmV57DFERD4w588Vp9WaXBAsWdgl4fyj4dOZqjGLGNIVxtJbWrMS+yNibNkJlTBECQIedpFlD5a8lonqkmtuyMs0+3AVGklEKsLmelMyhwQPIytcZwEY6F9aiMondqsF1AieXmUu3a9VYuFQImqzxWA3KBvAunTmPRLmO4PnhUpw3O/dBSCEEJdK+COw3tMj1klLi2isbUiFcygLZHatF7EPOLSA3owy2NEtgoB331nZStG8EFrx8ta1vsHbdRrZmV7hLisvl4UC5+c4V5ENxkpDk8s6/c+bgDaWuOaVvVekonnn5otWr05ONt0HZQxhM2Gn1XGHRj/fjurT12RX/7qlRkaoc93C3vEnZdlHeovW3vsNAq4anHqMvgAhbYhXn0KVYUFKL2FjqNdPYk9uH55a46iLftBnzpZwUZS641MVKBfG5c07B5O8kCF/soAup+aAuyL8o0o64Ipc9Q3zrmTJLRAcg+hlgViqvkaXd5eSAfaVhOy5V5d1uBC9AiMUt8cRzctOPOB80CVk5HvyZgis1I8YwSoBnUDqRo4IIV89z71d9CRIfR1Pue1eOFsl7JYn+SbIioAY73QtTcaertLR2I744Q0Tb5GplhprRLOAw8wMb9HFYqXaHETgIHb5HolMPCJIrgR6D8Xv98I6lbuPMteDhn4kf/PU6aAv/4VD1117PAAEEi8qg2/Of8coQ/AmgHInj9TrUyraMX6cvcsdo4vPQr/L6hkCA4TZk69xrCpRq05VQKsVfUJ0HlayDBERrnoi1FzFG7mp954eMhd4ukXdXhvewJven4tuyXvlXBlEkvlP2SW/5jfjxZDFbFKLjL+irWK3XJfxfp3pgs9RxEXHbTga0mB0ODTIgtU3/Oicg2fmI8QhxZ2NnMnbc44uv/TTxOTK083hsA5FDQ5FW6Zr/T5NUC1xkSWte4pcIpkSDoyFLNMkFWc1IWJGUH/7GLUAbEYkLmaxTrZi05efYyIpsB3CJnFP//V24AAAAAA");
}
[data-chat-flow-kind]:has([class*="XNZzAa_body"]):nth-of-type(4n+2)::after {
  left: -26px; top: -18px;
  background-image: url("data:image/webp;base64,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");
}
[data-chat-flow-kind]:has([class*="XNZzAa_body"]):nth-of-type(4n+3)::after {
  right: -26px; top: -14px; width: 86px; height: 86px;
  background-image: url("data:image/webp;base64,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");
}
[data-chat-flow-kind]:has([class*="XNZzAa_body"]):nth-of-type(4n+4)::after {
  right: -18px; bottom: -16px; width: 54px; height: 54px;
  background-image: url("data:image/webp;base64,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");
}
@media (max-width: 1100px) {
  [data-chat-flow-kind]:has([class*="XNZzAa_body"])::after { display: none; }
}
/* 输入区小物 · 钢笔与怀表 */
[data-composer-seat] { position: relative; }
[data-composer-seat]::before {
  content: ""; position: absolute; right: -70px; top: -26px; z-index: 3;
  width: 96px; height: 42px; transform: rotate(-16deg);
  pointer-events: none; filter: drop-shadow(0 3px 4px rgba(40,52,95,.25));
  background: url("data:image/webp;base64,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") center / contain no-repeat;
}
[data-composer-seat]::after {
  content: ""; position: absolute; right: -148px; top: -22px; z-index: 3;
  width: 66px; height: 66px;
  pointer-events: none; filter: drop-shadow(0 4px 6px rgba(40,52,95,.25));
  background: url("data:image/webp;base64,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") center / contain no-repeat;
}
@media (max-width: 1240px) {
  [data-composer-seat]::before, [data-composer-seat]::after { display: none; }
}

/* 回合分隔 · Rococo dsep（双向香槟渐隐线 + 中心菱花） */
[data-chat-turn] + [data-chat-turn]::before,
[data-chat-group-part] + [data-chat-group-part]::before {
  content: "◆";
  display: flex;
  align-items: center;
  gap: 14px;
  height: 26px;
  font-size: 8px;
  color: rgba(180,150,90,.85);
  justify-content: center;
  background:
    linear-gradient(90deg, transparent, rgba(180,150,90,.55)) left center / calc(50% - 22px) .8px no-repeat,
    linear-gradient(90deg, rgba(180,150,90,.55), transparent) right center / calc(50% - 22px) .8px no-repeat;
}
body[data-ds-dark-theme] [data-chat-turn] + [data-chat-turn]::before,
body[data-ds-dark-theme] [data-chat-group-part] + [data-chat-group-part]::before {
  color: rgba(217,190,140,.8);
  background:
    linear-gradient(90deg, transparent, rgba(217,190,140,.45)) left center / calc(50% - 22px) .8px no-repeat,
    linear-gradient(90deg, rgba(217,190,140,.45), transparent) right center / calc(50% - 22px) .8px no-repeat;
}

/* ==========================================================================
   ④ 工具行 · 磨砂小长条（按 Rococo 截图）
   ========================================================================== */
[data-turn-process], [data-step-process] {
  position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,.64), rgba(244,246,250,.54)) !important;
  border: .5px solid rgba(255,255,255,.8) !important;
  border-radius: 12px !important;
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  box-shadow: 0 6px 16px -10px rgba(40,52,95,.3), inset 0 0 0 .5px rgba(180,150,90,.16);
  transition: transform .3s var(--tri-spring), box-shadow .3s;
}
[data-turn-process]:hover, [data-step-process]:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -10px rgba(40,52,95,.38), inset 0 0 0 .5px rgba(180,150,90,.25);
}
body[data-ds-dark-theme] [data-turn-process],
body[data-ds-dark-theme] [data-step-process] {
  background: linear-gradient(180deg, rgba(48,58,100,.6), rgba(40,50,88,.52)) !important;
  border-color: rgba(217,190,140,.22) !important;
}

/* ==========================================================================
   ⑤ 尾注 / 代码 / 终端票根
   ========================================================================== */
/* 尾注 · Cormorant 斜体 + 菱花前缀 */
[data-turn-tail], [data-turn-usage-details] {
  font-family: var(--tri-corm);
  font-style: italic;
  font-size: 14px;
  letter-spacing: .08em;
  color: #96733F !important;
}
[data-turn-tail]::before {
  content: "◆";
  display: inline-block;
  font-size: 7px;
  margin-right: 7px;
  vertical-align: 2.5px;
  color: rgba(168,135,74,.9);
  letter-spacing: 0;
}
body[data-ds-dark-theme] [data-turn-tail],
body[data-ds-dark-theme] [data-turn-usage-details] { color: #C9B083 !important; }
body[data-ds-dark-theme] [data-turn-tail]::before { color: rgba(217,190,140,.85); }

/* 代码块横幅 · 鎏金牌 */
[data-code-block-banner] {
  background: linear-gradient(180deg, rgba(233,215,168,.4), rgba(220,204,168,.32)) !important;
  border-bottom: 1px solid rgba(199,168,106,.45) !important;
  color: #7A6234 !important;
  font-variant: small-caps;
  letter-spacing: .08em;
}
body[data-ds-dark-theme] [data-code-block-banner] {
  background: linear-gradient(180deg, rgba(63,78,120,.55), rgba(54,67,104,.45)) !important;
  border-bottom-color: rgba(217,190,140,.32) !important;
  color: #D9BE8C !important;
}

/* 代码字体 */
pre, code, [data-terminal], kbd, samp { font-family: var(--tri-mono) !important; }

/* 深色模式下的气泡代码块 */
body[data-ds-dark-theme] [class*="XNZzAa_body"] pre,
body[data-ds-dark-theme] [class*="XNZzAa_body"] [data-code-block-content] {
  background: #1B2342 !important;
  border-color: rgba(255,255,255,.12) !important;
  color: #D8E0F2;
}
body[data-ds-dark-theme] [class*="XNZzAa_body"] [data-code-block-banner] {
  background: rgba(217,192,138,.16) !important;
  border-bottom-color: rgba(217,192,138,.3) !important;
  color: #D9C08A !important;
}

/* 终端页签 · 票根 */
[data-dockkit-tab] {
  border-radius: 9px 9px 0 0 !important;
  border: 1px solid rgba(199,168,106,.32) !important;
  border-bottom: none !important;
  font-variant-numeric: oldstyle-nums;
}
[data-dockkit-tab][data-active], [data-dockkit-tab][data-selected] {
  background: linear-gradient(180deg, rgba(251,250,246,.9), rgba(244,240,228,.8)) !important;
  border-color: rgba(199,168,106,.5) !important;
}
body[data-ds-dark-theme] [data-dockkit-tab][data-active],
body[data-ds-dark-theme] [data-dockkit-tab][data-selected] {
  background: linear-gradient(180deg, rgba(48,59,104,.9), rgba(40,50,90,.8)) !important;
  border-color: rgba(217,190,140,.4) !important;
}

/* ==========================================================================
   ⑥ 底部栏 / 右栏卷宗
   ========================================================================== */
[data-shell-bottom] {
  border-top: 1px solid rgba(199,168,106,.34) !important;
  background: linear-gradient(180deg, rgba(251,250,246,.7), rgba(244,241,232,.8)) !important;
  backdrop-filter: blur(16px) saturate(1.15);
  -webkit-backdrop-filter: blur(16px) saturate(1.15);
}
body[data-ds-dark-theme] [data-shell-bottom] {
  border-top-color: rgba(217,190,140,.28) !important;
  background: linear-gradient(180deg, rgba(32,41,77,.7), rgba(28,36,68,.85)) !important;
}

/* 右栏 · Rococo 卷宗（白边框 + 虚线内框 + ✦ 标签） */
[data-rightbar-col] {
  position: relative;
  background: linear-gradient(180deg, #EDF2F9, #E6ECF5) !important;
  border: 3px solid #FFFFFF !important;
  outline: 1.2px dashed rgba(91,108,147,.55);
  outline-offset: -11px;
  border-radius: 10px;
  box-shadow: 0 1px 0 #fff, 0 12px 26px -10px rgba(40,52,95,.38);
}
[data-rightbar-col]::before {
  content: "✦";
  position: absolute;
  left: 50%;
  top: -11px;
  transform: translateX(-50%);
  font-size: 13px;
  color: #5B6C93;
  background: #EEF1F7;
  padding: 0 8px;
  line-height: 16px;
  border-radius: 8px;
  z-index: 2;
}
body[data-ds-dark-theme] [data-rightbar-col] {
  background: linear-gradient(180deg, #26305A, #20294D) !important;
  border-color: #39466E !important;
  outline-color: rgba(217,190,140,.45);
  box-shadow: 0 12px 26px -10px rgba(0,0,0,.5);
}
body[data-ds-dark-theme] [data-rightbar-col]::before {
  background: #26305A;
  color: #D9C08A;
}

/* ==========================================================================
   ⑦ 对话内容排版 stationery
   ========================================================================== */
/* 引用块 · 羊皮信笺 + 香槟蜡封 */
blockquote {
  position: relative;
  background:
    radial-gradient(300px 90px at 90% 0%, rgba(233,215,168,.16), transparent 70%),
    linear-gradient(180deg, rgba(251,250,246,.94), rgba(246,241,228,.88));
  border: 1px solid rgba(199,168,106,.5) !important;
  border-left: 4px double var(--tri-champ) !important;
  border-radius: 4px 18px 18px 4px;
  padding: 20px 26px 22px 28px;
  box-shadow: 0 4px 18px -8px rgba(46,59,104,.32), inset 0 0 0 1px rgba(255,255,255,.5);
  font-family: var(--tri-corm);
  font-style: italic;
  font-size: 16.5px;
  line-height: 1.65;
  color: #3F4E78;
}
blockquote::before {
  content: "❝";
  position: absolute;
  top: -14px;
  left: 12px;
  font-size: 32px;
  color: var(--tri-champ);
  text-shadow: 0 1px 0 rgba(255,255,255,.85);
}
/* 蜡封 */
blockquote::after {
  content: "";
  position: absolute;
  right: 12px;
  bottom: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: rotate(-8deg);
  background:
    radial-gradient(circle at 34% 30%, rgba(255,248,226,.85), transparent 44%),
    radial-gradient(circle at 50% 52%, rgba(150,115,63,.55) 0 44%, transparent 58%),
    radial-gradient(circle at 50% 50%, #D9BC84 0 58%, #B4915A 76%, #96733F 100%);
  box-shadow:
    0 3px 7px -2px rgba(120,90,40,.5),
    inset 0 2px 3px rgba(255,255,255,.4),
    inset 0 -3px 5px rgba(90,60,20,.35);
}
body[data-ds-dark-theme] blockquote {
  background:
    radial-gradient(300px 90px at 90% 0%, rgba(217,190,140,.1), transparent 70%),
    linear-gradient(180deg, rgba(46,56,102,.72), rgba(40,50,92,.62));
  border-color: rgba(217,190,140,.38) !important;
  border-left-color: #D9BE8C !important;
  color: #C6CFE8;
}
body[data-ds-dark-theme] blockquote::after {
  background:
    radial-gradient(circle at 34% 30%, rgba(255,244,214,.5), transparent 44%),
    radial-gradient(circle at 50% 52%, rgba(90,64,26,.55) 0 44%, transparent 58%),
    radial-gradient(circle at 50% 50%, #C9A96F 0 58%, #A8874A 76%, #7A6234 100%);
}

/* 行内代码 · 瓷青小牌 */
p code, li code, td code, h1 code, h2 code, h3 code, h4 code {
  background: rgba(124,147,186,.14);
  border: 1px solid rgba(124,147,186,.26);
  border-radius: 6px;
  padding: 0.1em 0.4em;
  font-size: .92em;
  color: #3A4670;
}
body[data-ds-dark-theme] p code, body[data-ds-dark-theme] li code,
body[data-ds-dark-theme] td code, body[data-ds-dark-theme] h1 code,
body[data-ds-dark-theme] h2 code, body[data-ds-dark-theme] h3 code,
body[data-ds-dark-theme] h4 code {
  background: rgba(124,147,186,.16);
  border-color: rgba(124,147,186,.3);
  color: #E4E8F2;
}

/* 图片 · 模切贴纸相框 + 邮票齿孔内框（die-cut 白边 + 微倾斜） */
img {
  border-radius: 6px;
  outline: 1.5px dashed rgba(168,135,74,.6);
  outline-offset: -9px;
  box-shadow:
    0 0 0 1px rgba(199,168,106,.55),
    0 0 0 6px rgba(251,250,246,.95),
    0 0 0 7px rgba(199,168,106,.32),
    0 14px 30px -12px rgba(46,59,104,.45);
  margin: 7px 4px;
  transform: rotate(-.5deg);
}
body[data-ds-dark-theme] img {
  outline-color: rgba(217,190,140,.5);
  box-shadow:
    0 0 0 1px rgba(217,190,140,.5),
    0 0 0 6px rgba(22,29,54,.95),
    0 0 0 7px rgba(217,190,140,.26),
    0 14px 30px -12px rgba(0,0,0,.6);
}

/* 表格 · 沙龙台账 */
table { border-collapse: collapse; border: 1px solid var(--dsw-alias-border-l1); }
th {
  background: linear-gradient(180deg, rgba(220,227,238,.5), rgba(220,227,238,.28));
  color: #2E3B68;
  font-weight: 600;
  border-bottom: 2px solid var(--tri-champ);
  font-variant: small-caps;
  letter-spacing: .05em;
}
td { border-bottom: 1px solid var(--dsw-alias-border-l1); }
tr:nth-child(even) td { background: rgba(124,147,186,.05); }
body[data-ds-dark-theme] th { background: linear-gradient(180deg, rgba(48,59,104,.6), rgba(40,50,90,.4)); color: #E4E8F2; }

/* 分隔线 · 鎏金鸢尾饰 */
hr {
  position: relative;
  border: none;
  height: 24px;
  margin: 22px 0;
  background:
    radial-gradient(circle at 50% 50%, var(--tri-champ) 0 2.6px, transparent 3.2px),
    linear-gradient(90deg, transparent, rgba(199,168,106,.6) 18%, rgba(199,168,106,.6) 42%, transparent 50%, rgba(199,168,106,.6) 58%, rgba(199,168,106,.6) 82%, transparent);
  background-size: 100% 100%, 100% 1px;
  background-position: center, center;
  background-repeat: no-repeat;
}
hr::before, hr::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 7px; height: 7px;
  border: 1px solid rgba(199,168,106,.75);
  transform: translateY(-50%) rotate(45deg);
}
hr::before { left: calc(50% - 16px); }
hr::after { right: calc(50% - 16px); }
body[data-ds-dark-theme] hr {
  background:
    radial-gradient(circle at 50% 50%, #D9BE8C 0 2.6px, transparent 3.2px),
    linear-gradient(90deg, transparent, rgba(217,190,140,.5) 18%, rgba(217,190,140,.5) 42%, transparent 50%, rgba(217,190,140,.5) 58%, rgba(217,190,140,.5) 82%, transparent);
  background-size: 100% 100%, 100% 1px;
  background-position: center, center;
  background-repeat: no-repeat;
}

/* 列表标记 · 孔雀羽点 */
ul li::marker { color: var(--tri-champ-d); }
ol li::marker { color: var(--tri-champ-d); font-weight: 600; }
body[data-ds-dark-theme] ul li::marker,
body[data-ds-dark-theme] ol li::marker { color: #D9BE8C; }

/* 链接 · 孔雀蓝 */
a { color: #3E5C9A; text-decoration-color: rgba(62,92,154,.4); }
a:hover { color: #2E4680; }
body[data-ds-dark-theme] a { color: #A9BCE4; }

/* 标题 · 衬线层级 */
h1, h2, h3, h4 { letter-spacing: .015em; font-variant-numeric: oldstyle-nums; }
h1 { font-weight: 600; }

/* 输入控件 · 香槟光标 */
textarea, input:not([type="checkbox"]):not([type="radio"]), [contenteditable="true"] {
  caret-color: var(--tri-champ-d);
}
body[data-ds-dark-theme] textarea,
body[data-ds-dark-theme] input:not([type="checkbox"]):not([type="radio"]),
body[data-ds-dark-theme] [contenteditable="true"] { caret-color: #D9BE8C; }

/* 会话头部 · 细香槟底线 */
[data-conversation-header-leading], [data-conversation-header-corner] {
  border-bottom: 1px solid rgba(199,168,106,.2);
}
body[data-ds-dark-theme] [data-conversation-header-leading],
body[data-ds-dark-theme] [data-conversation-header-corner] {
  border-bottom-color: rgba(217,190,140,.18);
}

/* ==========================================================================
   ⑧ 主页 · 桌面拼贴与洛可可信笺台
   ========================================================================== */
[data-conversation-region="chat"]:has([class*="composerHero"]) { position: relative; }
/* 左 · 拱门版画明信片 */
[data-conversation-region="chat"]:has([class*="composerHero"])::before {
  content: ""; position: absolute; z-index: 0; pointer-events: none;
  left: calc(50% - 440px); top: 8%;
  width: 172px; height: 242px; transform: rotate(-7deg);
  background:
    url("data:image/webp;base64,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") center 12px / calc(100% - 20px) calc(100% - 44px) no-repeat,
    linear-gradient(180deg, #FCFBF6, #F3F0E7);
  border: 1px solid rgba(180,150,90,.3);
  box-shadow: 0 16px 32px -12px rgba(40,52,95,.38);
}
/* 右 · 园林版画明信片 */
[data-conversation-region="chat"]:has([class*="composerHero"])::after {
  content: ""; position: absolute; z-index: 0; pointer-events: none;
  left: calc(50% + 130px); top: 12%;
  width: 272px; height: 200px; transform: rotate(4deg); opacity: 1;
  background:
    url("data:image/webp;base64,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") center 12px / calc(100% - 20px) calc(100% - 40px) no-repeat,
    linear-gradient(180deg, #FCFBF6, #F1EEE4);
  border: 1px solid rgba(180,150,90,.3);
  box-shadow: 0 16px 32px -12px rgba(40,52,95,.38);
}
[data-conversation-region="chat"]:has([class*="composerHero"]) > * { position: relative; z-index: 1; }
@media (max-width: 1180px) {
  [data-conversation-region="chat"]:has([class*="composerHero"])::before,
  [data-conversation-region="chat"]:has([class*="composerHero"])::after { display: none; }
}
/* 鱼徽收起，标题换纹章 + 铜板花体 */
[data-conversation-region="chat"]:has([class*="composerHero"]) [class*="fish"] { display: none !important; }
[data-conversation-region="chat"]:has([class*="composerHero"]) [class*="headline"] {
  font-family: var(--tri-script) !important;
  font-size: 58px !important;
  font-weight: 400 !important;
  letter-spacing: .01em !important;
  font-variant: normal !important;
  background: none !important;
  color: #33406B !important;
  text-shadow: 0 1px 0 rgba(255,255,255,.6) !important;
}
[data-conversation-region="chat"]:has([class*="composerHero"]) [class*="headline"]::before {
  content: ""; display: block; margin: 0 auto 2px;
  width: 104px; height: 76px;
  background: url("data:image/webp;base64,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") center / contain no-repeat;
  opacity: .92;
}
body[data-ds-dark-theme] [data-conversation-region="chat"]:has([class*="composerHero"]) [class*="headline"] {
  color: #E7DCC2 !important; text-shadow: none !important;
}
/* 中央信笺卡 · 象牙纸 + 左右票根缺口 */
[class*="composerHero"] { position: relative; }
[class*="composerHero"] [data-composer-card] {
  outline: none;
  filter: drop-shadow(0 18px 32px rgba(40,52,95,.3));
}
/* 缺口只裁纸身，蝴蝶结/装饰不受影响 */
[class*="composerHero"] [data-composer-card]::before {
  background: linear-gradient(180deg, #FDFBF4, #F6F2E6);
  border: 1px solid rgba(180,150,90,.42);
  border-radius: 3px;
  -webkit-mask-image:
    radial-gradient(circle 7px at 0 58%, transparent 6.5px, #000 7.2px),
    radial-gradient(circle 7px at 100% 58%, transparent 6.5px, #000 7.2px);
  mask-image:
    radial-gradient(circle 7px at 0 58%, transparent 6.5px, #000 7.2px),
    radial-gradient(circle 7px at 100% 58%, transparent 6.5px, #000 7.2px);
}
body[data-ds-dark-theme] [class*="composerHero"] [data-composer-card]::before {
  background: linear-gradient(180deg, #2C3766, #252F58);
  border-color: rgba(217,190,140,.35);
}
/* 邮戳（圆形文字 + 星） */
[class*="composerHero"]::before {
  content: ""; position: absolute; right: -40px; top: -54px; z-index: 3;
  width: 100px; height: 100px; transform: rotate(13deg);
  opacity: .82; pointer-events: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><defs><path id='c' d='M60 16 a44 44 0 1 1 -0.01 0'/></defs><circle cx='60' cy='60' r='55' fill='none' stroke='%235B6C93' stroke-width='2.2'/><circle cx='60' cy='60' r='36' fill='none' stroke='%235B6C93' stroke-width='1'/><text font-size='10.5' letter-spacing='3.4' fill='%235B6C93' font-family='serif'><textPath href='#c'>DEEPSEEK &#183; PARIS &#183; NOV 2026 &#183;</textPath></text><text x='60' y='70' text-anchor='middle' font-size='24' fill='%235B6C93'>&#10022;</text></svg>") center / contain no-repeat;
}
/* 回形针 */
[class*="composerHero"]::after {
  content: ""; position: absolute; right: -14px; top: -32px; z-index: 3;
  width: 26px; height: 62px; transform: rotate(26deg);
  pointer-events: none; filter: drop-shadow(0 3px 4px rgba(40,52,95,.25));
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 70'><path d='M15 8 v44 a7 7 0 0 1 -14 0 V16 a11 11 0 0 1 22 0 v36' fill='none' stroke='%2394A2B8' stroke-width='3.4' stroke-linecap='round'/></svg>") center / contain no-repeat;
}
/* 建议 chips · 三色票根（雾蓝 / 奶油 / 雾粉） */
[data-conversation-region="chat"]:has([class*="composerHero"]) [data-composer-chip] {
  border: 1px solid rgba(91,108,147,.32) !important;
  border-radius: 12px !important;
  background: linear-gradient(180deg, #E9EEF8, #DBE3F1) !important;
  color: #4A5A86 !important;
  font-family: var(--tri-corm) !important;
  font-style: italic; font-size: 15px;
  box-shadow: 0 0 0 3px #FBFCFE, 0 5px 12px -5px rgba(40,52,95,.3);
  -webkit-mask-image:
    radial-gradient(circle 4.5px at 0 50%, transparent 4px, #000 4.6px),
    radial-gradient(circle 4.5px at 100% 50%, transparent 4px, #000 4.6px);
  mask-image:
    radial-gradient(circle 4.5px at 0 50%, transparent 4px, #000 4.6px),
    radial-gradient(circle 4.5px at 100% 50%, transparent 4px, #000 4.6px);
}
[data-conversation-region="chat"]:has([class*="composerHero"]) [data-composer-chip]:nth-of-type(2) {
  background: linear-gradient(180deg, #FBF7EC, #F0E9D7) !important;
  border-color: rgba(180,150,90,.4) !important; color: #7A6234 !important;
}
[data-conversation-region="chat"]:has([class*="composerHero"]) [data-composer-chip]:nth-of-type(3) {
  background: linear-gradient(180deg, #F9EFF1, #EFE0E6) !important;
  border-color: rgba(170,130,140,.35) !important; color: #8A5F6E !important;
}
/* 工作区行 · 小字铭牌 */
[class*="workspaceLabel"], [class*="heroWorkspaceRow"] [class*="folder"] {
  font-variant: small-caps; letter-spacing: .18em;
}
/* 主题面板（侧栏「洛可可」入口） */
.rcp-root{box-sizing:border-box;height:100%;min-height:0;overflow:auto;background:var(--tri-ivory,#FBFAF6);color:var(--tri-ink,#2E3B68)}
.rcp-wrap{max-width:860px;margin:0 auto;padding:30px clamp(20px,4vw,46px) 56px;font-family:var(--tri-serif)}
.rcp-h1{margin:0;font-size:21px;font-weight:600;letter-spacing:.02em}
.rcp-sub{margin:6px 0 0;font-size:13px;color:var(--tri-fog,#7C93BA);font-family:var(--tri-corm,serif);font-style:italic}
.rcp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin:22px 0 0}
.rcp-card{border:1px solid rgba(199,168,106,.42);border-radius:12px;background:rgba(255,255,255,.72);padding:11px 13px}
.rcp-k{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--tri-champ-d,#A8874A)}
.rcp-v{margin-top:5px;font-size:14px;color:var(--tri-ink,#2E3B68)}
.rcp-sec{margin-top:26px}
.rcp-sec h2{margin:0 0 12px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--tri-champ-d,#A8874A);font-weight:600}
.rcp-avs{display:flex;gap:28px;align-items:flex-start}
.rcp-av{display:flex;flex-direction:column;align-items:center;gap:8px;font-size:12px;color:var(--tri-fog,#7C93BA);font-family:var(--tri-corm,serif)}
.rcp-av i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;font-style:normal;font-size:14px;color:#FFFDF6;box-shadow:0 0 0 1px rgba(180,150,90,.55),0 0 0 3px rgba(251,252,254,.75),0 4px 10px -2px rgba(40,52,95,.35)}
.rcp-av i.is-assistant{background:url("/dsh-whale/image.png") center/cover no-repeat,radial-gradient(circle at 35% 30%,#7C8AB4,#3C4870 72%)}
.rcp-av i.is-user{background:radial-gradient(circle at 35% 30%,#F3E2B4,#C7A86A 58%,#A8874A)}
.rcp-av i.is-user::after{content:"❦"}
.rcp-list{margin:0;padding-left:18px;font-size:13px;line-height:1.95;color:#3C4870;font-family:var(--tri-corm,serif)}
.rcp-btn{margin-top:2px;border:1px solid rgba(199,168,106,.65);border-radius:999px;background:rgba(255,255,255,.8);color:#2E3B68;font:inherit;font-size:13px;padding:7px 16px;cursor:pointer}
.rcp-btn:hover{background:#FBFAF6;border-color:#C7A86A}
.rcp-note{margin-top:28px;border-left:2px solid rgba(199,168,106,.6);padding:10px 14px;background:rgba(255,255,255,.6);font-size:12px;line-height:1.8;color:var(--tri-fog,#7C93BA);font-family:var(--tri-corm,serif)}
`

      function installCss() {
        try {
          if (typeof document === 'undefined') return
          const tagId = 'dsh-rococo-theme/theme.css'
          if (document.querySelector(`style[data-plugin-css="${tagId}"]

`) !== null) return
          const tag = document.createElement('style')
          tag.dataset.plugin = 'dsh-rococo-theme'
          tag.dataset.pluginCss = tagId
          tag.textContent = CSS
          document.head.appendChild(tag)
        } catch (error) {
          // 主题绝不能弄崩宿主页面
          console.warn('[dsh-rococo-theme] installCss failed:', error)
        }
      }


      // ── 侧栏面板：「洛可可」入口 ─────────────────────────────────────
      // 主题本身没有界面，装完就只剩样式，用户在侧栏里根本找不到它。
      // 这里补一条 sidebar.panellist 行 + 一个 main 面板页，让主题有落脚点。
      const React = require('react')
      const PANEL_ID = 'rococo-panel'
      const THEME_VERSION = 'v0.8.1'

      function RococoIcon(props) {
        const size = (props && Number(props.size)) || 16
        return React.createElement('svg', {
          width: size,
          height: size,
          viewBox: '0 0 16 16',
          fill: 'none',
          'aria-hidden': 'true',
          focusable: 'false',
        }, React.createElement('path', {
          d: 'M8 1.2l1.4 4.6 4.6 2.2-4.6 2.2L8 14.8l-1.4-4.6L2 8l4.6-2.2z',
          fill: 'currentColor',
        }))
      }

      function RococoCard(props) {
        return React.createElement('div', { className: 'rcp-card' },
          React.createElement('div', { className: 'rcp-k' }, props.label),
          React.createElement('div', { className: 'rcp-v' }, props.value))
      }

      const ELEMENTS = [
        '模切吊牌导航：侧栏项＝带绳孔的倾斜小白牌',
        '磨砂玻璃面板：输入卡、工具票根、侧栏导轨',
        '香槟金线：描边、选中条、齿孔票根',
        '花体字点缀：Pinyon / Cormorant 斜体标签',
        '账簿细线对话流：扇贝蕾丝代码块、蝴蝶结输入卡',
      ]

      const AVATARS = [
        { cls: 'is-assistant', name: '助手', tip: '鲸鱼挂件当前角色图' },
        { cls: 'is-user', name: '用户', tip: '香槟金 · ❦' },
      ]

      function RococoPage() {
        const [bytes, setBytes] = React.useState(-1)

        const measure = React.useCallback(() => {
          try {
            const tag = document.querySelector('style[data-plugin-css="dsh-rococo-theme/theme.css"]')
            setBytes(tag ? tag.textContent.length : 0)
          } catch (error) {
            setBytes(0)
          }
        }, [])

        React.useEffect(() => { measure() }, [measure])

        const repaint = React.useCallback(() => {
          try {
            const tag = document.querySelector('style[data-plugin-css="dsh-rococo-theme/theme.css"]')
            if (tag) tag.remove()
            installCss()
          } catch (error) {}
          measure()
        }, [measure])

        const status = bytes < 0 ? '检测中…' : (bytes > 0 ? '已注入 · ' + bytes.toLocaleString() + ' 字符' : '未注入')

        return React.createElement('div', { className: 'rcp-root' },
          React.createElement('div', { className: 'rcp-wrap' },
            React.createElement('h1', { className: 'rcp-h1' }, '洛可可主题 · Rococo'),
            React.createElement('p', { className: 'rcp-sub' }, '凡尔赛沙龙风格的界面覆盖层：雾蓝、银蓝、奶白与香槟金。'),
            React.createElement('div', { className: 'rcp-cards' },
              React.createElement(RococoCard, { label: '版本', value: THEME_VERSION }),
              React.createElement(RococoCard, { label: '样式表', value: status }),
              React.createElement(RococoCard, { label: '头像来源', value: '小鲸鱼挂件' })),
            React.createElement('div', { className: 'rcp-sec' },
              React.createElement('h2', null, '对话头像'),
              React.createElement('div', { className: 'rcp-avs' },
                AVATARS.map((a) => React.createElement('div', { className: 'rcp-av', key: a.cls },
                  React.createElement('i', { className: a.cls }),
                  React.createElement('span', null, a.name + ' · ' + a.tip))))),
            React.createElement('div', { className: 'rcp-sec' },
              React.createElement('h2', null, '设计要素'),
              React.createElement('ul', { className: 'rcp-list' },
                ELEMENTS.map((line) => React.createElement('li', { key: line }, line)))),
            React.createElement('div', { className: 'rcp-sec' },
              React.createElement('button', { type: 'button', className: 'rcp-btn', onClick: repaint }, '重新注入样式表')),
            React.createElement('div', { className: 'rcp-note' },
              React.createElement('b', null, '想改头像？'),
              React.createElement('span', null, ' 助手＝lib/client.js 里 [data-chat-flow-kind]:has([class*="XNZzAa_body"])::before 的 background；用户＝[data-chat-flow-kind="user"]::before 的 content 与渐变。改完刷新窗口即可，不用重启应用。'))))
      }

      /** 侧栏行注册在 sidebar.panellist，页面注册在 keyed main 槽，两者共用 PANEL_ID。 */
      function registerPanel(ctx) {
        try {
          if (!ctx || !ctx.slots || typeof ctx.slots.inject !== 'function') return undefined
          const stopRow = ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
            name: 'sidebar.panellist',
            id: PANEL_ID,
            order: 40,
            label: () => '洛可可',
          }, RococoIcon))
          const stopPage = ctx.slots.inject('main', () => ctx.slots.register({
            name: 'main',
            key: PANEL_ID,
          }, RococoPage))
          return () => {
            try { if (typeof stopPage === 'function') stopPage() } catch (error) {}
            try { if (typeof stopRow === 'function') stopRow() } catch (error) {}
          }
        } catch (error) {
          console.warn('[dsh-rococo-theme] panel registration failed:', error)
          return undefined
        }
      }

      /** 需要的客户端服务：slots（侧栏/主面板槽位由 shell 声明后回调）。 */
      exports.inject = ['slots']

      /** 插件入口：注入主题样式 + 注册侧栏面板。 */
      exports.apply = (ctx) => {
        installCss()
        try { registerPanel(ctx) } catch (error) {
          console.warn('[dsh-rococo-theme] apply panel failed:', error)
        }
      }

      // 样式在 factory 阶段就先注入一次：即使宿主没提供 slots、apply 没被调用，
      // 主题也不会因此失效（installCss 幂等）。
      installCss()

      return module.exports
    } catch (error) {
      // 兜底：factory 级失败也返回一个「空但合法」的模块面，保住 web boot
      console.warn('[dsh-rococo-theme] factory failed, degrading to no-op:', error)
      const module = { exports: {} }
      module.exports.inject = []
      module.exports.apply = () => {}
      return module.exports
    }
  },
})
