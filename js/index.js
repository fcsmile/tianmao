$(function(){
     var logo8=$('.logo8')
     var logo9=$('.logo9')
      console.log(logo8)
      logo9[0].style.display="block";
for (var k = 0; k < logo8.length; k++) {
        logo8[k].index=[k]
        logo8[k].onmouseover=function(){
            for (var i = 0; i < logo9.length; i++) {
                       logo9[i].style.display="none";
               }; 
               logo9[this.index].style.display="block";  
        }
};
        //图放大
      var xuan1=$('.xuan1');
       for (var i = 0; i < 5; i++) {
               zuoyou(i)
       };
       function zuoyou(j){
      xuan1[j].onmouseover=function(){
      var xuan5=$('.xuan5')[j];
      var img=$('img',xuan5)
       xuan1[j].onmouseover=function(){
     animate(img[0],{width:140,height:140,top:115},200)
       }
       xuan1[j].onmouseout=function(){
     animate(img[0],{width:120,height:120,top:125},200)
       }
          }
       }
      

      var suan1=$('.suan1');
     for (var b = 0; b < 5; b++) {
               zuoyou1(b)
       };
       function zuoyou1(h){
      suan1[h].onmouseover=function(){
      var suan4=$('.suan4')[h];
      var img=$('img',suan4)
       suan1[h].onmouseover=function(){
     animate(img[0],{width:140,height:140,top:75},200)
       }
       suan1[h].onmouseout=function(){
     animate(img[0],{width:120,height:120,top:85},200)
       }
          }
       }

//图左移动

var xia16=$('.xia16');
     for (var r = 0; r < xia16.length; r++) {
               zuoyi(r)
       };
       function zuoyi(p){
      xia16[p].onmouseover=function(){
      var xia19=$('.xia19')[p];
      var img=$('img',xia19)
       xia16[p].onmouseover=function(){
     animate(img[0],{marginLeft:-10},200)
       }
       xia16[p].onmouseout=function(){
     animate(img[0],{marginLeft:0},200)
       }
          }
       }

      var xia16c=$('.xia16-c')[0];
      var xia19c=$('.xia19-c')[0];
      var img3=$('img',xia19c)
       xia16c.onmouseover=function(){
     animate(img3[0],{left:279},200)
       }
       xia16c.onmouseout=function(){
     animate(img3[0],{left:289},200)
       }
      



       var xia22=$('.xia22');
     for (var o = 0; o < xia22.length; o++) {
               zuoyi1(o)
       };
       function zuoyi1(v){
      xia22[v].onmouseover=function(){
      var xia21=$('.xia21')[v];
      var img=$('img',xia21)
       xia22[v].onmouseover=function(){
     animate(img[0],{marginLeft:-10},200)
       }
       xia22[v].onmouseout=function(){
     animate(img[0],{marginLeft:0},200)
       }
          }
       }
    var xia22d=$('.xia22-d');
    for (var iY = 0; iY < xia22d.length; iY++) {
      zuoyi2(iY)
    };
     function zuoyi2(v){
      xia22d[v].onmouseover=function(){
      var xia21d=$('.xia21-d')[v];
      var img1=$('img',xia21d)
       xia22d[v].onmouseover=function(){
     animate(img1[0],{marginLeft:-10},200)
       }
       xia22d[v].onmouseout=function(){
     animate(img1[0],{marginLeft:0},200)
       }
          }
       }


       // banner轮播
       var imgbox=$('.imgbox')[0];
       var zhong=$('.zhong')[0];
       var as=$('a',imgbox);
        var btns=$('.dian');
        var zengtup=$('.zengtup');
        var zengtu=$('.zengtu',imgbox);
        var zengzhao=$('.zengzhao',imgbox);
        var bann=["#fedd22","#fe2064","#e8e8e8","#019cfe","#e70015","#f6e4d6"];
        var banner=$('.banner',document);
       var aaa=0;
       for (var is = 0; is < as.length; is++) {
         as[is].style.opacity=0;
         zengtup[is].style.opacity=0;
         banner[is].style.backgroundColor="";
       };
       as[0].style.opacity=1;
       btns[0].style.backgroundColor="#eee";
       banner[0].style.backgroundColor="#fedd22";
       zengtup[0].style.opacity=1;
      var t= setInterval(wheel,2000)
       function wheel(){
        aaa++;
           for (var i = 0; i < as.length; i++) {
             as[i].style.opacity=0;
             btns[i].style.backgroundColor="";
             zengtup[i].style.opacity=0;
             banner[i].style.backgroundColor="";
           };
           if(aaa==as.length){aaa=0};
         animate(as[aaa],{opacity:1},300)
          animate(zengtup[aaa],{opacity:1},300)
         btns[aaa].style.backgroundColor="#eee";
         banner[aaa].style.backgroundColor=bann[aaa];
       }
       imgbox.onmouseover=function(){
            clearInterval(t)
       }
       imgbox.onmouseout=function(){
            t= setInterval(wheel,2000)
       }
       for (var z = 0; z < btns.length;z++) {
        btns[z].index=z;
         btns[z].onmouseover=function(){
              for (var i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor="";
                as[i].style.opacity=0;
                zengtup[i].style.opacity=0;
                banner[i].style.backgroundColor="";
              };
              btns[this.index].style.backgroundColor="#eee";
              animate(as[this.index],{opacity:1},300)
              banner[this.index].style.backgroundColor=bann[this.index];
              // animate(zengtup[this.index],{opacity:1},300)
              zengtup[this.index].style.opacity=1;
         }
       };
    for (var zei = 0; zei < zengtu.length; zei++) {
      zengtu[zei].index=zei;
      zengtu[zei].onmouseover=function(){
        // for (var j = 0; j < zengtu.length; j++) {
        //   zengzhao.style.opacity=0
        // };
        for (var i = 0; i < zengtu.length; i++) {
          // animate(zengzhao[this.index],{opacity:1},300)
          zengzhao[this.index].style.opacity=1;
        };
      }
    zengtu[zei].onmouseout=function(){
        for (var i = 0; i < zengtu.length; i++) {
          // animate(zengzhao[this.index],{opacity:0.5},300)
          zengzhao[this.index].style.opacity=0.9;
        };
      }
    };

// 固定栏动画
var guding=$('.guding')[0];
var asss=$('a',guding)
console.log(asss)
var tanchu=$('.tanchu',guding)
console.log(tanchu)
var tansanjiao=$('.tansanjiao')
console.log(tansanjiao)
for (var iv = 0; iv < tanchu.length; iv++) {
  tanchu[iv].style.opacity=0;
  tansanjiao[iv].style.opacity=0;
};
  for (var ig = 0; ig < asss.length; ig++) {
    asss[ig].index=[ig];
     asss[ig].onmouseover=function(){
         for(var i= 0; i < tanchu.length; i++){
           tanchu[i].style.opacity=0;
           tansanjiao[i].style.opacity=0;
         }
         animate(tanchu[this.index],{right:35,opacity:1},200)
         animate(tansanjiao[this.index],{right:20,opacity:1},200)
   }
   asss[ig].onmouseout=function(){
         animate(tanchu[this.index],{right:70,opacity:0},200)
         animate(tansanjiao[this.index],{right:54,opacity:0},200)
   }
  }

// 定时搜索框开始

 // window.onscroll=function(){


 // }
// 定时搜索框结束
// 中图开始
var mid=$('.mid',document)[0];
var mid2=$('.mid2',mid);
var zhes=$('.zhe',mid);
for (var gi = 0; gi < mid2.length; gi++) {
  mid2[gi].index=[gi];
   mid2[gi].onmouseover=function(){
       animate(zhes[this.index],{opacity:0.4},240) 
   }
   mid2[gi].onmouseout=function(){
     animate(zhes[this.index],{opacity:0},240)
   }
};
// 中图结束
// 热门品牌右侧
var logo6=$('.logo6',document)[0];
var logo12=$('.logo12',document);
var yuan=$('.yuan',logo6);
var ziti=$('.ziti',logo6);
var ziti1=$('.ziti1',logo6);
for (var oi = 0; oi < logo12.length; oi++) {
  logo12[oi].index=[oi];
  logo12[oi].onmouseover=function(){
       animate(ziti[this.index],{color:"#dd2727"},240);
       animate(ziti1[this.index],{color:"#dd2727"},240);
       animate(yuan[this.index],{opacity:0.4},240);
  }
   logo12[oi].onmouseout=function(){
       animate(ziti[this.index],{color:"#000"},240);
       animate(ziti1[this.index],{color:"#777"},240);
       animate(yuan[this.index],{opacity:0},240);
  }
};
// 热门品牌右结束
// 左侧固定导航开始
// 定时搜索框开始
 var dingshi=$('.dingshi',document)[0];
 var flad=true;
// 定时搜索框结束
// 按需加载开始
var jiazai=$('.jiazai');
var arrn=[];
var flavg=[];
var inn=0;
var pinh=document.documentElement.clientHeight;
for (var ji = 0; ji < jiazai.length; ji++) {
  arrn.push(jiazai[ji].offsetTop);
  flavg.push(true);
};
// 按需加载结束
var zuogu=$('.zuogu',document)[0];
var guzi=$('.guzi',zuogu);
var flagg=true;
var arrr=[];
var yanse=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#e95b8d","#DD2727","#DD2727"];
var xia=$('.xia',document);
for (var xi = 0; xi < xia.length; xi++) {
  arrr.push(xia[xi].offsetTop);
};
console.log(arrr)
var dianqi=$(".dianqi",document)[0];
var caini=$('.caini',document)[0];
arrr.push(dianqi.offsetTop,caini.offsetTop);
window.onscroll=function(){
  var iw=document.documentElement.scrollTop||document.body.scrollTop
  if(iw>598){
    if(flagg){
      flagg=false;
     animate(zuogu,{left:3},240)
   }

  }else{
    if(!flagg){
      flagg=true;
     animate(zuogu,{left:-39},240)
   }
    }
    guzi[0].style.backgroundColor="";
    for (var zzi = 0; zzi < arrr.length; zzi++) {
      if(iw+300>arrr[zzi]){
          for (var yan = 0; yan < guzi.length; yan++) {
            guzi[yan].style.backgroundColor="";
          };
          guzi[zzi].style.backgroundColor=yanse[zzi];
        
      }
    };
  for (var fi= 0; fi < guzi.length; fi++) {
    guzi[fi].index=fi
    guzi[fi].onclick=function(){
      for (var i = 0; i < guzi.length; i++) {
        guzi[i].style.backgroundColor="";
      };
        guzi[this.index].style.backgroundColor=yanse[this.index];
        animate(document.body,{scrollTop:arrr[this.index]},240)
        animate(document.documentElement,{scrollTop:arrr[this.index]},240)
    }
  };
  // 返回顶部开始
  var guzi1=$('.guzi1')[1];

  guzi1.onclick=function(){
    animate(document.body,{scrollTop:0},240);
    animate(document.documentElement,{scrollTop:0},240)
  }
  // 返回顶部结束
  // 按需加载开始
    var schh=document.body.scrollTop||document.documentElement.scrollTop;
  for (var i = 0; i < arrn.length; i++) {
    if(schh+pinh>arrn[i]&&flavg[i]==true){
      inn++;
      flavg[i]=false;
      var imgg=$('img',jiazai[i]);
      for(var kj=0;kj < imgg.length;kj++){
        imgg[kj].src=imgg[kj].getAttribute('asrc')
      }
    }
  };
  // 按需加载结束
    // 定时搜索框开始
    var sii=document.documentElement.scrollTop||document.body.scrollTop;
    if(sii>750){
       if(flad){
        flad=false;
          animate(dingshi,{top:0},240);
       }
 }else{
       if(flad==false){
         flad=true;
         animate(dingshi,{top:-50},240)
       }
 }
// 定时搜索框开始结束
}
// 左侧固定导航结束


// 按需加载开始
var jiazai=$('.jiazai');
var arrn=[];
var flagg=[];
var inn=0;
var pinh=document.documentElement.clientHeight;
for (var ji = 0; ji < jiazai.length; ji++) {
  arrn.push(jiazai[ji].offsetTop);
  flagg.push(true);
  
};
on(window,"scroll",function(){

})
// 按需加载结束
// 亲子时光左侧开始
for (var qin = 0; qin < 6; qin++) {
  qinzi(qin)
};
function qinzi(obj){
   var xia11=$('.xia11',document)[obj];
var xia11as=$('a',xia11);
var kkk=0;
 for (var li = 0; li < xia11as.length; li++) {
     xia11as[li].style.display="none";
} 
 xia11as[0].style.display="block";
setInterval(function(){
  kkk++;
  for (var l = 0; l < xia11as.length; l++) {
     xia11as[l].style.display="none";
} 
if(kkk==xia11as.length){kkk=0}
 xia11as[kkk].style.display="block";
},3000)
var xia10=$('.xia10',document)[obj];
var xiazhao=$('.xiazhao',xia10)[0];
xia10.onmouseover=function(){
  animate(xiazhao,{opacity:0.2},240);
}
xia10.onmouseout=function(){
  animate(xiazhao,{opacity:0},240);
}
}
// 亲子时光左侧结束
// 旗舰店效果、
var deli6=$('.deli6',document);
var deli7=$('.delizhao',document);
for (var de = 0; de < deli6.length; de++) {
  deli6[de].index=de;
  deli6[de].onmouseover=function(){
    animate(deli7[this.index],{opacity:0.3},240)
  }
   deli6[de].onmouseout=function(){
    animate(deli7[this.index],{opacity:0},240)
  }
};
// 旗舰店效果结束
// 猜你习惯效果
var caini2=$('.caini2',document);
var cainizhao=$('.cainizhao',document);
console.log(caini2.length)
console.log(cainizhao.length)
for (var cav = 0; cav < caini2.length; cav++) {
  caini2[cav].index=cav;
  caini2[cav].onmouseover=function(){
     animate(cainizhao[this.index],{opacity:0.3},240)

  }
   caini2[cav].onmouseout=function(){
     animate(cainizhao[this.index],{opacity:0},240)
     
  }
};
// 猜你喜欢效果结束

// 我的淘宝开始
var wode=$('.wode')[0];
var wodezhao=$('.wodezhao')[0];
var wodezhao1=$('.wodezhao1')[0];
wodezhao1.style.display="none";
wodezhao.style.display="none";
hover(wode,function(){
  wodezhao1.style.display="block";
  wodezhao.style.display="block";
},function(){
wodezhao1.style.display="none";
wodezhao.style.display="none";
})
// 我的淘宝结束
// 收藏夹开始
var shoucang=$('.shoucang')[0];
var shouzhao=$('.shouzhao')[0];
var shouzhao1=$('.shouzhao1')[0];
shouzhao.style.display="none";
  shouzhao1.style.display="none";
  hover(shoucang,function(){
  shouzhao.style.display="block";
  shouzhao1.style.display="block";
},function(){
  shouzhao.style.display="none";
  shouzhao1.style.display="none";
})
// 收藏夹结束
// 手机版开始
var shouji=$('.shouji')[0];
var shoujiimg=$('.shoujiimg')[0];
var shousan=$('.shousan')[0];
shoujiimg.style.display="none";
  shousan.style.display="none";
  hover(shouji,function(){
  shoujiimg.style.display="block";
  shousan.style.display="block";
},function(){
  shoujiimg.style.display="none";
  shousan.style.display="none";
})
// 手机版结束
// 商家开始
var shangjia=$('.shangjia')[0];
var shangzhao=$('.shangzhao')[0];
var shangzhao1=$('.shangzhao1')[0];
shangzhao.style.display="none";
  shangzhao1.style.display="none";
  hover(shangjia,function(){
  shangzhao.style.display="block";
  shangzhao1.style.display="block";
},function(){
  shangzhao.style.display="none";
  shangzhao1.style.display="none";
})
// 商家结束
// 网站导航开始
var wangzhan=$('.wangzhan')[0]
var wangzhao=$(".wangzhao")[0];
var wangzhao1=$('.wangzhao1')[0];
var w=0;
var u=0;
wangzhao.style.display="none";
  wangzhao1.style.display="none";
hover(wangzhan,function(){
   wangzhao.style.display="block";
  wangzhao1.style.display="block"
  console.log("移入"+w++)
},function(){
  wangzhao.style.display="none";
  wangzhao1.style.display="none";
  console.log("移出"+u++)
})
// 网站导航结束

// 顶部天猫超市猫头开始
var fenlei5=$('.fenlei5')[0];
var fenlei5as=$('a',fenlei5);
var tou=$('.tou',fenlei5);
for(var uoi=0;uoi<tou.length;uoi++){
      tou[uoi].style.display="none"
    }
for (var lei = 0; lei < fenlei5as.length; lei++) {
  fenlei5as[lei].index=lei;
  fenlei5as[lei].onmouseover=function(){
    for(var i=0;i<tou.length;i++){
      tou[i].style.display="none"
    }
    tou[this.index].style.display="block";
  }
   fenlei5as[lei].onmouseout=function(){
    
    tou[this.index].style.display="none";
  }
};
// 顶部天猫超市猫头结束

// banner左侧弹出框
var banner2=$('.banner2')[0];
var banner3=$('.banner3')
var banzhao=$('.banzhao')
var banxian=$('.banxian')
var banda=$('.banda')
console.log(banzhao.length)
for (var ko = 0; ko < banxian.length; ko++) {
      banxian[ko].style.display="none"
      banzhao[ko].style.display="none"
    };
for (var ner = 0; ner < banner3.length; ner++) {
  banda[ner].index=ner;
  hover(banda[ner],function(){
    for (var i = 0; i < banxian.length; i++) {
      banxian[i].style.display="none"
      banzhao[i].style.display="none"
    };
    banxian[this.index].style.display="block"
    banzhao[this.index].style.display="block"
  },function(){
    banxian[this.index].style.display="none"
    banzhao[this.index].style.display="none"
  })
};
for (var xian = 0; xian < banxian.length; xian++) {
  banxian[xian].index=xian;
  hover(banxian[xian],function(){
    for (var i = 0; i < banxian.length; i++) {
      banxian[i].style.display="none";
      banzhao[i].style.display="none"
    };
    banxian[this.index].style.display="block";
    banzhao[this.index].style.display="block"
  },function(){
    banxian[this.index].style.display="none"
    banzhao[this.index].style.display="none"
  })
};

// banner左侧弹出框结束
})
