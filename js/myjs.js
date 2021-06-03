var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

function showBarItems(){
	var x = document.getElementById("barItems");
	if (x.className.indexOf("w3-show") == -1)
		x.className += " w3-show";
	else
		x.className = x.className.replace(" w3-show", "");

}

function showProducts(){
	var x = document.getElementById("products");
	if (x.className.indexOf("w3-show") == -1)
		x.className += " w3-show";
	else
		x.className = x.className.replace(" w3-show", "");
}

function openCategory(event, category){
	var i, categories, tablinks;
	// categories = document.getElementsByClassName("category");
	// for (var i = 0; i < categories.length; i++) {
	// 	categories[i].style.display = 'none';
	// }

	tablinks = document.getElementsByClassName("tablink");
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}

	// document.getElementById(category).style.display = 'block';
	event.currentTarget.className += " w3-red";
}

function showModal(argument) {
	var idModal = document.getElementById(argument);
	idModal.style.display = "block";
	// body...
}

function hideModel(argument){
	var idModal = document.getElementById(argument);
	idModal.style.display = "none";
}


function showDivs(n, SubSlides, currentDiv) {
	var i;
	slideIndex=n;
	var x = document.getElementsByClassName(SubSlides);
	var dots = document.getElementsByClassName(currentDiv);
	if (n > x.length) {slideIndex = 1};
	if (n < 1) {slideIndex = x.length}{
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
		}
		x[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " w3-opacity-off";
	}
}

function setTopPosition(){
	var item = document.getElementById('sanpham');
	item.className += " w3-myfixed";
}