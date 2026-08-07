const P={title:"03 Card components/Recommended limit"},e=({theme:N="",limit:O="S$40,000",requested:c=null,buffer:l="healthy",loading:C=!1,whyOpen:L=!1})=>`
  <div class="${N}" style="max-width:380px;background:var(--arta-sys-color-surface-app);color:var(--arta-sys-color-text-primary);padding:20px;border-radius:14px;font-family:var(--arta-sys-type-body-family)">
    <div class="sb-h" style="margin-top:0">Your recommended limit</div>
    ${C?`
      <div style="font-family:var(--arta-sys-type-numeral-family);font-weight:300;font-size:34px;color:var(--arta-sys-color-text-tertiary)">S$ ——</div>
      <p style="font-size:12px;color:var(--arta-sys-color-text-tertiary)">Pricing your eligible assets… usually under a minute.</p>
    `:`
      <div style="font-family:var(--arta-sys-type-numeral-family);font-weight:300;font-size:34px;color:var(--arta-sys-color-credit-limit-recommended)">${O}</div>
      ${c?`<p style="font-size:12.5px;line-height:1.55;color:var(--arta-sys-color-text-secondary);margin:6px 0 0">You asked for <s style="color:var(--arta-sys-color-text-tertiary)">${c}</s>. Private positions count after their next official pricing — your limit rises automatically then. <b style="color:var(--arta-sys-color-text-primary)">Nothing was declined.</b></p>`:""}
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:12px;margin-top:12px">
        <div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0"><span style="color:var(--arta-sys-color-text-secondary)">Eligible portfolio value</span><b>S$182,000</b></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0"><span style="color:var(--arta-sys-color-text-secondary)">Market buffer</span><b style="color:var(--arta-sys-color-portfolio-buffer-${l})">${l==="healthy"?"Healthy · 20% held back":"Thinning · markets moved −8%"}</b></div>
        ${l==="warning"?`<p style="font-size:11.5px;line-height:1.55;color:var(--arta-sys-color-text-secondary);margin:6px 0 0">If the buffer runs out, your limit adjusts with <b>7 days' notice</b>. Assets are never sold without your instruction.</p>`:""}
      </div>
      <a href="#" onclick="return false" style="display:inline-block;margin-top:10px;font-size:12px;color:var(--arta-sys-color-text-link);text-decoration:none">Why this limit?</a>
      ${L?`
      <div style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:12px;margin-top:8px;font-size:12px;line-height:1.7;color:var(--arta-sys-color-text-secondary)">
        Cash &amp; money-market S$30,000 × 90% → S$27,000<br>
        Public markets S$35,000 × 60% → S$21,000<br>
        Market buffer − S$8,000<br>
        <b style="color:var(--arta-sys-color-text-primary)">Recommended limit S$40,000</b><br>
        <span style="color:var(--arta-sys-color-ai-source)">Advance rates are published and identical for every member.</span>
      </div>`:""}
    `}
  </div>`,r=`<p style="max-width:64ch;color:var(--arta-sys-color-text-secondary);font-size:12.5px;line-height:1.6;margin-top:14px">
  <b>Protected:</b> the limit result, the open math, the buffer disclosure and the 7-days'-notice line are
  platform policy — identical for every brand. <b>Themeable:</b> surfaces, type, radius, accent colours.
  <b>A11y:</b> buffer states never rely on colour alone — the label carries the meaning.</p>`,a={render:()=>e({theme:"theme-arta"})+r},t={render:()=>e({theme:"theme-northstar"})+r},o={render:()=>e({theme:"theme-arta",limit:"S$28,000",requested:"S$40,000"})+r},s={render:()=>e({theme:"theme-arta",buffer:"warning"})+r},i={render:()=>e({theme:"theme-arta",loading:!0})+r},n={render:()=>e({theme:"theme-arta",whyOpen:!0})+r};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-arta'
  }) + NOTE
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,u,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-northstar'
  }) + NOTE
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-arta',
    limit: 'S$28,000',
    requested: 'S$40,000'
  }) + NOTE
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,g,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-arta',
    buffer: 'warning'
  }) + NOTE
}`,...($=(g=s.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var S,k,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-arta',
    loading: true
  }) + NOTE
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,E,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => limitCard({
    theme: 'theme-arta',
    whyOpen: true
  }) + NOTE
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const A=["ArtaDefault","NorthstarTheme","LowerThanRequested","PortfolioBufferWarning","LoadingDecision","WhyThisLimitExpanded"];export{a as ArtaDefault,i as LoadingDecision,o as LowerThanRequested,t as NorthstarTheme,s as PortfolioBufferWarning,n as WhyThisLimitExpanded,A as __namedExportsOrder,P as default};
