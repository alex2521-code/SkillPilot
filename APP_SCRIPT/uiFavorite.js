function uiFavorite() {
    this.pnlFavoriteHTML = `

    <div class="container-fluid py-2">
        <!-- Header -->
        <div class="mb-4 section-header">
            <h3 class="fw-bold gradient-text">Favorite Courses</h3>
            <div class="header-line mb-1"></div>
            <p class="text-muted-glass">Courses selected by AI based on your learning behavior.</p>
            <div class="btn-group">
                <button class="btn btn-outline-primary active" onclick="showGrid()">Grid</button>
                <button class="btn btn-outline-primary" onclick="showList()">List</button>
            </div>
        </div>

        <!-- Grid View -->
        <div id="gridView" class="row g-4 text-start">
            <div class="col-md-4">
                <div class="card course-card h-100">
                    <img src="https://picsum.photos/400/300?random=21" class="w-100 rounded-top">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1">React Fundamentals</h5>
                            <span class="favorite">♥</span>
                        </div>
                        <small class="text-muted">By John Doe</small>
                        <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                        <div class="d-flex gap-2 mt-3">
                            <a class="btn btn-enroll mt-auto w-100" href='#'>Enroll</a>
                            <button class="btn btn-outline-danger btn-sm px-3">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card course-card h-100">
                    <img src="https://picsum.photos/400/300?random=11" class="w-100 rounded-top">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1">React Fundamentals</h5>
                            <span class="favorite">♥</span>
                        </div>
                        <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                        <small class="text-muted">By John Doe</small>
                        <div class="d-flex gap-2 mt-3">
                            <a class="btn btn-enroll mt-auto w-100" href='#'>Enroll</a>
                            <button class="btn btn-outline-danger btn-sm px-3">Remove</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!-- List View -->
        <div id="listView" class="d-none">
            <div class="card course-card mb-3 px-4 py-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://picsum.photos/400/300?random=22" class="course-img w-100">
                    </div>
                    <div class="col-md-8 p-3">
                        <div class="d-flex justify-content-between">
                            <h5>Advanced UI/UX</h5>
                            <span class="favorite">♥</span>
                        </div>
                        <p class="text-muted">By Jane Smith</p>
                        <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                        <div class="d-flex gap-2">
                            <a class="btn btn-enroll mt-auto ms-4 w-50" href='#'>Enroll</a>
                            <button class="btn btn-outline-danger btn-sm px-3 ms-4">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="row g-0 py-4">
                    <div class="col-md-4">
                        <img src="https://picsum.photos/400/300?random=12" class="course-img w-100">
                    </div>
                    <div class="col-md-8 p-3">
                        <div class="d-flex justify-content-between">
                            <h5>Advanced UI/UX</h5>
                            <span class="favorite">♥</span>
                        </div>
                        <p class="text-muted mb-2">By Jane Smith</p>
                        <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                        <div class="d-flex gap-2">
                            <a class="btn btn-enroll mt-auto ms-4 w-50" href='#'>Enroll</a>
                            <button class="btn btn-outline-danger btn-sm px-3 ms-4">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    
    
    `
    this.panelFavorite = ($writer) => {
        let $fav = this;
        $writer.html($fav.pnlFavoriteHTML);
        //$rc.onloadPanleMenu($writer);
        let $course = new uiCourses();
        $lstBtnView = $writer.find(".btnView");
        $lstBtnEnroll = $writer.find(".btn-enroll");
        $course.PanelCourseDetail($writer, $lstBtnView, "btnFavorite");
        $course.PanelEnroll($writer, $lstBtnEnroll, "btnFavorite");
    }

}