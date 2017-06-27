$(function() {
  /*var slider = $('.the-slider').unslider({
    autoplay:true,
    nav:false,
    arrows:false,
    delay:8000
  });*/
  myGallery = new mbBgndGallery({
  	containment:"body", // or "#myGalleryElement"
  	timer:4000,
  	effTimer:2000,
  	grayScale:false,
    autoStart:true,
    activateKeyboard:false,
  	// If your server allow directory listing
  	//folderPath:"elements/",
  	// else:
  	images:[
  	 "/images/1.gif",
  	 "/images/2.gif"
  	 ]
   });

});
