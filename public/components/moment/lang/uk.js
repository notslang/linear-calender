function plural(e,t){for(var a=e.split("_"),n=Math.min(pluralRules.length,a.length),r=-1;n>++r;)if(pluralRules[r](t))return a[r];return a[n-1]}function relativeTimeWithPlural(e,t,a){var n={mm:"хвилина_хвилини_хвилин_хвилини",hh:"година_години_годин_години",dd:"день_дня_днів_дня",MM:"місяць_місяця_місяців_місяця",yy:"рік_року_років_року"};return"m"===a?t?"хвилина":"хвилину":e+" "+plural(n[a],+e)}function monthsCaseReplace(e,t){var a={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},n=/D[oD]? *MMMM?/.test(t)?"accusative":"nominative";return a[n][e.month()]}function weekdaysCaseReplace(e,t){var a={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_")},n=/\[ ?[Вв] ?(?:попередню|наступну)? ?\] ?dddd/.test(t)?"accusative":"nominative";return a[n][e.day()]}var pluralRules=[function(e){return 1===e%10&&11!==e%100},function(e){return e%10>=2&&4>=e%10&&0===e%10%1&&(12>e%100||e%100>14)},function(e){return 0===e%10||e%10>=5&&9>=e%10&&0===e%10%1||e%100>=11&&14>=e%100&&0===e%100%1},function(){return!0}];require("../moment").lang("uk",{months:monthsCaseReplace,monthsShort:"січ_лют_бер_кві_тра_чер_лип_сер_вер_жов_лис_гру".split("_"),weekdays:weekdaysCaseReplace,weekdaysShort:"нед_пон_вів_срд_чет_птн_суб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сьогодні в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчора в] LT",nextWeek:function(){return 2===this.day()?"[У] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[В минулу] dddd [в] LT";case 1:case 2:case 4:return"[В минулий] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s тому",s:"декілька секунд",m:relativeTimeWithPlural,mm:relativeTimeWithPlural,h:"годину",hh:relativeTimeWithPlural,d:"день",dd:relativeTimeWithPlural,M:"місяць",MM:relativeTimeWithPlural,y:"рік",yy:relativeTimeWithPlural},ordinal:"%d.",week:{dow:1,doy:7}});