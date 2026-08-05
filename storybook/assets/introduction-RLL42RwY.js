import{j as n}from"./jsx-runtime-DSc7j9TF.js";import{useMDXComponents as r}from"./index-DSGHgxwJ.js";import{M as c}from"./blocks-DhvL2cdC.js";import"./iframe-BpbqnrN1.js";import"./preload-helper-Dp1pzeXC.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"coseeing-design-system",children:"Coseeing Design System"}),`
`,n.jsxs(e.p,{children:["視覺樣式來自 Figma ",n.jsx(e.strong,{children:"「Brand」"})," 檔案,以 Tailwind v4 ",n.jsx(e.code,{children:"@theme"}),` tokens 的形式定義在
`,n.jsx(e.code,{children:"center/app/globals.css"}),",供 SSO center(Next.js + Ory)使用。"]}),`
`,n.jsx(e.h2,{id:"目錄",children:"目錄"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Foundations"})," — 設計基礎規範,對應 ",n.jsx(e.code,{children:"globals.css"})," ",n.jsx(e.code,{children:"@theme"}),` 的 design tokens
(原生 React + 純 CSS 實作):`,`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Colors"})," — 色票卡(Tailwind token 名 + CSS 變數 + HEX/RGB)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Typography"})," — ",n.jsx(e.code,{children:"typography-*"})," 組合 class、字級 scale、字重與字族"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Tokens"})," — Spacing / Border Radius / Shadows / Breakpoints"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Components"}),` — 所有共用元件,採 folder-per-component 結構
(`,n.jsx(e.code,{children:"components/<Name>/<Name>.tsx"}),` + colocated stories),每個元件都有
autodocs 產生的 Docs 頁(含程式碼):`,`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Button"})," — 來自 Figma Brand → Elements(",n.jsx(e.code,{children:"danger"})," 與 ",n.jsx(e.code,{children:"isLoading"})," 為 SSO 擴充)。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Nav"}),"、",n.jsx(e.code,{children:"MemberCard"}),"、",n.jsx(e.code,{children:"CarouselControls"}),"、",n.jsx(e.code,{children:"Icons"}),` — 來自 Figma「Coseeing」→
Elements,三個響應式斷點合併為單一元件;icon 以 currentColor inline SVG
實作(見 Components/Icons),logo 與照片資產在 `,n.jsx(e.code,{children:"public/brand/"}),"。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Input"}),"、",n.jsx(e.code,{children:"Select"}),"、",n.jsx(e.code,{children:"Checkbox"}),"、",n.jsx(e.code,{children:"Field"}),` — Figma 中沒有的 SSO gap-fill,
使用與 `,n.jsx(e.code,{children:".ory-elements"})," 相同的 brand tokens,確保與 Ory 表單視覺一致。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Form"})," — 以上 primitives 的組合範例(含完整登入表單)。"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Center"})," — SSO center 專屬的組合元件:",n.jsx(e.code,{children:"AuthPage"})," 版型(含 ",n.jsx(e.code,{children:"FlowComponents"}),`)、
`,n.jsx(e.code,{children:"CoseeingIdentityCard"}),"。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"慣例",children:"慣例"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["每個元件提供三種 story:",n.jsx(e.strong,{children:"Playground"}),`(用 Controls 面板互動)、
`,n.jsx(e.strong,{children:"Variants"}),"(所有變體一覽)、",n.jsx(e.strong,{children:"States"}),`(Default / Hover / Focused / Disabled 矩陣,
以 pseudo-states addon 靜態呈現)。`]}),`
`,n.jsxs(e.li,{children:["Hover / Focus 狀態一律寫在 CSS(",n.jsx(e.code,{children:"hover:"})," / ",n.jsx(e.code,{children:"focus-visible:"}),"),不用 JS。"]}),`
`,n.jsxs(e.li,{children:["無障礙:所有元件需通過 ",n.jsx(e.strong,{children:"Accessibility"}),` 面板(addon-a11y)檢查;
focus ring 使用 orange-PRIMARY,對比需符合 WCAG AA。`]}),`
`]}),`
`,n.jsx(e.h2,{id:"使用規則來自設計師備註",children:"使用規則(來自設計師備註)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["橘色 ",n.jsx(e.code,{children:"primary/light"})," 按鈕主要用在綠色/深色背景;淺色背景請改用 ",n.jsx(e.code,{children:"greenStroke"}),"。"]}),`
`,n.jsx(e.li,{children:"驗證訊息:danger 用 red-600、success 用 green-700(皆符合白底 AA 對比)。"}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
