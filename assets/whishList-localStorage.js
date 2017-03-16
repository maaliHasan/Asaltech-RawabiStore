 
       var count=0;
       var IdValue=[];
       var ImagesSrc=[];
       var productsId=JSON.parse(localStorage.getItem('heartList'));
     //  IdValue=Object.keys(productsId);
        
      
              
        for (id in productsId){
          if (productsId.hasOwnProperty(id) ){
            IdValue.push(productsId[id]);
          }
        }
         
        var size=IdValue.length;
          for(var i=0;i<size; i++){
    
            var productid=IdValue[i];
            
            if (productid == {{product.id}}){
                
                m="{{  product.featured_image.src | img_url: 'large' }}";
                ImagesSrc.push(m);
              SaveUrl(productid,m);
             
                 
                } 
        } 
         
        
        function loadImages(imgArr){
          for(var i=0; i< imgArr.length; i++) {
        console.log(imgArr[i]);
          var img = new Image();
          
            img.src = imgArr[i];
            img.className='img';
            img.alt=imgArr[i];
            var iDiv = document.createElement("div");
            iDiv.className = 'fa fa-heart tooltip-link';
            document.getElementById("favimg").appendChild(iDiv).appendChild(img);
  
         } 
            }
        
         function SaveUrl(productid,m){
           favsUrls =JSON.parse(localStorage.getItem('favsUrls')) ||{};
           favsUrls[m]=productid;
           localStorage.setItem("favsUrls", JSON.stringify(favsUrls));
 
 
    
    
  }

    loadImages(ImagesSrc);
    