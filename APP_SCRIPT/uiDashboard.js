function uiDashboard() {

    this.pnlDashboardHTML = `


        <!-- Header -->
        <div class="mb-2 section-header">
            <h3 class="fw-bold gradient-text">Dashboard Overview</h3>
            <div class="header-line mb-1"></div>
            <p class="text-muted-glass">Overview of your learning progress</p>
        </div>

        <!-- Summary Cards -->
        <div class="row g-4 mb-4">

            <div class="col-md-4">
                <div class="card p-4">
                    <div class="d-flex align-items-center">
                        <div class="stat-icon bg-primary me-3">📘</div>
                        <div>
                            <small class="text-muted">Total Enrolled</small>
                            <h4 class="fw-bold mb-0">12</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-4">
                    <div class="d-flex align-items-center">
                        <div class="stat-icon bg-success me-3">✅</div>
                        <div>
                            <small class="text-muted">Completed</small>
                            <h4 class="fw-bold mb-0">5</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-4">
                    <div class="d-flex align-items-center">
                        <div class="stat-icon bg-warning me-3">⏳</div>
                        <div>
                            <small class="text-muted">In Progress</small>
                            <h4 class="fw-bold mb-0">7</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row g-4">

            <!-- Progress Chart -->
            <div class="col-lg-8">
                <div class="card p-4 h-100">
                    <h5 class="mb-3">Progress Overview</h5>
                    <canvas id="progressChart" height="120"></canvas>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="col-lg-4">
                <div class="card p-4 h-100">
                    <h5 class="mb-3">Recent Activity</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">Continued <strong>JavaScript Fundamentals</strong><br>
                            <small class="text-muted">2 hours ago</small>
                        </li>
                        <li class="list-group-item px-0">Completed <strong>UI/UX Basics</strong><br>
                            <small class="text-muted">Yesterday</small>
                        </li>
                        <li class="list-group-item px-0">Enrolled in <strong>Node.js API</strong><br>
                            <small class="text-muted">2 days ago</small>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <!-- Recommended Courses -->
        <div class="mt-5">
            <h5 class="mb-3">Recommended Courses</h5>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <h6 class="fw-semibold">Advanced JavaScript</h6>
                        <p class="text-muted small">
                            Deep dive into advanced JS concepts.
                        </p>
                        <button class="btn btn-outline-primary btn-sm mt-auto btnView">
                            View course
                        </button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <h6 class="fw-semibold">React for Beginners</h6>
                        <p class="text-muted small">
                            Build modern UI with React.
                        </p>
                        <button class="btn btn-outline-primary btn-sm mt-auto btnView">
                            View course
                        </button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <h6 class="fw-semibold">Startup Business 101</h6>
                        <p class="text-muted small">
                            Learn how to validate business ideas.
                        </p>
                        <button class="btn btn-outline-primary btn-sm mt-auto btnView">
                            View course
                        </button>
                    </div>
                </div>
            </div>
        </div>


    `;

    this.panelDashboard = ($writer) => {
        let $dab = this;
        $writer.html($dab.pnlDashboardHTML);
        $dab.onloadUiDashboard($writer);

    }

    this.onloadUiDashboard = ($writer) => {
        
        loadChart();

        let $lstBtnView = $writer.find(".btnView");
        $courses = new uiCourses();
        $courses.PanelCourseDetail($writer, $lstBtnView, "btnDashboard");
        //$lstBtnView.off("click").on("click", () => {
        //    $writer.html($courses.pnlCourseDetailHTML);
        //    $courses.PanelCourseDetail($writer, $lstBtnView, "btnDashboard");

        //});

        function loadChart() {
            const ctx = document.getElementById('progressChart');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [{
                        label: 'Course Progress (%)',
                        data: [20, 35, 50, 65, 80],
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79,70,229,0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }


    }
}