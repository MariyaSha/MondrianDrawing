function setup()
{
	//create a large square canvas
	createCanvas(682, 768);

}

function draw()
{
	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//red rectangle 
    fill(223, 41, 37);
	rect(88, -6, 600, 600);
    
    //white rectangles
	fill(239, 239, 239);
    rect(-6, -6, 95, 250);
    rect(-6, 256, 95, 338);
    rect(89, 594, 510, 200);
    rect(600, 594, 100, 88);
    
    //yellow rectangle
    fill(241,220,111);
    rect(600, 694, 100, 100);

    //blue rectangle
    fill(2,89,156);
    rect(-6, 594, 95, 200);
}