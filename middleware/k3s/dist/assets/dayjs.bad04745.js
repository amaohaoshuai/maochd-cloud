var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}function n(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var r,i,s={exports:{}},o=s.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",f="month",c="quarter",h="year",d="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,o=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:h,w:u,d:a,D:d,h:o,m:s,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",v={};v[w]=y;var D=function(t){return t instanceof _},Y=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(w=r),r||!n&&w},g=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},S=$;S.l=Y,S.i=D,S.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function y(t){this.$L=Y(t.locale,null,!0),this.parse(t)}var p=y.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return S},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return g(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<g(t)},p.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!S.u(e)||e,c=S.p(t),l=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},M=this.$W,y=this.$M,p=this.$D,$="set"+(this.$u?"UTC":"");switch(c){case h:return r?l(1,0):l(31,11);case f:return r?l(1,y):l(0,y+1);case u:var w=this.$locale().weekStart||0,v=(M<w?M+7:M)-w;return l(r?p-v:p+(6-v),y);case a:case d:return m($+"Hours",0);case o:return m($+"Minutes",1);case s:return m($+"Seconds",2);case i:return m($+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=S.p(t),c="set"+(this.$u?"UTC":""),l=(n={},n[a]=c+"Date",n[d]=c+"Date",n[f]=c+"Month",n[h]=c+"FullYear",n[o]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[u],m=u===a?this.$D+(e-this.$W):e;if(u===f||u===h){var M=this.clone().set(d,1);M.$d[l](m),M.init(),this.$d=M.set(d,Math.min(this.$D,M.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[S.p(t)]()},p.add=function(r,c){var d,l=this;r=Number(r);var m=S.p(c),M=function(t){var e=g(l);return S.w(e.date(e.date()+Math.round(t*r)),l)};if(m===f)return this.set(f,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===a)return M(1);if(m===u)return M(7);var y=(d={},d[s]=e,d[o]=n,d[i]=t,d)[m]||1,p=this.$d.getTime()+r*y;return S.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,f=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},h=function(t){return S.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:c(n.monthsShort,a,f,3),MMMM:c(f,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,u,2),ddd:c(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(M,(function(t,e){return e||m[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,l){var m,M=S.p(d),y=g(r),p=(y.utcOffset()-this.utcOffset())*e,$=this-y,w=S.m(this,y);return w=(m={},m[h]=w/12,m[f]=w,m[c]=w/3,m[u]=($-p)/6048e5,m[a]=($-p)/864e5,m[o]=$/n,m[s]=$/e,m[i]=$/t,m)[M]||$,l?w:S.a(w)},p.daysInMonth=function(){return this.endOf(f).$D},p.$locale=function(){return v[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=Y(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return S.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),k=_.prototype;return g.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",f],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,_,g),t.$i=!0),g},g.locale=Y,g.isDayjs=D,g.unix=function(t){return g(1e3*t)},g.en=v[w],g.Ls=v,g.p={},g}(),a={exports:{}},u=a.exports=function(t,e,n){var r=e.prototype,i=function(t){return t&&(t.indexOf?t:t.s)},s=function(t,e,n,r,s){var o=t.name?t:t.$locale(),a=i(o[e]),u=i(o[n]),f=a||u.map((function(t){return t.substr(0,r)}));if(!s)return f;var c=o.weekStart;return f.map((function(t,e){return f[(e+(c||0))%7]}))},o=function(){return n.Ls[n.locale()]},a=function(t,e){return t.formats[e]||t.formats[e.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))},u=function(){var t=this;return{months:function(e){return e?e.format("MMMM"):s(t,"months")},monthsShort:function(e){return e?e.format("MMM"):s(t,"monthsShort","months",3)},firstDayOfWeek:function(){return t.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):s(t,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):s(t,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):s(t,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(t.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return u.bind(this)()},n.localeData=function(){var t=o();return{firstDayOfWeek:function(){return t.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(e){return a(t,e)},meridiem:t.meridiem,ordinal:t.ordinal}},n.months=function(){return s(o(),"months")},n.monthsShort=function(){return s(o(),"monthsShort","months",3)},n.weekdays=function(t){return s(o(),"weekdays",null,null,t)},n.weekdaysShort=function(t){return s(o(),"weekdaysShort","weekdays",3,t)},n.weekdaysMin=function(t){return s(o(),"weekdaysMin","weekdays",2,t)}},f={exports:{}},c=f.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,s={},o=function(t){return(t=+t)+(t>68?1900:2e3)},a=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],f=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},c=function(t,e){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[i,function(t){this.afternoon=c(t,!1)}],a:[i,function(t){this.afternoon=c(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=f("months"),n=(f("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=f("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,a("year")],Z:u,ZZ:u};function d(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var s=r&&r.toUpperCase();return n||i[r]||t[r]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=o.length,u=0;u<a;u+=1){var f=o[u],c=h[f],d=c&&c[0],l=c&&c[1];o[u]=l?{regex:d,parser:l}:f.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var s=i.regex,u=i.parser,f=t.substr(r),c=s.exec(f)[0];u.call(e,c),t=t.replace(c,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var a=o[1];if("string"==typeof a){var u=!0===o[2],f=!0===o[3],c=u||f,h=o[2];f&&(h=o[2]),s=this.$locale(),!u&&h&&(s=n.Ls[h]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,s=r.month,o=r.day,a=r.hours,u=r.minutes,f=r.seconds,c=r.milliseconds,h=r.zone,l=new Date,m=o||(i||s?1:l.getDate()),M=i||l.getFullYear(),y=0;i&&!s||(y=s>0?s-1:l.getMonth());var p=a||0,$=u||0,w=f||0,v=c||0;return h?new Date(Date.UTC(M,y,m,p,$,w,v+60*h.offset*1e3)):n?new Date(Date.UTC(M,y,m,p,$,w,v)):new Date(M,y,m,p,$,w,v)}catch(D){return new Date("")}}(e,a,r),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),c&&e!=this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,t)}}}(),h={exports:{}},d=h.exports=function(t,e,n){var r=e.prototype,i=r.format;n.en.ordinal=function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"},r.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return i.bind(this)(t);var r=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return i.bind(this)(s)}},l={exports:{}},m=l.exports=(r="week",i="year",function(t,e,n){var s=e.prototype;s.week=function(t){if(void 0===t&&(t=null),null!==t)return this.add(7*(t-this.week()),"day");var e=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var s=n(this).startOf(i).add(1,i).date(e),o=n(this).endOf(r);if(s.isBefore(o))return 1}var a=n(this).startOf(i).date(e).startOf(r).subtract(1,"millisecond"),u=this.diff(a,r,!0);return u<0?n(this).startOf("week").week():Math.ceil(u)},s.weeks=function(t){return void 0===t&&(t=null),this.week(t)}}),M={exports:{}},y=M.exports=function(t,e){e.prototype.weekYear=function(){var t=this.month(),e=this.week(),n=this.year();return 1===e&&11===t?n+1:0===t&&e>=52?n-1:n}},p={exports:{}},$=p.exports=function(t,e,n){e.prototype.dayOfYear=function(t){var e=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"day")}},w={exports:{}},v=w.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}},D={exports:{}},Y=D.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};!function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};n.default.locale(r,null,!0)}(s.exports);export{h as a,M as b,f as c,s as d,p as e,v as f,Y as g,m as h,w as i,D as j,e as k,a as l,$ as m,t as n,n as o,d as p,o as r,u as s,c as u,y as v,l as w};
