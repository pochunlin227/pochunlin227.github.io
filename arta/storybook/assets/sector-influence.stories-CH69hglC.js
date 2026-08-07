import{s as n,d as l}from"./helpers-BwuIyHmI.js";const p={title:"02 Components/Selection/Tilt row",parameters:l(["Per-sector tilt row (AMP personalization). Three tilt states live **in the pill label** (Increased / Neutral / Decreased); the row itself never changes color — tilt is data, not celebration.","","**Tokens** `arta.cmp.sector.*`. **Mobile** description wraps; pill stays pinned right."].join(`
`))},e={render:()=>`
    <div class="sb-h">Increased / Neutral / Decreased</div>
    <div class="sb-col" style="max-width:560px">
      ${[["▣","Technology","Develops software, hardware, and tech services like Google, Meta, Apple, Microsoft and Nvidia.","Increased ▾"],["✚","Healthcare","Offers medical services, drugs, and health equipment like Pfizer, J&amp;J and United Health Group.","Neutral ▾"],["🛒","Consumer Discretionary","Sells non-essential, often luxury, goods and services like McDonald’s and Nike.","Decreased ▾"]].map(([r,o,i,c])=>`
        <div class="arta-sector">
          <div class="arta-sector__icon">${r}</div>
          <div class="arta-sector__body"><b>${o}</b><p>${i}</p></div>
          <button class="arta-sector__ctl">${c}</button>
        </div>`).join("")}
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px">"Not recommended for beginners." — the honesty line ships with the feature.</p>
    </div>`,parameters:n(`<div class="arta-sector">
  <div class="arta-sector__icon">▣</div>
  <div class="arta-sector__body"><b>Technology</b><p>Develops software, hardware…</p></div>
  <button class="arta-sector__ctl">Increased ▾</button>
</div>`)};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Increased / Neutral / Decreased</div>
    <div class="sb-col" style="max-width:560px">
      \${[['▣', 'Technology', 'Develops software, hardware, and tech services like Google, Meta, Apple, Microsoft and Nvidia.', 'Increased ▾'], ['✚', 'Healthcare', 'Offers medical services, drugs, and health equipment like Pfizer, J&amp;J and United Health Group.', 'Neutral ▾'], ['🛒', 'Consumer Discretionary', 'Sells non-essential, often luxury, goods and services like McDonald’s and Nike.', 'Decreased ▾']].map(([ic, t, d, ctl]) => \`
        <div class="arta-sector">
          <div class="arta-sector__icon">\${ic}</div>
          <div class="arta-sector__body"><b>\${t}</b><p>\${d}</p></div>
          <button class="arta-sector__ctl">\${ctl}</button>
        </div>\`).join('')}
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px">"Not recommended for beginners." — the honesty line ships with the feature.</p>
    </div>\`,
  parameters: src(\`<div class="arta-sector">
  <div class="arta-sector__icon">▣</div>
  <div class="arta-sector__body"><b>Technology</b><p>Develops software, hardware…</p></div>
  <button class="arta-sector__ctl">Increased ▾</button>
</div>\`)
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const v=["TiltStates"];export{e as TiltStates,v as __namedExportsOrder,p as default};
