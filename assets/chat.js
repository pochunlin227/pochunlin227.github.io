/* Po·AI — portfolio chat widget */
(function(){
  var CSS = `
  .pochat-fab{position:fixed;right:22px;bottom:22px;z-index:2600;width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;
    background:#1F5C4D;color:#fff;box-shadow:0 14px 34px rgba(15,15,15,.3);display:flex;align-items:center;justify-content:center;
    transition:transform .25s cubic-bezier(.34,1.56,.64,1), background .2s}
  .pochat-fab:hover{transform:scale(1.1);background:#3A7D6B}
  .pochat-fab svg{display:block}
  .pochat-fab .close-ic{display:none}
  .pochat-fab.open .chat-ic{display:none}
  .pochat-fab.open .close-ic{display:block}
  .pochat{position:fixed;right:22px;bottom:96px;z-index:2600;width:min(380px,calc(100vw - 32px));height:min(560px,calc(100vh - 130px));
    background:#FBFAF7;border:1px solid #E5E1D8;border-radius:22px;box-shadow:0 30px 80px rgba(15,15,15,.25);
    display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(16px) scale(.98);pointer-events:none;
    transition:opacity .28s ease, transform .28s cubic-bezier(.34,1.56,.64,1);
    font-family:'Poppins','Avenir Next','Segoe UI',system-ui,sans-serif}
  .pochat.open{opacity:1;transform:none;pointer-events:auto}
  .pochat-head{padding:16px 20px 14px;border-bottom:1px solid #EDEAE2;background:#fff}
  .pochat-head b{font-size:17px;font-weight:800;color:#1F5C4D;letter-spacing:.01em}
  .pochat-head b i{font-style:normal;color:#E9C29A}
  .pochat-head span{display:block;font-size:12.5px;color:#8a8a8a;margin-top:1px}
  .pochat-body{flex:1;overflow-y:auto;padding:18px 16px 8px;scroll-behavior:smooth}
  .pochat-body::-webkit-scrollbar{width:6px}
  .pochat-body::-webkit-scrollbar-thumb{background:#DDD8CC;border-radius:99px}
  .pochat-msg{display:flex;gap:10px;margin-bottom:14px;align-items:flex-end}
  .pochat-msg .ava{width:34px;height:34px;border-radius:50%;flex:none;border:1.5px solid #E5E1D8;background:#fff;object-fit:cover}
  .pochat-msg .bub{background:#fff;border:1px solid #EDEAE2;border-radius:16px 16px 16px 5px;padding:11px 15px;font-size:13.8px;
    line-height:1.6;color:#333;max-width:82%}
  .pochat-msg .bub a{color:#1F5C4D;font-weight:700}
  .pochat-msg.me{justify-content:flex-end}
  .pochat-msg.me .bub{background:#1F5C4D;color:#fff;border:none;border-radius:16px 16px 5px 16px}
  .pochat-typing .bub{display:inline-flex;gap:5px;padding:14px 16px}
  .pochat-typing .dot{width:7px;height:7px;border-radius:50%;background:#B9CDC4;animation:pochatBlink 1.2s infinite}
  .pochat-typing .dot:nth-child(2){animation-delay:.2s}
  .pochat-typing .dot:nth-child(3){animation-delay:.4s}
  @keyframes pochatBlink{0%,80%,100%{opacity:.3}40%{opacity:1}}
  .pochat-chips{padding:2px 16px 10px;display:flex;flex-direction:column;gap:8px}
  .pochat-chips button{text-align:left;font:inherit;font-size:13.5px;font-weight:600;color:#333;background:#F4F1EC;
    border:1px solid #E5E1D8;border-radius:14px;padding:11px 15px;cursor:pointer;transition:all .2s}
  .pochat-chips button:hover{background:#fff;border-color:#1F5C4D;color:#1F5C4D}
  .pochat-foot{padding:12px 14px 14px;background:#fff;border-top:1px solid #EDEAE2;display:flex;gap:9px}
  .pochat-foot input{flex:1;font:inherit;font-size:14px;padding:12px 16px;border:1.5px solid #E5E1D8;border-radius:99px;outline:none;background:#FBFAF7}
  .pochat-foot input:focus{border-color:#1F5C4D}
  .pochat-foot button{width:44px;height:44px;border-radius:50%;border:none;background:#1F5C4D;color:#fff;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:background .2s;flex:none}
  .pochat-foot button:hover{background:#3A7D6B}
  .pochat-note{text-align:center;font-size:10.5px;color:#b5b0a6;padding:0 0 8px;background:#fff}
  @media(max-width:640px){.pochat{right:16px;bottom:88px}.pochat-fab{right:16px;bottom:16px}}
  `;

  var ANSWERS = [
    {k:['hire','job','opportunit','recruit','opening','available','freelance','僱','招','工作'],
     a:"Po is open to conversations! She's a senior product designer & strategist with 8 years across Booking.com, Dyson, and civic tech — currently consulting in Singapore.<br><br>The fastest way to reach her: <a href='mailto:pochun.lin@thepacinglabs.com'>pochun.lin@thepacinglabs.com</a> or <a href='https://www.linkedin.com/in/pochunlin' target='_blank'>LinkedIn</a> ✉️"},
    {k:['start','which case','recommend','first','begin','看哪','推薦'],
     a:"Start with <a href='booking-for-business.html'>Booking.com for Business App</a> — her featured case study: framing a post-booking gap, shaping the MVP, and shipping an AI-expense mobile app to 20K users in 3 months.<br><br>If you're into growth & experimentation, <a href='promoted-users.html'>Promoted Users</a> is a great second read. (Some studies need a passcode — <a href='mailto:pochun.lin@thepacinglabs.com'>reach out</a> for one!)"},
    {k:['portfolio','built','build this','website','made this','怎麼做','網站'],
     a:"This site was designed and built by Po together with <b>Claude Code</b> (Anthropic's AI coding agent) — hand-written HTML/CSS on GitHub Pages, no site builder. Even this chat widget and the animated hero illustration were made that way 🤖<br><br>It's part of how she works: AI-assisted workflows from problem framing to shipped product."},
    {k:['process','how does','how do you','method','approach','流程','方法'],
     a:"Po's work is hypothesis-driven: measure before you move (she once ran a one-month A/A test before designing anything), write the hypothesis with guardrails, prototype, test with users, then ship behind an experiment.<br><br>You can see the full method in any <a href='projects.html'>case study</a> — they're written decision-first: what was rejected, what shipped, and why."},
    {k:['who is','about po','background','experience','story','她是','介紹'],
     a:"Po Chun Lin was born in Taiwan, discovered design in New York (MFA at Pratt), and built her career in Singapore. 8 years across travel, e-commerce, enterprise, accessibility, and AI experiences — Booking.com, Dyson, NYC government, and nonprofits.<br><br>More on the <a href='about.html'>About page</a> 🌏"},
    {k:['strategy','strategist','策略'],
     a:"Beyond pixels, Po works upstream: roadmap workshops, impact×confidence prioritization, cross-team alignment, and committing design to business OKRs. Her <a href='marketing-transformation.html'>Marketing Transformation</a> case shows her leading five growth bets across five organizations to 112% of the acquisition goal."},
    {k:['ai','artificial','claude','llm','machine'],
     a:"Po designs <i>with</i> AI and <i>for</i> AI: she shipped an AI expense-automation feature at Booking.com, prototypes with Claude Code and Cursor, and built this entire portfolio AI-assisted.<br><br>She believes the craft is shifting from drawing screens to directing outcomes 🤝"},
    {k:['passcode','locked','password','鎖','密碼'],
     a:"Some case studies contain confidential metrics, so they're passcode-protected. Po shares access with recruiters and collaborators — just <a href='mailto:pochun.lin@thepacinglabs.com'>drop her a note</a> or message her on <a href='https://www.linkedin.com/in/pochunlin' target='_blank'>LinkedIn</a> 🔑"},
    {k:['mentor','coffee','chat','advice','導師','請教'],
     a:"Po serves as Standing Director & Design Lead at Coseeing Association and enjoys paying it forward. For mentorship or a virtual coffee, reach out on <a href='https://www.linkedin.com/in/pochunlin' target='_blank'>LinkedIn</a> ☕"},
    {k:['contact','email','reach','linkedin','聯絡','聯繫'],
     a:"📮 Email: <a href='mailto:pochun.lin@thepacinglabs.com'>pochun.lin@thepacinglabs.com</a><br>💼 LinkedIn: <a href='https://www.linkedin.com/in/pochunlin' target='_blank'>linkedin.com/in/pochunlin</a>"},
    {k:['play','art','photo','illustration','interactive','video'],
     a:"Off the clock, Po makes interactive installations (check the videos on the <a href='play.html'>Play page</a>), illustration, and photography from her three cities. The 21st Century Telephone Game is a favorite 🎨"},
    {k:['dyson','support home'],
     a:"At Dyson, Po unified fragmented support flows across 6 APAC markets into one Support Home — mobile exit rates dropped 25.7%, without any new backend. Full story: <a href='dyson-support-home.html'>Dyson Support Home</a>"},
    {k:['booking','b4b','business travel'],
     a:"Po spent 4 years on Booking.com for Business — designing the mobile app with AI expense automation (20K users in 3 months), cross-system growth experiments, and the marketing transformation that hit 112% of the acquisition OKR. Start here: <a href='booking-for-business.html'>the app case study</a> ✈️"}
  ];
  var FALLBACK = "Good question! I'm a mini-Po with a curated brain — for the full answer, ask the real one: <a href='mailto:pochun.lin@thepacinglabs.com'>pochun.lin@thepacinglabs.com</a> 😄<br><br>Or try one of the topics below!";
  var CHIPS = [
    "I'd love to hire Po",
    "Which case study should I start with?",
    "How was this portfolio built?",
    "What's Po's design process?"
  ];

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.innerHTML = `
    <button class="pochat-fab" type="button" aria-label="Chat with Po AI">
      <svg class="chat-ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      <svg class="close-ic" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="pochat" role="dialog" aria-label="Po AI chat">
      <div class="pochat-head"><b>Po·AI <i>✦</i></b><span>Ask anything about Po</span></div>
      <div class="pochat-body"></div>
      <div class="pochat-chips"></div>
      <div class="pochat-foot">
        <input type="text" placeholder="Ask anything about Po…" aria-label="Your question">
        <button type="button" aria-label="Send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
      </div>
      <div class="pochat-note">Scripted mini-Po · the real one replies by email</div>
    </div>`;
  document.body.appendChild(root);

  var fab = root.querySelector('.pochat-fab');
  var panel = root.querySelector('.pochat');
  var body = root.querySelector('.pochat-body');
  var chipsBox = root.querySelector('.pochat-chips');
  var input = root.querySelector('.pochat-foot input');
  var send = root.querySelector('.pochat-foot button');
  var greeted = false;

  function el(html){ var d=document.createElement('div'); d.innerHTML=html; return d.firstElementChild; }
  function scrollDown(){ body.scrollTop = body.scrollHeight; }

  function botSay(html, delay){
    var typing = el('<div class="pochat-msg pochat-typing"><img class="ava" src="assets/po-avatar.png" alt=""><span class="bub"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span></div>');
    body.appendChild(typing); scrollDown();
    setTimeout(function(){
      typing.remove();
      body.appendChild(el('<div class="pochat-msg"><img class="ava" src="assets/po-avatar.png" alt=""><div class="bub">'+html+'</div></div>'));
      scrollDown();
    }, delay || 750);
  }
  function meSay(text){
    body.appendChild(el('<div class="pochat-msg me"><div class="bub"></div></div>'));
    body.lastElementChild.querySelector('.bub').textContent = text;
    scrollDown();
  }
  function answer(q){
    var s = q.toLowerCase();
    for(var i=0;i<ANSWERS.length;i++){
      for(var j=0;j<ANSWERS[i].k.length;j++){
        if(s.indexOf(ANSWERS[i].k[j])>-1){ return ANSWERS[i].a; }
      }
    }
    return FALLBACK;
  }
  function ask(q){
    if(!q) return;
    meSay(q);
    botSay(answer(q), 800 + Math.random()*500);
  }
  function renderChips(){
    chipsBox.innerHTML='';
    CHIPS.forEach(function(c){
      var b=document.createElement('button');
      b.type='button'; b.textContent=c;
      b.addEventListener('click', function(){ ask(c); });
      chipsBox.appendChild(b);
    });
  }

  fab.addEventListener('click', function(){
    var open = panel.classList.toggle('open');
    fab.classList.toggle('open', open);
    if(open && !greeted){
      greeted = true;
      botSay("Hi! I'm <b>Po·AI</b> — a pocket version of Po Chun Lin 👋<br>Ask me about her work, process, or what makes her tick.", 600);
      renderChips();
    }
    if(open) setTimeout(function(){ input.focus(); }, 300);
  });
  send.addEventListener('click', function(){ ask(input.value.trim()); input.value=''; });
  input.addEventListener('keydown', function(e){ if(e.key==='Enter'){ ask(input.value.trim()); input.value=''; } });
})();
