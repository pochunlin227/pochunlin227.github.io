import{j as e}from"./jsx-runtime-CcxgAVZW.js";import{B as t,a as i}from"./Button-bHBslme7.js";import{c as j}from"./cn-CnaM3o_f.js";import{F as d}from"./Field-VPn4KKin.js";import{I as m}from"./Input-C_GYg-p7.js";import"./iframe-CfJxx9h4.js";import"./preload-helper-Dp1pzeXC.js";function x({id:a,className:o,"data-variant":r,as:l="div",children:c}){return e.jsx(l,{...a?{id:a}:{},...r?{"data-variant":r}:{},className:j("mx-auto px-20 desktop:max-w-[112rem]",o),children:c})}x.__docgenInfo={description:"",methods:[],displayName:"Container",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"React.JSX.IntrinsicElements"},description:"",defaultValue:{value:'"div"',computed:!1}},"data-variant":{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function v({kicker:a,title:o,copy:r,variant:l="auth",children:c}){return e.jsxs(x,{className:"auth-frame",as:"div","data-variant":l,children:[e.jsxs("section",{className:"auth-intro","aria-labelledby":"auth-title",children:[e.jsx("p",{className:"auth-kicker",children:a}),e.jsx("h1",{className:"auth-title",id:"auth-title",children:o}),e.jsx("p",{className:"auth-copy",children:r}),e.jsxs("nav",{className:"utility-nav","aria-label":"Auth navigation",children:[e.jsx(t,{href:i("/auth/login"),variant:"small",theme:"greenStroke",children:"Login"}),e.jsx(t,{href:i("/auth/registration"),variant:"small",theme:"greenStroke",children:"Registration"}),e.jsx(t,{href:i("/auth/recovery"),variant:"small",theme:"greenStroke",children:"Recovery"}),e.jsx(t,{href:i("/auth/verification"),variant:"small",theme:"greenStroke",children:"Verification"})]})]}),e.jsx("section",{className:"auth-panel",children:c})]})}v.__docgenInfo={description:"",methods:[],displayName:"AuthPage",props:{kicker:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},copy:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"auth" | "task"',elements:[{name:"literal",value:'"auth"'},{name:"literal",value:'"task"'}]},description:"",defaultValue:{value:'"auth"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"Center/AuthPage",component:v,parameters:{layout:"fullscreen",nextjs:{appDirectory:!0,navigation:{pathname:"/center/auth/login"}},docs:{description:{component:"AuthPage — the two-column auth shell (intro + panel) used across the center\nauth flows. Renders inside the `.auth-shell` background from globals.css."}}},decorators:[a=>e.jsx("main",{className:"auth-shell",children:e.jsx(a,{})})],args:{kicker:"Coseeing SSO",title:"Welcome back",copy:"Sign in to continue to your Coseeing account and connected services.",variant:"auth"}},n={args:{children:e.jsxs("form",{className:"grid gap-20",children:[e.jsx(d,{label:"Email",htmlFor:"ap-email",children:e.jsx(m,{id:"ap-email",type:"email",placeholder:"you@example.com"})}),e.jsx(d,{label:"Password",htmlFor:"ap-pw",children:e.jsx(m,{id:"ap-pw",type:"password",placeholder:"••••••••"})}),e.jsx(t,{variant:"primary",theme:"dark",type:"submit",children:"登入"})]})}},s={args:{variant:"task",title:"Confirm your email",copy:"We sent a verification link to your inbox. Enter the code to continue.",children:e.jsxs("form",{className:"grid gap-20",children:[e.jsx(d,{label:"Verification code",htmlFor:"ap-code",children:e.jsx(m,{id:"ap-code",inputMode:"numeric",placeholder:"123456"})}),e.jsx(t,{variant:"primary",theme:"light",type:"submit",children:"Verify"})]})}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <form className="grid gap-20">
        <Field label="Email" htmlFor="ap-email">
          <Input id="ap-email" type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Password" htmlFor="ap-pw">
          <Input id="ap-pw" type="password" placeholder="••••••••" />
        </Field>
        <Button variant="primary" theme="dark" type="submit">
          登入
        </Button>
      </form>
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "task",
    title: "Confirm your email",
    copy: "We sent a verification link to your inbox. Enter the code to continue.",
    children: <form className="grid gap-20">
        <Field label="Verification code" htmlFor="ap-code">
          <Input id="ap-code" inputMode="numeric" placeholder="123456" />
        </Field>
        <Button variant="primary" theme="light" type="submit">
          Verify
        </Button>
      </form>
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const S=["Login","TaskVariant"];export{n as Login,s as TaskVariant,S as __namedExportsOrder,q as default};
