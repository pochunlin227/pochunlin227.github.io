const y={title:"01 Foundations/Typography"},e=(n,a,o,l="")=>`
  <div style="margin-bottom: var(--arta-sys-space-stack-lg); border-bottom:1px solid var(--arta-sys-color-stroke-subtle); padding-bottom: var(--arta-sys-space-stack-md)">
    <div class="sb-h">arta · sys · type · ${n}${l}</div>
    <div style="
      font-family: var(${a}-family);
      font-weight: var(${a}-weight);
      font-size: var(${a}-size);
      line-height: var(${a}-line-height);
      letter-spacing: var(${a}-letter-spacing);
    ">${o}</div>
  </div>`,t={render:()=>`
    <p style="max-width:64ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-bottom:24px">
      Brand faces (verified from artafinance.com CSS): <b>Rotunda</b> (self-hosted, thin–black) is the UI
      and product-display face; <b>Ofelia Display 500</b> (Adobe Typekit) is the marketing headline face,
      set with positive tracking at 130% leading. Both are licensed — this environment renders geometric
      fallbacks, tokens carry the real stacks.</p>
    ${e("marketing-display","--arta-sys-type-marketing-display","Wealth, worn lightly"," · Ofelia Display 500 — brand moments only")}
    ${e("display","--arta-sys-type-display","Your Arta Card"," · Rotunda — product screens")}
    ${e("title","--arta-sys-type-title","Confirm your details")}
    ${e("body","--arta-sys-type-body","Arta already verified most of this when you became a member. Review it, update anything that changed, and you’re done.")}
    ${e("label-caps","--arta-sys-type-label-caps",'<span style="text-transform:uppercase">Annual income</span>')}
    ${e("legal","--arta-sys-type-legal","By submitting, you authorize Arta Financial Services to obtain your credit report from consumer reporting agencies. This is a hard inquiry and may affect your credit score."," · 🔒 size &amp; line-height are compliance-locked minimums")}
    ${e("numeral","--arta-sys-type-numeral","$25,000")}
  `};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:64ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-bottom:24px">
      Brand faces (verified from artafinance.com CSS): <b>Rotunda</b> (self-hosted, thin–black) is the UI
      and product-display face; <b>Ofelia Display 500</b> (Adobe Typekit) is the marketing headline face,
      set with positive tracking at 130% leading. Both are licensed — this environment renders geometric
      fallbacks, tokens carry the real stacks.</p>
    \${spec('marketing-display', '--arta-sys-type-marketing-display', 'Wealth, worn lightly', ' · Ofelia Display 500 — brand moments only')}
    \${spec('display', '--arta-sys-type-display', 'Your Arta Card', ' · Rotunda — product screens')}
    \${spec('title', '--arta-sys-type-title', 'Confirm your details')}
    \${spec('body', '--arta-sys-type-body', 'Arta already verified most of this when you became a member. Review it, update anything that changed, and you’re done.')}
    \${spec('label-caps', '--arta-sys-type-label-caps', '<span style="text-transform:uppercase">Annual income</span>')}
    \${spec('legal', '--arta-sys-type-legal', 'By submitting, you authorize Arta Financial Services to obtain your credit report from consumer reporting agencies. This is a hard inquiry and may affect your credit score.', ' · 🔒 size &amp; line-height are compliance-locked minimums')}
    \${spec('numeral', '--arta-sys-type-numeral', '$25,000')}
  \`
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const c=["TextStyles"];export{t as TextStyles,c as __namedExportsOrder,y as default};
