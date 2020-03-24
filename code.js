$("[show]").each(function() {
  var $this = $(this);
  $this.hide();
  $("#" + $this.attr("show")).click(function() {
    $this.show();
  });
});

var navBar =
  '<nav>' +
    '<a href="/index.html">Home</a>' +
  '</nav>'
;

$(navBar).prependTo("body");

$("nav span").click(function() {
  var $span = $(this);
  var $div = $("nav div[for=" + $span.attr("name") + "]");
  var $parentSpans = $("");
  var $parentDivs = $("");
  $div.parents("div").each(function() {
    $parentDivs = $parentDivs.add($(this));
    $parentSpans = $parentSpans.add($("nav span[name=" + $(this).attr("for") + "]"));
  });
  $div.css("top",$span.offset().top + $span.height() + 21);
  if ($div.is(":hidden")) {
    $div.show();
    $("nav span").removeClass("active");
    $span.addClass("active");
    $parentSpans.addClass("active");
    $span.siblings("span").each(function() {
      $("nav div[for=" + $(this).attr("name") + "]").hide();
    });
  } else {
    $div.hide();
    $div.find("div").hide();
    $("nav span").removeClass("active");
    $parentSpans.addClass("active");
  }
});
