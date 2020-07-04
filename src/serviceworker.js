export const registerSW = () => {
	console.log('Register service worker');

	if ('serviceWorker' in navigator) {
		console.log('Add service worker');

		window.addEventListener('load', () => {
			navigator.serviceWorker
				.register('/serviceworker.js')
				.then((registration) => {
					console.log('ServiceWorker registration successful with scope: ' + registration.scope);
				})
				.catch((err) => {
					console.log('ServiceWorker registration failed: ' + err);
				});
		});
	}
};
