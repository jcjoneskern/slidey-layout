$(function() {

  let index = 4;
  let elems = ["home", "about", "portfolio", "contact"];
  let hold = 0;

  $("li").on("click", function() {
    let nav = $(this).text();
    let panel = $("section#" + nav);

    if (panel.hasClass("show-left") || panel.hasClass("show-right")) {
      return;
    } else {
      if (elems.indexOf(nav) > hold) {
        index--;
        $("section.show-left, section.show-right").attr("class", "hide-left").css("z-index", index);

        index += 2;
        panel.attr("class", "show-right").css("z-index", index).css("z-index", index);
      } else {
        index--;
        $("section.show-left, section.show-right").attr("class", "hide-right").css("z-index", index);

        index +=2;
        panel.attr("class", "show-left").css("z-index", index);
      }
      hold = elems.indexOf(nav);
    }
  });
});
