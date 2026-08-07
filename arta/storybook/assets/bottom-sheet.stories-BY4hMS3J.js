const s={title:"02 Components/Summary surfaces/Bottom Sheet"},e={render:()=>`
    <div style="max-width:400px;background:var(--arta-sys-gradient-acquisition);padding-top:var(--arta-sys-space-section-gap);border-radius:var(--arta-sys-radius-media);overflow:hidden">
      <div class="arta-sheet">
        <div class="arta-sheet__handle"></div>
        <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-800);line-height:var(--arta-sys-type-display-line-height);margin-bottom:var(--arta-sys-space-stack-lg)">Accredited Investor Declaration and Opt-In</div>
        <p style="font-weight:var(--arta-ref-font-weight-semibold);font-size:var(--arta-sys-type-body-size);margin:0 0 var(--arta-sys-space-stack-sm)">Confirm Your Accredited Investor Status</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:var(--arta-sys-type-body-size);line-height:var(--arta-sys-type-body-line-height)">
          To access the full range of investment opportunities on Arta, including private equity and
          hedge funds, MAS regulations require you to qualify as an Accredited Investor.
          You can review the complete legal terms in the <a class="arta-link" href="#">Accredited Investor Declaration and Opt-In Form</a>.</p>
        <div style="height:64px"></div>
        <button class="arta-sheet__scrollfab" aria-label="Scroll to read more">↓</button>
        <button class="arta-btn arta-btn--inverse" style="width:100%">Agree &amp; Continue</button>
      </div>
    </div>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:16px">
      Arta's existing legal-disclosure container: near-black sheet over the gradient, drag handle,
      light display title, <b>scroll-to-read FAB</b>, inverse-pill confirm. The Arta Card's full
      Schedule of Charges / Cardmember Agreement should reuse exactly this pattern — the scroll FAB
      doubles as a scroll-completion affordance before enabling "Agree".</p>`};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:400px;background:var(--arta-sys-gradient-acquisition);padding-top:var(--arta-sys-space-section-gap);border-radius:var(--arta-sys-radius-media);overflow:hidden">
      <div class="arta-sheet">
        <div class="arta-sheet__handle"></div>
        <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-800);line-height:var(--arta-sys-type-display-line-height);margin-bottom:var(--arta-sys-space-stack-lg)">Accredited Investor Declaration and Opt-In</div>
        <p style="font-weight:var(--arta-ref-font-weight-semibold);font-size:var(--arta-sys-type-body-size);margin:0 0 var(--arta-sys-space-stack-sm)">Confirm Your Accredited Investor Status</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:var(--arta-sys-type-body-size);line-height:var(--arta-sys-type-body-line-height)">
          To access the full range of investment opportunities on Arta, including private equity and
          hedge funds, MAS regulations require you to qualify as an Accredited Investor.
          You can review the complete legal terms in the <a class="arta-link" href="#">Accredited Investor Declaration and Opt-In Form</a>.</p>
        <div style="height:64px"></div>
        <button class="arta-sheet__scrollfab" aria-label="Scroll to read more">↓</button>
        <button class="arta-btn arta-btn--inverse" style="width:100%">Agree &amp; Continue</button>
      </div>
    </div>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:16px">
      Arta's existing legal-disclosure container: near-black sheet over the gradient, drag handle,
      light display title, <b>scroll-to-read FAB</b>, inverse-pill confirm. The Arta Card's full
      Schedule of Charges / Cardmember Agreement should reuse exactly this pattern — the scroll FAB
      doubles as a scroll-completion affordance before enabling "Agree".</p>\`
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const i=["LegalSheet"];export{e as LegalSheet,i as __namedExportsOrder,s as default};
