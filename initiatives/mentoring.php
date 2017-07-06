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
.btn-joinus{
    background-color: #3A539B;
    color: #fff;
}
.btn-joinus:hover{
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
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">Initiatives</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Mentroring</h1>
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
                <li><a href="#">Initiatives</a></li>
                <li class="current"><a href="mentoring.php">Mentoring</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-5">
                <img class="img-responsive" src="../assets/images/mentoring.jpg" alt="Cyber Peace Foundation">
            </div>
            <div class="col-sm-7">
                <h1 style="font-size: 27px;">Cyber Mentoring</h1>
                <p class="cpf-text">To create a cyber-secure society, we need to technically and morally equip the coming generation to counter cyber-crime and uphold cyber ethics. Keeping this in mind, we initiated the cyber mentoring program which focuses on inculcating in school kids the capability to safely explore the internet without getting victimized. Mentoring these kids would also result in reducing cyber abuse and also cybercrimes committed by them unknowingly due to lack of awareness.</p> 

                <br>
                <div style="text-align: center;">
                    <a href="">
                        <div class="btn btn-joinus text-uppercase text-center" style="padding-right: 100px;padding-left: 100px;padding-top: 10px; padding-bottom: 10px; border-radius: 25px;">Join US</div>
                    </a>
                </div>
            </div>
        </div> 
        <div class="row margin-b-40">
            <div class="col-sm-12">
                <h1 class="cpf-text text-uppercase" style="font-size: 27px;">Our initiative:</h1>
                <p class="cpf-text">Learned and highly qualified people from the field of science and medicine are also among our pool of volunteers. Psychiatrists, professors of psychology etc. help victims of cyber hate crimes through appropriate counselling sessions with them. </p>
                <ul>    
                    <li>Our volunteer is assigned to a school kid or a group of school kids whom she/he mentors or guides after school hours on the basics of cyber security and the importance of cyber ethics.</li>
                    <li>Our volunteer keeps in touch with the mentee/s through texting, email, social networking sites etc. so as to inculcate in the kid the correct and meaningful use of such technologies.</li>
                    <li>Our volunteer would also have a meeting session with her/his mentee once or twice every week for a stipulated period of time so as to work together on some related project or assignment. There also lies a chance for the kid to get familiar with the mentor so as to create a more conducive learning environment.</li>
                    <li>This meeting could occur at any predefined location or even through video conferencing depending on the requirement.</li>
                    <li>Our volunteer would work with the mentee on some kind of relevant project so as to develop the cyber skills in them, both technical and moral, by the way of learning by application of skills.</li>
                    <li>Under this program, our volunteers also organize summer/winter camps in association with schools/colleges for a fixed duration of time wherein they mentor a whole group of students.</li>
                </ul>
            </div>
           
        </div>
  

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>