
      
      $(document).ready(function(){
    //    //$('.kaktusc-cart-icon').on('click',function(){
    // $(document).on('click','.kaktusc-cart-icon',function(){

         
        //alert('hii');
        $(".Buy").hide();
        var unifyCartData = "https://e-commercedemo.myshopify.com/cart.json";
          
         $.getJSON(unifyCartData, function(jsonData) {
             var dt=encodeURIComponent(JSON.stringify(jsonData));
       
            var html="";
             html+="<form method='post' action='https://dev05.stagingit.net/nrideb/getdata.php' id='frm_id'>";
              html+="<input type='hidden' name='shopi_all_data' id='shopi_all_data' value=''>";
              html+="<input type='submit' class='Buy' id='customcheckout' value='Custom checkout' style='margin-left: 85%;''>";
             html+="</form>"
            // Append the custom button under the parent element
             //$('.kaktusc-cart__checkout-wrap').append(html);
             $('#statuscode').append(html);
             $('#shopi_all_data').val(dt);
        });
       
      });

      $(document).on('click','.btnqty',function(event) {
         alert('hii');
      
        setTimeout(function(){
           var unifyCartData =  "https://e-commercedemo.myshopify.com/cart.json";
          $.getJSON(unifyCartData, function(jsonData) {
            // Process the JSON data
            console.log('JSON Data:', jsonData);
             var dt=encodeURIComponent(JSON.stringify(jsonData));
    
  
          
             $('#shopi_all_data').val(dt);
        });
       
        }, 3000);
        
      });

    //  setTimeout(function(){
    // $(".wallet-button-fade-in").children().children().remove();
    //    console.log($("#product_details").val());
    //    var unifyCartData = "https://nridebstore0.myshopify.com/cart.json";

    //      $.getJSON(unifyCartData, function(jsonData) {
    //          var dt=encodeURIComponent(JSON.stringify(jsonData));
    //    var html="";
    //      html+="<form method='post' action='https://dev05.stagingit.net/nrideb/getdata.php' id='frm_id'>";
    //       html+="<input type='hidden' name='shopi_all_data' id='shopi_all_data' value=''>";
    //       html+="<input type='submit' class='shopify-payment-button__button shopify-payment-button__button--unbranded' id='customcheckout' value='Custom Buy' >";
    //      html+="</form>";
    //      $(".wallet-button-fade-in").children().append(html);
    //         $('#shopi_all_data').val(dt);
    //     });
    //    },1000);
     




  
        
