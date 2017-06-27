$(function() {

  let index = 4;
  let elems = ["one", "two", "three"];
  let hold = 0;

  $("li").on("click", function() {
    let nav = $(this).attr("data-panel");
    let panel = $("div[data-panel=" + nav + "]");

    if (panel.hasClass("visible")) {
      return;
    } else if (panel.hasClass("hidden")) {
      if (elems.indexOf(nav) > hold) {
        //slide in from right
        index--;
        $("div.visible").toggleClass("hidden visible").css("z-index", index).css("left",0);

        index+=2;
        panel.toggleClass("hidden visible").css("z-index", index).css("right", 0);
      } else {
        //slide in from left
        index--;
        $("div.visible").toggleClass("hidden visible").css("z-index", index).css("right",0);

        index+=2;
        panel.toggleClass("hidden visible").css("z-index", index).css("left", 0);
      }

      hold = elems.indexOf(nav);
    }

  });

});
