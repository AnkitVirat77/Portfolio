function changenavbar(){
	var navbar = document.getElementByTagName('navbar');
	var scrollValue = window.scrollY;
	if(scrollValue<150){
		number.classList.remove('navbarColor')

	}
	else{
		navbar.classList.add('navbarColor')
	}

}
window.addEventListener('scroll',changenavbar );
// var typed = new Typed(".auto-type",{
// 		strings: ["Web Developer","Frontend Developer","Freelancer","lifelong Learner"],
// 		typeSpeed:50,
// 		backSpeed:50,
// 		loop:true
// 	})