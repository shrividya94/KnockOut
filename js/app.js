/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
}
var ViewModel= function(){
    var self=this;
    this.currentCat = ko.observable( new Cat({
       clickCount:0,
       levelCat:'infant',
       name:'kitty',
       imgSrc:'img/kitty.jpg',
       imgAttribution:'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
       nickNames:['Mr.Kittty','kitkit','kittuu','kitkittt']
    }) );
    this.incrementCounter= function() {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
      self.currentCat().findLevel();
    };
   
    
    
};
ko.applyBindings(new ViewModel());
