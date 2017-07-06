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

.governing-body{
    background-color: #3A539B;
}
.governing-body > .margin-b-30 >h3, p{
    color: #fff;
}
.governing-body > .list-unstyled > li{
    color: #fff;
}
.board-members{
    background-color: #3A539B;
}
.board-members > .margin-b-30 >h3, p{
    color: #fff;
}
.board-members > .list-unstyled > li{
    color: #fff;
}
.team{
    background-color: #3A539B;
}
.team > .margin-b-30 >h3, p{
    color: #fff;
}
.team > .list-unstyled > li{
    color: #fff;
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
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">About Us</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Our Team</h1>
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
                <li><a href="#">About US</a></li>
                <li class="current"><a href="our-team.php">Our Team</a></li>
            </ol>
        </div>
    </div>
</div>

<div id="cpf-team">

    <div class="content-lg container">
        <div class="row row-space-1">
            <div class="col-sm-4 sm-margin-b-2">
                    
                <div class="cpf-box governing-body">
                    <div class="margin-b-30">
                        <i class="cpf-box-icon icon-chemistry" style="color: #fff;"></i>
                        <h3 class="text-uppercase">Governing Body</h3>
                    </div>
                    <ul class="list-unstyled cpf-box-list margin-b-50">
                        <li class="cpf-box-list-item">Lt. Vineet Kumar (President)</li>
                        <li class="cpf-box-list-item">- (Secretary)</li>
                        <li class="cpf-box-list-item">Col B. Prasad (Treasurer)</li>
                        <li class="cpf-box-list-item">Abhigyan Shushant (Joint Secretary)</li>
                    </ul>
                    
                </div>
            </div>

            <div class="col-sm-4 sm-margin-b-2">
                <div class="cpf-box cpf-box-active board-members">
                    <div class="margin-b-30">
                        <i class="cpf-box-icon icon-badge" style="color: #fff;"></i>
                        <h3 class="text-uppercase">Board Members</h3>
                    </div>
                    <ul class="list-unstyled cpf-box-list margin-b-50">   
                         <li class="cpf-box-list-item">Shri PC Haldar</li>
                         <li class="cpf-box-list-item">Shri SN Pradhan</li>
                         <li class="cpf-box-list-item">Shri Vineet Kumar</li>
                         <li class="cpf-box-list-item">Colonel (Retd.) B Prasad</li>
                         <li class="cpf-box-list-item">Shri Avinash Kumar Singh</li>
                         <li class="cpf-box-list-item">Prakash Kumar</li>
                         <li class="cpf-box-list-item">Abhigyan siddhant</li>
                         <li class="cpf-box-list-item">Namita Rai</li>
                         <li class="cpf-box-list-item">Varun Banka</li>
                    </ul>
                    
                </div>
            </div>

            <div class="col-sm-4">
                <div class="cpf-box team" >
                    <div class="margin-b-30">
                        <i class="cpf-box-icon icon-user" style="color: #fff;"></i>
                        <h3>Team</h3>
                    </div>
                    <ul class="list-unstyled cpf-box-list margin-b-50">    
                        <li class="cpf-box-list-item">Saurabh Kishu</li>
                        <li class="cpf-box-list-item">Avinash Wilson Tirki</li>
                        <li class="cpf-box-list-item">Asif Iqbal</li>
                        <li class="cpf-box-list-item">Dhawal Chauan</li>
                        <li class="cpf-box-list-item">Saurabh Kumar</li>
                        <li class="cpf-box-list-item">Tushar</li>
                        <li class="cpf-box-list-item">Ritesh Mishra</li>
                        <li class="cpf-box-list-item">Aditya Gupta</li>
                        <li class="cpf-box-list-item">Sandeep Kumar</li>
                        <li class="cpf-box-list-item">Aniket H Thakur</li>
                        <li class="cpf-box-list-item">Kumar Vikram</li>
                        <li class="cpf-box-list-item">Parthiweshwar Thakur</li>
                        <li class="cpf-box-list-item">Anandmayee</li>   
                    </ul>
                    
                </div>
            </div>

        </div>
    </div>
</div>


<?php include_once('../controls/footer.php');?>