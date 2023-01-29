document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("#formulary").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    document.querySelector(".modal").classList.remove("hidden");
    console.log("ok");
  });

  document.querySelector("#close").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    document.querySelector(".modal").classList.add("hidden");
  });

  document
    .querySelector("#contact")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post(
        "https://site--formulaire-back--dl97zr2bcjvg.code.run/form",
        data
      );
      console.log(response.data);
    });
});
