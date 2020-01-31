
var myarray = {
	"items":[


{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 1) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_1.jpg"}
	},
	{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 2)  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_2.jpg"}
	},
	{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 3)  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_3.jpg"}
  }
  
  ,
	{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 4)  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_4.jpg"}
  }
  ,
	{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 5)  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_4.jpg"}
  }
  ,
	{
		"song"  : "audio/Johnny-Drille-Shine.mp3",
		"title" : "(Track 6)  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id laboriosam veritatis",
		"image" : { "url": "./images/pic_2.jpg"}
	}




  ]
}



// console.log(myarray.items)

  var out = "";
  for(var i = 0; i < myarray.items.length; i++) {
    var boxitem = `
    <div class="box"> <img src="${myarray.items[i].image.url}" width="130" height="86" alt="Pic 1" class="left" />
            <p>${myarray.items[i].title}</p>
           
           
           <!--AUDIO CONTROL-->
           <audio onplay="playy2('play',${i+1})" onpause="playy2('pause',${i+1})" att="au${i+1}" id="audio" controls>
           <source src="${myarray.items[i].song}" type="audio/mpeg">
              Your browser does not support the audio element.
            </source>
          </audio>
          <!-- END OF AUDIO CONTROL -->
        
            

           
            <div class="btns"> <a href="javascript:void(0)" att="ah${i+1}" onclick="playy(${i+1})">Listen</a>
               <a href="${myarray.items[i].song}" download><span>Download</span></a> </div>
            <div class="clear"></div>
          </div>
          `
    // var song= items[i].song;
    // var title= items[i].title;
    // var image= item[i].image.url;
  document.getElementById("musics").innerHTML += boxitem;
  }


