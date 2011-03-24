fcViews.fortnight = FortnightView;

function FortnightView(element, calendar) {
	var t = this;

	// exports
	t.render = render;

	// imports
	BasicView.call(t, element, calendar, 'fortnight');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;

	function render(date, delta) {
		if (delta) {
			addDays(date, delta * 14);
		}
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 14);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(2, 2, weekends ? 7 : 5, true);
	}

}

