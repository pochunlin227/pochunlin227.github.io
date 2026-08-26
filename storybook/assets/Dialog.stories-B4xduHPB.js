import{j as e}from"./jsx-runtime-ClBOXb86.js";import{r as l}from"./iframe-DZt_JkcD.js";import{c as R}from"./cn-CnaM3o_f.js";import{c as O}from"./Icons-BhXLSfjM.js";import{B as s}from"./Button-B6jldd-L.js";import"./preload-helper-Dp1pzeXC.js";function c({open:n,onClose:t,title:a,description:m,children:p,actions:u,size:B="sm",className:N}){const d=l.useRef(null),g=l.useId();return l.useEffect(()=>{const r=d.current;r&&(n&&!r.open&&r.showModal(),!n&&r.open&&r.close())},[n]),e.jsx("dialog",{ref:d,"aria-labelledby":g,onClose:t,onClick:r=>{r.target===d.current&&t()},className:R("m-auto w-[calc(100vw-4rem)] rounded-24 border-0 bg-neutral-white p-0 shadow-[0_1.6rem_4rem_rgb(16_36_42_/_0.25)] backdrop:bg-teal-700/60 backdrop:backdrop-blur-[0.3rem]",B==="sm"?"max-w-[44rem]":"max-w-[64rem]",N),children:e.jsxs("div",{className:"relative overflow-hidden rounded-24 p-24 tablet:p-32",children:[e.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 top-0 h-6 bg-orange-PRIMARY"}),e.jsxs("div",{className:"flex items-start justify-between gap-16",children:[e.jsx("h2",{id:g,className:"typography-headline4 m-0 text-teal-700",children:a}),e.jsx("button",{type:"button","aria-label":"關閉",onClick:t,className:"flex size-32 shrink-0 cursor-pointer items-center justify-center rounded-8 border-0 bg-transparent p-0 text-teal-700 transition-colors hover:bg-bg-light-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY",children:e.jsx(O,{className:"rotate-45"})})]}),m?e.jsx("p",{className:"typography-body1 mt-8 text-teal-300",children:m}):null,p?e.jsx("div",{className:"mt-16",children:p}):null,u?e.jsx("div",{className:"mt-24 flex flex-wrap justify-end gap-12",children:u}):null]})})}c.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer actions, e.g. Buttons. Right-aligned, wraps on narrow screens."},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Dialog",component:c,parameters:{layout:"centered",docs:{description:{component:`Dialog — design-system extension (not in Figma), in the brand language: the
auth-panel signature (white rounded panel, orange top accent) over a teal
blurred backdrop. Built on the native \`<dialog>\` element — focus trap, ESC,
and inert background come from the platform; backdrop click also closes.`}}},args:{open:!1,title:"確認送出申請?",description:"送出後我們會寄一封確認信到你的信箱,完成驗證即可使用帳號。",size:"sm",onClose:()=>{}},argTypes:{size:{control:"inline-radio",options:["sm","md"]},open:{table:{disable:!0}},onClose:{table:{disable:!0}}}},o={render:n=>{const[t,a]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"small",theme:"dark",onClick:()=>a(!0),children:"開啟對話框"}),e.jsx(c,{...n,open:t,onClose:()=>a(!1),actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"small",theme:"greenStroke",onClick:()=>a(!1),children:"取消"}),e.jsx(s,{variant:"small",theme:"dark",onClick:()=>a(!1),children:"確認送出"})]})})]})}},i={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"small",theme:"danger",onClick:()=>t(!0),children:"刪除帳號"}),e.jsx(c,{open:n,onClose:()=>t(!1),title:"確定要刪除帳號嗎?",description:"此動作無法復原。你的個人資料與所有活動紀錄將被永久移除。",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"small",theme:"greenStroke",onClick:()=>t(!1),children:"取消"}),e.jsx(s,{variant:"small",theme:"danger",onClick:()=>t(!1),children:"永久刪除"})]})})]})}};var f,h,x,b,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="small" theme="dark" onClick={() => setOpen(true)}>
          開啟對話框
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} actions={<>
              <Button variant="small" theme="greenStroke" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button variant="small" theme="dark" onClick={() => setOpen(false)}>
                確認送出
              </Button>
            </>} />
      </>;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Click the trigger to open; close via ✕, ESC, backdrop, or the actions.",...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var k,j,y,C,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="small" theme="danger" onClick={() => setOpen(true)}>
          刪除帳號
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="確定要刪除帳號嗎?" description="此動作無法復原。你的個人資料與所有活動紀錄將被永久移除。" actions={<>
              <Button variant="small" theme="greenStroke" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button variant="small" theme="danger" onClick={() => setOpen(false)}>
                永久刪除
              </Button>
            </>} />
      </>;
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source},description:{story:"Destructive confirmation — pairs with the danger Button.",...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};const I=["Playground","Confirmation"];export{i as Confirmation,o as Playground,I as __namedExportsOrder,F as default};
