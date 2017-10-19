function displayTime(){

  var epochTime = $("#epochTime").val();

  var converted = new Date(0);
  converted.setUTCSeconds(epochTime);
  setUpTitleCard(converted);
}

function setUpTitleCard(title){
  $("#inputform, #description, #footer, #holder").hide();

  $("#titleCard").show();

  $("#titleCard").text('"' + title + '"');
}
