import{e as m,f as u}from"./index.2682049a.js";import{m as M}from"./moment.d3137a59.js";function l(n,o){return o.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(e){if(e!=="default"&&!(e in n)){var a=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:function(){return t[e]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(n,o){(function(t,e){e(typeof m=="function"?M.exports:t.moment)})(u,function(t){//! moment.js locale configuration
function e(r,_,i,p){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[r+" Tage",r+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[r+" Monate",r+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[r+" Jahre",r+" Jahren"]};return _?s[i][0]:s[i][1]}var a=t.defineLocale("de",{months:"Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:e,mm:"%d Minuten",h:e,hh:"%d Stunden",d:e,dd:e,w:e,ww:"%d Wochen",M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})})();var c=d.exports,g=l({__proto__:null,default:c},[d.exports]);export{g as d};
