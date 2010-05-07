
function loadGoogleAnalytics() {
	try {
		var pageTracker = _gat._getTracker("UA-9187503-1");
		pageTracker._trackPageview();
	} catch(err) {}
}

if(document.addEventListener)
	document.addEventListener('load', loadGoogleAnalytics, true);
else if(document.body.attachEvent)
	document.body.attachEvent('onload',loadGoogleAnalytics); 

