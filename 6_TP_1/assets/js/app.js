(function IIFE(){
    var pageModules;    
    window.onload = function init(){
        function getPageModules(){ 
            return pageModules = document.body.getElementsByTagName("*");
        }
        getPageModules();
        //console.log(init());
        var tmpBg, tmpCol, tmpId;
        function styliserModule(num, color, bg){
            tmpCol = pageModules[num].style.color = color;
            tmpBg = pageModules[num].style.backgroundColor = bg;
            var id
            if(pageModules[num].id){
                tmpId = " #"+ pageModules[num].id;
            }
            else{
                tmpId = pageModules[num].id;
            }
            return pageModules[num].localName +tmpId +" {"+"color: "+tmpCol+"; background-color: "+tmpBg+"}"; 
        }
        console.log(styliserModule(35, "white", "mediumSlateBlue"));
        function getModuleInfos(num){
            var dim = pageModules[num].getBoundingClientRect();
            /*var dimInfo = { 
                top: Math.round(dim.top),
                right: dim.right,
                bottom: dim.bottom,
                left: dim.left
            };*/
            /*function blah(){
                    for(var i = 0;i<8;i++){
                        dim[i] = Math.round(dim[i]);
                    }
                    return dime;
                }
            blah();*/
            var moduleInfo = {
                id: pageModules[num].id,
                tagName: pageModules[num].tagName,
                className: pageModules[num].className,
                dimension: dim,
                /*size: dime*/
            };
            return moduleInfo;
        }
        console.log(getModuleInfos(35));
        return pageModules;
    }
    return pageModules;
})();
//moduleInfo: make a function that return an object with the rounded values of module dimension (in px)