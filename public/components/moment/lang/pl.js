function plural(e){return 5>e%10&&e%10>1&&1!==~~(e/10)}function translate(e,t,n){var a=e+" ";switch(n){case"m":return t?"minuta":"minutę";case"mm":return a+(plural(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return a+(plural(e)?"godziny":"godzin");case"MM":return a+(plural(e)?"miesiące":"miesięcy");case"yy":return a+(plural(e)?"lata":"lat")}}require("../moment").lang("pl",{months:"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:translate,mm:translate,h:translate,hh:translate,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:translate,y:"rok",yy:translate},ordinal:"%d.",week:{dow:1,doy:4}});