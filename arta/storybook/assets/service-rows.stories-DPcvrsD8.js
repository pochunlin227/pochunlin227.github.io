import{s as d,d as c}from"./helpers-BwuIyHmI.js";const v={title:"Product Patterns/People & Trust/Service Rows",parameters:c(["Family Office Services rows — text left, colored icon tile right. The violet **Line of Credit** tile is the second in-product lending signal; the Arta Card slots beside it as the everyday instrument.","","**States** default · hover raise. **Mobile** single column."].join(`
`))},e={render:()=>`
    <div class="sb-h">colored icon tiles — "Line of Credit" already ships</div>
    <div class="arta-service-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;max-width:760px">
      ${[["Personal Investment Advisor","Design a custom investment strategy for you and your family.","var(--arta-ref-color-mint-70)","❁"],["Tax Advisory & Estate Plans","Build an estate plan to protect you and your loved ones.","var(--arta-ref-color-pink-70)","﹪"],["Line of Credit","Use an instant line of credit to coast through large or urgent expenses.","var(--arta-ref-color-violet-60)","❯"],["Custom Structured Offerings","Build a custom structured derivative specific to your views.","var(--arta-ref-color-peach-70)","(x)"]].map(([s,i,o,n])=>`
        <div class="arta-service">
          <div class="arta-service__body"><b>${s}</b><p>${i}</p></div>
          <div class="arta-service__tile" style="background:${o}">${n}</div>
        </div>`).join("")}
    </div>`,parameters:d(`<div class="arta-service">
  <div class="arta-service__body">
    <b>Line of Credit</b>
    <p>Use an instant line of credit to coast through large or urgent expenses.</p>
  </div>
  <div class="arta-service__tile" style="background:var(--arta-ref-color-violet-60)">❯</div>
</div>`)};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">colored icon tiles — "Line of Credit" already ships</div>
    <div class="arta-service-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;max-width:760px">
      \${[['Personal Investment Advisor', 'Design a custom investment strategy for you and your family.', 'var(--arta-ref-color-mint-70)', '❁'], ['Tax Advisory & Estate Plans', 'Build an estate plan to protect you and your loved ones.', 'var(--arta-ref-color-pink-70)', '﹪'], ['Line of Credit', 'Use an instant line of credit to coast through large or urgent expenses.', 'var(--arta-ref-color-violet-60)', '❯'], ['Custom Structured Offerings', 'Build a custom structured derivative specific to your views.', 'var(--arta-ref-color-peach-70)', '(x)']].map(([t, d, c, ic]) => \`
        <div class="arta-service">
          <div class="arta-service__body"><b>\${t}</b><p>\${d}</p></div>
          <div class="arta-service__tile" style="background:\${c}">\${ic}</div>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-service">
  <div class="arta-service__body">
    <b>Line of Credit</b>
    <p>Use an instant line of credit to coast through large or urgent expenses.</p>
  </div>
  <div class="arta-service__tile" style="background:var(--arta-ref-color-violet-60)">❯</div>
</div>\`)
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const u=["Catalog"];export{e as Catalog,u as __namedExportsOrder,v as default};
