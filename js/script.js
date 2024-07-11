// ---------Responsive-navbar-active-animation-----------
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
// hero type function
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed', {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(', '),
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        cursorChar: '|',
        contentType: 'html'
    });
});

//------projects------//

jQuery(document).ready(function($) {
    "use strict";
    // TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});


 //-----download resume------//
 function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    window.location.href = 'cv/Cassandra.pdf.pdf';
}
AOS.init({
    duration: 1000, // Animation duration
    once: true // Animation only happens once
});
//-------hero secrion------//
document.addEventListener('DOMContentLoaded', function() {
    const rolledElement = document.querySelector('.rolled');
    const items = ["UI/UX", "Front-end Developer", "Student"];
    let html = '';
    items.forEach(item => {
      html += `<span>${item}</span>`;
    });
    rolledElement.innerHTML = html;
  });

//----services------//

$.validator.addMethod("mailcheck", function (a) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a);
});
$("#form_val").validate({
	rules: {
		email: {
			required: true,
			mailcheck: true
		},
		name: {
			required: true
		},
		subject: {
			required: true
		},
		message: {
			required: true
		}
	},
	messages: {
		email: {
			required: "Please enter a email address",
			email: "Please enter a valid email address"
		},
		name: {
			required: "Please enter your name"
		},
		subject: {
			required: "Please enter a subject",
		},
		message: {
			required: "Please enter a message"
		}
	}

});

document.querySelector('.custom-btn').addEventListener('click', function() {
    this.classList.toggle('clicked');
});
