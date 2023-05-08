{
"translatorID":"76a79119-3a32-453a-a0a9-c92640e3c93b",
"translatorType":2,
"label":"Zotero to Obsidian",
"creator":"Vasco Berl, Scott Campbell, Avram Lyon",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"lastUpdated":"2023-05-08 11:30:00"
}

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		var author = item.creators[0].lastName;
        var year = item.date.slice(0,4);

		Zotero.write("[" + author + year + "](" );
		Zotero.write("zotero://select/items/");
		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write(library_id+"_"+item.key);
		Zotero.write(")");
	}
}
