(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6i7m":function(l,n,u){"use strict";u.r(n);var e=u("LoAr"),a=function(){},t=u("C9Ky"),i=u("7tlY"),o=u("WAtv"),c=u("Gien"),b=u("GcYS"),r=u("WV+C"),s=u("0xYh"),d=u("Z5FQ"),g=u("ResS"),m=u("//aV"),h=u("U+go"),p=u("WT9V"),y=u("ChgE"),f=u("fxml"),x=u("bcGG"),U=u("WjFU"),v=u("981U"),k=u("YzpY"),I=u("TeY9"),L=u("iwai"),T=u("FOLC"),w=u("SeAg"),C=u("fDe+"),O=u("jQpT"),j=u("Jg5f"),G=u("T/rf"),_=function(){function l(l,n,u){this.gallery=l,this.lightbox=n,this._pixabay=u,this.images=[],this.code=M}return l.prototype.ngOnInit=function(){var l=this;this.space$=this._pixabay.getHDImages("sea").pipe(Object(j.a)(function(n){return l.gallery.ref("lightbox",{thumbPosition:"top"}).load(n),n}))},l.prototype.ngOnDestroy=function(){this.gallery.ref("lightbox").destroy()},l}(),M={loadItems:"items: GalleryItem[] = [...];\nconst galleryRef = this.gallery.ref();\ngalleryRef.load(items)",template:'<div class="grid-item"\n  *ngFor="let item of items; let i = index"\n  [lightbox]="i">\n  <img [src]="item.data.thumbnail">\n</div>',ex:'import { Component, OnInit } from \'@angular/core\';\nimport { Gallery, GalleryItem } from \'@ngx-gallery/core\';\n\n@Component({\n  template: `\n    <div class="grid">\n      <div class="grid-item"\n        *ngFor="let item of space$ | async; let i = index"\n        [lightbox]="i"\n        [gallery]="galleryId">\n        <img [src]="item.data.thumbnail">\n      </div>\n    </div>\n  `\n})\nexport class AppComponent implements OnInit {\n\n  galleryId = \'myLightbox\';\n  items: GalleryItem[];\n\n  constructor(public gallery: Gallery) { }\n\n  ngOnInit() {\n    // Load items into gallery\n    const galleryRef = this.gallery.ref(this.galleryId);\n    galleryRef.load(this.items);\n  }\n}',alt:"import { Component, OnInit } from '@angular/core';\nimport { Gallery, GalleryItem } from '@ngx-gallery/core';\nimport { Lightbox } from '@ngx-gallery/lightbox';\n\nexport class AppComponent implements OnInit {\n\n  galleryId = 'myLightbox';\n  items: GalleryItem[];\n\n  constructor(public gallery: Gallery, private lightbox: Lightbox) { }\n\n  ngOnInit() {\n    // Load items into gallery\n    const galleryRef = this.gallery.ref(this.galleryId);\n    galleryRef.load(this.items);\n  }\n\n  openInFullScreen(index: number) {\n    this.lightbox.open(index, this.galleryId, {\n      panelClass: 'fullscreen'\n    });\n  }\n}"},A=u("wwR/"),F=e.Sa({encapsulation:0,styles:[[".example-card[_ngcontent-%COMP%]{width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/shiba1.d84e1a8ed94377452dbf.jpg);background-size:cover}.grid-item[_ngcontent-%COMP%]{margin:1em;border-radius:.2em;overflow:hidden;padding:0;width:200px;height:140px}@media only screen and (max-width:480px){.grid-item[_ngcontent-%COMP%]{margin:.4em;width:100px;height:80px}}.grid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin:3em 0}.grid-image[_ngcontent-%COMP%]{display:block;width:100%;height:100%;background-size:cover;background-position:center center}"]],data:{}});function P(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,3,"button",[["class","grid-item"],["gallery","lightbox"],["mat-raised-button",""],["mat-ripple",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,c.d,c.b)),e.Ta(1,180224,null,0,b.b,[e.l,r.a,s.e,[2,d.a]],null,null),e.Ta(2,212992,null,0,g.f,[g.a,e.l,e.G],{index:[0,"index"],id:[1,"id"]},null),(l()(),e.Ua(3,0,null,0,0,"span",[["class","grid-image"]],[[4,"backgroundImage",null]],null,null,null,null))],function(l,n){l(n,2,0,n.context.index,"lightbox")},function(l,n){l(n,0,0,e.eb(n,1).disabled||null,"NoopAnimations"===e.eb(n,1)._animationMode),l(n,3,0,"url("+n.context.$implicit.data.thumb+")")})}function S(l){return e.nb(2,[(l()(),e.Ua(0,0,null,null,92,"ng-scrollbar",[],null,null,null,m.b,m.a)),e.Ta(1,4374528,null,0,h.a,[e.B,e.G,p.d,e.D],null,null),(l()(),e.Ua(2,0,null,0,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e.Ua(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Lightbox"])),(l()(),e.Ua(5,0,null,0,85,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),e.Ua(6,0,null,null,13,"section",[],null,null,null,null,null)),(l()(),e.Ua(7,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),e.Ta(8,49152,null,0,f.a,[],null,null),(l()(),e.lb(-1,0,["Overview"])),(l()(),e.Ua(10,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Use the directive "])),(l()(),e.Ua(12,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["[lightbox]"])),(l()(),e.lb(-1,null,[" to open the lightbox on elements clicks"])),(l()(),e.Ua(15,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Alternatively, you can still use the "])),(l()(),e.Ua(17,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["Lightbox"])),(l()(),e.lb(-1,null,[" service to open the lightbox programmatically."])),(l()(),e.Ua(20,0,null,null,70,"section",[],null,null,null,null,null)),(l()(),e.Ua(21,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),e.Ta(22,49152,null,0,f.a,[],null,null),(l()(),e.lb(-1,0,["Usage"])),(l()(),e.Ua(24,0,null,null,11,"note",[["class","info"],["style","margin-top: -4em"]],null,null,null,x.b,x.a)),e.Ta(25,49152,null,0,U.a,[],null,null),(l()(),e.Ua(26,0,null,0,9,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["If you haven't installed and imported the module in step "])),(l()(),e.Ua(28,0,null,null,1,"span",[["class","section-number inline-number"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["1"])),(l()(),e.lb(-1,null,[", see the "])),(l()(),e.Ua(31,0,null,null,4,"a",[["class","inline-button"],["color","accent"],["mat-button",""],["style","padding: 0 0.5em"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.eb(l,32).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),"click"===n&&(a=!1!==e.eb(l,34)._haltDisabledEvents(u)&&a),a},c.c,c.a)),e.Ta(32,671744,null,0,v.q,[v.o,v.a,p.h],{routerLink:[0,"routerLink"]},null),e.fb(33,1),e.Ta(34,180224,null,0,b.a,[r.a,s.e,e.l,[2,d.a]],{color:[0,"color"]},null),(l()(),e.lb(-1,0,["Getting Started Guide"])),(l()(),e.Ua(36,0,null,null,4,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),e.Ua(37,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["2"])),(l()(),e.Ua(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Create a gallery items array to load it in the gallery"])),(l()(),e.Ua(41,0,null,null,1,"hl-code",[],null,null,null,k.b,k.a)),e.Ta(42,4243456,null,0,I.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(43,0,null,null,7,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),e.Ua(44,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["3"])),(l()(),e.Ua(46,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Now that you have gallery items, display their thumbnails in the template and add the directive "])),(l()(),e.Ua(48,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["[lightbox]"])),(l()(),e.lb(-1,null,[" on each item so the clicks open the lightbox."])),(l()(),e.Ua(51,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Example"])),(l()(),e.Ua(53,0,null,null,1,"hl-code",[],null,null,null,k.b,k.a)),e.Ta(54,4243456,null,0,I.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["If you are using multiple galleries in your app, then each gallery should have an id."])),(l()(),e.Ua(57,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Full Example"])),(l()(),e.Ua(59,0,null,null,1,"hl-code",[],null,null,null,k.b,k.a)),e.Ta(60,4243456,null,0,I.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(61,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Demo"])),(l()(),e.Ua(63,0,null,null,3,"div",[["class","grid"]],null,null,null,null,null)),(l()(),e.La(16777216,null,null,2,null,P)),e.Ta(65,278528,null,0,p.j,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),e.gb(131072,p.b,[e.i]),(l()(),e.Ua(67,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Lightbox config can be set globally in "])),(l()(),e.Ua(69,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["LightboxModule.forRoot(config)"])),(l()(),e.lb(-1,null,[" or directly with the open function."])),(l()(),e.Ua(72,0,null,null,3,"note",[],null,null,null,x.b,x.a)),e.Ta(73,49152,null,0,U.a,[],null,null),(l()(),e.Ua(74,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["By default, the lightbox uses full screen style on small screens like on mobile phones, but you can force a full screen style on large screens too."])),(l()(),e.Ua(76,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["For example, open the lightbox in "])),(l()(),e.Ua(78,0,null,null,2,"button",[["class","inline-button"],["color","accent"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.lightbox.open(0,"lightbox",{panelClass:"fullscreen"})&&e),e},c.d,c.b)),e.Ta(79,180224,null,0,b.b,[e.l,r.a,s.e,[2,d.a]],{color:[0,"color"]},null),(l()(),e.lb(-1,0,[" Full Screen "])),(l()(),e.lb(-1,null,[" mode "])),(l()(),e.Ua(82,0,null,null,1,"hl-code",[],null,null,null,k.b,k.a)),e.Ta(83,4243456,null,0,I.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(84,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["List of lightbox options is available in the "])),(l()(),e.Ua(86,0,null,null,4,"a",[["class","inline-button"],["color","primary"],["href","https://github.com/MurhafSousli/ngx-gallery/wiki/Lightbox-API"],["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.eb(l,87)._haltDisabledEvents(u)&&a),a},c.c,c.a)),e.Ta(87,180224,null,0,b.a,[r.a,s.e,e.l,[2,d.a]],{color:[0,"color"]},null),(l()(),e.Ua(88,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["icon","external-link-alt"]],[[8,"innerHTML",1]],null,null,L.b,L.a)),e.Ta(89,573440,null,0,T.a,[w.c,T.b],{iconProp:[0,"iconProp"]},null),(l()(),e.lb(-1,0,[" Lightbox API "])),(l()(),e.Ua(91,0,null,0,1,"footer",[],null,null,null,C.b,C.a)),e.Ta(92,49152,null,0,O.a,[],null,null)],function(l,n){var u=n.component;l(n,32,0,l(n,33,0,"/getting-started/lightbox")),l(n,34,0,"accent"),l(n,42,0,u.code.loadItems),l(n,54,0,u.code.template),l(n,60,0,u.code.ex),l(n,65,0,e.mb(n,65,0,e.eb(n,66).transform(u.space$))),l(n,79,0,"accent"),l(n,83,0,u.code.alt),l(n,87,0,"primary"),l(n,89,0,"external-link-alt")},function(l,n){l(n,31,0,e.eb(n,32).target,e.eb(n,32).href,e.eb(n,34).disabled?-1:e.eb(n,34).tabIndex||0,e.eb(n,34).disabled||null,e.eb(n,34).disabled.toString(),"NoopAnimations"===e.eb(n,34)._animationMode),l(n,78,0,e.eb(n,79).disabled||null,"NoopAnimations"===e.eb(n,79)._animationMode),l(n,86,0,e.eb(n,87).disabled?-1:e.eb(n,87).tabIndex||0,e.eb(n,87).disabled||null,e.eb(n,87).disabled.toString(),"NoopAnimations"===e.eb(n,87)._animationMode),l(n,88,0,e.eb(n,89).renderedIconHTML)})}var D=e.Qa("lightbox-example",_,function(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,1,"lightbox-example",[],null,null,null,S,F)),e.Ta(1,245760,null,0,_,[A.a,g.a,G.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=u("y7gG"),K=u("LYzL"),N=u("eXL1"),W=u("C7Lb"),E=u("s8WJ"),V=u("SPdK"),Y=u("+3V+"),z=u("Ho7M"),B=u("dgjn"),H=u("/hyk"),J=u("rXXt"),Q=u("abkR"),$=u("IvSS"),X=u("V3Ng"),q=u("a198"),Z=u("w9fW"),ll=u("vvyD"),nl=u("AFqu"),ul=u("UelK"),el=u("WgBV"),al=u("LxDK"),tl=u("V7OE"),il=u("9LWm"),ol=u("PCNd"),cl=u("rh80");u.d(n,"LightboxExampleModuleNgFactory",function(){return bl});var bl=e.Ra(a,[],function(l){return e.bb([e.cb(512,e.k,e.Ga,[[8,[t.a,i.a,o.a,D]],[3,e.k],e.z]),e.cb(4608,p.m,p.l,[e.w,[2,p.z]]),e.cb(4608,R.c,R.c,[]),e.cb(4608,K.b,K.b,[]),e.cb(4608,N.c,N.c,[N.i,N.e,e.k,N.h,N.f,e.s,e.B,p.d,W.b]),e.cb(5120,N.j,N.k,[N.c]),e.cb(5120,E.c,E.d,[N.c]),e.cb(4608,E.e,E.e,[N.c,e.s,[2,p.g],[2,E.b],E.c,[3,E.e],N.e]),e.cb(4608,V.j,V.i,[V.d,V.g]),e.cb(5120,e.b,function(l,n){return[V.m(l,n)]},[p.d,e.D]),e.cb(1073742336,p.c,p.c,[]),e.cb(1073742336,v.r,v.r,[[2,v.x],[2,v.o]]),e.cb(1073742336,R.d,R.d,[]),e.cb(1073742336,r.b,r.b,[]),e.cb(1073742336,Y.c,Y.c,[]),e.cb(1073742336,z.d,z.d,[]),e.cb(1073742336,B.b,B.b,[]),e.cb(1073742336,W.a,W.a,[]),e.cb(1073742336,K.j,K.j,[[2,K.c]]),e.cb(1073742336,H.b,H.b,[]),e.cb(1073742336,K.s,K.s,[]),e.cb(1073742336,b.c,b.c,[]),e.cb(1073742336,J.b,J.b,[]),e.cb(1073742336,Q.g,Q.g,[]),e.cb(1073742336,$.b,$.b,[]),e.cb(1073742336,N.g,N.g,[]),e.cb(1073742336,E.j,E.j,[]),e.cb(1073742336,X.h,X.h,[]),e.cb(1073742336,q.b,q.b,[]),e.cb(1073742336,s.a,s.a,[]),e.cb(1073742336,Z.j,Z.j,[]),e.cb(1073742336,ll.a,ll.a,[]),e.cb(1073742336,nl.c,nl.c,[]),e.cb(1073742336,V.e,V.e,[]),e.cb(1073742336,ul.b,ul.b,[]),e.cb(1073742336,el.a,el.a,[]),e.cb(1073742336,al.a,al.a,[]),e.cb(1073742336,tl.a,tl.a,[[2,V.k],e.D]),e.cb(1073742336,A.d,A.d,[]),e.cb(1073742336,g.c,g.c,[]),e.cb(1073742336,il.b,il.b,[]),e.cb(1073742336,h.b,h.b,[]),e.cb(1073742336,T.f,T.f,[]),e.cb(1073742336,ol.a,ol.a,[]),e.cb(1073742336,a,a,[]),e.cb(256,q.a,{separatorKeyCodes:[cl.f]},[]),e.cb(1024,v.m,function(){return[[{path:"",component:_}]]},[])])})}}]);