var fs = require("fs");
var json = require("./GCD_9_721_730.json");

var kick_null_object=function(json){
	var newjson=[];
	for (i=0;i<json.length;i++){
		if (json[i].Entry !== "" || json[i].TibetanDefination !== "" || json[i].中文解釋 !== "") newjson.push(json[i]);
	}
	return newjson;
}

var build_cdef_obj=function(json){
	var newjson=[];
	for (i=0;i<json.length;i++){
		var cdef_obj={}, cdef={}, abrr_arr=[], syn_arr=[];
		cdef_obj["page"]=json[i].Page; cdef_obj["entry"]=json[i].Entry; cdef_obj["tdefinition"]=json[i].TibetanDefination;
		if (json[i].中文解釋 !== "") cdef["cdef"]=json[i].中文解釋;
		if (json[i].略語1 !== "") abrr_arr.push(json[i].略語1);
		if (json[i].略語2 !== "") abrr_arr.push(json[i].略語2);
		if (json[i].略語3 !== "") abrr_arr.push(json[i].略語3);
		if (json[i].同義詞1 !== "") syn_arr.push(json[i].同義詞1);
		if (json[i].同義詞2 !== "") syn_arr.push(json[i].同義詞2);
		if (json[i].同義詞3 !== "") syn_arr.push(json[i].同義詞3);
		cdef["abbreviation"] = abrr_arr;
		cdef["synonym"] = syn_arr;
		if (json[i].注記 !== "") cdef["note"] = json[i].注記;
		cdef_obj["cdefinition"] = cdef; newjson.push(cdef_obj);
	}
	return newjson;
};

var build_tdef_obj = function(json){
	var newjson=[], tdef_obj={}, tdef={}, cdefinition=[];
	for (i=0;i<json.length;i++){
		if ( !tdef_obj["page"]) tdef_obj["page"]=json[i].page; 
		if ( !tdef_obj["entry"]) tdef_obj["entry"]=json[i].entry;
		if ( !tdef["tdef"]) tdef["tdef"]=json[i].tdefinition; 
		cdefinition.push(json[i].cdefinition);
		if ((json[i+1] && json[i+1].entry !== "") || (json[i+1] && json[i+1].tdefinition !== "") || (json[i+1] && json[i+1].cdefinition.abbreviation[0] === "增") || !json[i+1] ){
			tdef["cdefinition"] = cdefinition; tdef_obj["tdefinition"]=tdef; newjson.push(tdef_obj); cdefinition=[]; tdef={}; tdef_obj={};
		}
	}
	return newjson;
}

var build_entry_obj =function(json){
	var newjson=[]; entry_obj={}; tdefinition=[];
	for(i=0;i<json.length;i++){
		if ( !entry_obj["page"]) entry_obj["page"]=json[i].page; 
		if ( !entry_obj["entry"]) entry_obj["entry"]=json[i].entry;
		tdefinition.push(json[i].tdefinition);
		if ((json[i+1] && json[i+1].entry !== "") || !json[i+1]){
			entry_obj["tdefinition"]=tdefinition; newjson.push(entry_obj); tdefinition = []; entry_obj={};
		}
	}
	return newjson;
}

var out = kick_null_object(json);
var out2 = build_cdef_obj(out);
var out3 = build_tdef_obj(out2);
var output = build_entry_obj(out3);
fs.writeFileSync("./output.json",JSON.stringify(output,"","  "),"utf8");