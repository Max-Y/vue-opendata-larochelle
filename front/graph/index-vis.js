
var fs = require("fs");
var md5 = require('js-md5');

module.exports = function() {

}


function addNode(data, id, label, size, color){
		unique = true;
		node =  {id: md5(id), label: label, color: color, shape: 'box', font : {"size": 10} };

		for (var i in data.nodes){
		    if (data.nodes[i].id == md5(id)){
				unique = false;
				break;
			}
		}

		if (unique)
			data.nodes.push(node);

}

function addEdge(data, source, target){
		edge = { from: md5(source), to: md5(target) };
		data.edges.push(edge);
}

function transformeTo(input) {

	idEdge = 0;
	data = { "nodes": [], "edges": [] };


	for (p in input.aggregations){
		buckets1 = input.aggregations[p].buckets
	}
	
	for (buck in buckets1){
		
		source = input.aggregations[p].buckets[buck].key;
		addNode((data), source, source, 10, "#6E6EFD");

		for (bucky in input.aggregations[p].buckets[buck]){

			if(typeof input.aggregations[p].buckets[buck][bucky].buckets !== "undefined"){
				//console.log(input.aggregations[p].buckets[buck][bucky].buckets);
				countries = input.aggregations[p].buckets[buck][bucky].buckets;
				for (var i in countries) {
					addNode((data), countries[i].key, countries[i].key, 5, "#97C2FC");
					addEdge(data, source, countries[i].key);
  					//console.log(countries[i].key);
				}
			}

		}

	}

    return data;              // The function returns the product of p1 and p2
}


// ######################################################################################

console.log("start ...");
var contents = fs.readFileSync("./data/test.json");
var jsonContent = JSON.parse(contents);


console.log(JSON.stringify(transformeTo(jsonContent)));


