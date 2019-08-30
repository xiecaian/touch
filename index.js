;(function(doc){
    var Odiv = doc.getElementsByTagName('div')[0],
        
        Obutton = doc.getElementsByTagName('button')[0],
        Oinput = doc.getElementsByTagName('input')[0];
        console.log(Obutton);
    var init = function(){
        bindEvent();
      
    };

    var bindEvent = function(){
        /*
        doc.addEventListener('touchstart',function(e){console.log(e);},false);
        doc.addEventListener('touchmove',function(e){console.log(e);},false);
        doc.addEventListener('touchend',function(e){console.log(e);},false);
        document.addEventListener('touchcancel',function(e){console.log('jjjj');},false);//要一直touch，然后再因为alert才能导致失效（不能点击一下就放开，这样alert不会触发这个失效的现象）
        Odiv.ontouchcancel = function(){
            console.log(111);
        }*/
        console.log(Obutton);
        Odiv.addEventListener('touchstart',function(){//fierfox没有穿透，但是google有
            console.log(222);
           // Odiv.style.display = 'none';
        },false);
        Obutton.addEventListener('click',function(){console.log(11),false});
        
    };

    
    init();
})(document);