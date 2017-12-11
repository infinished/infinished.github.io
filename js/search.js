$("#searchTxt").keypress(function(e){
  if(e.which == 13) {
    search();
}
});


function search(){

  var key = $("#searchTxt").val().toLowerCase();

  var key_reg = new RegExp(".*?"+key+".*?");
  console.log(key_reg);
  var threads_number = $('.threads').children().length;
  for (i=0; i < threads_number; i++){
    var thread = $('#'+i);

    var title = thread.find(' .threadDetails .threadTitle').html().toLowerCase();
    if (title.search(key_reg) === -1){
      thread.addClass("hidden");
    }else{
      thread.removeClass("hidden");
    }
  }
  setTimeout( function(){$(".thread").css("display","flex");}, 400);
  setTimeout( function(){$(".hidden").css("display","none");}, 400);

}
