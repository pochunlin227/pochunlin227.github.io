const d={title:"00 Overview/Arta Card System"},n=[["Clarity before consent","Fees, risks and the pledge are understood before anything is agreed to. Disclosure prominence is a platform rule, not a style choice."],["Member control before action","The AI explains and recommends; money never moves and assets are never sold without explicit member confirmation."],["Brand flexibility within financial guardrails","Partners express their brand freely — the integrity of consequential financial decisions is not configurable."]],l=[["Explore lending patterns","03 Lending Patterns — eligibility, recommended limit, disclosures, consent, decision states."],["Compare brand themes","Use the theme switch in the toolbar (Arta / Meridian / Northstar), or open 05 White-Label System → Compare brands."],["Review the governance model","05 White-Label System — brandTheme · productConfig · platformPolicy, and what partners cannot change."]],e={render:()=>`
    <div style="max-width:78ch">
      <div class="sb-h" style="margin-top:0">Arta Card System</div>
      <h1 style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height);margin-bottom:14px">A focused extension to Arta's product system</h1>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:15px;line-height:1.65;max-width:64ch">
        For portfolio-secured card applications, decisioning, AI guidance, and partner-brand configuration.
        Everything here runs on one token pipeline — three tiers (<code>ref · sys · cmp</code>), three themes,
        and governance rules the build enforces mechanically.</p>

      <div class="sb-h" style="margin-top:28px">System principles</div>
      <div style="display:flex;gap:14px;flex-wrap:wrap">
        ${n.map(([t,r],o)=>`
          <div style="flex:1;min-width:240px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div style="font-size:11px;letter-spacing:.14em;color:var(--arta-sys-color-text-tertiary)">0${o+1}</div>
            <b style="display:block;font-size:15px;margin:6px 0 8px">${t}</b>
            <p style="font-size:12.5px;line-height:1.6;color:var(--arta-sys-color-text-secondary);margin:0">${r}</p>
          </div>`).join("")}
      </div>

      <div class="sb-h" style="margin-top:28px">Where to start</div>
      ${l.map(([t,r])=>`
        <div style="display:flex;gap:14px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
          <b style="flex:0 0 220px;font-size:13.5px;color:var(--arta-sys-color-text-link)">${t} →</b>
          <span style="font-size:12.5px;color:var(--arta-sys-color-text-secondary)">${r}</span>
        </div>`).join("")}

      <div class="sb-h" style="margin-top:28px">What's new for lending</div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.65;max-width:68ch">
        Card-domain semantic tokens (limit / portfolio buffer / payment / decision / disclosure / AI voice) ·
        lending components (Key Terms, verified-data confirmation, consent rows, decision states, bottom-sheet
        disclosure viewer) · AI interaction patterns (explain → recommend → confirm → act, human escalation) ·
        and a three-part white-label configuration model (brandTheme · productConfig · platformPolicy) with
        build-time governance.</p>
    </div>`};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:78ch">
      <div class="sb-h" style="margin-top:0">Arta Card System</div>
      <h1 style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height);margin-bottom:14px">A focused extension to Arta's product system</h1>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:15px;line-height:1.65;max-width:64ch">
        For portfolio-secured card applications, decisioning, AI guidance, and partner-brand configuration.
        Everything here runs on one token pipeline — three tiers (<code>ref · sys · cmp</code>), three themes,
        and governance rules the build enforces mechanically.</p>

      <div class="sb-h" style="margin-top:28px">System principles</div>
      <div style="display:flex;gap:14px;flex-wrap:wrap">
        \${PRINCIPLES.map(([t, d], i) => \`
          <div style="flex:1;min-width:240px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div style="font-size:11px;letter-spacing:.14em;color:var(--arta-sys-color-text-tertiary)">0\${i + 1}</div>
            <b style="display:block;font-size:15px;margin:6px 0 8px">\${t}</b>
            <p style="font-size:12.5px;line-height:1.6;color:var(--arta-sys-color-text-secondary);margin:0">\${d}</p>
          </div>\`).join('')}
      </div>

      <div class="sb-h" style="margin-top:28px">Where to start</div>
      \${ENTRIES.map(([t, d]) => \`
        <div style="display:flex;gap:14px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
          <b style="flex:0 0 220px;font-size:13.5px;color:var(--arta-sys-color-text-link)">\${t} →</b>
          <span style="font-size:12.5px;color:var(--arta-sys-color-text-secondary)">\${d}</span>
        </div>\`).join('')}

      <div class="sb-h" style="margin-top:28px">What's new for lending</div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.65;max-width:68ch">
        Card-domain semantic tokens (limit / portfolio buffer / payment / decision / disclosure / AI voice) ·
        lending components (Key Terms, verified-data confirmation, consent rows, decision states, bottom-sheet
        disclosure viewer) · AI interaction patterns (explain → recommend → confirm → act, human escalation) ·
        and a three-part white-label configuration model (brandTheme · productConfig · platformPolicy) with
        build-time governance.</p>
    </div>\`
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const c=["Introduction"];export{e as Introduction,c as __namedExportsOrder,d as default};
