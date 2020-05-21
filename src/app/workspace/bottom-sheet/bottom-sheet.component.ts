import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  result = '<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="uk"><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){window.google={kEI:\'KS29XvGmBunHrgTZw7yABQ\',kEXPI:\'0,\n' +
    '        202123,\n' +
    '        3,\n' +
    '        4,\n' +
    '        1151617,\n' +
    '        5662,\n' +
    '        731,\n' +
    '        223,\n' +
    '        5104,\n' +
    '        207,\n' +
    '        2415,\n' +
    '        789,\n' +
    '        10,\n' +
    '        1051,\n' +
    '        175,\n' +
    '        364,\n' +
    '        926,\n' +
    '        573,\n' +
    '        576,\n' +
    '        241,\n' +
    '        383,\n' +
    '        246,\n' +
    '        5,\n' +
    '        1354,\n' +
    '        196,\n' +
    '        468,\n' +
    '        17,\n' +
    '        131,\n' +
    '        226,\n' +
    '        656,\n' +
    '        1218,\n' +
    '        405,\n' +
    '        572,\n' +
    '        126,\n' +
    '        135,\n' +
    '        161,\n' +
    '        1123455,\n' +
    '        1197792,\n' +
    '        357,\n' +
    '        78,\n' +
    '        329040,\n' +
    '        1294,\n' +
    '        12383,\n' +
    '        4855,\n' +
    '        32691,\n' +
    '        15248,\n' +
    '        867,\n' +
    '        28684,\n' +
    '        9188,\n' +
    '        8384,\n' +
    '        4859,\n' +
    '        1361,\n' +
    '        9290,\n' +
    '        3023,\n' +
    '        4745,\n' +
    '        1848,\n' +
    '        4720,\n' +
    '        4464,\n' +
    '        2,\n' +
    '        1807,\n' +
    '        4998,\n' +
    '        7931,\n' +
    '        5297,\n' +
    '        2054,\n' +
    '        920,\n' +
    '        873,\n' +
    '        1217,\n' +
    '        2975,\n' +
    '        2693,\n' +
    '        3737,\n' +
    '        11306,\n' +
    '        3222,\n' +
    '        234,\n' +
    '        4282,\n' +
    '        2778,\n' +
    '        520,\n' +
    '        399,\n' +
    '        2277,\n' +
    '        8,\n' +
    '        2796,\n' +
    '        1593,\n' +
    '        1279,\n' +
    '        2212,\n' +
    '        239,\n' +
    '        291,\n' +
    '        149,\n' +
    '        1103,\n' +
    '        840,\n' +
    '        517,\n' +
    '        513,\n' +
    '        956,\n' +
    '        53,\n' +
    '        157,\n' +
    '        4101,\n' +
    '        312,\n' +
    '        1137,\n' +
    '        2,\n' +
    '        2063,\n' +
    '        606,\n' +
    '        1839,\n' +
    '        184,\n' +
    '        2297,\n' +
    '        1947,\n' +
    '        2229,\n' +
    '        93,\n' +
    '        328,\n' +
    '        1284,\n' +
    '        16,\n' +
    '        2927,\n' +
    '        2246,\n' +
    '        474,\n' +
    '        1339,\n' +
    '        748,\n' +
    '        1039,\n' +
    '        3227,\n' +
    '        2845,\n' +
    '        7,\n' +
    '        437,\n' +
    '        4374,\n' +
    '        788,\n' +
    '        469,\n' +
    '        8078,\n' +
    '        2662,\n' +
    '        642,\n' +
    '        2450,\n' +
    '        2458,\n' +
    '        1226,\n' +
    '        1405,\n' +
    '        3992,\n' +
    '        1274,\n' +
    '        108,\n' +
    '        1456,\n' +
    '        1952,\n' +
    '        907,\n' +
    '        2,\n' +
    '        941,\n' +
    '        552,\n' +
    '        420,\n' +
    '        122,\n' +
    '        1520,\n' +
    '        2397,\n' +
    '        2650,\n' +
    '        246,\n' +
    '        2523,\n' +
    '        226,\n' +
    '        995,\n' +
    '        828,\n' +
    '        842,\n' +
    '        1337,\n' +
    '        1098,\n' +
    '        3,\n' +
    '        346,\n' +
    '        230,\n' +
    '        970,\n' +
    '        865,\n' +
    '        372,\n' +
    '        1640,\n' +
    '        1906,\n' +
    '        707,\n' +
    '        148,\n' +
    '        189,\n' +
    '        3312,\n' +
    '        1228,\n' +
    '        1263,\n' +
    '        26,\n' +
    '        2224,\n' +
    '        2598,\n' +
    '        2484,\n' +
    '        651,\n' +
    '        4,\n' +
    '        498,\n' +
    '        1030,\n' +
    '        17,\n' +
    '        356,\n' +
    '        260,\n' +
    '        3,\n' +
    '        1,\n' +
    '        3,\n' +
    '        2,\n' +
    '        2,\n' +
    '        298,\n' +
    '        353,\n' +
    '        1009,\n' +
    '        1236,\n' +
    '        1,\n' +
    '        270,\n' +
    '        224,\n' +
    '        374,\n' +
    '        276,\n' +
    '        395,\n' +
    '        2,\n' +
    '        8,\n' +
    '        12,\n' +
    '        29,\n' +
    '        750,\n' +
    '        1069,\n' +
    '        438,\n' +
    '        1988,\n' +
    '        61,\n' +
    '        898,\n' +
    '        461,\n' +
    '        338,\n' +
    '        52,\n' +
    '        903,\n' +
    '        382,\n' +
    '        131,\n' +
    '        206,\n' +
    '        1678,\n' +
    '        43,\n' +
    '        756,\n' +
    '        76,\n' +
    '        468,\n' +
    '        212,\n' +
    '        499,\n' +
    '        563,\n' +
    '        78,\n' +
    '        92,\n' +
    '        1334,\n' +
    '        758,\n' +
    '        156,\n' +
    '        587,\n' +
    '        169,\n' +
    '        82,\n' +
    '        498,\n' +
    '        460,\n' +
    '        264,\n' +
    '        11,\n' +
    '        767,\n' +
    '        100,\n' +
    '        3,\n' +
    '        132,\n' +
    '        84,\n' +
    '        389,\n' +
    '        464,\n' +
    '        1011,\n' +
    '        663,\n' +
    '        611,\n' +
    '        1182,\n' +
    '        348,\n' +
    '        460,\n' +
    '        9,\n' +
    '        5,\n' +
    '        1174,\n' +
    '        20,\n' +
    '        31,\n' +
    '        11,\n' +
    '        139,\n' +
    '        31,\n' +
    '        5813549,\n' +
    '        3310,\n' +
    '        1802584,\n' +
    '        6996022,\n' +
    '        549,\n' +
    '        333,\n' +
    '        444,\n' +
    '        1,\n' +
    '        2,\n' +
    '        80,\n' +
    '        1,\n' +
    '        900,\n' +
    '        896,\n' +
    '        1,\n' +
    '        8,\n' +
    '        1,\n' +
    '        2,\n' +
    '        2551,\n' +
    '        1,\n' +
    '        748,\n' +
    '        141,\n' +
    '        59,\n' +
    '        736,\n' +
    '        563,\n' +
    '        1,\n' +
    '        4265,\n' +
    '        1,\n' +
    '        1,\n' +
    '        1,\n' +
    '        1,\n' +
    '        137,\n' +
    '        1,\n' +
    '        1193,\n' +
    '        1401,\n' +
    '        3,\n' +
    '        767,\n' +
    '        9,\n' +
    '        25,\n' +
    '        3,\n' +
    '        1,\n' +
    '        1,\n' +
    '        3,\n' +
    '        5,\n' +
    '        25,\n' +
    '        15,\n' +
    '        23,\n' +
    '        11,\n' +
    '        11,\n' +
    '        3,\n' +
    '        20742077,\n' +
    '        3220021\',kBL:\'914T\'\n' +
    '    };google.sn=\'webhp\';google.kHL=\'uk\';\n' +
    '})();(function(){google.lc=[];google.li=0;google.getEI=function(a){for(var c;a&&(!a.getAttribute||!(c=a.getAttribute("eid")));)a=a.parentNode;return c||google.kEI\n' +
    '    };google.getLEI=function(a){for(var c=null;a&&(!a.getAttribute||!(c=a.getAttribute("leid")));)a=a.parentNode;return c\n' +
    '    };google.ml=function(){return null\n' +
    '    };google.time=function(){return Date.now()\n' +
    '    };google.log=function(a,c,b,d,g){if(b=google.logUrl(a,c,b,d,g)){a=new Image;var e=google.lc,f=google.li;e[f\n' +
    '            ]=a;a.onerror=a.onload=a.onabort=function(){delete e[f\n' +
    '                ]\n' +
    '            };google.vel&&google.vel.lu&&google.vel.lu(b);a.src=b;google.li=f+1\n' +
    '        }\n' +
    '    };google.logUrl=function(a,c,b,d,g){var e="",f=google.ls||"";b||-1!=c.search("&ei=")||(e="&ei="+google.getEI(d),\n' +
    '        -1==c.search("&lei=")&&(d=google.getLEI(d))&&(e+="&lei="+d));d="";!b&&google.cshid&&-1==c.search("&cshid=")&&"slh"!=a&&(d="&cshid="+google.cshid);b=b||"/"+(g||"gen_204")+"?atyp=i&ct="+a+"&cad="+c+e+f+"&zx="+google.time()+d;/^http:/i.test(b)&&"https:"==window.location.protocol&&(google.ml(Error("a"),!1,\n' +
    '        {src:b,glmm: 1\n' +
    '        }),b="");return b\n' +
    '    };\n' +
    '}).call(this);(function(){google.y={};google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c\n' +
    '            ])\n' +
    '        }google.y[c\n' +
    '        ]=[a,b\n' +
    '        ];return!1\n' +
    '    };google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)\n' +
    '    };google.lq=[];google.load=function(a,b,c){google.lq.push([\n' +
    '            [a\n' +
    '            ],b,c\n' +
    '        ])\n' +
    '    };google.loadAll=function(a,b){google.lq.push([a,b\n' +
    '        ])\n' +
    '    };\n' +
    '}).call(this);google.f={};(function(){document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"==c||"q"==c&&!a.elements.q.value?!0:!1\n' +
    '        }else a=!1;a&&(b.preventDefault(),b.stopPropagation())\n' +
    '    },!0);document.documentElement.addEventListener("click",function(b){var a;a: {for(a=b.target;a&&a!=document.documentElement;a=a.parentElement)if("A"==a.tagName){a="1"==a.getAttribute("data-nohref");break a\n' +
    '            }a=!1\n' +
    '        }a&&b.preventDefault()\n' +
    '    },!0);\n' +
    '}).call(this);var a=window.location,b=a.href.indexOf("#");if(0<=b){var c=a.href.substring(b+1);/(^|&)q=/.test(c)&&-1==c.indexOf("#")&&a.replace("/search?"+c.replace(/(^|&)fp=[^&\n' +
    '    ]*/g,\n' +
    '    "")+"&cad=h")\n' +
    '};</script><style>#gbar,#guser{font-size: 13px;padding-top: 1px !important;\n' +
    '}#gbar{height: 22px\n' +
    '}#guser{padding-bottom: 7px !important;text-align:right\n' +
    '}.gbh,.gbd{border-top: 1px solid #c9d7f1;font-size: 1px\n' +
    '}.gbh{height: 0;position:absolute;top: 24px;width: 100%\n' +
    '}@media all{.gb1{height: 22px;margin-right:.5em;vertical-align:top\n' +
    '    }#gbar{float:left\n' +
    '    }\n' +
    '}a.gb1,a.gb4{text-decoration:underline !important\n' +
    '}a.gb1,a.gb4{color:#00c !important\n' +
    '}.gbi .gb4{color:#dd8e27 !important\n' +
    '}.gbf .gb4{color:#900 !important\n' +
    '}</style><style>body,td,a,p,.h{font-family:arial,sans-serif\n' +
    '}body{margin: 0;overflow-y:scroll\n' +
    '}#gog{padding: 3px 8px 0\n' +
    '}td{line-height:.8em\n' +
    '}.gac_m td{line-height: 17px\n' +
    '}form{margin-bottom: 20px\n' +
    '}.h{color:#36c\n' +
    '}.q{color:#00c\n' +
    '}.ts td{padding: 0\n' +
    '}.ts{border-collapse:collapse\n' +
    '}em{font-weight:bold;font-style:normal\n' +
    '}.lst{height: 25px;width: 496px\n' +
    '}.gsfi,.lst{font: 18px arial,sans-serif\n' +
    '}.gsfs{font: 17px arial,sans-serif\n' +
    '}.ds{display:inline-box;display:inline-block;margin: 3px 0 4px;margin-left: 4px\n' +
    '}input{font-family:inherit\n' +
    '}body{background:#fff;color:#000\n' +
    '}a{color:#11c;text-decoration:none\n' +
    '}a:hover,a:active{text-decoration:underline\n' +
    '}.fl a{color:#36c\n' +
    '}a:visited{color:#551a8b\n' +
    '}.sblc{padding-top: 5px\n' +
    '}.sblc a{display:block;margin: 2px 0;margin-left: 13px;font-size: 11px\n' +
    '}.lsbb{background:#eee;border:solid 1px;border-color:#ccc #999 #999 #ccc;height: 30px\n' +
    '}.lsbb{display:block\n' +
    '}.ftl,#fll a{display:inline-block;margin: 0 12px\n' +
    '}.lsb{background:url(/images/nav_logo229.png) 0 -261px repeat-x;border:none;color:#000;cursor:pointer;height: 30px;margin: 0;outline: 0;font: 15px arial,sans-serif;vertical-align:top\n' +
    '}.lsb:active{background:#ccc\n' +
    '}.lst:focus{outline:none\n' +
    '}.tiah{width: 458px\n' +
    '}</style><script nonce="JLn5/tBzyjBbQ2RovXXWtA=="></script></head><body bgcolor="#fff"><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){var src=\'/images/nav_logo229.png\';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;\n' +
    '        }if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();\n' +
    '        }\n' +
    '    }\n' +
    '})();</script><div id="mngb"> <div id=gbar><nobr><b class=gb1>&#1055;&#1086;&#1096;&#1091;&#1082;</b> <a class=gb1 href="http://www.google.com.ua/imghp?hl=uk&tab=wi">&#1047;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103;</a> <a class=gb1 href="http://maps.google.com.ua/maps?hl=uk&tab=wl">&#1050;&#1072;&#1088;&#1090;&#1080;</a> <a class=gb1 href="http://www.youtube.com/?gl=UA&tab=w1">YouTube</a> <a class=gb1 href="http://news.google.com.ua/nwshp?hl=uk&tab=wn">&#1053;&#1086;&#1074;&#1080;&#1085;&#1080;</a> <a class=gb1 href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1 href="https://drive.google.com/?tab=wo">&#1044;&#1080;&#1089;&#1082;</a> <a class=gb1 href="https://www.google.com/calendar?tab=wc">&#1050;&#1072;&#1083;&#1077;&#1085;&#1076;&#1072;&#1088;</a> <a class=gb1 style="text-decoration:none" href="https://www.google.com.ua/intl/uk/about/products?tab=wh"><u>&#1041;&#1110;&#1083;&#1100;&#1096;&#1077;</u> &raquo;</a></nobr></div><div id=guser width=100%><nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a href="http://www.google.com.ua/history/optout?hl=uk" class=gb4>&#1030;&#1089;&#1090;&#1086;&#1088;&#1110;&#1103; &#1074;&#1077;&#1073;-&#1087;&#1086;&#1096;&#1091;&#1082;&#1091;</a> | <a  href="/preferences?hl=uk" class=gb4>&#1053;&#1072;&#1083;&#1072;&#1096;&#1090;&#1091;&#1074;&#1072;&#1085;&#1085;&#1103;</a> | <a target=_top id=gb_70 href="https://accounts.google.com/ServiceLogin?hl=uk&passive=true&continue=http://www.google.com/" class=gb4>&#1059;&#1074;&#1110;&#1081;&#1090;&#1080;</a></nobr></div><div class=gbh style=left: 0></div><div class=gbh style=right: 0></div> </div><center><br clear="all" id="lgpd"><div id="lga"><img alt="Google" height="92" src="/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png" style="padding:28px 0 14px" width="272" id="hplogo"><br><br></div><form action="/search" name="f"><table cellpadding="0" cellspacing="0"><tr valign="top"><td width="25%">&nbsp;</td><td align="center" nowrap=""><input name="ie" value="ISO-8859-1" type="hidden"><input value="uk" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden"><div class="ds" style="height:32px;margin:4px 0"><div style="position:relative;zoom:1"><input class="lst tiah" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000;padding-right:38px" autocomplete="off" value="" title="&#1055;&#1086;&#1096;&#1091;&#1082; Google" maxlength="2048" name="q" size="57"><img src="/textinputassistant/tia.png" style="position:absolute;cursor:pointer;right:5px;top:4px;z-index:300" data-script-url="/textinputassistant/11/uk_tia.js" id="tsuid1" alt="" height="23" width="27"><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){var id=\'tsuid1\';document.getElementById(id).onclick = function(){var s = document.createElement(\'script\');s.src = this.getAttribute(\'data-script-url\');(document.getElementById(\'xjsc\')||document.body).appendChild(s);\n' +
    '    };\n' +
    '})();</script></div></div><br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="&#1055;&#1086;&#1096;&#1091;&#1082; Google" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid2" value="&#1052;&#1077;&#1085;&#1110; &#1087;&#1086;&#1097;&#1072;&#1089;&#1090;&#1080;&#1090;&#1100;" name="btnI" type="submit"><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){var id=\'tsuid2\';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked = 1;if (this.form.iflsig)this.form.iflsig.disabled = false;\n' +
    '        }else top.location=\'/doodles/\';\n' +
    '    };\n' +
    '})();</script><input value="AINFCbYAAAAAXr07Oe-lu1nERpnQj2sbvApenQZ9YRG1" name="iflsig" type="hidden"></span></span></td><td class="fl sblc" align="left" nowrap="" width="25%"><a href="/advanced_search?hl=uk&amp;authuser=0">&#1056;&#1086;&#1079;&#1096;&#1080;&#1088;&#1077;&#1085;&#1080;&#1081; &#1087;&#1086;&#1096;&#1091;&#1082;</a></td></tr></table><input id="gbv" name="gbv" type="hidden" value="1"><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=[\n' +
    '            "MSXML2.XMLHTTP.6.0",\n' +
    '            "MSXML2.XMLHTTP.3.0",\n' +
    '            "MSXML2.XMLHTTP",\n' +
    '            "Microsoft.XMLHTTP"\n' +
    '        ];for(c=0;d=e[c++\n' +
    '        ];)try{new ActiveXObject(d),b="2"\n' +
    '        }catch(h){}\n' +
    '    }a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f\n' +
    '        },\n' +
    '        0)\n' +
    '    };\n' +
    '}).call(this);</script></form><div id="gac_scont"></div><div style="font-size:83%;min-height:3.5em"><br><div id="gws-output-pages-elements-homepage_additional_languages__als"><style>#gws-output-pages-elements-homepage_additional_languages__als{font-size:small;margin-bottom: 24px\n' +
    '}#SIvCob{display:inline-block;line-height: 28px;\n' +
    '}#SIvCob a{padding: 0 3px;\n' +
    '}.H6sW5{display:inline-block;margin: 0 2px;white-space:nowrap\n' +
    '}.z4hgWe{display:inline-block;margin: 0 2px\n' +
    '}</style><div id="SIvCob">&#1052;&#1086;&#1074;&#1072; Google:  <a href="http://www.google.com/setprefs?sig=0_d4WYQu5LYxcnGAD9Ar-EuOyBg3Q%3D&amp;hl=ru&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwix3-HSobPpAhXpo4sKHdkhD1AQ2ZgBCAU">&#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</a>  </div></div></div><span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="fll"><a href="http://www.google.com.ua/intl/uk/ads/">&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</a><a href="http://www.google.com.ua/intl/uk/services/">&#1056;&#1110;&#1096;&#1077;&#1085;&#1085;&#1103; &#1076;&#1083;&#1103; &#1073;&#1110;&#1079;&#1085;&#1077;&#1089;&#1091;</a><a href="/intl/uk/about.html">&#1059;&#1089;&#1077; &#1087;&#1088;&#1086; Google</a><a href="http://www.google.com/setprefdomain?prefdom=UA&amp;prev=http://www.google.com.ua/&amp;sig=K_C-0va85YbRxF2Q2-XkuLkfejtBY%3D">Google.com.ua</a></div></div><p style="font-size:8pt;color:#767676">&copy; 2020</p></span></center><script nonce="JLn5/tBzyjBbQ2RovXXWtA==">(function(){window.google.cdo={height: 0,width: 0\n' +
    '    };(function(){var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight\n' +
    '        }a&&b&&(a!=google.cdo.width||b!=google.cdo.height)&&google.log("",\n' +
    '        "",\n' +
    '        "/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI);\n' +
    '    }).call(this);\n' +
    '})();(function(){var u=\'/xjs/_/js/k\x3dxjs.hp.en.c2k1es80Jek.O/m\x3dsb_he,d/am\x3dAF8IbA4/d\x3d1/rs\x3dACT90oF_rE3e9Uv9O45laovwBnG7fRFv4w\';setTimeout(function(){var b=document;var a="SCRIPT";"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());a=b.createElement(a);a.src=u;google.timers&&google.timers.load&&google.tick&&google.tick("load",\n' +
    '        "xjsls");document.body.appendChild(a)\n' +
    '    },\n' +
    '    0);\n' +
    '})();(function(){window.google.xjsu=\'/xjs/_/js/k\x3dxjs.hp.en.c2k1es80Jek.O/m\x3dsb_he,d/am\x3dAF8IbA4/d\x3d1/rs\x3dACT90oF_rE3e9Uv9O45laovwBnG7fRFv4w\';\n' +
    '})();function _DumpException(e){throw e;\n' +
    '}function _F_installCss(c){}(function(){google.jl={em: [],emw: false,lls:\'default\',pdt: 0,snet: true,up: false,uwp: true\n' +
    '    };\n' +
    '})();(function(){var pmc=\'{\x22d\x22: {},\x22sb_he\x22: {\x22agen\x22: true,\x22cgen\x22: true,\x22client\x22:\x22heirloom-hp\x22,\x22dh\x22: true,\x22dhqt\x22: true,\x22ds\x22:\x22\x22,\x22ffql\x22:\x22en\x22,\x22fl\x22: true,\x22host\x22:\x22google.com\x22,\x22isbh\x22: 28,\x22jsonp\x22: true,\x22msgs\x22: {\x22cibl\x22:\x22&#1054;&#1095;&#1080;&#1089;&#1090;&#1080;&#1090;&#1080; &#1087;&#1086;&#1096;&#1091;&#1082;&#1086;&#1074;&#1080;&#1081; &#1079;&#1072;&#1087;&#1080;&#1090;\x22,\x22dym\x22:\x22&#1052;&#1086;&#1078;&#1083;&#1080;&#1074;&#1086;, &#1074;&#1080; &#1084;&#1072;&#1083;&#1080; &#1085;&#1072; &#1091;&#1074;&#1072;&#1079;&#1110;:\x22,\x22lcky\x22:\x22&#1052;&#1077;&#1085;&#1110; &#1087;&#1086;&#1097;&#1072;&#1089;&#1090;&#1080;&#1090;&#1100;\x22,\x22lml\x22:\x22&#1044;&#1086;&#1082;&#1083;&#1072;&#1076;&#1085;&#1110;&#1096;&#1077;\x22,\x22oskt\x22:\x22&#1058;&#1088;&#1072;&#1085;&#1089;&#1083;&#1110;&#1090;&#1077;&#1088;&#1072;&#1094;&#1110;&#1103;\x22,\x22psrc\x22:\x22&#1062;&#1077;&#1081; &#1087;&#1086;&#1096;&#1091;&#1082; &#1074;&#1080;&#1076;&#1072;&#1083;&#1077;&#1085;&#1086; &#1079; &#1074;&#1072;&#1096;&#1086;&#1111; \\<a href\x3d\\\\\x22/history\\\\\x22\\>&#1074;&#1077;&#1073;-&#1110;&#1089;&#1090;&#1086;&#1088;&#1110;&#1111;\\</a\\>\x22,\x22psrl\x22:\x22&#1042;&#1080;&#1076;&#1072;&#1083;&#1080;&#1090;&#1080;\x22,\x22sbit\x22:\x22&#1055;&#1086;&#1096;&#1091;&#1082; &#1079;&#1072; &#1079;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103;&#1084;\x22,\x22srch\x22:\x22&#1055;&#1086;&#1096;&#1091;&#1082; Google\x22\n' +
    '            },\x22ovr\x22: {},\x22pq\x22:\x22\x22,\x22refpd\x22: true,\x22rfs\x22: [],\x22sbpl\x22: 16,\x22sbpr\x22: 16,\x22scd\x22: 10,\x22stok\x22:\x22xhzLmkorAkk63sBwdLZmbXyxM6Y\x22,\x22uhde\x22: false\n' +
    '        }\n' +
    '    }\';google.pmc=JSON.parse(pmc);\n' +
    '})();</script>        </body></html>\n' +
    '\n';

  ngOnInit(): void {
  }

  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
