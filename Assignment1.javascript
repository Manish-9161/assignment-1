container{
            margin: 0;
        }
        
       
        
        .logo{
            float: left;   
        }
        
        .logo img{
            width: 50px;
            height: 50px;
            border: 2px solid #c0c0c0;
            border-radius: 10px;
            margin: 5px;
        }
        
        
        .title{
            padding: 200px;
            color: black;
            text-align: center;
            font-size: 70px;
        }
        
        
        #about{
            width: 100%;
            height: 400px;
            
        }
        
        #services{
            margin: 0px;
            width: 100%;
            height: auto;
            background-color:#c0c0c0;
            color:black !important;
            font-weight: 500;
        }
        
        .backimg{
             background-image: url("4.jpg");
             background-size:cover;
             height: 750px;
             width: 100%;
        }
        
        .toggle{
            float: right;
            display: none;
        }
        
        .toggle a{
            text-decoration: none;
            color:blue;
            font-size: 25px;
            margin-left: 50px;
        }
        
        footer{
            width: 100%;
            height: 100px;
            background-color: #000000;
            color: yellow;
        }
        
        footer p{
            padding: 20px;
            text-align: center;
            font-size: 25px;
        }
        
        .display-container{
            position: relative;
        }
        
        .content{
            text-align: center;
            padding: 30px;   
            font-size: 25px;
        }
        
        .content1{
            text-align: justify;
            margin-left: 250px;
            margin-right: 250px;
            font-size: 25px;
        }
        
        .shead{
            text-align: center;
            padding: 20px;   
            font-size: 25px;
        }
        
        .serve{
            margin: 0px;
        }
        
        .row:after{
            content: "";
            display: table;
            clear: both;
        }
        
        .col{
            width: 33.3%;  
            float: left;
            height: auto;
            text-align: center;
            
        }   
        
        .col img{
            width: 200px;
            height: 200px;
            border: 3px solid #c0c0c0;
            border-radius: 15px;
        }
        
        .col p{
            text-align: justify;
            padding: 50px;
            font-size: 25px;
        }
        
        @media  screen and (max-width:480px){
            .toggle{
                display: contents !important;
            }
        
            .mitems{
                display: none;
            }        
        }
        
        @media  screen and (max-width:1200px){
            #about{
                height: auto;
            }
            
            .content{
                padding: 25px;
            }    
            
        .content1{
                width: 90%;
                margin-left: 20px;
                margin-right: 10px;
            }
        }
        
        @media screen and (max-width: 1100px) {
            .col{
            width: 100%;
            }
        
            .title{
                padding: 60px;
                font-size: 20px;
            }
        
        }
        
        #close{
            display: none;
        }
        
        #show:target {
            display:inline-grid;
        }

        
#hamnav {
  width: 100%;
  background: #000;
  opacity: 0.8;            
  position: fixed;
  top: 0;
}


#hamnav label, #hamburger { display: none; }


#hamitems { display: flex; }
#hamitems a {
  width: 15%;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 25px;    
}
#hamitems a:hover {
  border-bottom: 2px solid #c0c0c0;
}


@media screen and (max-width: 768px){
  #hamnav label { 
    display: inline-block; 
    color: white;
    background: #000;
    
    font-style: normal;
    font-size: 1.2em;
    padding: 10px;
    margin-left: 360px;
    margin-top: 10px;  
  }

  #hamitems a {
    box-sizing: border-box;
    display: block;
    
    width: 100%;
    border-top: 1px solid #333;
    padding: 20px;  
  }
    
    
  #hamitems { display: none; }
  #hamnav input:checked ~ #hamitems { display: block; }
}       