js实时验证input内容变化|文本框变化监听|oninput & onpropertychange


IE下， onchange和onpropertychange不同,
onchange在属性值改变时还必须使得当前元素失去焦点(onblur)才可以激活事件；
onpropertychange是属性值改变时，IE会通过onpropertychange来即时捕获。

其他浏览器是通过oninput事件来监听的。
事件注册方法addEvent和addEventListener不同，
attachEvent，为某一个事件附加其他处理事件，不支持firefox
addEventListener，用于firefox

-----
for example
----
docuemnt.getElementById('btn').onclick=method01;
docuemnt.getElementById('btn').onclick=method02;
docuemnt.getElementById('btn').onclick=method03;
最终执行method03，其他不会执行；
************
var  el = document.getElementById('btn1');
el.attachEvent('onclick', method01);
el.attachEvent('onclick', method02);
el.attachEvent('onclick', method03);
执行顺序：method03> method02> method01
如果是firefox，不支持attachEvent(),需要用到addEventListener()
var  el = document.getElementById('btn1');
el.addEventListener('onclick', method01);
el.addEventListener('onclick', method02);
el.addEventListener('onclick', method03);
*******************
判断IE浏览器的方法：
1. 判断浏览器的功能属性；if("\v"=="v"){IE}
2. 判断user-agent字符串。

最终解决方法：
首先判断IE浏览器，其次判断相应的事件添加到对应的value值即时变化触发的事件上， onropertychange(ie), oninput(chrome,ff,opear...)


**********************
什么情况下会用到?
*********************
修改了 input:checkbox 或者 input:radio 元素的选择中状态， checked 属性发生变化。
修改了 input:text 或者 textarea 元素的值，value 属性发生变化。
修改了 select 元素的选中项，selectedIndex 属性发生变化。
在监听到 onpropertychange 事件后，可以使用 event 的 propertyName 属性来获取发生变化的属性名称。

---------------------------





