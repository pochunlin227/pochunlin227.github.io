import{s as r,d as t}from"./helpers-BwuIyHmI.js";const l={title:"02 Components/Navigation & progress/Wizard steps",parameters:t(["Questionnaire step rail (private-markets suitability flow).","","| State | Class | Look |","|---|---|---|","| Done | `.done` | Inverse (white) dot with ✓, bright label |","| Current | `.current` | Numbered dot, bright label |","| Todo | (none) | Dim dot + tertiary label |","","**Tokens** `arta.cmp.wizard.*`. **Mobile** the rail moves above the question as a horizontal dot row."].join(`
`))},a={render:()=>`
    <div class="sb-h">done (✓ inverse) / current (bright) / todo (dim)</div>
    <div class="arta-wizard" style="max-width:260px">
      <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
      <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">4</div><div class="arta-wizard__label">Risk</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">5</div><div class="arta-wizard__label">Tech Exposure</div></div>
    </div>`,parameters:r(`<div class="arta-wizard">
  <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
  <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
  <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
</div>`)};var i,d,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">done (✓ inverse) / current (bright) / todo (dim)</div>
    <div class="arta-wizard" style="max-width:260px">
      <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
      <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">4</div><div class="arta-wizard__label">Risk</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">5</div><div class="arta-wizard__label">Tech Exposure</div></div>
    </div>\`,
  parameters: src(\`<div class="arta-wizard">
  <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
  <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
  <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
</div>\`)
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const v=["States"];export{a as States,v as __namedExportsOrder,l as default};
