$('.add-to-cart-button').click(function() {
    let variant = $(this).attr('variant_value');
    console.log(variant);

    let formData = {
        'items': [{
            'id': variant,
            'quantity': 1
        }]
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            return response.json();
        })

        .then(response => {
            fetch(window.Shopify.routes.root + 'cart.js', {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                return response.json();
            }).then(response => {
                $("#cartcount").text(response.item_count);
                //console.log(response);
            })
        })

        .catch((error) => {
            console.error('Error:', error);
        });

});


//////////

$('.singlepagecart').click(function() {
    let variant = $('[name=id]').val();
    let quantity = $('[name=quantity]').val();
    console.log(variant);

    let formData = {
        'items': [{
            'id': variant,
            'quantity': quantity
        }]
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            //console.log(response);
            return response.json();
        })

        .then(response => {

          const statuscode = response.status;
          //console.log (xmlDoc);

          if (statuscode == '422') {
           document.getElementById("statuscode").innerHTML = "You can't add more item";
          }
          // else{
          //   document.getElementById("statuscode").innerHTML = "Please select Different item";
          // }
            
            fetch(window.Shopify.routes.root + 'cart.js', {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                return response.json();
            }).then(response => {
                $("#cartcount").text(response.item_count);
                //console.log(response);
            })
        })

        .catch((error) => {
            console.error('Error:', error);
        });

});

///////buy now//////////


$('.Buy').click(function() {
    let variant = $('[name=id]').val();
    let quantity = $('[name=quantity]').val();
    console.log(variant);

    let formData = {
        'items': [{
            'id': variant,
            'quantity': quantity
        }]
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            //console.log(response);
            return response.json();
        })

        .then(response => {

        window.location.href = "/checkout";
        })

        .catch((error) => {
            console.error('Error:', error);
        });

});



