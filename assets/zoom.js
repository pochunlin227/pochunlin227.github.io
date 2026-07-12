/* click-to-zoom lightbox for case study images */
(function(){
  var css='.zmodal{position:fixed;inset:0;z-index:2300;background:rgba(15,15,15,.9);display:flex;align-items:center;justify-content:center;padding:22px;opacity:0;pointer-events:none;transition:opacity .22s}'
    +'.zmodal.open{opacity:1;pointer-events:auto}'
    +'.zmodal img{max-width:96vw;max-height:92vh;width:auto;height:auto;border-radius:10px;background:#fff;box-shadow:0 30px 90px rgba(0,0,0,.5);cursor:zoom-out}'
    +'.zmodal .zclose{position:absolute;top:10px;right:20px;font-size:38px;line-height:1;color:#fff;background:none;border:none;cursor:pointer;padding:6px;z-index:2}'
    +'.zoomable{cursor:zoom-in;transition:opacity .2s}.zoomable:hover{opacity:.92}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var m=document.createElement('div');m.className='zmodal';m.setAttribute('aria-hidden','true');
  m.innerHTML='<button class="zclose" type="button" aria-label="Close image">&times;</button><img alt="">';
  document.body.appendChild(m);
  var mimg=m.querySelector('img');
  function open(src,alt){mimg.src=src;mimg.alt=alt||'';m.classList.add('open');m.setAttribute('aria-hidden','false');document.documentElement.style.overflow='hidden';}
  function close(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.documentElement.style.overflow='';setTimeout(function(){mimg.src='';},220);}
  m.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open'))close();});
  var sel='.img-full, .img-duo img, .feature .f-img img, figure > img';
  [].slice.call(document.querySelectorAll(sel)).forEach(function(img){
    if(img.closest('.zmodal')||img.closest('a'))return;
    img.classList.add('zoomable');
    img.addEventListener('click',function(){open(img.currentSrc||img.src, img.alt);});
  });
})();
