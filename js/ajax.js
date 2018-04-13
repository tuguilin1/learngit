
var data = ""
function ajax(){
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://127.0.0.1:3000/goods');
	xhr.send();
	xhr.addEventListener("load",function(){
		data = JSON.parse(xhr.responseText);
		console.log(data[1]);
		var newNode;
		var fragment = document.createDocumentFragment();
		var i,j = data.length
		for(i = 0;i<j;i++){
			newNode = document.createElement("li");
			newNode.innerHTML = "<div class='new-date'><p class='year'>"+data[i]["date"]+"</p></div><div class='new-content'><div class='new-title'>"+data[i]['Name']+"</div><div class='new-text'>"+data[i]['Content'].split(";").join("<br/>")+"</div></div>";
			fragment.appendChild(newNode);
		};
		$(".activities").append(fragment)	
	})
}

ajax()