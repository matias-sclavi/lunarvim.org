import{r as t,o as e,c as o,a as n,b as c,F as p,d as s,e as l}from"./app.07cd63e6.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=n("h1",{id:"autocommands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autocommands","aria-hidden":"true"},"#"),s(" Autocommands")],-1),m=n("p",null,[s("To set up autocommands use "),n("code",null,"lvim.autocommands.custom_groups"),s(". Autocommands are defined in the form "),n("code",null,"{ Event, filetype, command }"),s(". This will run a command at a given event for the given filetype.")],-1),d=n("p",null,[s("To view help on autocommands: "),n("code",null,":h autocmd")],-1),_=s("Here is a "),h={href:"https://tech.saigonist.com/b/code/list-all-vim-script-events.html",target:"_blank",rel:"noopener noreferrer"},k=s("list of events"),b=l(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>autocommands<span class="token punctuation">.</span>custom_groups <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">-- On entering a lua file, set the tab spacing and shift width to 8</span>
  <span class="token punctuation">{</span> <span class="token string">&quot;BufWinEnter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.lua&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;setlocal ts=8 sw=8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">-- On entering insert mode in any file, scroll the window so the cursor line is centered</span>
  <span class="token punctuation">{</span><span class="token string">&quot;InsertEnter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:normal zz&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1);function f(g,v){const a=t("ExternalLinkIcon");return e(),o(p,null,[r,m,d,n("p",null,[_,n("a",h,[k,c(a)])]),b],64)}var w=u(i,[["render",f]]);export{w as default};
