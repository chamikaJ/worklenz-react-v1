"use strict";(self.webpackChunkworklenz=self.webpackChunkworklenz||[]).push([[592],{12996:(O,f,c)=>{c.d(f,{my:()=>D,A2:()=>I});var t=c(65879),m=c(78645),d=c(59773),u=c(49388),o=c(96814),p=c(8324),g=c(62831);let z=(()=>{var n;class a{}return(n=a).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.ez]}),a})();const _=function(n){return{$implicit:n}};function x(n,a){if(1&n&&t.GkF(0,3),2&n){const e=t.oxw();t.Q6J("ngTemplateOutlet",e.nzValueTemplate)("ngTemplateOutletContext",t.VKq(2,_,e.nzValue))}}function h(n,a){if(1&n&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.displayInt)}}function T(n,a){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.displayDecimal)}}function v(n,a){if(1&n&&(t.ynx(0),t.YNc(1,h,2,1,"span",4),t.YNc(2,T,2,1,"span",5),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.displayInt),t.xp6(1),t.Q6J("ngIf",e.displayDecimal)}}function y(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.nzTitle)}}function V(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.nzPrefix)}}function S(n,a){if(1&n&&(t.TgZ(0,"span",6),t.YNc(1,V,2,1,"ng-container",1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzPrefix)}}function N(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.nzSuffix)}}function C(n,a){if(1&n&&(t.TgZ(0,"span",7),t.YNc(1,N,2,1,"ng-container",1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzSuffix)}}let w=(()=>{var n;class a{constructor(i){this.locale_id=i,this.displayInt="",this.displayDecimal=""}ngOnChanges(){this.formatNumber()}formatNumber(){const i="number"==typeof this.nzValue?".":(0,o.dv)(this.locale_id,o.wE.Decimal),s=String(this.nzValue),[l,r]=s.split(i);this.displayInt=l,this.displayDecimal=r?`${i}${r}`:""}}return(n=a).\u0275fac=function(i){return new(i||n)(t.Y36(t.soG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nz-statistic-number"]],inputs:{nzValue:"nzValue",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatisticNumber"],features:[t.TTD],decls:3,vars:2,consts:[[1,"ant-statistic-content-value"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ant-statistic-content-value-int",4,"ngIf"],["class","ant-statistic-content-value-decimal",4,"ngIf"],[1,"ant-statistic-content-value-int"],[1,"ant-statistic-content-value-decimal"]],template:function(i,s){1&i&&(t.TgZ(0,"span",0),t.YNc(1,x,1,4,"ng-container",1),t.YNc(2,v,3,2,"ng-container",2),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",s.nzValueTemplate),t.xp6(1),t.Q6J("ngIf",!s.nzValueTemplate))},dependencies:[o.O5,o.tP],encapsulation:2,changeDetection:0}),a})(),D=(()=>{var n;class a{constructor(i,s){this.cdr=i,this.directionality=s,this.nzValueStyle={},this.dir="ltr",this.destroy$=new m.x}ngOnInit(){this.directionality.change?.pipe((0,d.R)(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return(n=a).\u0275fac=function(i){return new(i||n)(t.Y36(t.sBO),t.Y36(u.Is,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nz-statistic"]],hostAttrs:[1,"ant-statistic"],hostVars:2,hostBindings:function(i,s){2&i&&t.ekj("ant-statistic-rtl","rtl"===s.dir)},inputs:{nzPrefix:"nzPrefix",nzSuffix:"nzSuffix",nzTitle:"nzTitle",nzValue:"nzValue",nzValueStyle:"nzValueStyle",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatistic"],decls:6,vars:6,consts:[[1,"ant-statistic-title"],[4,"nzStringTemplateOutlet"],[1,"ant-statistic-content",3,"ngStyle"],["class","ant-statistic-content-prefix",4,"ngIf"],[3,"nzValue","nzValueTemplate"],["class","ant-statistic-content-suffix",4,"ngIf"],[1,"ant-statistic-content-prefix"],[1,"ant-statistic-content-suffix"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.YNc(1,y,2,1,"ng-container",1),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,S,2,1,"span",3),t._UZ(4,"nz-statistic-number",4),t.YNc(5,C,2,1,"span",5),t.qZA()),2&i&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",s.nzTitle),t.xp6(1),t.Q6J("ngStyle",s.nzValueStyle),t.xp6(1),t.Q6J("ngIf",s.nzPrefix),t.xp6(1),t.Q6J("nzValue",s.nzValue)("nzValueTemplate",s.nzValueTemplate),t.xp6(1),t.Q6J("ngIf",s.nzSuffix))},dependencies:[o.O5,o.PC,p.f,w],encapsulation:2,changeDetection:0}),a})(),I=(()=>{var n;class a{}return(n=a).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.vT,o.ez,g.ud,p.T,z]}),a})()}}]);