<?php include_once('../controls/header.php');?>
<style type="text/css">
.breadcrumb{
    background: none;
    margin-bottom: -80px;
    padding-top: 30px;
    color: #5D6D7E;
}
.breadcrumb li {
    display: inline;


}
.breadcrumb > li > a:hover{
    color: #446cb3;
}
.breadcrumb > li > a{

}
.breadcrumb li+li:before {
    content:"»";
    color: #2c2c2c;
}
.current > a{
    color: #446CB3;
}
ol > li > a{

    font-size: 13px;
}
.cpf-text{
    color: #404040;
    font-size: 17px;
}
input-span{
    background-color: #fff;
    color: #fff;
}
.chat .chat-history {
  padding: 0px 30px 20px;
  border-bottom: 2px solid white;
}
.chat .chat-history .message-data {
  margin-bottom: 15px;
}
.chat .chat-history .message-data-time {
  color: #a8aab1;
  padding-left: 6px;
}
.chat .chat-history .message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 30px;
  width: 90%;
  position: relative;
}
.chat .chat-history .message:after {
content: "";
    position: absolute;
    top: -15px;
    left: 20px;
    border-width: 0 15px 15px;
    border-style: solid;
    border-color: #CCDBDC transparent;
    display: block;
    width: 0;
}
.chat .chat-history .you-message {
  background: #CCDBDC;
  color:#003366;
}
.chat .chat-history .me-message {
  background: #E9724C;
}
.chat .chat-history .me-message:after {
  border-color: #E9724C transparent;
    right: 20px;
    top: -15px;
    left: auto;
    bottom:auto;
}
.chat .chat-message {
  padding: 30px;
}
.chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {
  font-size: 16px;
  color: gray;
  cursor: pointer;
}

.chat-ul li{
    list-style-type: none;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.you {
  color: #CCDBDC;
}

.me {
  color: #E9724C;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway",sans-serif;
    color: #003366;
}

</style>
    
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->           
    <div class="carousel-inner" role="listbox">
        <div class="">
            <img class="img-responsive" src="../assets/img/1920x1080/02.jpg">
            <div class="container" >
                <div class="carousel" style="margin-top: 150px;">
                    <div class="margin-b-40">
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">Contact Us</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Contact</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <ol class="breadcrumb text-uppercase">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Contact US</a></li>
                <li class="current"><a href="#">Contact</a></li>
            </ol>
        </div>
    </div>
</div>

     
<div id="about-cpf" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-8">
               <h1 class="cpf-text text-uppercase" style="font-size: 25px;">Get in touch with us</h1>
                

                <div class="col-md-12">
                  <form action="" method="">
                   
                    <div class="col-md-6">
                        <div class="input-group">
                          <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-user"></i></span>
                          <input type="text" class="form-control input-span" placeholder="Full Name" />
                        </div> <br>

                        <div class="input-group">
                          <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-envelope"></i></span>
                          <input type="text" class="form-control input-span" placeholder="Email" />
                        </div>
                        <br>
                    </div>
                    
                    <div class="col-md-6">    
                        <div class="input-group">
                          <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-earphone"></i></span>
                          <input type="text" class="form-control input-span" placeholder="Phone" />
                        </div><br>

                        <div class="input-group">
                          <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-certificate"></i></span>
                          <input type="text" class="form-control input-span" placeholder="Subject" />
                        </div>
                        <br>
                    </div>

                    <div class="col-md-12">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-comment"></i></span>
                            <textarea type="text" class="form-control input-span" placeholder="Enter your message"></textarea> 
                        </div>
                        <br>

                        <div class="pull-right">
                            <button class="form-control btn btn-primary" style="background-color: #1BBC9B; border: none;">
                            <i class="glyphicon glyphicon-send" style="color: #fff; padding-right: 5px;"></i> Send Message</button>
                        </div>
                    </div>
                    
                  </form>
                </div>

            </div>

            <div class="col-md-4">
                <h1 class="cpf-text text-uppercase" style="font-size: 25px;">Report incident with us</h1>
                <div class="chat">   
                    <div class="chat-history">
                        <ul class="chat-ul">
                            <li>
                                <div class="message-data">
                                   <span class="message-data-name"><i class="fa fa-circle you"></i> Cyber Peace Foundation</span>
                                </div>
                                <div class="message you-message">
                                Any cyber incident?!?! Feel free to report with us anytime. We would love to help you out?
                                </div>
                                <button class="form-control btn" style="background-color: #5C97BF; border: none; color: #fff;">Report</button>
                            </li>
                        </ul>
                    </div> <!-- end chat-history -->
                </div> <!-- end chat -->
            </div>
            
        </div> 
     
        <div class="row">
            <div class="col-md-12">
                <h1 style="text-align: center;" class="text-uppercase">Connect With Us</h1>

                <div class="col-md-4">
                    <div id="facebook">
                        <p style="text-align: center;">
                            <img src="../assets/images/social/facebook.png" width="70"> 
                            <b>cyberpeacefoundation</b>
                        </p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div id="twitter">
                        <p style="text-align: center;">
                            <img src="../assets/images/social/twitter.png" width="70">
                            <b>@cyberpeacengo</b>
                        </p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div id="youtube">
                        <p style="text-align: center;">
                            <img src="../assets/images/social/youtube.png" width="70">
                            <b>cyberpeacefoundation</b>
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>


      

   
            
        <!-- Contact -->
 <div style="background-color: #26446E;">
            <!-- Contact List -->
            <div class="section-seperator">
                <div class="content-lg container">
                    <div class="row">
                        <!-- Contact List -->
                        <div class="col-sm-3 sm-margin-b-50">
                            <h3><a href="#" style="color: #fff;">Ranchi, JH</a> <span class="text-uppercase margin-l-20">Secretariat</span></h3>
                            <p style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul class="list-unstyled contact-list" >
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-call-out"></i>+91-651-645-8865</li>
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-envelope"></i> india@cyberpeacefoundation.org </li>
                            </ul>
                        </div>
                        <!-- End Contact List -->

                         <!-- Contact List -->
                        <div class="col-sm-3 sm-margin-b-50">
                            <h3><a href="#" style="color: #fff;">Delhi</a> <span class="text-uppercase margin-l-20">Corporate Office</span></h3>
                            <p style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul class="list-unstyled contact-list">
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-call-out"></i></li>
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-envelope"></i></li>
                            </ul>
                        </div>
                        <!-- End Contact List -->

                        <!-- Contact List -->
                        <div class="col-sm-3 sm-margin-b-50">
                            <h3><a href="#" style="color: #fff;">USA</a> <span class="text-uppercase margin-l-20">Office</span></h3>
                            <p style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul class="list-unstyled contact-list">
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-call-out"></i>+1-716-241-1555</li>
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-envelope"></i>info@cyberpeacefoundation.org </li>
                            </ul>
                        </div>
                        <!-- End Contact List -->

                        <!-- Contact List -->
                        <div class="col-sm-3 sm-margin-b-50">
                            <h3><a href="#" style="color: #fff;">UK</a> <span class="text-uppercase margin-l-20">Office</span></h3>
                            <p style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul class="list-unstyled contact-list">
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-call-out"></i>+44-203-287-0765</li>
                                <li style="color: #fff;"><i class="margin-r-10 color-base icon-envelope"></i> info@cyberpeacefoundation.org </li>
                            </ul>
                        </div>
                        <!-- End Contact List -->
                    </div>
                    <!--// end row -->
                </div>
            </div>
            <!-- End Contact List -->
            
          <!--map-->
        <div id="chartdiv" style="background-color: #4E81A4; width: auto; height: 400px;"></div>    

        </div>
        <!-- End Contact -->
       

<?php include_once('../controls/../controls/footer.php');?>