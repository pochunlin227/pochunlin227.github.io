const N={title:"03 Card components/Recommended limit"},e={wrap:"max-width:380px;background:var(--arta-sys-color-surface-app);color:var(--arta-sys-color-text-primary);padding:20px;border-radius:var(--arta-sys-radius-surface)",fig:"font-family:var(--arta-sys-type-numeral-family);font-weight:300;font-size:34px;color:var(--arta-sys-color-credit-limit-recommended)",panel:"background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:12px;margin-top:12px",row:"display:flex;justify-content:space-between;font-size:12px;padding:4px 0",dim:"color:var(--arta-sys-color-text-secondary)",link:"display:inline-block;margin-top:10px;font-size:12px;color:var(--arta-sys-color-text-link);text-decoration:none",legal:"font-size:11.5px;line-height:1.6;color:var(--arta-sys-color-text-legal);margin:10px 0 0"},C=t=>`<div style="${e.panel}">${t.map(([l,c])=>`<div style="${e.row}"><span style="${e.dim}">${l}</span><b>${c}</b></div>`).join("")}</div>`,a=({theme:t="",limit:l="S$40,000",kicker:c="Your recommended limit",loading:h=!1,review:m=!1,explain:O=!1}={})=>`
  <div class="${t}" style="${e.wrap}">
    <div class="sb-h" style="margin-top:0">${c}</div>
    ${h?`<div style="${e.fig};color:var(--arta-sys-color-text-tertiary)">S$ ——</div>
         <p style="font-size:12px;color:var(--arta-sys-color-text-tertiary)">Reading your eligible assets… usually under a minute.</p>`:m?`<div style="${e.fig};color:var(--arta-sys-color-text-tertiary)">Pending</div>
           <p style="font-size:12.5px;line-height:1.55;${e.dim};margin:6px 0 0">We’ll confirm your figure once your income is verified. <b style="color:var(--arta-sys-color-text-primary)">Your portfolio has already cleared.</b></p>`:`<div style="${e.fig}">${l}</div>
           <p style="font-size:12.5px;line-height:1.55;${e.dim};margin:6px 0 0">Based on the assets you’ve chosen to secure the card.</p>`}
    ${h?"":C([["Cash & money-market","Included"],["Public markets","Included"],["Private funds",m?"Pending valuation":"Included"]])}
    <a href="#" onclick="return false" style="${e.link}">How does securing the card work? →</a>
    ${O?`<div style="${e.panel};background:var(--arta-sys-color-surface-sunken)">
      <p style="font-size:12px;line-height:1.6;${e.dim};margin:0">Your chosen assets stay invested and are pledged as security. Arta reviews their eligibility and value to set what you can spend.</p>
      <p style="font-size:11px;line-height:1.6;color:var(--arta-sys-color-ai-source);margin:8px 0 0">Illustrative for this exercise — the eligibility and valuation model would be defined with Credit, Risk and Legal.</p>
    </div>`:""}
    <p style="${e.legal}">Your spending limit may change if eligible asset values or eligibility change. If values fall, the limit may adjust, with notice — see the Security Agreement for exact terms.</p>
  </div>`,r=t=>`<p style="max-width:66ch;color:var(--arta-sys-color-text-secondary);font-size:12.5px;line-height:1.65;margin-top:14px">${t}</p>`,s={render:()=>a({theme:"theme-arta"})+r("<b>The number is a recommendation, not a promise</b> — “what your portfolio may support”, never “your limit is”. What it rests on is shown; how it is calculated is not invented.")},i={render:()=>a({theme:"theme-northstar"})+r("Same component, partner theme. Surfaces, type and radius change; the hedge in the language, the terms line and the explanation entry point do not.")},n={render:()=>a({theme:"theme-arta",explain:!0})+r("<b>Where policy is undefined, the explanation says so.</b> Marking the model “illustrative — to be defined with Credit, Risk and Legal” is the honest move: a design system that hides its open questions is decoration, not documentation.")},o={render:()=>a({theme:"theme-arta",review:!0})+r("When something still needs verifying, the figure is <b>withheld rather than guessed</b>, and what has already cleared is named. This is an evidence path, never a judgement about the member.")},d={render:()=>a({theme:"theme-arta",loading:!0})+r("Skeleton at the real height so the layout never jumps, with an honest expectation instead of an indeterminate spinner.")};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => card({
    theme: 'theme-arta'
  }) + NOTE('<b>The number is a recommendation, not a promise</b> — “what your portfolio may support”, never “your limit is”. What it rests on is shown; how it is calculated is not invented.')
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => card({
    theme: 'theme-northstar'
  }) + NOTE('Same component, partner theme. Surfaces, type and radius change; the hedge in the language, the terms line and the explanation entry point do not.')
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,b,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => card({
    theme: 'theme-arta',
    explain: true
  }) + NOTE('<b>Where policy is undefined, the explanation says so.</b> Marking the model “illustrative — to be defined with Credit, Risk and Legal” is the honest move: a design system that hides its open questions is decoration, not documentation.')
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,k,S;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => card({
    theme: 'theme-arta',
    review: true
  }) + NOTE('When something still needs verifying, the figure is <b>withheld rather than guessed</b>, and what has already cleared is named. This is an evidence path, never a judgement about the member.')
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,z,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => card({
    theme: 'theme-arta',
    loading: true
  }) + NOTE('Skeleton at the real height so the layout never jumps, with an honest expectation instead of an indeterminate spinner.')
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const j=["ArtaDefault","NorthstarTheme","ExplanationOpen","AdditionalReview","LoadingDecision"];export{o as AdditionalReview,s as ArtaDefault,n as ExplanationOpen,d as LoadingDecision,i as NorthstarTheme,j as __namedExportsOrder,N as default};
