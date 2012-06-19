chrome.extension.sendRequest({command: "get_langs"}, function(response){
	var langs = response.langs_on_page;
	var langs_size = langs.length;
	alert(langs[0]);
	alert(langs[1]);
	var block = document.getElementById('p-lang');
	alert(block);
	for(var j = 0; j < langs_size; j++)
	{
		
	}
});