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

/***/ "./src/app/api/in-memory-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/api/in-memory-data.service.ts ***!
  \***********************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function (reqInfo) {
        var assets = [
            { name: "Truck 1001", lat: 52.223053, long: -102.636453, },
            { name: "Truck 1002", lat: 56.886763, long: -126.822081, },
            { name: "Truck 1003", lat: 19.795191, long: -98.738315, },
            { name: "Truck 1004", lat: 44.578680, long: -79.705038, },
            { name: "Truck 1005", lat: 45.355503, long: -75.771873, },
            { name: "Truck 1006", lat: 31.307487, long: -97.240748, },
            { name: "Truck 1007", lat: 41.866756, long: -87.783695, },
        ];
        return { assets: assets };
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app d-flex justify-content-between align-items-stretch\">\n    <app-map #appMap class=\"app__map ml-3 mr-4 flex-grow-1 bd-highlight\"></app-map>\n    <app-assets #assets class=\"app__assets mr-3\" (addAssetEmit)=\"newAsset.showModal()\"\n        (delAssetEmit)=\"delAsset.showModal($event)\" (assetClickEmit)=\"appMap.showCoords($event)\"></app-assets>\n</div>\n\n<app-asset-new #newAsset (newAssetEmit)=\"assets.assets.push($event)\"></app-asset-new>\n\n<app-asset-delete #delAsset (confirmDeleteEmit)=\"assets.deleteAsset($event); appMap.ngOnInit()\"></app-asset-delete>"

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
        this.title = 'TrackEnsureTest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _assets_comp_assets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets-comp/assets.component */ "./src/app/assets-comp/assets.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _asset_new_asset_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset-new/asset-new.component */ "./src/app/asset-new/asset-new.component.ts");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/highlight.pipe */ "./src/app/pipes/highlight.pipe.ts");
/* harmony import */ var _asset_delete_asset_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset-delete/asset-delete.component */ "./src/app/asset-delete/asset-delete.component.ts");
/* harmony import */ var _api_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/in-memory-data.service */ "./src/app/api/in-memory-data.service.ts");
/* harmony import */ var _directives_coord_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/coord-validator.directive */ "./src/app/directives/coord-validator.directive.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _assets_comp_assets_component__WEBPACK_IMPORTED_MODULE_8__["AssetsComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
                _asset_new_asset_new_component__WEBPACK_IMPORTED_MODULE_10__["NewAssetComponent"],
                _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_11__["HighlightPipe"],
                _asset_delete_asset_delete_component__WEBPACK_IMPORTED_MODULE_12__["AssetDeleteComponent"],
                _directives_coord_validator_directive__WEBPACK_IMPORTED_MODULE_14__["CoordValidatorDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_api_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset-delete/asset-delete.component.css":
/*!*********************************************************!*\
  !*** ./src/app/asset-delete/asset-delete.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LWRlbGV0ZS9hc3NldC1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/asset-delete/asset-delete.component.html":
/*!**********************************************************!*\
  !*** ./src/app/asset-delete/asset-delete.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header py-2 pl-3 bg-light\">\n    <h6 class=\"modal-title\">Warning</h6>\n  </div>\n  <div class=\"modal-body\">\n    <p class=\"mb-0\">Are you sure you want do delete {{assetForDelete.name}}?</p>\n  </div>\n  <div class=\"modal-footer mb-0 py-2 form-group\">\n    <button type=\"button\" class=\"btn btn-warning text-white\" (click)=\"modal.close()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-danger text-white\" (click)=\"confirmDelete()\">Delete</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/asset-delete/asset-delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/asset-delete/asset-delete.component.ts ***!
  \********************************************************/
/*! exports provided: AssetDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDeleteComponent", function() { return AssetDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var AssetDeleteComponent = /** @class */ (function () {
    function AssetDeleteComponent(modalService) {
        this.modalService = modalService;
        this.confirmDeleteEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AssetDeleteComponent.prototype.ngOnInit = function () {
    };
    AssetDeleteComponent.prototype.showModal = function (asset) {
        this.assetForDelete = asset;
        this.modal = this.modalService.open(this.content, { centered: true, backdropClass: 'dark-backdrop' });
    };
    AssetDeleteComponent.prototype.confirmDelete = function () {
        this.confirmDeleteEmit.emit(this.assetForDelete);
        this.modal.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AssetDeleteComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssetDeleteComponent.prototype, "confirmDeleteEmit", void 0);
    AssetDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-delete',
            template: __webpack_require__(/*! ./asset-delete.component.html */ "./src/app/asset-delete/asset-delete.component.html"),
            styles: [__webpack_require__(/*! ./asset-delete.component.css */ "./src/app/asset-delete/asset-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AssetDeleteComponent);
    return AssetDeleteComponent;
}());



/***/ }),

/***/ "./src/app/asset-new/asset-new.component.css":
/*!***************************************************!*\
  !*** ./src/app/asset-new/asset-new.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    width: 300px;\n}\n\n.form-control.ng-invalid.ng-touched,\n.form-control.ng-invalid.ng-dirty {\n    border: 2px solid #e36672;\n}\n\n.modal-footer.form-group {\n    margin-bottom: 0;\n}\n\n.form__label {\n    margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtbmV3L2Fzc2V0LW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hc3NldC1uZXcvYXNzZXQtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkLFxuLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLWRpcnR5IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTM2NjcyO1xufVxuXG4ubW9kYWwtZm9vdGVyLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/asset-new/asset-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/asset-new/asset-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal novalidate>\n  <div class=\"modal-header py-2 pl-3 bg-light\">\n    <h6 class=\"modal-title\">Add new asset</h6>\n  </div>\n  <form #assetForm=\"ngForm\" (ngSubmit)=\"onSubmit(assetForm.value)\">\n    <div class=\"modal-body\">\n      <div class=\"form-group d-flex justify-content-between align-items-center\">\n        <label class=\"form__label\" for=\"name\">Name</label>\n        <input ngModel class=\"form-control\" id=\"name\" name=\"name\" type=\"text\" required />\n      </div>\n      <div class=\"form-group d-flex justify-content-between align-items-center\">\n        <label class=\"form__label\" for=\"lat\">Latitude</label>\n        <input ngModel class=\"form-control\" id=\"lat\" name=\"lat\" required\n          coordValidator=\"^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?)$\" />\n      </div>\n      <div class=\"form-group d-flex justify-content-between align-items-center\">\n        <label class=\"form__label\" for=\"long\">Longitude</label>\n        <input ngModel class=\"form-control\" id=\"long\" name=\"long\" required\n          coordValidator=\"^[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$\" />\n      </div>\n    </div>\n    <div class=\"modal-footer py-2 form-group\">\n      <button type=\"button\" class=\"btn btn-warning text-white\" (click)=\"modal.close('Close click')\">Cancel</button>\n      <button [disabled]=\"!assetForm.form.valid\" type=\"submit\" class=\"btn btn-success text-white\">Add</button>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/asset-new/asset-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/asset-new/asset-new.component.ts ***!
  \**************************************************/
/*! exports provided: NewAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAssetComponent", function() { return NewAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");




var NewAssetComponent = /** @class */ (function () {
    function NewAssetComponent(modalService) {
        this.modalService = modalService;
        this.newAssetEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewAssetComponent.prototype.ngOnInit = function () {
    };
    NewAssetComponent.prototype.showModal = function () {
        this.modal = this.modalService.open(this.content, { centered: true, backdropClass: 'dark-backdrop' });
    };
    NewAssetComponent.prototype.onSubmit = function (asset) {
        this.newAssetEmit.emit(new _model_asset__WEBPACK_IMPORTED_MODULE_3__["Asset"](asset.name, +asset.lat, +asset.long));
        this.modal.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewAssetComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewAssetComponent.prototype, "newAssetEmit", void 0);
    NewAssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-new',
            template: __webpack_require__(/*! ./asset-new.component.html */ "./src/app/asset-new/asset-new.component.html"),
            styles: [__webpack_require__(/*! ./asset-new.component.css */ "./src/app/asset-new/asset-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NewAssetComponent);
    return NewAssetComponent;
}());



/***/ }),

/***/ "./src/app/assets-comp/assets.component.css":
/*!**************************************************!*\
  !*** ./src/app/assets-comp/assets.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assets {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    height: 100%;\n}\n\n.assets__control {\n    display: -webkit-box;\n    display: flex;\n}\n\n.assets__search {\n    resize: none;\n    height: 38px;\n}\n\n.assets__content {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    overflow: hidden;\n}\n\n.assets__inner {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    height: 100%;\n}\n\n.assets__list {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n\n    /* height: 100%; */\n    overflow-y: scroll;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXRzLWNvbXAvYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix1QkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHVCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFjO1lBQWQsY0FBYzs7SUFFZCxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0cy1jb21wL2Fzc2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzc2V0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hc3NldHNfX2NvbnRyb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hc3NldHNfX3NlYXJjaCB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGhlaWdodDogMzhweDtcbn1cblxuLmFzc2V0c19fY29udGVudCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFzc2V0c19faW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXNzZXRzX19saXN0IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/assets-comp/assets.component.html":
/*!***************************************************!*\
  !*** ./src/app/assets-comp/assets.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"assets\">\n\n  <div class=\"my-4 assets__control\">\n    <textarea class=\"assets__search mr-3 pl-2 rounded\" name=\"\" id=\"\" cols=\"30\" rows=\"1\" placeholder=\"Search asset...\" ngModel\n      #model=\"ngModel\" (ngModelChange)=\"searchAssets(model.value)\"></textarea>\n    <button class=\"btn btn-success\" (click)=\"addAssetEmit.emit()\">Add Asset</button>\n  </div>\n\n  <div class=\"assets__content mb-3 border border-dark rounded-lg\">\n    <div class=\"assets__inner\">\n      <h6 class=\"assets__header mb-0 py-2 pl-2 bg-light\">Assets</h6>\n      <div class=\"assets__list\">\n        <li class=\"list-group\">\n          <ul *ngFor=\"let asset of assetsForShow\" class=\"list-group-item list-group-item-action\"\n            (click)=\"assetClickEmit.emit(this.asset)\">\n            <span class=\"assets__name\" innerHTML=\"{{asset.name | highlight : model.value}}\"></span>\n            <button type=\"button\" class=\"close text-danger\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" (click)=\"delAssetEmit.emit(asset)\">&times;</span>\n            </button>\n          </ul>\n        </li>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/assets-comp/assets.component.ts":
/*!*************************************************!*\
  !*** ./src/app/assets-comp/assets.component.ts ***!
  \*************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.searchLength = 0;
        this.addAssetEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delAssetEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.assetClickEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataService.getData().subscribe(function (a) {
            _this.assetsForShow = _this.assets = a;
        });
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent.prototype.deleteAsset = function (asset) {
        this.assets.splice(this.assets.indexOf(asset), 1);
        if (this.assetsForShow != this.assets)
            this.assetsForShow.splice(this.assetsForShow.indexOf(asset), 1);
    };
    AssetsComponent.prototype.searchAssets = function (searchValue) {
        if (!searchValue) {
            this.assetsForShow = this.assets;
        }
        else {
            searchValue = searchValue.toLowerCase();
            if (searchValue.length < this.searchLength) {
                this.setAssetsForShow(this.assets, searchValue);
            }
            else {
                this.setAssetsForShow(this.assetsForShow, searchValue);
            }
        }
        this.searchLength = searchValue.length;
    };
    AssetsComponent.prototype.setAssetsForShow = function (source, searchValue) {
        this.assetsForShow = source.filter(function (item) {
            return item.name.toLowerCase().includes(searchValue);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssetsComponent.prototype, "addAssetEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssetsComponent.prototype, "delAssetEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssetsComponent.prototype, "assetClickEmit", void 0);
    AssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/assets-comp/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/assets-comp/assets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/directives/coord-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/coord-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: coordValidator, CoordValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordValidator", function() { return coordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordValidatorDirective", function() { return CoordValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



function coordValidator(nameRe) {
    return function (control) {
        var allowed = nameRe.test(control.value);
        return allowed ? null : { 'wrongCoord': { value: control.value } };
    };
}
var CoordValidatorDirective = /** @class */ (function () {
    function CoordValidatorDirective() {
    }
    CoordValidatorDirective_1 = CoordValidatorDirective;
    CoordValidatorDirective.prototype.validate = function (control) {
        return this.coord ? coordValidator(new RegExp(this.coord, 'i'))(control) : null;
    };
    var CoordValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('coordValidator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CoordValidatorDirective.prototype, "coord", void 0);
    CoordValidatorDirective = CoordValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[coordValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CoordValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoordValidatorDirective);
    return CoordValidatorDirective;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    height: 100%;\n}\n\n.map__header {\n    height: 38px;\n    margin: 24px 0;\n}\n\n.map__content {\n    width: 100%;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    overflow: hidden;\n}\n\n.map__content__inner {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n}\n\n.map__inner {\n    width: 100%;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQWM7WUFBZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix1QkFBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFjO1lBQWQsY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1hcF9faGVhZGVyIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgbWFyZ2luOiAyNHB4IDA7XG59XG5cbi5tYXBfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYXBfX2NvbnRlbnRfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLm1hcF9faW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map pb-3\">\n    <h3 class=\"map__header\">Assets Map</h3>\n    <div class=\"map__content border border-dark rounded-lg\">\n        <div class=\"map__content__inner\">\n                <h6 class=\"map__title mb-0 py-2 pl-2 bg-light\">Map</h6>\n                <div #map class=\"map__inner\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.mapStyle = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.googleMap = new google.maps.Map(this.mapDiv.nativeElement, {
            center: { lat: 58.074966, lng: -97.524072 },
            zoom: 4,
            styles: this.mapStyle
        });
        if (this.marker)
            this.marker.setMap(null);
    };
    MapComponent.prototype.showCoords = function (asset) {
        var coords = { "lat": asset.lat, "lng": asset.long };
        if (this.marker) {
            this.marker.setPosition(coords);
            this.marker.setLabel({ text: asset.name });
        }
        else {
            this.marker = new google.maps.Marker({
                position: coords,
                map: this.googleMap,
                title: 'Hello World!',
                label: {
                    text: asset.name,
                },
                icon: {
                    labelOrigin: new google.maps.Point(16, 50),
                    url: '../../assets/icons8-marker-48.png',
                    scaledSize: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                },
            });
        }
        this.googleMap.setCenter(coords);
        this.googleMap.setZoom(12);
        this.marker.setMap(this.googleMap);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapComponent.prototype, "mapDiv", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/model/asset.ts":
/*!********************************!*\
  !*** ./src/app/model/asset.ts ***!
  \********************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
var Asset = /** @class */ (function () {
    function Asset(name, lat, long) {
        this.name = name;
        this.lat = lat;
        this.long = long;
    }
    return Asset;
}());



/***/ }),

/***/ "./src/app/pipes/highlight.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/highlight.pipe.ts ***!
  \*****************************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi');
        return value.replace(re, "<mark>" + args + "</mark>");
    };
    HighlightPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightPipe);
    return HighlightPipe;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
    }
    DataService.prototype.getData = function () {
        return this.httpClient.get('api/assets');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Vitalii\Desktop\Logistic-test-task-master\Logistic-test-task-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map