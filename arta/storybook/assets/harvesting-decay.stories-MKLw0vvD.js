import{s as i,d as c}from"./helpers-BwuIyHmI.js";const v={title:"Product Patterns/Data & Charts/Harvesting Decay",parameters:c(["Tax-loss harvesting potential by year — year dot, violet fill bar, value. A timeline told as data.","","**Tokens** `arta.cmp.decay.*`."].join(`
`))},a={render:()=>`
    <div class="sb-h">13.8% → 2.38% over 8 years</div>
    <div class="arta-decay" style="max-width:520px">
      ${[["1Y",13.8],["2Y",6.84],["3Y",5.48],["4Y",4.67],["5Y",4.5],["6Y",4.16],["8Y",2.38]].map(([t,s])=>`
        <div class="arta-decay__row">
          <div class="arta-decay__dot">${t}</div>
          <div class="arta-decay__track"><div class="arta-decay__fill" style="width:${s/13.8*100}%"></div></div>
          <span class="arta-decay__val">${s}%</span>
        </div>`).join("")}
    </div>`,parameters:i(`<div class="arta-decay">
  <div class="arta-decay__row">
    <div class="arta-decay__dot">1Y</div>
    <div class="arta-decay__track"><div class="arta-decay__fill" style="width:100%"></div></div>
    <span class="arta-decay__val">13.8%</span>
  </div>
</div>`)};var d,e,r;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">13.8% → 2.38% over 8 years</div>
    <div class="arta-decay" style="max-width:520px">
      \${[['1Y', 13.8], ['2Y', 6.84], ['3Y', 5.48], ['4Y', 4.67], ['5Y', 4.5], ['6Y', 4.16], ['8Y', 2.38]].map(([y, v]) => \`
        <div class="arta-decay__row">
          <div class="arta-decay__dot">\${y}</div>
          <div class="arta-decay__track"><div class="arta-decay__fill" style="width:\${v / 13.8 * 100}%"></div></div>
          <span class="arta-decay__val">\${v}%</span>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-decay">
  <div class="arta-decay__row">
    <div class="arta-decay__dot">1Y</div>
    <div class="arta-decay__track"><div class="arta-decay__fill" style="width:100%"></div></div>
    <span class="arta-decay__val">13.8%</span>
  </div>
</div>\`)
}`,...(r=(e=a.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const n=["Timeline"];export{a as Timeline,n as __namedExportsOrder,v as default};
