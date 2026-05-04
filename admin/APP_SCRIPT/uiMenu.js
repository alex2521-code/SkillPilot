function uiMenu() {
	this.showSupport = false;

    this.pnlHeaderHTML = `
	<!-- header start -->
	<header class="ttr-header">
		<div class="ttr-header-wrapper">
			<!--sidebar menu toggler start -->
			<div class="ttr-toggle-sidebar ttr-material-button">
				<i class="ti-close ttr-open-icon"></i>
				<i class="ti-menu ttr-close-icon"></i>
			</div>
			<!--sidebar menu toggler end -->
			<!--logo start -->
			<div class="ttr-logo-box">
				<div>
					<a href="dashboard.html" class="ttr-logo">
						<img class="ttr-logo-mobile" alt="" src="images/logo/Logo_AFTI-White.png" width="80">
						<img class="ttr-logo-desktop" alt="" src="images/logo/Logo_AFTI-White.png" width="120">
					</a>
				</div>
			</div>
			<!--logo end -->
			<div class="ttr-header-menu">
				<!-- header left menu start -->
				<ul class="ttr-header-navigation">
					<li>
						<a href="../index.html" target='registration' class="ttr-material-button ttr-submenu-toggle">REGISTRATION PAGE</a>
					</li>
					
				</ul>
				<!-- header left menu end -->
			</div>
			<div class="ttr-header-right ttr-with-seperator">
				<!-- header right menu start -->

				<ul class="ttr-header-navigation">
					<li style="
						background-color: rgba(243, 235, 243, 0.4); /* purple, 50% opacity */
						border-radius: 5px; transition: all 0.3s;
						">
                        
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar2"><img alt="" src="images/logo/Logo_MHESI.png" width="36"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar  bg-white"><img alt="" src="images/logo/Logo_PMUB.png" width="42"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar2"><img alt="" src="images/logo/Logo_FTI.svg" width="36"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar2"><img alt="" src="images/logo/Logo_AIEI.png" width="36"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar"><img alt="" src="images/logo/Logo_MU.jpg" width="36"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar2"><img alt="" src="images/logo/Logo_AWS.png" width="36"></span></a>
                            <a href="#" class="ttr-material-button p-2"><span class="ttr-user-avatar2"><img alt="" src="images/logo/Logo_SIS.png" width="36"></span></a>
                       
					</li>

                    <li class="ttr-hide-on-mobile">
						<a href="#" class="ttr-material-button"><i class="ti-layout-grid3-alt"></i></a>
						<div class="ttr-header-submenu ttr-extra-menu active" style="display: block;opacity:0.8;">
							<a href="#">
								<img alt="" class='mb-3' src="images/logo/Logo_Flat_AFTI.png" width="80">
								<span>aFTi</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_MHESI.png" width="40">
								<span>MHESI</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_PMUB.png" width="55">
								<span>PMU-B</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_FTI.svg" width="68">
								<span>FTI</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_AIEI.png" width="40">
								<span>AIEI</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_MU.jpg" width="40">
								<span>MU</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_AWS.png" width="46">
								<span>AWS</span>
							</a>
							<a href="#">
								<img alt="" src="images/logo/Logo_SIS.png" width="40">
								<span>SIS</span>
							</a>
						</div>
					</li>
				</ul>
				<!-- header right menu end -->
			</div>
			<!--header search panel start -->
			<div class="ttr-search-bar">
				<form class="ttr-search-form">
					<div class="ttr-search-input-wrapper">
						<input type="text" name="qq" placeholder="search something..." class="ttr-search-input">
						<button type="submit" name="search" class="ttr-search-submit"><i class="ti-arrow-right"></i></button>
					</div>
					<span class="ttr-search-close ttr-search-toggle">
						<i class="ti-close"></i>
					</span>
				</form>
			</div>
			<!--header search panel end -->
		</div>
	</header>
    `;

    this.pnlSideBarLeftHTML = `
 	<!-- Left sidebar menu start -->
	<div class="ttr-sidebar">
		<div class="ttr-sidebar-wrapper content-scroll">
			<!-- side menu logo start -->
			<div class="ttr-sidebar-logo">
				<a href="#"><img alt="" src="images/logo/Logo_AFTI2.png" width="122"></a>
				<!-- <div class="ttr-sidebar-pin-button" title="Pin/Unpin Menu">
					<i class="material-icons ttr-fixed-icon">gps_fixed</i>
					<i class="material-icons ttr-not-fixed-icon">gps_not_fixed</i>
				</div> -->
				<div class="ttr-sidebar-toggle-button">
					<i class="ti-arrow-left"></i>
				</div>
			</div>
			<!-- side menu logo end -->
			<!-- sidebar menu start -->
			<nav class="ttr-sidebar-navi">
				<ul>
					<li>
						<a href="dashboard.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-home"></i></span>
		                	<span class="ttr-label">Dashborad</span>
		                </a>
		            </li>
					<li>
						<a href="add-listing.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-layout-accordion-list"></i></span>
		                	<span class="ttr-label">Add Course</span>
		                </a>
		            </li>	
					<li class='d-none'>
						<a href="courses.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-book"></i></span>
		                	<span class="ttr-label">Courses</span>
		                </a>
		            </li>
					<li>
						<a href="bookmark.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-bookmark-alt"></i></span>
		                	<span class="ttr-label">Upcoming Courses</span>
		                </a>
		            </li>


					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-calendar"></i></span>
		                	<span class="ttr-label">Calendar</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="basic-calendar.html" class="ttr-material-button"><span class="ttr-label">Basic Calendar</span></a>
		                	</li>
		                	<li>
		                		<a href="list-view-calendar.html" class="ttr-material-button"><span class="ttr-label">List View</span></a>
		                	</li>
		                </ul>
		            </li>

					<li>
						<a href="review.html" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-comments"></i></span>
		                	<span class="ttr-label">Review</span>
		                </a>
		            </li>

					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-email"></i></span>
		                	<span class="ttr-label">Mailbox</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="mailbox.html" class="ttr-material-button"><span class="ttr-label">Mail Box</span></a>
		                	</li>
		                	<li>
		                		<a href="mailbox-compose.html" class="ttr-material-button"><span class="ttr-label">Compose</span></a>
		                	</li>
							<li>
		                		<a href="mailbox-read.html" class="ttr-material-button"><span class="ttr-label">Mail Read</span></a>
		                	</li>
		                </ul>
		            </li>	

					<li>
						<a href="#" class="ttr-material-button">
							<span class="ttr-icon"><i class="ti-user"></i></span>
		                	<span class="ttr-label">My Profile</span>
		                	<span class="ttr-arrow-icon"><i class="fa fa-angle-down"></i></span>
		                </a>
		                <ul>
		                	<li>
		                		<a href="user-profile.html" class="ttr-material-button"><span class="ttr-label">User Profile</span></a>
		                	</li>
		                	<li>
		                		<a href="teacher-profile.html" class="ttr-material-button"><span class="ttr-label">Teacher Profile</span></a>
		                	</li>
		                </ul>
		            </li>
		            <li class="ttr-seperate"></li>
				</ul>
				<!-- sidebar menu end -->
			</nav>
			<!-- sidebar menu end -->
		</div>
	</div>
	<!-- Left sidebar menu end -->

    `

    this.pnlBodyMainHTML = `
        <main class="ttr-wrapper" id='pageMainContent'></main>
        <div class="ttr-overlay"></div>
    `

    this.panelMenu = ($writer) => {
        let $mnu = this;
        $writer.html(`${$mnu.pnlHeaderHTML}${$mnu.pnlSideBarLeftHTML}${$mnu.pnlBodyMainHTML}`);
        $mnu.onloadPanleMenu($writer);
    
        // $(".ttr-sidebar-toggle-button").on("click",()=>{
        //     $('.ttr-toggle-sidebar').trigger('click')
        // });
    }

    this.onloadPanleMenu = ($writer) => {
        let $mnu = this;  
		
		if($mnu.showSupport){

			window.setTimeout(()=>{
				$writer.find(".ttr-header-submenu").removeClass('active');
			}, 5000);


			$(document).on('click', function () {
				$('.ttr-header-submenu').removeClass('active');
			});
		}else{
			$('.ttr-header-submenu').removeClass('active');
		}

		// $writer.find('.ttr-material-button')
		// .off('click')
		// .on('click', function (e) {
		// 	e.preventDefault();

		// 	const li = $(this).closest('li');

		// 	li.toggleClass('show');
		// 	li.find('ul').stop(true, true).slideToggle(200);
		// });



		

    }
}