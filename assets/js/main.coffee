# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like '/components/jquery/jquery.min.js'
js = [
	"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js",
	"/components/moment/moment.js",
]

# this will fire once the required scripts have been loaded
require js, ->
	setInterval (-> $('#date').html moment().format('dddd, MMMM Do YYYY, h:mm:ss a')), 1000

	day_width = 30 # in px
	html = ''

	month = moment().endOf 'month'
	max_days = 0
	for i in [0...12]
		month_name = month.format 'MMMM'
		month_num = month.format 'M'
		year = month.format 'YYYY'
		days = +month.format 'D'
		month.startOf('month')
		start_day_offset = month.diff moment(month).startOf('week'), 'days'

		#console.log
		#	month_name: month_name
		#	days: days
		#	start_day_offset: start_day_offset

		html += """
			</br>
			<div class="month_name">#{month_name}</div>
			<div class="month" style="margin-left:#{start_day_offset*day_width}px">
		"""

		if (days + start_day_offset) > max_days
			max_days = days + start_day_offset

		for day in [1...days]
			html += "<div class=\"day\" id=\"#{day}/#{month_num}/#{year}\">#{day}</div>"

		html += '</div>'

		#go to next month
		month = month.add('month', 1).endOf 'month'

	day_list = ''
	days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
	i = e = 0
	while i < max_days - 1
		day_list += "<div class=\"day\">#{days[e]}</div>"
		e++
		if e >= days.length then e = 0
		i++

	day_list = """
	<div class="month_name"></div>
	<div class="month" id="day_list">
		#{day_list}
	</div>
	"""


	$('#calender').html day_list + html