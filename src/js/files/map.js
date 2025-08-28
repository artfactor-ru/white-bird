export function initYandexMap(mapContainer) {
	ymaps.ready(function () {
		const lat = parseFloat(mapContainer.dataset.lat);
		const lng = parseFloat(mapContainer.dataset.lng);

		var myMap = new ymaps.Map(mapContainer, {
			center: [lat, lng],
			zoom: 18,
			controls: ["zoomControl"],
		});

		let myPlacemark = new ymaps.Placemark(
			[lat, lng],
			{},
			{
				hasBalloon: false,
				hideIconOnBalloonOpen: false,
				iconLayout: "default#imageWithContent",
				iconImageHref: "img/icons/map.svg",
				iconImageSize: [40, 40],
				iconImageOffset: [-20, -40],
			}
		);

		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable("scrollZoom");
		myMap.behaviors.disable("drag");

		myMap.events.add("click", function () {
			myMap.behaviors.enable("drag");
			myMap.behaviors.enable("scrollZoom");
		});
	});
}
