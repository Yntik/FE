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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <nav  class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n      <div class=\"alert alert-dismissible alert-secondary\">\r\n        Clockwise Clockware.\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<router-outlet>\r\n </router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/paypalapi-service */ "./src/app/service/paypalapi-service.ts");
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/local-storage-service */ "./src/app/service/local-storage-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(storage, router, paypal) {
        this.storage = storage;
        this.router = router;
        this.paypal = paypal;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_2__["PaypalapiService"]]
        }),
        __metadata("design:paramtypes", [_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_2__["PaypalapiService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/paypalapi-service */ "./src/app/service/paypalapi-service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/local-storage-service */ "./src/app/service/local-storage-service.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"] },
    { path: 'notfound', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
                _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_7__["PaypalapiService"],
                _service_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <div class=\"jumbotron\">\r\n        <h1><p class=\"text-info\"> Clockwise Clockware. </p> Ваши часы всегда будут идти в правильном направлении</h1>\r\n        <div style=\"width: 300px\">\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"pushorder()\" *ngIf=\"!success\">\r\n                <label class=\"col-form-label\">Имя </label>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Имя\" formControlName=\"name\">\r\n                <label class=\"col-form-label\">Email </label>\r\n                <input class=\"form-control\" type=\"Email\" placeholder=\"Email@example.com\" formControlName=\"email\">\r\n                <label class=\"col-form-label\">Размер часов и стоимость</label>\r\n                <select class=\"custom-select\" formControlName=\"price_option\" (change)=\"checkmasters(0)\">\r\n                    <option *ngFor=\"let price of price_option\" [value]=\"price.id\">\r\n                        {{price.size}}\r\n                        размер\r\n                        {{price.price}}\r\n                        грн\r\n                    </option>\r\n                </select>\r\n                <label class=\"col-form-label\">Город</label>\r\n                <select class=\"custom-select\" formControlName=\"citys\" (change)=\"checkmasters(1)\">\r\n                    <option *ngFor=\"let city of citys\" [value]=\"city.id\">{{city.city}}</option>\r\n                </select>\r\n                <label class=\"col-form-label\">Дата и время</label>\r\n                <input class=\"form-control\" type=\"datetime-local\" min=\"00:00\" max=\"23:00\" step=\"3600\"\r\n                       formControlName=\"datetime\" (change)=\"checkmasters(2)\">\r\n                <label class=\"col-form-label\" *ngIf=\"freemasters\" style=\"color: red\">В указаное время нет свободных\r\n                    мастеров</label>\r\n                <label class=\"col-form-label\" *ngIf=\"freemasters\" style=\"color: red\">Выбирете другое время</label><br>\r\n                <label class=\"col-form-label\"\r\n                       *ngIf=\"this.inputControl[0] && this.inputControl[1] && this.inputControl[2]&& !freemasters\">Выбрать\r\n                    мастера</label>\r\n                <select class=\"custom-select\"\r\n                        *ngIf=\"this.inputControl[0] && this.inputControl[1] && this.inputControl[2] && !freemasters\"\r\n                        formControlName=\"master\">\r\n\r\n                    <option *ngFor=\"let master of masters\" [value]=\"master.id\">\r\n                        {{master.name}}\r\n                        {{master.surname}}\r\n                        Рейтинг\r\n                        {{master.rating}}\r\n                    </option>\r\n                </select>\r\n                <p></p>\r\n                <p></p>\r\n\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addForm.valid\">Отправить заявку</button>\r\n            </form>\r\n            <div *ngIf=\"success\">\r\n                <h5><p class=\"text-success\">\r\n                    Вам на почту было выслано письмо с подтверждением заказа <br>\r\n                    Спасибо за то что воспользовались нашими услугами\r\n                </p>\r\n                    <p>\r\n                        Вы так-же можете провести оплату онлайн, воспользовавшись одним из сервисов представленых ниже\r\n                    </p>\r\n                    <div id=\"paypal-checkout-btn\"></div>\r\n                    <input type=\"button\" class=\"btn btn-success\" value=\"Форма заказа\" (click)=\"go()\">\r\n                    <p></p>\r\n                </h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/paypalapi-service */ "./src/app/service/paypalapi-service.ts");
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/local-storage-service */ "./src/app/service/local-storage-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientComponent = /** @class */ (function () {
    function ClientComponent(apiService, storage, router, paypal) {
        this.apiService = apiService;
        this.storage = storage;
        this.router = router;
        this.paypal = paypal;
        this.inputControl = [0, 0, 0];
        this.freemasters = false;
        this.success = false;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^\\w+@\\w+\\.\\w{2,4}$')]),
            price_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({}, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            citys: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            datetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            master: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCitys().subscribe(function (res) {
            _this.citys = res.data;
        }, function (err) {
            console.log(err);
        });
        this.apiService.getPrice().subscribe(function (res) {
            _this.price_option = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    ClientComponent.prototype.checkmasters = function (index) {
        var _this = this;
        this.inputControl[index] = 1;
        if (this.inputControl[0] && this.inputControl[1] && this.inputControl[2]) {
            var price = {
                size: '',
                price: ''
            };
            for (var i in this.price_option) {
                if (this.price_option[i].id === Number(this.addForm.value.price_option)) {
                    this.price = this.price_option[i];
                    price = this.price_option[i];
                }
            }
            this.paypal.finalAmount = Object(this.price).price;
            this.client = this.addForm.value;
            this.apiService.letmasters('new', price.size, this.addForm.value.citys, this.addForm.value.datetime).subscribe(function (res) {
                _this.masters = res.data;
                if (_this.masters.length === 0)
                    _this.freemasters = true;
                else
                    _this.freemasters = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    ClientComponent.prototype.go = function () {
        this.addForm.reset();
        this.inputControl[0] = 0;
        this.inputControl[1] = 0;
        this.inputControl[2] = 0;
        this.success = !this.success;
    };
    ClientComponent.prototype.pushorder = function () {
        var _this = this;
        var master = {};
        for (var i in this.masters) {
            if (this.masters[i].id === Number(this.addForm.value.master)) {
                master = this.masters[i];
            }
        }
        this.apiService.pushorder(this.addForm.value.name, this.addForm.value.email, this.addForm.value.citys, this.price, master, this.addForm.value.datetime).subscribe(function (res) {
            _this.paypal.customId = Object(res.data).id;
            _this.paypal.ngAfterViewChecked();
            _this.success = res.success;
        }, function (err) {
            _this.router.navigate(['/notfound']);
        });
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'client-root',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_paypalapi_service__WEBPACK_IMPORTED_MODULE_1__["PaypalapiService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h2></h2>\r\n    <p class=\"text-danger\"> Ошибка 403</p>\r\n    <p class=\"text-danger\"> Некоректные входные данные</p>\r\n    <h1></h1>\r\n      <a [routerLink]=\"['/homepage']\" class=\"btn btn-success\">Главная страница</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/service/api-service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api-service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage-service */ "./src/app/service/local-storage-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    ApiService.prototype.getCitys = function () {
        return this.http.get(this.BASE_URL + '/cities');
    };
    ApiService.prototype.getPrice = function () {
        return this.http.get(this.BASE_URL + '/product');
    };
    ApiService.prototype.letmasters = function (option, size, city, datetime) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "datetime=" + datetime + "&size=" + size + "&city=" + city + "&option=" + option });
        return this.http.get(this.BASE_URL + '/free-master', { responseType: 'json', params: params });
    };
    ApiService.prototype.pushorder = function (name, email, city, price_option, master, datetime) {
        return this.http.post(this.BASE_URL + '/orders', {
            client: name,
            email: email,
            size: price_option.size,
            price: price_option.price,
            product: price_option.id,
            city: city,
            master: master,
            datetime: datetime
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/local-storage-service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/local-storage-service.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// key that is used to access the data in local storage
var STORAGE_KEY = 'access_token';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(storage) {
        this.storage = storage;
    }
    LocalStorageService.prototype.save = function (token) {
        // insert updated array to local storage
        this.storage.set(STORAGE_KEY, token);
        //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    };
    LocalStorageService.prototype.clear = function () {
        this.storage.remove(STORAGE_KEY);
        //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    };
    LocalStorageService.prototype.load = function () {
        //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
        return this.storage.get(STORAGE_KEY);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [Object])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/service/paypalapi-service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/paypalapi-service.ts ***!
  \**********************************************/
/*! exports provided: PaypalapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalapiService", function() { return PaypalapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaypalapiService = /** @class */ (function () {
    function PaypalapiService() {
        var _this = this;
        this.addScript = false;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'Adr6A_xRMrDnvbJ9Bvu20s0uDNODmFFj_LKtuP4ar343E7buS6u4aLQzxvZbFJTdlKRHIXkKnA2qJvkW',
                production: '<your-production-key here>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.finalAmount, currency: 'USD' },
                                custom: _this.customId }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    //Do something when payment is successful
                });
            }
        };
    }
    PaypalapiService.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
            });
        }
    };
    PaypalapiService.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
            console.log('new tree init');
        });
    };
    PaypalapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PaypalapiService);
    return PaypalapiService;
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
    url: 'https://shrouded-spire-22347.herokuapp.com'
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

module.exports = __webpack_require__(/*! C:\Users\Alex\WebstormProjects\FE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map