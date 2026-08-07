import{s as n,d as c}from"./helpers-BwuIyHmI.js";const r={title:"07 Product Reference/Forms & Selection/Segmented Pills",parameters:c(["Segmented pill control (risk levels, investment amounts). Selected = inverse (white) pill with dark text.","","**States** default · selected (inverse). **Tokens** `arta.cmp.toggle.*`. **Mobile** wraps to a second line — never shrinks below `sys.size.control-compact`."].join(`
`))},e={render:()=>`
    <div class="sb-h">risk levels · initial-investment selector — click to switch</div>
    <div class="sb-col">
      <div class="arta-seg">
        ${["Moderate","Baseline","Elevated"].map((t,s)=>`<button class="${s===1?"selected":""}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">${t}</button>`).join("")}
      </div>
      <div class="arta-seg">
        ${["S$25K","S$50K","S$100K","S$250K","S$1M"].map((t,s)=>`<button class="${s===2?"selected":""}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">${t}</button>`).join("")}
      </div>
    </div>`,parameters:n(`<div class="arta-seg">
  <button>Moderate</button>
  <button class="selected">Baseline</button>
  <button>Elevated</button>
</div>`)};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">risk levels · initial-investment selector — click to switch</div>
    <div class="sb-col">
      <div class="arta-seg">
        \${['Moderate', 'Baseline', 'Elevated'].map((l, i) => \`<button class="\${i === 1 ? 'selected' : ''}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">\${l}</button>\`).join('')}
      </div>
      <div class="arta-seg">
        \${['S$25K', 'S$50K', 'S$100K', 'S$250K', 'S$1M'].map((l, i) => \`<button class="\${i === 2 ? 'selected' : ''}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">\${l}</button>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-seg">
  <button>Moderate</button>
  <button class="selected">Baseline</button>
  <button>Elevated</button>
</div>\`)
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const d=["TwoRows"];export{e as TwoRows,d as __namedExportsOrder,r as default};
