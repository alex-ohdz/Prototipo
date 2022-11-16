//autocerrar offcanvas entrar en otro link

// $(document).on("click", ".navbar-collapse.in", function (e) {
//   if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
//     $(this).collapse("hide");
//   }
// });
export const EventoApp = () => {
const linkesEvent = document.querySelectorAll(".cambiar");

//Eventos
linkesEvent.addEventListener('click', () => {
  console.log("click");
});
};

