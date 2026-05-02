function uiCalendar() {
    this.pnlBasicCalendarHTML = `
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">Basic Calendar</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>Basic Calendar</li>
				</ul>
			</div>	
			<div class="row">
				<!-- Your Profile Views Chart -->
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>Basic Calendar</h4>
						</div>
						<div class="widget-inner">
							<div id="calendar"></div>
						</div>
					</div>
				</div>
				<!-- Your Profile Views Chart END-->
			</div>
		</div>
    `;

    this.pnlListCalendarHTML = `
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">List Views Calendar</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>List Views Calendar</li>
				</ul>
			</div>	
			<div class="row">
				<!-- Your Profile Views Chart -->
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="wc-title">
							<h4>List Views Calendar</h4>
						</div>
						<div class="widget-inner">
							<div id="calendar"></div>
						</div>
					</div>
				</div>
				<!-- Your Profile Views Chart END-->
			</div>
		</div>
    `;

    this.panelBasicCalendar = ($writer) => {
        let $cal = this;
        $writer.html($cal.pnlBasicCalendarHTML);
        $cal.onloadPanelBasicCalendar($writer);

    }

    this.onloadPanelBasicCalendar = ($writer) => {
        let $cal = this;
        

        $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2026-03-12',
        navLinks: true, // can click day/week names to navigate views

        weekNumbers: true,
        weekNumbersWithinDays: true,
        weekNumberCalculation: 'ISO',

        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
            title: 'All Day Event',
            start: '2026-03-01'
            },
            {
            title: 'Long Event',
            start: '2026-03-07',
            end: '2026-03-10'
            },
            {
            id: 999,
            title: 'Repeating Event',
            start: '2026-03-09T16:00:00'
            },
            {
            id: 999,
            title: 'Repeating Event',
            start: '2026-03-16T16:00:00'
            },
            {
            title: 'Conference',
            start: '2026-03-11',
            end: '2026-03-13'
            },
            {
            title: 'Meeting',
            start: '2026-03-12T10:30:00',
            end: '2026-03-12T12:30:00'
            },
            {
            title: 'Lunch',
            start: '2026-03-12T12:00:00'
            },
            {
            title: 'Meeting',
            start: '2026-03-12T14:30:00'
            },
            {
            title: 'Happy Hour',
            start: '2026-03-12T17:30:00'
            },
            {
            title: 'Dinner',
            start: '2026-03-12T20:00:00'
            },
            {
            title: 'Birthday Party',
            start: '2026-03-13T07:00:00'
            },
            {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2026-03-28'
            }
        ]
        });   

    }



    this.panelListCalendar = ($writer) => {
        let $cal = this;
        $writer.html($cal.pnlListCalendarHTML);
        $cal.onloadPanelListCalendar($writer);

    }

    this.onloadPanelListCalendar = ($writer) => {
        let $cal = this;
        

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek,month'
        },

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
        },

        defaultView: 'listWeek',
        defaultDate: '2026-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
            title: 'All Day Event',
            start: '2026-03-01'
            },
            {
            title: 'Long Event',
            start: '2026-03-07',
            end: '2026-03-10'
            },
            {
            id: 999,
            title: 'Repeating Event',
            start: '2026-03-09T16:00:00'
            },
            {
            id: 999,
            title: 'Repeating Event',
            start: '2026-03-16T16:00:00'
            },
            {
            title: 'Conference',
            start: '2026-03-11',
            end: '2026-03-13'
            },
            {
            title: 'Meeting',
            start: '2026-03-12T10:30:00',
            end: '2026-03-12T12:30:00'
            },
            {
            title: 'Lunch',
            start: '2026-03-12T12:00:00'
            },
            {
            title: 'Meeting',
            start: '2026-03-12T14:30:00'
            },
            {
            title: 'Happy Hour',
            start: '2026-03-12T17:30:00'
            },
            {
            title: 'Dinner',
            start: '2026-03-12T20:00:00'
            },
            {
            title: 'Birthday Party',
            start: '2026-03-13T07:00:00'
            },
            {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2026-03-28'
            }
        ]
        });

    }


}


