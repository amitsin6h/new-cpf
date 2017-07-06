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
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Charity Bounty</h1>
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
                <li class="current"><a href="charitybounty.php">Charity Bounty</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-5">
                <img class="img-responsive" src="../assets/images/img_mission.png" alt="Cyber Peace Foundation">
            </div>
            <div class="col-sm-7">
                <h1 style="font-size: 27px;">Charity Bounty<br>
                <small>Concept</small></h1>
                <p class="cpf-text">Charity bounty is a very novel initiative by the Cyber Peace Foundation wherein we conduct free of cost bug testing of websites, web applications, mobile applications and other softwares on request by owner organization or developer. In today’s world, information holds equal value as money. Hence there is a desperate ongoing struggle for acquisition of information, either legally or otherwise. Many people try this by launching of cyber-attacks against unsuspecting targets. Thus it is an absolute necessity to protect one’s valuable data against any such attempts.</p> 

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
                <h1 class="cpf-text text-uppercase" style="font-size: 27px;"><u>The Need</u></h1>
                <p class="cpf-text">Statistical data shows that almost millions of cyber-attacks are carried out every day around the globe. The motive behind these attacks includes intention of data theft, data tampering, disrupting the normal functionality of systems etc. These attacks are not restricted to few specific websites or systems. More or less almost every system is attacked either with or without the knowledge of its administrator.
                In today’s world, information holds equal value as money. Hence there is a desperate ongoing struggle for acquisition of information, either legally or otherwise. Many people try this by launching of cyber-attacks against unsuspecting targets. Thus it is an absolute necessity to protect one’s valuable data against any such attempts.
                Another motive of cyber-attacks includes vandalism. Attacks are carried out to disrupt the proper functionality of any application or system, leading to unnecessary trouble. Such attacks can cause unexpected execution behaviour or the application or a denial of service to its users.
                All cyber-attacks take advantage of one or more vulnerability, bugs, loopholes etc. present in the application or system. Presence of these vulnerabilities greatly helps attackers in their motive. Thus reducing the number of vulnerabilities reduces the chance of successful cyber-attack to the minimum. </p>

                <h1 class="cpf-text text-uppercase" style="font-size: 27px;">Purpose:</h1>
                <p class="cpf-text">Our endeavours are directed towards covering up all possible loopholes present in any software, application or website.
                Our main focus lies on giving support to charitable/social organizations that extensively use mobile or web applications for their initiatives. We strive to help all such organization to function without any disruption in their noble cause of service to society.
                We are the first organization to implement the concept of bug hunting for charitable cause. </p>
                <p class="cpf-text">Manifold benefits aimed are:</p>
                <ul>
                    <li>Increased security in softwares.</li>
                    <li>Increased information protection</li>
                    <li>Lesser the vulnerabilities, better the cyber environment</li>
                </ul>

            </div>
           
        </div>
  

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>