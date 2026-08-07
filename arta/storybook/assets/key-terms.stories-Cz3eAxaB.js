const l={title:"03 Card components/Key Terms"},e=(n,o)=>`
  <div class="arta-keyterms__row">
    <span class="arta-keyterms__term">${n}</span>
    <span class="arta-keyterms__value">${o}</span>
  </div>`,a={render:()=>`
    <div class="sb-col" style="max-width:380px">
      <div class="arta-keyterms">
        <div class="arta-keyterms__title">Key terms — always visible</div>
        ${e("Purchase APR (variable)","21.99%")}
        ${e("Cash advance APR","26.99%")}
        ${e("Annual fee","$0 first year, then $195")}
        ${e("Foreign transaction fee","0%")}
        ${e("Late payment fee","Up to $40")}
        ${e("Grace period","25 days")}
        <div class="arta-keyterms__footnote">
          Rates as of July 2026, based on the Prime Rate. Your APR is set at decision.
          Full Cardmember Agreement and Schedule of Charges are available before you submit.
        </div>
      </div>
      <label class="arta-consent">
        <input type="checkbox" />
        <span class="arta-consent__text">I authorize Arta to obtain my credit report. <b>This is a hard inquiry</b> and may affect my credit score.</span>
      </label>
      <label class="arta-consent">
        <input type="checkbox" />
        <span class="arta-consent__text">The information I provided is true and complete. I have read the Key Terms and Cardmember Agreement.</span>
      </label>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px">
        Governance: this module's structure is <b>compliance-locked</b> for white-label partners —
        themable colors/type family, but rows can't be hidden, reordered, or shrunk below legal minimums.
        Consents always default unchecked.</p>
    </div>`};var t,r,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-col" style="max-width:380px">
      <div class="arta-keyterms">
        <div class="arta-keyterms__title">Key terms — always visible</div>
        \${row('Purchase APR (variable)', '21.99%')}
        \${row('Cash advance APR', '26.99%')}
        \${row('Annual fee', '$0 first year, then $195')}
        \${row('Foreign transaction fee', '0%')}
        \${row('Late payment fee', 'Up to $40')}
        \${row('Grace period', '25 days')}
        <div class="arta-keyterms__footnote">
          Rates as of July 2026, based on the Prime Rate. Your APR is set at decision.
          Full Cardmember Agreement and Schedule of Charges are available before you submit.
        </div>
      </div>
      <label class="arta-consent">
        <input type="checkbox" />
        <span class="arta-consent__text">I authorize Arta to obtain my credit report. <b>This is a hard inquiry</b> and may affect my credit score.</span>
      </label>
      <label class="arta-consent">
        <input type="checkbox" />
        <span class="arta-consent__text">The information I provided is true and complete. I have read the Key Terms and Cardmember Agreement.</span>
      </label>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px">
        Governance: this module's structure is <b>compliance-locked</b> for white-label partners —
        themable colors/type family, but rows can't be hidden, reordered, or shrunk below legal minimums.
        Consents always default unchecked.</p>
    </div>\`
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const i=["ArtaCard"];export{a as ArtaCard,i as __namedExportsOrder,l as default};
