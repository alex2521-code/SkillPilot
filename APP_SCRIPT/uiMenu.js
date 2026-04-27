function uiMenu() {
    this.pnlMenuHTML = `
        <div class="sidebar-overlay" id="overlay"></div>
            <div class="sidebar" id="sidebar">
                <div class="p-3 d-flex justify-content-between align-items-center">
                    <div class="fw-bold fs-5 text-primary">
                        <img width='100' src="images/logo/Logo_AFTI2.png" alt="Logo" />
                    </div>
                    <button class="btn d-lg-none btnBurger">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>

                <nav class="nav flex-column" id="sidebarMenu">
                    <a class="nav-link" href="dashboard.html"><i class="bi bi-speedometer2"></i>Dashboard</a>
                    <a class="nav-link" href="courses.html"><i class="bi bi-book"></i>Courses</a>
                    <a class="nav-link" href="recommended.html"><i class="bi bi-stars"></i>Recommended</a>
                    <a class="nav-link" href="favorite.html"><i class="bi bi-heart"></i>Favorite</a>
                    <a class="nav-link" href="myCourses.html"><i class="bi bi-clock-history"></i>My Courses</a>
                    <a class="nav-link" href="certificates.html"><i class="bi bi-patch-check"></i>Certificates</a>
                    <a class="nav-link" href="notifications.html"><i class="bi bi-bell"></i>Notifications</a>
                    <a class="nav-link" href="profile.html"><i class="bi bi-person-circle"></i>Profile</a>
                </nav>

                <div class="mt-auto p-3 border-top d-flex align-items-center gap-2">
                    <div class="avatar">AL</div>
                    <div class="overflow-hidden">
                        <div class="fw-semibold text-truncate" style="max-width: 150px;">alex little</div>
                        <small class="text-muted d-block text-truncate">alex@mail.com</small>
                    </div>
                </div>
            </div>

            <div class="topbar">
                <div class="d-flex align-items-center gap-3 w-100">
                    <i class="bi bi-list hamburger hamburger-btn btnBurger"></i>

                    <div class="header-icons">
                        <img src="images/logo/Logo_MHESI.png" class="header-logo" />
                        <img src="images/logo/Logo_PMUB.png" class="header-logo" />
                        <img src="images/logo/Logo_FTI.svg" class="header-logo" />
                        <img src="images/logo/Logo_AIEI.png" class="header-logo" />
                        <img src="images/logo/Logo_MU.jpg" class="header-logo" />
                        <img src="images/logo/Logo_AWS.png" class="header-logo" />
                        <img src="images/logo/Logo_SIS.png" class="header-logo" />
                    </div>
                </div>
            </div>
    `;


    this.panelMenu = ($writer) => {
        let $mnu = this;
        $writer.html($mnu.pnlMenuHTML);
        $mnu.onloadPanleMenu($writer);
    
    }

    this.onloadPanleMenu = ($writer) => {
        let $mnu = this;
        activeMenu();
        //document.getElementById('overlay').addEventListener('click', toggleSidebar);
        $writer.find(".btnBurger, #overlay").off("click").on("click", toggleSidebar);
 
        //function activeMenu() {
        //    document.querySelectorAll('#sidebarMenu .nav-link').forEach(link => {
        //        link.addEventListener('click', function () {
        //            document.querySelectorAll('#sidebarMenu .nav-link')
        //                .forEach(el => el.classList.remove('active'));

        //            this.classList.add('active');
        //        });
        //    });

        //    // push state ปัจจุบันเข้า history
        //    history.pushState(null, "", location.href);

        //    window.addEventListener("popstate", function () {
        //        // บังคับให้อยู่หน้าเดิม
        //        history.pushState(null, "", location.href);
        //    });

        //}

        function activeMenu() {

            // click menu
            $('#sidebarMenu .nav-link').on('click', function () {
                $('#sidebarMenu .nav-link').removeClass('active');
                $(this).addClass('active');
            });

            // push current state to history
            history.pushState(null, "", location.href);

            // prevent going back
            $(window).on('popstate', function () {
                history.pushState(null, "", location.href);
            });

        }

        function toggleSidebar() {
            $('#sidebar').toggleClass('active');
            $('#overlay').toggleClass('active');
        }
        //function toggleSidebar() {
           
        //    const sidebar = document.getElementById('sidebar');
        //    const overlay = document.getElementById('overlay');
        //    sidebar.classList.toggle('active');
        //    overlay.classList.toggle('active');
        //}

    }
}