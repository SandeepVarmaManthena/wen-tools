var g=Object.defineProperty;var E=(r,e,n)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var l=(r,e,n)=>E(r,typeof e!="symbol"?e+"":e,n);class u extends Error{constructor(n,c,s){super(n);l(this,"code");l(this,"data");this.name="SignTxnsError",this.code=c,this.data=s}}const m=100+window.screenX,f=100+window.screenY,h=`width=500,height=750,left=${m},top=${f}`,w="https://lute.app",p="kiaoohollfkjhikdifohdckeidckokjh";class k{constructor(e){l(this,"siteName");l(this,"forceWeb",!1);this.siteName=e}async isExtensionInstalled(){return await fetch(`chrome-extension://${p}/assets/icon-16.png`).then(()=>!0).catch(()=>!1)}connect(e){return new Promise(async(n,c)=>{const s=this.forceWeb?!1:await this.isExtensionInstalled();let o;s?window.dispatchEvent(new CustomEvent("lute-connect",{detail:{action:"connect",genesisID:e}})):o=open(`${w}/connect`,this.siteName,h);const a=s?"connect-response":"message";window.addEventListener(a,i);function i(d){if(!s&&d.origin!==w)return;const t=d.data||d.detail;switch(t.debug&&console.log("[Lute Debug]",t),t.action){case"ready":o==null||o.postMessage({action:"network",genesisID:e},"*");break;case"connect":window.removeEventListener(a,i),n(t.addrs);break;case"error":window.removeEventListener(a,i),c(new Error(t.message));break;case"close":window.removeEventListener(a,i),c(new Error("Operation Cancelled"));break}}})}signTxns(e){return new Promise(async(n,c)=>{const s=this.forceWeb?!1:await this.isExtensionInstalled();let o;s?window.dispatchEvent(new CustomEvent("lute-connect",{detail:{action:"sign",txns:e}})):o=open(`${w}/sign`,this.siteName,h);const a=s?"sign-txns-response":"message";window.addEventListener(a,i);function i(d){if(!s&&d.origin!==w)return;const t=d.data||d.detail;switch(t.debug&&console.log("[Lute Debug]",t),t.action){case"ready":o==null||o.postMessage({action:"sign",txns:e},"*");break;case"signed":window.removeEventListener(a,i),n(t.txns);break;case"error":window.removeEventListener(a,i),c(new u(t.message,t.code||4300));break;case"close":window.removeEventListener(a,i),c(new u("User Rejected Request",4100));break}}})}}export{u as SignTxnsError,k as default};
