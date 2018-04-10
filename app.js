var selectable_app = new Vue({
el: "#selectable-box",
data: {
	selectableItems: {
		0:"Archie",
		1:"Veronica",
		2:"Betty",
		3:"Jughead",
		4:"Cheryl"
	},
	selectedItems: [false,false,false,false,false],
	isSelecting:false,
	bzStartX: 0,
	bzStartY: 0,
	bzLeftX: 0,
	bzTopY: 0,
	bzWidthX: 0,
	bzHeightY: 0
},
methods:{
    onSelecting(event) {
		this.bzStartX = event.clientX;
		this.bzStartY = event.clientY;

		this.bzLeftX = event.clientX;
		this.bzTopY = event.clientY;

		this.selectedItems = [false,false,false,false,false];
		this.isSelecting = true;

    },
    outSelecting(event) {
   		this.getPosition();
		this.isSelecting = false;
		this.bzWidthX = 0;
		this.bzHeightY = 0;	


    },
    mouseMove(event) {
		if (this.isSelecting) { 

			this.bzWidthX = event.clientX - this.bzStartX;
			this.bzHeightY = event.clientY - this.bzStartY;

			if (event.clientY < this.bzStartY) {
				this.bzHeightY = Math.abs( event.clientY - this.bzStartY );			
				this.bzTopY = event.clientY ;				
			}
			if (event.clientX < this.bzStartX) {
				this.bzWidthX = Math.abs( event.clientX - this.bzStartX );
				this.bzLeftX = event.clientX ;
			}
		}

    },
    getPosition(){
		var div = document.getElementsByClassName("bzBlock");
    	for (var i = 0; i < div.length; i++) {
	    	if ( 
	    		(this.bzLeftX + this.bzWidthX) > div[i].offsetLeft && 
	    		(this.bzTopY + this.bzHeightY) > div[i].offsetTop  &&
	    		(this.bzTopY) < (div[i].offsetTop + div[i].offsetHeight) &&
				(this.bzLeftX) < (div[i].offsetLeft + div[i].offsetWidth)
	    	) {
	    		this.selectedItems[i] = true;
	    	}
    	}
    	console.log(this.selectedItems);
    },
    clickSelecting(event) {

    }

}

}) 
