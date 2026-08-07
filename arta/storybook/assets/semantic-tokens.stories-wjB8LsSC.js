import{t as y}from"./tokens.flat-DQgVInkP.js";const u={title:"01 Foundations/Semantic tokens"},v=(r,e)=>`<div class="sb-row">${r.map(s=>`
  <div class="sb-swatch" style="width:210px">
    <div class="sb-swatch__chip" style="background:var(${s.cssVar})"></div>
    <div class="sb-swatch__meta">${s.path.replace(e,"")}<code>aliases ${s.value.replace(/[{}]/g,"")}</code></div>
  </div>`).join("")}</div>`,a={render:()=>`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Components never reference <code>blue-500</code>. They reference intent — <code>text.primary</code>,
        <code>surface.raised</code>, <code>action.primary</code>, <code>status.warning</code> — and intent
        resolves through the theme. This is what makes one <code>OfferCard</code> serve every brand.</p>
      ${["surface","text","action","stroke","status"].map(e=>{const s=y.sys.filter(o=>o.path.startsWith(`arta.sys.color.${e}.`));return`<div class="sb-h">arta · sys · color · ${e}</div>${v(s,"arta.sys.color.")}`}).join("")}`},t={render:()=>`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Financial semantics are kept separate from generic semantics — they exist only in the lending/card
        domain, and they are all <b>platform policy</b> 🔒: a partner may tune lightness for contrast, but the
        hue family is locked at build (warning stays amber, approved stays green, AI voice stays mint).</p>
      ${["credit","portfolio","payment","decision","disclosure","ai"].map(e=>{const s=y.sys.filter(o=>o.path.startsWith(`arta.sys.color.${e}.`));return`<div class="sb-h">arta · sys · color · ${e} 🔒</div>${v(s,`arta.sys.color.${e}.`)}`}).join("")}
      <div class="sb-h" style="margin-top:24px">In use</div>
      <div class="sb-col" style="max-width:430px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Recommended limit</span><b style="color:var(--arta-sys-color-credit-limit-recommended)">S$40,000</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">S$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Portfolio buffer</span><b style="color:var(--arta-sys-color-portfolio-buffer-healthy)">Healthy · 20%</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Payment</span><b style="color:var(--arta-sys-color-payment-upcoming)">Due Friday</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${["approved","pending","action-required","declined"].map(e=>`<span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-${e});border:1px solid var(--arta-sys-color-decision-${e});border-radius:999px;padding:5px 12px">${e.replace("-"," ")}</span>`).join("")}
        </div>
      </div>`};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const groups = ['surface', 'text', 'action', 'stroke', 'status'];
    return \`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Components never reference <code>blue-500</code>. They reference intent — <code>text.primary</code>,
        <code>surface.raised</code>, <code>action.primary</code>, <code>status.warning</code> — and intent
        resolves through the theme. This is what makes one <code>OfferCard</code> serve every brand.</p>
      \${groups.map(g => {
      const leaves = tokens.sys.filter(t => t.path.startsWith(\`arta.sys.color.\${g}.\`));
      return \`<div class="sb-h">arta · sys · color · \${g}</div>\${swatchRow(leaves, \`arta.sys.color.\`)}\`;
    }).join('')}\`;
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const groups = ['credit', 'portfolio', 'payment', 'decision', 'disclosure', 'ai'];
    return \`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Financial semantics are kept separate from generic semantics — they exist only in the lending/card
        domain, and they are all <b>platform policy</b> 🔒: a partner may tune lightness for contrast, but the
        hue family is locked at build (warning stays amber, approved stays green, AI voice stays mint).</p>
      \${groups.map(g => {
      const leaves = tokens.sys.filter(t => t.path.startsWith(\`arta.sys.color.\${g}.\`));
      return \`<div class="sb-h">arta · sys · color · \${g} 🔒</div>\${swatchRow(leaves, \`arta.sys.color.\${g}.\`)}\`;
    }).join('')}
      <div class="sb-h" style="margin-top:24px">In use</div>
      <div class="sb-col" style="max-width:430px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Recommended limit</span><b style="color:var(--arta-sys-color-credit-limit-recommended)">S$40,000</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">S$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Portfolio buffer</span><b style="color:var(--arta-sys-color-portfolio-buffer-healthy)">Healthy · 20%</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Payment</span><b style="color:var(--arta-sys-color-payment-upcoming)">Due Friday</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          \${['approved', 'pending', 'action-required', 'declined'].map(d => \`<span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-\${d});border:1px solid var(--arta-sys-color-decision-\${d});border-radius:999px;padding:5px 12px">\${d.replace('-', ' ')}</span>\`).join('')}
        </div>
      </div>\`;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["GenericSemantics","CardDomainSemantics"];export{t as CardDomainSemantics,a as GenericSemantics,f as __namedExportsOrder,u as default};
