function getLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve(console.log(`Широта: ${position.coords.latitude} \n Долгота: ${position.coords.longitude}`));
			},
			(err) => {
				reject(console.log(err.message));
			}
		);
	});
}
getLocation();

