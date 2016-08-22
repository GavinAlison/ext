/**
 * Created by AVICINFO on 2016/7/14.
 */
/**
 * 当前文件为日期的格式化
 * 输入  new Date().format('yyyy-MM-dd')
 * 输出  2016-07-14
 */
// var myDate = new Date();
// myDate.getYear();        //获取当前年份(2位)  有三位情况 比如2016 --.116
// myDate.getFullYear();    //获取完整的年份(4位,1970-????)
// myDate.getMonth();       //获取当前月份(0-11,0代表1月)
// myDate.getDate();        //获取当前日(1-31)
// myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
// myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
// myDate.getHours();       //获取当前小时数(0-23)
// myDate.getMinutes();     //获取当前分钟数(0-59)
// myDate.getSeconds();     //获取当前秒数(0-59)
// myDate.getMilliseconds();    //获取当前毫秒数(0-999)
// myDate.toLocaleDateString();     //获取当前日期
// myDate.toLocaleTimeString();     //获取当前时间
// myDate.toLocaleString( );        //获取日期与时间
Date.prototype.format = function(formatStr){

    var str = formatStr;
    var week = ['日','一','二','三','四','五','六'];

    str=str.replace(/yyyy|YYYY/,this.getFullYear());
    str=str.replace(/yy|YY/,(this.getYear()%100)>9?(this.getYear()%100):'0'+(this.getYear()%100));

    str=str.replace(/MM/,this.getMonth()>9?(this.getMonth()+1):'0'+this.getMonth());
    str=str.replace(/M/g,this.getMonth());

    str=str.replace(/w|W/g,week[this.getDay()]);

    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate():'0'+this.getDate());
    str=str.replace(/d|D/g,tis.getDate());

    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours():'0'+this.getHours());
    str=str.replace(/h|H/g,this.getHours());

    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes():'0'+this.getMinutes());
    str=str.replace(/m/g,this.getMinutes());

    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds():'0'+this.getSecond());
    str=str.replace(/s|S/g,this.getseconds());

    return str;
}