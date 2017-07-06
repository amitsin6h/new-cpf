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
                        <h1 class="text-uppercase text-center color-black" style="font-family: 'Open Sans Condensed', sans-serif; margin-bottom: 210px; font-weight: normal;">e-Kawach</h1>
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
                <li class="current"><a href="ekawach.php">e-Kawach</a></li>
            </ol>
        </div>
    </div>
</div>

       
<div id="founder" >
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-5">
                <img class="img-responsive" src="../assets/images/ekawach.jpg" alt="Cyber Peace Foundation">
            </div>
            <div class="col-sm-7">
                <h1 style="font-size: 27px;">e-Kawach</h1>
                <p class="cpf-text">In today’s world, information or data is the most valuable resource that one can have. Thus securing information should be the task on priority. Thus Jharkhand Police in association with Cyber Peace Foundation has started this initiative of Critical Information Infrastructure Protection by the name of “e-Kawach”.
                We are an organization that holds highly skilled security experts as our volunteers. They possess great skills along with substantial amount of industrial work experience. We therefore offer our service as an aid for Critical Information Infrastructure Protection (CIIP) to any interested organization. Our experts work along with the organization to help maintain the security for the organization’s data, systems and other cyber assets. They assist in finding bugs, security loopholes, and any vulnerability and perform penetration tests to analyse the system. They also help in rectifying any issues that are found during the testing stage.</p> 

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
                <h1 class="cpf-text text-uppercase" style="font-size: 27px;">e-Kawach Projects</h1>

                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Doner</th>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Grant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Foreign & Commonwealth Office</td>
                        <td>e-Kawach - The e-shield for National and State Cybersecurity </td>
                        <td>"<b>e-Kawach - the e-shield for National and State Cybersecurity</b>" is an initiatives of Cyber Peace Foundation (CPF) in collaboration with Foreign & Commonwealth Office to implement 24 honeypots across the country. The Objective is to setup a comprehensive public network and sensors to capture and analyse internet attack traffic and build credible intelligence in the domain of cyber security pertaining to critical infrastructure, which would be then shared with appropriate government and public agencies in the country.

                        A C&C(Command and Controle) has been setup in Ranchi and the hardware is in place to pull logs and data from all over the backend analytics and reporting system is been developed. </td>
                        <td style="">€ 77,650</td>
                      </tr>
                    </tbody>
                </table>
        </div>
  

    </div>
</div>


      
        <!--========== END PAGE LAYOUT ==========-->


<?php include_once('../controls/footer.php');?>