
//https://github.com/liddiard/yagsa - Grab Google Sheets Data
//THis stuff below isn't working, need to use stuff above
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTtYdc4d0_O1stTGGKuFPYAtmRhAAXxIE2V9UzeEQyUdwI7aI_Sn8SVzkbmDWKtC_l0CTexpQ81fMPD/pub?gid=2145925848&single=true&output=csv", {
	download: true,
	header: true,
	//interesting bug (2 causes 4 to display)
	// preview: 2,
	delimeter: ",",
	complete: function(results) {
		console.log(results);
		getData(results);
	}
});

var developers = [
	//anonymous
	{
		id: 'anonymous',
		name: 'Anonymous',
		profilePic: 'url(images/developers/anonymous.svg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'This was made by an anonymous developer'
	},
	//Luke Bateman
	{
		id: 'luke',
		name: 'Luke Bateman',
		profilePic: 'url(images/developers/lukeBateman.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Lei Luo
	{
		id: 'lei',
		name: 'Lei Luo',
		profilePic: 'url(images/developers/leiLuo.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Lilit Balagyozyan
	{
		id: 'lilit',
		name: 'Lilit Balagyozyan',
		profilePic: 'url(images/developers/lukeBateman.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Sean Alderdice
	{
		id: 'sean',
		name: 'Sean Alderdice',
		profilePic: 'url(images/developers/lukeBateman.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Emil Andreasan
	{
		id: 'emil',
		name: 'Emil Andreasan',
		profilePic: 'url(images/developers/lukeBateman.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	//Jack Yang
	{
		id: 'jack',
		name: 'Jack Yang',
		profilePic: 'url(images/developers/lukeBateman.jpg)',
		linkedIn: 'https://www.linkedin.com/in/luke-bateman-245226a0/',
		blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quae inventore fuga similique accusamus soluta quibusdam nostrum veniam minima, laboriosam numquam, quis deleniti velit id porro maxime nobis. Voluptatum, nulla.'
	},
	// Mentor Dean Nieusma
	{
		id: 'dean',
		name: 'Dean Nieusma',
		profilePic: 'url(images/developers/deanNieusma.jpg)'
	},
	{
		id: 'jim',
		name: 'Jim Malazita',
		profilePic: 'url(images/developers/jimMalazita.jpg)'
	},
	{
		id: 'branda',
		name: 'Branda Miller',
		profilePic: 'url(images/developers/brandaMiller.jpg)'
	},
	{
		id: 'ron',
		name: 'Ron Eglash',
		profilePic: 'url(images/developers/ronEglash.jpg)'
	}

]
var threads = [

	{
		id: 'doorstop',
		title: 'Studio Door stop',
		summary: 'My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets.',
		mainImg: 'url(images/projects/studio_door_stop/final.jpg)',
		org: 'Program in Design and Innovation',
		cat: 'Project: Product',
		imgs: ['url(images/projects/studio_door_stop/final.jpg)',
		'url(images/projects/studio_door_stop/usage.jpg)',
		'url(images/projects/studio_door_stop/iteration_1.jpg)'],
		imgTxt: ['Final Prototype','Its appearance and functions','The 1st iteration. It mimics two screws and holes. And also it is holding friendly. But my users experienced an error. Only one side of door stop works. They accidentally uses another side.'],
		info: [' Regular users of PDI studio demand a door stop in the studio. The front door of the studio has an ID lock. If regular users want to go out of the studio for a short time, they have to bring their ID or use a door stop. Wooden wedges used to be the door stops in the studio, but they have been kicked away and stolen many times, which made the regular users feel uncomfortable and frustrated when the users were locked out.','Based on the problem and needs, these are core values of my proposed PDI door stop: dual functioning, high stability and anti-pilferage. My door stop mainly focuses on the nearly-closed function, and puts open-wide function as an auxiliary. It is constituted by one ABS (Acrylonitrile butadiene styrene) plastic block and two magnets. The shape of the block mimics the strike plate of the front door, and the block also has a protruding part like a latch, which can completely insert into the door frame though the strike plate. The shape directs users to insert the block into the strike plate.','The protruding part on the back of the door stop is similar to a latch that can insert into the hollow on the strike plate. The protruding part has the correct size to produce a feeling of stuck into the hollow but without applying too much force. It makes the door stop completely fasten on the strike plate. The design of this part is to cause human sense of playing puzzles. It is an affordance that users can understand how this door stop can be used as nearly-closed function. In addition, because of the specific size of protruding “latch”, this door stop cannot be used on any other strike plate on campus. It further prevents people from taking it away to use on other doors.'],
		link: 'https://drive.google.com/open?id=0B32gQGnV1_U-UVdaT0tockxDQUk',
		team: ['lei'],
		mentor: ['dean']
	},
	{
		id: 'pdicaliper',
		title: 'The PDI Caliper',
		summary: 'The Key Caliper is designed to provide a functional measure device that is compact and easily carriable. The Key Caliper holds the qualities of both a precise caliper and the convenience of a swiss army knife.',
		mainImg: 'url(images/projects/pdi_caliper/caliper_main.png)',
		org: 'Program in Design and Innovation',
		cat: 'Project: Product',
		imgs: [
			'url(images/projects/pdi_caliper/1st_iteration.png)',
			'url(images/projects/pdi_caliper/2nd_iteration.png)',
			'url(images/projects/pdi_caliper/caliper_main.png)',
			'url(images/projects/pdi_caliper/caliper_main_2.png)',
			'url(images/projects/pdi_caliper/user_testing1.png)',
			'url(images/projects/pdi_caliper/user_testing2.png)'],
			imgTxt: ['1st iteration', '2nd iteration','Final Prototype: scale side','Final Prototype: back side', 'User testing 1', 'User testing 2'],
			info: [' PDI students are a specific subset of college students who love modular products, and prioritize play to inspire creativity. This product is designed with main customer being PDI students, however can be marketed to other designers who are looking for a compact and accurate measuring design.','The Key Caliper embodies the ideas of modularity and convenience by featuring a flush, 11 inch stainless steel body that provides accurate measurements and durable long term use. The measurement engravings are highlighted to provide easily readable measurements. The measurement markings flow over to the top of the device, so that the user can use it as a straight edge. On the underside of the Key Caliper, there are ridges that add to the aesthetic look and functionality of the device.','The tool has integrated clicking feedback when the user slides the partisan, stimulating the user’s experience. The Key Caliper can be attached to keys, backpacks, or pencil cases. This design report will serve as a manufacturing materials guide. Manufacturing costs, materials, and methods will be explained and key features of the product will be described.'],
			link: '#',
			team: ['anonymous'],
			mentor:['dean']
		}

	];
	//Creates threads equal to the amount stored in the threads array and assigns them ids associated with their stored id variable


	//Add Dynamic Content (Could Have) http://www.developphp.com/video/JavaScript/Scroll-Load-Dynamic-Content-When-User-Reach-Bottom-Ajax
$(window).scroll(function (event) {
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled > 200) {
		$('.navBar').addClass('stickyNav');
	} else {
		$('.navBar').removeClass('stickyNav');

	}
});
// function openAbout() {
// 	$('.headerTxt').empty();
// 	$('.typed-cursor').remove();
// 	$('.headerTxt').addClass('aboutHead').removeClass('headerTxt');
// 	$('.navWrapper').addClass('activeAbout').animate({
// 		top: '100%',
// 		opacity: 0
// 	}), 100;
// 	$('main, footer, filterButton').css({
// 		'top': '100%',
// 		"@include": "transitions('500ms')",
// 		"opacity": 0
// 	});
// 	$('.header, .overlay').animate({
// 		height: '100vh',
// 		'background-height': '100vh'
// 	});
// 	$('.aboutContent, .returnArrow').delay(500).css('display','flex').animate({
// 			opacity: 1
// 		});
// 	var aboutHead = new Typed('.aboutHead', {
// 		strings: ["<span>About</span>"],
// 		//'We Are Creating Ties', 'Technology, Innovation, Entrepreneurship, & Sustainability'],
// 		typeSpeed: 50,
// 		backSpeed: 10,
// 		smartBackspace: true,
// 		backDelay: 800,
// 		loop: false,
// 	});
// };
// function closeAbout() {
// 	$('.aboutHead').empty();
// 	$('.typed-cursor').remove();
// 	$('.aboutHead').addClass('headerTxt').removeClass('aboutHead');
// 	$('.navWrapper').removeClass('activeAbout').animate({
// 		opacity: 1,
// 		top: ''
// 	}), 100;
// 	$('main, footer, filterButton').animate({
// 		'top': '',
// 		'opacity': 1,
// 	}), 500;
// 	$('.header, .overlay').animate({
// 		height: 200,
// 		'background-height': ''
// 	}), 500;
// 	$('.aboutContent, .returnArrow').delay(500).css('display','none').animate({
// 			opacity: 0
// 		});
// 		var headerTxt = new Typed('.headerTxt', {
// 			strings: ["<span>infinish.ed</span>"],
// 			//'We Are Creating Ties', 'Technology, Innovation, Entrepreneurship, & Sustainability'],
// 			typeSpeed: 50,
// 			backSpeed: 10,
// 			smartBackspace: true,
// 			backDelay: 800,
// 			loop: false,
// 		});
// };

//not working alert
$(".about, .login").click(function(){
	alert("Coming Soon!");
});






		// KONAMI Code!
		/*
		var kkeys = [];
		var konami = "38,38,40,40,37,39,37,39,66,65";

		$(document).keydown(function(e) {
		kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ){
		$(document).unbind('keydown',arguments.callee);

		// Add your own easter egg here!!
		$('canvas').fadeIn('fast');
	}
});
/*
$('.projectMenu li:nth-child(1)').hover(function () {
$('.aboutUs').show();} , function () {
$('.aboutUs').hide();
});

$('.organizeMenu li:nth-child(2) h2').hover(function () {
$('.ourOrganization').show();} , function () {
$('.ourOrganization').hide();
});


/* On scroll window function
$(window).on('scroll',function(){
var scrollposition = $(window).scrollTop();

var var1 =
$('body').css('background','linear-gradient(to bottom, rgb('+var1+','+var2+','+var3+'))');
});
*/
