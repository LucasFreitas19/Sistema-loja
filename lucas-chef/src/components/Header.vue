<template>
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-6"> 
                    
                        <img src="../assets/Logo.png" class="logo" alt="logo">
                    
                </div>
                <div class="col-md-6 header-right ">
                    <nav class="home">
                        <ul class="txt-home">
                            <li>Clientes</li>
                            <li>Pedidos</li>
                        </ul>
                        </nav>      
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:"Header"
        
   
}
</script>
<style >

.header{
width: 100%;
height: 150px;
background-color: #deb887;
}



.logo{
    color: white;
    width: 130px;
    margin-top: 10px;
    margin-left: 0;
    
    
}

.header_right{
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: -15px;
}

.home ul li a{
    padding: 4px 15px;
    letter-spacing: 0.5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color:red ;
}
.home ul{
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  widows: 100%;
  align-items: center;
  margin: 0px;
}

.home ul li:not(:last-child):after{
content: "";
display: inline-block;
width: 10px;
border: 2px solid black;
border-radius: 3px;
background-color: #440E0B;
height: 10px;
margin-left: 20px;
margin-right: 20px;
}
.home ul li:hover {
background-color: #b4956c;
}
.txt-home {
  font-size: 30px;
  font-style: italic;
  color:#440E0B;
  
}
</style>



