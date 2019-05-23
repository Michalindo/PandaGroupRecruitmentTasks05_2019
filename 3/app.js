(function () {
	
	let apiKey = 'y3LphO6uai60JHgfqcUDCOxtn6wJx6Xk';
	let gallery = document.querySelector(".gallery");
	let button = document.querySelector("button");

	function getData(){
		fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat&rating=PG-13`)
			.then(resp => resp.json())
			.then(resp => populateGallery(resp))
	};

	function populateGallery(resp) {  
		let title = resp.data.title;
		let source = resp.data.image_original_url;
		
		addGalleryElement(title, source);
	}

	function addGalleryElement(title, source) {  
		let galleryElementImage = document.createElement("IMG");
		
		galleryElementImage.setAttribute("src", source);
		galleryElementImage.setAttribute("alt", title);
		galleryElementImage.setAttribute("class", "gallery-element");

		gallery.appendChild(galleryElementImage);
	}

	button.addEventListener("click", function(){
		getData()
	})

})();