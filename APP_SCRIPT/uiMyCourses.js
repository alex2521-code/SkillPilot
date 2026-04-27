function uiMyCourses() {

    this.pnlMyCoursesHTML = `

    <div class="container-fluid py-2">

        <!-- ================================= HEADER ================================= -->


        <div class="mb-2 section-header">
            <h3 class="fw-bold gradient-text">My Courses</h3>
            <div class="header-line mb-1"></div>
            <p class="text-muted-glass">My Courses is a section where users can view and access all the courses they have enrolled in.</p>
        </div>

        <!-- ================================ FILTERS ================================= -->
        <div class="card p-4 mb-4">
            <div class="row g-3 align-items-end">

                <div class="col-md-3">
                    <label class="form-label">Search</label>
                    <input type="text" id="searchInput" class="form-control" placeholder="Course name">
                </div>

                <div class="col-md-2">
                    <label class="form-label">Status</label>
                    <select id="statusFilter" class="form-select">
                        <option value="all">All</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>

                <div class="col-md-2">
                    <label class="form-label">Category</label>
                    <select id="categoryFilter" class="form-select">
                        <option value="all">All</option>
                        <option>Development</option>
                        <option>Design</option>
                        <option>Business</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label class="form-label">Date Range</label>
                    <input type="date" class="form-control">
                </div>

                <div class="col-md-2 d-grid">
                    <button class="btn btn-outline-secondary" onclick="resetFilters()">Reset</button>
                </div>
            </div>
        </div>

        <!-- =========================== VIEW TOGGLE / EXPORT ========================== -->
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="btn-group">
                <button class="btn btn-outline-primary active" onclick="showTable()">Table</button>
                <button class="btn btn-outline-primary" onclick="showCards()">Card</button>
            </div>
            <button class="btn btn-outline-success btn-sm">
                <i class="bi bi-download"></i> Export
            </button>
        </div>

        <!-- ============================== TABLE VIEW ================================ -->
        <div id="tableView">
            <div class="card">
                <div class="table-responsive">
                    <table class="table align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Course</th>
                                <th>Category</th>
                                <th>Enroll Date</th>
                                <th>Complete Date</th>
                                <th>Status</th>
                                <th>Progress</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            <tr>
                                <td>JavaScript Fundamentals</td>
                                <td>Development</td>
                                <td>12 Mar 2026</td>
                                <td>-</td>
                                <td><span class="badge badge-progress">In Progress</span></td>
                                <td>65%</td>
                                <td><button class="btn btn-sm btn-primary">Resume</button></td>
                            </tr>
                            <tr>
                                <td>UI/UX Design Basics</td>
                                <td>Design</td>
                                <td>02 Feb 2026</td>
                                <td>28 Feb 2026</td>
                                <td><span class="badge badge-completed">Completed</span></td>
                                <td>100%</td>
                                <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- ============================== CARD VIEW ================================ -->
        <div id="cardView" class="d-none">
            <div class="row g-4">

                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <img src="https://picsum.photos/400/200?1" class="course-img mb-3">
                        <h6 class="fw-semibold">JavaScript Fundamentals</h6>
                        <span class="badge badge-progress mb-2">In Progress</span>
                        <div class="progress mb-2">
                            <div class="progress-bar" style="width:65%">65%</div>
                        </div>
                        <small class="text-muted mb-2">Last accessed: Apr 18, 2026</small>
                        <button class="btn btn-primary btn-sm mt-auto">Resume</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <img src="https://picsum.photos/400/200?2" class="course-img mb-3">
                        <h6 class="fw-semibold">UI/UX Design Basics</h6>
                        <span class="badge badge-completed mb-2">Completed</span>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-success" style="width:100%">100%</div>
                        </div>
                        <small class="text-muted mb-2">Completed: Feb 28, 2026</small>
                        <button class="btn btn-outline-secondary btn-sm mt-auto">View</button>
                    </div>
                </div>

            </div>
        </div>

        <!-- ============================== PAGINATION ================================ -->
        <nav class="mt-4">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled"><a class="page-link">Prev</a></li>
                <li class="page-item active"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">Next</a></li>
            </ul>
        </nav>

        <!-- =============================== EMPTY STATE ============================== -->
        <div class="text-center d-none" id="emptyState">
            <i class="bi bi-folder-x fs-1 text-muted"></i>
            <p class="text-muted">No enrollment history found.</p>
        </div>

    </div>





    `;

    this.panelMyCourses = ($writer) => {
        let $myCourse = this;
        $writer.html($myCourse.pnlMyCoursesHTML);
        //$rc.onloadPanleMenu($writer);

    }
}