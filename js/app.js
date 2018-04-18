/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Cat = function(){
     this.clickCount = ko.observable(0);
     this.levelCat = ko.observable('infant');
    this.name = ko.observable('kitty');
    this.imgSrc = ko.observable('img/kitty.jpg');
    this.imgAttribution = ko.observable('http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg');
   this.nickNames=['Mr.Kittty','kitkit','kittuu','kitkittt'];
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
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter= function() {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
      self.currentCat().findLevel();
    };
   
    
    
};
ko.applyBindings(new ViewModel());
