"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[702],{7914:(v,c,i)=>{i.d(c,{D:()=>u,a:()=>l});const l=["1:00","1:30","2:00","2:30","3:00","3:30","4:00","4:30","5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","00:00","00:30"],u=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},7702:(v,c,i)=>{i.r(c),i.d(c,{PayoutsModule:()=>M});var l=i(6895),u=i(2912),Z=i(7914),t=i(4650),_=i(6557);let g=(()=>{class o{constructor(e){this.httpdataService=e}getUnpaidTutors(){return this.httpdataService.get("payments/getAllUnpaidTutors")}getUnpaidTutorDetailsById(e){return this.httpdataService.get(`payments/getAllUnpaidSchedulesByTutorid/${e}`)}getTutorProfilebyTutorId(e){return this.httpdataService.get(`tutorProfile/userId/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.L))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=i(8396),y=i(805),m=i(5593),h=i(1740),r=i(433),T=i(1989);function A(o,n){if(1&o&&(t.TgZ(0,"div")(1,"p")(2,"span",15),t._uU(3,"Name : "),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"span",15),t._uU(7,"Email : "),t.qZA(),t._uU(8),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.AsE("",e.tutorProfileDetails.firstName," ",e.tutorProfileDetails.lastName,""),t.xp6(4),t.Oqu(e.tutorProfileDetails.email)}}function P(o,n){1&o&&(t.TgZ(0,"tr"),t._UZ(1,"th",25),t.TgZ(2,"th"),t._uU(3,"Student"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Email"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Slots"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Amount"),t.qZA()())}function f(o,n){if(1&o&&(t.TgZ(0,"div",30)(1,"div")(2,"h5"),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()),2&o){const e=n.$implicit,a=t.oxw(2);t.xp6(3),t.hij("",t.xi3(4,3,e.date,"MMM d, y")," "),t.xp6(3),t.AsE("",a.timeValues[e.from]," - ",a.timeValues[e.to],"")}}function C(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr",26)(1,"td")(2,"p-checkbox",27),t.NdJ("ngModelChange",function(s){t.CHM(e);const p=t.oxw();return t.KtG(p.selectedPayouts=s)})("onChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSelection())}),t.qZA()(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",28),t.YNc(9,f,7,6,"div",29),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA()()}if(2&o){const e=n.$implicit,a=t.oxw();t.xp6(2),t.Q6J("value",e)("ngModel",a.selectedPayouts),t.xp6(2),t.AsE(" ",e.student.firstName," ",e.student.lastName," "),t.xp6(2),t.hij(" ",e.student.email," "),t.xp6(3),t.Q6J("ngForOf",e.slots),t.xp6(2),t.hij(" ",e.amount," ")}}let b=(()=>{class o{constructor(e,a,s){this.activatedRoute=e,this.payoutsService=a,this.router=s,this.tutorId="",this.payoutDetails=[],this.selectedPayouts=[],this.totalAmount=0,this.serviceFee=20,this.totalAmountTobePaid=0,this.timeValues=Z.a}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.tutorId=e.id}),this.getUnpaidTutorDetails(),this.getTutorProfile()}getTutorProfile(){this.payoutsService.getTutorProfilebyTutorId(this.tutorId).subscribe(e=>{this.tutorProfileDetails=e.data,this.totalAmountCalculator()})}getUnpaidTutorDetails(){this.payoutsService.getUnpaidTutorDetailsById(this.tutorId).subscribe(e=>{this.payoutDetails=e,this.selectedPayouts=e})}totalAmountCalculator(){this.totalAmount=0;for(let e=0;e<this.selectedPayouts.length;e++)this.totalAmount=this.selectedPayouts[e].amount+this.totalAmount;this.totalAmountToBePaidCalculator()}totalAmountToBePaidCalculator(){console.log(this.serviceFee),0!==this.totalAmount&&(this.totalAmountTobePaid=this.totalAmount-this.serviceFee/100*this.totalAmount)}onSelection(){this.totalAmountCalculator()}navigateToPayment(){this.router.navigate(["admin/payout/payment"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(g),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payout-details"]],decls:47,vars:9,consts:[[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"mentor-widget"],[1,"user-info-left","align-items-center"],[4,"ngIf"],[1,"user-info-right","align-items-center"],[1,"label-color"],[1,"p-inputgroup"],["type","number","pInputText","",3,"ngModel","ngModelChange"],["type","button","pButton","","pRipple","","icon","pi pi-check","styleClass","p-button-success",3,"click"],[1,"total-amount"],[1,"user-info-right"],["pButton","","pRipple","","type","button","label","Procced To payment",1,"p-button-raised",3,"disabled","click"],["responsiveLayout","scroll",3,"value","rowHover"],["pTemplate","header"],["pTemplate","body"],[2,"width","3rem"],[1,"p-selectable-row"],[3,"value","ngModel","ngModelChange","onChange"],[1,"d-flex","wrap"],["class","accept m-1 p-2",4,"ngFor","ngForOf"],[1,"accept","m-1","p-2"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Tutor Payout"),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"li",5)(10,"a",6),t._uU(11,"Payouts"),t.qZA()(),t.TgZ(12,"li",7),t._uU(13,"Tutor Payout"),t.qZA()()()()(),t.TgZ(14,"div")(15,"div",8)(16,"div",9)(17,"h4"),t._uU(18,"Tutor Details"),t.qZA()(),t.TgZ(19,"div",10)(20,"div",11)(21,"div",12),t.YNc(22,A,9,3,"div",13),t.qZA(),t.TgZ(23,"div",14)(24,"div")(25,"p")(26,"span",15),t._uU(27,"Amount : "),t.qZA(),t._uU(28),t.qZA(),t.TgZ(29,"p"),t._uU(30,"Service Fee (%)"),t.qZA(),t.TgZ(31,"div",16)(32,"input",17),t.NdJ("ngModelChange",function(p){return a.serviceFee=p}),t.qZA(),t.TgZ(33,"button",18),t.NdJ("click",function(){return a.totalAmountToBePaidCalculator()}),t.qZA()()()()(),t._UZ(34,"hr"),t.TgZ(35,"div",12)(36,"div")(37,"h3",15),t._uU(38,"Total Amount Be Paid"),t.qZA(),t.TgZ(39,"h1",19),t._uU(40),t.qZA()()(),t.TgZ(41,"div",20)(42,"button",21),t.NdJ("click",function(){return a.navigateToPayment()}),t.qZA()()()(),t.TgZ(43,"div")(44,"p-table",22),t.YNc(45,P,10,0,"ng-template",23),t.YNc(46,C,12,7,"ng-template",24),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("routerLink","/admin/dashboard"),t.xp6(3),t.Q6J("routerLink","/admin/payout"),t.xp6(12),t.Q6J("ngIf",a.tutorProfileDetails),t.xp6(6),t.Oqu(a.totalAmount),t.xp6(4),t.Q6J("ngModel",a.serviceFee),t.xp6(8),t.hij("$ ",a.totalAmountTobePaid,""),t.xp6(2),t.Q6J("disabled",0===a.selectedPayouts.length),t.xp6(2),t.Q6J("value",a.payoutDetails)("rowHover",!0))},dependencies:[l.sg,l.O5,u.yS,d.iA,y.jx,m.Hq,h.o,r.Fj,r.wV,r.JJ,r.On,T.XZ,l.uU],styles:[".label-color[_ngcontent-%COMP%]{color:gray}.total-amount[_ngcontent-%COMP%]{color:#0a4d0a}"]}),o})();function U(o,n){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Tutor "),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Email "),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Actions"),t.qZA()())}function x(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",12),t.NdJ("click",function(){const p=t.CHM(e).$implicit,S=t.oxw();return t.KtG(S.navigateToPayoutDetails(p._id))}),t._uU(7,"View Details "),t._UZ(8,"i",13),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(2),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.email)}}const q=[{path:"",component:(()=>{class o{constructor(e,a){this.payoutsService=e,this.router=a,this.unpaidTutors=[]}ngOnInit(){this.getAllUnpaidTutors()}getAllUnpaidTutors(){this.payoutsService.getUnpaidTutors().subscribe(e=>{this.unpaidTutors=e,console.log(e)})}navigateToPayoutDetails(e){this.router.navigate(["admin/payout/details"],{queryParams:{id:e}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payouts"]],decls:16,vars:2,consts:[[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[3,"value"],["dt1",""],["pTemplate","header"],["pTemplate","body"],["pButton","","pRipple","",1,"p-button-text",3,"click"],[1,"pi","pi-chevron-right","m-1"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Payouts"),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"li",7),t._uU(10,"Payouts"),t.qZA()()()()(),t.TgZ(11,"div")(12,"p-table",8,9),t.YNc(14,U,7,0,"ng-template",10),t.YNc(15,x,9,3,"ng-template",11),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("routerLink","/admin/dashboard"),t.xp6(5),t.Q6J("value",a.unpaidTutors))},dependencies:[u.yS,d.iA,y.jx,m.Hq]}),o})()},{path:"details",component:b},{path:"payment",component:(()=>{class o{constructor(e){this.router=e}ngOnInit(){window.addEventListener("beforeunload",function(e){console.log("cond"),e.returnValue="o/",console.log("o/")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tutor-payment"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"tutor-payment works!"),t.qZA())}}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(q),u.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,D,d.U$,m.hJ,h.j,r.u5,T.nD]}),o})()}}]);