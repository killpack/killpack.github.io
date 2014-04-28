$(function() {

  var taglines = [
    "Simply the best.",
    "The ultimate in luxury.",
    "Why settle for anything less?",
    "For when quality is a priority.",
    "Sheer perfection.",
    "The epitome of class.",
    "A zenith.",
    "Truly unparalleled."
  ];

  var taglineNumber = Math.floor(Math.random() * taglines.length);

  var updateTagline = function() {
    $("#tagline").text(taglines[taglineNumber]);
    taglineNumber = (taglineNumber + 1) % taglines.length;
  };

  updateTagline();

  $("#more").click(updateTagline);

});
