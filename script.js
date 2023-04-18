let evCarCompanyCollection = [
	{
		"companyName": "Tesla",
		"startYear": "2003",
		"headquarter": "Austin, TX",
		"logo": "images/Tesla.png"
	},
	{
		"companyName": "Rivian",
		"startYear": "2009",
		"headquarter": "Irvine, CA",
		"logo": "images/Rivian.png"
	},
	{
		"companyName": "Polestar",
		"startYear": "1996",
		"headquarter": "Gothenburg, Sweden",
		"logo": "images/Polestar.png"
	},
	{
		"companyName": "Lucid Motors",
		"startYear": "2007",
		"headquarter": "Newark, CA",
		"logo": "images/Lucid.png"
	}
];

function mainDisplay() {
	let mainSection = document.getElementById('mainSection');

	let counter = 0; 

	for(let brand of evCarCompanyCollection) {
		let brandSection = document.createElement('div');
		if(counter % 2 == 0){
			brandSection.setAttribute('data-aos', 'fade-up-right');
		} else {
			brandSection.setAttribute('data-aos', 'fade-up-left');
		}
		counter += 1; 
		brandSection.setAttribute('data-aos-duration', '2000');
		brandSection.className = 'brandSection'; 

		let brandLogo = document.createElement('img');
		brandLogo.className = 'brandLogo';
		brandLogo.src = brand.logo;
	    brandSection.appendChild(brandLogo);

	    let brandName = document.createElement('h1');
		brandName.textContent = brand.companyName;
	    brandSection.appendChild(brandName);

	    let brandStartYear = document.createElement('h2');
		brandStartYear.textContent = "Founded Year: " + brand.startYear;
	    brandSection.appendChild(brandStartYear);

	    let brandHQ = document.createElement('h2');
		brandHQ.textContent = "Headquarters: " + brand.headquarter;
	    brandSection.appendChild(brandHQ);

		mainSection.appendChild(brandSection);
	}
}

mainDisplay(); 
AOS.init();