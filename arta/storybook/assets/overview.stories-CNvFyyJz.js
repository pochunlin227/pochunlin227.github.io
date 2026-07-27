const r={title:"Overview/Token Architecture"},e={render:()=>`
    <div style="max-width:72ch">
      <h1 style="font-family:var(--arta-sys-type-title-family);font-weight:var(--arta-sys-type-title-weight);font-size:var(--arta-sys-type-title-size)">ARTA DS — token architecture</h1>
      <p style="color:var(--arta-sys-color-text-secondary)">
        Naming: <code>[namespace] · [tier] · [role]</code> → <code>arta.ref.color.sky.40</code>,
        <code>arta.sys.color.action.primary</code>, <code>arta.cmp.btn.primary.bg</code>.
        CSS output: <code>--arta-ref-color-sky-40</code> …</p>

      <div class="sb-h">The three tiers</div>
      <div class="arta-keyterms">
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>ref</b> — raw values</span><span class="arta-keyterms__term" style="text-align:right">ladders 10–90, 4px grid, weights &amp; sizes. No opinions.</span></div>
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>sys</b> — design intent</span><span class="arta-keyterms__term" style="text-align:right">aliases ref only. The white-label theming surface.</span></div>
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>cmp</b> — component contracts</span><span class="arta-keyterms__term" style="text-align:right">aliases sys/ref only. Hardcoding fails the build.</span></div>
      </div>

      <div class="sb-h">Why this shape</div>
      <p style="color:var(--arta-sys-color-text-secondary)">
        ① The existing wealth app, ② new lending components (Key Terms, Review Card, decision states),
        and ③ white-label partners all consume the same pipeline. A partner is a <b>sys-level override file</b>
        — Meridian ships zero component code. Compliance-critical tokens carry a 🔒
        <code>governance</code> flag; the validator rejects partner themes that override locked minimums.</p>

      <div class="sb-h">Flow of a color</div>
      <p style="color:var(--arta-sys-color-text-secondary)"><code>
        #a8cdf0 → arta.ref.color.sky.40 → arta.sys.color.action.primary → arta.cmp.btn.primary.bg → .arta-btn
      </code></p>
    </div>`};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:72ch">
      <h1 style="font-family:var(--arta-sys-type-title-family);font-weight:var(--arta-sys-type-title-weight);font-size:var(--arta-sys-type-title-size)">ARTA DS — token architecture</h1>
      <p style="color:var(--arta-sys-color-text-secondary)">
        Naming: <code>[namespace] · [tier] · [role]</code> → <code>arta.ref.color.sky.40</code>,
        <code>arta.sys.color.action.primary</code>, <code>arta.cmp.btn.primary.bg</code>.
        CSS output: <code>--arta-ref-color-sky-40</code> …</p>

      <div class="sb-h">The three tiers</div>
      <div class="arta-keyterms">
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>ref</b> — raw values</span><span class="arta-keyterms__term" style="text-align:right">ladders 10–90, 4px grid, weights &amp; sizes. No opinions.</span></div>
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>sys</b> — design intent</span><span class="arta-keyterms__term" style="text-align:right">aliases ref only. The white-label theming surface.</span></div>
        <div class="arta-keyterms__row"><span class="arta-keyterms__term"><b>cmp</b> — component contracts</span><span class="arta-keyterms__term" style="text-align:right">aliases sys/ref only. Hardcoding fails the build.</span></div>
      </div>

      <div class="sb-h">Why this shape</div>
      <p style="color:var(--arta-sys-color-text-secondary)">
        ① The existing wealth app, ② new lending components (Key Terms, Review Card, decision states),
        and ③ white-label partners all consume the same pipeline. A partner is a <b>sys-level override file</b>
        — Meridian ships zero component code. Compliance-critical tokens carry a 🔒
        <code>governance</code> flag; the validator rejects partner themes that override locked minimums.</p>

      <div class="sb-h">Flow of a color</div>
      <p style="color:var(--arta-sys-color-text-secondary)"><code>
        #a8cdf0 → arta.ref.color.sky.40 → arta.sys.color.action.primary → arta.cmp.btn.primary.bg → .arta-btn
      </code></p>
    </div>\`
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const o=["HowItWorks"];export{e as HowItWorks,o as __namedExportsOrder,r as default};
