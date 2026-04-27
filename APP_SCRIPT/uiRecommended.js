function uiRecommended() {
    this.pnlRecommendedHTML = `

    <div class="py-1">

    <!-- Header -->
    <div class="mb-2 section-header">
        <h3 class="fw-bold gradient-text">Recommended for you</h3>
        <div class="header-line mb-1"></div>
        <p class="text-muted-glass">Courses selected by AI based on your learning behavior.</p>
    </div>


      <!-- Tabs -->
      <ul class="nav nav-pills mb-4" role="tablist">
        <li class="nav-item">
          <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#forYou">
            For You
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="pill" data-bs-target="#trending">
            Trending
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="pill" data-bs-target="#favorites">
            Based on Favorites
          </button>
        </li>
      </ul>

      <div class="tab-content">

        <!-- For You -->
        <div class="tab-pane fade show active" id="forYou">
          <div class="row g-4">

            <!-- Top Recommended -->
            <div class="col-md-4">
              <div class="card course-card h-100">
                <img src="https://picsum.photos/400/300?random=11" class="course-img">
                <div class="card-body d-flex flex-column">
                  <span class="badge badge-recommended mb-2">AI Recommended</span>
                  <h5>Advanced JavaScript</h5>
                  <span class="text-muted small mb-1">Development</span>
                  <p class="match mb-3">95% match</p>
                  <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                  <a class="btn btn-enroll mt-auto" href='#'>Enroll</a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card course-card h-100">
                <img src="https://picsum.photos/400/300?random=12" class="course-img">
                <div class="card-body d-flex flex-column">
                  <span class="badge badge-recommended mb-2">AI Recommended</span>
                  <h5>React for Beginners</h5>
                  <span class="text-muted small mb-1">Frontend</span>
                  <p class="match mb-3">92% match</p>
                  <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                  <a class="btn btn-enroll mt-auto" href='#'>Enroll</a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card course-card h-100">
                <img src="https://picsum.photos/400/300?random=13" class="course-img">
                <div class="card-body d-flex flex-column">
                  <span class="badge badge-recommended mb-2">AI Recommended</span>
                  <h5>UI/UX Design Advanced</h5>
                  <span class="text-muted small mb-1">Design</span>
                  <p class="match mb-3">90% match</p>
                  <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                  <a class="btn btn-enroll mt-auto" href='#'>Enroll</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Trending -->
        <div class="tab-pane fade" id="trending">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card course-card p-3">
                <h5>Node.js API Mastery</h5>
                <span class="text-muted">Backend</span>
                <p class="match">88% match</p>
                <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                <a class="btn btn-enroll mt-auto" href='#'>Enroll</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Favorites -->
        <div class="tab-pane fade" id="favorites">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card course-card p-3">
                <h5>Startup Business 101</h5>
                <span class="text-muted">Business</span>
                <p class="match">85% match</p>
                <div class='text-end w100 mb-2 me-2'><a href="#" class="view-course-link btnView">View Course</a></div>
                <a class="btn btn-enroll mt-auto" href='#'>Enroll</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    
    
    `
    this.panelRecommended = ($writer) => {
        let $rc = this;
        $writer.html($rc.pnlRecommendedHTML);
        let $course = new uiCourses();
        $lstBtnView = $writer.find(".btnView");
        $lstBtnEnroll = $writer.find(".btn-enroll");
        $course.PanelCourseDetail($writer, $lstBtnView, "btnRecommended");
        $course.PanelEnroll($writer, $lstBtnEnroll, "btnRecommended");

        //$rc.onloadPanleMenu($writer);

    }

}