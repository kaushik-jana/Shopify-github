$(".remove-button").click(function () {
  let variant = $(this).attr("variant_value");
  console.log(variant);

  let formData = {
  'id': variant,
  'quantity': 0
  };
  
  fetch(window.Shopify.routes.root + "cart/change.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response);
      location.reload();
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});
