var selectable_app = new Vue({
el: "#selectable-box",
data: {
	selectableItems: ["Archie","Veronica","Betty","Jughead","Cheryl"],
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
		console.log(event.clientX); // x coordinate
		console.log(event.clientY); // y coordinate

		this.bzStartX = event.clientX;
		this.bzStartY = event.clientY;

		this.bzLeftX = event.clientX;
		this.bzTopY = event.clientY;

		this.isSelecting = true;

    },
    outSelecting(event) {
        // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
		console.log(event.clientX); // x coordinate
		console.log(event.clientY); // y coordinate
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
    clickSelecting(event) {

    }

}

}) 
