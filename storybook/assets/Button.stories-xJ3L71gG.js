import{j as e}from"./jsx-runtime-CYhtMYph.js";import{B as t}from"./Button-CJUQ0qzw.js";import"./iframe-ae-nZm9f.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-CnaM3o_f.js";const H={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:'Button — sourced from Figma "Brand" → Elements.\n\nStates (Default / Hover / Focused) are handled via CSS (`hover:`,\n`focus-visible:`). Two families:\n- `primary` (large pill): themes `light` (orange) and `dark` (teal)\n- `small` (compact): themes `light`, `dark`, `greenStroke`, and `danger`\n\n**Usage rule (from the designer note):** the orange `primary/light` button is\nmainly for green/dark backgrounds; on light backgrounds prefer `greenStroke`.\n`danger` has no Figma equivalent — it\'s an extension for SSO destructive\nactions (logout / delete).\n\nThree stories, one consistent structure:\n- **Playground** — interactive single button (use the Controls panel)\n- **Variants** — every variant/theme at a glance\n- **States** — Default / Hover / Focused / Disabled matrix'}}},args:{children:"聯絡我們",variant:"primary",theme:"light",disabled:!1,isLoading:!1},argTypes:{variant:{control:"inline-radio",options:["primary","small"]},theme:{control:"select",options:["light","dark","greenStroke","danger"]},disabled:{control:"boolean"},isLoading:{control:"boolean"},href:{control:"text"}}},n={},s={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-16",children:[e.jsx(t,{variant:"primary",theme:"light",isLoading:!0,children:"送出中"}),e.jsx(t,{variant:"primary",theme:"dark",isLoading:!0,children:"送出中"}),e.jsx(t,{variant:"small",theme:"dark",isLoading:!0,children:"登入中"}),e.jsx(t,{variant:"small",theme:"greenStroke",isLoading:!0,children:"登入中"})]})},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-24",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-16",children:[e.jsx(t,{variant:"primary",theme:"light",children:"Primary · Light"}),e.jsx(t,{variant:"primary",theme:"dark",children:"Primary · Dark"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-16",children:[e.jsx(t,{variant:"small",theme:"light",children:"Small · Light"}),e.jsx(t,{variant:"small",theme:"dark",children:"Small · Dark"}),e.jsx(t,{variant:"small",theme:"greenStroke",children:"Small · GreenStroke"}),e.jsx(t,{variant:"small",theme:"danger",children:"Small · Danger"})]})]})},P=[{label:"Default",className:""},{label:"Hover",className:"pseudo-hover"},{label:"Focused",className:"pseudo-focus-visible"},{label:"Disabled",className:"",disabled:!0}];function r({title:a,render:T}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"typography-strong2 flex items-center text-teal-700",children:a}),P.map(d=>e.jsx("div",{className:"flex items-center justify-center",children:T(d)},d.label))]})}const i={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"grid items-center gap-16",style:{gridTemplateColumns:"auto repeat(4, minmax(0, 1fr))"},children:[e.jsx("div",{}),P.map(a=>e.jsx("div",{className:"typography-body2 text-center text-neutral-dark-gray",children:a.label},a.label)),e.jsx(r,{title:"Primary · Light",render:a=>e.jsx(t,{variant:"primary",theme:"light",className:a.className,disabled:a.disabled,children:"聯絡我們"})}),e.jsx(r,{title:"Primary · Dark",render:a=>e.jsx(t,{variant:"primary",theme:"dark",className:a.className,disabled:a.disabled,children:"聯絡我們"})}),e.jsx(r,{title:"Small · Light",render:a=>e.jsx(t,{variant:"small",theme:"light",className:a.className,disabled:a.disabled,children:"成為志工"})}),e.jsx(r,{title:"Small · Dark",render:a=>e.jsx(t,{variant:"small",theme:"dark",className:a.className,disabled:a.disabled,children:"成為志工"})}),e.jsx(r,{title:"Small · GreenStroke",render:a=>e.jsx(t,{variant:"small",theme:"greenStroke",className:a.className,disabled:a.disabled,children:"成為志工"})}),e.jsx(r,{title:"Small · Danger",render:a=>e.jsx(t,{variant:"small",theme:"danger",className:a.className,disabled:a.disabled,children:"登出"})})]})};var o,m,c,p,h;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Interactive — drive variant / theme / disabled from the Controls panel.",...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var g,u,v,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-wrap items-center gap-16">
      <Button variant="primary" theme="light" isLoading>
        送出中
      </Button>
      <Button variant="primary" theme="dark" isLoading>
        送出中
      </Button>
      <Button variant="small" theme="dark" isLoading>
        登入中
      </Button>
      <Button variant="small" theme="greenStroke" isLoading>
        登入中
      </Button>
    </div>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"isLoading shows a spinner and makes the button inert (aria-busy).",...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var b,S,k,f,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-col gap-24">
      <div className="flex flex-wrap items-center gap-16">
        <Button variant="primary" theme="light">
          Primary · Light
        </Button>
        <Button variant="primary" theme="dark">
          Primary · Dark
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-16">
        <Button variant="small" theme="light">
          Small · Light
        </Button>
        <Button variant="small" theme="dark">
          Small · Dark
        </Button>
        <Button variant="small" theme="greenStroke">
          Small · GreenStroke
        </Button>
        <Button variant="small" theme="danger">
          Small · Danger
        </Button>
      </div>
    </div>
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Every variant and theme at a glance.",...(N=(f=l.parameters)==null?void 0:f.docs)==null?void 0:N.description}}};var B,j,L,D,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="grid items-center gap-16" style={{
    gridTemplateColumns: "auto repeat(4, minmax(0, 1fr))"
  }}>
      <div />
      {STATE_COLS.map(c => <div key={c.label} className="typography-body2 text-center text-neutral-dark-gray">
          {c.label}
        </div>)}

      <StateRow title="Primary · Light" render={c => <Button variant="primary" theme="light" className={c.className} disabled={c.disabled}>
            聯絡我們
          </Button>} />
      <StateRow title="Primary · Dark" render={c => <Button variant="primary" theme="dark" className={c.className} disabled={c.disabled}>
            聯絡我們
          </Button>} />
      <StateRow title="Small · Light" render={c => <Button variant="small" theme="light" className={c.className} disabled={c.disabled}>
            成為志工
          </Button>} />
      <StateRow title="Small · Dark" render={c => <Button variant="small" theme="dark" className={c.className} disabled={c.disabled}>
            成為志工
          </Button>} />
      <StateRow title="Small · GreenStroke" render={c => <Button variant="small" theme="greenStroke" className={c.className} disabled={c.disabled}>
            成為志工
          </Button>} />
      <StateRow title="Small · Danger" render={c => <Button variant="small" theme="danger" className={c.className} disabled={c.disabled}>
            登出
          </Button>} />
    </div>
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source},description:{story:"Default / Hover / Focused / Disabled for every variant.",...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};const O=["Playground","Loading","Variants","States"];export{s as Loading,n as Playground,i as States,l as Variants,O as __namedExportsOrder,H as default};
