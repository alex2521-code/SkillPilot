function uiMailbox() {
    this.pnlMailboxHTML = `
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">Mailbox</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>Mailbox</li>
				</ul>
			</div>	
			<div class="row">
				<!-- Your Profile Views Chart -->
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="email-wrapper">
							<div class="email-menu-bar">
								<div class="compose-mail">
									<a href="mailbox-compose.html" class="btn btn-block">Compose</a>
								</div>
								<div class="email-menu-bar-inner">
									<ul>
										<li class="active"><a href="mailbox.html"><i class="fa fa-envelope-o"></i>Inbox <span class="badge badge-success">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-send-o"></i>Sent</a></li>
										<li><a href="mailbox.html"><i class="fa fa-file-text-o"></i>Drafts <span class="badge badge-warning">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-cloud-upload"></i>Outbox <span class="badge badge-danger">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-trash-o"></i>Trash</a></li>
									</ul>
								</div>
							</div>
							<div class="mail-list-container">
								<div class="mail-toolbar">
									<div class="check-all">
										<div class="custom-control custom-checkbox checkbox-st1">
											<input type="checkbox" class="custom-control-input" id="check1">
											<label class="custom-control-label" for="check1"></label>
										</div>
									</div>
									<div class="mail-search-bar">
										<input type="text" class="form-control" placeholder="Search"/>
									</div>
									 <div class="dropdown all-msg-toolbar">
										<span class="btn btn-info-icon" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></span>
										<ul class="dropdown-menu">
											<li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
											<li><a href="#"><i class="fa fa-arrow-down"></i> Archive</a></li>
											<li><a href="#"><i class="fa fa-clock-o"></i> Snooze</a></li>
											<li><a href="#"><i class="fa fa-envelope-open"></i> Mark as unread</a></li>
										</ul>
									</div> 
									<div class="next-prev-btn">
										<a href="#"><i class="fa fa-angle-left"></i></a>
										<a href="#"><i class="fa fa-angle-right"></i></a>
									</div>
								</div>
								<div class="mail-box-list">
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check2">
												<label class="custom-control-label" for="check2"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check3">
												<label class="custom-control-label" for="check3"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check4">
												<label class="custom-control-label" for="check4"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check5">
												<label class="custom-control-label" for="check5"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check6">
												<label class="custom-control-label" for="check6"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check7">
												<label class="custom-control-label" for="check7"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check8">
												<label class="custom-control-label" for="check8"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check9">
												<label class="custom-control-label" for="check9"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check10">
												<label class="custom-control-label" for="check10"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check11">
												<label class="custom-control-label" for="check11"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check12">
												<label class="custom-control-label" for="check12"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check13">
												<label class="custom-control-label" for="check13"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check14">
												<label class="custom-control-label" for="check14"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check15">
												<label class="custom-control-label" for="check15"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check16">
												<label class="custom-control-label" for="check16"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check17">
												<label class="custom-control-label" for="check17"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check18">
												<label class="custom-control-label" for="check18"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
									<div class="mail-list-info">
										<div class="checkbox-list">
											<div class="custom-control custom-checkbox checkbox-st1">
												<input type="checkbox" class="custom-control-input" id="check19">
												<label class="custom-control-label" for="check19"></label>
											</div>
										</div>
										<div class="mail-rateing">
											<span><i class="fa fa-star-o"></i></span>
										</div>
										<div class="mail-list-title">
											<h6>David Moore</h6>
										</div>
										<div class="mail-list-title-info">
											<p>Change the password for your Micr</p>
										</div>
										<div class="mail-list-time">
											<span>10:59 AM</span>
										</div>
										<ul class="mailbox-toolbar">
											<li data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></li>
											<li data-toggle="tooltip" title="Archive"><i class="fa fa-arrow-down"></i></li>
											<li data-toggle="tooltip" title="Snooze"><i class="fa fa-clock-o"></i></li>
											<li data-toggle="tooltip" title="Mark as unread"><i class="fa fa-envelope-open"></i></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div> 
				</div>
				<!-- Your Profile Views Chart END-->
			</div>
		</div>

    `;
    this.pnlMailComposeHTML = `
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">Compose</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>Compose</li>
				</ul>
			</div>	
			<div class="row">
				<!-- Your Profile Views Chart -->
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="email-wrapper">
							<div class="email-menu-bar">
								<div class="compose-mail">
									<a href="mailbox-compose.html" class="btn btn-block">Compose</a>
								</div>
								<div class="email-menu-bar-inner">
									<ul>
										<li class="active"><a href="mailbox.html"><i class="fa fa-envelope-o"></i>Inbox <span class="badge badge-success">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-send-o"></i>Sent</a></li>
										<li><a href="mailbox.html"><i class="fa fa-file-text-o"></i>Drafts <span class="badge badge-warning">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-cloud-upload"></i>Outbox <span class="badge badge-danger">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-trash-o"></i>Trash</a></li>
									</ul>
								</div>
							</div>
							<div class="mail-list-container">
								<form class="mail-compose">
									<div class="form-group col-12">
										<input class="form-control" type="email" placeholder="To">
									</div>
									<div class="form-group col-12">
										<input class="form-control" type="email" placeholder="CC">
									</div>
									<div class="form-group col-12">
										<input class="form-control" type="text" placeholder="Subject">
									</div>
									<div class="form-group col-12">
										<div class="summernote"><p>Hello World</p></div>
									</div>
									<div class="form-group col-12">
										<input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple>
									</div>
									<div class="form-group col-12">
										<button type="submit" class="btn btn-lg">Send</button>
									</div>
								</form>
							</div>
						</div>
					</div> 
				</div>
				<!-- Your Profile Views Chart END-->
			</div>
		</div>
    
    `;

	this.pnlMailReadHTML = `
		<div class="container-fluid">
			<div class="db-breadcrumb">
				<h4 class="breadcrumb-title">Mail Read</h4>
				<ul class="db-breadcrumb-list">
					<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
					<li>Mail Read</li>
				</ul>
			</div>	
			<div class="row">
				<!-- Your Profile Views Chart -->
				<div class="col-lg-12 m-b30">
					<div class="widget-box">
						<div class="email-wrapper">
							<div class="email-menu-bar">
								<div class="compose-mail">
									<a href="mailbox-compose.html" class="btn btn-block">Compose</a>
								</div>
								<div class="email-menu-bar-inner">
									<ul>
										<li class="active"><a href="mailbox.html"><i class="fa fa-envelope-o"></i>Inbox <span class="badge badge-success">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-send-o"></i>Sent</a></li>
										<li><a href="mailbox.html"><i class="fa fa-file-text-o"></i>Drafts <span class="badge badge-warning">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-cloud-upload"></i>Outbox <span class="badge badge-danger">8</span></a></li>
										<li><a href="mailbox.html"><i class="fa fa-trash-o"></i>Trash</a></li>
									</ul>
								</div>
							</div>
							<div class="mail-list-container">
								<div class="mail-toolbar">
									<div class="mail-search-bar">
										<input type="text" class="form-control" placeholder="Search"/>
									</div>
									 <div class="dropdown all-msg-toolbar">
										<span class="btn btn-info-icon" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></span>
										<ul class="dropdown-menu">
											<li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
											<li><a href="#"><i class="fa fa-arrow-down"></i> Archive</a></li>
											<li><a href="#"><i class="fa fa-clock-o"></i> Snooze</a></li>
											<li><a href="#"><i class="fa fa-envelope-open"></i> Mark as unread</a></li>
										</ul>
									</div> 
									<div class="next-prev-btn">
										<a href="#"><i class="fa fa-angle-left"></i></a>
										<a href="#"><i class="fa fa-angle-right"></i></a>
									</div>
								</div>
								<div class="mailbox-view">
									<div class="mailbox-view-title">
										<h5 class="send-mail-title">Your message title goes here</h5>
									</div>
									<div class="send-mail-details">
										<div class="d-flex">
											<div class="send-mail-user">
												<div class="send-mail-user-pic">
													<img src="assets/images/testimonials/pic3.jpg" alt="">
												</div>
												<div class="send-mail-user-info">
													<h4>Pavan kumar</h4>
													<h5>From: example@info.com</h5>
												</div>
											</div>
											<div class="ml-auto send-mail-full-info">
												<div class="time"><span>10:25 PM</span></div>
												<span class="btn btn-info-icon">Reply</span>
												<div class="dropdown all-msg-toolbar ml-auto">
													<span class="btn btn-info-icon" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></span>
													<ul class="dropdown-menu dropdown-menu-right">
														<li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
														<li><a href="#"><i class="fa fa-arrow-down"></i> Archive</a></li>
														<li><a href="#"><i class="fa fa-clock-o"></i> Snooze</a></li>
														<li><a href="#"><i class="fa fa-envelope-open"></i> Mark as unread</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="read-content-body">
											<h5 class="read-content-title">Hi,Ingredia,</h5>
											<p><strong>Ingredia Nutrisha,</strong> A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</p>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of
												Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
											</p>
											<p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
												Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,</p>
												
											<h5 class="read-content-title">Kind Regards</h5>
											<p class="read-content-name">Mr Smith</p>
											<hr>
											<h6> <i class="fa fa-download m-r5"></i> Attachments <span>(3)</span></h6>
											<div class="mailbox-download-file">
												<a href="#"><i class="fa fa-file-image-o"></i> photo.png</a>
												<a href="#"><i class="fa fa-file-text-o"></i> dec.text</a>
												<a href="#"><i class="fa fa-file"></i> video.mkv</a>
											</div>
											<hr>
											<div class="form-group">
												<h6>Reply Message</h6>
												<div class="m-b15">
													<textarea class="form-control"> </textarea>
												</div>
												<button class="btn">Reply Now</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> 
				</div>
				<!-- Your Profile Views Chart END-->
			</div>
		</div>
	`;

    this.panelMailbox = ($writer) => {
        let $mb = this;
        $writer.html($mb.pnlMailboxHTML);
        $mb.onloadPanelMailbox($writer);

    }

    this.onloadPanelMailbox = ($writer) => {
        let $mb = this;    
        $writer.find('[data-toggle="tooltip"]').tooltip(); 
    }

    this.panelMailCompose = ($writer) => {
        let $mb = this;
        $writer.html($mb.pnlMailComposeHTML);
        $mb.onloadPanelMailCompose($writer);

    }

    this.onloadPanelMailCompose = ($writer) => {
        let $mb = this;    

        $writer.find('.summernote').summernote({
            height: 300,
            tabsize: 2
        });
        
        $writer.find('input[type="file"]').imageuploadify();
    }

    this.panelMailRead = ($writer) => {
        let $mb = this;
        $writer.html($mb.pnlMailReadHTML);
        $mb.onloadPanelMailRead($writer);

    }

    this.onloadPanelMailRead = ($writer) => {
        let $mb = this;    

    }
}