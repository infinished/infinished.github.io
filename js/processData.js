//https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz,https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz,https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz,https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz,https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz,https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz
function splitElement(elementString){
  var pattern = /!%/;
  var elementList = elementString.split(pattern);
  return elementList;
}

function splitTeamMentor(elementString){
  var pattern = /\s*,\s*/;
  var elementList = elementString.split(pattern);
  return elementList;
}

function replaceOpen(imgString){
  var imgString = imgString.replace(/open/g, "uc");
  return imgString;
}

//https://docs.google.com/uc?id=
function processImg(imgList){
  for (j = 0; j < imgList.length; j++){
    imgList[j] = "url("+imgList[j]+")";
  }
}


//it is not unfinished. It is just a experiment
function pushNewDevelopers(group){
  //template
  var newDeveloper = {
    id: '',
    name: '',
    profilePic: '',
    linkedIn: '',
    blurb: ''
  }

  for (n = 0; n < group.length; n++){
    var id = group[n];
    var existed = false;
    for (m = 0; m < developers.length; m++) {
      // if existed, break
      if (id === developers[m].id){
        existed = true;
        break;
      }
    }
    // if not existed, add the new developer to the developers
    if (!existed){
      //if not, add the new developer
      newDeveloper.id = id;
      newDeveloper.name = id;
      developers.push(newDeveloper);
    }
  }
}




function getData(result){
  var metaData = result.data;
  for (i = 0; i < metaData.length; i++){
    var data = metaData[i];

    //replace all 'open' in imgs to 'uc' in imgs
    data.imgs = replaceOpen(data.imgs);
    //replace 'open' in imgs to 'uc' in mainImg
    data.mainImg = replaceOpen(data.mainImg);

    //Split all elements into a list by !%
    data.imgs = splitElement(data.imgs);
    data.imgTxt = splitElement(data.imgTxt);
    data.info = splitElement(data.info);

    // by ,
    data.mentor = splitTeamMentor(data.mentor);
    data.team = splitTeamMentor(data.team);

    data.cat = "Project: " + data.cat;
    data.mainImg = "url("+data.mainImg+")";

    //add url to imgs list
    processImg(data.imgs);

    //push new developers
    pushNewDevelopers(data.team);
    pushNewDevelopers(data.mentor);
    threads.push(data);
  }


  for (i = 0; i < threads.length; i++) {
  	$('.threads').append('<div class="thread js-tilt"><a rel="leanModal" onclick="populateModal($(this)); return true;" class="threadLink mainImg" href="#modalPopup"></a><div class="threadDetails" rel="leanModal" onclick="populateModal($(this)); return true;" href="#modalPopup"><p class="threadLink threadTitle"></p><p class="threadLink threadOrg"></p><div></div><p class="threadLink threadCat" href="#"></p></div></div>');

  	$('.thread:nth-of-type('+(i+1)+')').addClass(threads[i].id).attr('id', i);
  	$('.thread:nth-of-type('+(i+1)+') .mainImg').css('background-image', threads[i].mainImg);
  	$('.thread:nth-of-type('+(i+1)+') .threadCat').html(threads[i].cat);
  	$('.thread:nth-of-type('+(i+1)+') .threadTitle').html(threads[i].title);
  	$('.thread:nth-of-type('+(i+1)+') .threadOrg').html(threads[i].org);
  }

  setupPopupWindows();


  //tilt animation
  $(function () {
      var tilt = $('.js-tilt').tilt(
  			{
  				maxTilt:        15,
  				perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  				easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  				scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
  				speed:          300,    // Speed of the enter/exit transition.
  				transition:     true,   // Set a transition on enter/exit.
  			}
  		);
  });

}

/*
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: "url('https://docs.google.com/uc?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz')",
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ["url('https://drive.google.com/open?id=1oi6uh6x2ylZfMjHBjLvypCgE6SNIxyAz')"],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Organization',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Organization: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Idea',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Idea: Product',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
  link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
  team: ['anonymous'],
  mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Organization',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Organization: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Idea',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Idea: Product',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
  link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
  team: ['anonymous'],
  mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Project',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Project: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Organization',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Organization: System',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
team: ['anonymous'],
mentor:[]
},
{
  id: 'unknown',
  title: 'unknown Idea',
  summary: 'The unknown mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
  mainImg: 'url(images/projects/unknown.jpg)',
  org: 'Program in Design and Innovation',
  cat: 'Idea: Product',
  imgs: ['url(images/projects/unknown.jpg)'],
  imgTxt: ['unknown'],
  info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate. Since the front door is metallic, two magnets inside the block intensify the immobilization when the block is inserted. In addition, the strike plate of the PDI front door is unique among any others on campus by my observation. The shape of my door stop doesn’t fit to other strike plates, therefore, preventing people from taking the door stop away for personal usage.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
  link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
  team: ['anonymous'],
  mentor:[]
},*/
