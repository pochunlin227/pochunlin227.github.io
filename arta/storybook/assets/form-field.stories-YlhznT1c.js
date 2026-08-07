const b={title:"02 Components/Form controls/Input"},e=({label:u,value:f="",placeholder:m="",help:r="",error:h=!1,disabled:s=!1,prefix:l=""})=>`
  <div class="arta-field${h?" arta-field--error":""}${s?" arta-field--disabled":""}">
    <label class="arta-field__label">${u}</label>
    <div style="position:relative">
      ${l?`<span style="position:absolute;left:var(--arta-cmp-input-px);top:50%;transform:translateY(-50%);color:var(--arta-sys-color-text-tertiary)">${l}</span>`:""}
      <input class="arta-field__input" style="width:100%;box-sizing:border-box;${l?"padding-left:calc(var(--arta-cmp-input-px) + 14px)":""}"
        value="${f}" placeholder="${m}" ${s?"disabled":""}/>
    </div>
    ${r?`<div class="arta-field__help">${r}</div>`:""}
  </div>`,a={render:()=>`
    <div class="sb-col">
      ${e({label:"Employer",placeholder:"Company name"})}
      ${e({label:"Annual income",value:"180,000",prefix:"$",help:"Used only for this application. Never shown in your profile."})}
      ${e({label:"Annual income",value:"18",prefix:"$",error:!0,help:"This looks below the minimum for the Arta Card. You can still apply — we may offer a different limit."})}
      ${e({label:"Nationality",value:"Verified at onboarding",disabled:!0})}
    </div>`},n={render:()=>`
    <div class="sb-col">
      <div class="sb-h">Income step — one question per screen, reassurance attached</div>
      ${e({label:"Annual income",value:"180,000",prefix:"$",help:"Used only for this application. Never shown in your profile."})}
      <label class="arta-consent">
        <input type="checkbox" checked />
        <span class="arta-consent__text">Let Arta consider my portfolio (<b>$412,390</b> with Arta) as part of my financial picture. This can support a higher limit and shares nothing new — Arta already custodies these assets.</span>
      </label>
    </div>`};var t,i,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-col">
      \${field({
    label: 'Employer',
    placeholder: 'Company name'
  })}
      \${field({
    label: 'Annual income',
    value: '180,000',
    prefix: '$',
    help: 'Used only for this application. Never shown in your profile.'
  })}
      \${field({
    label: 'Annual income',
    value: '18',
    prefix: '$',
    error: true,
    help: 'This looks below the minimum for the Arta Card. You can still apply — we may offer a different limit.'
  })}
      \${field({
    label: 'Nationality',
    value: 'Verified at onboarding',
    disabled: true
  })}
    </div>\`
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-col">
      <div class="sb-h">Income step — one question per screen, reassurance attached</div>
      \${field({
    label: 'Annual income',
    value: '180,000',
    prefix: '$',
    help: 'Used only for this application. Never shown in your profile.'
  })}
      <label class="arta-consent">
        <input type="checkbox" checked />
        <span class="arta-consent__text">Let Arta consider my portfolio (<b>$412,390</b> with Arta) as part of my financial picture. This can support a higher limit and shares nothing new — Arta already custodies these assets.</span>
      </label>
    </div>\`
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const v=["States","SensitiveMoment"];export{n as SensitiveMoment,a as States,v as __namedExportsOrder,b as default};
