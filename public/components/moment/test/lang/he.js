var moment=require("../../moment");exports["lang:he"]={setUp:function(e){moment.lang("he"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function a(a,n,t){e.equal(moment(a,n).month(),t,a+" should be month "+(t+1))}e.expect(96);var n,t="ינואר ינו׳_פברואר פבר׳_מרץ מרץ_אפריל אפר׳_מאי מאי_יוני יוני_יולי יולי_אוגוסט אוג׳_ספטמבר ספט׳_אוקטובר אוק׳_נובמבר נוב׳_דצמבר דצמ׳".split("_");for(n=0;12>n;n++)t[n]=t[n].split(" "),a(t[n][0],"MMM",n),a(t[n][1],"MMM",n),a(t[n][0],"MMMM",n),a(t[n][1],"MMMM",n),a(t[n][0].toLocaleLowerCase(),"MMMM",n),a(t[n][1].toLocaleLowerCase(),"MMMM",n),a(t[n][0].toLocaleUpperCase(),"MMMM",n),a(t[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(22);var a,n=[["dddd, MMMM Do YYYY, h:mm:ss a","ראשון, פברואר 14 2010, 3:25:50 pm"],["ddd, hA","א׳, 3PM"],["M Mo MM MMMM MMM","2 2 02 פברואר פבר׳"],["YYYY YY","2010 10"],["D Do DD","14 14 14"],["d do dddd ddd dd","0 0 ראשון א׳ א"],["DDD DDDo DDDD","45 45 045"],["w wo ww","8 8 08"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45 day of the year"],["L","14/02/2010"],["LL","14 בפברואר 2010"],["LLL","14 בפברואר 2010 15:25"],["LLLL","ראשון, 14 בפברואר 2010 15:25"],["l","14/2/2010"],["ll","14 פבר׳ 2010"],["lll","14 פבר׳ 2010 15:25"],["llll","א׳, 14 פבר׳ 2010 15:25"]],t=moment(new Date(2010,1,14,15,25,50,125));for(a=0;n.length>a;a++)e.equal(t.format(n[a][0]),n[a][1],n[a][0]+" ---> "+n[a][1]);e.done()},"format month":function(e){e.expect(12);var a,n="ינואר ינו׳_פברואר פבר׳_מרץ מרץ_אפריל אפר׳_מאי מאי_יוני יוני_יולי יולי_אוגוסט אוג׳_ספטמבר ספט׳_אוקטובר אוק׳_נובמבר נוב׳_דצמבר דצמ׳".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),n[a],n[a]);e.done()},"format week":function(e){e.expect(7);var a,n="ראשון א׳ א|שני ב׳ ב|שלישי ג׳ ג|רביעי ד׳ ד|חמישי ה׳ ה|שישי ו׳ ו|שבת ש׳ ש".split("|");for(a=0;n.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),n[a],n[a]);e.done()},from:function(e){e.expect(30);var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"מספר שניות","44 seconds = a few seconds"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"דקה","45 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"דקה","89 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"2 דקות","90 seconds = 2 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"44 דקות","44 minutes = 44 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"שעה","45 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"שעה","89 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"2 שעות","90 minutes = 2 hours"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"5 שעות","5 hours = 5 hours"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"21 שעות","21 hours = 21 hours"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"יום","22 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"יום","35 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"2 ימים","36 hours = 2 days"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"יום","1 day = a day"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"5 ימים","5 days = 5 days"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"25 ימים","25 days = 25 days"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"חודש","26 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"חודש","30 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"חודש","45 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"2 חודשים","46 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"2 חודשים","75 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"3 חודשים","76 days = 3 months"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"חודש","1 month = a month"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"5 חודשים","5 months = 5 months"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"11 חודשים","344 days = 11 months"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"שנה","345 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"שנה","547 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"2 שנים","548 days = 2 years"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"שנה","1 year = a year"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"5 שנים","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"בעוד מספר שניות","prefix"),e.equal(moment(0).from(3e4),"לפני מספר שניות","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"לפני מספר שניות","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"בעוד מספר שניות","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"בעוד 5 ימים","in 5 days"),e.done()},"calendar day":function(e){e.expect(6);var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"היום ב־02:00","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"היום ב־02:25","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"היום ב־03:00","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"מחר ב־02:00","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"היום ב־01:00","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"אתמול ב־02:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().add({d:a}),e.equal(n.calendar(),n.format("dddd [בשעה] LT"),"Today + "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("dddd [בשעה] LT"),"Today + "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("dddd [בשעה] LT"),"Today + "+a+" days end of day");e.done()},"calendar last week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().subtract({d:a}),e.equal(n.calendar(),n.format("[ביום] dddd [האחרון בשעה] LT"),"Today - "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[ביום] dddd [האחרון בשעה] LT"),"Today - "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[ביום] dddd [האחרון בשעה] LT"),"Today - "+a+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var a=moment().subtract({w:1}),n=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),a=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),1,"Jan  1 2012 should be week 1"),e.equal(moment([2012,0,7]).week(),1,"Jan  7 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),2,"Jan  8 2012 should be week 2"),e.equal(moment([2012,0,14]).week(),2,"Jan 14 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),3,"Jan 15 2012 should be week 3"),e.done()},"weeks year starting monday":function(e){e.expect(6),e.equal(moment([2006,11,31]).week(),1,"Dec 31 2006 should be week 1"),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,6]).week(),1,"Jan  6 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),2,"Jan  7 2007 should be week 2"),e.equal(moment([2007,0,13]).week(),2,"Jan 13 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),3,"Jan 14 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,30]).week(),1,"Dec 30 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,5]).week(),1,"Jan  5 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),2,"Jan  6 2008 should be week 2"),e.equal(moment([2008,0,12]).week(),2,"Jan 12 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),3,"Jan 13 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,29]).week(),1,"Dec 29 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,4]).week(),1,"Jan  4 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),2,"Jan  5 2003 should be week 2"),e.equal(moment([2003,0,11]).week(),2,"Jan 11 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),3,"Jan 12 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,28]).week(),1,"Dec 28 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,3]).week(),1,"Jan  3 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),2,"Jan  4 2009 should be week 2"),e.equal(moment([2009,0,10]).week(),2,"Jan 10 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),3,"Jan 11 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,27]).week(),1,"Dec 27 2009 should be week 1"),e.equal(moment([2010,0,1]).week(),1,"Jan  1 2010 should be week 1"),e.equal(moment([2010,0,2]).week(),1,"Jan  2 2010 should be week 1"),e.equal(moment([2010,0,3]).week(),2,"Jan  3 2010 should be week 2"),e.equal(moment([2010,0,9]).week(),2,"Jan  9 2010 should be week 2"),e.equal(moment([2010,0,10]).week(),3,"Jan 10 2010 should be week 3"),e.done()},"weeks year starting saturday":function(e){e.expect(5),e.equal(moment([2010,11,26]).week(),1,"Dec 26 2010 should be week 1"),e.equal(moment([2011,0,1]).week(),1,"Jan  1 2011 should be week 1"),e.equal(moment([2011,0,2]).week(),2,"Jan  2 2011 should be week 2"),e.equal(moment([2011,0,8]).week(),2,"Jan  8 2011 should be week 2"),e.equal(moment([2011,0,9]).week(),3,"Jan  9 2011 should be week 3"),e.done()},"weeks year starting sunday format":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"1 01 1","Jan  1 2012 should be week 1"),e.equal(moment([2012,0,7]).format("w ww wo"),"1 01 1","Jan  7 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"2 02 2","Jan  8 2012 should be week 2"),e.equal(moment([2012,0,14]).format("w ww wo"),"2 02 2","Jan 14 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"3 03 3","Jan 15 2012 should be week 3"),e.done()}};