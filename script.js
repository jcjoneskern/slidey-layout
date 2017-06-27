$(function() {

  let index = 4;
  let elems = ["one", "two", "three"];
  let hold = 0;

  $("li").on("click", function() {
    let nav = $(this).attr("data-panel");
    let panel = $("div[data-panel=" + nav + "]");

    if (panel.hasClass("show-left") || panel.hasClass("show-right")) {
      return;
    } else {
      if (elems.indexOf(nav) > hold) {
        index--;
        $("div.show-left, div.show-right").attr("class", "hide-left").css("z-index", index);

        index += 2;
        panel.attr("class", "show-right").css("z-index", index).css("z-index", index);
      } else {
        index--;
        $("div.show-left, div.show-right").attr("class", "hide-right").css("z-index", index);

        index +=2;
        panel.attr("class", "show-left").css("z-index", index);
      }
      hold = elems.indexOf(nav);
    }
  });
});
