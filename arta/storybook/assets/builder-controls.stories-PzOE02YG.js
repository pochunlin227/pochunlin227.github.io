import{s,d as i}from"./helpers-BwuIyHmI.js";const o={title:"07 Product Reference/Forms & Selection/Builder Controls",parameters:i(["Round outline icon buttons under each holding weight in the Micro Index builder (lock / edit / remove).","","**States** default · hover (brightens) · active/locked (inverse fill) · disabled (`opacity.disabled` — e.g. the last remaining holding can’t be removed). **Tokens** `.arta-ctl` on `sys.size.control-compact`."].join(`
`))},t={render:()=>`
    <div class="sb-h">lock (active) / edit / remove / disabled</div>
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">15.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl active" title="Locked">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" title="Remove">✕</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">21.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl" title="Lock">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" disabled title="Remove (disabled)">✕</button>
        </div>
      </div>
    </div>`,parameters:s(`<div style="display:flex;gap:8px">
  <button class="arta-ctl active" title="Locked">🔒</button>
  <button class="arta-ctl" title="Edit">✎</button>
  <button class="arta-ctl" disabled title="Remove">✕</button>
</div>`)};var e,a,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">lock (active) / edit / remove / disabled</div>
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">15.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl active" title="Locked">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" title="Remove">✕</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">21.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl" title="Lock">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" disabled title="Remove (disabled)">✕</button>
        </div>
      </div>
    </div>\`,
  parameters: src(\`<div style="display:flex;gap:8px">
  <button class="arta-ctl active" title="Locked">🔒</button>
  <button class="arta-ctl" title="Edit">✎</button>
  <button class="arta-ctl" disabled title="Remove">✕</button>
</div>\`)
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const r=["States"];export{t as States,r as __namedExportsOrder,o as default};
