const l={title:"02 Components/Feedback/Chips & indicators"},t={render:()=>`
    <div class="sb-h">Filter chips (Arta AI Recap: Today / Past Week / Past Month)</div>
    <div class="sb-row">
      <button class="arta-chip">Today</button>
      <button class="arta-chip arta-chip--selected">Past Week</button>
      <button class="arta-chip">Past Month</button>
    </div>
    <div class="sb-h" style="margin-top:32px">Page indicator (onboarding carousel)</div>
    <div class="arta-pagedots" style="justify-content:flex-start">
      <div class="arta-pagedots__dot"></div>
      <div class="arta-pagedots__dot arta-pagedots__dot--active"></div>
      <div class="arta-pagedots__dot"></div>
      <div class="arta-pagedots__dot"></div>
    </div>`},a={render:()=>`
    <div class="sb-h">Kicker + display (onboarding "WHAT YOU CAN EXPECT" pattern)</div>
    <div style="text-align:center;max-width:360px">
      <div style="font-size:var(--arta-sys-type-label-caps-size);font-weight:var(--arta-sys-type-label-caps-weight);letter-spacing:var(--arta-sys-type-label-caps-letter-spacing);text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);margin-bottom:var(--arta-sys-space-stack-sm)">What you can expect</div>
      <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-800)">Arta AI Copilots</div>
    </div>

    <div class="sb-h" style="margin-top:32px">Gradient display text (Arta AI Recap header)</div>
    <div class="arta-display-accent" style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height)">Your latest<br/>Recap</div>

    <div class="sb-h" style="margin-top:32px">AI voice color (research stream: sys.color.text.ai)</div>
    <p class="arta-ai-text" style="max-width:44ch;font-size:var(--arta-sys-type-body-size);line-height:var(--arta-sys-type-body-line-height)">
      Research companies that supply components and materials to identify key suppliers and partners.
      <span style="display:block;color:var(--arta-sys-color-text-tertiary);font-size:var(--arta-ref-font-size-200);margin-top:4px">3 Refs Analyzed · 25s</span></p>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
      In the real app, the AI's working voice renders in mint — distinct from member content (white) and
      system chrome (grey). The Card AI (repayment intelligence) should keep this convention: mint =
      "the AI is reasoning", never used for legal or balance figures.</p>`};var e,s,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Filter chips (Arta AI Recap: Today / Past Week / Past Month)</div>
    <div class="sb-row">
      <button class="arta-chip">Today</button>
      <button class="arta-chip arta-chip--selected">Past Week</button>
      <button class="arta-chip">Past Month</button>
    </div>
    <div class="sb-h" style="margin-top:32px">Page indicator (onboarding carousel)</div>
    <div class="arta-pagedots" style="justify-content:flex-start">
      <div class="arta-pagedots__dot"></div>
      <div class="arta-pagedots__dot arta-pagedots__dot--active"></div>
      <div class="arta-pagedots__dot"></div>
      <div class="arta-pagedots__dot"></div>
    </div>\`
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Kicker + display (onboarding "WHAT YOU CAN EXPECT" pattern)</div>
    <div style="text-align:center;max-width:360px">
      <div style="font-size:var(--arta-sys-type-label-caps-size);font-weight:var(--arta-sys-type-label-caps-weight);letter-spacing:var(--arta-sys-type-label-caps-letter-spacing);text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);margin-bottom:var(--arta-sys-space-stack-sm)">What you can expect</div>
      <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-800)">Arta AI Copilots</div>
    </div>

    <div class="sb-h" style="margin-top:32px">Gradient display text (Arta AI Recap header)</div>
    <div class="arta-display-accent" style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height)">Your latest<br/>Recap</div>

    <div class="sb-h" style="margin-top:32px">AI voice color (research stream: sys.color.text.ai)</div>
    <p class="arta-ai-text" style="max-width:44ch;font-size:var(--arta-sys-type-body-size);line-height:var(--arta-sys-type-body-line-height)">
      Research companies that supply components and materials to identify key suppliers and partners.
      <span style="display:block;color:var(--arta-sys-color-text-tertiary);font-size:var(--arta-ref-font-size-200);margin-top:4px">3 Refs Analyzed · 25s</span></p>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
      In the real app, the AI's working voice renders in mint — distinct from member content (white) and
      system chrome (grey). The Card AI (repayment intelligence) should keep this convention: mint =
      "the AI is reasoning", never used for legal or balance figures.</p>\`
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["FilterChips","AIVoice"];export{a as AIVoice,t as FilterChips,d as __namedExportsOrder,l as default};
