import{s,d as o}from"./helpers-BwuIyHmI.js";const l={title:"02 Components/Tables/Drawdown table",parameters:o(['Scorecard drawdown events — the three worst drops with recovery math. Unrecovered events show "–", not zero: absence of data is not a number.',"","**Mobile** 7 columns always scroll inside `.arta-scroll-x`. **Tokens** `arta.cmp.table.*` + `sys.status.danger` for losses."].join(`
`))},t={render:()=>`
    <div class="sb-h">"–" for unrecovered · scrolls inside the card on mobile</div>
    <div class="arta-scroll-x" style="max-width:820px">
      <table class="arta-table">
        <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−35.26%</td><td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−13.56%</td><td>Jul 10, 2024</td><td>28</td><td>Aug 7, 2024</td><td>–</td><td>–</td><td>–</td></tr>
        <tr><td style="color:var(--arta-sys-color-status-danger)">−7.71%</td><td>Sep 7, 2021</td><td>27</td><td>Oct 4, 2021</td><td>32</td><td>Nov 5, 2021</td><td>59</td></tr>
      </table>
    </div>`,parameters:s(`<div class="arta-scroll-x">
  <table class="arta-table">
    <tr><th>Loss</th><th>Start</th><th>Days to bottom</th><th>Bottom</th><th>Days to recover</th><th>End</th><th>Total days</th></tr>
    <tr>
      <td style="color:var(--arta-sys-color-status-danger)">−35.26%</td>
      <td>Dec 27, 2021</td><td>310</td><td>Nov 3, 2022</td><td>406</td><td>Dec 13, 2023</td><td>716</td>
    </tr>
  </table>
</div>`)};var d,r,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">"–" for unrecovered · scrolls inside the card on mobile</div>
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
</div>\`)
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["Events"];export{t as Events,c as __namedExportsOrder,l as default};
