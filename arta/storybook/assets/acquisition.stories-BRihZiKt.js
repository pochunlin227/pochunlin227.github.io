const r={title:"Patterns/Acquisition Surface"},a={render:()=>`
    <div class="arta-acquisition" style="max-width:400px;padding:var(--arta-sys-space-section-gap);border-radius:var(--arta-sys-radius-media)">
      <div style="display:flex;justify-content:flex-end;margin-bottom:var(--arta-sys-space-stack-lg)">
        <button class="arta-btn arta-btn--secondary" style="border-color:var(--arta-sys-color-stroke-on-gradient-strong);color:var(--arta-sys-color-text-on-gradient)">Log in to Arta</button>
      </div>
      <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height);margin-bottom:var(--arta-sys-space-stack-md)">Welcome to<br/><b style="font-weight:var(--arta-ref-font-weight-medium)">arta</b></div>
      <p style="color:var(--arta-sys-color-text-on-gradient-secondary);margin:0 0 var(--arta-sys-space-stack-lg)">Arta is your modern wealth platform. Create your free account in minutes.</p>

      <div class="arta-glass">
        <div class="arta-field arta-field--outline">
          <input class="arta-field__input" style="width:100%;box-sizing:border-box" placeholder="Email address"/>
        </div>
        <div class="arta-field arta-field--outline arta-field--error">
          <input class="arta-field__input" style="width:100%;box-sizing:border-box" value="pochunlin227"/>
          <div class="arta-field__help">Enter a valid email.</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:var(--arta-ref-font-size-300)">Are you a <a class="arta-link" href="#">US person</a>?</span>
          <div class="arta-toggle">
            <button class="arta-toggle__opt" aria-pressed="false">Yes</button>
            <button class="arta-toggle__opt" aria-pressed="true">No</button>
          </div>
        </div>
      </div>

      <div class="arta-glass" style="margin-top:var(--arta-sys-space-stack-md)">
        <label class="arta-consent">
          <input type="checkbox" checked />
          <span class="arta-consent__text">I agree to this <a class="arta-link" href="#">Accredited Investor Declaration</a> and <a class="arta-link" href="#">Opt-In</a>.</span>
        </label>
        <label class="arta-consent">
          <input type="checkbox" />
          <span class="arta-consent__text">I agree to the contents of the <a class="arta-link" href="#">Platform Agreement</a>, <a class="arta-link" href="#">Terms</a>, and <a class="arta-link" href="#">Privacy Policy</a>.</span>
        </label>
      </div>

      <button class="arta-btn arta-btn--inverse" style="width:100%;margin-top:var(--arta-sys-space-stack-lg)" disabled>Sign up</button>
      <div style="display:flex;justify-content:center;margin-top:var(--arta-sys-space-stack-lg)">
        <button class="arta-iconbtn">→</button>
      </div>
    </div>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:16px">
      Source: real-app signup flow. Rules encoded — acquisition/application entry lives on the
      <b>gradient world</b> with glass panels + outlined transparent inputs; in-app primary CTA is the
      <b>inverse white pill</b> (not the marketing-site sky fill); error state uses coral stroke + message;
      selected toggle segment and checked boxes fill white with dark glyphs.</p>`};var t,e,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="arta-acquisition" style="max-width:400px;padding:var(--arta-sys-space-section-gap);border-radius:var(--arta-sys-radius-media)">
      <div style="display:flex;justify-content:flex-end;margin-bottom:var(--arta-sys-space-stack-lg)">
        <button class="arta-btn arta-btn--secondary" style="border-color:var(--arta-sys-color-stroke-on-gradient-strong);color:var(--arta-sys-color-text-on-gradient)">Log in to Arta</button>
      </div>
      <div style="font-family:var(--arta-sys-type-display-family);font-weight:var(--arta-ref-font-weight-light);font-size:var(--arta-ref-font-size-900);line-height:var(--arta-sys-type-display-line-height);margin-bottom:var(--arta-sys-space-stack-md)">Welcome to<br/><b style="font-weight:var(--arta-ref-font-weight-medium)">arta</b></div>
      <p style="color:var(--arta-sys-color-text-on-gradient-secondary);margin:0 0 var(--arta-sys-space-stack-lg)">Arta is your modern wealth platform. Create your free account in minutes.</p>

      <div class="arta-glass">
        <div class="arta-field arta-field--outline">
          <input class="arta-field__input" style="width:100%;box-sizing:border-box" placeholder="Email address"/>
        </div>
        <div class="arta-field arta-field--outline arta-field--error">
          <input class="arta-field__input" style="width:100%;box-sizing:border-box" value="pochunlin227"/>
          <div class="arta-field__help">Enter a valid email.</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:var(--arta-ref-font-size-300)">Are you a <a class="arta-link" href="#">US person</a>?</span>
          <div class="arta-toggle">
            <button class="arta-toggle__opt" aria-pressed="false">Yes</button>
            <button class="arta-toggle__opt" aria-pressed="true">No</button>
          </div>
        </div>
      </div>

      <div class="arta-glass" style="margin-top:var(--arta-sys-space-stack-md)">
        <label class="arta-consent">
          <input type="checkbox" checked />
          <span class="arta-consent__text">I agree to this <a class="arta-link" href="#">Accredited Investor Declaration</a> and <a class="arta-link" href="#">Opt-In</a>.</span>
        </label>
        <label class="arta-consent">
          <input type="checkbox" />
          <span class="arta-consent__text">I agree to the contents of the <a class="arta-link" href="#">Platform Agreement</a>, <a class="arta-link" href="#">Terms</a>, and <a class="arta-link" href="#">Privacy Policy</a>.</span>
        </label>
      </div>

      <button class="arta-btn arta-btn--inverse" style="width:100%;margin-top:var(--arta-sys-space-stack-lg)" disabled>Sign up</button>
      <div style="display:flex;justify-content:center;margin-top:var(--arta-sys-space-stack-lg)">
        <button class="arta-iconbtn">→</button>
      </div>
    </div>
    <p style="max-width:56ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:16px">
      Source: real-app signup flow. Rules encoded — acquisition/application entry lives on the
      <b>gradient world</b> with glass panels + outlined transparent inputs; in-app primary CTA is the
      <b>inverse white pill</b> (not the marketing-site sky fill); error state uses coral stroke + message;
      selected toggle segment and checked boxes fill white with dark glyphs.</p>\`
}`,...(s=(e=a.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const n=["SignupForm"];export{a as SignupForm,n as __namedExportsOrder,r as default};
