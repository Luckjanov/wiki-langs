String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var block = document.getElementById("p-lang");
var links = block.getElementsByTagName('a');
var links_size = links.length;

chrome.extension.sendRequest({command: "get_langs"}, function(response){
	var langs = response.langs_on_page;
	var langs_size = langs.length;
	for(var i = 0; i < links_size; i++)
	{
		for(var j = 0; j < langs_size; j++)
			if(links[i].lang != langs[j] && j+1 == langs_size)
			{
				links[i].parentNode.parentNode.removeChild(links[i].parentNode);
				i--;
			}
			else if(links[i].lang == langs[j])
			{
				links[i].innerHTML = links[i].innerHTML.capitalize();
				break;
			}
	}
});