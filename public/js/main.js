(function() {
  var js;

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", "/components/moment/moment.js"];

  require(js, function() {
    var day, day_list, day_width, days, e, html, i, max_days, month, month_name, month_num, start_day_offset, year, _i, _j;
    setInterval((function() {
      return $('#date').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }), 1000);
    day_width = 30;
    html = '';
    month = moment().endOf('month');
    max_days = 0;
    for (i = _i = 0; _i < 12; i = ++_i) {
      month_name = month.format('MMMM');
      month_num = month.format('M');
      year = month.format('YYYY');
      days = +month.format('D');
      month.startOf('month');
      start_day_offset = month.diff(moment(month).startOf('week'), 'days');
      html += "</br>\n<div class=\"month_name\">" + month_name + "</div>\n<div class=\"month\" style=\"margin-left:" + (start_day_offset * day_width) + "px\">";
      if ((days + start_day_offset) > max_days) {
        max_days = days + start_day_offset;
      }
      for (day = _j = 1; 1 <= days ? _j < days : _j > days; day = 1 <= days ? ++_j : --_j) {
        html += "<div class=\"day\" id=\"" + day + "/" + month_num + "/" + year + "\">" + day + "</div>";
      }
      html += '</div>';
      month = month.add('month', 1).endOf('month');
    }
    day_list = '';
    days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    i = e = 0;
    while (i < max_days - 1) {
      day_list += "<div class=\"day\">" + days[e] + "</div>";
      e++;
      if (e >= days.length) {
        e = 0;
      }
      i++;
    }
    day_list = "<div class=\"month_name\"></div>\n<div class=\"month\" id=\"day_list\">\n	" + day_list + "\n</div>";
    return $('#calender').html(day_list + html);
  });

}).call(this);
