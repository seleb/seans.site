document.addEventListener("DOMContentLoaded", function(event) { 
	var vars={};
	var parts = window.location.search.substring(1).split("&");

	for(var i=0; i < parts.length; ++i){
		var v = parts[i].split("=");
		if(v.length >= 2){
			vars[v[0]] = v[1];
		}
	}

	var tags = vars["tag"] && vars["tag"] !== "all";

	if(tags){
		document.getElementById("current-tag").innerHTML = vars["tag"];
	}

	var s = [];
	for(entry in db){
		entry = db[entry];

		
		// if a tag is defined, skip entries which don't have that tag
		if(tags){
			var include = false;
			var tags=entry.tags;
			for(var i=0;i<tags.length;++i){
				if(tags[i].toLowerCase() === vars["tag"].toLowerCase()){
					include = true;
					break;
				}
			}
			if(!include){
				continue;
			}
		}

		s.push(
			"<li class=\"entry\">",
			"<figure>",
			"<img class=\"static\" src=\"assets/images/thumbnails/", entry.image, ".png\" alt=\"", entry.title, " - thumbnail\" />",
			"<img class=\"animated\" src=\"assets/images/thumbnails/", entry.image, ".gif\" alt=\"", entry.title, " - animated thumbnail\" />",
			"</figure>",
			"<figcaption>", entry.tagline, "</figcaption>",
			"<h3>", entry.title, "</h3>",
			"<h4>", entry.association, "<br>", entry.date, "</h4>",
			"<p>", entry.description, "</p>",
			"<h4>tags:</h4> ", getTags(entry.tags),
			"<div class=\"links\">"
		);
		for(l in entry.links){
			var link = entry.links[l];
			s.push("<a target=\"_blank\" href=\"", link[1], "\" class=\"icon ", link[0], "mark\"");
			if(link[1] == ""){
				s.push("style='visibility:hidden;'");
			}
			s.push("></a>");
		}
		s.push("<a target=\"_blank\" href=\"", entry.gitsource, "\" class=\"icon gitmark\"");
		if(!entry.gitsource || entry.gitsource == ""){
			s.push("style='visibility:hidden;'");
		}
		s.push(
			"></a>",
			"</div>",
			"</li>"
		);
	}
	document.getElementById("entries").innerHTML = s.join('');
});


function getTags(t){
	var s="";
	for(var i = 0; i < t.length; ++i){
		s+="<a href=\"browse.html?tag="+t[i]+"\">"+t[i]+"</a>";
		if(i != t.length - 1){
			s+=", ";
		}
	}
	return s;
}
