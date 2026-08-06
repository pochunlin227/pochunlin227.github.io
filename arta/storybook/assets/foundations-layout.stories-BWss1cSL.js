import{t as c}from"./tokens.flat-BbcjGX1a.js";const v={title:"Foundations/Layout"},e={render:()=>'<div class="sb-h">arta · ref · space (4px grid)</div>'+c.ref.filter(r=>r.path.startsWith("arta.ref.space.")).map(r=>`
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
        <code style="width:160px;font-size:11px;color:var(--arta-sys-color-text-secondary)">${r.cssVar}</code>
        <div style="height:16px;width:var(${r.cssVar});background:var(--arta-sys-color-action-primary);border-radius:2px"></div>
        <span style="font-size:11px;color:var(--arta-sys-color-text-tertiary)">${r.value}</span>
      </div>`).join("")},s={render:()=>'<div class="sb-h">arta · ref · radius</div><div class="sb-row">'+c.ref.filter(r=>r.path.startsWith("arta.ref.radius.")).map(r=>`
      <div style="text-align:center">
        <div style="width:96px;height:96px;border-radius:var(${r.cssVar});background:var(--arta-sys-color-surface-form);border:1px solid var(--arta-sys-color-stroke-strong)"></div>
        <code style="font-size:10px;color:var(--arta-sys-color-text-tertiary)">${r.path.split(".").pop()} · ${r.value}</code>
      </div>`).join("")+`</div>
      <div class="sb-h">arta · sys · radius (semantic roles)</div>
      <p style="max-width:52ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
        Components never reference ref radii directly — they use <code>sys.radius.surface / control / action / media</code>.
        Meridian retheming flattens all of these to sharp corners with one override.</p>`};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const leaves = tokens.ref.filter(t => t.path.startsWith('arta.ref.space.'));
    return \`<div class="sb-h">arta · ref · space (4px grid)</div>\` + leaves.map(t => \`
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
        <code style="width:160px;font-size:11px;color:var(--arta-sys-color-text-secondary)">\${t.cssVar}</code>
        <div style="height:16px;width:var(\${t.cssVar});background:var(--arta-sys-color-action-primary);border-radius:2px"></div>
        <span style="font-size:11px;color:var(--arta-sys-color-text-tertiary)">\${t.value}</span>
      </div>\`).join('');
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,n,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const leaves = tokens.ref.filter(t => t.path.startsWith('arta.ref.radius.'));
    return \`<div class="sb-h">arta · ref · radius</div><div class="sb-row">\` + leaves.map(t => \`
      <div style="text-align:center">
        <div style="width:96px;height:96px;border-radius:var(\${t.cssVar});background:var(--arta-sys-color-surface-form);border:1px solid var(--arta-sys-color-stroke-strong)"></div>
        <code style="font-size:10px;color:var(--arta-sys-color-text-tertiary)">\${t.path.split('.').pop()} · \${t.value}</code>
      </div>\`).join('') + \`</div>
      <div class="sb-h">arta · sys · radius (semantic roles)</div>
      <p style="max-width:52ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
        Components never reference ref radii directly — they use <code>sys.radius.surface / control / action / media</code>.
        Meridian retheming flattens all of these to sharp corners with one override.</p>\`;
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const y=["Spacing","Radius"];export{s as Radius,e as Spacing,y as __namedExportsOrder,v as default};
