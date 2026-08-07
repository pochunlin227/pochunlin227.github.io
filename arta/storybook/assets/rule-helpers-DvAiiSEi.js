const c=t=>({docs:{description:{component:t}}}),a=t=>`<div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);margin:26px 0 10px">${t}</div>`,e=(t,s)=>`<div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);${s?`border-left:3px solid ${s};`:""}border-radius:var(--arta-sys-radius-surface);padding:14px 16px">${t}</div>`,v=({choose:t,encoding:s,states:i,tokens:l,governance:d,responsive:p,anatomy:y})=>({name:"Rules",render:()=>`
    <div style="max-width:900px;font-family:var(--arta-sys-type-body-family);color:var(--arta-sys-color-text-primary)">

      ${y?a("Anatomy")+e(`<p style="font-size:13.5px;line-height:1.7;color:var(--arta-sys-color-text-secondary);margin:0">${y}</p>`):""}

      ${t?a("Choosing the variant")+`<div style="display:flex;flex-direction:column;gap:8px">${t.map(([r,o,n])=>e(`
        <div style="font-size:14px;font-weight:600;margin-bottom:4px">${r}</div>
        <div style="font-size:12.5px;color:var(--arta-sys-color-credit-limit-recommended);margin-bottom:6px">${o}</div>
        <div style="font-size:12.5px;line-height:1.6;color:var(--arta-sys-color-text-secondary)">${n}</div>`)).join("")}</div>`:""}

      ${s?a("Rules the family holds")+`<div style="display:flex;flex-direction:column;gap:8px">${s.map(r=>e(`<div style="font-size:13px;line-height:1.65;color:var(--arta-sys-color-text-secondary)">${r}</div>`)).join("")}</div>`:""}

      ${i?a("States every variant must have")+`<div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden">${i.map(([r,o])=>`<div style="display:flex;gap:16px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
          <b style="flex:0 0 130px;font-size:13px">${r}</b>
          <span style="flex:1;font-size:12.5px;line-height:1.6;color:var(--arta-sys-color-text-secondary)">${o}</span></div>`).join("")}</div>`:""}

      ${d?a("What a partner may change")+`<div style="display:flex;gap:12px;flex-wrap:wrap">${d.map(([r,o])=>`<div style="flex:1;min-width:260px">${e(`<div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${r==="Protected"?"var(--arta-sys-color-status-danger)":"var(--arta-sys-color-status-positive)"};margin-bottom:6px">${r}</div>
             <div style="font-size:12.5px;line-height:1.65;color:var(--arta-sys-color-text-secondary)">${o}</div>`,r==="Protected"?"var(--arta-sys-color-status-danger)":"var(--arta-sys-color-status-positive)")}</div>`).join("")}</div>`:""}

      ${l?a("Tokens")+e(`<div style="font-size:12.5px;line-height:1.8;color:var(--arta-sys-color-text-secondary)">${l.replace(/`([^`]+)`/g,'<code style="color:var(--arta-sys-color-text-link)">$1</code>')}</div>`):""}

      ${p?a("Responsive")+e(`<div style="font-size:12.5px;line-height:1.7;color:var(--arta-sys-color-text-secondary)">${p}</div>`):""}
    </div>`});export{c as a,v as r};
