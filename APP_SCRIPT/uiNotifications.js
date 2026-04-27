
function uiNotifications() {
    this.pnlNotificationsHTML = `
<div class="container-fluid py-1">

    <!-- Header -->
    <div class="mb-2 section-header">
        <h3 class="fw-bold gradient-text">Notifications</h3>
        <div class="header-line mb-1"></div>
        <p class="text-muted-glass">Alerts or messages that inform users about important updates, activities, or actions related to their account or courses.</p>
    </div>

    <!-- Filter -->
    <div class="mb-3">
        <select class="form-select w-auto" id="filter" onchange="applyFilter()">
            <option value="all">All</option>
            <option value="unread">Unread</option>
        </select>
    </div>

    <!-- Notification List -->
    <div class="card notification-card">

        <!-- Item -->
        <div class="notification-item unread" data-status="unread">
            <div class="d-flex gap-3">
                <div class="icon-box icon-course">
                    <i class="bi bi-book"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="fw-semibold">New lesson available</div>
                    <div class="text-muted small">
                        Lesson 5 has been added to <strong>JavaScript Fundamentals</strong>
                    </div>
                </div>
                <small class="text-muted">5m ago</small>
            </div>
        </div>

        <div class="notification-item unread" data-status="unread">
            <div class="d-flex gap-3">
                <div class="icon-box icon-alert">
                    <i class="bi bi-exclamation-triangle"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="fw-semibold">Password reminder</div>
                    <div class="text-muted small">
                        Please update your password to keep your account secure
                    </div>
                </div>
                <small class="text-muted">1h ago</small>
            </div>
        </div>

        <div class="notification-item" data-status="read">
            <div class="d-flex gap-3">
                <div class="icon-box icon-update">
                    <i class="bi bi-arrow-repeat"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="fw-semibold">Platform update</div>
                    <div class="text-muted small">
                        We’ve improved course recommendations for you
                    </div>
                </div>
                <small class="text-muted">Yesterday</small>
            </div>
        </div>

    </div>

</div>

    
    `
    this.panelNotifications = ($writer) => {
        let $noti = this;
        $writer.html($noti.pnlNotificationsHTML);
        //$rc.onloadPanleMenu($writer);

    }

}