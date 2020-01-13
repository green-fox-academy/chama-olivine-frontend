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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_hall_hall_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hall/hall.component */ "./src/app/components/hall/hall.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_dungeon_mock_dungeon_mock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dungeon-mock/dungeon-mock.component */ "./src/app/components/dungeon-mock/dungeon-mock.component.ts");
/* harmony import */ var _components_inventory_mock_inventory_mock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventory-mock/inventory-mock.component */ "./src/app/components/inventory-mock/inventory-mock.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_single_hero_page_single_hero_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/single-hero-page/single-hero-page.component */ "./src/app/components/single-hero-page/single-hero-page.component.ts");











var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '404', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'login', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    {
        path: 'heroes-hall', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
        children: [{
                // path: '', component: HeroesHallMockComponent,
                path: '', component: _components_hall_hall_component__WEBPACK_IMPORTED_MODULE_1__["HallComponent"],
            }]
    }, {
        path: 'heroes-hall/:id', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
        children: [{
                path: 'character', component: _components_single_hero_page_single_hero_page_component__WEBPACK_IMPORTED_MODULE_10__["SingleHeroPageComponent"],
            }, {
                path: 'inventory', component: _components_inventory_mock_inventory_mock_component__WEBPACK_IMPORTED_MODULE_8__["InventoryMockComponent"],
            }, {
                path: 'dungeon', component: _components_dungeon_mock_dungeon_mock_component__WEBPACK_IMPORTED_MODULE_7__["DungeonMockComponent"],
            }]
    },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    enableTracing: false // set true for debugging
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _services_heroes_service_heroeshall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/heroes-service/heroeshall.service */ "./src/app/services/heroes-service/heroeshall.service.ts");
/* harmony import */ var _components_single_hero_page_single_hero_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/single-hero-page/single-hero-page.component */ "./src/app/components/single-hero-page/single-hero-page.component.ts");
/* harmony import */ var _services_single_page_hero_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/single-page/hero-Service */ "./src/app/services/single-page/hero-Service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hello-world/hello-world.component */ "./src/app/components/hello-world/hello-world.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_heroes_hall_mock_heroes_hall_mock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/heroes-hall-mock/heroes-hall-mock.component */ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_inventory_mock_inventory_mock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/inventory-mock/inventory-mock.component */ "./src/app/components/inventory-mock/inventory-mock.component.ts");
/* harmony import */ var _components_dungeon_mock_dungeon_mock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dungeon-mock/dungeon-mock.component */ "./src/app/components/dungeon-mock/dungeon-mock.component.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/avatar/avatar.component */ "./src/app/components/avatar/avatar.component.ts");
/* harmony import */ var _components_hall_hall_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/hall/hall.component */ "./src/app/components/hall/hall.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_10__["HelloWorldComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__["LoginPageComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
                _components_heroes_hall_mock_heroes_hall_mock_component__WEBPACK_IMPORTED_MODULE_13__["HeroesHallMockComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                _components_inventory_mock_inventory_mock_component__WEBPACK_IMPORTED_MODULE_15__["InventoryMockComponent"],
                _components_dungeon_mock_dungeon_mock_component__WEBPACK_IMPORTED_MODULE_16__["DungeonMockComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_single_hero_page_single_hero_page_component__WEBPACK_IMPORTED_MODULE_2__["SingleHeroPageComponent"],
                _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_20__["AvatarComponent"],
                _components_hall_hall_component__WEBPACK_IMPORTED_MODULE_21__["HallComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [
                _services_api_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"],
                _services_single_page_hero_Service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
                _services_heroes_service_heroeshall_service__WEBPACK_IMPORTED_MODULE_1__["HeroeshallService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/avatar/avatar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img src=\"{{hero.smallImage}}\" class=\"card-img-top\" *ngIf=\"hero\">\r\n  <div class=\"card-footer\" *ngIf=\"hero\">\r\n    <p class=\"card-title\">{{hero.name}}</p>\r\n    <p class=\"card-title finalWords\">\"{{hero.finalWords}}\"</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin: 2% auto;\n  font-size: 1.2rem; }\n\n.card-footer {\n  padding: 0%;\n  text-align: center; }\n\n.card-img-top-plus {\n  width: 100%;\n  height: 15vw;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.finalWords {\n  font-size: 1rem;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXIvQzpcXFVzZXJzXFxHYWxpY3pcXERlc2t0b3BcXGdyZWVuZm94XFxHYWxpY3o1NTVcXGNoYW1hLW9saXZpbmUtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhclxcYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcC1wbHVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1dnc7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmZpbmFsV29yZHMge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.ts ***!
  \*******************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_heroModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/heroModel */ "./src/app/models/heroModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(router) {
        this.router = router;
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent.prototype.navigateHero = function (id, name) {
        this.router.navigate(["heroes-hall/" + id + "/character", { id: id }], { queryParams: { name: name } });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_heroModel__WEBPACK_IMPORTED_MODULE_1__["HeroModel"])
    ], AvatarComponent.prototype, "hero", void 0);
    AvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/components/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.scss */ "./src/app/components/avatar/avatar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/components/dungeon-mock/dungeon-mock.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dungeon-mock/dungeon-mock.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dungeon-mock works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/dungeon-mock/dungeon-mock.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dungeon-mock/dungeon-mock.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHVuZ2Vvbi1tb2NrL2R1bmdlb24tbW9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dungeon-mock/dungeon-mock.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dungeon-mock/dungeon-mock.component.ts ***!
  \*******************************************************************/
/*! exports provided: DungeonMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonMockComponent", function() { return DungeonMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DungeonMockComponent = /** @class */ (function () {
    function DungeonMockComponent() {
    }
    DungeonMockComponent.prototype.ngOnInit = function () {
    };
    DungeonMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeon-mock',
            template: __webpack_require__(/*! ./dungeon-mock.component.html */ "./src/app/components/dungeon-mock/dungeon-mock.component.html"),
            styles: [__webpack_require__(/*! ./dungeon-mock.component.scss */ "./src/app/components/dungeon-mock/dungeon-mock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DungeonMockComponent);
    return DungeonMockComponent;
}());



/***/ }),

/***/ "./src/app/components/hall/hall.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hall/hall.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-avatar class=\"card col-sm-2\" *ngFor=\"let hero of myHeroes\" [hero]=\"hero\" (click)=\"navigateHero(hero.id, hero.name)\"></app-avatar>\r\n</div>"

/***/ }),

/***/ "./src/app/components/hall/hall.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/hall/hall.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 2%; }\n\n.card {\n  margin: 1%;\n  padding: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYWxsL0M6XFxVc2Vyc1xcR2FsaWN6XFxEZXNrdG9wXFxncmVlbmZveFxcR2FsaWN6NTU1XFxjaGFtYS1vbGl2aW5lLWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoYWxsXFxoYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFsbC9oYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgcGFkZGluZzogMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hall/hall.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hall/hall.component.ts ***!
  \***************************************************/
/*! exports provided: HallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallComponent", function() { return HallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_heroes_service_heroeshall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/heroes-service/heroeshall.service */ "./src/app/services/heroes-service/heroeshall.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HallComponent = /** @class */ (function () {
    function HallComponent(router, srv) {
        this.router = router;
        this.srv = srv;
        this.myHeroes = [];
        this.userId = '1';
    }
    HallComponent.prototype.ngOnInit = function () {
        this.addHero();
    };
    HallComponent.prototype.addHero = function () {
        var _this = this;
        this.srv.getHeroes(this.userId).subscribe(function (res) {
            _this.myHeroes = res;
        });
    };
    HallComponent.prototype.navigateHero = function (id, name) {
        this.router.navigate(["heroes-hall/" + id + "/character", { id: id }], { queryParams: { name: name } });
    };
    HallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-hall',
            template: __webpack_require__(/*! ./hall.component.html */ "./src/app/components/hall/hall.component.html"),
            styles: [__webpack_require__(/*! ./hall.component.scss */ "./src/app/components/hall/hall.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_heroes_service_heroeshall_service__WEBPACK_IMPORTED_MODULE_1__["HeroeshallService"]])
    ], HallComponent);
    return HallComponent;
}());



/***/ }),

/***/ "./src/app/components/hello-world/hello-world.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/hello-world/hello-world.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n"

/***/ }),

/***/ "./src/app/components/hello-world/hello-world.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/hello-world/hello-world.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVsbG8td29ybGQvaGVsbG8td29ybGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/hello-world/hello-world.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hello-world/hello-world.component.ts ***!
  \*****************************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");



var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent(api) {
        this.api = api;
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getTitle().subscribe(function (data) {
            _this.title = data.title;
        });
    };
    HelloWorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/components/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.scss */ "./src/app/components/hello-world/hello-world.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/heroes-hall-mock/heroes-hall-mock.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heroList\">\r\n  <p>Heroes</p>\r\n  <div *ngFor=\"let hero of myHeroes\" (click)=\"navigateHero(hero.id, hero.name)\">\r\n    <p>\r\n      This hero id is: {{hero.id}} <br>This hero name is {{hero.name}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/heroes-hall-mock/heroes-hall-mock.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyb2VzLWhhbGwtbW9jay9oZXJvZXMtaGFsbC1tb2NrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/heroes-hall-mock/heroes-hall-mock.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeroesHallMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesHallMockComponent", function() { return HeroesHallMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeroesHallMockComponent = /** @class */ (function () {
    function HeroesHallMockComponent(router) {
        this.router = router;
        this.myHeroes = [];
    }
    HeroesHallMockComponent.prototype.ngOnInit = function () {
    };
    HeroesHallMockComponent.prototype.navigateHero = function (id, name) {
        this.router.navigate(["heroes-hall/" + id + "/character", { id: id }], { queryParams: { name: name } });
    };
    HeroesHallMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes-hall-mock',
            template: __webpack_require__(/*! ./heroes-hall-mock.component.html */ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.html"),
            styles: [__webpack_require__(/*! ./heroes-hall-mock.component.scss */ "./src/app/components/heroes-hall-mock/heroes-hall-mock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeroesHallMockComponent);
    return HeroesHallMockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar [selectedHeroId]=\"selectedHeroId\" [heroName]=\"heroName\"></app-nav-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.subscribe(function (event) {
            if (event) {
                if (_this.route.snapshot.paramMap.get('id') != null) {
                    _this.selectedHeroId = Number(_this.route.snapshot.paramMap.get('id'));
                }
            }
        });
        this.route.queryParams.subscribe(function (params) {
            _this.heroName = params['name'];
        });
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory-mock/inventory-mock.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/inventory-mock/inventory-mock.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inventory-mock works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/inventory-mock/inventory-mock.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/inventory-mock/inventory-mock.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vY2svaW52ZW50b3J5LW1vY2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/inventory-mock/inventory-mock.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/inventory-mock/inventory-mock.component.ts ***!
  \***********************************************************************/
/*! exports provided: InventoryMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryMockComponent", function() { return InventoryMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryMockComponent = /** @class */ (function () {
    function InventoryMockComponent() {
    }
    InventoryMockComponent.prototype.ngOnInit = function () {
    };
    InventoryMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-mock',
            template: __webpack_require__(/*! ./inventory-mock.component.html */ "./src/app/components/inventory-mock/inventory-mock.component.html"),
            styles: [__webpack_require__(/*! ./inventory-mock.component.scss */ "./src/app/components/inventory-mock/inventory-mock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryMockComponent);
    return InventoryMockComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm loginNav\">\r\n  <h1 class=\"navbar-text\">Hero Manager</h1>\r\n  <li class=\"navbar-nav ml-auto\">\r\n    <a type=\"button\" class=\"nav-link\" href=\"/register\">Register</a>\r\n  </li>\r\n</nav>\r\n<main class=\"my-form loginPage\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"card\">\r\n      <h1 class=\"card-header text-center\">Login</h1>\r\n      <form name=\"my-form\">\r\n        <div class=\"form-group col-sm-10\">\r\n          <input class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"usernameInput\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group col-sm-10\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"passwordInput\" name=\"password\">\r\n        </div>\r\n        <div class=\"form-group buttons col-sm-10\">\r\n          <a class=\"nav-link\" (click)=\"navigateRegister()\">Registration</a>\r\n          <button (click)=\"sendLogin()\" class=\"btn btn-primary\">Login</button>\r\n        </div>\r\n        <div class=\"form-group col-sm-10 bottomMessage\" role=\"alert\">\r\n          <p class=\"alert-heading\">{{loginMessage}}</p>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginPage .row, .loginNav .navbar-text {\n  margin: 0px; }\n\n.navbar {\n  background-color: whitesmoke;\n  border-bottom: 1px solid black; }\n\n.card-header {\n  background-color: whitesmoke; }\n\n.nav-link {\n  color: black; }\n\n.card {\n  width: 420px;\n  margin-top: 5%;\n  box-shadow: 0px 0px 10px 0px #000; }\n\n.form-group > p {\n  color: red;\n  font-size: 0.95em; }\n\n.form-group > h3, .bottomMessage > p {\n  text-align: center;\n  margin: 10px 0px; }\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.btn {\n  width: 49%; }\n\n.buttons > a, .form-group {\n  margin: 0px auto; }\n\n.form-group > h3 {\n  color: green; }\n\n.form-group {\n  margin-top: 5%; }\n\n.bottomMessage {\n  height: 31px;\n  margin-top: 0px; }\n\n.loginNav a {\n  border: 1px solid black; }\n\n@media only screen and (max-width: 416px) {\n  .loginPage .card {\n    width: 90%; }\n  .loginNav > li {\n    visibility: hidden;\n    position: absolute;\n    color: green; }\n  .loginNav {\n    -webkit-box-pack: center;\n            justify-content: center; }\n  h1 {\n    font-size: 1.5em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL0M6XFxVc2Vyc1xcR2FsaWN6XFxEZXNrdG9wXFxncmVlbmZveFxcR2FsaWN6NTU1XFxjaGFtYS1vbGl2aW5lLWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDRCQUNGLEVBQUE7O0FBRUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVcsRUFBQTtFQUdiO0lBQ0Usd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblBhZ2UgLnJvdywgLmxvZ2luTmF2IC5uYXZiYXItdGV4dCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjMDAwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCA+IHAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwID4gaDMsIC5ib3R0b21NZXNzYWdlID4gcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLmJ1dHRvbnMgPiBhLCAuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgPiBoMyB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5ib3R0b21NZXNzYWdlIHtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubG9naW5OYXYgYSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE2cHgpIHtcclxuICAubG9naW5QYWdlIC5jYXJkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAubG9naW5OYXYgPiBsaSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjpncmVlbjtcclxuICB9XHJcblxyXG4gIC5sb2dpbk5hdiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginPageComponent.prototype.sendLogin = function () {
        var _this = this;
        if (this.usernameInput && this.passwordInput) {
            this.loginService.login(this.usernameInput, this.passwordInput).subscribe(function (response) {
                _this.userID = response.id;
                _this.router.navigate(["/heroes-hall/"]);
            }, function (error) {
                _this.loginMessage = error;
            });
        }
        else {
            this.loginMessage = 'Please add a username and a password!';
        }
    };
    LoginPageComponent.prototype.navigateRegister = function () {
        this.router.navigate(["register"]);
    };
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/components/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm desktop\">\r\n  <a class=\"navbar-brand\" routerLink=\"/heroes-hall\" routerLinkActive=\"active\">Heroes hall</a>\r\n  <div class=\"menu\">\r\n    <ul class=\"navbar-nav mr-auto mt-lg-0\" *ngIf=\"isSelected()\">\r\n      <li class=\"navbar-text\">\r\n        <p>{{heroName}}</p>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navToPage('character')\">Character</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navToPage('inventory')\">Inventory</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navToPage('dungeon')\">Dungeon</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <a class=\"nav-link logout\" routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logout()\">Logout</a>\r\n</nav>\r\n<nav class=\"navbar mobil\">\r\n  <a class=\"heroes\" routerLink=\"/heroes-hall\" routerLinkActive=\"active\"><img src=\"../../../assets/heroeshall.svg\"></a>\r\n  <div class=\"menu\" *ngIf=\"isSelected()\">\r\n    <a class=\"item\" (click)=\"navToPage('character')\"><img src=\"../../../assets/character.svg\"></a>\r\n    <a class=\"item\" (click)=\"navToPage('inventory')\"><img src=\"../../../assets/inventory.svg\"></a>\r\n    <a class=\"item\" (click)=\"navToPage('dungeon')\"><img src=\"../../../assets/dungeon.svg\"></a>\r\n  </div>\r\n  <a class=\"logout\" routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logout()\"><img src=\"../../../assets/logout.svg\"></a>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: whitesmoke;\n  border-bottom: 1px solid black; }\n\n.navbar-brand {\n  font-size: 2rem;\n  color: black;\n  padding: 0.5rem; }\n\n.nav-item {\n  margin: auto 0px; }\n\n.menu {\n  width: 80%; }\n\n.navbar p {\n  margin: auto 0px; }\n\n.navbar-text {\n  margin: auto 1rem;\n  font-size: 1.5rem;\n  color: black; }\n\n.nav-link {\n  border: 1px solid black;\n  padding: 0.5rem;\n  color: black;\n  cursor: pointer; }\n\n.nav-link {\n  margin: auto 1rem; }\n\n.logout {\n  margin-right: 0px; }\n\n@media only screen and (min-width: 578px) {\n  .mobil {\n    display: none; } }\n\n@media only screen and (max-width: 577px) {\n  .desktop {\n    display: none; }\n  .mobil,\n  .menu {\n    display: -webkit-box;\n    display: flex; }\n  .heroes,\n  .menu {\n    margin: 5% 0; }\n  .menu {\n    max-width: 65%;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  .item {\n    margin: 0 auto; }\n  .logout {\n    margin: 5% 5% 5% 0;\n    max-width: 10%; }\n  img {\n    height: 5vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0M6XFxVc2Vyc1xcR2FsaWN6XFxEZXNrdG9wXFxncmVlbmZveFxcR2FsaWN6NTU1XFxjaGFtYS1vbGl2aW5lLWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUVmOztJQUVFLG9CQUFhO0lBQWIsYUFBYSxFQUFBO0VBRWY7O0lBRUUsWUFBWSxFQUFBO0VBRWQ7SUFDRSxjQUFjO0lBQ2QseUJBQThCO1lBQTlCLDhCQUE4QixFQUFBO0VBRWhDO0lBQ0UsY0FBYyxFQUFBO0VBRWhCO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQUVoQjtJQUNFLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luOiBhdXRvIDBweDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5uYXZiYXIgcCB7XHJcbiAgbWFyZ2luOiBhdXRvIDBweDtcclxufVxyXG5cclxuLm5hdmJhci10ZXh0IHtcclxuICBtYXJnaW46IGF1dG8gMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgbWFyZ2luOiBhdXRvIDFyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3OHB4KSB7XHJcbiAgLm1vYmlsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3N3B4KSB7XHJcbiAgLmRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1vYmlsLFxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5oZXJvZXMsXHJcbiAgLm1lbnUge1xyXG4gICAgbWFyZ2luOiA1JSAwO1xyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLml0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5sb2dvdXQge1xyXG4gICAgbWFyZ2luOiA1JSA1JSA1JSAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMCU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.selectedHeroId = 0;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.isSelected = function () {
        return !isNaN(this.selectedHeroId);
    };
    NavBarComponent.prototype.navToPage = function (page) {
        this.router.navigate(["/heroes-hall/" + this.selectedHeroId + "/" + page, { id: this.selectedHeroId }], { queryParams: { name: this.heroName } });
    };
    NavBarComponent.prototype.logout = function () {
        console.log('logged off'); // mock logout service call
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NavBarComponent.prototype, "selectedHeroId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavBarComponent.prototype, "heroName", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/components/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n<h2>{{ message }}</h2>\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        this.title = '404';
        this.message = 'Not Found';
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm registerNav\">\r\n  <h1 class=\"navbar-text\">Hero Manager</h1>\r\n  <li class=\"navbar-nav ml-auto\">\r\n    <a type=\"button\" class=\"nav-link\" (click)=\"cancelRegistration()\">Login</a>\r\n  </li>\r\n</nav>\r\n<main class=\"my-form registerPage\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"card\">\r\n      <h1 class=\"card-header text-center\">Register</h1>\r\n      <form name=\"my-form\">\r\n        <div class=\"form-group col-sm-10\">\r\n          <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\" required>\r\n          <p for=\"username\" class=\"col-form-label\" *ngIf=\"usernameError\">{{usernameError}}</p>\r\n        </div>\r\n        <div class=\"form-group col-sm-10\">\r\n          <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\r\n          <p for=\"password\" class=\"col-form-label\" *ngIf=\"passwordError\">{{passwordError}}</p>\r\n        </div>\r\n        <div class=\"form-group col-sm-10\">\r\n          <input type=\"password\" name=\"confirmPsw\" class=\"form-control\" [(ngModel)]=\"confirmPsw\" placeholder=\"Confirm Password\" required>\r\n          <p for=\"confirmPsw\" class=\"col-form-label\" *ngIf=\"confirmPswError\">{{confirmPswError}}</p>\r\n        </div>\r\n        <div class=\" buttons col-sm-10\">\r\n          <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancelRegistration()\">Cancel</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"registerUser()\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-10 bottomMessage\" role=\"alert\">\r\n          <h5 class=\"alert-heading\">{{messageSuccess}}</h5>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding-top: 20px; }\n\n.registerPage .row, .registerNav .navbar-text {\n  margin: 0px; }\n\n.navbar {\n  background-color: whitesmoke;\n  border-bottom: 1px solid black; }\n\n.card-header {\n  background-color: whitesmoke; }\n\n.nav-link {\n  color: black; }\n\n.card {\n  width: 420px;\n  margin-top: 5%;\n  box-shadow: 0px 0px 10px 0px #000; }\n\n.form-group {\n  min-height: 73px; }\n\n.form-group > p {\n  color: red;\n  font-size: 0.85em; }\n\n.bottomMessage > h5 {\n  text-align: center;\n  margin: 0px auto;\n  padding: 1rem;\n  color: green; }\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.btn {\n  width: 49%; }\n\n.buttons > a, .form-group, .buttons {\n  margin: 0px auto; }\n\n.bottomMessage {\n  height: 51px;\n  margin: 0px auto; }\n\n.registerNav a {\n  border: 1px solid black; }\n\n@media only screen and (max-width: 416px) {\n  .registerPage .card {\n    width: 90%; }\n  .registerNav > li {\n    visibility: hidden;\n    position: absolute; }\n  .registerNav {\n    -webkit-box-pack: center;\n            justify-content: center; }\n  h1 {\n    font-size: 1.5em; }\n  h5 {\n    font-size: 1em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXEdhbGljelxcRGVza3RvcFxcZ3JlZW5mb3hcXEdhbGljejU1NVxcY2hhbWEtb2xpdmluZS1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDRCQUNGLEVBQUE7O0FBRUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSx3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJQYWdlIC5yb3csIC5yZWdpc3Rlck5hdiAubmF2YmFyLXRleHQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzAwMDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1pbi1oZWlnaHQ6IDczcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwID4gcCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxufVxyXG5cclxuLmJvdHRvbU1lc3NhZ2UgPiBoNSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLmJ1dHRvbnMgPiBhLCAuZm9ybS1ncm91cCwgLmJ1dHRvbnMge1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5ib3R0b21NZXNzYWdlIHtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLnJlZ2lzdGVyTmF2IGEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNnB4KSB7XHJcbiAgLnJlZ2lzdGVyUGFnZSAuY2FyZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyTmF2ID4gbGkge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyTmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register/register.service */ "./src/app/services/register/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.checkUsername = function (username) {
        return (username !== undefined && username.length > 0);
    };
    RegisterComponent.prototype.myValidateFunction = function (username) {
        var pattern = /^[A-Za-z0-9]\w{0,}$/;
        return (pattern.test(username));
    };
    RegisterComponent.prototype.checkPassword = function (password) {
        return (password !== undefined && password.length > 7);
    };
    RegisterComponent.prototype.checkConfirmPassword = function (password, passwordAgain) {
        return (password !== undefined && passwordAgain !== undefined && password === passwordAgain);
    };
    RegisterComponent.prototype.checkStatus = function (usernameStatus, passwordStatus, confirmPasswordStatus) {
        return (usernameStatus === true && passwordStatus === true && confirmPasswordStatus === true);
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.checkUsername(this.username) === false) {
            this.usernameError = 'Username must be at least 1 character';
            this.usernameStatus = false;
        }
        else if (this.myValidateFunction(this.username) === false) {
            this.usernameError = "Username can not contain special characters";
            this.usernameStatus = false;
        }
        else {
            this.usernameError = '';
            this.usernameStatus = true;
        }
        if (this.checkPassword(this.password) === false) {
            this.passwordError = 'Password must be at least 8 characters';
            this.passwordStatus = false;
        }
        else {
            this.passwordError = '';
            this.passwordStatus = true;
        }
        if (this.checkConfirmPassword(this.password, this.confirmPsw) === false) {
            this.confirmPswError = 'Password confirmation must be the same';
            this.confirmPasswordStatus = false;
        }
        else {
            this.confirmPswError = '';
            this.confirmPasswordStatus = true;
        }
        if (this.checkStatus(this.usernameStatus, this.passwordStatus, this.confirmPasswordStatus) === true) {
            this.registerService.sendRegister(this.username, this.password, this.confirmPsw).subscribe(function (response) {
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1500);
                _this.messageSuccess = 'Your account has been created.';
            }, function (error) {
                if (error) {
                    _this.usernameError = 'Username already exist';
                }
            });
        }
    };
    RegisterComponent.prototype.cancelRegistration = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_register_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/single-hero-page/single-hero-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/single-hero-page/single-hero-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='Container' *ngIf='hero'>\r\n  <div class='row'>\r\n    <div class='imageAndName col-3'>\r\n      <img src={{hero.bigImage}} />\r\n      <div class='heroName'>\r\n        <h3>{{hero.name}}</h3>\r\n      </div>\r\n    </div>\r\n    <div class='col-9'>\r\n      <div class='row Activity'>\r\n        <p class='col-3'>Activity:</p>\r\n        <div class=\"btn-group btn-group-toggle col-9\" data-toggle=\"buttons\">\r\n          <label class=\"btn btn-outline-secondary active\">\r\n            <input type=\"radio\" name=\"options\" id=\"option1\" checked> Rest\r\n          </label>\r\n          <label class=\"btn btn-outline-secondary\">\r\n            <input type=\"radio\" name=\"options\" id=\"option2\"> Train\r\n          </label>\r\n          <label class=\"btn btn-outline-secondary\">\r\n            <input type=\"radio\" name=\"options\" id=\"option3\"> Scout\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class='row compartments'>\r\n        <div class='col-4 details'>\r\n          <p>Level: {{hero.level}}</p>\r\n          <p class='br'>Exp needed: {{hero.neededExp}}</p>\r\n          <p>Stats:</p>\r\n          <p>Max health: {{hero.healthMaxUpgraded}}</p>\r\n          <p class='br'>Health: {{hero.healthActUpgraded}}</p>\r\n          <p>Attack: {{hero.attackMinUpgraded}} - {{hero.attackMaxUpgraded}}</p>\r\n          <p>Defense: {{hero.defenseUpgraded}}</p>\r\n        </div>\r\n        <div class='col-4 inventory'>\r\n          <!-- inventory -->\r\n        </div>\r\n        <div class='col-4 itemDetails'>\r\n          <!-- itemDetails -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/single-hero-page/single-hero-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/single-hero-page/single-hero-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageAndName > .heroName {\n  text-align: center; }\n\n.compartments > div {\n  height: 65vh; }\n\n.details, .Activity > p {\n  font-size: 3vh; }\n\np {\n  margin-bottom: 0px; }\n\n.br {\n  margin-bottom: 3vh; }\n\n.btn-group {\n  height: 4vh; }\n\n.btn-group > * {\n  font-size: 2vh;\n  color: black;\n  border-color: black;\n  border-radius: 0px; }\n\n.Container {\n  margin: 3vh; }\n\n.heroName > h3 {\n  margin-top: 3vh;\n  font-size: 4vh; }\n\n.imageAndName {\n  height: 75vh; }\n\nimg {\n  height: 60vh;\n  width: 100%;\n  background: no-repeat;\n  background-position: center;\n  background-size: cover; }\n\n.Activity {\n  height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtaGVyby1wYWdlL0M6XFxVc2Vyc1xcR2FsaWN6XFxEZXNrdG9wXFxncmVlbmZveFxcR2FsaWN6NTU1XFxjaGFtYS1vbGl2aW5lLWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaW5nbGUtaGVyby1wYWdlXFxzaW5nbGUtaGVyby1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLWhlcm8tcGFnZS9zaW5nbGUtaGVyby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQW5kTmFtZSA+IC5oZXJvTmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29tcGFydG1lbnRzID4gZGl2e1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG5cclxuLmRldGFpbHMsIC5BY3Rpdml0eSA+IHAge1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJye1xyXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiAqIHtcclxuICBmb250LXNpemU6IDJ2aDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5Db250YWluZXIge1xyXG4gIG1hcmdpbjogM3ZoO1xyXG59XHJcblxyXG4uaGVyb05hbWUgPiBoMyB7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4uaW1hZ2VBbmROYW1le1xyXG4gIGhlaWdodDogNzV2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uQWN0aXZpdHl7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/single-hero-page/single-hero-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/single-hero-page/single-hero-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: SingleHeroPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleHeroPageComponent", function() { return SingleHeroPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_single_page_hero_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/single-page/hero-Service */ "./src/app/services/single-page/hero-Service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleHeroPageComponent = /** @class */ (function () {
    function SingleHeroPageComponent(_getSingleHero, _route) {
        var _this = this;
        this._getSingleHero = _getSingleHero;
        this._route = _route;
        this._id = Number(this._route.snapshot.paramMap.get('id'));
        this._getSingleHero.getHero(this._id)
            .subscribe(function (data) { return _this._hero = data; });
    }
    SingleHeroPageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SingleHeroPageComponent.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        enumerable: true,
        configurable: true
    });
    SingleHeroPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-single-hero-page',
            template: __webpack_require__(/*! ./single-hero-page.component.html */ "./src/app/components/single-hero-page/single-hero-page.component.html"),
            styles: [__webpack_require__(/*! ./single-hero-page.component.scss */ "./src/app/components/single-hero-page/single-hero-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_single_page_hero_Service__WEBPACK_IMPORTED_MODULE_1__["HeroService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleHeroPageComponent);
    return SingleHeroPageComponent;
}());



/***/ }),

/***/ "./src/app/models/heroModel.ts":
/*!*************************************!*\
  !*** ./src/app/models/heroModel.ts ***!
  \*************************************/
/*! exports provided: HeroModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroModel", function() { return HeroModel; });
var HeroModel = /** @class */ (function () {
    function HeroModel(champion) {
        this._id = champion.id;
        this._name = champion.name;
        this._experience = champion.experience;
        this._level = champion.level;
        this._healthmax = champion.healthmax;
        this._healthact = champion.healthact;
        this._attackmax = champion.attackmax;
        this._attackmin = champion.attackmin;
        this._defense = champion.defense;
        this._inventory = champion.inventory || [];
        this._bigImage = champion.bigImage;
        this._smallImage = champion.smallImage;
        this._finalwords = champion.finalWords;
        this._healthMaxUpgraded = this.healthMaxUpgrade();
        this._healthActUpgraded = this.healthActUpgrade();
        this._attackMaxUpgraded = this.attackMaxUpgrade();
        this._attackMinUpgraded = this.attackMinUpgrade();
        this._defenseUpgraded = this.defenseUpgrade();
        this._neededExp = this.calcNeededExp(this.level);
    }
    Object.defineProperty(HeroModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "experience", {
        get: function () {
            return this._experience;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "neededExp", {
        get: function () {
            return this._neededExp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "healthmax", {
        get: function () {
            return this._healthmax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "healthact", {
        get: function () {
            return this._healthact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "attackmin", {
        get: function () {
            return this._attackmin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "attackmax", {
        get: function () {
            return this._attackmax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "defense", {
        get: function () {
            return this._defense;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "inventory", {
        get: function () {
            return this._inventory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "bigImage", {
        get: function () {
            return this._bigImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "healthMaxUpgraded", {
        get: function () {
            return this._healthMaxUpgraded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "healthActUpgraded", {
        get: function () {
            return this._healthActUpgraded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "attackMaxUpgraded", {
        get: function () {
            return this._attackMaxUpgraded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "attackMinUpgraded", {
        get: function () {
            return this._attackMinUpgraded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "defenseUpgraded", {
        get: function () {
            return this._defenseUpgraded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "smallImage", {
        get: function () {
            return this._smallImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "finalWords", {
        get: function () {
            return this._finalwords;
        },
        enumerable: true,
        configurable: true
    });
    HeroModel.prototype.calcNeededExp = function (level) {
        var calced = 0;
        for (var i = 0; i <= level + 1; i++) {
            calced += i;
        }
        return calced - this._experience;
    };
    HeroModel.prototype.activeItemsModifiers = function () {
        return this.inventory.filter(function (equipment) { return equipment.active === true; }).map(function (element) {
            return element.modifiers;
        });
    };
    HeroModel.prototype.filteringAndSum = function (x) {
        return x.filter(function (element) { return element; }).reduce(function (a, b) { return a + b; }, 0);
    };
    HeroModel.prototype.healthMaxUpgrade = function () {
        var healthMaxModifiers = this.filteringAndSum(this.activeItemsModifiers().map(function (item) {
            if (item['attributeName'] === 'healthmax') {
                return item['value'];
            }
        }));
        return this._healthmax + healthMaxModifiers;
    };
    HeroModel.prototype.healthActUpgrade = function () {
        var healthActModifiers = this.filteringAndSum(this.activeItemsModifiers().map(function (item) {
            if (item['attributeName'] === 'healthact') {
                return item['value'];
            }
        }));
        return this._healthact + healthActModifiers;
    };
    HeroModel.prototype.attackMaxUpgrade = function () {
        var attackMaxModifiers = this.filteringAndSum(this.activeItemsModifiers().map(function (item) {
            if (item['attributeName'] === 'attackmax') {
                return item['value'];
            }
        }));
        return this._attackmax + attackMaxModifiers;
    };
    HeroModel.prototype.attackMinUpgrade = function () {
        var attackMinModifiers = this.filteringAndSum(this.activeItemsModifiers().map(function (item) {
            if (item['attributeName'] === 'attackmin') {
                return item['value'];
            }
        }));
        return this._attackmin + attackMinModifiers;
    };
    HeroModel.prototype.defenseUpgrade = function () {
        var defenseModifiers = this.filteringAndSum(this.activeItemsModifiers().map(function (item) {
            if (item['attributeName'] === 'defense') {
                return item['value'];
            }
        }));
        return this._defense + defenseModifiers;
    };
    return HeroModel;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: LoginResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function() { return LoginResponse; });
var LoginResponse = /** @class */ (function () {
    function LoginResponse(id) {
        this._id = id;
    }
    Object.defineProperty(LoginResponse.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return LoginResponse;
}());



/***/ }),

/***/ "./src/app/models/register.ts":
/*!************************************!*\
  !*** ./src/app/models/register.ts ***!
  \************************************/
/*! exports provided: RegisterResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResponse", function() { return RegisterResponse; });
var RegisterResponse = /** @class */ (function () {
    function RegisterResponse(id) {
        this._id = id;
    }
    Object.defineProperty(RegisterResponse.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return RegisterResponse;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.prototype.getTitle = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            title: '¡Hola Jorge!'
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/heroes-service/heroeshall.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/heroes-service/heroeshall.service.ts ***!
  \***************************************************************/
/*! exports provided: HeroeshallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeshallService", function() { return HeroeshallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_heroModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/heroModel */ "./src/app/models/heroModel.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var HeroeshallService = /** @class */ (function () {
    function HeroeshallService(http) {
        this.http = http;
    }
    HeroeshallService.prototype.getHeroes = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            userid: userId,
        });
        var options = {
            headers: headers,
        };
        var request = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hostname + "/heroes", options);
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            var list = [];
            res.forEach(function (e) { return list.push(new _models_heroModel__WEBPACK_IMPORTED_MODULE_3__["HeroModel"](e)); });
            return list;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    };
    HeroeshallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeroeshallService);
    return HeroeshallService;
}());



/***/ }),

/***/ "./src/app/services/login-service/login-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/login-service/login-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this._acceptedResponses = [
            'Incorrect Username and/or Password!',
            'Please enter a Username and a Password!'
        ];
    }
    LoginService.prototype.handleError = function (error) {
        if (this._acceptedResponses.indexOf(error.error.message) > -1) {
            return error.error.message;
        }
        else {
            return 'Unknown error, please try again later';
        }
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = {
            headers: headers,
            observe: 'response'
        };
        var request = this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].hostname + "/login", {
            'username': "" + username,
            'password': "" + password,
        }, options);
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return new _models_login__WEBPACK_IMPORTED_MODULE_1__["LoginResponse"](res['body'].userId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_this.handleError(err));
        }));
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/register/register.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/register/register.service.ts ***!
  \*******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_models_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/register */ "./src/app/models/register.ts");







var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.sendRegister = function (username, password, confirmPsw) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            observe: 'response'
        };
        var request = this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hostname + "/register", {
            'username': username,
            'password': password,
            'confirmPsw': confirmPsw,
        }, options);
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return new src_app_models_register__WEBPACK_IMPORTED_MODULE_6__["RegisterResponse"](res['body']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/single-page/hero-Service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/single-page/hero-Service.ts ***!
  \******************************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_heroModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/heroModel */ "./src/app/models/heroModel.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var HeroService = /** @class */ (function () {
    function HeroService(http, router) {
        this.http = http;
        this.router = router;
    }
    HeroService.prototype.handleError = function (err) {
        this.router.navigate(["heroes-hall"]);
    };
    HeroService.prototype.getHero = function (heroId) {
        var _this = this;
        var request = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hostname + "/hero/" + heroId);
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            return new _models_heroModel__WEBPACK_IMPORTED_MODULE_2__["HeroModel"](res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_this.handleError(err));
        }));
    };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeroService);
    return HeroService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hostname: 'https://angular-dungeoncrawler.herokuapp.com',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Galicz\Desktop\greenfox\Galicz555\chama-olivine-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map