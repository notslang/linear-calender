var moment=require("../../moment");exports["lang:ar-ma"]={parse:function(e){function a(a,t,n){e.equal(moment(a,t).month(),n,a+" should be month "+(n+1))}e.expect(96),moment.lang("ar-ma");var t,n="يناير:يناير_فبراير:فبراير_مارس:مارس_أبريل:أبريل_ماي:ماي_يونيو:يونيو_يوليوز:يوليوز_غشت:غشت_شتنبر:شتنبر_أكتوبر:أكتوبر_نونبر:نونبر_دجنبر:دجنبر".split("_");for(t=0;12>t;t++)n[t]=n[t].split(":"),a(n[t][0],"MMM",t),a(n[t][1],"MMM",t),a(n[t][0],"MMMM",t),a(n[t][1],"MMMM",t),a(n[t][0].toLocaleLowerCase(),"MMMM",t),a(n[t][1].toLocaleLowerCase(),"MMMM",t),a(n[t][0].toLocaleUpperCase(),"MMMM",t),a(n[t][1].toLocaleUpperCase(),"MMMM",t);e.done()},format:function(e){e.expect(22),moment.lang("ar-ma");var a,t=[["dddd, MMMM Do YYYY, h:mm:ss a","الأحد, فبراير 14 2010, 3:25:50 pm"],["ddd, hA","احد, 3PM"],["M Mo MM MMMM MMM","2 2 02 فبراير فبراير"],["YYYY YY","2010 10"],["D Do DD","14 14 14"],["d do dddd ddd dd","0 0 الأحد احد ح"],["DDD DDDo DDDD","45 45 045"],["w wo ww","8 8 08"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45 day of the year"],["L","14/02/2010"],["LL","14 فبراير 2010"],["LLL","14 فبراير 2010 15:25"],["LLLL","الأحد 14 فبراير 2010 15:25"],["l","14/2/2010"],["ll","14 فبراير 2010"],["lll","14 فبراير 2010 15:25"],["llll","احد 14 فبراير 2010 15:25"]],n=moment(new Date(2010,1,14,15,25,50,125));for(a=0;t.length>a;a++)e.equal(n.format(t[a][0]),t[a][1],t[a][0]+" ---> "+t[a][1]);e.done()},"format ordinal":function(e){e.expect(31),moment.lang("ar-ma"),e.equal(moment([2011,0,1]).format("DDDo"),"1","1"),e.equal(moment([2011,0,2]).format("DDDo"),"2","2"),e.equal(moment([2011,0,3]).format("DDDo"),"3","3"),e.equal(moment([2011,0,4]).format("DDDo"),"4","4"),e.equal(moment([2011,0,5]).format("DDDo"),"5","5"),e.equal(moment([2011,0,6]).format("DDDo"),"6","6"),e.equal(moment([2011,0,7]).format("DDDo"),"7","7"),e.equal(moment([2011,0,8]).format("DDDo"),"8","8"),e.equal(moment([2011,0,9]).format("DDDo"),"9","9"),e.equal(moment([2011,0,10]).format("DDDo"),"10","10"),e.equal(moment([2011,0,11]).format("DDDo"),"11","11"),e.equal(moment([2011,0,12]).format("DDDo"),"12","12"),e.equal(moment([2011,0,13]).format("DDDo"),"13","13"),e.equal(moment([2011,0,14]).format("DDDo"),"14","14"),e.equal(moment([2011,0,15]).format("DDDo"),"15","15"),e.equal(moment([2011,0,16]).format("DDDo"),"16","16"),e.equal(moment([2011,0,17]).format("DDDo"),"17","17"),e.equal(moment([2011,0,18]).format("DDDo"),"18","18"),e.equal(moment([2011,0,19]).format("DDDo"),"19","19"),e.equal(moment([2011,0,20]).format("DDDo"),"20","20"),e.equal(moment([2011,0,21]).format("DDDo"),"21","21"),e.equal(moment([2011,0,22]).format("DDDo"),"22","22"),e.equal(moment([2011,0,23]).format("DDDo"),"23","23"),e.equal(moment([2011,0,24]).format("DDDo"),"24","24"),e.equal(moment([2011,0,25]).format("DDDo"),"25","25"),e.equal(moment([2011,0,26]).format("DDDo"),"26","26"),e.equal(moment([2011,0,27]).format("DDDo"),"27","27"),e.equal(moment([2011,0,28]).format("DDDo"),"28","28"),e.equal(moment([2011,0,29]).format("DDDo"),"29","29"),e.equal(moment([2011,0,30]).format("DDDo"),"30","30"),e.equal(moment([2011,0,31]).format("DDDo"),"31","31"),e.done()},"format month":function(e){e.expect(12),moment.lang("ar-ma");var a,t="يناير يناير_فبراير فبراير_مارس مارس_أبريل أبريل_ماي ماي_يونيو يونيو_يوليوز يوليوز_غشت غشت_شتنبر شتنبر_أكتوبر أكتوبر_نونبر نونبر_دجنبر دجنبر".split("_");for(a=0;t.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),t[a],t[a]);e.done()},"format week":function(e){e.expect(7),moment.lang("ar-ma");var a,t="الأحد احد ح_الإتنين اتنين ن_الثلاثاء ثلاثاء ث_الأربعاء اربعاء ر_الخميس خميس خ_الجمعة جمعة ج_السبت سبت س".split("_");for(a=0;t.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),t[a],t[a]);e.done()},from:function(e){e.expect(30),moment.lang("ar-ma");var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"ثوان","44 seconds = a few seconds"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"دقيقة","45 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"دقيقة","89 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"2 دقائق","90 seconds = 2 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"44 دقائق","44 minutes = 44 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"ساعة","45 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"ساعة","89 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"2 ساعات","90 minutes = 2 hours"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"5 ساعات","5 hours = 5 hours"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"21 ساعات","21 hours = 21 hours"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"يوم","22 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"يوم","35 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"2 أيام","36 hours = 2 days"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"يوم","1 day = a day"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"5 أيام","5 days = 5 days"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"25 أيام","25 days = 25 days"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"شهر","26 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"شهر","30 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"شهر","45 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"2 أشهر","46 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"2 أشهر","75 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"3 أشهر","76 days = 3 months"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"شهر","1 month = a month"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"5 أشهر","5 months = 5 months"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"11 أشهر","344 days = 11 months"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"سنة","345 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"سنة","547 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"2 سنوات","548 days = 2 years"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"سنة","1 year = a year"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"5 سنوات","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),moment.lang("ar-ma"),e.equal(moment(3e4).from(0),"في ثوان","prefix"),e.equal(moment(0).from(3e4),"منذ ثوان","suffix"),e.done()},"now from now":function(e){e.expect(1),moment.lang("ar-ma"),e.equal(moment().fromNow(),"منذ ثوان","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),moment.lang("ar-ma"),e.equal(moment().add({s:30}).fromNow(),"في ثوان","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"في 5 أيام","in 5 days"),e.done()},"calendar day":function(e){e.expect(6),moment.lang("ar-ma");var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"اليوم على الساعة 02:00","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"اليوم على الساعة 02:25","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"اليوم على الساعة 03:00","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"غدا على الساعة 02:00","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"اليوم على الساعة 01:00","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"أمس على الساعة 02:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15),moment.lang("ar-ma");var a,t;for(a=2;7>a;a++)t=moment().add({d:a}),e.equal(t.calendar(),t.format("dddd [على الساعة] LT"),"Today + "+a+" days current time"),t.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(t.calendar(),t.format("dddd [على الساعة] LT"),"Today + "+a+" days beginning of day"),t.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(t.calendar(),t.format("dddd [على الساعة] LT"),"Today + "+a+" days end of day");e.done()},"calendar last week":function(e){for(e.expect(15),moment.lang("ar-ma"),i=2;7>i;i++)m=moment().subtract({d:i}),e.equal(m.calendar(),m.format("dddd [على الساعة] LT"),"Today - "+i+" days current time"),m.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(m.calendar(),m.format("dddd [على الساعة] LT"),"Today - "+i+" days beginning of day"),m.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(m.calendar(),m.format("dddd [على الساعة] LT"),"Today - "+i+" days end of day");e.done()},"calendar all else":function(e){e.expect(4),moment.lang("ar-ma");var a=moment().subtract({w:1}),t=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"1 week ago"),e.equal(t.calendar(),t.format("L"),"in 1 week"),a=moment().subtract({w:2}),t=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"2 weeks ago"),e.equal(t.calendar(),t.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2011,11,31]).week(),1,"Dec 31 2011 should be week 1"),e.equal(moment([2012,0,6]).week(),1,"Jan  6 2012 should be week 1"),e.equal(moment([2012,0,7]).week(),2,"Jan  7 2012 should be week 2"),e.equal(moment([2012,0,13]).week(),2,"Jan 13 2012 should be week 2"),e.equal(moment([2012,0,14]).week(),3,"Jan 14 2012 should be week 3"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2006,11,30]).week(),1,"Dec 30 2006 should be week 1"),e.equal(moment([2007,0,5]).week(),1,"Jan  5 2007 should be week 1"),e.equal(moment([2007,0,6]).week(),2,"Jan  6 2007 should be week 2"),e.equal(moment([2007,0,12]).week(),2,"Jan 12 2007 should be week 2"),e.equal(moment([2007,0,13]).week(),3,"Jan 13 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,29]).week(),1,"Dec 29 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,4]).week(),1,"Jan  4 2008 should be week 1"),e.equal(moment([2008,0,5]).week(),2,"Jan  5 2008 should be week 2"),e.equal(moment([2008,0,11]).week(),2,"Jan 11 2008 should be week 2"),e.equal(moment([2008,0,12]).week(),3,"Jan 12 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,28]).week(),1,"Dec 28 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,3]).week(),1,"Jan  3 2003 should be week 1"),e.equal(moment([2003,0,4]).week(),2,"Jan  4 2003 should be week 2"),e.equal(moment([2003,0,10]).week(),2,"Jan 10 2003 should be week 2"),e.equal(moment([2003,0,11]).week(),3,"Jan 11 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,27]).week(),1,"Dec 27 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,2]).week(),1,"Jan  2 2009 should be week 1"),e.equal(moment([2009,0,3]).week(),2,"Jan  3 2009 should be week 2"),e.equal(moment([2009,0,9]).week(),2,"Jan  9 2009 should be week 2"),e.equal(moment([2009,0,10]).week(),3,"Jan 10 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(5),e.equal(moment([2009,11,26]).week(),1,"Dec 26 2009 should be week 1"),e.equal(moment([2010,0,1]).week(),1,"Jan  1 2010 should be week 1"),e.equal(moment([2010,0,2]).week(),2,"Jan  2 2010 should be week 2"),e.equal(moment([2010,0,8]).week(),2,"Jan  8 2010 should be week 2"),e.equal(moment([2010,0,9]).week(),3,"Jan  9 2010 should be week 3"),e.done()},"weeks year starting saturday":function(e){e.expect(5),e.equal(moment([2011,0,1]).week(),1,"Jan  1 2011 should be week 1"),e.equal(moment([2011,0,7]).week(),1,"Jan  7 2011 should be week 1"),e.equal(moment([2011,0,8]).week(),2,"Jan  8 2011 should be week 2"),e.equal(moment([2011,0,14]).week(),2,"Jan 14 2011 should be week 2"),e.equal(moment([2011,0,15]).week(),3,"Jan 15 2011 should be week 3"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2011,11,31]).format("w ww wo"),"1 01 1","Dec 31 2011 should be week 1"),e.equal(moment([2012,0,6]).format("w ww wo"),"1 01 1","Jan  6 2012 should be week 1"),e.equal(moment([2012,0,7]).format("w ww wo"),"2 02 2","Jan  7 2012 should be week 2"),e.equal(moment([2012,0,13]).format("w ww wo"),"2 02 2","Jan 13 2012 should be week 2"),e.equal(moment([2012,0,14]).format("w ww wo"),"3 03 3","Jan 14 2012 should be week 3"),e.done()}};