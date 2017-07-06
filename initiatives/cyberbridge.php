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
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Cyberbridge</h1>
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
                <li class="current"><a href="cyberbridge.php">Cyberbridge</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-5">
                <img class="img-responsive" src="../assets/images/cyberbridg.jpg" alt="Cyber Peace Foundation">
            </div>
            <div class="col-sm-7">
                <h1 style="font-size: 27px;">Cyber Bridge</h1>
                <p class="cpf-text">Cyber Peace Foundation, in recognizing the critical requirement of information sharing across verticals and disciplines has set up this initiative to ‘bridge’ the gap between the how-to, where, and what of Information Sharing initiatives.
                With professional volunteers manning the Cyber Bridge, CPF will endeavour to create a trusted platform that will benefit organizations and government in better management of risks as they will access information about similar or related events on the Bridge.</p> 

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
                <h1 class="cpf-text text-uppercase" style="font-size: 27px;"><u>Objectives</u></h1>
                <p class="cpf-text">To bridge the information gap between knowledge of a security incident and the skill to prevent or respond to the same, Cyber Bridge will be a cross-vertical, cross-discipline Information Sharing and Analysis resource subscribed by individuals, enterprises (small and big), or government.
                The Bridge will hold information about incidents and events that have been experienced by member organizations and individuals in a searchable database which has been sanitized to retain the anonymity of the submitter.
                In addition, the Bridge will also seek to be an authoritative reference resource when seeking contact information relating to Law Enforcement Agencies in the country. We hope to increase the coverage (in time) to include security and risk officers in major Indian organizations. </p>

                <h1 class="cpf-text text-uppercase" style="font-size: 27px;"><u>Operation</u></h1>
                <p class="cpf-text">To start with, the program will cover the city of Ranchi. Through contact programs with PSU, Government officials, LEA and large organizations the message of Information Sharing will be explained and the CPF Cyber Bridge will be popularized.
                Once the Ranchi resource would be mature enough, the program will be rolled out to the metro cities across the state with the goal of covering rural areas based on growing awareness and need.
                The aim is to develop and close on a secure technology model with standard operating procedures which can be distributed to other state (or national) LEA or NGOs which are willing to run similar operations. These distributions will have built in hooks to link all state installations to make the resource bigger and bigger in coverage. </p>

                <h1 class="cpf-text text-uppercase" style="font-size: 27px;"><u>Why Information Sharing</u></h1>
                <p class="cpf-text">Information Sharing and Analysis has come to be recognized as the most important function in proactive cyber security / cybercrime control. It provides a handy reference library of incidents which can be checked by the IS practitioner to identify risks and take appropriate measures. The risk report will usually have information about the steps taken by the affected party to remediate and contain and this will provide invaluable intelligence to any organization that may be in the same vertical or have similar infrastructure.
                All participants benefit with the sharing of risk and threat information and can substantially reduce their individual risk profile.</p>
            </div>
           
        </div>
  

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>