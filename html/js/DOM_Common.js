/**
* created by admin
*/
//addLoadEvent  添加网页加载后执行的事件
"use strict"
function addLoadEvent(func){
    var oldonload = window.onload;
    if( typeof oldonload != 'function'){
         oldonload();
    } else{
         oldonload();
         func();
    }
}
//inserAfter    
//语法: parent.insertAfter(newElement, targetElement)
//在父节点parent里目标节点targetElement以后插入newElement以后插入newElement节点
function  insertAfter(newElement, targetElement){
   var  parent = targetElement.parentNode;
   if( parent.lastchild ==  targetElement){
         targetElement.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
