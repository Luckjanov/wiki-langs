if(!localStorage.languages)
{
	/*
	* Если плагин запускается впервые, то в локальное хранилище записываются языки по умолчанию.
	*/
	localStorage.languages = JSON.stringify(["en", "ru"]);
}

	/*
	* Обмен информацией между боевым и фоновым скриптами.
	*/
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse){
		if(request.command == 'get_langs')
		{
			sendResponse({langs_on_page: JSON.parse(localStorage.languages)});
		}});