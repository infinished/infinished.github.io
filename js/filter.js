
function filter(type){

  var type_reg = new RegExp(type+".*?");
  var threads_number = $('.threads').children().length;


  for (i=0; i < threads_number; i++){
    var thread = $('#'+i);

    var cat = thread.find(' .threadDetails .threadCat');
    if (cat.html().search(type_reg) === -1){
      thread.addClass("hidden");
    }else{
      thread.removeClass("hidden");
    }
  }

  setTimeout( function(){
    $(".thread").css("display","flex");}, 400);

  //display none after the transition
  setTimeout( function(){
    $(".hidden").css("display","none");}, 400);

  //initalization
  $("#filterIdea").attr("onclick","filter('Idea')");
  $("#filterIdea").removeClass("pressed");
  $("#filterProject").attr("onclick","filter('Project')");
  $("#filterProject").removeClass("pressed");
  $("#filterOrganization").attr("onclick","filter('Organization')");
  $("#filterOrganization").removeClass("pressed");

  //keep the button pressed
  //take place of the filter function
  $("#filter"+type).attr("onclick","show_all('"+type+"')");
  $("#filter"+type).addClass("pressed");
}

function show_all(type){
    $(".hidden").css("display","flex");
    setTimeout( function(){
      $(".hidden").removeClass("hidden");}, 300);
    //unpress the button
    //take place of the show_all function
  $("#filter"+type).attr("onclick","filter('"+type+"')");
  $("#filter"+type).removeClass("pressed");
}
