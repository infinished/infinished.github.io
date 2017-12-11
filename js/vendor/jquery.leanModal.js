// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL
(function($) {
    //extends the jquery library to create a function called leanModal and in the function creates a variable called options
    $.fn.extend({leanModal: function(options) {
            var animationSpeed = 300;

            var defaults = { top: 100, overlay: 0.5, closeButton: null};
            //creates a variable called overlay to store the html tag for the overlay
            var overlay = $("<div id='lean_overlay'></div>");
            //adds the overlay to the body everytime the modal is opened
            $("body").append(overlay);
            //extends the options variable to contain two variables?
            options = $.extend(defaults, options);
            //overlay function
            return this.each(function() {
                //creates a local variable to store the options variable(s)
                var o = options;
                //creates a function to display the overlay everytime it is clicked
                $(this).click(function(e) {
                    //Creates the modal variable and sets it equal to the href of the a tag clicked on which happens to be the id for the modal css
                    var modal_id = $(this).attr("href");
                    //enables user to click outside the modal and call the close_modal function below
                    $("#lean_overlay").click(function() {
                        close_modal(modal_id)
                    });
                    //Enables user to click on the X and call the close_modal function below
                    $(o.closeButton).click(function() {
                        close_modal(modal_id)
                    });

                    //Enables user to close escape to close the modalPopup
                    $(this).keydown(function(e) {
                        // ESCAPE key pressed
                        if (e.keyCode == 27) {
                          close_modal(modal_id)
                        }
                    });

                    //stores the outermost height and width of the modal into two variables
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();
                    //displays the overlay to mask the background but sets its opacity to 0
                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });
                    //fades the overlay in 200ms
                    $("#lean_overlay").fadeTo(200, o.overlay);
                    //displays the modal window but sets its opacity to 0 (invisible)
                    $(modal_id).css({
                        "display": "flex",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(modal_width / 2) + "px",
                        "top": o.top + "px"
                    });
                    //fades in the modal window in 200ms
                    $(modal_id).fadeTo(200, 1);
                    //prevents default action of clicking on link
                    e.preventDefault()

                    //prevents scrolling on the main page
                    $("body").css("overflow", "hidden");
                    $('.topOverlay').addClass('blur');
                    $('.top').animate({
                      top: '',
                      opacity: 1,
                    }), animationSpeed;
                    $('.summary').animate({
                      'margin-top': 70,
                      opacity: 1,
                    }), animationSpeed;
                    $('.projectDetails').animate({
                      opacity: 1,
                      'margin-top':'',
                    }), animationSpeed;
                    $('.devSide').animate({
                      opacity: 1,
                      right: 0,
                    }), 1;
                })
            });

            //function created to be called previously to close the modal window
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(300);
                $(modal_id).scrollTop(0);
                $(modal_id).fadeOut(300);
                $('.topOverlay').removeClass('blur');
                $('.devSide, .devside h1').animate({
                  opacity: 0,
                  right: -100,
                }), 100;
                $('.projectDetails').animate({
                  opacity: 0,
                  'margin-top':'200px',
                }), animationSpeed;
                $('.top').animate({
                  top: '-30vh',
                  opacity: 0,
                }), animationSpeed;
                $('.summary').animate({
                  'margin-top': -30,
                  opacity: 0,
                }), animationSpeed;
                // $('.top').animate({
                //   opacity: 0,
                //   bottom: '90vh',
                // }), 2000;
                // remove the append element of img and imgTXT and personDiv

                $(".imgDiv").fadeOut(animationSpeed);
                $(".devs").fadeOut(animationSpeed);

                // $("hr").remove();

                //remove the mentor part
                $(".mentor").fadeOut(animationSpeed);
                $(".mentor_team").fadeOut(animationSpeed);
                $(".mentor-divLine").fadeOut(animationSpeed);

                $(".prob").html("");
                $(".sol").html("");
                $(".fin").html("");

                // recover the scroll on the main
                $("body").css("overflow", "initial");
            }
        }
    })
}
)(jQuery);
