/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var initialCats = [
                  {
                    name:'Tinku',
                    imgSrc:'img/one.jpg',
                    levelCat:'infant',
                    clickCount:0,
                    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
                    nickNames:['tinkii']
                  },
                   {
                    name:"Pinku",
                    imgSrc:'img/two.jpg',
                     levelCat:'infant',
                    clickCount:0,
                    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
                    nickNames:['pipi']
                  },
                   {
                    name:"Rinku",
                    imgSrc:'img/three.jpg',
                     levelCat:'infant',
                    clickCount:0,
                     imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
                     nickNames:['kitkat']
                
                  },
                   {
                    name:"Kitty",
                    imgSrc:'img/kitty.jpg',
                     levelCat:'infant',
                    clickCount:0,
                    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
                     nickNames:['Mr.Kittty','kitkit','kittuu','kitkittt']
                   
                  },
                   {
                    name:"Nini",
                    imgSrc:'img/cat.jpg',
                     levelCat:'infant',
                    clickCount:0,
                    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
                    nickNames:['ninnuu']
                  }
              ];
              
var Cat = function(data){
     this.clickCount = ko.observable(data.clickCount);
     this.levelCat = ko.observable(data.levelCat);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
   this.nickNames=ko.observableArray(data.nickNames);
    this.findLevel= function(){
         
        if(this.clickCount()>=10)
        {
           this.levelCat('young'); 
        }
        if(this.clickCount()>=20){
            this.levelCat('grown');
        }
        if(this.clickCount()>=30){
            this.levelCat('adult');
        }
        
    };
};

var ViewModel= function(){
    var self=this;
    this.catList = ko.observableArray();
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });
    this.currentCat= ko.observable();
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
      self.currentCat().findLevel();
    };
   this.setCurrentCat = function(){
       //window.alert(this.name());
      // var clickedCat=this.name();
     //  self.catList().forEach(function(cat){
         //  window.alert(cat.name());
          //  if(clickedCat===cat.name()){
               window.alert("you clicked "+this.name());
                 self.currentCat(this);
          //  }
       // });
               
           
       
     
   };
    
    
};
ko.applyBindings(new ViewModel());
