const t=(a,e)=>({docs:{...e?{description:{story:e}}:{},source:{code:a,language:"html"}}}),U={title:"Product Patterns/Data & Charts",parameters:{docs:{description:{component:["Data-display family from the scorecard, AMP detail and Micro Index surfaces: stat heroes, tables, bars, donuts, line charts, the investment-style matrix and the allocation treemap.","","**Conventions**","- Portfolio is always the **violet** series; benchmark is grey (`chartline.secondary`).","- Positive/negative are solid mint/coral pills with dark text — same semantics the lending tokens lock for partners.","- Every chart is CSS or inline SVG driven by tokens; engineers can copy the markup as-is.","","**Responsive** — tables wrap in `.arta-scroll-x` (horizontal scroll inside the card, never the page); donut + legend stack vertically under 640px; the treemap re-grids to 2 columns; bars/decay are fluid by construction."].join(`
`)}}}},r={render:()=>`
    <div style="max-width:360px">
      <div class="arta-stat">
        <div class="arta-stat__value">5.29%</div>
        <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
      </div>
    </div>`,parameters:t(`<div class="arta-stat">
  <div class="arta-stat__value">5.29%</div>
  <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
</div>`,"One number, one dated caption — the stat IS the page hero. The date is part of the honesty pattern; never ship the number without it.")},s={render:()=>`
    <div class="sb-h">Comparison table — wrapped in .arta-scroll-x so mobile scrolls the card, not the page</div>
    <div style="display:flex;gap:40px;flex-wrap:wrap;max-width:820px">
      <div style="flex:1;min-width:260px">
        <div class="arta-keyterms__title" style="margin-bottom:10px">Tax advantage</div>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
          Depending on your tax situation, a savings account would have to provide the yield below
          to match this AMP.</p>
        <a class="arta-link" href="#" style="font-size:13px;display:inline-block;margin-top:10px">See disclosures</a>
      </div>
      <div class="arta-scroll-x" style="flex:1;min-width:280px">
        <table class="arta-table" style="min-width:0">
          <tr><th>State</th><th>Yield needed</th></tr>
          <tr><td>California</td><td>6.80%</td></tr>
          <tr><td>New York</td><td>6.48%</td></tr>
          <tr><td>New Jersey</td><td>6.46%</td></tr>
        </table>
      </div>
    </div>`,parameters:t(`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>State</th><th>Yield needed</th></tr>
    <tr><td>California</td><td>6.80%</td></tr>
  </table>
</div>`)},i={render:()=>`
    <div class="sb-h">Drawdown events table — 7 columns, "–" for unrecovered · scrolls on mobile</div>
    <div class="arta-scroll-x" style="max-width:820px">
      <table class="arta-table">
        <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−35.26%</td><td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−13.56%</td><td>Jul 10, 2024</td><td>28</td><td>Aug 7, 2024</td><td>–</td><td>–</td><td>–</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−7.71%</td><td>Sep 7, 2021</td><td>27</td><td>Oct 4, 2021</td><td>32</td><td>Nov 5, 2021</td><td>59</td></tr>
      </table>
    </div>`,parameters:t(`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
    <tr>
      <td style="color:var(--arta-sys-color-status-danger)">−35.26%</td>
      <td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td>
    </tr>
  </table>
</div>`,'From the scorecard: the three worst drops with recovery math. Unrecovered events show "–", not zero — absence of data is not a number.')},n={render:()=>`
    <div class="sb-h">Line chart + legend — portfolio (violet) vs benchmark (grey)</div>
    <div style="max-width:640px">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <div class="arta-legend arta-legend--inline">
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>Portfolio</span>
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-secondary)"></span>NASDAQ</span>
        </div>
      </div>
      <svg viewBox="0 0 560 200" style="width:100%;height:auto">
        ${[40,100,160].map(a=>`<line x1="0" y1="${a}" x2="560" y2="${a}" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>`).join("")}
        <path d="M10,180 L30,60 60,50 90,150 130,140 170,155 210,120 250,70 290,60 330,90 380,140 430,150 480,145 530,140" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,185 L30,80 60,75 90,160 130,150 170,170 210,140 250,95 290,85 330,120 380,165 430,170 480,172 530,160" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="545" y="44" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">45%</text>
        <text x="545" y="164" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">15%</text>
      </svg>
    </div>`,parameters:t(`<div class="arta-legend arta-legend--inline">
  <span class="arta-legend__item">
    <span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>
    Portfolio
  </span>
</div>
<svg viewBox="0 0 560 200">
  <line x1="0" y1="100" x2="560" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
</svg>`,"Historical-volatility pattern. The legend row is its own component (`.arta-legend`) — reused by the sector donuts below.")},o={render:()=>`
    <div class="sb-h">Investment-style matrix — 9-box grid, portfolio dot vs benchmark dot</div>
    <div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">
      <div>
        <div style="display:flex;justify-content:space-around;max-width:280px;margin-bottom:6px">
          ${["Value","Blend","Growth"].map(a=>`<span class="arta-matrix__axis">${a}</span>`).join("")}
        </div>
        <div class="arta-matrix">
          ${"<i></i>".repeat(9)}
          <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
          <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
        </div>
      </div>
      <div style="max-width:280px">
        <p style="color:var(--arta-sys-color-text-primary);font-size:14px;font-weight:600">Your portfolio: Large Growth</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.55;margin-top:6px">
          Large companies with high growth prospects — moderate risk, less volatile than smaller
          growth stocks. Examples: Amazon (AMZN), Vanguard Growth ETF (VUG).</p>
      </div>
    </div>`,parameters:t(`<div class="arta-matrix">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
  <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
</div>`,"Morningstar-style 9-box. Dots are absolutely positioned percentages, so the matrix scales fluidly; the explanation column drops below it on mobile.")},d={render:()=>`
    <div class="sb-h">Allocation donut + center readout + legend chips (dashboard widget)</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>`,parameters:t(`<div class="arta-donut-wrap">
  <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-sys-color-surface-form) 3.7% 100%)">
    <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
  </div>
  <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
</div>`,"Hovering/selecting a legend chip swaps the center readout to that segment — the selected chip state (`--selected`) is the source of truth. Stacks vertically on mobile.")},l={render:()=>`
    <div class="sb-h">Sector composition — twin donuts vs benchmark + shared color legend</div>
    <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:center">
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-ref-color-mint-50) 78% 92%, var(--arta-sys-color-surface-form) 92% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
      </div>
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 55%, var(--arta-ref-color-mint-50) 55% 68%, var(--arta-ref-color-sky-50) 68% 76%, var(--arta-ref-color-violet-50) 76% 84%, var(--arta-sys-color-surface-form) 84% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">NASDAQ</div></div>
      </div>
      <div class="arta-legend">
        ${[["var(--arta-ref-color-pink-60)","Technology"],["var(--arta-ref-color-mint-50)","Consumer Discretionary"],["var(--arta-ref-color-sky-50)","Consumer Staples"],["var(--arta-ref-color-violet-50)","Communication Services"]].map(([a,e])=>`<span class="arta-legend__item"><span class="arta-legend__swatch" style="background:${a}"></span>${e}</span>`).join("")}
      </div>
    </div>`,parameters:t(`<div class="arta-donut" style="background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-sys-color-surface-form) 78% 100%)">
  <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
</div>
<span class="arta-legend__item">
  <span class="arta-legend__swatch" style="background:var(--arta-ref-color-pink-60)"></span>Technology
</span>`,"Same donut primitive, two instances, one legend — comparison is layout, not a new component.")},c={render:()=>`
    <div class="sb-h">Allocation treemap — proportional tiles, hover shows the % chip · 2-col on mobile</div>
    <div class="arta-treemap" style="max-width:640px;grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
      ${[["AAPL","15.00%"],["GOOG","15.00%"],["NVDA","21.00%"],["AMZN","15.00%"],["META","15.00%"],["MSFT","19.00%"]].map(([a,e])=>`
        <div class="arta-treemap__tile">${a}<span class="arta-treemap__chip">${e}</span></div>`).join("")}
    </div>`,parameters:t(`<div class="arta-treemap" style="grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
  <div class="arta-treemap__tile">AAPL<span class="arta-treemap__chip">15.00%</span></div>
  <div class="arta-treemap__tile">NVDA<span class="arta-treemap__chip">21.00%</span></div>
</div>`,"Micro Index review screen. Tile weight is expressed through the grid template; hover raises the tile (`surface.raised`) and reveals the white % chip.")},p={render:()=>`
    <div class="sb-h">Post-tax performance bars — base (white) + delta (violet) per year</div>
    <div style="max-width:560px">
      <div class="arta-bars">
        ${[100,108,116,124,134,145,158,172,190,210,232].map(a=>`
          <div class="arta-bars__bar" style="height:100%">
            <div class="arta-bars__delta" style="height:${Math.round(a*.06)}px"></div>
            <div class="arta-bars__base" style="height:${Math.round(a*.55)}px"></div>
          </div>`).join("")}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        ${["0Y","1Y","2Y","3Y","4Y","5Y","6Y","7Y","8Y","9Y","10Y"].map(a=>`<span class="arta-bars__lbl" style="flex:1;text-align:center">${a}</span>`).join("")}
      </div>
    </div>`,parameters:t(`<div class="arta-bars">
  <div class="arta-bars__bar">
    <div class="arta-bars__delta" style="height:12px"></div>
    <div class="arta-bars__base" style="height:80px"></div>
  </div>
</div>`)},v={render:()=>`
    <div class="sb-h">Decay timeline — tax-loss harvesting potential by year</div>
    <div class="arta-decay" style="max-width:520px">
      ${[["1Y",13.8],["2Y",6.84],["3Y",5.48],["4Y",4.67],["5Y",4.5],["6Y",4.16],["8Y",2.38]].map(([a,e])=>`
        <div class="arta-decay__row">
          <div class="arta-decay__dot">${a}</div>
          <div class="arta-decay__track"><div class="arta-decay__fill" style="width:${e/13.8*100}%"></div></div>
          <span class="arta-decay__val">${e}%</span>
        </div>`).join("")}
    </div>`,parameters:t(`<div class="arta-decay">
  <div class="arta-decay__row">
    <div class="arta-decay__dot">1Y</div>
    <div class="arta-decay__track"><div class="arta-decay__fill" style="width:100%"></div></div>
    <span class="arta-decay__val">13.8%</span>
  </div>
</div>`)},h={render:()=>`
    <div class="sb-h">Education chart modal — mono-caps title + comparison lines</div>
    <div class="arta-keyterms" style="max-width:520px">
      <div class="arta-keyterms__title">Open-ended vehicle would outperform a closed-ended fund when gross returns are equal</div>
      <svg viewBox="0 0 440 200" style="width:100%;height:auto">
        <line x1="0" y1="160" x2="440" y2="160" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="40" x2="440" y2="40" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <path d="M10,185 C120,180 240,150 320,100 S420,30 430,20" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,186 C130,183 260,168 340,140 S420,90 430,80" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="14" y="30" fill="var(--arta-cmp-chartline-accent)" font-size="11">Open-end vehicle · cumulative value</text>
        <text x="14" y="110" fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
      </svg>
    </div>`,parameters:t(`<svg viewBox="0 0 440 200">
  <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
  <text fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
</svg>`)};var m,y,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:360px">
      <div class="arta-stat">
        <div class="arta-stat__value">5.29%</div>
        <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-stat">
  <div class="arta-stat__value">5.29%</div>
  <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
</div>\`, 'One number, one dated caption — the stat IS the page hero. The date is part of the honesty pattern; never ship the number without it.')
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,g,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Comparison table — wrapped in .arta-scroll-x so mobile scrolls the card, not the page</div>
    <div style="display:flex;gap:40px;flex-wrap:wrap;max-width:820px">
      <div style="flex:1;min-width:260px">
        <div class="arta-keyterms__title" style="margin-bottom:10px">Tax advantage</div>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
          Depending on your tax situation, a savings account would have to provide the yield below
          to match this AMP.</p>
        <a class="arta-link" href="#" style="font-size:13px;display:inline-block;margin-top:10px">See disclosures</a>
      </div>
      <div class="arta-scroll-x" style="flex:1;min-width:280px">
        <table class="arta-table" style="min-width:0">
          <tr><th>State</th><th>Yield needed</th></tr>
          <tr><td>California</td><td>6.80%</td></tr>
          <tr><td>New York</td><td>6.48%</td></tr>
          <tr><td>New Jersey</td><td>6.46%</td></tr>
        </table>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>State</th><th>Yield needed</th></tr>
    <tr><td>California</td><td>6.80%</td></tr>
  </table>
</div>\`)
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,f,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Drawdown events table — 7 columns, "–" for unrecovered · scrolls on mobile</div>
    <div class="arta-scroll-x" style="max-width:820px">
      <table class="arta-table">
        <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−35.26%</td><td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−13.56%</td><td>Jul 10, 2024</td><td>28</td><td>Aug 7, 2024</td><td>–</td><td>–</td><td>–</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−7.71%</td><td>Sep 7, 2021</td><td>27</td><td>Oct 4, 2021</td><td>32</td><td>Nov 5, 2021</td><td>59</td></tr>
      </table>
    </div>\`,
  parameters: src(\`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
    <tr>
      <td style="color:var(--arta-sys-color-status-danger)">−35.26%</td>
      <td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td>
    </tr>
  </table>
</div>\`, 'From the scorecard: the three worst drops with recovery math. Unrecovered events show "–", not zero — absence of data is not a number.')
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,S,Y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Line chart + legend — portfolio (violet) vs benchmark (grey)</div>
    <div style="max-width:640px">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <div class="arta-legend arta-legend--inline">
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>Portfolio</span>
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-secondary)"></span>NASDAQ</span>
        </div>
      </div>
      <svg viewBox="0 0 560 200" style="width:100%;height:auto">
        \${[40, 100, 160].map(y => \`<line x1="0" y1="\${y}" x2="560" y2="\${y}" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>\`).join('')}
        <path d="M10,180 L30,60 60,50 90,150 130,140 170,155 210,120 250,70 290,60 330,90 380,140 430,150 480,145 530,140" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,185 L30,80 60,75 90,160 130,150 170,170 210,140 250,95 290,85 330,120 380,165 430,170 480,172 530,160" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="545" y="44" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">45%</text>
        <text x="545" y="164" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">15%</text>
      </svg>
    </div>\`,
  parameters: src(\`<div class="arta-legend arta-legend--inline">
  <span class="arta-legend__item">
    <span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>
    Portfolio
  </span>
</div>
<svg viewBox="0 0 560 200">
  <line x1="0" y1="100" x2="560" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
</svg>\`, 'Historical-volatility pattern. The legend row is its own component (\`.arta-legend\`) — reused by the sector donuts below.')
}`,...(Y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};var $,D,C;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Investment-style matrix — 9-box grid, portfolio dot vs benchmark dot</div>
    <div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">
      <div>
        <div style="display:flex;justify-content:space-around;max-width:280px;margin-bottom:6px">
          \${['Value', 'Blend', 'Growth'].map(l => \`<span class="arta-matrix__axis">\${l}</span>\`).join('')}
        </div>
        <div class="arta-matrix">
          \${'<i></i>'.repeat(9)}
          <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
          <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
        </div>
      </div>
      <div style="max-width:280px">
        <p style="color:var(--arta-sys-color-text-primary);font-size:14px;font-weight:600">Your portfolio: Large Growth</p>
        <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;line-height:1.55;margin-top:6px">
          Large companies with high growth prospects — moderate risk, less volatile than smaller
          growth stocks. Examples: Amazon (AMZN), Vanguard Growth ETF (VUG).</p>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-matrix">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <span class="arta-matrix__dot" style="left:76%;top:22%"></span>
  <span class="arta-matrix__dot arta-matrix__dot--benchmark" style="left:60%;top:30%"></span>
</div>\`, 'Morningstar-style 9-box. Dots are absolutely positioned percentages, so the matrix scales fluidly; the explanation column drops below it on mobile.')
}`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,M,T;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Allocation donut + center readout + legend chips (dashboard widget)</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-donut-wrap">
  <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-sys-color-surface-form) 3.7% 100%)">
    <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
  </div>
  <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
</div>\`, 'Hovering/selecting a legend chip swaps the center readout to that segment — the selected chip state (\`--selected\`) is the source of truth. Stacks vertically on mobile.')
}`,...(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var z,B,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Sector composition — twin donuts vs benchmark + shared color legend</div>
    <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:center">
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-ref-color-mint-50) 78% 92%, var(--arta-sys-color-surface-form) 92% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
      </div>
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 55%, var(--arta-ref-color-mint-50) 55% 68%, var(--arta-ref-color-sky-50) 68% 76%, var(--arta-ref-color-violet-50) 76% 84%, var(--arta-sys-color-surface-form) 84% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">NASDAQ</div></div>
      </div>
      <div class="arta-legend">
        \${[['var(--arta-ref-color-pink-60)', 'Technology'], ['var(--arta-ref-color-mint-50)', 'Consumer Discretionary'], ['var(--arta-ref-color-sky-50)', 'Consumer Staples'], ['var(--arta-ref-color-violet-50)', 'Communication Services']].map(([c, l]) => \`<span class="arta-legend__item"><span class="arta-legend__swatch" style="background:\${c}"></span>\${l}</span>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-donut" style="background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-sys-color-surface-form) 78% 100%)">
  <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
</div>
<span class="arta-legend__item">
  <span class="arta-legend__swatch" style="background:var(--arta-ref-color-pink-60)"></span>Technology
</span>\`, 'Same donut primitive, two instances, one legend — comparison is layout, not a new component.')
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var E,N,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Allocation treemap — proportional tiles, hover shows the % chip · 2-col on mobile</div>
    <div class="arta-treemap" style="max-width:640px;grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
      \${[['AAPL', '15.00%'], ['GOOG', '15.00%'], ['NVDA', '21.00%'], ['AMZN', '15.00%'], ['META', '15.00%'], ['MSFT', '19.00%']].map(([tk, pct]) => \`
        <div class="arta-treemap__tile">\${tk}<span class="arta-treemap__chip">\${pct}</span></div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-treemap" style="grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
  <div class="arta-treemap__tile">AAPL<span class="arta-treemap__chip">15.00%</span></div>
  <div class="arta-treemap__tile">NVDA<span class="arta-treemap__chip">21.00%</span></div>
</div>\`, 'Micro Index review screen. Tile weight is expressed through the grid template; hover raises the tile (\`surface.raised\`) and reveals the white % chip.')
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var L,O,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Post-tax performance bars — base (white) + delta (violet) per year</div>
    <div style="max-width:560px">
      <div class="arta-bars">
        \${[100, 108, 116, 124, 134, 145, 158, 172, 190, 210, 232].map(v => \`
          <div class="arta-bars__bar" style="height:100%">
            <div class="arta-bars__delta" style="height:\${Math.round(v * 0.06)}px"></div>
            <div class="arta-bars__base" style="height:\${Math.round(v * 0.55)}px"></div>
          </div>\`).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        \${['0Y', '1Y', '2Y', '3Y', '4Y', '5Y', '6Y', '7Y', '8Y', '9Y', '10Y'].map(l => \`<span class="arta-bars__lbl" style="flex:1;text-align:center">\${l}</span>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-bars">
  <div class="arta-bars__bar">
    <div class="arta-bars__delta" style="height:12px"></div>
    <div class="arta-bars__base" style="height:80px"></div>
  </div>
</div>\`)
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var V,F,H;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Decay timeline — tax-loss harvesting potential by year</div>
    <div class="arta-decay" style="max-width:520px">
      \${[['1Y', 13.8], ['2Y', 6.84], ['3Y', 5.48], ['4Y', 4.67], ['5Y', 4.5], ['6Y', 4.16], ['8Y', 2.38]].map(([y, v]) => \`
        <div class="arta-decay__row">
          <div class="arta-decay__dot">\${y}</div>
          <div class="arta-decay__track"><div class="arta-decay__fill" style="width:\${v / 13.8 * 100}%"></div></div>
          <span class="arta-decay__val">\${v}%</span>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-decay">
  <div class="arta-decay__row">
    <div class="arta-decay__dot">1Y</div>
    <div class="arta-decay__track"><div class="arta-decay__fill" style="width:100%"></div></div>
    <span class="arta-decay__val">13.8%</span>
  </div>
</div>\`)
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,J,Q;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Education chart modal — mono-caps title + comparison lines</div>
    <div class="arta-keyterms" style="max-width:520px">
      <div class="arta-keyterms__title">Open-ended vehicle would outperform a closed-ended fund when gross returns are equal</div>
      <svg viewBox="0 0 440 200" style="width:100%;height:auto">
        <line x1="0" y1="160" x2="440" y2="160" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="40" x2="440" y2="40" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <path d="M10,185 C120,180 240,150 320,100 S420,30 430,20" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,186 C130,183 260,168 340,140 S420,90 430,80" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="14" y="30" fill="var(--arta-cmp-chartline-accent)" font-size="11">Open-end vehicle · cumulative value</text>
        <text x="14" y="110" fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
      </svg>
    </div>\`,
  parameters: src(\`<svg viewBox="0 0 440 200">
  <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
  <text fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
</svg>\`)
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Z=["StatHero","ComparisonTable","DrawdownTable","VolatilityChart","StyleMatrix","AllocationDonut","SectorComposition","AllocationTreemap","PerformanceBars","HarvestingDecay","EducationChart"];export{d as AllocationDonut,c as AllocationTreemap,s as ComparisonTable,i as DrawdownTable,h as EducationChart,v as HarvestingDecay,p as PerformanceBars,l as SectorComposition,r as StatHero,o as StyleMatrix,n as VolatilityChart,Z as __namedExportsOrder,U as default};
