import{s as d,d as n}from"./helpers-BwuIyHmI.js";const l={title:"07 Product Reference/Forms & Selection/Radio Select Rows",parameters:n(["Allocation-preset rows (AMP personalization). Selected row floods **violet** with a filled check dot — the loudest selection state in the product, reserved for one-of-N decisions that change money outcomes.","","**States** default · hover (stroke strengthens) · selected (violet fill + ✓). **Tokens** `arta.cmp.radiorow.*`. **Mobile** full-width rows, unchanged."].join(`
`))},e={render:()=>`
    <div class="sb-h">default / selected — click to move selection</div>
    <div class="sb-col" style="max-width:520px">
      ${[["Robo – Aggressive","A 90/10 split between stocks and bonds, for those willing to take on more market risk.",""],["Robo – Balanced","A balanced stock-to-bond allocation, for investors who want growth and income in one.","selected"],["Robo – Conservative","Prioritizes capital preservation with a more conservative stock-to-bond split.",""]].map(([s,i,o])=>`
        <div class="arta-radiorow ${o}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>{r.classList.remove('selected');r.querySelector('.arta-radiorow__dot').textContent='';});this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">${o?"✓":""}</div>
          <div><b>${s}</b><p>${i}</p></div>
        </div>`).join("")}
    </div>`,parameters:d(`<div class="arta-radiorow selected">
  <div class="arta-radiorow__dot">✓</div>
  <div><b>Robo – Balanced</b><p>A balanced stock-to-bond allocation…</p></div>
</div>`)};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">default / selected — click to move selection</div>
    <div class="sb-col" style="max-width:520px">
      \${[['Robo – Aggressive', 'A 90/10 split between stocks and bonds, for those willing to take on more market risk.', ''], ['Robo – Balanced', 'A balanced stock-to-bond allocation, for investors who want growth and income in one.', 'selected'], ['Robo – Conservative', 'Prioritizes capital preservation with a more conservative stock-to-bond split.', '']].map(([t, d, sel]) => \`
        <div class="arta-radiorow \${sel}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>{r.classList.remove('selected');r.querySelector('.arta-radiorow__dot').textContent='';});this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">\${sel ? '✓' : ''}</div>
          <div><b>\${t}</b><p>\${d}</p></div>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-radiorow selected">
  <div class="arta-radiorow__dot">✓</div>
  <div><b>Robo – Balanced</b><p>A balanced stock-to-bond allocation…</p></div>
</div>\`)
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const v=["States"];export{e as States,v as __namedExportsOrder,l as default};
