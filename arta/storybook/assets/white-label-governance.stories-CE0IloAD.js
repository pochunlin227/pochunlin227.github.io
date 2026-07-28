import{t as f}from"./tokens.flat-CkyFSkcK.js";const z={title:"Patterns/White-Label Governance"},w=[{n:"1",name:"Arta platform core",who:"Not changeable by partners",tone:"var(--arta-sys-color-status-danger)",items:["Security & authentication","KYC/AML data model","Credit decisioning integration","Application status model","Disclosure hierarchy","Required consent logging","Accessibility requirements","AI guardrails, source & audit trail","Error / pending / declined patterns"]},{n:"2",name:"Product configuration",who:"Contract + product settings, governed",tone:"var(--arta-sys-color-status-warning)",items:["Eligibility criteria","Rates & fees","Credit-limit ranges","Rewards rules","Settlement options","Servicing SLA","Market-specific required disclosures"]},{n:"3",name:"Partner expression",who:"Partner-controlled",tone:"var(--arta-sys-color-status-positive)",items:["Logo & brand name","Card artwork","Brand palette within contrast limits","Entry point","Marketing copy & benefits","Support channel","Illustration & photography","Some typography & icon expression"]}],t={render:()=>`
    <div style="max-width:960px">
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label is not a re-skin — it is a <b>governed configuration model</b>. Three layers, three owners,
        three change processes. The token pipeline enforces the boundary mechanically: Layer 1 semantics are
        locked (see the Governance-in-CI story), Layer 2 lives in product config (data, not design tokens),
        Layer 3 is a partner theme file.</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">
        ${w.map(e=>`
          <div style="flex:1;min-width:260px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid ${e.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0">Layer ${e.n} — ${e.name}</div>
            <div style="font-size:12px;color:${e.tone};margin-bottom:10px">${e.who}</div>
            ${e.items.map(r=>`<div style="font-size:13px;color:var(--arta-sys-color-text-secondary);padding:4px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">${r}</div>`).join("")}
          </div>`).join("")}
      </div>
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        Mapping to tokens: <code>core.semantic.*</code> → the flagged sys groups (status / credit / decision /
        disclosure / ai) · <code>product.config.*</code> → per-program data (APR range, limit range, rewards
        rule) consumed by screens, not themable · <code>partner.brand.*</code> → the partner's sys-override
        theme file (Meridian, Northstar).</p>
    </div>`},o={render:()=>`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Lending needs semantics Arta never had. All of these are <b>core governance tier</b> 🔒 — a partner may
        tune lightness for contrast on its surfaces, but the hue family is locked: warning stays amber,
        approved stays green, AI voice stays mint. Screens reference these, never raw status colors.</p>
      ${["credit","decision","disclosure","ai"].map(r=>{const s=f.sys.filter(a=>a.path.startsWith(`arta.sys.color.${r}.`));return`<div class="sb-h">arta · sys · color · ${r} 🔒</div><div class="sb-row">${s.map(a=>`
          <div class="sb-swatch" style="width:210px">
            <div class="sb-swatch__chip" style="background:var(${a.cssVar})"></div>
            <div class="sb-swatch__meta">${a.path.replace(`arta.sys.color.${r}.`,`${r}.`)}<code>aliases ${a.value.replace(/[{}]/g,"")}</code></div>
          </div>`).join("")}</div>`}).join("")}
      <div class="sb-h" style="margin-top:24px">Usage examples</div>
      <div class="sb-col" style="max-width:420px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Statement balance</span><b style="color:var(--arta-sys-color-credit-balance-current)">$8,420.19</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Interest if you pay minimum</span><b style="color:var(--arta-sys-color-credit-interest-warning)">−$154 / cycle</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-approved);border:1px solid var(--arta-sys-color-decision-approved);border-radius:999px;padding:5px 12px">Approved</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-pending);border:1px solid var(--arta-sys-color-decision-pending);border-radius:999px;padding:5px 12px">Pending</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:5px 12px">Action required</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-declined);border:1px solid var(--arta-sys-color-decision-declined);border-radius:999px;padding:5px 12px">Declined</span>
        </div>
        <p style="font-size:13px;line-height:1.6;margin:0"><span style="color:var(--arta-sys-color-text-ai)">Paying in full saves you $154 this cycle.</span><br/>
        <span style="color:var(--arta-sys-color-ai-source);font-size:11.5px">Sources: statement 07/30 · Arta Cash rate 4.1% · as of today, 9:41 AM</span></p>
      </div>`},n={render:()=>`
    <div style="max-width:74ch">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        The governance line is enforced by the token build, not by review vigilance. A partner theme that
        re-points a core semantic at its brand palette fails CI with an explanation:</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:16px;font-size:12px;line-height:1.7;overflow-x:auto;color:var(--arta-sys-color-text-secondary)">$ node scripts/build-tokens.mjs

Token validation failed:
  ✗ [northstar] GOVERNANCE: arta.sys.color.status.warning is core-semantic —
    overrides must alias arta.ref.color.* (got "{northstar.ref.color.polar.30}")</pre>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Rules the validator holds today: ① core semantics (status / credit / decision / disclosure / ai) must
        alias the platform ref palette and keep their hue family — warning can lighten, it cannot become brand
        pink; ② legal type minimums cannot shrink; ③ sys must alias ref, cmp may never hardcode. "No" to an
        unsafe partner request is structural, not political.</p>
    </div>`},k=[["Application Stepper","Long flows, save & resume","in prototype"],["Verified Data Row","Displays KYC-verified data (confirm, don’t collect)","built"],["Sensitive Field","Income, identity, tax data — reassurance attached","built"],["Evidence Upload","Proof documents + processing state","proposed"],["Money Input","Income, limits, payment amounts","built"],["Credit Limit Selector","Requested limit + constraint explanation","in prototype"],["Key Terms Card","Headline rates & fees, never collapsed","built"],["Disclosure Viewer","Long legal documents (bottom sheet + scroll-to-read)","built"],["Decision Status","Approved / pending / declined patterns","built"],["Repayment Scenario Card","Payment options & their cost, shown as math","in prototype"],["AI Answer with Sources","Source, timestamp, limitations on every AI answer","proposed"],["Human Handoff","AI → specialist escalation, context carried over","proposed"]],i={render:()=>`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        ${k.map(([e,r,s])=>`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 190px;font-size:13.5px">${e}</b>
            <span style="flex:1;font-size:12.5px;color:var(--arta-sys-color-text-secondary)">${r}</span>
            <span style="font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:${s==="built"?"var(--arta-sys-color-status-positive)":s==="in prototype"?"var(--arta-sys-color-status-info)":"var(--arta-sys-color-text-tertiary)"}">${s}</span>
          </div>`).join("")}
      </div>
    </div>`};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:960px">
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label is not a re-skin — it is a <b>governed configuration model</b>. Three layers, three owners,
        three change processes. The token pipeline enforces the boundary mechanically: Layer 1 semantics are
        locked (see the Governance-in-CI story), Layer 2 lives in product config (data, not design tokens),
        Layer 3 is a partner theme file.</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">
        \${LAYERS.map(l => \`
          <div style="flex:1;min-width:260px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid \${l.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0">Layer \${l.n} — \${l.name}</div>
            <div style="font-size:12px;color:\${l.tone};margin-bottom:10px">\${l.who}</div>
            \${l.items.map(i => \`<div style="font-size:13px;color:var(--arta-sys-color-text-secondary);padding:4px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">\${i}</div>\`).join('')}
          </div>\`).join('')}
      </div>
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        Mapping to tokens: <code>core.semantic.*</code> → the flagged sys groups (status / credit / decision /
        disclosure / ai) · <code>product.config.*</code> → per-program data (APR range, limit range, rewards
        rule) consumed by screens, not themable · <code>partner.brand.*</code> → the partner's sys-override
        theme file (Meridian, Northstar).</p>
    </div>\`
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,y,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const groups = ['credit', 'decision', 'disclosure', 'ai'];
    return \`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Lending needs semantics Arta never had. All of these are <b>core governance tier</b> 🔒 — a partner may
        tune lightness for contrast on its surfaces, but the hue family is locked: warning stays amber,
        approved stays green, AI voice stays mint. Screens reference these, never raw status colors.</p>
      \${groups.map(g => {
      const leaves = tokens.sys.filter(t => t.path.startsWith(\`arta.sys.color.\${g}.\`));
      return \`<div class="sb-h">arta · sys · color · \${g} 🔒</div><div class="sb-row">\${leaves.map(t => \`
          <div class="sb-swatch" style="width:210px">
            <div class="sb-swatch__chip" style="background:var(\${t.cssVar})"></div>
            <div class="sb-swatch__meta">\${t.path.replace(\`arta.sys.color.\${g}.\`, \`\${g}.\`)}<code>aliases \${t.value.replace(/[{}]/g, '')}</code></div>
          </div>\`).join('')}</div>\`;
    }).join('')}
      <div class="sb-h" style="margin-top:24px">Usage examples</div>
      <div class="sb-col" style="max-width:420px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Statement balance</span><b style="color:var(--arta-sys-color-credit-balance-current)">$8,420.19</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Interest if you pay minimum</span><b style="color:var(--arta-sys-color-credit-interest-warning)">−$154 / cycle</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-approved);border:1px solid var(--arta-sys-color-decision-approved);border-radius:999px;padding:5px 12px">Approved</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-pending);border:1px solid var(--arta-sys-color-decision-pending);border-radius:999px;padding:5px 12px">Pending</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:5px 12px">Action required</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-declined);border:1px solid var(--arta-sys-color-decision-declined);border-radius:999px;padding:5px 12px">Declined</span>
        </div>
        <p style="font-size:13px;line-height:1.6;margin:0"><span style="color:var(--arta-sys-color-text-ai)">Paying in full saves you $154 this cycle.</span><br/>
        <span style="color:var(--arta-sys-color-ai-source);font-size:11.5px">Sources: statement 07/30 · Arta Cash rate 4.1% · as of today, 9:41 AM</span></p>
      </div>\`;
  }
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var v,m,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:74ch">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        The governance line is enforced by the token build, not by review vigilance. A partner theme that
        re-points a core semantic at its brand palette fails CI with an explanation:</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:16px;font-size:12px;line-height:1.7;overflow-x:auto;color:var(--arta-sys-color-text-secondary)">$ node scripts/build-tokens.mjs

Token validation failed:
  ✗ [northstar] GOVERNANCE: arta.sys.color.status.warning is core-semantic —
    overrides must alias arta.ref.color.* (got "{northstar.ref.color.polar.30}")</pre>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Rules the validator holds today: ① core semantics (status / credit / decision / disclosure / ai) must
        alias the platform ref palette and keep their hue family — warning can lighten, it cannot become brand
        pink; ② legal type minimums cannot shrink; ③ sys must alias ref, cmp may never hardcode. "No" to an
        unsafe partner request is structural, not political.</p>
    </div>\`
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        \${INVENTORY.map(([name, use, status]) => \`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 190px;font-size:13.5px">\${name}</b>
            <span style="flex:1;font-size:12.5px;color:var(--arta-sys-color-text-secondary)">\${use}</span>
            <span style="font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:\${status === 'built' ? 'var(--arta-sys-color-status-positive)' : status === 'in prototype' ? 'var(--arta-sys-color-status-info)' : 'var(--arta-sys-color-text-tertiary)'}">\${status}</span>
          </div>\`).join('')}
      </div>
    </div>\`
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const A=["ThreeLayerModel","LendingSemanticTokens","GovernanceInCI","ComponentInventory"];export{i as ComponentInventory,n as GovernanceInCI,o as LendingSemanticTokens,t as ThreeLayerModel,A as __namedExportsOrder,z as default};
