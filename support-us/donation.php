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
.card {
  padding-top: 20px;
  margin: 10px 0 20px 0;
  background-color: #ffffff;
  border: 1px solid #d8d8d8;
  border-top-width: 0;
  border-bottom-width: 2px;
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
  -webkit-box-shadow: none;
     -moz-box-shadow: none;
          box-shadow: none;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}


.card.hovercard {
  position: relative;
  width: 300px;
  padding-top: 0;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
}

.card.hovercard img {
  width: 300px;
  height: 200px;
}

.card.hovercard .info {
  padding: 4px 8px 10px;
}

.card.hovercard .info .title {
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 1;
  color: #262626;
  vertical-align: middle;
}

.card.hovercard .info .desc {
  overflow: hidden;
  font-size: 15px;
  line-height: 20px;
  color: #737373;
  text-overflow: ellipsis;
}

.card.hovercard .bottom {
  padding: 0 20px;
  margin-bottom: 17px;
}

.card.people .card-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  line-height: 29px;
  text-align: center;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
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
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Donation</h1>
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
                <li class="current"><a href="mentoring.php">Donation</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-12">
                <h1 style="font-size: 27px;" class="text-center cpf-text"><u>Donation</u></h1>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/1.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Crowdfunding for CPF</h1>
                          </div>
                          <div class="desc">We are a not-for-profit organization primarily dependent on Crowdfunding to garner resources required by us to work towards our motto of Global Cyber Peace and Safety </div>
                       </div>
                       <div class="bottom">
                          <a href="crowdfunding.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/2.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Donation in form of knowledge</h1>
                          </div>
                          <div class="desc">You do not necessarily need to have money to donate, all you need is intent. Your willingness and commitment is all that is required.We have this scheme of donations.</div>
                       </div>
                       <div class="bottom">
                          <a href="donate-knowledge.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/3.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Donation in the form of Infra</h1>
                          </div>
                          <div class="desc">Your generous funding helps us in a big way to efficiently carry out our initiatives. CPF also accepts donation of resources other than money.</div>
                       </div>
                       <div class="bottom">
                          <a href="donate-infrastructure.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>
                
            </div>
        </div> 

        <div class="row margin-b-40">
            <div class="col-sm-12">
                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/4.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Sponsor a Budding Talent</h1>
                          </div>
                          <div class="desc">Cyber Peace Foundation gives you an opportunity to give back to the society that has given you so much. We cannot deny the fact that innumerable talented children</div>
                       </div>
                       <div class="bottom">
                          <a href="budding-talent.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/5.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Sponsor an Initiative</h1>
                          </div>
                          <div class="desc">Your contributions will make a difference to ‘global cyber peace’, which isessential for societal peace in today’s world. If a person or organization wishes to donate money to help</div>
                       </div>
                       <div class="bottom">
                          <a href="sponsor-initiatives.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/donation/6.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">In Kind In Cash</h1>
                          </div>
                          <div class="desc">Donating money is not only way to help society.cpf welcomes you to volunteer some time to provide support for our social initiatives and Donate your expertise.</div>
                       </div>
                       <div class="bottom">
                          <a href="in-kind-in-cash.php"><p class="cpf-text" style="color: #446CB3;"><u>Read More</u></p></a>
                       </div>
                    </div>
                </div>
                
            </div>
        </div>
                

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>