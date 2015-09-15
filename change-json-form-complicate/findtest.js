var fs = require("fs");
var json = require("./output.json");

var find_abbr = function(json){
	var findingresults=[];
	for ( i = 0; i<json.length; i++){
		for ( j = 0; j<json[i].tdefinition.length; j++){
			for ( k = 0; k<json[i].tdefinition[j].cdefinition.length; k++){
				for ( l = 0; l<json[i].tdefinition[j].cdefinition[k].abbreviation.length; l++){
					if ( json[i].tdefinition[j].cdefinition[k].abbreviation[l] === "本") findingresults.push(json[i].entry);
				}
			}			
		}		
	}
	fs.writeFileSync("./findingresults.xml",findingresults.join("\n"),"utf8");
}

find_abbr(json);