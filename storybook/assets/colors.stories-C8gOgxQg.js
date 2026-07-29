import{j as e}from"./jsx-runtime-47EJ0cPw.js";import"./iframe-DsdvttKI.js";import"./preload-helper-Dp1pzeXC.js";const f={title:"Foundations/Colors",parameters:{layout:"fullscreen",docs:{description:{component:'Colour palette — from Figma "Brand" → Colour Palette. Defined as Tailwind v4\n`@theme` tokens in `center/app/globals.css`. Complementary Blue/Green were\nadded from Figma; the Red ramp was completed to 100–700.\n\nSwatches use inline hex (not `bg-*` classes) because Tailwind\'s static scanner\ncannot see dynamically built class names — the token names are shown as labels.'}}}};function n({name:l,swatches:s}){return e.jsxs("div",{className:"grid gap-8",children:[e.jsx("h3",{className:"typography-strong1 text-teal-700",children:l}),e.jsx("div",{className:"flex flex-wrap gap-8",children:s.map(a=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx("div",{className:"h-64 w-96 rounded-8 border border-bg-warm-gray",style:{backgroundColor:a.hex}}),e.jsx("div",{className:"typography-body2 text-teal-700",children:a.token}),e.jsx("div",{className:"typography-body2 text-neutral-dark-gray uppercase",children:a.hex})]},a.label))})]})}const r=(l,s)=>s.map(([a,m])=>({label:a,token:`${l}-${a}`,hex:m})),t={render:()=>e.jsxs("div",{className:"grid gap-32 p-32",children:[e.jsx(n,{name:"Primary Dark · teal",swatches:r("teal",[["100","#718a92"],["200","#566f79"],["300","#3a5961"],["PRIMARY","#1f4147"],["500","#1a373e"],["600","#152d34"],["700","#10242a"]])}),e.jsx(n,{name:"Primary Light · orange",swatches:r("orange",[["100","#ffe099"],["200","#ffcd66"],["300","#ffb933"],["PRIMARY","#fea400"],["500","#e68f00"],["600","#cc7a00"],["700","#b26600"]])}),e.jsx(n,{name:"Complementary Blue (new)",swatches:r("blue",[["100","#add6f7"],["200","#8dc4f0"],["300","#6caae9"],["PRIMARY","#4a90e2"],["500","#407fcc"],["600","#366fb6"],["700","#2c5fa0"]])}),e.jsx(n,{name:"Complementary Green (new)",swatches:r("green",[["100","#cbe8a3"],["200","#b1da7d"],["300","#97cc57"],["PRIMARY","#7dbe31"],["500","#6aa62a"],["600","#579d23"],["700","#46851d"]])}),e.jsx(n,{name:"Accent Red",swatches:r("red",[["100","#f7bab1"],["200","#f1958a"],["300","#ec7163"],["PRIMARY","#e74c3c"],["500","#ca4336"],["600","#ad3a30"],["700","#902d2a"]])}),e.jsx(n,{name:"Background",swatches:[{label:"off-white",token:"bg-light-off-white",hex:"#f6f7f1"},{label:"beige",token:"bg-light-beige",hex:"#eee6d8"},{label:"warm-gray",token:"bg-warm-gray",hex:"#dad5c2"}]}),e.jsx(n,{name:"Neutral",swatches:[{label:"white",token:"neutral-white",hex:"#ffffff"},{label:"very-light",token:"neutral-very-light-gray",hex:"#f2f2f2"},{label:"light",token:"neutral-light-gray",hex:"#e0e0e0"},{label:"beige-gray",token:"neutral-beige-gray",hex:"#ccc8b8"},{label:"medium",token:"neutral-medium-gray",hex:"#b0b0b0"},{label:"dark",token:"neutral-dark-gray",hex:"#707070"},{label:"black",token:"neutral-black",hex:"#000000"}]})]})};var c,d,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="grid gap-32 p-32">
      <Ramp name="Primary Dark · teal" swatches={ramp("teal", [["100", "#718a92"], ["200", "#566f79"], ["300", "#3a5961"], ["PRIMARY", "#1f4147"], ["500", "#1a373e"], ["600", "#152d34"], ["700", "#10242a"]])} />
      <Ramp name="Primary Light · orange" swatches={ramp("orange", [["100", "#ffe099"], ["200", "#ffcd66"], ["300", "#ffb933"], ["PRIMARY", "#fea400"], ["500", "#e68f00"], ["600", "#cc7a00"], ["700", "#b26600"]])} />
      <Ramp name="Complementary Blue (new)" swatches={ramp("blue", [["100", "#add6f7"], ["200", "#8dc4f0"], ["300", "#6caae9"], ["PRIMARY", "#4a90e2"], ["500", "#407fcc"], ["600", "#366fb6"], ["700", "#2c5fa0"]])} />
      <Ramp name="Complementary Green (new)" swatches={ramp("green", [["100", "#cbe8a3"], ["200", "#b1da7d"], ["300", "#97cc57"], ["PRIMARY", "#7dbe31"], ["500", "#6aa62a"], ["600", "#579d23"], ["700", "#46851d"]])} />
      <Ramp name="Accent Red" swatches={ramp("red", [["100", "#f7bab1"], ["200", "#f1958a"], ["300", "#ec7163"], ["PRIMARY", "#e74c3c"], ["500", "#ca4336"], ["600", "#ad3a30"], ["700", "#902d2a"]])} />
      <Ramp name="Background" swatches={[{
      label: "off-white",
      token: "bg-light-off-white",
      hex: "#f6f7f1"
    }, {
      label: "beige",
      token: "bg-light-beige",
      hex: "#eee6d8"
    }, {
      label: "warm-gray",
      token: "bg-warm-gray",
      hex: "#dad5c2"
    }]} />
      <Ramp name="Neutral" swatches={[{
      label: "white",
      token: "neutral-white",
      hex: "#ffffff"
    }, {
      label: "very-light",
      token: "neutral-very-light-gray",
      hex: "#f2f2f2"
    }, {
      label: "light",
      token: "neutral-light-gray",
      hex: "#e0e0e0"
    }, {
      label: "beige-gray",
      token: "neutral-beige-gray",
      hex: "#ccc8b8"
    }, {
      label: "medium",
      token: "neutral-medium-gray",
      hex: "#b0b0b0"
    }, {
      label: "dark",
      token: "neutral-dark-gray",
      hex: "#707070"
    }, {
      label: "black",
      token: "neutral-black",
      hex: "#000000"
    }]} />
    </div>
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const g=["Palette"];export{t as Palette,g as __namedExportsOrder,f as default};
