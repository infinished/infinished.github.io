//Responsive Offset of Modal for different window sizes
var offsetTop = $(window).height() * 0.040;

function setupPopupWindows()
{
  $("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.6, closeButton: ".modal_close" });
}

//Function to populate the project section of the modal
function populateModal(elt) {
  $(".imgDiv").remove();
  $(".devs").remove();
  $(".mentor").remove();
  $(".mentor_team").remove();
  $(".mentor-divLine").remove();
  //calls the leanModal Function anytime a link with the rel of leanModal is called
  //Creates a variable and associates it with the id of the tag selected in the html
  //example: <div class="thread" id="senstaff">
  //var id becomes equal to senstaff
  var id = elt.parent().attr('class').split(' ')[2];
  var num = elt.parent().attr('id');
  console.log(threads[num].mainImg);
  //logs the id to the console (verifies process is working)
  console.log(id);
	//creates variables to store the id above with appended specifier like -org i.e. senstaff-org
  //Creates modal variable to store the id associated with the modal tags sub tags whenever it is displayed
	var projSide = $("#modalPopup .projectSide");
  //finds specific tages within the modal and adds css, html tags, and attributes to them - i.e. passes info from database above to modal to be displayed
	//Project Head Data//////////////////////////////////////////////////////////////////////////////////////////////////
	projSide.find('.projectHead .title').html(threads[num].title);
	projSide.find('.projectHead .summary').html(threads[num].summary);
	projSide.find('.projectHead .cat').html(threads[num].cat);
	//Main Project Img
	//projSide.find('.mainImg').css('background-image', threads[num].mainImg);
	//Project Details Data
	//Add Project Images & Descriptions
	//Append Divs to store image and text according to number of images stored in imgs matrix
	for (i = 0; i < threads[num].imgs.length; i++){
		//Adds a div to the projectImages for each image stored in the database
		$('.projectImages').append('<div class="imgDiv"><p class="imgTxt"></p></div>');
		projSide.find('.imgDiv:nth-of-type('+(i+1)+')').css('background-image', threads[num].imgs[i]);
		projSide.find('.imgDiv:nth-of-type('+(i+1)+') .imgTxt').html(threads[num].imgTxt[i]);
	}
	//Add Additional Project Info
	for (i = 0; i < threads[num].info.length; i++) {
		projSide.find('.projectInfo p:nth-of-type('+(i+1)+')').html(threads[num].info[i]);
	}
  //Link to Google Drive Folder
  projSide.find('.gDrive').attr('href', threads[num].link);

  //Add Project Team Data
	//for loop to populate team aside with correct number of divs for team members
	for (i = 0; i < threads[num].team.length; i++) {
    //<a target="_blank" class="devName"></a>
		$('.devSide .team').append('<div class="devs"><div class="devPic"></div><div class="devOverlay"><div class="devName"></div><div class="devContact"></div></div></div>');
    for (j=0; j < developers.length; j++) {
      if (developers[j].id === threads[num].team[i]) {
          $('.devs:nth-of-type('+(i+1)+') .devPic').css('background-image', developers[j].profilePic);
          $('.devs:nth-of-type('+(i+1)+') .devName').html(developers[j].name)
          //adding line between each persona
          // if (i !== threads[num].team.length-1) {
          //   $('.devSide .team').append('<hr>');
          // }
          //PDI unnecessary
          //$('.devs:nth-child('+(i+1)+') .devName').html(developers[j].name).attr('href', developers[j].linkedIn);
      }
    }
	}

  //implement the mentor part
  var mentors = threads[num].mentor;
  if(mentors.length != 0){
    $('.devSide').append('</div><h1 class="mentor">Mentors</h1><hr class="mentor-divLine"><div class="mentor_team"></div>')
    for (i = 0; i < mentors.length; i++){
      $('.devSide .mentor_team').append('<div class="mentor_devs"><div class="devPic"></div><div class="devOverlay"><div class="devName"></div><div class="devContact"></div></div></div>');
      for (j=0; j < developers.length; j++) {
        if (developers[j].id === threads[num].mentor[i]) {
            $('.mentor_devs:nth-of-type('+(i+1)+') .devPic').css('background-image', developers[j].profilePic);
            $('.mentor_devs:nth-of-type('+(i+1)+') .devName').html(developers[j].name)
            //adding line between each persona
            // if (i !== threads[num].team.length-1) {
            //   $('.devSide .team').append('<hr>');
            // }
            //PDI unnecessary
            //$('.devs:nth-child('+(i+1)+') .devName').html(developers[j].name).attr('href', developers[j].linkedIn);
        }
      }
    }
  }


  $(".devContact").html("myemail@rpi.edu");
  //adding publishing time
  $(".published").html("Published: November 17, 2017");

  //*** Function to control animations for project side scrolling
  $('#modalPopup').scroll(function (event) {
  	var distanceScrolled = $('#modalPopup').scrollTop();
    console.log(distanceScrolled);
    var offsetTop = $('#modalPopup').height() * 0.040;
    // if (distanceScrolled > 200) {
  	// 	$('.navBar').css('opacity', );
  	// } else {
  	// 	$('.navBar').removeClass('stickyNav');
  	// }
  });
}

//Function to take care of staying there if projects don't have a link
function clickable(elt) {
	return elt.attr('href') !== '#';
};
