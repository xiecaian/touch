;var myTouchEvent = (function(doc){

    var TouchEvent = function(elem){
         this.elem = elem;
         
    }
    TouchEvent.prototype = {
         tap: function(callBack){
            var sTime,
                eTime,
                
                fn = function(e){
                    var eType = e.type;
                    switch(eType){
                        case 'touchstart':
                            sTime = new Date().getTime();
                            break;
                        case 'touchend':
                            eTime = new Date().getTime();

                            if((eTime - sTime) < 500){
                                callBack.call(this,e);
                            }
                            break;
                        default:
                            break;
                    }
                    sTime = new Date().getTime();

            };            
             this.elem.addEventListener('touchstart',fn,false);
             this.elem.addEventListener('touchend',fn,false);
         },

         /**长按着不动 */
         longTag : function(callBack){
            var t = null,
                t1 = null,
                lastCord = null;
               
                fn = function(e){
                var eType = e.type;
                    switch(eType){
                        case 'touchstart':
                            clearTimeout(t1);
                            t1 = null;
                            t = setTimeout(function(){
                                callBack();
                            },500);
                            break;
                        case 'touchmove':
                            if('lastCord;')
                        console.log(e.changedTouches[0].clientX);
                            clearTimeout(t);
                            t = null;
                           
                            if(Math.abs(lastCord - e.changedTouches[0].clientX)>0.1)
                            {
                                lastCord = e.changedTouches[0].clientX;
                                clearTimeout(t1);
                                t1 = null;
                            }
                            else
                            {
                                t1 = setTimeout(function(){
                                    console.log('changcaddad结束');
                                },1000);
                            }
                            break;
                        case 'touchend':
                            clearTimeout(t);
                            t = null;
                            clearTimeout(t1);
                            t1 = null;
                            break;
                        default:
                            break;
                    }
            };
            this.elem.addEventListener('touchstart',fn,false);
            this.elem.addEventListener('touchmove',fn,false);
            this.elem.addEventListener('touchend',fn,false);
            
         },

         /**左划 */
         leftMove : function(callBack){
            var lastCord,
                fn = function(e){
                
                switch(e.type){
                    case 'touchstart':

                        lastCord = e.changedTouches[0].clientX;
                        break;
                    case 'touchmove':
                    if(e.changedTouches[0].clientX < lastCord)
                    {
                        /* 左移*/
                        callBack();
                    }
                    else
                    {
                        lastCord = e.changedTouches[0].clientX;
                    }
                    break;
                    case 'touchend':
                        lastCord = null;
                        break;
                }
               
                //console.log(e.changedTouches.Touch.clientY);
            };
            this.elem.addEventListener('touchstart',fn,false);
            this.elem.addEventListener('touchmove',fn,false); 
            this.elem.addEventListener('touchend',fn,false);   
            
         }
 
    };
    console.log(TouchEvent);
    //TouchEvent.tap();
    //TouchEvent.hhh();
    
    return TouchEvent;
 })(document);
 console.log(myTouchEvent);
 var Odiv = document.getElementsByTagName('div')[0];
 /*
  new myTouchEvent(Odiv).tap(function(){
      console.log('HHDADAS');
  });*/

  new myTouchEvent(Odiv).longTag(function(){
    console.log('长按');
});
 /*
new myTouchEvent(Odiv).leftMove(function(){
    console.log('左划');
});*/
 