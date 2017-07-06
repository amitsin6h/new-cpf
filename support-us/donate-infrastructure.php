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
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">Support Us</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">
                        Donation in the form of infrastructure</h1>
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
                <li><a href="#">Support Us</a></li>
                <li class="current"><a href="donate-infrastructure.php">Donation in the form of infrastructure</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-5">
                <img class="img-responsive" src="../assets/images/donation/3.jpg" alt="Cyber Peace Foundation">
            </div>
            <div class="col-sm-7">
                <h1 style="font-size: 27px;">Donation in the form of infrastructure</h1>
                <p class="cpf-text">Your generous funding helps us in a big way to efficiently carry out our initiatives. But it is not only monetary donations that we accept, Cyber Peace Foundation also accepts donation of resources other than money.</p> 

            </div>
        </div> 

        <div class="row margin-b-40">
            <div class="col-sm-12">
                <h1 class="cpf-text text-uppercase" style="font-size: 27px;">You can donate items (OLD or NEW) such as:</h1>
                <ul>    
                  <li>Computer equipment (Desktops, laptops, printers, etc.)</li>
                  <li>Cyber Security tools</li>
                  <li>Mobility support</li>
                  <li>Rent-free space (for operating from different locations)</li>
                  <li>Stationary etc.</li>
                </ul>
            </div>
        </div>


        <p class="cpf-text text-center"><b>You are more than welcome to donate any other infrastructural equipment that might be useful to us.</b></p>
        <p class="cpf-text text-center"><b>To make a Donation contact us at +91.9570000265 or mail us at info@cyberpeacefoudation.org</b></p>
        

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>