;$.extend($.fn, {
	promo: function (time,mouse) {
		var $this=$(this),map={},t;
		map.time=time,
		map.box=$this.children().first(),
		map.tab=$this.children().last();
		function autoplay(map){
			t = setTimeout(function(){
			var db = map.box.find("em"), blen = db.length, dt = map.tab.find("em");
			if(blen){
				for(var i=0;i<=blen;i++){
					if("block" == $(db[i]).css("display")){
						$(db[i]).css("display","none");
						$(dt[i]).removeClass("active");
						if(i < blen - 1){
						$(db[i]).next().css("display","block");
						$(dt[i]).next().addClass("active");
						}else{
							$(db[0]).css("display","block");
							$(dt[0]).addClass("active");
						}
						break;
					}
				}
			}
			autoplay(map);
			}.bind(this),map.time);
		}
		autoplay(map);
		//available for mouse pause / re-play
		$this.on('mouseover',function(){if(mouse){clearTimeout(t)}});
		$this.on('mouseout',function(){if(mouse){autoplay(map)}});
	}
});
