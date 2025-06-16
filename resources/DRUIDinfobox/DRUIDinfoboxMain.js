
$(function () {
  $(".druid-title-tab").off("click")
    .on('click', function () {
      var $parent = $(this).closest(".druid-container");
      $parent.find(".druid-toggleable").removeClass("focused");
      var i = $(this).attr("data-druid");
      $parent.find(".druid-toggleable[data-druid=" + i + "]").addClass("focused");
  });
    
  $(".druid-section-tab").off("click")
    .on('click', function () {
      var $parent = $(this).closest(".druid-section-container");
      $parent.find(".druid-toggleable").removeClass("focused");
      var i = $(this).attr("data-druid");
      $parent.find(".druid-toggleable[data-druid=" + i + "]").addClass("focused");
  });

  $(".druid-collapsible").off("click")
    .on('click', function () {
      var kind = $(this).attr("data-druid-section");
      $(this).toggleClass("druid-collapsible-collapsed");
      $(this)
        .closest(".druid-container")
        .find("[data-druid-section-row=" + kind + "]")
        .toggleClass("druid-collapsed");
  });
});
