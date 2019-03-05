(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n}\r\n\r\nmain {\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "ppl";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _pages_make_prediction_make_prediction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/make-prediction/make-prediction.component */ "./src/app/pages/make-prediction/make-prediction.component.ts");
/* harmony import */ var _pages_previous_predictions_previous_predictions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/previous-predictions/previous-predictions.component */ "./src/app/pages/previous-predictions/previous-predictions.component.ts");
/* harmony import */ var _pages_prediction_archive_prediction_archive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/prediction-archive/prediction-archive.component */ "./src/app/pages/prediction-archive/prediction-archive.component.ts");
/* harmony import */ var _pages_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/general-info/general-info.component */ "./src/app/pages/general-info/general-info.component.ts");
/* harmony import */ var _pages_config_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/config/config.component */ "./src/app/pages/config/config.component.ts");
/* harmony import */ var _users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/user-login/user-login.component */ "./src/app/users/user-login/user-login.component.ts");
/* harmony import */ var _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/user-profile/user-profile.component */ "./src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_11__["SidenavListComponent"],
                _pages_make_prediction_make_prediction_component__WEBPACK_IMPORTED_MODULE_12__["MakePredictionComponent"],
                _pages_previous_predictions_previous_predictions_component__WEBPACK_IMPORTED_MODULE_13__["PreviousPredictionsComponent"],
                _pages_prediction_archive_prediction_archive_component__WEBPACK_IMPORTED_MODULE_14__["PredictionArchiveComponent"],
                _pages_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_15__["GeneralInfoComponent"],
                _pages_config_config_component__WEBPACK_IMPORTED_MODULE_16__["ConfigComponent"],
                _users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_17__["UserLoginComponent"],
                _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__["RoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"]
            ],
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrapper{\n    height: 100%;\n}\n\n.flex-wrapper{\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC13cmFwcGVye1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n      <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none;\n    color: white;\n}\n\na:hover, a:active{\n    color: lightgray;\n}\n\n.navigation-items{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n@media(max-width: 959px){\n    mat-toolbar{\n        border-radius: 0px;\n    }\n}\n\n.icon\n{\n    font-size: 29px;\n}\n\n.padding-left\n{\n    margin-left: 10px;\n    vertical-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZle1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXZpZ2F0aW9uLWl0ZW1ze1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogOTU5cHgpe1xuICAgIG1hdC10b29sYmFye1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxufVxuXG4uaWNvblxue1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLnBhZGRpbmctbGVmdFxue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon class=\"icon\">menu</mat-icon>\n        </button>\n    </div>\n    <div class=\"padding-left\">\n        <a routerLink=\"/home\">PPL</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\n        <button mat-icon-button (click)=\"generalinfo()\">\n            <mat-icon class=\"icon\">info</mat-icon>\n        </button>\n    </div>\n    <div>\n        <button mat-icon-button (click)=\"generalinfo()\">\n            <mat-icon class=\"icon\">account_circle</mat-icon>\n        </button>\n    </div>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = function () {
            _this.sidenavToggle.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none;\n    color: white;\n}\n\na:hover, a:active{\n    color: lightgray;\n}\n\n.nav-caption{\n    display: inline-block;\n    padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZle1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXYtY2FwdGlvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <h1 matSubheader></h1>\n  <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\n    <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n  </a>\n\n  <a mat-list-item routerLink=\"/makeprediction\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">Make Prediction</span>\n  </a>\n\n  <a mat-list-item routerLink=\"/previousprediction\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">Previous Predictions</span>\n  </a>\n\n  <a mat-list-item routerLink=\"/predictionarchive\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">Prediction Archive</span>\n  </a>\n\n  <a mat-list-item routerLink=\"/config\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">Config</span>\n  </a>\n\n  <a mat-list-item routerLink=\"/generalinfo\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">General Info</span>\n  </a>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        var _this = this;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/pages/config/config.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/config/config.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZy9jb25maWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/config/config.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/config/config.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  config works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/config/config.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/config/config.component.ts ***!
  \**************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/pages/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/pages/config/config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/general-info/general-info.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/general-info/general-info.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/general-info/general-info.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/general-info/general-info.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n  <h4>Your Device Info</h4>\n  <table class=\"table table-hover mt-3\">\n      <tr>\n          <td>Device Model</td>\n          <td>{{deviceInfo.model}}</td>\n      </tr>\n      <tr>\n          <td>Device Platform</td>\n          <td>{{deviceInfo.platform}}</td>\n      </tr>\n      <tr>\n          <td>Device UID</td>\n          <td>{{deviceInfo.uuid}}</td>\n      </tr>\n      <tr>\n          <td>Device Version</td>\n          <td>{{deviceInfo.version}}</td>\n      </tr>\n      <tr>\n          <td>Device Manufacturer</td>\n          <td>{{deviceInfo.manufacturer}}</td>\n      </tr>\n      <tr>\n          <td>Device Serial</td>\n          <td>{{deviceInfo.serial}}</td>\n      </tr>\n  </table>\n  <div class=\"col-md-6 offset-md-3\">\n      <a class=\"col-md-6 offset-md-3 btn btn-primary\" routerLink=\"/\">Home</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/general-info/general-info.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/general-info/general-info.component.ts ***!
  \**************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent() {
    }
    GeneralInfoComponent.prototype.ngOnInit = function () {
        this.deviceInfo = {
            model: device.model,
            platform: device.platform,
            uuid: device.uuid,
            version: device.version,
            manufacturer: device.manufacturer,
            serial: device.serial
        };
    };
    GeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info',
            template: __webpack_require__(/*! ./general-info.component.html */ "./src/app/pages/general-info/general-info.component.html"),
            styles: [__webpack_require__(/*! ./general-info.component.css */ "./src/app/pages/general-info/general-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }} !!\n  </h1>\n\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n    {{item.name}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        this.items = db.collection("items").valueChanges();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/make-prediction/make-prediction.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/make-prediction/make-prediction.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21ha2UtcHJlZGljdGlvbi9tYWtlLXByZWRpY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/make-prediction/make-prediction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/make-prediction/make-prediction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodycontent\">\n  <form (ngSubmit)=\"makePrediction()\" [formGroup]=\"myGroup\">\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Match\" name=\"Match\" [formControl]=\"MatchId\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let item of matches\" [value]=\"item.MatchId\">\n            {{item.Date}} - {{item.TeamA}} vs {{item.TeamB}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"MatchId.hasError('required')\">Please choose a winner</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Winner\" name=\"Winner\" [formControl]=\"Winner\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let team of teams\" [value]=\"team.TeamId\">\n            {{ team.TeamName }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"Winner.hasError('required')\">Please choose a winner</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n\n        <mat-select placeholder=\"Score\" name=\"ddlScore\" [formControl]=\"ddlScore\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let item of Scores\" [value]=\"item.ScoreId\">\n            {{item.FromScore}} - {{item.ToScore}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"ddlScore.hasError('required')\">Please choose a Score</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Wickets\" name=\"ddlWickets\" [formControl]=\"ddlWickets\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let item of Wickets\" [value]=\"item.WicketId\">\n            {{item.FromWicket}} - {{item.ToWicket}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"ddlWickets.hasError('required')\">Please choose Wickets</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Max Runs By\" name=\"MaxyRunsPlayer\" [formControl]=\"MaxyRunsPlayer\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let player of players\" [value]=\"player.PlayerId\">\n            {{ player.PlayerName }} -> ({{player.TeamName}})\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"MaxyRunsPlayer.hasError('required')\">Please choose a player</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Max Wickets By\" name=\"MaxyWicketsPlayer\" [formControl]=\"MaxyWicketsPlayer\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let player of players\" [value]=\"player.PlayerId\">\n            {{ player.PlayerName }} -> ({{player.TeamName}})\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"MaxyWicketsPlayer.hasError('required')\">Please choose a player</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Man of Match\" name=\"ManOfMatch\" [formControl]=\"MOM\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let player of players\" [value]=\"player.PlayerId\">\n            {{ player.PlayerName }} -> ({{player.TeamName}})\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"MOM.hasError('required')\">Please choose a player</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <mat-select placeholder=\"Boundary\" name=\"ddlBoundary\" [formControl]=\"ddlBoundary\" required>\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let item of Boundary\" [value]=\"item.BoundaryId\">\n            {{item.FromBoundary}} - {{item.ToBoundary}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"ddlBoundary.hasError('required')\">Please choose Boundary</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group full-width-container\">\n      <mat-form-field>\n        <input matInput placeholder=\"No of 50's in match\" name=\"Fifties\" [formControl]=\"Fifties\" type=\"number\" required>\n        <mat-error *ngIf=\"Fifties.hasError('required')\">Please enter no of Fifties</mat-error>\n      </mat-form-field>\n    </div>\n    <br />\n    <div class=\"form-group full-width-container\">\n      <button mat-raised-button type=\"submit\" name=\"MakePrediction\" color=\"primary\">Make Prediction</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/make-prediction/make-prediction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/make-prediction/make-prediction.component.ts ***!
  \********************************************************************/
/*! exports provided: MakePredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePredictionComponent", function() { return MakePredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MakePredictionComponent = /** @class */ (function () {
    function MakePredictionComponent(fb) {
        this.myGroup = fb.group({
            'MatchId': [''],
            'Winner': [''],
            'ddlScore': [''],
            'ddlWickets': [''],
            'MaxyRunsPlayer': [''],
            'MaxyWicketsPlayer': [''],
            'MOM': [''],
            'ddlBoundary': [''],
            'Fifties': ['']
        });
        this.MatchId = this.myGroup.controls['MatchId'];
        this.Winner = this.myGroup.controls['Winner'];
        this.ddlScore = this.myGroup.controls['ddlScore'];
        this.ddlWickets = this.myGroup.controls['ddlWickets'];
        this.MaxyRunsPlayer = this.myGroup.controls['MaxyRunsPlayer'];
        this.MaxyWicketsPlayer = this.myGroup.controls['MaxyWicketsPlayer'];
        this.MOM = this.myGroup.controls['MOM'];
        this.ddlBoundary = this.myGroup.controls['ddlBoundary'];
        this.Fifties = this.myGroup.controls['Fifties'];
    }
    MakePredictionComponent.prototype.ngOnInit = function () {
    };
    MakePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-make-prediction',
            template: __webpack_require__(/*! ./make-prediction.component.html */ "./src/app/pages/make-prediction/make-prediction.component.html"),
            styles: [__webpack_require__(/*! ./make-prediction.component.css */ "./src/app/pages/make-prediction/make-prediction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MakePredictionComponent);
    return MakePredictionComponent;
}());



/***/ }),

/***/ "./src/app/pages/prediction-archive/prediction-archive.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/prediction-archive/prediction-archive.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWRpY3Rpb24tYXJjaGl2ZS9wcmVkaWN0aW9uLWFyY2hpdmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/prediction-archive/prediction-archive.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/prediction-archive/prediction-archive.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  prediction-archive works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/prediction-archive/prediction-archive.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/prediction-archive/prediction-archive.component.ts ***!
  \**************************************************************************/
/*! exports provided: PredictionArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionArchiveComponent", function() { return PredictionArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PredictionArchiveComponent = /** @class */ (function () {
    function PredictionArchiveComponent() {
    }
    PredictionArchiveComponent.prototype.ngOnInit = function () {
    };
    PredictionArchiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prediction-archive',
            template: __webpack_require__(/*! ./prediction-archive.component.html */ "./src/app/pages/prediction-archive/prediction-archive.component.html"),
            styles: [__webpack_require__(/*! ./prediction-archive.component.css */ "./src/app/pages/prediction-archive/prediction-archive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PredictionArchiveComponent);
    return PredictionArchiveComponent;
}());



/***/ }),

/***/ "./src/app/pages/previous-predictions/previous-predictions.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/previous-predictions/previous-predictions.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXZpb3VzLXByZWRpY3Rpb25zL3ByZXZpb3VzLXByZWRpY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/previous-predictions/previous-predictions.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/previous-predictions/previous-predictions.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  previous-predictions works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/previous-predictions/previous-predictions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/previous-predictions/previous-predictions.component.ts ***!
  \******************************************************************************/
/*! exports provided: PreviousPredictionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousPredictionsComponent", function() { return PreviousPredictionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreviousPredictionsComponent = /** @class */ (function () {
    function PreviousPredictionsComponent() {
    }
    PreviousPredictionsComponent.prototype.ngOnInit = function () {
    };
    PreviousPredictionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-previous-predictions',
            template: __webpack_require__(/*! ./previous-predictions.component.html */ "./src/app/pages/previous-predictions/previous-predictions.component.html"),
            styles: [__webpack_require__(/*! ./previous-predictions.component.css */ "./src/app/pages/previous-predictions/previous-predictions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreviousPredictionsComponent);
    return PreviousPredictionsComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_make_prediction_make_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/make-prediction/make-prediction.component */ "./src/app/pages/make-prediction/make-prediction.component.ts");
/* harmony import */ var _pages_previous_predictions_previous_predictions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/previous-predictions/previous-predictions.component */ "./src/app/pages/previous-predictions/previous-predictions.component.ts");
/* harmony import */ var _pages_prediction_archive_prediction_archive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/prediction-archive/prediction-archive.component */ "./src/app/pages/prediction-archive/prediction-archive.component.ts");
/* harmony import */ var _pages_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/general-info/general-info.component */ "./src/app/pages/general-info/general-info.component.ts");
/* harmony import */ var _pages_config_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/config/config.component */ "./src/app/pages/config/config.component.ts");










var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'makeprediction', component: _pages_make_prediction_make_prediction_component__WEBPACK_IMPORTED_MODULE_5__["MakePredictionComponent"] },
    { path: 'previousprediction', component: _pages_previous_predictions_previous_predictions_component__WEBPACK_IMPORTED_MODULE_6__["PreviousPredictionsComponent"] },
    { path: 'predictionarchive', component: _pages_prediction_archive_prediction_archive_component__WEBPACK_IMPORTED_MODULE_7__["PredictionArchiveComponent"] },
    { path: 'generalinfo', component: _pages_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInfoComponent"] },
    { path: 'config', component: _pages_config_config_component__WEBPACK_IMPORTED_MODULE_9__["ConfigComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/users/user-login/user-login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/user-login/user-login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user-login/user-login.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/user-login/user-login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/users/user-login/user-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/user-login/user-login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent() {
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/users/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/users/user-login/user-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/users/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/users/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {}
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\ppl\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map