function plural(e){return e>1&&5>e&&1!==~~(e/10)}function translate(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"pár vteřin":"pár vteřinami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?i+(plural(e)?"minuty":"minut"):i+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?i+(plural(e)?"hodiny":"hodin"):i+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?i+(plural(e)?"dny":"dní"):i+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?i+(plural(e)?"měsíce":"měsíců"):i+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?i+(plural(e)?"roky":"let"):i+"lety"}}var months="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");require("../moment").lang("cs",{months:months,monthsShort:monthsShort,monthsParse:function(e,t){var n,r=[];for(n=0;12>n;n++)r[n]=RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(months,monthsShort),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},ordinal:"%d.",week:{dow:1,doy:4}});