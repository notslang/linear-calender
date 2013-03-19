(function(e){function t(e,t){return function(n){return u(e.call(this,n),t)}}function n(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function i(){}function r(e){a(this,e)}function s(e){var t=this._data={},n=e.years||e.year||e.y||0,i=e.months||e.month||e.M||0,r=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,a=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,d=e.seconds||e.second||e.s||0,c=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=c+1e3*d+6e4*u+36e5*a,this._days=s+7*r,this._months=i+12*n,t.milliseconds=c%1e3,d+=o(c/1e3),t.seconds=d%60,u+=o(d/60),t.minutes=u%60,a+=o(u/60),t.hours=a%24,s+=o(a/24),s+=7*r,t.days=s%30,i+=o(s/30),t.months=i%12,n+=o(i/12),t.years=n}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function o(e){return 0>e?Math.ceil(e):Math.floor(e)}function u(e,t){for(var n=e+"";t>n.length;)n="0"+n;return n}function d(e,t,n){var i,r=t._milliseconds,s=t._days,a=t._months;r&&e._d.setTime(+e+r*n),s&&e.date(e.date()+s*n),a&&(i=e.date(),e.date(1).month(e.month()+a*n).date(Math.min(i,e.daysInMonth())))}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function l(e,t){var n,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),s=0;for(n=0;i>n;n++)~~e[n]!==~~t[n]&&s++;return s+r}function f(e,t){return t.abbr=e,A[e]||(A[e]=new i),A[e].set(t),A[e]}function h(e){return e?(!A[e]&&C&&require("./lang/"+e),A[e]):j.fn._lang}function m(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function p(e){var t,n,i=e.match(z);for(t=0,n=i.length;n>t;t++)i[t]=rt[i[t]]?rt[i[t]]:m(i[t]);return function(r){var s="";for(t=0;n>t;t++)s+="function"==typeof i[t].call?i[t].call(r,e):i[t];return s}}function g(e,t){function n(t){return e.lang().longDateFormat(t)||t}for(var i=5;i--&&U.test(t);)t=t.replace(U,n);return tt[t]||(tt[t]=p(t)),tt[t](e)}function _(e){switch(e){case"DDDD":return W;case"YYYY":return Z;case"YYYYY":return B;case"S":case"SS":case"SSS":case"DDD":return P;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return R;case"X":return I;case"Z":case"ZZ":return $;case"T":return J;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return N;default:return RegExp(e.replace("\\",""))}}function y(e,t,n){var i,r=n._a;switch(e){case"M":case"MM":r[1]=null==t?0:~~t-1;break;case"MMM":case"MMMM":i=h(n._l).monthsParse(t),null!=i?r[1]=i:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=t&&(r[2]=~~t);break;case"YY":r[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":r[0]=~~t;break;case"a":case"A":n._isPm="pm"===(t+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":r[3]=~~t;break;case"m":case"mm":r[4]=~~t;break;case"s":case"ss":r[5]=~~t;break;case"S":case"SS":case"SSS":r[6]=~~(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,i=(t+"").match(Q),i&&i[1]&&(n._tzh=~~i[1]),i&&i[2]&&(n._tzm=~~i[2]),i&&"+"===i[0]&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}null==t&&(n._isValid=!1)}function v(e){var t,n,i=[];if(!e._d){for(t=0;7>t;t++)e._a[t]=i[t]=null==e._a[t]?2===t?1:0:e._a[t];i[3]+=e._tzh||0,i[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(i[0],i[1],i[2]),n.setUTCHours(i[3],i[4],i[5],i[6])):(n.setFullYear(i[0],i[1],i[2]),n.setHours(i[3],i[4],i[5],i[6])),e._d=n}}function M(e){var t,n,i=e._f.match(z),r=e._i;for(e._a=[],t=0;i.length>t;t++)n=(_(i[t]).exec(r)||[])[0],n&&(r=r.slice(r.indexOf(n)+n.length)),rt[i[t]]&&y(i[t],n,e);e._isPm&&12>e._a[3]&&(e._a[3]+=12),e._isPm===!1&&12===e._a[3]&&(e._a[3]=0),v(e)}function D(e){for(var t,n,i,s,o=99;e._f.length;){if(t=a({},e),t._f=e._f.pop(),M(t),n=new r(t),n.isValid()){i=n;break}s=l(t._a,n.toArray()),o>s&&(o=s,i=n)}a(e,i)}function b(e){var t,n=e._i;if(G.exec(n)){for(e._f="YYYY-MM-DDT",t=0;4>t;t++)if(V[t][1].exec(n)){e._f+=V[t][0];break}$.exec(n)&&(e._f+=" Z"),M(e)}else e._d=new Date(n)}function k(t){var n=t._i,i=H.exec(n);n===e?t._d=new Date:i?t._d=new Date(+i[1]):"string"==typeof n?b(t):c(n)?(t._a=n.slice(0),v(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function x(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function Y(e,t,n){var i=L(Math.abs(e)/1e3),r=L(i/60),s=L(r/60),a=L(s/24),o=L(a/365),u=45>i&&["s",i]||1===r&&["m"]||45>r&&["mm",r]||1===s&&["h"]||22>s&&["hh",s]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",L(a/30)]||1===o&&["y"]||["yy",o];return u[2]=t,u[3]=e>0,u[4]=n,x.apply({},u)}function w(e,t,n){var i=n-t,r=n-e.day();return r>i&&(r-=7),i-7>r&&(r+=7),Math.ceil(j(e).add("d",r).dayOfYear()/7)}function T(e){var t=e._i,n=e._f;return null===t||""===t?null:("string"==typeof t&&(e._i=t=h().preparse(t)),j.isMoment(t)?(e=a({},t),e._d=new Date(+t._d)):n?c(n)?D(e):M(e):k(e),new r(e))}function S(e,t){j.fn[e]=j.fn[e+"s"]=function(e){var n=this._isUTC?"UTC":"";return null!=e?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}function q(e){j.duration.fn[e]=function(){return this._data[e]}}function E(e,t){j.duration.fn["as"+e]=function(){return+this/t}}for(var j,O,F="2.0.0",L=Math.round,A={},C="undefined"!=typeof module&&module.exports,H=/^\/?Date\((\-?\d+)/i,z=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,N=/\d\d?/,P=/\d{1,3}/,W=/\d{3}/,Z=/\d{1,4}/,B=/[+\-]?\d{1,6}/,R=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,$=/Z|[\+\-]\d\d:?\d\d/i,J=/T/i,I=/[\+\-]?\d+(\.\d{1,3})?/,G=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,X="YYYY-MM-DDTHH:mm:ssZ",V=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Q=/([\+\-]|\d\d)/gi,K="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),et={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},tt={},nt="DDD w W M D d".split(" "),it="M D H h m s w W".split(" "),rt={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(~~(e/60),2)+":"+u(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(~~(10*e/6),4)},X:function(){return this.unix()}};nt.length;)O=nt.pop(),rt[O+"o"]=n(rt[O]);for(;it.length;)O=it.pop(),rt[O+O]=t(rt[O],2);for(rt.DDDD=t(rt.DDD,3),i.prototype={set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,i;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=j([2e3,t]),i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=RegExp(i.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,i){var r=this._relativeTime[n];return"function"==typeof r?r(e,t,n,i):r.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return w(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},j=function(e,t,n){return T({_i:e,_f:t,_l:n,_isUTC:!1})},j.utc=function(e,t,n){return T({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},j.unix=function(e){return j(1e3*e)},j.duration=function(e,t){var n,i=j.isDuration(e),r="number"==typeof e,a=i?e._data:r?{}:e;return r&&(t?a[t]=e:a.milliseconds=e),n=new s(a),i&&e.hasOwnProperty("_lang")&&(n._lang=e._lang),n},j.version=F,j.defaultFormat=X,j.lang=function(t,n){return t?(n?f(t,n):A[t]||h(t),j.duration.fn._lang=j.fn._lang=h(t),e):j.fn._lang._abbr},j.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),h(e)},j.isMoment=function(e){return e instanceof r},j.isDuration=function(e){return e instanceof s},j.fn=r.prototype={clone:function(){return j(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return j.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?j.utc(this._a):j(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var t=g(this,e||j.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;return n="string"==typeof e?j.duration(+t,e):j.duration(e,t),d(this,n,1),this},subtract:function(e,t){var n;return n="string"==typeof e?j.duration(+t,e):j.duration(e,t),d(this,n,-1),this},diff:function(e,t,n){var i,r,s=this._isUTC?j(e).utc():j(e).local(),a=6e4*(this.zone()-s.zone());return t&&(t=t.replace(/s$/,"")),"year"===t||"month"===t?(i=432e5*(this.daysInMonth()+s.daysInMonth()),r=12*(this.year()-s.year())+(this.month()-s.month()),r+=(this-j(this).startOf("month")-(s-j(s).startOf("month")))/i,"year"===t&&(r/=12)):(i=this-s-a,r="second"===t?i/1e3:"minute"===t?i/6e4:"hour"===t?i/36e5:"day"===t?i/864e5:"week"===t?i/6048e5:i),n?r:o(r)},from:function(e,t){return j.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(j(),e)},calendar:function(){var e=this.diff(j().startOf("day"),"days",!0),t=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){var e=this.year();return 0===e%4&&0!==e%100||0===e%400},isDST:function(){return this.zone()<j([this.year()]).zone()||this.zone()<j([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==e?t:this.add({d:e-t})},startOf:function(e){switch(e=e.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(t,n){return n=n!==e?n:"millisecond",+this.clone().startOf(n)>+j(t).startOf(n)},isBefore:function(t,n){return n=n!==e?n:"millisecond",+this.clone().startOf(n)<+j(t).startOf(n)},isSame:function(t,n){return n=n!==e?n:"millisecond",+this.clone().startOf(n)===+j(t).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return j.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var t=L((j(this).startOf("day")-j(this).startOf("year"))/864e5)+1;return null==e?t:this.add("d",e-t)},isoWeek:function(e){var t=w(this,1,4);return null==e?t:this.add("d",7*(e-t))},week:function(e){var t=this.lang().week(this);return null==e?t:this.add("d",7*(e-t))},lang:function(t){return t===e?this._lang:(this._lang=h(t),this)}},O=0;K.length>O;O++)S(K[O].toLowerCase().replace(/s$/,""),K[O]);S("year","FullYear"),j.fn.days=j.fn.day,j.fn.weeks=j.fn.week,j.fn.isoWeeks=j.fn.isoWeek,j.duration.fn=s.prototype={weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(e){var t=+this,n=Y(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:j.fn.lang};for(O in et)et.hasOwnProperty(O)&&(E(O,et[O]),q(O.toLowerCase()));E("Weeks",6048e5),j.lang("en",{ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),C&&(module.exports=j),"undefined"==typeof ender&&(this.moment=j),"function"==typeof define&&define.amd&&define("moment",[],function(){return j})}).call(this);