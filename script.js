function generateCat(){
    var image=document.createElement('img'); //creates an image element(where the actual image would go into, like the element is the created space and the cat image/gif will the value put into that created space)
    var div=document.getElementById('flex-box-cat');//gets access to the flex-box div through the id of the flex-box div
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);//adds the image as a child to the flex-box div

}