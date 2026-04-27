function uiCourses() {

    this.lstCourses = [
        {
            img: "https://picsum.photos/400/300?random=11",
            category: "design",
            categoryText: "Design",
            title: "AI UX/UI Design for Smart Government",
            by: "By Digital Gov Lab",
            detail: "ออกแบบประสบการณ์ผู้ใช้สำหรับระบบภาครัฐอัจฉริยะด้วย AI"
        },
        {
            img: "https://picsum.photos/400/300?random=12",
            category: "development",
            categoryText: "Development",
            title: "AI Application Development",
            by: "By AI Thailand",
            detail: "พัฒนาแอปพลิเคชันด้วย AI และ Machine Learning"
        },
        {
            img: "https://picsum.photos/400/300?random=13",
            category: "business",
            categoryText: "Business",
            title: "Digital Transformation Strategy",
            by: "By Strategy Thinker",
            detail: "วางกลยุทธ์ขับเคลื่อนองค์กรด้วยเทคโนโลยีดิจิทัล"
        },
        {
            img: "https://picsum.photos/400/300?random=14",
            category: "development",
            categoryText: "Development",
            title: "Data Analytics with AI",
            by: "By Data Academy",
            detail: "การวิเคราะห์ข้อมูลขนาดใหญ่ด้วย AI เพื่อการตัดสินใจ"
        },
        {
            img: "https://picsum.photos/400/300?random=15",
            category: "business",
            categoryText: "Business",
            title: "AI for Smart City",
            by: "By Smart City Office",
            detail: "การประยุกต์ใช้ AI ในการพัฒนาเมืองอัจฉริยะ"
        },
        {
            img: "https://picsum.photos/400/300?random=16",
            category: "design",
            categoryText: "Design",
            title: "Design Thinking for AI Projects",
            by: "By Innovation Hub",
            detail: "กระบวนการ Design Thinking สำหรับโครงการ AI"
        },
        {
            img: "https://picsum.photos/400/300?random=17",
            category: "development",
            categoryText: "Development",
            title: "Python for AI Beginners",
            by: "By Code School",
            detail: "พื้นฐานภาษา Python สำหรับผู้เริ่มต้นด้าน AI"
        },
        {
            img: "https://picsum.photos/400/300?random=18",
            category: "business",
            categoryText: "Business",
            title: "AI Governance & Ethics",
            by: "By Policy Center",
            detail: "ธรรมาภิบาลและจริยธรรมของการใช้งาน AI"
        },
        {
            img: "https://picsum.photos/400/300?random=19",
            category: "development",
            categoryText: "Development",
            title: "Chatbot & Automation",
            by: "By Automation Lab",
            detail: "สร้าง Chatbot และระบบอัตโนมัติด้วย AI"
        },
        {
            img: "https://picsum.photos/400/300?random=20",
            category: "design",
            categoryText: "Design",
            title: "Visualization for AI Data",
            by: "By Visual Studio",
            detail: "การออกแบบ Data Visualization สำหรับระบบ AI"
        }
    ];


    this.pnlCoursesHTML = `
        <div class="py-0">
            <!-- Header -->
            <div class="mb-2 section-header">
                <h3 class="fw-bold gradient-text">Available Courses</h3>
                <div class="header-line mb-1"></div>
                <p class="text-muted-glass">Browse and enroll in your favorite courses</p>
            </div>


            <!-- Search & Filter -->
            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <input type="text" id="searchInput" class="form-control  shadow" placeholder="Search courses...">
                </div>
                <div class="col-md-4">
                    <select id="categoryFilter" class="form-select  shadow">
                        <option value="all">All Categories</option>
                        <option value="design">Design</option>
                        <option value="development">Development</option>
                        <option value="business">Business</option>
                    </select>
                </div>
            </div>

            <!-- Course Grid -->
            <div class="row g-4" id="courseGrid">
                Render Data List Items
            </div>
        </div>
    `;


    this.pnlCourseDetailHTML = `
<div class="p-0">

    <nav class="glass-nav mb-2">
        <div class="nav-container">
            <div class="nav-icon-wrapper">
                <i class="bi bi-grid-fill"></i>
            </div>
            <ul class="nav-links">
                <li><a href="dashboard.html" class="nav-item btnDashboard">Dashboard</a></li>
                <li><a href="#" class="nav-item btnCourse">Courses</a></li>
                <li><a href="recommended.html" class="nav-item btnRecommended">Recommended</a></li>
                <li><a href="favorite.html" class="nav-item btnFavorite">Favorite</a></li>
            </ul>
        </div>
    </nav>


    <!-- Header -->
    <div class="mb-2 section-header">
        <h3 class="fw-bold gradient-text">Course Detail</h3>
        <div class="header-line mb-1"></div>
        <p class="text-muted-glass">Course Detail refers to a dedicated page or section that provides comprehensive information about a specific course, helping users understand its value, content, and suitability before enrolling.</p>
    </div>
    <div class="py-1">

        <div class="row g-4">

            <!-- Left Content -->
            <div class="col-lg-8">

                <!-- Course Header -->
                <div class="card p-4 mb-4">
                    <h3 class="fw-bold mb-1">JavaScript Fundamentals</h3>
                    <p class="text-muted mb-2">Instructor: <strong>John Doe</strong></p>

                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <span class="text-muted">(4.5 / 5 reviews)</span>
                    </div>

                    <!-- Video Preview https://www.youtube.com/embed/dQw4w9WgXcQ -->
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/YW89eUVst6g" title="Course Preview" allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <!-- Course Content -->
                <div class="card p-4 mb-4">
                    <h5 class="mb-3">Course Content</h5>

                    <div class="accordion" id="courseContent">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#module1">
                                    Module 1: Introduction
                                </button>
                            </h2>
                            <div id="module1" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    • What is JavaScript <br>
                                    • Setting up environment
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#module2">
                                    Module 2: Core Concepts
                                </button>
                            </h2>
                            <div id="module2" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    • Variables & Functions <br>
                                    • Control Structures
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Reviews -->
                <div class="card p-4">
                    <h5 class="mb-3">Student Reviews</h5>

                    <div class="mb-3">
                        <strong>Jane Smith</strong>
                        <div class="rating mb-1">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="text-muted mb-0">
                            Very clear explanations and beginner-friendly!
                        </p>
                    </div>

                    <div>
                        <strong>Alex Brown</strong>
                        <div class="rating mb-1">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="text-muted mb-0">
                            Good content, would love more examples.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Right Sidebar -->
            <div class="col-lg-4">
                <div class="card p-4 sticky-top" style="top:20px">

                    <h4 class="fw-bold mb-3">Enroll Now</h4>

                    <a class="btn btn-primary w-100 mb-2 btnEnroll" href="#">
                        Enroll Course
                    </a>

                    <button class="btn btn-outline-danger w-100">
                        <i class="bi bi-heart-fill"></i> Add to Favorite
                    </button>

                    <hr>

                    <ul class="list-unstyled small text-muted">
                        <li>✔ Duration: 12 hours</li>
                        <li>✔ Level: Beginner</li>
                        <li>✔ Certificate included</li>
                        <li>✔ Lifetime access</li>
                    </ul>

                </div>
            </div>

        </div>

    </div>
</div>



    `;


    this.pnlEnrollHTML = `
<div class="py-1">

    <!-- Header -->
    <nav class="glass-nav mb-2">
        <div class="nav-container">
            <div class="nav-icon-wrapper">
                <i class="bi bi-grid-fill"></i>
            </div>
            <ul class="nav-links">
                <li><a href="dashboard.html" class="nav-item btnDashboard">Dashboard</a></li>
                <li><a href="#" class="nav-item btnCourse">Courses</a></li>
                <li><a href="recommended.html" class="nav-item btnRecommended">Recommended</a></li>
                <li><a href="favorite.html" class="nav-item btnFavorite">Favorite</a></li>
            </ul>
        </div>
    </nav>
    <div class="mb-2 section-header">
        <h3 class="fw-bold gradient-text">Confirm Course Enrollment</h3>
        <div class="header-line mb-1"></div>
        <p class="text-muted-glass">The final step where users review their selected course details and complete the registration process.</p>
    </div>

    <!-- Main Card -->
    <div class="row text-start">
        <div class="col-lg-8">

            <div class="card enroll-card p-4">

                <!-- Course Preview -->
                <div class="row g-3 mb-4">
                    <div class="col-md-5">
                        <img src="https://picsum.photos/600/400?random=1" class="w-100 course-img" alt="Course Image">
                    </div>
                    <div class="col-md-7">
                        <span class="badge badge-free mb-2">Free Course</span>
                        <h4 class="fw-bold mb-1">JavaScript Fundamentals</h4>
                        <p class="text-muted mb-1">Instructor: <strong>John Doe</strong></p>
                        <p class="text-muted mb-2">
                            Category: Development
                        </p>
                        <p class="text-muted small">
                            Learn the core concepts of JavaScript and build a strong foundation for modern web development.
                        </p>
                    </div>
                </div>

                <!-- Enrollment Details -->
                <div class="row g-3 mb-4">
                    <div class="col-md-6 info-item">
                        <i class="bi bi-calendar-event"></i>
                        Enrollment Date: <strong>20 April 2026</strong>
                    </div>
                    <div class="col-md-6 info-item">
                        <i class="bi bi-cash"></i>
                        Price: <strong>Free</strong>
                    </div>
                    <div class="col-md-6 info-item">
                        <i class="bi bi-clock"></i>
                        Duration: <strong>12 Hours</strong>
                    </div>
                    <div class="col-md-6 info-item">
                        <i class="bi bi-bar-chart"></i>
                        Level: <strong>Beginner</strong>
                    </div>
                </div>

                <!-- Important Notes -->
                <div class="note-box mb-4">
                    <strong>Important:</strong>
                    <p class="mb-0 text-muted small">
                        This course includes lifetime access and a certificate upon completion.
                        You can start learning immediately after enrollment.
                    </p>
                </div>


                <!-- Terms Agreement -->
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="agreeTerms">
                    <label class="form-check-label" for="agreeTerms">
                        I agree to the
                        <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
                            Terms &amp; Conditions
                        </a>
                    </label>
                </div>


                <!-- Actions -->
                <div class="d-flex gap-2">
                    <button id="confirmBtn" class="btn btn-primary flex-fill" disabled>
                        <span id="btnText">Confirm Enroll</span>
                        <span id="btnSpinner" class="spinner-border spinner-border-sm d-none"></span>
                    </button>
                    <button class="btn btn-outline-secondary flex-fill btnCancel" >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    </div>

</div>


    `;

    this.panelCourses = ($writer) => {
        let $courses = this;
        $writer.html($courses.pnlCoursesHTML);
        let $writerItem = $writer.find("#courseGrid");
        $courses.createItems($writerItem, $courses.lstCourses);

        $courses.onloadPanelCourses($writer);



    }

    this.onloadPanelCourses = ($writer) => {
        let $courses = this;
        const $searchInput = $writer.find('#searchInput');
        const $categoryFilter = $writer.find('#categoryFilter');
        const $items = $writer.find('.course-item');

        $searchInput.on('keyup', filterCourses);
        $categoryFilter.on('change', filterCourses);


        let $writerItem = $writer.find("#courseGrid");
        let $lstBtnView = $writerItem.find(".btnView");
        let $lstBtnEnroll = $writerItem.find(".btnEnroll");
        //$lstBtnView.off("click").on("click", () => {
        //    $writer.html($courses.pnlCourseDetailHTML);
        //    $writer.find("nav a").removeClass("active");
        //    $writer.find("nav .btnCourse").addClass("active");
        //    //script for nav still page
        //    $writer.find("nav .btnCourse").off("click").on("click", () => {
        //        $courses.panelCourses($writer);

        //    });

        //});


        $courses.PanelCourseDetail($writer, $lstBtnView, "btnCourse");
        $courses.PanelEnroll($writer, $lstBtnEnroll, "btnCourse");

        function filterCourses() {
            const search = $searchInput.val().toLowerCase();
            const category = $categoryFilter.val();

            $items.each(function () {
                const title = $(this).text().toLowerCase();
                const matchCategory =
                    category === 'all' || $(this).data('category') === category;
                const matchSearch = title.includes(search);

                $(this).toggle(matchCategory && matchSearch);
            });
        }

    };

    this.createItems = ($writer, items) => {

        let html = '';

        $.each(items, (index, course) => {
            html += `

<div class="col-lg-3 col-md-4 col-sm-6 course-item" data-category="${course.category}">
    <div class="glass-card-wrapper w-100 h-100">
        <div class="card course-card h-100 d-flex flex-column">
            <div class="shine-effect"></div>

            <div class="img-container">
                <img src="${course.img}" class="course-img" alt="Course Image">
            </div>

            <div class="card-body d-flex flex-column">
                <span class="badge badge-category mb-2">
                    ${course.categoryText}
                </span>
                <h5 class="card-title">${course.title}</h5>
                <small class="author-text mb-3">${course.by}</small>

                <p class="card-text mb-3">
                    ${course.detail}
                </p>

                <div class="text-end mb-3">
                    <a href="#" class="view-course-link btnView">View Course</a>
                </div>

                <div class="mt-auto">
                    <a class="btn btn-enroll w-100 btnEnroll" href="#">
                        Enroll Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
        });

        //$.each(items, (index, course) => {
        //    html += `
        //    <div class="col-lg-3 col-md-4 col-sm-6 course-item" data-category="${course.category}">
        //        <div class="card course-card h-100">
        //            <img src="${course.img}" class="course-img">
        //            <div class="card-body d-flex flex-column">
        //                <span class="badge badge-category mb-2">
        //                    ${course.categoryText}
        //                </span>
        //                <h5 class="card-title">${course.title}</h5>
        //                <small class="text-muted mb-2">${course.by}</small>
        //                <p class="card-text text-muted mb-0">
        //                    ${course.detail}
        //                </p>
        //                <div class="text-end w100 mb-2 me-2">
        //                    <a href="courseDetail.html">View Course</a>
        //                </div>
        //                <div class="mt-auto">
        //                    <a class="btn btn-primary w-100" href="enroll.html">
        //                        Enroll
        //                    </a>
        //                </div>
        //            </div>
        //        </div>
        //    </div>
        //`;
        //});

        let style = `
            <style>
            :root {
                --glass-bg: rgba(255, 255, 255, 0.7);
                --glass-border: rgba(255, 255, 255, 0.4);
                --primary-gradient: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                --card-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
                --text-main: #2d3436;
                --text-muted: #636e72;
            }

            /* Dark Mode Support */
            @media (prefers-color-scheme: dark) {
                :root {
                    --glass-bg: rgba(20, 20, 25, 0.8);
                    --glass-border: rgba(255, 255, 255, 0.1);
                    --text-main: #f8f9fa;
                    --text-muted: #a4b0be;
                }
            }

            /* Glass Card Wrapper (Animated Border Glow) */
            .glass-card-wrapper {
                position: relative;
                padding: 1px; /* Space for border glow */
                border-radius: 24px;
                background: transparent;
                transition: all 0.5s ease;
                overflow: hidden;
            }

            .glass-card-wrapper::before {
                content: '';
                position: absolute;
                top: -50%; left: -50%; width: 200%; height: 200%;
                background: conic-gradient(transparent, transparent, transparent, #2575fc, #6a11cb);
                animation: rotateGlow 6s linear infinite;
                opacity: 0;
                transition: opacity 0.3s;
            }

            .glass-card-wrapper:hover::before {
                opacity: 1;
            }

            @keyframes rotateGlow {
                100% { transform: rotate(360deg); }
            }

            /* Main Card Style */
            .course-card {
                background: var(--glass-bg) !important;
                backdrop-filter: blur(12px) saturate(180%);
                -webkit-backdrop-filter: blur(12px) saturate(180%);
                border: 1px solid var(--glass-border) !important;
                border-radius: 24px !important;
                box-shadow: var(--card-shadow);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
                overflow: hidden;
                color: var(--text-main);
                z-index: 1;
            }

            .course-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }

            /* Image Zoom Effect */
            .img-container {
                overflow: hidden;
                border-radius: 20px 20px 0 0;
                margin: 8px 8px 0 8px;
            }

            .course-img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 16px;
                transition: transform 0.6s ease;
            }

            .course-card:hover .course-img {
                transform: scale(1.08);
            }

            /* Badge (Pill Style) */
            .badge-category {
                background: rgba(106, 17, 203, 0.1) !important;
                color: #6a11cb !important;
                backdrop-filter: blur(4px);
                border: 1px solid rgba(106, 17, 203, 0.2);
                border-radius: 50px;
                width: fit-content;
                padding: 6px 14px;
                font-weight: 600;
            }

            /* Typography */
            .card-title {
                font-weight: 700;
                color: var(--text-main);
            }

            .author-text {
                color: var(--text-muted);
            }

            .card-text {
                color: var(--text-muted);
                font-size: 0.9rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            /* Links & Buttons */
            .view-course-link {
                color: #2575fc;
                text-decoration: none;
                font-size: 0.85rem;
                font-weight: 500;
                transition: opacity 0.3s;
            }

            .view-course-link:hover {
                opacity: 0.7;
            }

            .btn-enroll {
                background: var(--primary-gradient);
                border: none;
                color: white;
                padding: 12px;
                border-radius: 14px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
                transition: all 0.3s ease;
            }

            .btn-enroll:hover {
                transform: scale(1.02);
                box-shadow: 0 8px 25px rgba(106, 17, 203, 0.5);
                color: white;
            }

            .btn-enroll:active {
                transform: scale(0.98);
            }

            /* Light Reflection Effect */
            .shine-effect {
                position: absolute;
                top: 0; left: -100%; width: 50%; height: 100%;
                background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
                transform: skewX(-25deg);
                transition: 0.7s;
                z-index: 2;
            }

            .course-card:hover .shine-effect {
                left: 150%;


            }



            </style>
        `;
        
        style = "";
        $writer.html(style + html);
    }

    this.PanelCourseDetail = ($writer, $lstBtn, btnRef) => {
        let $courses = this;
       
        $lstBtn.off("click").on("click", () => {
            $writer.html($courses.pnlCourseDetailHTML);
            $writer.find("nav a").removeClass("active");
            $writer.find("nav ." + btnRef).addClass("active");
            //script for nav still page
            $writer.find("nav .btnCourse").off("click").on("click", () => {
                $courses.panelCourses($writer);

            });

            let $lstBtnEnroll = $writer.find(".btnEnroll");
            $courses.PanelEnroll($writer, $lstBtnEnroll, "btnCourse");

        });


    }

    this.PanelEnroll = ($writer, $lstBtn, btnRef) => {
        let $courses = this;

        $lstBtn.off("click").on("click", () => {
            $writer.html($courses.pnlEnrollHTML);
            $writer.find("nav a").removeClass("active");
            $writer.find("nav ." + btnRef).addClass("active");
            //script for nav still page
            $writer.find("nav .btnCourse, .btnCancel").off("click").on("click", () => {
                $courses.panelCourses($writer);

            });

        });


    }
}