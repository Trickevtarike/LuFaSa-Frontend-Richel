$(function(){
       

    $("#indenwarenkorb").click(function(){
      
      var num1= $("#t_d").val();
      var num2=48.97;
      var num3=$("#total").val();
      var summe=(parseFloat(num1) * parseFloat(num2))+parseFloat(num3);
      num3=$("#total").val(summe);
      document.getElementById("clc").innerHTML=summe+"€";
    })
    

  })