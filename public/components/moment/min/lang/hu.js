(function(){function e(e){function t(e,t,a,n){var _=e;switch(a){case"s":return n||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(n||t?" perc":" perce");case"mm":return _+(n||t?" perc":" perce");case"h":return"egy"+(n||t?" óra":" órája");case"hh":return _+(n||t?" óra":" órája");case"d":return"egy"+(n||t?" nap":" napja");case"dd":return _+(n||t?" nap":" napja");case"M":return"egy"+(n||t?" hónap":" hónapja");case"MM":return _+(n||t?" hónap":" hónapja");case"y":return"egy"+(n||t?" év":" éve");case"yy":return _+(n||t?" év":" éve")}return""}function a(e){return(e?"":"múlt ")+"["+n[this.day()]+"] LT[-kor]"}var n="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");e.lang("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return a.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return a.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:7}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)})();