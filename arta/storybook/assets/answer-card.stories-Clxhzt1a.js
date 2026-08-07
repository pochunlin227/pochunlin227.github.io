import{s as o,d as l}from"./helpers-BwuIyHmI.js";const d={title:"02 Components/Selection/Answer card",parameters:l(["Question answer card (Yes/No with consequence sentence). Each answer **restates its consequence in a full sentence** — the member confirms meaning, not just a label.","","**States** default · hover (stroke) · selected (focus-ring stroke; fill never changes). **Tokens** `arta.cmp.answer.*`."].join(`
`))},e={render:()=>`
    <div class="sb-h">default / selected — click to select</div>
    <div class="sb-col" style="max-width:560px">
      ${[["Yes","I can invest S$100K per year over the next 4 years.","selected"],["No","I have a maximum of S$100K to invest in total.",""]].map(([r,n,c])=>`
        <div class="arta-answer ${c}" onclick="this.parentNode.querySelectorAll('.arta-answer').forEach(a=>a.classList.remove('selected'));this.classList.add('selected')">
          <b>${r}</b><p>${n}</p>
        </div>`).join("")}
    </div>`,parameters:o(`<div class="arta-answer selected">
  <b>Yes</b>
  <p>I can invest S$100K per year over the next 4 years.</p>
</div>`)};var s,a,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">default / selected — click to select</div>
    <div class="sb-col" style="max-width:560px">
      \${[['Yes', 'I can invest S$100K per year over the next 4 years.', 'selected'], ['No', 'I have a maximum of S$100K to invest in total.', '']].map(([l, d, sel]) => \`
        <div class="arta-answer \${sel}" onclick="this.parentNode.querySelectorAll('.arta-answer').forEach(a=>a.classList.remove('selected'));this.classList.add('selected')">
          <b>\${l}</b><p>\${d}</p>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-answer selected">
  <b>Yes</b>
  <p>I can invest S$100K per year over the next 4 years.</p>
</div>\`)
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const v=["States"];export{e as States,v as __namedExportsOrder,d as default};
