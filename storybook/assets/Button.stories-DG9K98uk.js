import{j as e}from"./jsx-runtime-47EJ0cPw.js";import"./iframe-DsdvttKI.js";import"./preload-helper-Dp1pzeXC.js";const T="_button_couck_4",O="_primary_couck_40",P="_secondary_couck_53",V="_outline_couck_66",E="_small_couck_81",M="_medium_couck_86",W="_large_couck_91",F="_spinner_couck_97",U="_labelLoading_couck_107",n={button:T,primary:O,secondary:P,outline:V,small:E,medium:M,large:W,spinner:F,"button-spin":"_button-spin_couck_1",labelLoading:U};function o({variant:a="primary",size:r="medium",isLoading:i=!1,disabled:q,type:w="button",children:I,...R}){return e.jsxs("button",{type:w,disabled:q||i,"aria-busy":i||void 0,className:[n.button,n[a],n[r]].join(" "),...R,children:[i?e.jsx("span",{className:n.spinner,"aria-hidden":"true"}):null,e.jsx("span",{className:i?n.labelLoading:void 0,children:I})]})}o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["Omit"]};const H={title:"Components/Button",component:o,parameters:{layout:"centered",docs:{description:{component:`Standard Button — generic, token-driven button (CSS Modules on the \`@theme\`
variables in globals.css). Complements the Figma brand button at
**Common/Button**: use that one for brand marketing surfaces; use this one
for generic product UI needing size / loading semantics.`}}},args:{children:"確認送出",variant:"primary",size:"medium",isLoading:!1,disabled:!1},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","outline"]},size:{control:"inline-radio",options:["small","medium","large"]},isLoading:{control:"boolean"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},s={},l={args:{variant:"primary"}},d={args:{variant:"secondary"}},c={args:{variant:"outline"}},t={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"grid",gap:"2.4rem"},children:["primary","secondary","outline"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.6rem",flexWrap:"wrap"},children:[["small","medium","large"].map(r=>e.jsxs(o,{variant:a,size:r,children:[a," · ",r]},r)),e.jsx(o,{variant:a,isLoading:!0,children:"載入中"}),e.jsx(o,{variant:a,disabled:!0,children:"已停用"})]},a))})};var m,u,p,y,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:"Interactive — drive variant / size / loading / disabled from Controls.",...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,_,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(b=(_=l.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,x,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var h,j,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,z,C,L,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gap: "2.4rem"
  }}>
      {(["primary", "secondary", "outline"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      alignItems: "center",
      gap: "1.6rem",
      flexWrap: "wrap"
    }}>
          {(["small", "medium", "large"] as const).map(size => <Button key={size} variant={variant} size={size}>
              {variant} · {size}
            </Button>)}
          <Button variant={variant} isLoading>
            載入中
          </Button>
          <Button variant={variant} disabled>
            已停用
          </Button>
        </div>)}
    </div>
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source},description:{story:"Every variant × size, plus loading and disabled.",...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};const J=["Playground","Primary","Secondary","Outline","Matrix"];export{t as Matrix,c as Outline,s as Playground,l as Primary,d as Secondary,J as __namedExportsOrder,H as default};
