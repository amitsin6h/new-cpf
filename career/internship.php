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
                        <h2 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif;  font-weight: normal;">Career</h2>
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">Internship</h1>
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
                <li><a href="#">Career</a></li>
                <li class="current"><a href="internship.php">Internship</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-12">
                <h1 style="font-size: 27px;" class="text-center cpf-text"><u>Internship With Us</u></h1>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/web-development.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Web Development</h1>
                          </div>
                       </div>
                       <div id="web-development" class="collapse">
                              <ul>
                                <li>HTML, CSS, jQuery, Bootstrap( or any other frameworks)</li>
                                <li>Wordpress, Drupal, Joomal</li>
                                <li>PHP, Python, NodeJS</li>
                                <li>JavaScript, AngularJS</li>
                                <li>Codeigniter, Laravel( or any other MVC frameworks)</li>
                                <li>MySQL</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#web-development"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/graphics-designing.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Graphics Designing</h1>
                          </div>
                       </div>
                       <div id="graphics-designing" class="collapse">
                              <ul>
                                <li>Illustrator, Photoshop</li>
                                <li>Vector, Logo, Poster, Brochure, Flyers designing</li>
                                <li>Wireframing</li>
                                <li>Infographics designing</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#graphics-designing"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/cyber-security.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Cyber Security</h1>
                          </div>
                        </div>
                        <div id="cyber-security" class="collapse">
                              <ul>
                                <li>OWASP Top 10</li>
                                <li>Vlunerablity Assesment and Pentreation Testing</li>
                                <li>Network Security</li>
                                <li>Forensics</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#cyber-security"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>
                
            </div>
        </div> 

        <div class="row margin-b-40">
            <div class="col-sm-12">
                <div class="col-md-4">
                    <div class="card hovercard">
                        <img src="../assets/images/internship/marketing.jpg" alt=""/>
                        <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Marketing</h1>
                          </div>
                        </div>
                        <div id="marketing" class="collapse">
                              <ul>
                                <li>Public Speaking, Good Communication Skill, Creativity</li>
                                <li>Analytical Thinking, SWOT analysis</li>
                                <li>Negotiating rates and terms, Managing budgets</li>
                                <li>Developing social media strategy</li>
                                <li>IT Skills, MS Office</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#marketing"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/legal.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Legal</h1>
                          </div>
                       </div>
                       <div id="legal" class="collapse">
                              <ul>
                                <li>Resilience and self confidence</li>
                                <li>Legal Research</li>
                                <li>Research and analysis</li>
                                <li>IT Skills</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#legal"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/research-and-innovation.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Research and Innovation</h1>
                          </div>
                       </div>
                       <div id="research-and-innovation" class="collapse">
                              <ul>
                                <li>Resilience and self confidence</li>
                                <li>Legal Research</li>
                                <li>Research and analysis</li>
                                <li>IT Skills</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#research-and-innovation"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="row margin-b-40">
            <div class="col-sm-12">
                <div class="col-md-offset-4 col-md-4">
                    <div class="card hovercard">
                       <img src="../assets/images/internship/content-writer.jpg" alt=""/>
                       <div class="info">
                          <div class="title">
                             <h1 class="cpf-text text-uppercase">Content Writer</h1>
                          </div>
                       </div>
                       <div id="content-writer" class="collapse">
                              <ul>
                                <li>Resilience and self confidence</li>
                                <li>Legal Research</li>
                                <li>Research and analysis</li>
                                <li>IT Skills</li>
                              </ul>
                          </div>
                          <div class="desc text-uppercase" style="background-color: #36D7B7; padding-top: 10px; padding-bottom: 10px; color: #fff;" data-toggle="collapse" data-target="#content-writer"><b>Required Skills </b> <i class="glyphicon glyphicon-sort" style="color: #fff;"></i></div>
                    </div>
                </div>  
            </div>
        </div>

        
                

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>