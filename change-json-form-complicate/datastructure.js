var obj=
[{   
	page:"12",
	term:"apple",
	tdefinition:
		[{tdefinition:"fruit",
		  cdefinition:
			[{cdefinition:"fruit1",abbreviation:{abbr1:"f1",abbr2:"f2",abbr3:"f3"},synonym:{syn1:"t1",syn2:"t2",syn3:"t3"}},
		 	 {cdefinition:"fruit2",abbreviation:{abbr1:"f4",abbr2:"f5",abbr3:"f6"},synonym:{syn1:"t4",syn2:"t5",syn3:"t6"}}
			]},
		 {tdefinition:"red",
		  cdefinition:
			[{cdefinition:"red1",abbreviation:{abbr1:"r1",abbr2:"r2",abbr3:"r3"},synonym:{syn1:"d1",syn2:"d2",syn3:"d3"}},
		 	 {cdefinition:"red2",abbreviation:{abbr1:"r4",abbr2:"r5",abbr3:"r6"},synonym:{syn1:"d4",syn2:"d5",syn3:"d6"}}
		 	]}
		]
}]
console.log(obj);

arr.constructor==Array

var obj2=
[{   
	page:"12",
	term:"apple",
	tdefinition:
		[{tdef:"fruit",
		  cdefinition:
			[{cdef:"fruit1",abbreviation:["f1","f2","f3"],synonym:["t1","t2","t3"]},
		 	 {cdef:"fruit2",abbreviation:["f4","f5","f6"],synonym:["t4","t5","t6"]}
			]},
		 {tdef:"red",
		  cdefinition:
			[{cdef:"red1",abbreviation:["r1","r2","r3"],synonym:["d1","d2","d3"]},
		 	 {cdef:"red2",abbreviation:["r4","r5","r6"],synonym:["d4","d5","d6"]}
		 	]}
		]
}]