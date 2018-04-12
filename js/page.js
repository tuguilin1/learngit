
function Page(){
	var index = 3;
	this.index = index;
	this.totalNumber = 0;
	this.nowPage = 0;
}


Page.prototype.init = function(num){
	this.totalNumber = Math.floor(num/this.index);
	this.left = num % this.index
}

Page.prototype.next = function(id){
	if(this.nowPage === this.totalNumber){
		return null;
	}else{
		this.nowPage = this.nowPage + 1;
	}
	var top = "-"+this.nowPage * 15+"rem";
	$(id).css("margin-top",top)
}

Page.prototype.pre = function(id){
	if(this.nowPage === 0){
		return null;
	}else{
		this.nowPage = this.nowPage - 1;
	}
	var top = "-"+this.nowPage * 15+"rem";
	$(id).css("margin-top",top)
}

Page.prototype.frist = function(id){
	this.nowPage = 0;
	$(id).css("margin-top","0px")
}

Page.prototype.last = function(id){
	this.nowPage = this.totalNumber
	var top = "-"+this.totalNumber*15+"rem"
	$(id).css("margin-top",top)
}

var page = new Page();

page.init(7);

$(".new-activity").on("click",function(e){
	if(e.target.className == "new-title"){
		window.location.href="./new.html?"+e.target.innerHTML
	}
})