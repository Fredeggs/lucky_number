/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();
  form_data = {
    name: $("#name").val(),
    email: $("#email").val(),
    year: parseInt($("#year").val()),
    color: $("#color").val(),
  };
  resp = await axios.post("/api/get-lucky-num", (json = form_data));

  handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
  if (resp.data.errors) {
    if (resp.data.errors.name) {
      $("#name-err").append(`${resp.data.errors.name}`);
    }
    if (resp.data.errors.email) {
      $("#email-err").append(`${resp.data.errors.email}`);
    }
    if (resp.data.errors.year) {
      $("#year-err").append(`${resp.data.errors.year}`);
    }
    if (resp.data.errors.color) {
      $("#color-err").append(`${resp.data.errors.color}`);
    }
  } else {
    $("#lucky-results").append(
      `<p>Your lucky number is ${resp.data.num.num} ${resp.data.num.fact}</p>
         <p>Your birth year ${resp.data.year.year} fact <b>is</b> ${resp.data.year.fact}</p>`
    );
  }
}

$("#lucky-form").on("submit", processForm);

// $("form").on("click", ".create-cupcake", createCupcake);

// async function createCupcake(e) {
//   e.preventDefault();
//   new_cupcake = {
//     flavor: $(".flavor").val(),
//     size: $(".size").val(),
//     rating: $(".rating").val(),
//     image: $(".image").val(),
//   };
//   resp = await axios.post("/api/cupcakes", (json = new_cupcake));
//   $(".cupcake-list").children().remove();
//   resp2 = await axios.get("/api/cupcakes");
//   $(".cupcake-list").append("<ul></ul>");
//   const CUPCAKES = resp2.data.cupcakes;
//   for (const CUPCAKE of CUPCAKES) {
//     $("ul").append(
//       `<li><button class="show-details" data-id=${CUPCAKE.id}>${CUPCAKE.flavor}</button></li>`
//     );
//   }
// }
