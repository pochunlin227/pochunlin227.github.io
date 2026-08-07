import{s,d}from"./helpers-BwuIyHmI.js";const i={title:"02 Components/Data display/Comparison table",parameters:d(["Two-column comparison table (Tax Advantage pattern). **Mobile** — wrap in `.arta-scroll-x`: the card scrolls horizontally, the page never does.","","**Tokens** `arta.cmp.table.*`."].join(`
`))},t={render:()=>`
    <div class="sb-h">side text + table, wraps under 640px</div>
    <div style="display:flex;gap:40px;flex-wrap:wrap;max-width:820px">
      <div style="flex:1;min-width:260px">
        <div class="arta-keyterms__title" style="margin-bottom:10px">Tax advantage</div>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
          Depending on your tax situation, a savings account would have to provide the yield below
          to match this AMP.</p>
        <a class="arta-link" href="#" style="font-size:13px;display:inline-block;margin-top:10px">See disclosures</a>
      </div>
      <div class="arta-scroll-x" style="flex:1;min-width:280px">
        <table class="arta-table" style="min-width:0">
          <tr><th>State</th><th>Yield needed</th></tr>
          <tr><td>California</td><td>6.80%</td></tr>
          <tr><td>New York</td><td>6.48%</td></tr>
          <tr><td>New Jersey</td><td>6.46%</td></tr>
        </table>
      </div>
    </div>`,parameters:s(`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>State</th><th>Yield needed</th></tr>
    <tr><td>California</td><td>6.80%</td></tr>
  </table>
</div>`)};var a,e,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">side text + table, wraps under 640px</div>
    <div style="display:flex;gap:40px;flex-wrap:wrap;max-width:820px">
      <div style="flex:1;min-width:260px">
        <div class="arta-keyterms__title" style="margin-bottom:10px">Tax advantage</div>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
          Depending on your tax situation, a savings account would have to provide the yield below
          to match this AMP.</p>
        <a class="arta-link" href="#" style="font-size:13px;display:inline-block;margin-top:10px">See disclosures</a>
      </div>
      <div class="arta-scroll-x" style="flex:1;min-width:280px">
        <table class="arta-table" style="min-width:0">
          <tr><th>State</th><th>Yield needed</th></tr>
          <tr><td>California</td><td>6.80%</td></tr>
          <tr><td>New York</td><td>6.48%</td></tr>
          <tr><td>New Jersey</td><td>6.46%</td></tr>
        </table>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>State</th><th>Yield needed</th></tr>
    <tr><td>California</td><td>6.80%</td></tr>
  </table>
</div>\`)
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const n=["WithContext"];export{t as WithContext,n as __namedExportsOrder,i as default};
