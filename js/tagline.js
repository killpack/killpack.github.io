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

  $("#tagline").text(taglines[Math.floor(Math.random() * taglines.length)]);
  
});
