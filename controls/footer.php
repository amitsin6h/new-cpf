
        <!--========== cpf-footer ==========-->
        <cpf-footer class="cpf-footer" style="background-color: #2F2F2F;">
            <!-- Links -->
            <div class="section-seperator">
                <div class="content-md container">
                    <div class="row">
                        <div class="col-sm-3">
                            <!-- List -->
                            <ul class="list-unstyled cpf-footer-list">
                                <p class="cpf-text" style="color: #fff"><b>Registered</b></p>
                                <img src="../assets/images/cpf-footer.jpg">
                            </ul>
                            <!-- End List -->
                        </div>

                        <div class="col-sm-2 sm-margin-b-30">
                            <!-- List -->
                            <ul class="list-unstyled cpf-footer-list">
                                <p class="cpf-text" style="color: #fff;"><b>Cyber Peace Foundation</b></p>
                                <li class="cpf-footer-list-item"><a href="../about-us/about-cpf.php">About</a></li>
                                <li class="cpf-footer-list-item"><a href="../about-us/founder.php">Founder</a></li>
                                <li class="cpf-footer-list-item"><a href="../about-us/patrons-and-advisors.php">Patrons & Advisors</a></li>
                                <li class="cpf-footer-list-item"><a href="../about-us/partners-and-advisors.php">Partners & Advisors</a></li>
                                <li class="cpf-footer-list-item"><a href="../about-us/our-team.php">Our Team</a></li>
                                <li class="cpf-footer-list-item"><a href="../about-us/faqs.php">Faqs</a></li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <div class="col-sm-2 sm-margin-b-30">
                            <!-- List -->
                            <ul class="list-unstyled cpf-footer-list">
                                <p class="cpf-text" style="color: #fff;"><b>Social Links</b></p>
                                <li class="cpf-footer-list-item"><a href="#">Twitter</a></li>
                                <li class="cpf-footer-list-item"><a href="#">Facebook</a></li>
                                <li class="cpf-footer-list-item"><a href="#">Instagram</a></li>
                                <li class="cpf-footer-list-item"><a href="#">YouTube</a></li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <div class="col-sm-3">
                            <!-- List -->
                            <ul class="list-unstyled cpf-footer-list">
                                <p class="cpf-text" style="color: #fff"><b>Quick Info</b></p>
                                <li class="cpf-footer-list-item"><a href="#">Subscribe to Our Newsletter</a></li>
                                <li class="cpf-footer-list-item"><a href="#">Privacy Policy</a></li>
                                <li class="cpf-footer-list-item"><a href="#">Terms &amp; Conditions</a></li>
                                <li class="cpf-footer-list-item"><a href="">Siteinfo</a></li>
                                <li class="cpf-footer-list-item"><a href="">Career</a></li>
                                <li class="cpf-footer-list-item"><a href="">Internship</a></li>
                            </ul>
                            <!-- End List -->
                        </div>

                        <div class="col-sm-2">
                            <!-- List -->
                            <ul class="list-unstyled cpf-footer-list">
                                <p class="cpf-text" style="color: #fff"><b>Our Location</b></p>
                                <li class="cpf-footer-list-item">Contact</li>
                                <li class="cpf-footer-list-item">+91)651 645 8865</li>
                                <br>
                                <li class="cpf-footer-list-item"><a href="#">Email</a></li>
                                <li class="cpf-footer-list-item">info@cyberpeacefoundation.org</li>
                                <br>
                                <li class="cpf-footer-list-item"><a href="#">Registered Office</a></li>
                                <li class="cpf-footer-list-item"><a href="">Plot no. B-55,</a></li>
                                <li class="cpf-footer-list-item"><a href="">Harmu Housing Colony</a></li>
                                <li class="cpf-footer-list-item"><a href="">anchi Jharkhand - 834002</a></li>
                            </ul>
                            <!-- End List -->
                        </div>
                    </div>
                    <!--// end row -->
                </div>
            </div>
            <!-- End Links -->

        
        </cpf-footer>
        <!--========== END cpf-footer ==========-->

        <!-- Back To Top -->
        <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

        <!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
        <!-- CORE PLUGINS -->
        <script src="../vendor/jquery.min.js" type="text/javascript"></script>
        <script src="../vendor/jquery-migrate.min.js" type="text/javascript"></script>
        <script src="../vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

        <!-- PAGE LEVEL PLUGINS -->
        <script src="../vendor/jquery.easing.js" type="text/javascript"></script>
        <script src="../vendor/jquery.back-to-top.js" type="text/javascript"></script>
        <script src="../vendor/jquery.smooth-scroll.js" type="text/javascript"></script>
        <script src="../vendor/jquery.wow.min.js" type="text/javascript"></script>
        <script src="../vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
        <script src="../vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
        <script src="../vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsXUGTFS09pLVdsYEE9YrO2y4IAncAO2U"></script>

        <!-- PAGE LEVEL SCRIPTS -->
        <script src="../assets/js/layout.js" type="text/javascript"></script>
        <script src="../assets/js/components/wow.min.js" type="text/javascript"></script>
        <script src="../assets/js/components/swiper.min.js" type="text/javascript"></script>
        <script src="../assets/js/components/masonry.min.js" type="text/javascript"></script>
        <script src="../assets/js/components/google-map.min.js" type="text/javascript"></script>

        <script src="../vendor/rcrumbs/rcrumbs.js"></script>

        <script>
            
        $(function(){
    
            $(".framemodel_box").css('visibility','hidden');

            var fid;
            $('.chover').hover(function(){
            fid=$(this).attr('framenum'); 
            $(".frame"+fid).css('visibility','visible'); ;
                
                }, function(){
                    $(".frame"+fid).css('visibility','hidden'); ;   
            });
        });

        </script>

    </body>
    <!-- END BODY -->
</html>