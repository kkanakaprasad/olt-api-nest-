"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[540],{540:(J,u,n)=>{n.r(u),n.d(u,{CategoriesModule:()=>R});var C=n(6895),s=n(433),d=n(2912),v=n(7579),t=n(4650),m=n(9886),l=n(2340),_=n(529);let y=(()=>{class o{constructor(e){this.http=e,this.categories=[]}getAllCategories(e){return this.http.get(l.N.BASE_URL+"category?sortBy="+e)}addCategory(e){return this.http.post(l.N.BASE_URL+"category",e)}updateCategory(e,r){return this.http.put(l.N.BASE_URL+"category/"+e,r)}deleteCategory(e){return this.http.delete(l.N.BASE_URL+"category/"+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=n(7185);function b(o,i){1&o&&(t.TgZ(0,"p",17),t._uU(1," Category is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Z(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,b,4,0,"p",16),t.qZA()),2&o){const e=t.oxw();let r;t.xp6(1),t.Q6J("ngIf",null==(r=e.categoryForm.get("categoryName"))?null:r.hasError("required"))}}let h=(()=>{class o{constructor(e,r,a,c){this.modalRef=e,this.modalService=r,this._categoryService=a,this.toastr=c}ngOnInit(){this.onClose=new v.x,this.createForm(),this.data&&this.patchValues()}createForm(){this.categoryForm=new s.cw({id:new s.NI(""),categoryName:new s.NI("",[s.kI.required]),categoryDiscription:new s.NI("")})}patchValues(){this.categoryForm.patchValue({id:this.data?._id,categoryName:this.data?.categoryName,categoryDiscription:this.data?.categoryDiscription})}onSubmit(e){e.valid&&console.log(e.value)}closePopup(){this.modalRef.hide()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.UZ),t.Y36(m.tT),t.Y36(y),t.Y36(f._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-update-category"]],decls:24,vars:3,consts:[[1,"modal-body"],[1,"form-content","p-2"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","categoryName","required","",1,"form-control"],[4,"ngIf"],["formControlName","categoryDiscription",1,"form-control"],[1,"text-end"],["type","submit",1,"btn","btn-primary","btn-sm","btn-right",3,"disabled"],["type","button",1,"btn","btn-light","btn-sm",3,"click"],["class","feild-error",4,"ngIf"],[1,"feild-error"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Add Category"),t.qZA()(),t.TgZ(8,"div",7)(9,"form",8),t.NdJ("ngSubmit",function(){return r.onSubmit(r.categoryForm)}),t.TgZ(10,"div",9)(11,"label"),t._uU(12,"Category"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,Z,2,1,"div",11),t.qZA(),t.TgZ(15,"div",9)(16,"label"),t._uU(17,"Description"),t.qZA(),t._UZ(18,"textarea",12),t.qZA(),t.TgZ(19,"div",13)(20,"button",14),t._uU(21,"Submit"),t.qZA(),t.TgZ(22,"button",15),t.NdJ("click",function(){return r.closePopup()}),t._uU(23,"Close"),t.qZA()()()()()()()()()),2&e){let a;t.xp6(9),t.Q6J("formGroup",r.categoryForm),t.xp6(5),t.Q6J("ngIf",(null==(a=r.categoryForm.get("categoryName"))?null:a.invalid)&&((null==(a=r.categoryForm.get("categoryName"))?null:a.dirty)||(null==(a=r.categoryForm.get("categoryName"))?null:a.touched))),t.xp6(6),t.Q6J("disabled",r.categoryForm.invalid)}},dependencies:[C.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u],styles:[".feild-error[_ngcontent-%COMP%]{color:#eb8989}.btn-right[_ngcontent-%COMP%]{margin-right:12px!important}"]}),o})();var A=n(2887),g=n(8396),U=n(805);function T(o,i){1&o&&(t.TgZ(0,"tr")(1,"th",20),t._uU(2," Category "),t._UZ(3,"p-sortIcon",21),t.qZA(),t.TgZ(4,"th",22),t._uU(5," Description "),t._UZ(6,"p-sortIcon",23),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Actions"),t.qZA()())}function S(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2," No Categories found "),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.uIk("colspan",null==e.categories)}}function N(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr",24)(1,"td")(2,"span",25),t._uU(3,"Category"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"span",25),t._uU(7,"Discription"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"span",25),t._uU(11,"Actions"),t.qZA(),t.TgZ(12,"div",26)(13,"a",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.editCategory(c))}),t._UZ(14,"i",28),t._uU(15," Edit "),t.qZA(),t.TgZ(16,"a",29),t.NdJ("click",function(){const c=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteCategory(c))}),t._UZ(17,"i",28),t._uU(18," Delete "),t.qZA()()()()}if(2&o){const e=i.$implicit;t.xp6(4),t.hij(" ",e.categoryName," "),t.xp6(4),t.hij(" ",e.categoryDiscription," ")}}const x=function(){return[10,25,50]},w=[{path:"",component:(()=>{class o{constructor(e,r,a){this.modalService=e,this._categoryService=r,this.toastr=a}ngOnInit(){this.getAllCategories("categoryName")}openModal(){this.modalRef=this.modalService.show(h),this.modalRef.content.onClose.subscribe(e=>{e&&this.getAllCategories()})}getAllCategories(e){this.categories=[],this._categoryService.getAllCategories(e).subscribe(r=>{r.data.length>0&&(this.categories=r.data)})}categorySort(e){(this.sortOrder!=e.order||this.sortfield!=e.field)&&(this.getAllCategories(e.field),this.sortOrder=e.order,this.sortfield=e.field)}editCategory(e){this.modalRef=this.modalService.show(h,{initialState:{data:e}}),this.modalRef.content.onClose.subscribe(r=>{r&&this.getAllCategories()})}deleteCategory(e){this.modalRef=this.modalService.show(A.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:"Are you sure want to delete?"}}),this.modalRef.content.onClose.subscribe(r=>{r&&this._categoryService.deleteCategory(e._id).subscribe(a=>{a.message&&(this.toastr.success("",a.message),this.getAllCategories())})})}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.tT),t.Y36(y),t.Y36(f._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],decls:25,vars:10,consts:[[1,"page-header"],[1,"row"],[1,"col-md-11"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-1"],[1,"add-btn-align"],["type","button",1,"btn","btn-primary","btn-sm","me-1",3,"click"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],["dataKey","id","styleClass","p-datatable-customers","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","customSort","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","filterDelay","sortFunction"],["dt",""],["pTemplate","header"],["pTemplate","emptymessage"],["pTemplate","body"],["pSortableColumn","categoryName"],["field","Category"],["pSortableColumn","categoryDiscription"],["field","Description"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"actions"],["type","button",1,"btn","btn-sm","bg-success-light","me-2",3,"click"],[1,"fe","fe-pencil"],["type","button",1,"btn","btn-sm","bg-danger-light","me-2",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Categories"),t.qZA(),t.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),t._uU(9,"Dashboard"),t.qZA()(),t.TgZ(10,"li",8),t._uU(11,"Category"),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"button",11),t.NdJ("click",function(){return r.openModal()}),t._uU(15," Add "),t.qZA()()()()(),t.TgZ(16,"div",1)(17,"div",12)(18,"div",13)(19,"div",14)(20,"p-table",15,16),t.NdJ("sortFunction",function(c){return r.categorySort(c)}),t.YNc(22,T,9,0,"ng-template",17),t.YNc(23,S,3,1,"ng-template",18),t.YNc(24,N,19,2,"ng-template",19),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("routerLink","/tutor/dashboard"),t.xp6(12),t.Q6J("value",r.categories)("customSort",!0)("rowHover",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(9,x))("paginator",!0)("filterDelay",0))},dependencies:[d.yS,g.iA,U.jx,g.lQ,g.fz],styles:[".table-overflow[_ngcontent-%COMP%]{overflow-x:hidden}.add-btn-align[_ngcontent-%COMP%]{text-align:right;padding:0 38px 0 0}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.ez,F,s.u5,s.UX,g.U$]}),o})()}}]);