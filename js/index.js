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

	$(".entries").html("");
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

		var s = "<li class=\"entry\">";
		s += "<img class=\"static\" src=\"assets/images/thumbnails/" + entry.image + ".png\" alt=\"" + entry.title + " - thumbnail\" width=\"100%\" height=\"100%\"/>";
		s += "<img class=\"staticOverlay\" src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2A8AAMUAwUPJ2C4AAAAASUVORK5CYII=\" width=\"100%\" height=\"100%\"/>";

		s += "<img class=\"animated\" src=\"assets/images/thumbnails/" + entry.image + ".gif\" alt=\"" + entry.title + " - thumbnail\" width=\"100%\" height=\"100%\"/>";
		s += "<span>" + entry.tagline + "</span>";
		s += "<h3>" + entry.title + "</h3>";
		s += "<h4>" + entry.association + "<br>" + entry.date + "</h4>";
		s += "<p>" + entry.description + "</p>";
		s += "<h4>tags: " + getTags(entry.tags) + "</h4>";
		s += "<div class=\"links\">";
		for(l in entry.links){
			var link = entry.links[l];
			s += "<a target=\"_blank\" href=\"" + link[1] + "\" class=\"icon "+link[0]+"mark\"";
			if(link[1] == ""){
				s+= "style='visibility:hidden;'"
			}
			s += "></a>";	
		}
		s += "<a target=\"_blank\" href=\"" + entry.gitsource + "\" class=\"icon gitmark\"";
		if(!entry.gitsource || entry.gitsource == ""){
			s+= "style='visibility:hidden;'"
		}
		s += "></a>";
		s += "</div>";
		s += "<hr>";
		s += "</li>";
		$(".entries").append(s);
	}
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