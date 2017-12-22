webpackJsonp([0],{

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to Edutin!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "https://i2.wp.com/blog.channeldir.com/wp-content/uploads/2017/07/Ventajas-de-la-Educaci%C3%B3n-Virtual.jpg?resize=800%2C500",
            },
            {
                title: "What is Edutin?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8662928/mi_clase_virtual.png?1478646875",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "http://www.usbcalivirtual.edu.co/portal/cev/juego_tic/virtualo.png",
            }
        ];
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignUpPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\welcome\welcome.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Edutin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n        <ion-buttons end>\n\n          <button ion-button color="primary" clear (click)="login()">Skip</button>\n\n        </ion-buttons>\n\n      <img [src]="slide.image" class="slide-image no-margin" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="http://ciencia.edu.co/wp-content/uploads/2017/01/Costa-Rica2.jpg" class="slide-image no-margin" />\n\n      <h2 class="slide-title">ready to learn?</h2>\n\n\n\n      <div padding>\n\n        <button ion-button outline block (click)="signUp();">Sign Up</button>\n\n        <button ion-button outline block (click)="login();">Login</button>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_recover__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = { "Useremail": "", "Userpassword": "" };
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__courses_courses__["a" /* CoursesPage */]);
    };
    LoginPage.prototype.recover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recover_recover__["a" /* RecoverPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login Edutin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row padding>\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-input class="input-test" type="email" placeholder="Username" [(ngModel)]="userData.Useremail" name="username" id="user" fixed></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input class="input-test" type="password" placeholder="Password" [(ngModel)]="userData.Userpassword" name="password" id="pass" fixed></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button block (click)="login();">Login</button>\n\n          <button ion-button clear block (click)="recover();">Forgot password?</button>\n\n        </div>\n\n\n\n        <button ion-button clear block>\n\n          Or\n\n        </button>\n\n        <div padding>\n\n          <button class="button-google" ion-button icon-left>\n\n            <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n\n            Google\n\n          </button>\n\n          <button class="button-facebook" ion-button icon-left>\n\n            <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n            Facebook\n\n          </button>\n\n        </div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_learn_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_local__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModulesPage = (function () {
    function ModulesPage(navCtrl, navParams, service, platform, transfer, file, alertCtrl, events, _zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this._zone = _zone;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__video_local__["a" /* VideoLocalPage */];
        this.showGroup = null;
        this.storageDirectory = '';
        this.loadProgress = 30;
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalApplicationStorageDirectory;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    ModulesPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShow(group)) {
            this.showGroup = null;
        }
        else {
            this.showGroup = group;
        }
    };
    ModulesPage.prototype.isGroupShow = function (group) {
        return this.showGroup === group;
    };
    ModulesPage.prototype.downloadFile = function (archivo, urlVideo) {
        var _this = this;
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            fileTransfer.onProgress(function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    _this._zone.run(function () {
                        var perc = Math.round(progressEvent.loaded / progressEvent.total * 100);
                        _this.progress = perc;
                    });
                }
            });
            fileTransfer.download(urlVideo, _this.storageDirectory + '/Download/' + archivo).then(function (entry) {
                _this.srcVideo = entry.toURL();
                var alertSuccess = _this.alertCtrl.create({
                    title: "Download Succeeded!",
                    subTitle: archivo + " was successfully downloaded to: " + entry.toURL(),
                    buttons: ['Ok']
                });
                alertSuccess.present();
            }, function (error) {
                var alertFailure = _this.alertCtrl.create({
                    title: "Download Failed!",
                    subTitle: archivo + " was not successfully downloaded. Error code: " + error.code,
                    buttons: ['Ok']
                });
                alertFailure.present();
            });
        });
    };
    ModulesPage.prototype.setSrc = function (src) {
        this.events.publish('Mod', src);
    };
    return ModulesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], ModulesPage.prototype, "nav", void 0);
ModulesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modules',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\modules\modules.html"*/'<ion-menu [content]="content" type="overlay" side="right">\n\n  <ion-content>\n\n    <ion-list class="accordion-list">\n\n      <ion-item style="background: #0061FF;" ion-item text-wrap no-lines (click)="toggleGroup(0)" [ngClass]="{\'section-active\': isGroupShow(0), \'section\': !isGroupShow(0)}">\n\n        <span item-start>1</span>\n\n        <h3>\n\n          Modulo\n\n        </h3>\n\n        <ion-icon name="ios-arrow-down-outline" item-end *ngIf="!isGroupShow(0)"></ion-icon>\n\n        <ion-icon name="ios-arrow-up-outline" *ngIf="isGroupShow(0)" item-end></ion-icon>\n\n      </ion-item>\n\n      <div class="container-class" *ngIf="isGroupShow(0)">\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n   \n\n      </div>\n\n      <ion-item style="background: #0061FF;" ion-item text-wrap no-lines (click)="toggleGroup(1)" [ngClass]="{\'section-active\': isGroupShow(1), \'section\': !isGroupShow(1)}">\n\n        <span item-start>1</span>\n\n        <h3>\n\n          Modulo\n\n        </h3>\n\n        <ion-icon name="ios-arrow-down-outline" item-end *ngIf="!isGroupShow(1)"></ion-icon>\n\n        <ion-icon name="ios-arrow-up-outline" *ngIf="isGroupShow(1)" item-end></ion-icon>\n\n      </ion-item>\n\n      <div class="container-class" *ngIf="isGroupShow(1)">\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n   \n\n      </div>\n\n      <ion-item style="background: #0061FF;" ion-item text-wrap no-lines (click)="toggleGroup(2)" [ngClass]="{\'section-active\': isGroupShow(2), \'section\': !isGroupShow(2)}">\n\n        <span item-start>1</span>\n\n        <h3>\n\n          Modulo\n\n        </h3>\n\n        <ion-icon name="ios-arrow-down-outline" item-end *ngIf="!isGroupShow(2)"></ion-icon>\n\n        <ion-icon name="ios-arrow-up-outline" *ngIf="isGroupShow(2)" item-end></ion-icon>\n\n      </ion-item>\n\n      <div class="container-class" *ngIf="isGroupShow(2)">\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item ion-item text-wrap no-lines style="padding-left: 0px;">\n\n              <span class="span-number-modul">1.1</span>\n\n              <span style="font-weight: 600;color:#666;">Introduccion al curso de angular angular angular angular angular angular angular angular</span>\n\n              <ion-row>\n\n                <button class="btn-time" ion-button icon-left clear small>\n\n                  00:03:08\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-question-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-quiz-light"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  78.4%\n\n                </button>\n\n              </ion-row>\n\n              <progress-bar [progress]="loadProgress"></progress-bar>\n\n              <button (click)="setSrc(\'file:///storage/emulated/0/Android/data/io.ionic.starter/Download/videogular.mp4\');" ion-button\n\n                clear item-left>\n\n                <ion-icon class="edu-play-circle"></ion-icon>\n\n              </button>\n\n              <button (click)="downloadFile(\'Videogular.mp4\',\'http://static.videogular.com/assets/videos/videogular.mp4\');" ion-button\n\n                clear item-end>\n\n                <ion-icon ios="ios-download" md="md-download"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n   \n\n      </div>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\modules\modules.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_learn_service__["a" /* LearnService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], ModulesPage);

//# sourceMappingURL=modules.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLocalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_learn_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VideoLocalPage = (function () {
    function VideoLocalPage(navCtrl, platform, service, screenOrientation, events, menuCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.service = service;
        this.screenOrientation = screenOrientation;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.pages = "Apuntes";
        this.srcVideo = "";
        this.screen = false;
        //Utilizado para detectar los cambios de orientacion del dispositivo
        this.screenOrientation.onChange().subscribe(function () {
            _this.fullScreen();
        });
        //Usado para recibir el evento enviado desde el modul con la url del video del modul descargado
        events.subscribe('Mod', function (modul) {
            if (modul != "") {
                _this.srcVideo = modul;
            }
        });
    }
    //Utilizada para detectar la posicion y cambiar la position dependiendo de cual sea
    VideoLocalPage.prototype.fullScreen = function () {
        if (this.screenOrientation.type == "portrait-primary") {
            this.screen = false;
        }
        if (this.screenOrientation.type == "landscape-primary") {
            this.screen = true;
        }
        if (this.screenOrientation.type == "landscape-sencondary") {
            this.screen = true;
        }
    };
    VideoLocalPage.prototype.fullScreenButton = function () {
        if (this.screenOrientation.type == "portrait-primary") {
            this.screen = true;
            this.lockScreenOrientation();
        }
        if (this.screenOrientation.type == "landscape-primary") {
            this.screen = false;
            this.unlockScreenOrientation();
        }
        if (this.screenOrientation.type == "landscape-secondary") {
            this.screen = false;
            this.unlockScreenOrientation();
        }
    };
    //Utilizada para bloquear la posicion del dispositivo cuando  esta en modo retrato a modo paisaje primaria o secundaria
    VideoLocalPage.prototype.lockScreenOrientation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                }
                catch (error) {
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    //Utilizada para desbloquear la posicion del dispositivo cuando  esta en modo paisaje primaria o secundaria
    VideoLocalPage.prototype.unlockScreenOrientation = function () {
        this.screenOrientation.unlock();
    };
    //Obtiene cual es la pagina anterior y la retorna
    VideoLocalPage.prototype.backCourse = function () {
        this.app.goBack();
    };
    return VideoLocalPage;
}());
VideoLocalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'video-local',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\video\local.html"*/'<ion-header *ngIf="!screen">\n\n    <ion-navbar color="primary">\n\n        <ion-buttons start>\n\n            <button ion-button icon-only (click)="backCourse()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title text-center>\n\n            Learn\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only menuToggle>\n\n                <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div [ngClass]="{\'container-video-portrait\':screen==false , \'container-video-landscape\':screen==true }">\n\n        <vg-player>\n\n            <vg-buffering></vg-buffering>\n\n            <vg-scrub-bar>\n\n                <vg-scrub-bar-current-time [vgSlider]="true" suiPopup popupText="Current Time" popupInverted popupPlacement="top"></vg-scrub-bar-current-time>\n\n                <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n\n            </vg-scrub-bar>\n\n            <vg-controls [vgAutohide]="true" [vgAutohideTime]="5">\n\n                <vg-play-pause></vg-play-pause>\n\n                <vg-playback-button></vg-playback-button>\n\n                <vg-scrub-bar style="pointer-events: none;">\n\n\n\n                </vg-scrub-bar>\n\n\n\n                <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>\n\n                <vg-time-display vgProperty="total" vgFormat="/mm:ss"></vg-time-display>\n\n                <button class="ios-expand" (click)="fullScreenButton();">\n\n                    <ion-icon *ngIf="!screen" ios="ios-expand" md="md-expand"></ion-icon>\n\n                    <ion-icon *ngIf="screen" ios="ios-contract" md="md-contract"></ion-icon>\n\n                </button>\n\n            </vg-controls>\n\n\n\n            <!-- <video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin class="position-video" [src]="srcVideo" autoplay>\n\n            </video> -->\n\n            <video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin autoplay>\n\n                <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">\n\n                <source src="http://static.videogular.com/assets/videos/videogular.ogg" type="video/ogg">\n\n                <source src="http://static.videogular.com/assets/videos/videogular.webm" type="video/webm">\n\n        \n\n                <track kind="subtitles" label="English" src="http://static.videogular.com/assets/subs/pale-blue-dot.vtt" srclang="en" default>\n\n                <track kind="subtitles" label="Español" src="http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt" srclang="es">\n\n            </video>\n\n        </vg-player>\n\n    </div>\n\n    <div *ngIf="!screen">\n\n        <ion-toolbar no-border-top>\n\n            <ion-segment [(ngModel)]="pages">\n\n                <ion-segment-button value="Apuntes">\n\n                    <ion-icon class="edu-pencil-light"></ion-icon>\n\n                    Apuntes\n\n                </ion-segment-button>\n\n                <ion-segment-button value="Aportes">\n\n                    <ion-icon class="edu-user-apunte-light"></ion-icon>\n\n                    Aportes\n\n                </ion-segment-button>\n\n                <ion-segment-button value="Preguntas" icon-top>\n\n                    <ion-icon class="edu-question-light"></ion-icon>\n\n                    Preguntas\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n        </ion-toolbar>\n\n        <div [ngSwitch]="pages">\n\n            <div *ngSwitchCase="\'Apuntes\'" class="container-list">\n\n                <page-apuntes></page-apuntes>\n\n            </div>\n\n            <div *ngSwitchCase="\'Aportes\'" class="container-list">\n\n                <page-contributions></page-contributions>\n\n            </div>\n\n            <div *ngSwitchCase="\'Preguntas\'" class="container-list">\n\n                <page-comments></page-comments>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\video\local.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__app_learn_service__["a" /* LearnService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], VideoLocalPage);

//# sourceMappingURL=local.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverPage = (function () {
    function RecoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = { "Useremail": "" };
    }
    RecoverPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__courses_courses__["a" /* CoursesPage */]);
    };
    return RecoverPage;
}());
RecoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recover',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\recover\recover.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Reset password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row padding>\n\n      <ion-col text-center>\n\n        <div class="bar bar-header">\n\n          <h1 class="title">I Forgot My Password</h1>\n\n        </div>\n\n        <div class="bar bar-subheader">\n\n          <p> Enter your email address below and we\'ll send you a link to reset your password.</p>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email" [(ngModel)]="userData.Useremail" name="email" fixed></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button block (click)="login();">Reset password</button>\n\n        </div>\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\recover\recover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], RecoverPage);

//# sourceMappingURL=recover.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
    }
    SignUpPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__courses_courses__["a" /* CoursesPage */]);
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signupage',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name" fixed></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" [(ngModel)]="userData.email" fixed></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Username" [(ngModel)]="userData.username" fixed></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" fixed></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button block (click)="signUp();">Sign Up</button>\n\n    </div>  -->\n\n  <ion-grid>\n\n    <ion-row padding>\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-input class="input-test" type="text" placeholder="Name" [(ngModel)]="userData.name" fixed></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email" [(ngModel)]="userData.email" fixed></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Username" [(ngModel)]="userData.username" fixed></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" fixed></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button block (click)="signUp();">Sign Up</button>\n\n        </div>\n\n\n\n        <button ion-button clear block>\n\n          Or\n\n        </button>\n\n        <div padding>\n\n          <button class="button-google" ion-button icon-left>\n\n            <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n\n            Google\n\n          </button>\n\n          <button class="button-facebook" ion-button icon-left>\n\n            <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n            Facebook\n\n          </button>\n\n        </div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SignUpPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsAnswerPage = (function () {
    function CommentsAnswerPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CommentsAnswerPage.prototype.deleteComment = function (i_child) {
        var confirm = this.alertCtrl.create({
            message: '¿Está seguro que desa eliminar el comment?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    CommentsAnswerPage.prototype.addComment = function () {
    };
    return CommentsAnswerPage;
}());
CommentsAnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-commentsanswer',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\comments\answers\answers.html"*/'      <ion-header>\n\n          <ion-navbar>\n\n            <button ion-button menuToggle>\n\n              <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title text-center>Answers</ion-title>\n\n          </ion-navbar>\n\n  </ion-header> \n\n  <ion-content class="list-avatar-page">\n\n    <ion-card>\n\n              <ion-item>\n\n                  <ion-avatar item-start>\n\n                      <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n                  </ion-avatar>\n\n                   <a>Bairon londoño gonzales</a>\n\n                  <p small>hace 1 hora</p>\n\n              </ion-item>\n\n              <ion-card-content>\n\n                  <p>Preguntado</p>\n\n              </ion-card-content>      \n\n    </ion-card> \n\n<ion-scroll scrollY="true" style="height: 60%">\n\n      <ion-list paging>\n\n          <ion-item class="bottom-border" no-lines text-wrap>\n\n              <ion-avatar item-start>\n\n                <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n              </ion-avatar>\n\n              <h2>Bairon londoño gonzales</h2>\n\n              <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n              <ion-row>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-edit"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-like"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-meh"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-delete"></ion-icon>\n\n                </button>\n\n              </ion-row>\n\n              <ion-note item-end>3:43 pm</ion-note>\n\n            </ion-item>\n\n        <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <h2>Bairon londoño gonzales</h2>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n  <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <h2>Bairon londoño gonzales</h2>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <h2>Bairon londoño gonzales</h2>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n  <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <h2>Bairon londoño gonzales</h2>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n      </ion-list>\n\n    </ion-scroll> \n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n              <ion-item>\n\n                   <ion-input type="text" placeholder="Pregunta algo..." [(ngModel)]="contenido"></ion-input>\n\n                    <button ion-button clear item-right>\n\n                      <ion-icon class="file-comment" ios="ios-attach" md="md-attach"></ion-icon>\n\n                    </button>\n\n              </ion-item>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n         <button ion-button item-right>\n\n                        <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n          </button>\n\n          </ion-col> \n\n        </ion-row>\n\n      </ion-grid>                \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\comments\answers\answers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CommentsAnswerPage);

//# sourceMappingURL=answers.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContributionsAnswerPage = (function () {
    function ContributionsAnswerPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ContributionsAnswerPage.prototype.deleteContribution = function (i_child) {
        var confirm = this.alertCtrl.create({
            message: '¿Está seguro que desa eliminar el comment?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    return ContributionsAnswerPage;
}());
ContributionsAnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contributionsanswer',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\contributions\answers\answers.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title text-center>Answers</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    <ion-content class="list-avatar-page">\n\n        <ion-card>\n\n                  <ion-item>\n\n                      <ion-avatar item-start>\n\n                          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n                      </ion-avatar>\n\n                       <a>Bairon londoño gonzales</a>\n\n                      <p small>hace 1 hora</p>\n\n                  </ion-item>\n\n                  <ion-card-content>\n\n                      <p>Preguntado</p>\n\n                  </ion-card-content>      \n\n        </ion-card> \n\n    <ion-scroll scrollY="true" style="height: 60%">\n\n          <ion-list paging>\n\n              <ion-item class="bottom-border" no-lines text-wrap>\n\n                  <ion-avatar item-start>\n\n                    <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n                  </ion-avatar>\n\n                  <h2>Bairon londoño gonzales</h2>\n\n                  <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n                  <ion-row>\n\n                    <button ion-button icon-left clear small>\n\n                      <ion-icon class="edu-edit"></ion-icon>\n\n                    </button>\n\n                    <button ion-button icon-left clear small>\n\n                      <ion-icon class="edu-like"></ion-icon>\n\n                      <div>999</div>\n\n                    </button>\n\n                    <button ion-button icon-left clear small>\n\n                      <ion-icon class="edu-meh"></ion-icon>\n\n                      <div>999</div>\n\n                    </button>\n\n                    <button ion-button icon-left clear small>\n\n                      <ion-icon class="edu-delete"></ion-icon>\n\n                    </button>\n\n                  </ion-row>\n\n                  <ion-note item-end>3:43 pm</ion-note>\n\n                </ion-item>\n\n            <ion-item class="bottom-border" no-lines text-wrap>\n\n              <ion-avatar item-start>\n\n                <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n              </ion-avatar>\n\n              <h2>Bairon londoño gonzales</h2>\n\n              <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n              <ion-row>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-edit"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-like"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-meh"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-delete"></ion-icon>\n\n                </button>\n\n              </ion-row>\n\n              <ion-note item-end>3:43 pm</ion-note>\n\n            </ion-item>\n\n          <ion-item class="bottom-border" no-lines text-wrap>\n\n              <ion-avatar item-start>\n\n                <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n              </ion-avatar>\n\n              <h2>Bairon londoño gonzales</h2>\n\n              <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n              <ion-row>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-edit"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-like"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-meh"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-delete"></ion-icon>\n\n                </button>\n\n              </ion-row>\n\n              <ion-note item-end>3:43 pm</ion-note>\n\n            </ion-item>\n\n        <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n          <ion-item class="bottom-border" no-lines text-wrap>\n\n              <ion-avatar item-start>\n\n                <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n              </ion-avatar>\n\n              <h2>Bairon londoño gonzales</h2>\n\n              <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n              <ion-row>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-edit"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-like"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-meh"></ion-icon>\n\n                  <div>999</div>\n\n                </button>\n\n                <button ion-button icon-left clear small>\n\n                  <ion-icon class="edu-delete"></ion-icon>\n\n                </button>\n\n              </ion-row>\n\n              <ion-note item-end>3:43 pm</ion-note>\n\n            </ion-item>\n\n        <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap>\n\n          <ion-avatar item-start>\n\n            <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n          </ion-avatar>\n\n          <h2>Bairon londoño gonzales</h2>\n\n          <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n          <ion-row>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-edit"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-like"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-meh"></ion-icon>\n\n              <div>999</div>\n\n            </button>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon class="edu-delete"></ion-icon>\n\n            </button>\n\n          </ion-row>\n\n          <ion-note item-end>3:43 pm</ion-note>\n\n        </ion-item>\n\n          </ion-list>\n\n        </ion-scroll> \n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                  <ion-item>\n\n                       <ion-input type="text" placeholder="Pregunta algo..." [(ngModel)]="contenido"></ion-input>\n\n                        <button ion-button clear item-right>\n\n                          <ion-icon class="file-comment" ios="ios-attach" md="md-attach"></ion-icon>\n\n                        </button>\n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n             <button ion-button item-right>\n\n                            <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n              </button>\n\n              </ion-col> \n\n            </ion-row>\n\n          </ion-grid>                \n\n  </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\contributions\answers\answers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ContributionsAnswerPage);

//# sourceMappingURL=answers.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recover_recover__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_apuntes_apuntes__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comments_comments__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comments_answers_answers__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contributions_contributions__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contributions_answers_answers__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__learn_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_video_local__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modules_modules__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_videogular2_core__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_controls__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_videogular2_overlay_play__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_buffering__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_auth_service__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_progress_bar_progress_bar__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_transfer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_chooser__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_diagnostic__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// Videogular






// Videogular
//Plugins




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recover_recover__["a" /* RecoverPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__["a" /* CoursesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_video_local__["a" /* VideoLocalPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modules_modules__["a" /* ModulesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_apuntes_apuntes__["a" /* ApuntesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_comments_answers_answers__["a" /* CommentsAnswerPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contributions_contributions__["a" /* ContributionsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contributions_answers_answers__["a" /* ContributionsAnswerPage */],
            __WEBPACK_IMPORTED_MODULE_26__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_21_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_22_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_23_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_24_videogular2_buffering__["VgBufferingModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recover_recover__["a" /* RecoverPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__["a" /* CoursesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_video_local__["a" /* VideoLocalPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modules_modules__["a" /* ModulesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_apuntes_apuntes__["a" /* ApuntesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_comments_answers_answers__["a" /* CommentsAnswerPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contributions_contributions__["a" /* ContributionsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contributions_answers_answers__["a" /* ContributionsAnswerPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__learn_service__["a" /* LearnService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_transfer__["b" /* TransferObject */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_diagnostic__["a" /* Diagnostic */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ModulesPage } from "../pages/modules/modules";
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { jsRules } from 'tslint/lib/configs/recommended';






// import { Params } from '@angular/router';
var LearnService = (function () {
    function LearnService(http) {
        this.http = http;
        this.baseUrl = 'http://edutin.ga/apis/learn';
        //observador agregado en el metodo this.getCurso()
        this.resCursoSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resCurso$ = this.resCursoSubject.asObservable();
        //observador agregado en el metodo this.getCursoLogin()
        this.resCursoLoginSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resCursoLogin$ = this.resCursoLoginSubject.asObservable();
        //Modules---------------------------------------------------------------------
        //observador agregado en el metodo this.getModuleCurso()
        this.resModuleSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resModule$ = this.resModuleSubject.asObservable();
        //!Modules---------------------------------------------------------------------
        //Comments---------------------------------------------------------  
        //observador agregado en el metodo this.getComments()
        this.resCommentSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resComment$ = this.resCommentSubject.asObservable();
        //!Comments---------------------------------------------------------
        //observador agregado en el metodo this.getContributions()
        this.resContributionSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resContribution$ = this.resContributionSubject.asObservable();
        //!vote Moments--------------------------------------------------------
        //Apuntes--------------------------------------------------------------
        //observador en el metodo this.getApuntes()
        this.resApuntesSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resApuntes$ = this.resApuntesSubject.asObservable();
        this.resPruebaSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resPrueba$ = this.resPruebaSubject.asObservable();
        //!Apuntes--------------------------------------------------------------
        //observador en el metodo this.getClase()
        this.resLessonSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resLesson$ = this.resLessonSubject.asObservable();
        //observador en el metodo this.getClasess()
        this.resClasesSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.resClases$ = this.resClasesSubject.asObservable();
    }
    //!Variables Extra-------------------------
    LearnService.prototype.jsonToParams = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in data) {
            params.append(key, data[key]);
        }
        return params;
    };
    LearnService.prototype.post = function (url, formData, params) {
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var Params_;
        if (params) {
            Params_ = params;
        }
        else {
            Params_ = this.myParams;
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        return this.http.post(url, formData, options);
    };
    // curso;
    LearnService.prototype.getLearn = function (params) {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var Params_;
        if (params) {
            Params_ = params;
        }
        else {
            Params_ = this.myParams;
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = Params_;
        this.http.get(this.baseUrl + '.json', options).map(function (response) {
            _this.resCursoSubject.next(response.json());
        })
            .toPromise();
    };
    LearnService.prototype.getCursoLogin = function () {
        var _this = this;
        this.token = localStorage.getItem('Angular.token');
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        // let myParams:URLSearchParams;     
        this.myParams = this.jsonToParams(JSON.parse(localStorage.getItem('Angular.config')));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/certification.json', options).map(function (response) {
            if (Object.keys(response.json()).length === 0 && response.json().constructor === Object) {
                // console.log("Usuario no registrado en el curso") ;                        
            }
            else {
                // console.log("Usuario registrado en el curso") ;                           
                _this.cursoLogin = response.json();
                _this.resCursoLoginSubject.next(_this.cursoLogin.certification);
                _this.getLearn();
                _this.getModules();
                _this.getContributions();
                _this.getComments();
                _this.getApunte();
            }
        }).toPromise();
    };
    LearnService.prototype.getModules = function (moduleId) {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/modules.json', options).map(function (response) {
            var modules = response.json().modules;
            modules.sort(function (a, b) {
                return (parseInt(a.Module.order) < parseInt(b.Module.order)) ? -1 : ((parseInt(a.Module.order) > parseInt(b.Module.order)) ? 1 : 0);
            });
            for (var i = 0; i < modules.length; i++) {
                modules[i].Clase.sort(function (a, b) {
                    return (parseInt(a.order) < parseInt(b.order)) ? -1 : ((parseInt(a.order) > parseInt(b.order)) ? 1 : 0);
                });
            }
            _this.resModuleSubject.next(modules);
        }).toPromise();
    };
    LearnService.prototype.getComments = function () {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/comments.json', options).map(function (response) {
            var comments = response.json();
            _this.resCommentSubject.next(comments.comments);
        }).toPromise();
    };
    LearnService.prototype.deleteComment = function (data) {
        var formData = new FormData();
        var postData;
        formData.append('id', data);
        formData.append('estado', "-1");
        this.post(this.baseUrl + '/comments_close.json', formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('sent'); };
        });
    };
    LearnService.prototype.getContributions = function () {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/contributions.json', options).map(function (response) {
            var contributions = response.json();
            _this.resContributionSubject.next(contributions.contributions);
        }).toPromise();
    };
    LearnService.prototype.addContribution = function (data) {
        var postData;
        this.post(this.baseUrl + '/contributions_add.json', data).subscribe(function (data) { return postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    LearnService.prototype.deleteContribution = function (id) {
        var formData = new FormData();
        var postData;
        formData.append('id', id);
        formData.append('estado', '-1');
        this.post(this.baseUrl + '/contributions_close.json', formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('sent'); };
        });
    };
    //!Contributions-------------------------------------------------------
    //vote Moments---------------------------------------------------------
    LearnService.prototype.setVote = function (data_vote) {
        var formData = new FormData();
        var postData;
        formData.append('id', data_vote.id);
        formData.append('type', data_vote.type);
        formData.append('valor', data_vote.state);
        this.post(this.baseUrl + data_vote.url, formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('sent'); };
        });
    };
    LearnService.prototype.getApunte = function () {
        var _this = this;
        var apuntes;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/apuntes.json', options).map(function (response) {
            // apuntes = response.json();             
            // this.resApuntesSubject.next(apuntes.apuntes);   
            if (response.json().apuntes.length) {
                apuntes = response.json().apuntes;
                apuntes.sort(function (a, b) {
                    return (new Date(a.Apunte.actualizado).getTime() > new Date(b.Apunte.actualizado).getTime()) ? -1 : ((new Date(a.Apunte.actualizado).getTime() < new Date(b.Apunte.actualizado).getTime()) ? 1 : 0);
                });
                _this.resApuntesSubject.next(apuntes);
            }
        }).toPromise();
    };
    LearnService.prototype.addApunte = function (dataApunte) {
        var _this = this;
        console.log('dataApunte:', dataApunte);
        var postData;
        var formData = new FormData();
        if (dataApunte.id_apunte) {
            formData.append('id', dataApunte.id_apunte);
        }
        formData.append('titulo', dataApunte.titulo);
        formData.append('contenido', dataApunte.contenido);
        formData.append('tipo', dataApunte.tipo);
        formData.append('estado', '1');
        formData.append('curso_id', dataApunte.curso_id);
        formData.append('clase_id', dataApunte.clase_id);
        formData.append('language_type', dataApunte.language_type);
        this.post(this.baseUrl + '/apuntes_add.json', formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('finished'); };
            _this.getApunte();
        });
    };
    LearnService.prototype.deleteApunte = function (id) {
        var _this = this;
        var postData;
        var formData = new FormData();
        formData.append('apunte', id);
        formData.append('estado', '-1');
        this.post(this.baseUrl + '/apuntes_close.json', formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('finished'); };
            _this.resPruebaSubject.next(true);
        });
    };
    LearnService.prototype.getLesson = function (id_clase) {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/' + id_clase + '.json', options).map(function (response) {
            var lesson = response.json();
            console.log(lesson);
            _this.resLessonSubject.next(lesson.clase);
        }).toPromise();
    };
    LearnService.prototype.getClases = function () {
        var _this = this;
        if (this.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        options.search = this.myParams;
        this.http.get(this.baseUrl + '/clases.json', options).map(function (response) {
            var clases = response.json();
            _this.resClasesSubject.next(clases);
        }).toPromise();
    };
    LearnService.prototype.addRecent = function (dataRecent) {
        var formData = new FormData();
        formData.append('id', dataRecent.data.id);
        formData.append('duracion', dataRecent.data.duracion);
        formData.append('tiempo', dataRecent.data.tiempo);
        formData.append('certification_id', this.myParams.get('certification_id'));
        formData.append('curso_id', this.myParams.get('curso_id'));
        formData.append('clase_id', dataRecent.data.clase_id);
        // this.post(this.baseUrl+'/recents_add.json', formData).subscribe(
        //   data => postData = JSON.stringify(data),
        //   error => alert(error),
        //   () => console.log('')
        // );
    };
    LearnService.prototype.newPost = function (data) {
        console.log(data);
        var postData;
        var formData = new FormData();
        formData.append('contenido', data.contenido);
        formData.append('ext', data.ext); //campo 
        formData.append('file', data.file, data.file.name); //campo File
        this.post('http://192.168.1.7/upload/upload.php', formData).subscribe(function (data) {
            postData = JSON.stringify(data),
                function (error) { return alert(error); },
                function () { return console.log('finished'); };
        });
    };
    return LearnService;
}());
LearnService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LearnService);

//# sourceMappingURL=learn.service.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApuntesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApuntesPage = (function () {
    function ApuntesPage(navCtrl, navParams, actionSheetCtrl, platform, transfer, alertCtrl, file, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.app = app;
        this.contenido = "<h1>Apuntando para probar la descargada de los files</h1>";
        this.storageDirectory = '';
        this.platform.ready().then(function () {
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalApplicationStorageDirectory;
                ;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    ApuntesPage.prototype.presentActionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Editar',
                    role: 'editar',
                    handler: function () {
                        console.log('Editar clicked');
                        _this.contenido = "Apuntando";
                    }
                }, {
                    text: 'Descargar',
                    handler: function () {
                        console.log('Descargar clicked');
                        _this.downloadFile('prueba.html', _this.contenido);
                    }
                }, {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        console.log('Eliminar clicked');
                        var confirm = _this.alertCtrl.create({
                            message: '¿Está seguro que desa eliminar el apunte?',
                            buttons: ['Cancelar',
                                {
                                    text: 'Eliminar',
                                    handler: function () {
                                        _this.deleteApunte(i);
                                    }
                                }
                            ]
                        });
                        confirm.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ApuntesPage.prototype.deleteApunte = function (idx) {
        this.apuntes.splice(idx, 1);
    };
    //Function usada para descargar el contenido del apunte crea el file recibe como parametro el nombre del archivo + su extension y el contenido del apunte
    ApuntesPage.prototype.downloadFile = function (archivo, contenido) {
        var _this = this;
        this.file.writeFile(this.storageDirectory, archivo, contenido, { replace: true })
            .then(function (entry) {
            var alertSuccess = _this.alertCtrl.create({
                title: "Download Succeeded!",
                subTitle: archivo + " was successfully downloaded to: " + entry.toURL(),
                buttons: ['Ok']
            });
            alertSuccess.present();
        })
            .catch(function (err) {
            var alertFailure = _this.alertCtrl.create({
                title: "Download Failed!",
                subTitle: archivo + " was not successfully downloaded. Error code: " + err.code,
                buttons: ['Ok']
            });
            alertFailure.present();
        });
    };
    ApuntesPage.prototype.add = function () {
        this.contenido = "";
    };
    ApuntesPage.prototype.apuntesEdit = function () {
    };
    return ApuntesPage;
}());
ApuntesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-apuntes',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\apuntes\apuntes.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-10>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Apunta algo..." [(ngModel)]="contenido"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button item-right (click)="add();">\n\n        <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-content>\n\n <ion-list>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <ion-item class="item-apuntes bottom-border" no-lines text-wrap>\n\n      <h2 color="dark">Introduccion al curso</h2>\n\n      <p>Apuntando para probar la descargada de los files... </p>\n\n      <button ion-button icon-left clear item-end (click)="presentActionSheet();">\n\n        <ion-icon name="ios-arrow-down-outline" style="zoom:1.5;"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list> \n\n  <!-- <ion-list>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-row>\n\n        <ion-col col-3 class="col-img-apunte">\n\n          <img src="https://learn.edutin.com/assets/img/IconoHoja.svg">\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <p>Apuntando para probar la descargada de los files... </p>\n\n          <ion-grid class="title-apunte">\n\n            <ion-row>\n\n\n\n              <ion-col col-9>\n\n                <small>Titulo: Ionic working</small>\n\n              </ion-col>\n\n              <ion-col col-3 style="color:aliceblue;text-align: center;" (click)="presentActionSheet();">\n\n                      <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n        <ion-row>\n\n          <ion-col col-3  class="col-img-apunte">\n\n            <img src="https://cdn.worldvectorlogo.com/logos/code-school.svg">\n\n          </ion-col>\n\n          <ion-col col-9>\n\n            <p>Apuntando para probar la descargada de los files... </p>\n\n            <ion-grid class="title-apunte">\n\n              <ion-row>\n\n  \n\n                <ion-col col-9>\n\n                  <small>Titulo: Ionic working</small>\n\n                </ion-col>\n\n                <ion-col col-3 style="color:aliceblue;text-align: center;" (click)="presentActionSheet();">\n\n                        <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n  \n\n      </ion-item>\n\n  </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\apuntes\apuntes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ApuntesPage);

//# sourceMappingURL=apuntes.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_answers_answers__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_learn_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommentsPage = (function () {
    function CommentsPage(navCtrl, navParams, alertCtrl, platform, transfer, file, fileChooser, service, diagnostic) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.service = service;
        this.diagnostic = diagnostic;
        this.storageDirectory = '';
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalApplicationStorageDirectory;
                ;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    CommentsPage.prototype.deleteComment = function (idx) {
        var confirm = this.alertCtrl.create({
            message: '¿Está seguro que desa eliminar el comment?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    CommentsPage.prototype.editComment = function (idx, comment) {
        this.contenido = "Preguntado";
    };
    CommentsPage.prototype.answers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comments_answers_answers__["a" /* CommentsAnswerPage */]);
    };
    CommentsPage.prototype.uploadFile = function () {
        var _this = this;
        this.fileChooser.open().then(function (url) {
            alert(url);
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: 'ionicfile',
                fileName: "ionicfile.jpg",
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: {}
            };
            fileTransfer.upload(url, encodeURI("http://192.168.0.18/upload/upload.php"), options)
                .then(function (data) {
                //        success
                alert("success" + JSON.stringify(data));
            }, function (err) {
                // error
                alert("error" + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(e); });
    };
    CommentsPage.prototype.add = function () {
        this.contenido = "";
    };
    CommentsPage.prototype.downloadFile = function (url, fileName) {
        var _this = this;
        this.diagnostic.requestExternalStorageAuthorization()
            .then(function () {
            _this.diagnostic.isExternalStorageAuthorized()
                .then(function (isAvailable) {
                _this.file.checkDir(_this.file.externalRootDirectory, "download")
                    .then(function (success) {
                    _this.storageDirectory = _this.file.externalRootDirectory + "download/";
                    var fileTransfer = _this.transfer.create();
                    var storageLocation = encodeURI(_this.storageDirectory + fileName);
                    fileTransfer.download(url, storageLocation, true).then(function (entry) {
                        var alertSuccess = _this.alertCtrl.create({
                            title: "Download Succeeded!",
                            subTitle: fileName + " was successfully downloaded to: " + entry.toURL(),
                            buttons: ['Ok']
                        });
                        alertSuccess.present();
                    }, function (error) {
                        var alertFailure = _this.alertCtrl.create({
                            title: "Download Failed!",
                            subTitle: fileName + " was not successfully downloaded. Error code: " + error.code,
                            buttons: ['Ok']
                        });
                        alertFailure.present();
                    });
                })
                    .catch(function (error) {
                    // this.storageDirectory = this.file.dataDirectory;
                    // alert("c error storage dir = ");
                    // alert(this.storageDirectory);
                    // alert(error);
                });
            }, function (error) {
                alert("No write Permission");
                alert(error);
                return false;
            })
                .catch(function (error) {
                alert('Error getting write authorization');
                alert(error);
                return false;
            });
        });
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-comments',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\comments\comments.html"*/'<ion-grid>\n\n    <ion-row>\n\n      <ion-col col-10>\n\n          <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n                </ion-avatar>\n\n                <ion-input type="text" placeholder="Pregunta algo..." [(ngModel)]="contenido"></ion-input>\n\n                <button ion-button clear item-right>\n\n                   <label ion-label for="fileComment">\n\n                       <ion-icon class="file-comment"  ios="ios-attach" md="md-attach"></ion-icon>\n\n                   </label>     \n\n                 <input type="file" id="fileComment"   (change)="uploadFile($event.target.files[0]);"  style="display:none"/>    \n\n             </button>\n\n          </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n     <button ion-button item-right (click)="add();">\n\n                    <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n      </button>\n\n      </ion-col> \n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-content class="list-avatar-page">\n\n    <ion-list>\n\n      <ion-item class="bottom-border" no-lines text-wrap >\n\n        <ion-avatar item-start>\n\n          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n        </ion-avatar>\n\n        <a class="media-heading">Bairon londoño gonzales</a>\n\n        <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n        <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n          <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n        <ion-row>\n\n          <button ion-button icon-left clear small (click)="answers();">\n\n            <ion-icon class="edu-undo"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-delete"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-edit"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-like"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-meh"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n        </ion-row>\n\n        <ion-note item-end>3:43 pm</ion-note>\n\n      </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap >\n\n        <ion-avatar item-start>\n\n          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n        </ion-avatar>\n\n        <a class="media-heading">Bairon londoño gonzales</a>\n\n        <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n        <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n          <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n        <ion-row>\n\n          <button ion-button icon-left clear small (click)="answers();">\n\n            <ion-icon class="edu-undo"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-delete"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-edit"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-like"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-meh"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n        </ion-row>\n\n        <ion-note item-end>3:43 pm</ion-note>\n\n      </ion-item>\n\n      <ion-item class="bottom-border" no-lines text-wrap >\n\n        <ion-avatar item-start>\n\n          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n        </ion-avatar>\n\n        <a class="media-heading">Bairon londoño gonzales</a>\n\n        <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n        <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n          <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n        <ion-row>\n\n          <button ion-button icon-left clear small (click)="answers();">\n\n            <ion-icon class="edu-undo"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-delete"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-edit"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-like"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-meh"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n        </ion-row>\n\n        <ion-note item-end>3:43 pm</ion-note>\n\n      </ion-item>\n\n  \n\n      <ion-item class="bottom-border" no-lines text-wrap >\n\n        <ion-avatar item-start>\n\n          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n        </ion-avatar>\n\n        <a class="media-heading">Bairon londoño gonzales</a>\n\n        <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n        <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n          <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n        <ion-row>\n\n          <button ion-button icon-left clear small (click)="answers();">\n\n            <ion-icon class="edu-undo"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-delete"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-edit"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-like"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon class="edu-meh"></ion-icon>\n\n            <div>999</div>\n\n          </button>\n\n        </ion-row>\n\n        <ion-note item-end>3:43 pm</ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\comments\comments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_6__app_learn_service__["a" /* LearnService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contributions_answers_answers__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_learn_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContributionsPage = (function () {
    function ContributionsPage(navCtrl, navParams, alertCtrl, platform, transfer, file, fileChooser, service, diagnostic) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.service = service;
        this.diagnostic = diagnostic;
        this.storageDirectory = '';
        this.data = { "contenido": "", "file": "", "ext": "" };
        //Utilizado para obtener la ruta donde se va a descargar el file dependiendo de la plataforma
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalApplicationStorageDirectory;
                // this.storageDirectory = cordova.file.externalRootDirectory;
                // this.file.externalRootDirectory
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    ContributionsPage.prototype.deleteContribution = function (idx) {
        var confirm = this.alertCtrl.create({
            message: '¿Está seguro que desa eliminar la contribucion?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    ContributionsPage.prototype.editContribution = function (idx, contribution) {
        this.contenido = "Aportando";
    };
    ContributionsPage.prototype.answers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contributions_answers_answers__["a" /* ContributionsAnswerPage */]);
    };
    ContributionsPage.prototype.setVote = function (id, tipo, estado) {
    };
    ContributionsPage.prototype.uploadFile = function (file) {
        this.fileAporte = file;
    };
    //Agrega el aporte 
    ContributionsPage.prototype.add = function () {
        this.data.contenido = this.contenido;
        if (this.fileAporte != undefined) {
            this.data.ext = this.fileAporte.name.substring(this.fileAporte.name.indexOf(".") + 1, this.fileAporte.name.length);
            this.data.file = this.fileAporte;
        }
        else {
            console.log("Vacio");
        }
        this.service.newPost(this.data);
    };
    //Descarga el archivo que tenga la contribution pero primero pide la autorizacion del usuario de acceder a la multimedia del dispositivo
    //Revisa primero si existe la carpeta de descargas en el dispositivos si esto es aspi ejecuta la funcion download file la cual recibe como parametros la url de donde se va a descargar el archivo y la ubicacion donde se va a descargar el archivo en este caso la carpeta de descargas  y el nombre que se le va a dar al file si todo esto es exitoso deberia descargar el archivo en la carpeta de descargas sino ejecuta un error diciendo que el file a fallado
    ContributionsPage.prototype.downloadFile = function (url, fileName) {
        var _this = this;
        this.diagnostic.requestExternalStorageAuthorization().then(function () {
            _this.diagnostic.isExternalStorageAuthorized().then(function (isAvailable) {
                _this.file.checkDir(_this.file.externalRootDirectory, "download")
                    .then(function (success) {
                    _this.storageDirectory = _this.file.externalRootDirectory + "download/";
                    var fileTransfer = _this.transfer.create();
                    fileTransfer.download(url, encodeURI(_this.storageDirectory + fileName), true).then(function (entry) {
                        var alertSuccess = _this.alertCtrl.create({
                            title: "Download Succeeded!",
                            subTitle: fileName + " was successfully downloaded to: " + entry.toURL(),
                            buttons: ['Ok']
                        });
                        alertSuccess.present();
                    }, function (error) {
                        var alertFailure = _this.alertCtrl.create({
                            title: "Download Failed!",
                            subTitle: fileName + " was not successfully downloaded. Error code: " + error.code,
                            buttons: ['Ok']
                        });
                        alertFailure.present();
                    });
                }).catch(function (error) {
                    // this.storageDirectory = this.file.dataDirectory;
                    // alert("c error storage dir = ");
                    // alert(this.storageDirectory);
                    // alert(error);
                });
            }, function (error) {
                alert("No write Permission");
                alert(error);
                return false;
            }).catch(function (error) {
                alert('Error getting write authorization');
                alert(error);
                return false;
            });
        });
    };
    return ContributionsPage;
}());
ContributionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contributions',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\contributions\contributions.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-10>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n        </ion-avatar>\n\n        <ion-input type="text" placeholder="Aporta algo..." [(ngModel)]="contenido"></ion-input>\n\n        <button ion-button clear item-right>\n\n          <label ion-label for="fileContribution">\n\n            <ion-icon class="file-comment" ios="ios-attach" md="md-attach"></ion-icon>\n\n          </label>\n\n          <input type="file" id="fileContribution" (change)="uploadFile($event.target.files[0]);" style="display:none" />\n\n        </button>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button item-right (click)="add();">\n\n        <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-content class="list-avatar-page">\n\n  <ion-list>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <a class="media-heading">Bairon londoño gonzales</a>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n        <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small (click)="answers();">\n\n          <ion-icon class="edu-undo"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <a class="media-heading">Bairon londoño gonzales</a>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n        <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small (click)="answers();">\n\n          <ion-icon class="edu-undo"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <a class="media-heading">Bairon londoño gonzales</a>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <a (click)="downloadFile(\'http://192.168.1.7/upload/uploads/IMG_20171105_185208587.jpg\',\'samantha.jpg\');">\n\n        <ion-icon class="edu-download"></ion-icon>Archivo</a>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small (click)="answers();">\n\n          <ion-icon class="edu-undo"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item class="bottom-border" no-lines text-wrap>\n\n      <ion-avatar item-start>\n\n        <img src="https://edutin.com/app/webroot/img/uploads/4.jpg">\n\n      </ion-avatar>\n\n      <!-- <h2>Bairon londoño gonzales</h2> -->\n\n      <a>Bairon londoño gonzales</a>\n\n      <p>This town ain\'t big enough for the two of us!... This town ain\'t big enough for the two of us!</p>\n\n      <ion-row>\n\n        <button ion-button icon-left clear small (click)="answers();">\n\n          <ion-icon class="edu-undo"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-delete"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-edit"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-like"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon class="edu-meh"></ion-icon>\n\n          <div>999</div>\n\n        </button>\n\n      </ion-row>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\contributions\contributions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_6__app_learn_service__["a" /* LearnService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */]])
], ContributionsPage);

//# sourceMappingURL=contributions.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credenciales, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(url, JSON.stringify(credenciales), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'"></div>\n</div>\n'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\components\progress-bar\progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_modules__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesPage = (function () {
    function CoursesPage(navCtrl, app, navParams, screenOrientation, eventsCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.eventsCtrl = eventsCtrl;
        this.loadProgress = 50;
    }
    CoursesPage.prototype.continueCourse = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modules_modules__["a" /* ModulesPage */]);
    };
    CoursesPage.prototype.backLogin = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    CoursesPage.prototype.logOut = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backLogin(); }, 1000);
    };
    CoursesPage.prototype.ionViewDidEnter = function () {
        this.screenOrientation.unlock();
    };
    CoursesPage.prototype.getItems = function (event) {
        // this.initializeItems();
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return CoursesPage;
}());
CoursesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-courses',template:/*ion-inline-start:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\courses\courses.html"*/'<ion-header>\n\n  <ion-navbar color="primary" hideBackButton>\n\n    <ion-title text-center>Mis Courses</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logOut();">\n\n        <ion-icon class="edu-user-logout"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-scroll scrollY="true" style="height:90%">\n\n    <ion-list>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>\n\n\n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>\n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n\n\n\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>\n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n\n\n\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>        \n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n\n\n\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>        \n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n\n\n\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n         <h2 color="dark"> Curso de programación orientada a objetos</h2>\n\n        <ion-item no-lines>\n\n          <p item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n\n\n\n\n      </ion-item>\n\n      <ion-item class="bottom-border"  no-lines text-wrap (click)="continueCourse();">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://d3puay5pkxu9s4.cloudfront.net/curso/3322/card_imagen.jpg">\n\n        </ion-thumbnail>\n\n\n\n        <h2 color="dark"> Curso de programación orientada a objetos</h2>        \n\n        <ion-item no-lines>\n\n          <p  item-end class="margin-progress">{{loadProgress}}%</p>\n\n          <progress-bar [progress]="loadProgress"></progress-bar>\n\n        </ion-item>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Julio Nieto\Desktop\ionic\learn\src\pages\courses\courses.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], CoursesPage);

//# sourceMappingURL=courses.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map