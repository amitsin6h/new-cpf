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
</style>

<link href="../vendor/lightbox/src/jquery.littlelightbox.css" rel="stylesheet" type="text/css">
    
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->           
    <div class="carousel-inner" role="listbox">
        <div class="">
            <img class="img-responsive" src="../assets/img/1920x1080/02.jpg">
            <div class="container" >
                <div class="carousel" style="margin-top: 150px;">
                    <div class="margin-b-40">
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">Support Us</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">OFFICAL MERCHANDISE</h1>
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
                <li><a href="#">Support us</a></li>
                <li class="current"><a href="merchandise.php">OFFICAL MERCHANDISE</a></li>
            </ol>
        </div>
    </div>
</div>

     
<div id="about-cpf" >
    <div class="content-lg container">

        <div class="row">
            <div class="col-md-12">
                <h1 class="cpf-text text-uppercase text-center" style="font-size: 27px;"><u>OFFICAL MERCHANDISE</h1> 
            </div>

       


            <div class="col-md-12">

                <div class="col-md-5">                      
                    <a class="lightbox thumbnail" href="../assets/images/merchandise/1.jpg" data-littlelightbox-group="gallery" title="Hooded Sweatshirt with Cyber Peace Logo">
                        <img src="../assets/images/merchandise/1.jpg" alt="Hooded Sweatshirt with Cyber Peace Logo" />
                    </a>
                </div>

                <div class="col-md-5">                      
                    <a class="lightbox thumbnail" href="../assets/images/merchandise/2.jpg" data-littlelightbox-group="gallery" title="Black Cap">
                        <img src="../assets/images/merchandise/2.jpg" alt="Black Cap" />
                    </a>
                </div>
                

            </div>

            <div class="col-md-12">

                <div class="col-md-5">
                    <a class="lightbox thumbnail" href="../assets/images/merchandise/3.jpg" data-littlelightbox-group="gallery" title="Polo Tshirt with Cyber Peace Logo"/>
                        <img src="../assets/images/merchandise/3.jpg" alt="Polo Tshirt with Cyber Peace Logo" />
                    </a>
                </div>

                <div class="col-md-5">                      
                    <a class="lightbox thumbnail" href="../assets/images/merchandise/4.jpg" data-littlelightbox-group="gallery" title="Black Coffee Mug">
                        <img src="../assets/images/merchandise/4.jpg" alt="Black Coffee Mug" />
                    </a>
                </div>

            </div>


        </div>

    
    </div>
</div>


      
<script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>

<script src="../vendor/lightbox/src/jquery.littlelightbox.js"></script>

<script>
$('.lightbox').littleLightBox();
</script>


<?php include_once('../controls/footer.php');?>