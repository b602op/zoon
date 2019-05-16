const dots = Array.prototype.slice.call(document.querySelectorAll('.show_more'));
const area = document.querySelector('.container');

area.addEventListener("click", function(e){
	var showMoreElement = e.target.closest('.show_more');	
	dots.forEach(function(element){
		if (element.classList.value.match("hidden")) return
		element.classList.add("hidden");
	})
	if (!showMoreElement) return
	console.log(showMoreElement.classList)
	showMoreElement.classList.remove("hidden");
});