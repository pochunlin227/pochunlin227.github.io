import{s as e,d as o}from"./helpers-BwuIyHmI.js";const n={title:"02 Components/Charts/Style matrix",parameters:o(["Morningstar-style 9-box (Value/Blend/Growth × Large/Medium/Small). Dots are absolutely positioned percentages — the matrix scales fluidly.","","**Dots** portfolio = violet, benchmark = grey (`.arta-matrix__dot--benchmark`). **Mobile** explanation column drops below the grid."].join(`
`))},a={render:()=>`
    <div class="sb-h">portfolio dot vs benchmark dot</div>
    <div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">
      <div>
        <div style="display:flex;justify-content:space-around;max-width:280px;margin-bottom:6px">
          ${["Value","Blend","Growth"].map(i=>`<span class="arta-matrix__axis">${i}</span>`).join("")}
        </div>
        <div class="arta-matrix">
          ${"<i></i>".repeat(9)}
          <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
          <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
        </div>
      </div>
      <div style="max-width:280px">
        <p style="color:var(--arta-sys-color-text-primary);font-size:14px;font-weight:600">Your portfolio: Large Growth</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.55;margin-top:6px">
          Large companies with high growth prospects — moderate risk, less volatile than smaller
          growth stocks. Examples: Amazon (AMZN), Vanguard Growth ETF (VUG).</p>
      </div>
    </div>`,parameters:e(`<div class="arta-matrix">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
  <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
</div>`)};var t,s,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">portfolio dot vs benchmark dot</div>
    <div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">
      <div>
        <div style="display:flex;justify-content:space-around;max-width:280px;margin-bottom:6px">
          \${['Value', 'Blend', 'Growth'].map(l => \`<span class="arta-matrix__axis">\${l}</span>\`).join('')}
        </div>
        <div class="arta-matrix">
          \${'<i></i>'.repeat(9)}
          <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
          <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
        </div>
      </div>
      <div style="max-width:280px">
        <p style="color:var(--arta-sys-color-text-primary);font-size:14px;font-weight:600">Your portfolio: Large Growth</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.55;margin-top:6px">
          Large companies with high growth prospects — moderate risk, less volatile than smaller
          growth stocks. Examples: Amazon (AMZN), Vanguard Growth ETF (VUG).</p>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-matrix">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
  <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
</div>\`)
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,n as default};
