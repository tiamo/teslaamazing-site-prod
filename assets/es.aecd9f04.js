import{e as _,f as l}from"./index.2682049a.js";import{m as c}from"./moment.d3137a59.js";function h(r,s){return s.forEach(function(o){o&&typeof o!="string"&&!Array.isArray(o)&&Object.keys(o).forEach(function(e){if(e!=="default"&&!(e in r)){var t=Object.getOwnPropertyDescriptor(o,e);Object.defineProperty(r,e,t.get?t:{enumerable:!0,get:function(){return o[e]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}};(function(r,s){(function(o,e){e(typeof _=="function"?c.exports:o.moment)})(l,function(o){//! moment.js locale configuration
var e="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),n=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,u=o.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return a?/-MMM-/.test(d)?t[a.month()]:e[a.month()]:e},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(this.hours()!==1?"s":"")+"] LT"},nextDay:function(){return"[ma\xF1ana a la"+(this.hours()!==1?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(this.hours()!==1?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(this.hours()!==1?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(this.hours()!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:1,doy:4},invalidDate:"Fecha inv\xE1lida"});return u})})();var f=m.exports,y=h({__proto__:null,default:f},[m.exports]);export{y as e};
