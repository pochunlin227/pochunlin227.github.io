import{j as e}from"./jsx-runtime-DSc7j9TF.js";import{I as r}from"./Input-hEaY8nbE.js";import{S as R}from"./Select-B8J13m8p.js";import{C as m}from"./Checkbox-BnwiXp-J.js";import{F as a,L as T,V as c}from"./Field-Hwyhh_09.js";import{B as z}from"./Button-_921Tte5.js";import"./iframe-BpbqnrN1.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-CnaM3o_f.js";const J={title:"Components/Form",parameters:{layout:"padded",docs:{description:{component:'Form primitives — **none of these exist in the Figma "Brand" file.** They are\nSSO gap-fills built on the brand tokens (the same treatment `@ory/elements-react`\ngets via the `.ory-elements` CSS variables in globals.css), so the center auth\nflows have first-class Input / Field / Checkbox / Select / ValidationMessage.'}}}},i={render:()=>e.jsxs("div",{className:"grid max-w-[40rem] gap-16",children:[e.jsx(a,{label:"Email",htmlFor:"email",children:e.jsx(r,{id:"email",type:"email",placeholder:"you@example.com"})}),e.jsx(a,{label:"Password",htmlFor:"pw",hint:"At least 8 characters.",children:e.jsx(r,{id:"pw",type:"password",placeholder:"••••••••"})})]})},l={render:()=>e.jsx("div",{className:"grid max-w-[40rem] gap-16",children:e.jsx(a,{label:"Email",htmlFor:"bad",error:"That email address is not valid.",children:e.jsx(r,{id:"bad",type:"email",defaultValue:"not-an-email",invalid:!0})})})},n={render:()=>e.jsx("div",{className:"grid max-w-[40rem] gap-16",children:e.jsx(a,{label:"Email",htmlFor:"dis",children:e.jsx(r,{id:"dis",type:"email",defaultValue:"locked@example.com",disabled:!0})})})},o={render:()=>e.jsx("div",{className:"grid max-w-[40rem] gap-16",children:e.jsx(a,{label:"Language",htmlFor:"lang",children:e.jsxs(R,{id:"lang",defaultValue:"zh-Hant",children:[e.jsx("option",{value:"zh-Hant",children:"繁體中文"}),e.jsx("option",{value:"en",children:"English"})]})})})},d={render:()=>e.jsxs("div",{className:"grid gap-12",children:[e.jsx(m,{id:"remember",label:"Remember this device",defaultChecked:!0}),e.jsx(m,{id:"tos",label:"I agree to the terms of service"}),e.jsx(m,{id:"dis",label:"Unavailable option",disabled:!0})]})},t={render:()=>e.jsxs("div",{className:"grid gap-8",children:[e.jsx(c,{variant:"danger",children:"Your session has expired. Please sign in again."}),e.jsx(c,{variant:"success",children:"Your password was updated successfully."})]})},s={render:()=>e.jsxs("form",{className:"auth-panel grid max-w-[42rem] gap-20",children:[e.jsxs("div",{className:"grid gap-4",children:[e.jsx(T,{children:"Sign in"}),e.jsx("p",{className:"typography-body2 text-neutral-dark-gray",children:"Use your Coseeing account to continue."})]}),e.jsx(a,{label:"Email",htmlFor:"login-email",children:e.jsx(r,{id:"login-email",type:"email",placeholder:"you@example.com"})}),e.jsx(a,{label:"Password",htmlFor:"login-pw",children:e.jsx(r,{id:"login-pw",type:"password",placeholder:"••••••••"})}),e.jsx(m,{id:"login-remember",label:"Remember me"}),e.jsx(z,{variant:"primary",theme:"dark",type:"submit",children:"登入"})]})};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-[40rem] gap-16">
      <Field label="Email" htmlFor="email">
        <Input id="email" type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" htmlFor="pw" hint="At least 8 characters.">
        <Input id="pw" type="password" placeholder="••••••••" />
      </Field>
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-[40rem] gap-16">
      <Field label="Email" htmlFor="bad" error="That email address is not valid.">
        <Input id="bad" type="email" defaultValue="not-an-email" invalid />
      </Field>
    </div>
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,y,F;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-[40rem] gap-16">
      <Field label="Email" htmlFor="dis">
        <Input id="dis" type="email" defaultValue="locked@example.com" disabled />
      </Field>
    </div>
}`,...(F=(y=n.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var j,f,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-[40rem] gap-16">
      <Field label="Language" htmlFor="lang">
        <Select id="lang" defaultValue="zh-Hant">
          <option value="zh-Hant">繁體中文</option>
          <option value="en">English</option>
        </Select>
      </Field>
    </div>
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,N,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid gap-12">
      <Checkbox id="remember" label="Remember this device" defaultChecked />
      <Checkbox id="tos" label="I agree to the terms of service" />
      <Checkbox id="dis" label="Unavailable option" disabled />
    </div>
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var C,I,V;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid gap-8">
      <ValidationMessage variant="danger">
        Your session has expired. Please sign in again.
      </ValidationMessage>
      <ValidationMessage variant="success">
        Your password was updated successfully.
      </ValidationMessage>
    </div>
}`,...(V=(I=t.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var E,L,M,P,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <form className="auth-panel grid max-w-[42rem] gap-20">
      <div className="grid gap-4">
        <Label>Sign in</Label>
        <p className="typography-body2 text-neutral-dark-gray">
          Use your Coseeing account to continue.
        </p>
      </div>
      <Field label="Email" htmlFor="login-email">
        <Input id="login-email" type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" htmlFor="login-pw">
        <Input id="login-pw" type="password" placeholder="••••••••" />
      </Field>
      <Checkbox id="login-remember" label="Remember me" />
      <Button variant="primary" theme="dark" type="submit">
        登入
      </Button>
    </form>
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"A full sign-in form composed from the gap-fill primitives.",...(B=(P=s.parameters)==null?void 0:P.docs)==null?void 0:B.description}}};const K=["TextInput","InvalidInput","Disabled","SelectControl","Checkboxes","ValidationMessages","LoginForm"];export{d as Checkboxes,n as Disabled,l as InvalidInput,s as LoginForm,o as SelectControl,i as TextInput,t as ValidationMessages,K as __namedExportsOrder,J as default};
