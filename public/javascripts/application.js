function getDocument(url) {
	const templateXHR = new XMLHttpRequest();
	templateXHR.responseType = "document";
	templateXHR.addEventListener("load", function () { pushDoc(templateXHR.responseXML); }, false);
	templateXHR.open("GET", url, true);
	templateXHR.send();
	return templateXHR;
}

function pushDoc(document) {
	navigationDocument.pushDocument(document);
}

App.onLaunch = () => {
	const templateURL = 'http://localhost:3000/home';
	getDocument(templateURL);
}

App.onExit = () => {
	console.log('App finished');
}