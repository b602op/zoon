const dots = Array.prototype.slice.call(document.querySelectorAll('.show_more'));
const area = document.querySelector('.container');


const toogleCompantActivated = Array.prototype.slice.call(document.querySelectorAll('.button__offoron'));


const divCompanyGoogle = document.querySelector('.company_google');
const divCompanyFlado = document.querySelector('.company_flado');
const divCompany2Gis = document.querySelector('.company_two-gis');
const divCompanyYell = document.querySelector('.company_yell');

area.addEventListener("click", function(e){
	var showMoreElement = e.target.closest('.show_more');	
	dots.forEach(function(element){
		if (element.classList.value.match("hidden")) return
		element.classList.add("hidden");
	})
	if (!showMoreElement) return
	showMoreElement.classList.remove("hidden");
});

toogleCompantActivated.forEach(function(element){
	element.addEventListener("click", function(e){
		let attributeCompany = e.target.getAttribute("company");

		if (e.target.innerHTML.match("Выключить")) { 
			e.target.innerHTML = "Включить";
		} else {
			e.target.innerHTML = "Выключить";
		}

		toogleCompanyActivatedGo(attributeCompany);
		return
	});
})

function toogleCompanyActivatedGo(companyName) {
		if (companyName == "Google") {
			divCompanyGoogle.classList.toggle("activated");
			return
		}
		if (companyName == "Flado") {
			divCompanyFlado.classList.toggle("activated");
			return
		}
		if (companyName == "2Gis") {
			divCompany2Gis.classList.toggle("activated");
			return
		}
		if (companyName == "Yell") {
			divCompanyYell.classList.toggle("activated");
			return
		}
}