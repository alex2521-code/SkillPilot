
function uiProfile() {

    this.state = {
        profile: {
            step: 2,
            topics: ["Machine Learning", "NLP", "Computer Vision", "Generative AI", "AI Ethics", "Data Science", "Robotics", "Prompt Eng."]

        }
    }

    this.pnlUserOverviewHTML = `

    <div class="container-fluid pnlProfile p-0 pb-3">
        <div class="row text-start">
            <div class="col-lg-12">

                <!-- Header -->
                <div class="mb-2 section-header">
                    <h3 class="fw-bold gradient-text">Profile</h3>
                    <div class="header-line mb-1"></div>
                    <p class="text-muted-glass">
                        Section where users can view and manage their personal information and account settings.
                    </p>
                </div>

                <!-- Profile Card -->
                <div class="profile-card p-3">
                    <div class="row g-4">

                        <!-- Left Column : Profile Info -->
                        <div class="col-lg-4 col-md-5 sidebar-profile rounded">

                            <!-- Profile Image -->
                            <div class="profile-img-container mb-3 mt-3 text-center">
                                <img src="https://picsum.photos/600/400?random=1"
                                     class="img-fluid rounded"
                                     alt="Profile">
                            </div>

                            <!-- About -->
                            <div class="mb-4">
                                <h6 class="fw-bold">Profile</h6>
                                <p class="small text-muted">
                                    มีความสนใจในการพัฒนาด้าน AI และ Data Science
                                    พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อนำมาประยุกต์ใช้ในองค์กร
                                </p>
                            </div>

                            <!-- Contact -->
                            <div class="mb-4">
                                <h6 class="fw-bold">Contact Me</h6>
                                <div class="mb-2"><i class="bi bi-telephone-fill me-2"></i> 08x-xxx-xxxx</div>
                                <div class="mb-2"><i class="bi bi-envelope-fill me-2"></i> name@company.com</div>
                                <div class="mb-2"><i class="bi bi-person-badge me-2"></i> ID: x-xxxx-xxxxx-xx-x</div>
                                <div class="mb-2"><i class="bi bi-geo-alt-fill me-2"></i> 123 Anywhere St.</div>
                            </div>

                            <!-- Dietary -->
                            <div>
                                <h6 class="fw-bold">Dietary</h6>
                                <div><i class="bi bi-check-circle-fill me-2"></i> None / Halal</div>
                            </div>
                        </div>

                        <!-- Right Column : Main Content -->
                        <div class="col-lg-8 col-md-7">

                            <!-- Banner -->
                            <div class="header-banner mb-4 rounded">
                                <h1 class="mb-0">John Doe</h1>
                                <h5 class="opacity-75 fw-normal">ชื่อ-นามสกุล (ภาษาไทย)</h5>
                                <span class="badge bg-dark opacity-50 mt-2">Organization Name</span>
                            </div>

                            <!-- Current Course -->
                            <div class="info-group mb-4">
                                <div class="info-title">
                                    <i class="bi bi-journal-bookmark-fill"></i> Current Course
                                </div>
                                <p class="ms-3 fw-bold fs-5">AI Fundamentals</p>
                            </div>

                            <!-- Areas of Interest -->
                            <div class="info-group mb-4">
                                <div class="info-title">
                                    <i class="bi bi-cpu-fill"></i> Areas of Interest
                                </div>
                                <div class="ms-3">
                                    <span class="badge-interest active">Machine Learning</span>
                                    <span class="badge-interest">NLP</span>
                                    <span class="badge-interest">Computer Vision</span>
                                    <span class="badge-interest">Generative AI</span>
                                    <span class="badge-interest">AI Ethics</span>
                                    <span class="badge-interest active">Data Science</span>
                                    <span class="badge-interest active">Robotics</span>
                                    <span class="badge-interest">Prompt Eng.</span>
                                </div>
                            </div>

                            <!-- Special Requirements -->
                            <div class="info-group mb-4">
                                <div class="info-title">
                                    <i class="bi bi-stars"></i> Special Requirements
                                </div>
                                <div class="ms-3 p-3 rounded bg-light border-start border-4">
                                    <p class="mb-0 text-muted fst-italic">
                                        "Any additional notes or requirements will appear here..."
                                    </p>
                                </div>
                            </div>

                            <!-- Action -->
                            <div class="text-end mt-4">
                                <button class="btn btn-outline-secondary btn-sm rounded-pill px-4 btnEditProfile">
                                    Edit Profile
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;

    this.pnlProfileHTML = `
<style>

        /* ===== INTEREST CARDS ===== */
        .interest-card {
            border: 2px solid #f1f5f9;
            border-radius: 16px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
            background: white;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
        }

            .interest-card:hover {
                transform: translateY(-3px);
                border-color: #c7d2fe;
            }

            .interest-card.active {
                background: #eef2ff;
                border-color: #4f46e5;
                color: #4f46e5;
                box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.1);
            }


</style>

<div class="container-fluid pnlProfile p-0 pb-3">
    <div class="row text-start">
        <div class="col-lg-8">

            <!-- Header -->
            <div class="mb-2 section-header">
                <h3 class="fw-bold gradient-text">Profile</h3>
                <div class="header-line mb-1"></div>
                <p class="text-muted-glass">Section where users can view and manage their personal information and account settings.</p>
            </div>


            <div id="regForm" class="card form-card px-2 py-3">

                <div id="step2Content" class="fade-step stepContent">
                    <h5 class="section-title mb-2">Applicant Information</h5>
                    <div class="row g-3 text-start">
                        <div class="col-md-6">
                            <label class="form-label">Full Name (Thai)</label>
                            <input class="form-control form-control-sm shadow" placeholder="ชื่อ-นามสกุล" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Full Name (English)</label>
                            <input class="form-control form-control-sm shadow" placeholder="John Doe" required>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">National ID (13 digits)</label>
                            <input class="form-control form-control-sm shadow" placeholder="x-xxxx-xxxxx-xx-x" pattern="\d{13}" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control form-control-sm shadow" placeholder="name@company.com" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input class="form-control form-control-sm shadow" placeholder="08x-xxx-xxxx" required>
                        </div>
                    </div>

                    <h5 class="section-title mt-4 mb-2">Organization & Course</h5>
                    <div class="row g-3 text-start">
                        <div class="col-md-6">
                            <label class="form-label">Company</label>
                            <input class="form-control form-control-sm shadow" placeholder="Organization Name">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Course</label>
                            <select class="form-select form-select-sm shadow">
                                <option>AI Fundamentals</option>
                                <option>Generative AI for Business</option>
                                <option>Deep Learning Specialization</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div id="step3Content" class="fade-step stepContent mt-4">
                    <h5 class="section-title mb-2">Dietary Requirements</h5>
                    <div class="d-flex flex-wrap gap-3 mb-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="none">
                            <label class="form-check-label" for="none">None</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="veg">
                            <label class="form-check-label" for="veg">Vegetarian</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="halal">
                            <label class="form-check-label" for="halal">Halal</label>
                        </div>
                    </div>

                    <h5 class="section-title mb-2">Areas of Interest</h5>
                    <p class="small text-muted mb-2 text-start">Select all that apply to you</p>
                    <div class="row g-3 mb-4" id="interestContainer">
                        </div>

                    <h5 class="section-title mb-2">Special Requirements</h5>
                    <textarea class="form-control form-control-sm shadow" rows="3" placeholder="Any additional notes..."></textarea>
                </div>

                <div class="d-flex justify-content-between mt-2 border-top pt-2">
                    <button type="button" class="btn btn-back btnBack btn-outline-secondary rounded shadow px-4 p-0 pt-2 pb-2">
                        <i class="bi bi-arrow-left me-2"></i>Back
                    </button>
                    <button type="button" class="btn btn-save btnSave shadow px-4 p-0 pt-2 pb-2">
                        Save <i class="bi bi-save ms-2"></i>
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>


    
    `

    this.scriptPanelProfile = ($writer) => {
        let $pf = this;

        // Initialize Interests
        let topics = $pf.state.profile.topics;
        const topicHtml = topics.map(t => `
                    <div class="col-6 col-md-3">
                        <div class="interest-card shadow">
                            ${t}
                        </div>
                    </div>
                `).join("");
        $writer.find("#interestContainer").html(topicHtml);

        $writer.find(".interest-card").off("click").on("click", function () {
            $(this).toggleClass("active");
        });

        $writer.find(".btnBack").off('click').on('click', () => {
            $pf.panelProfile($writer);

        });

        $writer.find(".btnSave").off('click').on('click', () => {
            $pf.panelProfile($writer);

        });


    }

    this.panelProfile = ($writer) => {
        let $pf = this;
        $writer.html($pf.pnlUserOverviewHTML);
        $writer.find(".btnEditProfile").off("click").on('click', () => {
            $writer.html($pf.pnlProfileHTML);
            $pf.scriptPanelProfile($writer);

        });
        //$writer.html($pf.pnlProfileHTML);
        //$pf.scriptPanelProfile($writer);
        
        //$rc.onloadPanleMenu($writer);

    }



}