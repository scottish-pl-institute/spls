$(document).ready (function () { $(".abstract").each (processAbstract); });

function processAbstract (i, div_abstract) {
  $("<BUTTON/>")
    .addClass ("abstractreveal")
    .text ("\u25b6 Abstract...")
    .click(function () {
	      $(this).toggleClass ("open");
	      if ($(this).hasClass("open"))
		   $(this).text ("\u25bc Abstract...");
	      else
		   $(this).text ("\u25b6 Abstract...");
	      $(div_abstract).toggle ();
	   })
    .insertBefore (div_abstract);
}
