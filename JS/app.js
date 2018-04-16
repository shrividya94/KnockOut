/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ViewModel= function(){
    this.clickCount=ko.observable(0);
    this.name=ko.observable('kitty');
    this.imgSrc=ko.observable('kitty.jpg');
    this.imgAttribution=ko.observable('http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg');
    
    this.incrementCounter=function(){};
};
ko.applyBindings(new ViewModel());
