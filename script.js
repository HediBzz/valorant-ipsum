var copy = "";

jQuery(document).ready(function ($) {
  // Initialize ipsum
  var generated = $("#generated");
  var league = ["Astra",
"Breach",
"Brimstone",
"Cypher",
"Jett",
"Killjoy",
"Omen",
"Phoenix",
"Raze",
"Reyna",
"Sage",
"Skye",
"Sova",
"Viper",
"Yoru",
"Classic",
"Shorty",
"Frenzy",
"Ghost",
"Sheriff",
"Stinger",
"Spectre",
"Bucky",
"Judge",
"Bulldog",
"Guardian",
"Phantom",
"Vandal",
"Marshal",
"Operator",
"Ares",
"Odin",
"Couteau",
"ASCENT",
"BIND",
"BREEZE",
"FRACTURE",
"HAVEN",
"ICEBOX",
"LOTUS",
"PEARL",
"SPLIT",
"flash",
"site",
"plant",
"defuse",
"spike",
"rush",
"open",
"round",
"bonus",
"eco",
"lurk",
"crouch",
"spread",
"headshot",
"one tap",
"kda",
"top fragger",
"bottom fragger",
"mvp",
"skin",
"iron",
"bronze",
"silver",
"gold",
"platine",
"diamond",
"ascendant",
"immortal",
"radiant",
"elo"];
  
 var generatedText = ""; // Variable pour stocker le texte généré

  $("#ipsum").bind("submit", function() {
    var numParagraphs = $("input[name=num-paragraphs]").val();
    if (numParagraphs > 100) {
      numParagraphs = 100;
    }
    var numSentences = $("input[name=num-sentences]").val();
    var startWith = "Valorant Ipsum dolor sit amet ";
    generatedText = ipsum(numParagraphs, league, startWith, numSentences); // Stocker le texte généré
    generated.html(generatedText);
    return false;
  });

  $("#copy-button").click(function() {


    // Create a temporary textarea element
    navigator.clipboard.writeText(copy);

    // Alert the copied text
    alert("Text copied !");
  });
});


function ipsum(numParagraphs, phrases, startText, numS){
  var text = "";

  if(numParagraphs < 1){
    return text;
  }
  
  for(var i = 0; i < numParagraphs; i++){
    // 5 - 8 sentences per paragraph
    var paragraph = "";
    var saveS = numS;
    var numS = Math.floor((numS * 2) + 5);
    for(var j = 0; j < numS; j++){
      // 15 - 20 words per sentence
      var sentence = "";
      var numWords = Math.floor((Math.random()* 10)+15);
      for(var k = 0; k < numWords; k++){
        var word = "";
        var wordNum = Math.floor(Math.random()*phrases.length);
        word = phrases[wordNum];
        
        if (k != 0){
          sentence = sentence + " ";
        }
        sentence = sentence + word;
      }
      sentence = sentence + ".";
      if (j == 0 && i == 0){
        sentence = startText + sentence;
      }

      sentence = capitalizeFirstLetter(sentence);
      
      paragraph = paragraph + sentence;
      paragraph = paragraph + " ";
    }
    numS = saveS;
    copy = copy + paragraph + "\n \n";
    paragraph = "<p>" + paragraph + "</p>";
    text = text + paragraph;
  }
  
  return text;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

