function uiCertificates() {
    this.pnlCertificatesHTML = `









            <!-- Certificates Grid -->

    <div class="container-fluid py-2">

            <!-- Header -->
            <div class="mb-2 section-header">
                <h3 class="fw-bold gradient-text">My Certificates</h3>
                <div class="header-line mb-1"></div>
                <p class="text-muted-glass">Your achievements and completed courses</p>
            </div>


        <div class="row g-4">

            <!-- CERT 1 -->
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="certificate-card">
                    <div class="certificate-header">
                        <div class="logo">Logo Company</div>
                    </div>

                    <div class="badge-award">BEST</div>

                    <div class="certificate-body">
                        <div class="certificate-title">CERTIFICATE</div>
                        <div class="certificate-sub">of Achievement</div>

                        <p class="mt-2">This Certificate is Presented to</p>

                        <div class="certificate-name">John Doe</div>

                        <p class="text-muted">
                            For outstanding performance and dedication in project execution.
                        </p>

                        <div class="certificate-footer">
                            <div class="text-center">
                                <div class="footer-line"></div>
                                DATE
                            </div>
                            <div class="text-center">
                                <div class="footer-line"></div>
                                SIGNATURE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CERT 2 -->
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="certificate-card">
                    <div class="certificate-header">
                        <div class="logo">Logo Company</div>
                    </div>

                    <div class="badge-award">TOP</div>

                    <div class="certificate-body">
                        <div class="certificate-title">CERTIFICATE</div>
                        <div class="certificate-sub">of Excellence</div>

                        <p class="mt-2">Awarded to</p>

                        <div class="certificate-name">John Doe</div>

                        <p class="text-muted">
                            In recognition of exceptional contribution and leadership.
                        </p>

                        <div class="certificate-footer">
                            <div class="text-center">
                                <div class="footer-line"></div>
                                DATE
                            </div>
                            <div class="text-center">
                                <div class="footer-line"></div>
                                SIGNATURE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CERT 3 -->
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="certificate-card">
                    <div class="certificate-header">
                        <div class="logo">Logo Company</div>
                    </div>

                    <div class="badge-award">WINNER</div>

                    <div class="certificate-body">
                        <div class="certificate-title">CERTIFICATE</div>
                        <div class="certificate-sub">of Recognition</div>

                        <p class="mt-2">Presented to</p>

                        <div class="certificate-name">John Doe</div>

                        <p class="text-muted">
                            For dedication and commitment to organizational success.
                        </p>

                        <div class="certificate-footer">
                            <div class="text-center">
                                <div class="footer-line"></div>
                                DATE
                            </div>
                            <div class="text-center">
                                <div class="footer-line"></div>
                                SIGNATURE
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                        <!-- CERT 4 -->
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="certificate-card">
                    <div class="certificate-header">
                        <div class="logo">Logo Company</div>
                    </div>

                    <div class="badge-award">WINNER</div>

                    <div class="certificate-body">
                        <div class="certificate-title">CERTIFICATE</div>
                        <div class="certificate-sub">of Recognition</div>

                        <p class="mt-2">Presented to</p>

                        <div class="certificate-name">John Doe</div>

                        <p class="text-muted">
                            For dedication and commitment to organizational success.
                        </p>

                        <div class="certificate-footer">
                            <div class="text-center">
                                <div class="footer-line"></div>
                                DATE
                            </div>
                            <div class="text-center">
                                <div class="footer-line"></div>
                                SIGNATURE
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



        <!-- Certificate Modal -->
        <div class="modal fade" id="certificateModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-4">

                        <div class="text-center border p-4">
                            <h3 class="certificate-title mb-3">
                                Certificate of Completion
                            </h3>
                            <p>This certificate is proudly presented to</p>
                            <h4 class="fw-bold mb-3">John Doe</h4>
                            <p>For successfully completing</p>
                            <h5 class="fw-semibold">JavaScript Fundamentals</h5>
                            <p class="mt-4 text-muted">
                                Issued on April 2026
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    
    `
    this.panelCertificates = ($writer) => {
        let $cer = this;
        $writer.html($cer.pnlCertificatesHTML);
        //$rc.onloadPanleMenu($writer);

    }

}