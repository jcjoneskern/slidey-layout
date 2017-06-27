$(function() {

  let index = 4;

  $("li").on("click", function() {
    let panel = $("div[data-panel=" + $(this).attr("data-panel") + "]");

    if (panel.hasClass("visible")) {
      return;
    } else if (panel.hasClass("hidden")) {
      index--;
      $("div.visible").toggleClass("hidden visible").css("z-index", index);

      index++;
      panel.toggleClass("hidden visible").css("z-index", index);
    }

  });

});
