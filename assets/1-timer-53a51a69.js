import{f as l,i as m}from"./vendor-77e16229.js";let c;const a=document.querySelector("button"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");a.disabled=!0;a.addEventListener("click",()=>{const t=Date.now(),e=c.getTime()-t;C(e)});function y(t){const r=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);return{days:r,hours:d,minutes:u,seconds:i}}function p(t){const{days:o,hours:e,minutes:n,seconds:s}=t;f.textContent=o.toString().padStart(2,"0"),h.textContent=e.toString().padStart(2,"0"),S.textContent=n.toString().padStart(2,"0"),g.textContent=s.toString().padStart(2,"0")}function C(t){const o=setInterval(()=>{const{days:e,hours:n,minutes:s,seconds:r}=y(t);p({days:e,hours:n,minutes:s,seconds:r}),t-=1e3,t<0&&clearInterval(o)},1e3)}l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){c=t[0],c.getTime()<Date.now()?(m.show({message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#ef4040",position:"topCenter",messageSize:"16px",messageLineHeight:"150%",iconColor:"white"}),a.disabled=!0):a.disabled=!1}});
//# sourceMappingURL=1-timer-53a51a69.js.map
