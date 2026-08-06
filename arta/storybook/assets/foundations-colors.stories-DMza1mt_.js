import{t as n}from"./tokens.flat-BbcjGX1a.js";const f={title:"Foundations/Color"},g=a=>`
  <div class="sb-swatch">
    <div class="sb-swatch__chip" style="background: var(${a.cssVar})"></div>
    <div class="sb-swatch__meta">${a.path.split(".").slice(-2).join(" ")}<code>${a.cssVar}</code></div>
  </div>`,$=(a,s)=>`<div class="sb-row">${a.filter(o=>o.path.startsWith(s)).map(g).join("")}</div>`,r={render:()=>["neutral","sky","violet","green","amber","red","pink","peach","lavender","mint"].map(s=>`<div class="sb-h">arta · ref · color · ${s}</div>${$(n.ref,`arta.ref.color.${s}`)}`).join("")},t={render:()=>["surface","text","action","stroke","status"].map(s=>{const b=n.sys.filter(e=>e.path.startsWith(`arta.sys.color.${s}`)).map(e=>`
          <div class="sb-swatch" style="width:200px">
            <div class="sb-swatch__chip" style="background: var(${e.cssVar})"></div>
            <div class="sb-swatch__meta">${e.path.replace("arta.sys.color.","")}
              ${e.governance?'<span title="'+e.governance+'"> 🔒</span>':""}
              <code>aliases ${e.value.replace(/[{}]/g,"")}</code>
            </div>
          </div>`).join("");return`<div class="sb-h">arta · sys · color · ${s}</div><div class="sb-row">${b}</div>`}).join("")},c={render:()=>`<div class="sb-h">arta · sys · gradient</div><div class="sb-row">${n.sys.filter(s=>s.path.startsWith("arta.sys.gradient")).map(s=>`
      <div class="sb-swatch" style="width:220px">
        <div class="sb-swatch__chip" style="height:120px;background: var(${s.cssVar})"></div>
        <div class="sb-swatch__meta">${s.path.replace("arta.sys.gradient.","")}<code>${s.cssVar}</code></div>
      </div>`).join("")}</div>
      <p style="max-width:52ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
      Gradients are reserved for <em>brand moments</em> (entry, card art, approval) — never as form backgrounds.
      This restraint is a lending-specific rule layered onto Arta's aesthetic.</p>`};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{\n  render: () => {\n    const ladders = ['neutral', 'sky', 'violet', 'green', 'amber', 'red', 'pink', 'peach', 'lavender', 'mint'];\n    return ladders.map(name => `<div class=\"sb-h\">arta · ref · color · ${name}</div>${ladder(tokens.ref, `arta.ref.color.${name}`)}`).join('');\n  }\n}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var v,p,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const groups = ['surface', 'text', 'action', 'stroke', 'status'];
    return groups.map(g => {
      const leaves = tokens.sys.filter(t => t.path.startsWith(\`arta.sys.color.\${g}\`));
      const rows = leaves.map(t => \`
          <div class="sb-swatch" style="width:200px">
            <div class="sb-swatch__chip" style="background: var(\${t.cssVar})"></div>
            <div class="sb-swatch__meta">\${t.path.replace('arta.sys.color.', '')}
              \${t.governance ? '<span title="' + t.governance + '"> 🔒</span>' : ''}
              <code>aliases \${t.value.replace(/[{}]/g, '')}</code>
            </div>
          </div>\`).join('');
      return \`<div class="sb-h">arta · sys · color · \${g}</div><div class="sb-row">\${rows}</div>\`;
    }).join('');
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,y;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const leaves = tokens.sys.filter(t => t.path.startsWith('arta.sys.gradient'));
    return \`<div class="sb-h">arta · sys · gradient</div><div class="sb-row">\${leaves.map(t => \`
      <div class="sb-swatch" style="width:220px">
        <div class="sb-swatch__chip" style="height:120px;background: var(\${t.cssVar})"></div>
        <div class="sb-swatch__meta">\${t.path.replace('arta.sys.gradient.', '')}<code>\${t.cssVar}</code></div>
      </div>\`).join('')}</div>
      <p style="max-width:52ch;color:var(--arta-sys-color-text-secondary);font-size:13px">
      Gradients are reserved for <em>brand moments</em> (entry, card art, approval) — never as form backgrounds.
      This restraint is a lending-specific rule layered onto Arta's aesthetic.</p>\`;
  }
}`,...(y=(u=c.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const x=["Reference","System","Gradients"];export{c as Gradients,r as Reference,t as System,x as __namedExportsOrder,f as default};
