const n={title:"Patterns/White-Label"},a=(i,l)=>`
  <div class="${i}" style="flex:1;min-width:340px;padding:var(--arta-sys-space-stack-lg);background:var(--arta-sys-color-surface-app);color:var(--arta-sys-color-text-primary);border-radius:12px;font-family:var(--arta-sys-type-body-family)">
    <div class="sb-h" style="margin-top:0">${l}</div>
    <div style="height:120px;border-radius:var(--arta-sys-radius-media);background:var(--arta-sys-gradient-card-art-1);margin-bottom:var(--arta-sys-space-stack-md)"></div>
    <div class="arta-field" style="margin-bottom:var(--arta-sys-space-stack-md)">
      <label class="arta-field__label">Annual income</label>
      <input class="arta-field__input" style="width:100%;box-sizing:border-box" value="$180,000"/>
    </div>
    <div class="arta-keyterms" style="margin-bottom:var(--arta-sys-space-stack-md)">
      <div class="arta-keyterms__title">Key terms — always visible</div>
      <div class="arta-keyterms__row"><span class="arta-keyterms__term">Purchase APR</span><span class="arta-keyterms__value">21.99%</span></div>
      <div class="arta-keyterms__row"><span class="arta-keyterms__term">Annual fee</span><span class="arta-keyterms__value">$195</span></div>
    </div>
    <button class="arta-btn" style="width:100%">Submit application</button>
  </div>`,e={render:()=>`
    <div style="display:flex;gap:24px;flex-wrap:wrap">
      ${a("theme-arta","Arta — theme #1")}
      ${a("theme-meridian","Meridian Securities — partner theme")}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:64ch;margin-top:24px">
      Identical DOM, identical components. The partner theme overrides <b>sys tokens only</b>
      (surfaces, text, action colors, type family, radius, gradients). The flow skeleton, Key Terms
      structure, unchecked consents, focus visibility, and legal type minimums are platform-fixed —
      the build pipeline rejects a theme that tries to touch them.</p>`};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div style="display:flex;gap:24px;flex-wrap:wrap">
      \${sample('theme-arta', 'Arta — theme #1')}
      \${sample('theme-meridian', 'Meridian Securities — partner theme')}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:64ch;margin-top:24px">
      Identical DOM, identical components. The partner theme overrides <b>sys tokens only</b>
      (surfaces, text, action colors, type family, radius, gradients). The flow skeleton, Key Terms
      structure, unchecked consents, focus visibility, and legal type minimums are platform-fixed —
      the build pipeline rejects a theme that tries to touch them.</p>\`
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const o=["SideBySide"];export{e as SideBySide,o as __namedExportsOrder,n as default};
