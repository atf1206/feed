 function myGetIndeed(sourceArray) 
  {
  var url = "https://indeedpassthrough.herokuapp.com/indeed";
  //url += '?' + 
  //console.log("here");
  $.ajax({
    url: url,
    dataType: 'jsonp'
    //method: 'GET',
    }).done(function(result) {
      myPasteIndeed(result);
    }).fail(function(err) {
      throw err;
  });
 }
	
function myPasteIndeed(result) {
    $("#results").empty();
    var obj = JSON.parse(result);
    var myobj = obj["response"][0]["results"][0]["result"];
    for (var i = 0; i < 6; i++) {
      console.log(obj["response"][0]["results"][0]["result"][i]);
      
      $("#results").append("<div class='job'><a target='_blank' href='" +myobj[i]["url"]+ "' class='jobtitle'>" +myobj[i]["jobtitle"]+ "</a><br><span class='company_location'><span class='company'>" +myobj[i]["company"]+ "</span> - <span class='location'>" +myobj[i]["formattedLocation"]+ "</span></span></div>");
    }
}
