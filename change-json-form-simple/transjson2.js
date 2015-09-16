var fs = require("fs");
var json = require("./GCD_11_751_770.json");

var kick_null_object = function(json){
	var newjson = [];
	for ( i = 0; i < json.length; i++ ){
		if ( json[i].Entry !== "" || json[i]["Tibetan Defination"] !== "" || json[i].中文解釋 !== "" ) newjson.push(json[i]);
	}
	return newjson;
}

var transjson = function(json){
	var newjson = [], entry_obj = {};
	var tdefinition = [], cdefinition = [], abbr1 = [], abbr2 = [], abbr3 = [], syn1 = [], syn2 = [], syn3 = [];
	for ( i = 0; i < json.length; i++ ){
		if ( !entry_obj["page"] ) entry_obj["page"] = json[i].Page;
		if ( !entry_obj["entry"] ) entry_obj["entry"] = json[i].Entry;
		tdefinition.push(json[i]["Tibetan Defination"]);
		cdefinition.push(json[i].中文解釋);
		abbr1.push(json[i].略語1);
		abbr2.push(json[i].略語2);
		abbr3.push(json[i].略語3);
		syn1.push(json[i].同義詞1);
		syn2.push(json[i].同義詞2);
		syn3.push(json[i].同義詞3);
		entry_obj["note"] = json[i].注記;
		if ( ( json[i+1] && json[i+1].Entry !== "" ) || !json[i+1] ){
			entry_obj["tdefinition"] = tdefinition; entry_obj["cdefinition"] = cdefinition;
			entry_obj["abbr1"] = abbr1; entry_obj["abbr2"] = abbr2; entry_obj["abbr3"] = abbr3;
			entry_obj["syn1"] = syn1; entry_obj["syn2"] = syn2; entry_obj["syn3"] =syn3;
			newjson.push(entry_obj); 
			entry_obj = {}; tdefinition = []; cdefinition = []; abbr1 = []; abbr2 = []; abbr3 = []; syn1 = []; syn2 = []; syn3 = [];	
		} 
	}
	return newjson;
}

var out = kick_null_object(json);
var output = transjson(out);
fs.writeFileSync("./output.json",JSON.stringify(output,"","  "),"utf8");