const c={title:"03 Lending Patterns/Verified data confirmation"},e=(r,n,o=!0)=>`
  <div class="arta-review">
    <div>
      <div class="arta-review__label">${r}</div>
      <div class="arta-review__value">${n}</div>
      ${o?'<div class="arta-review__verified">✓ Verified at onboarding</div>':""}
    </div>
    <button class="arta-review__edit">Edit</button>
  </div>`,a={render:()=>`
    <div class="sb-col">
      <div class="sb-h">Chapter 1 — identity as review cards, not inputs</div>
      ${e("Legal name","Lin Po-Chun")}
      ${e("Date of birth","March 14, 1991")}
      ${e("Nationality &amp; tax residence","Taiwan · United States",!0)}
      ${e("Home address","2847 Fillmore St, San Francisco, CA",!0)}
      <button class="arta-btn" style="margin-top:var(--arta-sys-space-stack-sm)">This is all still correct</button>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:52ch">
        The core Flow-1 pattern: Arta already KYC'd this member, so the application <em>confirms</em>
        instead of <em>collecting</em>. Editing address or tax residence flags possible re-verification
        inline without blocking submission.</p>
    </div>`};var t,i,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-col">
      <div class="sb-h">Chapter 1 — identity as review cards, not inputs</div>
      \${card('Legal name', 'Lin Po-Chun')}
      \${card('Date of birth', 'March 14, 1991')}
      \${card('Nationality &amp; tax residence', 'Taiwan · United States', true)}
      \${card('Home address', '2847 Fillmore St, San Francisco, CA', true)}
      <button class="arta-btn" style="margin-top:var(--arta-sys-space-stack-sm)">This is all still correct</button>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:52ch">
        The core Flow-1 pattern: Arta already KYC'd this member, so the application <em>confirms</em>
        instead of <em>collecting</em>. Editing address or tax residence flags possible re-verification
        inline without blocking submission.</p>
    </div>\`
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const d=["ConfirmDontCollect"];export{a as ConfirmDontCollect,d as __namedExportsOrder,c as default};
