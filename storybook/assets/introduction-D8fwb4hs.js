import{j as e}from"./jsx-runtime-ClBOXb86.js";import{useMDXComponents as i}from"./index-CAJ4aSi8.js";import{M as c}from"./blocks-BnbsUWfb.js";import"./iframe-DZt_JkcD.js";import"./preload-helper-Dp1pzeXC.js";function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"coseeing-design-system",children:"Coseeing Design System"}),`
`,e.jsxs(n.p,{children:["視覺樣式來自 Figma ",e.jsx(n.strong,{children:"「Brand」"})," 檔案,以 Tailwind v4 ",e.jsx(n.code,{children:"@theme"}),` tokens 的形式定義在
`,e.jsx(n.code,{children:"center/app/globals.css"}),",供 SSO center(Next.js + Ory)使用。"]}),`
`,e.jsx(n.h2,{id:"目錄",children:"目錄"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Foundations"})," — 設計基礎規範,對應 ",e.jsx(n.code,{children:"globals.css"})," ",e.jsx(n.code,{children:"@theme"}),` 的 design tokens
(原生 React + 純 CSS 實作):`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Colors"})," — 色票卡(Tailwind token 名 + CSS 變數 + HEX/RGB)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Typography"})," — ",e.jsx(n.code,{children:"typography-*"})," 組合 class、字級 scale、字重與字族"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tokens"})," — Spacing / Border Radius / Shadows / Breakpoints"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Components"}),` — 所有共用元件,採 folder-per-component 結構
(`,e.jsx(n.code,{children:"components/<Name>/<Name>.tsx"}),` + colocated stories),每個元件都有
autodocs 產生的 Docs 頁(含程式碼):`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Button"})," — 來自 Figma Brand → Elements(",e.jsx(n.code,{children:"danger"})," 與 ",e.jsx(n.code,{children:"isLoading"})," 為 SSO 擴充)。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Nav"}),"、",e.jsx(n.code,{children:"MemberCard"}),"、",e.jsx(n.code,{children:"CarouselControls"}),"、",e.jsx(n.code,{children:"Icons"}),` — 來自 Figma「Coseeing」→
Elements,三個響應式斷點合併為單一元件;icon 以 currentColor inline SVG
實作(見 Components/Icons),logo 與照片資產在 `,e.jsx(n.code,{children:"public/brand/"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PageHeader"}),"、",e.jsx(n.code,{children:"ProjectCard"}),"、",e.jsx(n.code,{children:"Tag"}),"、",e.jsx(n.code,{children:"Footer"}),` — 來自 Figma「Coseeing」→
列表頁(專案介紹):頁首波浪橫幅、專案照片卡與標籤、響應式頁尾。`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Accordion"}),"、",e.jsx(n.code,{children:"Table"}),"、",e.jsx(n.code,{children:"FilterPills"}),` — 來自 Figma「Coseeing」→ 捐款相關 UI
與芳名錄:FAQ 摺疊(原生 details/summary)、捐款名錄表格、年份篩選。`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EventCard"}),"、",e.jsx(n.code,{children:"ThumbnailCard"}),"、",e.jsx(n.code,{children:"ReportCard"}),"、",e.jsx(n.code,{children:"UpcomingEventItem"}),` — 來自
Figma「Coseeing」→ 活動花絮/活動內頁/深度報導/活動頁:活動照片卡、
縮圖連結卡、可展開的報導卡、近期活動列(default/highlight/featured)。`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Dialog"}),"、",e.jsx(n.code,{children:"Toast"}),"、",e.jsx(n.code,{children:"Tabs"}),` — 設計系統擴充(非 Figma,依品牌語言設計):
原生 `,e.jsx(n.code,{children:"<dialog>"}),` 對話框(橘色頂飾條 + teal 模糊背景)、語意色條通知
(info/success/warning/danger)、底線式頁籤(完整 APG 鍵盤操作)。`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Input"}),"、",e.jsx(n.code,{children:"Select"}),"、",e.jsx(n.code,{children:"Checkbox"}),"、",e.jsx(n.code,{children:"Field"}),` — Figma 中沒有的 SSO gap-fill,
使用與 `,e.jsx(n.code,{children:".ory-elements"})," 相同的 brand tokens,確保與 Ory 表單視覺一致。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Form"})," — 以上 primitives 的組合範例(含完整登入表單)。"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Center"})," — SSO center 專屬的組合元件:",e.jsx(n.code,{children:"AuthPage"})," 版型(含 ",e.jsx(n.code,{children:"FlowComponents"}),`)、
`,e.jsx(n.code,{children:"CoseeingIdentityCard"}),"。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"慣例",children:"慣例"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["每個元件提供三種 story:",e.jsx(n.strong,{children:"Playground"}),`(用 Controls 面板互動)、
`,e.jsx(n.strong,{children:"Variants"}),"(所有變體一覽)、",e.jsx(n.strong,{children:"States"}),`(Default / Hover / Focused / Disabled 矩陣,
以 pseudo-states addon 靜態呈現)。`]}),`
`,e.jsxs(n.li,{children:["Hover / Focus 狀態一律寫在 CSS(",e.jsx(n.code,{children:"hover:"})," / ",e.jsx(n.code,{children:"focus-visible:"}),"),不用 JS。"]}),`
`,e.jsxs(n.li,{children:["無障礙:所有元件需通過 ",e.jsx(n.strong,{children:"Accessibility"}),` 面板(addon-a11y)檢查;
focus ring 使用 orange-PRIMARY,對比需符合 WCAG AA。`]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用規則來自設計師備註",children:"使用規則(來自設計師備註)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["橘色 ",e.jsx(n.code,{children:"primary/light"})," 按鈕主要用在綠色/深色背景;淺色背景請改用 ",e.jsx(n.code,{children:"greenStroke"}),"。"]}),`
`,e.jsx(n.li,{children:"驗證訊息:danger 用 red-600、success 用 green-700(皆符合白底 AA 對比)。"}),`
`]})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{x as default};
