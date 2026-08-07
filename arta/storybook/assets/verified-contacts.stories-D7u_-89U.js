import{s as r,d as c}from"./helpers-BwuIyHmI.js";const o={title:"Product Patterns/People & Trust/Verified Contacts",parameters:c([`People & Groups — verified Arta expert contacts with shield badge. Human escalation as a navigation object; the Arta Card's "Talk to a human" states route here, not to a new surface.`,"","No interactive states by design — verification is not toggleable UI. **Tokens** `arta.cmp.contact.*`."].join(`
`))},a={render:()=>`
    <div style="max-width:420px">
      ${["Alternative Investments","Insurance","Investment Advisor","Member Success","Tax & Estate"].map(n=>`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">${n}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>`).join("")}
    </div>`,parameters:r(`<div class="arta-contact">
  <div class="arta-contact__avatar">a</div>
  <span class="arta-contact__name">Tax &amp; Estate</span>
  <span class="arta-contact__badge">🛡 Verified</span>
</div>`)};var t,s,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:420px">
      \${['Alternative Investments', 'Insurance', 'Investment Advisor', 'Member Success', 'Tax & Estate'].map(n => \`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">\${n}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-contact">
  <div class="arta-contact__avatar">a</div>
  <span class="arta-contact__name">Tax &amp; Estate</span>
  <span class="arta-contact__badge">🛡 Verified</span>
</div>\`)
}`,...(e=(s=a.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const d=["List"];export{a as List,d as __namedExportsOrder,o as default};
