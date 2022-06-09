const form = document.querySelector(".login-form");
let formDataObj = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // !!!   глупый вопросс но как сделать что-бы email и password всегда выдавали value ?

  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены!!!");
  }
  //   console.log("email --", email.value, "\n password --" + password.value);
  formDataObj.email = email.value;
  formDataObj.password = password.value;

  console.log(
    `Email : => ${formDataObj.email} \n Password : => ${formDataObj.password}`
  );

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log("name", name);
  //     console.log("value", value.length);
  //     if (value == 0) {
  //       alert("ppc lol");
  //     }
  //   });
}
