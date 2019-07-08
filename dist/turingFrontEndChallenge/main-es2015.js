(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/auth/login/login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/auth/login/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-right\">\n            <button class=\"btn btn-link text-pink font-weight-bold\" (click)=\"bsModalRef.hide()\"><span class=\"fa fa-close\"></span></button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 p-5\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-6 text-center text-pink mb-3 \">\n                    <span class=\"h5 font-weight-bold\">Login</span>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-lg-6\">\n                    <button class=\"btn btn-facebook btn-block\" (click)=\"loginFacebook()\">Facebook<span class=\"fa fa-facebook\"></span></button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 text-center text-pink mt-2 mb-2\">\n                    <span class=\"h5 font-weight-bold\"> or </span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <form class=\"form-control form-group pl-3 pt-3 pr-3 pb-1\">\n                    <div class=\"col-12\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"email\">Email <b class=\"text-danger\">*</b></label>\n                                <input type=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control form-control-sm\" required value=\"\" name=\"email\" [(ngModel)]=\"email\"/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"password\">Password <b class=\"text-danger\">*</b></label>\n                                <input type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control form-control-sm\" required value=\"\" name=\"password\" [(ngModel)] = \"password\" />\n                            </div>\n                          </div>\n                        <div class=\"form-group row justify-content-center\">\n                            <div class=\"col-12 text-center\">\n                                <button  class=\"btn btn-pink\" (click)=\"login()\" >Sign In</button>\n                            </div>\n                        </div>\n                        <div class=\" row justify-content-start\">\n                            <div class=\"col-12 signin_button_div\">\n                                <span>Don't have an account?</span>\n                                <button  class=\"btn btn-link pl-1 signin_button_div\" (click)=\"goToRegister()\">Register</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/auth/register/register.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/auth/register/register.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-right\">\n            <button class=\"btn btn-link text-pink font-weight-bold\" (click)=\"bsModalRef.hide()\"><span class=\"fa fa-close\"></span></button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 p-5\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-6 text-center text-pink mb-3 \">\n                    <span class=\"h5 font-weight-bold\">Register</span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <form class=\"form-control form-group pl-3 pt-3 pr-3 pb-1\">\n                    <div class=\"col-12\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"name\">Name <b class=\"text-danger\">*</b></label>\n                                <input type=\"text\" id=\"name\" placeholder=\"Email\" class=\"form-control form-control-sm\" required [(ngModel)]=\"name\" name=\"name\"/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"email\">Email <b class=\"text-danger\">*</b></label>\n                                <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control form-control-sm\" required value=\"\" name=\"email\"/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"password\">Password <b class=\"text-danger\">*</b></label>\n                                <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control form-control-sm\" required value=\"\" name=\"password\"/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <label for=\"password_copy\">Confirm Password <b class=\"text-danger\">*</b></label>\n                                <input [(ngModel)]=\"password_copy\" type=\"password\" id=\"password_copy\" placeholder=\"Password\" class=\"form-control form-control-warning form-control-sm\" required value=\"\" name=\"password_copy\"/>\n                                <div class=\"form-control-feedback signin_button_div text-danger\" [class.d-none]=\"password === password_copy\">The passwords don't match</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row justify-content-center\">\n                            <div class=\"col-12 text-center\">\n                                <button  class=\"btn btn-pink\" (click)=\"register()\">Register</button>\n                            </div>\n                        </div>\n                        <div class=\" row justify-content-start\">\n                            <div class=\"col-12 signin_button_div\">\n                                <span>Already have an account?</span>\n                                <button  class=\"btn btn-link pl-1 signin_button_div\" (click)=\"goToLogin()\">Login</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/cart/cart-list/cart-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/cart/cart-list/cart-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-6 font-weight-bold\">\n                   Item\n                </div>\n                <div class=\"col text-center font-weight-bold\">\n                    Quantity\n                </div>\n                <div class=\"col text-center font-weight-bold\">\n                    Price\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 h-350 border-top\">\n                    <ng-container *ngIf=\"cart_itens\">\n                        <div class=\"row pt-3 pb-3 border-bottom item_div\"  *ngFor=\"let item of cart_itens\">\n                            <div class=\"col-12\">\n                                <div class=\"row\">\n                                        <div class=\"col text-right pr-2\">\n                                            <button class=\"btn btn-sm btn-link text-pink\" (click)=\"removeItem(item.item_id)\" >X</button>\n                                    </div>\n                                </div>\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"row pt-3 pb-3\">\n                                        <div class=\"col-4\">\n                                            <img class='h-80' src=\"https://backendapi.turing.com/images/products/{{item.image}}\">\n                                        </div>\n                                        <div class=\"col text-left text-dark\">\n                                            <div class=\"row\">\n                                                <div class=\"col-12\">\n                                                    <b>{{item.name}}</b>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-12\">\n                                                    {{item.attributes}}\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"col pt-5\">\n                                    <div class=\"row\">\n                                        <div class=\"col text-center\">\n                                            <div class=\"form-group row justify-content-start\">\n                                                <div class=\" col\">\n                                                    <div class=\"row justify-content-center\">\n                                                        <button class=\"btn-quantity btn btn-sm btn-light rounded-circle mr-2\" (click)=\"alterQuantity(-1, item)\"><i class=\"fa fa-minus text-pink mr-1 ml-1\"></i></button>\n                                                        <div class=\"col pl-0 pr-0\">\n                                                            <input class=\"form-control p-1 text-center\"  (keypress)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\" [(ngModel)]=\"item.quantity\">\n                                                        </div>\n                                                        <button class=\"btn-quantity btn btn-sm btn-light rounded-circle ml-2\" (click)=\"alterQuantity(1, item)\"><i class=\"fa fa-plus text-pink mr-1 ml-1\"></i></button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col pt-5\">\n                                    <div class=\"row\">\n                                        <div class=\"col text-center \">\n                                            <b class=\"h5 font-weight-bold text-pink\">$ {{(item.price * item.quantity).toFixed(2)}}</b>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/cart/cart.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/cart/cart.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-3\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-10\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"row\">\n                                <div class=\"col\">\n                                    <h4 class=\"font-weight-bold text-grey\">{{cart_itens.length}} Item(s) in Your Cart</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <app-cart-list (onRemoveItem)=\"removeItem($event)\"  [cart_itens]=\"cart_itens\"></app-cart-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row border-top bg-grey p-3 justify-content-center\">\n                <div class=\"col-10\">\n                    <div class=\"row\">\n                        <div class=\"col text-left\">\n                            <button class=\"btn btn-light bg-white text-pink radius-25 btn-sm pr-2 pl-2\" (click)=\"bsModalRef.hide()\"> <b>Back to Shop</b> </button>\n                        </div>\n                        <div class=\"col text-right\">\n                            <button class=\"btn btn-pink btn-sm radius-25 pr-2 pl-2\" (click)=\"tryCheckout()\" [disabled]=\"cart_itens.length < 1\"> <b>Checkout</b></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/category-list/category-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/category-list/category-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background-list-categories pt-2 \"   *ngIf=\"categories && department_id\" [ngClass]=\"{'full-shadow-inset': categories && department_id}\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-11\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-11\">\n                    <div class=\"row justify-content-center \">\n                        <div *ngFor=\"let category of categories[department_id]\" class=\"col-3 text-center category\">\n                            <!-- <button class=\"btn btn-link text-pink\"><b>{{category.name}}</b></button> -->\n                             <button class=\"btn btn-link font-weight-bold pointer\"  [class.off]=\"active_category != category.category_id\" [class.text-pink]=\"\n                             active_category == category.category_id\" (click)=\"chooseCategory(category.category_id)\">{{category.name}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/main-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/main-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 p-0 bg-light\">\n            <app-nav-bar (onTryOpenCategories)=\"tryOpenCategory($event)\" (onSearch)=\"onSearch($event)\"></app-nav-bar>\n            <app-category-list (onChooseCategory)=\"tryFilterByCategory($event)\" [department_id]=\"department_id\"></app-category-list>\n            <div class=\"row mt-4 justify-content-center\" >\n                <div class=\"col-11 bg-white\">\n                    <app-products-list></app-products-list>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/nav-bar/nav-bar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/nav-bar/nav-bar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <app-second-nav-bar></app-second-nav-bar>\n            <div class=\"row\">\n                <div class=\"bg-white col-12 pt-3\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"row justify-content-start\">\n                                <div class=\"col-3\">\n                                    <span class=\" pointer nav-shop-mate-title\" [routerLink]=\"['']\" > {{title}} </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"row\">\n                                <div class=\"col-12 text-right pr-4\">\n                                    <div class=\"row justify-content-end\">\n                                        <div class=\"col-5\">\n                                            <div class=\"searchContainer\">\n                                                <i class=\"fa fa-search searchIcon mt-1\"></i>\n                                                <input #searchInput class=\"searchBox\" type=\"text\" (keydown.enter)=\"search(searchInput.value)\" name=\"search\" placeholder=\"Search...\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"bg-white col-12 \">\n                    <div class=\"row\">\n                        <div class=\"col department\">\n                            <div class=\"row justify-content-center\" *ngIf=\"departments\">\n                                <div *ngFor=\"let department of departments\" class=\"col-4 col-md-2 col-lg-1\">\n                                    <button class=\"btn btn-link font-weight-bold pointer\" [class.off]=\"active_department != department.department_id\" [class.text-pink]=\"active_department == department.department_id\" (click)=\"openCategories(department.department_id)\">{{department.name}}</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"bg-dark col-12 pt-3\">\n                    <div class=\"row\">\n                        <div class=\"col pr-0\">\n                            <div class=\"row\" *ngIf=\"customersService.user\">\n                                <div class=\"col pr-0 text-left font-weight-bold\" *ngIf=\"!customersService.user.name\">\n                                    <span class=\"text-white d-none d-md-inline\" >Hi!</span>\n                                    <button class=\"text-pink btn btn-sm btn-link\" (click)=\"openLoginModal()\"><b>Sign<span class=\"d-none d-md-inline\"> In</span></b></button>\n                                    <span class=\"text-white d-none d-md-inline \" >or</span>\n                                    <button class=\"text-pink btn btn-link btn-sm \" (click)=\"openRegisterModal()\"> <b>Register</b> </button>\n                                </div>\n                                <div class=\"col pr-0 text-left font-weight-bold\" *ngIf=\"customersService.user.name\">\n                                    <span class=\"text-white d-none d-md-inline\" >Hi!</span>\n                                    <button class=\"text-pink btn btn-sm btn-link\" (click)=\"openUserDetail()\"><b>{{customersService.user.name}}</b></button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"row\">\n                                <div class=\"col-12 text-right\">\n                                    <div class=\"row\">\n                                        <div class=\"col pr-4\">\n                                            <img alt=\"icon bag\" src=\"/assets/Icon/icons-bag-white.png\">\n                                            <button class=\"btn btn-sm btn-link pb-1 text-white\" (click)=\"openCart()\">\n                                                <span class=\"text-white font-weight-bold\"> <span class=\"d-none d-md-inline\">Your Bag: </span> <b class=\"text-pink\">$ {{cartService.amount || '0.00'}}</b></span>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container bg-white mb-3\" >\n        <div class=\"row\" *ngIf=\"product\">\n            <div class=\"col-12\">\n                <div class=\"row justify-content-center p-5\">\n                    <div class=\"col-12 col-lg-6 mb-4\">\n                        <div class=\"row justify-content-center mb-3\">\n                             <div class=\"col-12 text-center h-200\">\n                                 <img  class=\"img-fluid\" src=\"https://backendapi.turing.com/images/products/{{selected_image}}\">\n                             </div>\n                        </div>\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-6 col-md-4 col-lg-3\">\n                                <img  class=\"img-fluid\" (click)=\"selected_image = product.image\" [class.border-pink]=\"selected_image == product.image\" src=\"https://backendapi.turing.com/images/products/{{product.image}}\">\n                            </div>\n                            <div class=\"col-6 col-md-4 col-lg-3\">\n                                <img  class=\"img-fluid\" (click)=\"selected_image = product.image_2\" [class.border-pink]=\"selected_image == product.image_2\"  src=\"https://backendapi.turing.com/images/products/{{product.image_2}}\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-lg-6\">\n                        <div class=\"row mb-4\">\n                            <div class=\"col-12\">\n                                <h3 class=\"font-weight-bold text-grey\">\n                                    {{product.name}}\n                                </h3>\n                            </div>\n                        </div>\n                        <div class=\"row mt-5\">\n                            <div class=\"col-12\">\n                                <div class=\"row\" *ngIf=\"product.discounted_price > 0\">\n                                    <div class=\"col-12\">\n                                          <span class=\"line-through\">\n                                            $ {{(product.price * quantity).toFixed(2)}}\n                                         </span>\n                                        <h5 class=\"text-pink font-weight-bold\">\n                                            $ {{(product.discounted_price * quantity).toFixed(2)}}\n                                            </h5>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"product.discounted_price <= 0\">\n                                    <div class=\"col-12\">\n                                        <h5 class=\"text-pink font-weight-bold\">\n                                            $ {{(product.price * quantity).toFixed(2)}}\n                                        </h5>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"row mb-4\">\n                            <div class=\"col-12\">\n                                <span>\n                                    {{product.description}}\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"row\">\n                                    <div class=\"col-12\" >\n                                        <ng-container *ngIf=\"attributes\">\n                                            <div class=\"form-group row justify-content-start\" *ngFor=\"let attribute of attributes; let i = index\" >\n                                                <div class=\"col-6 col-lg-4\">\n                                                    <label for=\"size\" class=\"text-grey font-weight-bold\"> {{attribute[0].attribute_name}} </label>\n                                                    <select id=\"size\" class=\"form-control form-control-sm\" [(ngModel)]=\"attributes_selected[i]\">\n                                                        <option *ngFor=\"let option of attribute\" value=\"{{option.attribute_value}}\">{{option.attribute_value}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n\n\n                                            <div class=\"form-group row justify-content-start\">\n                                                <div class=\" col-sm-4\">\n                                                    <button class=\"btn btn-pink btn-block\" (click)=\"addToCart()\" ><b>Add to Cart</b></button>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail/products-detail.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/products/products-detail/products-detail.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\n    <div class=\"row h-100 border grow\">\n        <div class=\"col-12 p-3  \">\n            <div class=\"row grow-blur\">\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-12 text-center\">\n                            <img  class=\"img-fluid\" src=\"https://backendapi.turing.com/images/products/{{product.thumbnail}}\">\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-12 text-center\">\n                            <span class=\"h6 text-pink font-weight-bold\">$ {{product.price}}</span>\n                        </div>\n                    </div>\n                    <div class=\"row m-2\">\n                        <div class=\"col-12 text-center\">\n                            <span><b>{{product.name}}</b></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn grow-display btn-pink btn-sm border-radius-24 text-white size-12 postion-absolute\" (click)=\"openProduct()\"><b>See More</b></button>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-list/products-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/main-page/products/products-list/products-list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-5\" *ngIf=\"products_list\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"row justify-content-center\">\n                <div class=\"w-200\">\n                    <div class=\"row justify-content-center \">\n\n                        <div class=\"col-2 pb-2 pr-0\">\n                            <button class=\"btn btn-link text-secondary pt-0\" (click)=\"sumPage(-1)\"><i class=\"fa fa-caret-left fa-2x\"></i></button>\n                        </div>\n                        <div class=\"col-6 pr-3\">\n                            <div class=\"row\">\n                                <div class=\"col pl-4 pr-0\">\n                                    <input type=\"text\" class=\"text-center form-control form-control-sm\" [(ngModel)]=\"page\" (input)=\"alterPage($event)\">\n                                </div>\n                                <div class=\"col pl-0 pt-2\">\n                                    <span> / {{(total_pages == 0 ? 1 : total_pages)}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-2 pb-2 pl-0\">\n                            <button class=\"btn btn-link text-secondary pt-0 pl-0 text-left\" (click)=\"sumPage(1)\"><i class=\"fa fa-caret-right fa-2x\" ></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"p-2 product-div\" *ngFor=\"let product of products_list\">\n                    <app-products-detail [product]=\"product\"></app-products-detail>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/shipping/check-shipping-address/check-shipping-address.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/shipping/check-shipping-address/check-shipping-address.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-3\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-11 border\">\n            <div class=\"row pb-2\">\n                <div class=\"col-6\">\n                    <h5 class=\"font-weight-bold text-pink\">\n                        Shipping Information\n                    </h5>\n                </div>\n            </div>\n            <div class=\" row justify-content-center\">\n                <div class=\"col-11\">\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Postal Code <span  class=\"text-danger font-weight-bold\">*</span>: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.postal_code\" >\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Address 1<span  class=\"text-danger font-weight-bold\">*</span>: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.address_1\" >\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Address 2<span  class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.address_2\" >\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>city<span  class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.city\" >\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>region<span  class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.region\" >\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>country<span  class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.country\" >\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Shipping Region<span class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <select class=\"form-control form-control-sm\"  [(ngModel)]=\"local_user.shipping_region_id\">\n                                        <option *ngFor=\"let shipping of shippings\" value=\"{{shipping.shipping_region_id}}\">{{shipping.shipping_region}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row pb-2 justify-content-center mt-3\" >\n                        <div class=\"col-4 text-center\">\n                            <button class=\"btn btn-pink btn-sm btn-block\" (click) = \"confirmShippingInformation()\"> Confirmar </button>\n                        </div>\n                        <div class=\"col-4 text-center btn-block\">\n                            <button class=\"btn btn-secondary btn-block btn-sm \" (click) = \"bsModalRef.hide()\" > Cancelar </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/shipping/payment-form/payment-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/shipping/payment-form/payment-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row pt-3 pb-3\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-4\">\n                            <h4 class=\"font-weight-bold\">SubTotal: </h4>\n                        </div>\n                        <div class=\"col\">\n                            <h4 class=\"font-weight-bold text-pink\">$ {{shoppingCartService.amount}}</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <form class=\"form-control\" novalidate [formGroup]=\"stripeTest\">\n                <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"></ngx-stripe-card>\n                <div class=\"row\">\n                    <div class=\"col-12 text-center mt-2\">\n                        <button class=\"btn btn-sm btn-pink\" (click)=\"buy()\">\n                            Submit Payment\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/user/detail-user/detail-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/user/detail-user/detail-user.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center p-5\">\n            <span class=\"fa fa-user-circle fa-4x\"></span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 text-center text-pink\">\n            <h3 class=\"font-weight-bold\">{{local_user.name}}</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 text-left item pt-2\">\n          <label class=\"font-weight-bold text-pink\">Email: </label> <span>{{local_user.email}}</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-10 text-left item pt-2 form-group form-inline\">\n            <label>Credit Card: </label>\n            <input class=\"form-control form-inline\" [disabled]=\"!bl_edit_credit_card\" [(ngModel)]=\"local_user.credit_card\">\n        </div>\n        <div class=\"col-2 text-center\">\n            <button class=\"btn btn-link text-pink\" (click)=\"bl_edit_credit_card = true\" *ngIf=\"!bl_edit_credit_card\"> <span class=\"fa fa-edit item\"></span></button>\n            <button class=\"btn btn-link text-pink\" (click)=\"updateCreditCard()\" *ngIf=\"bl_edit_credit_card\"> <span class=\"fa fa-save item\"></span></button>\n            <button class=\"btn btn-link text-pink\" (click)=\"closeCreditCard()\" *ngIf=\"bl_edit_credit_card\"> <span class=\"fa fa-close item\"></span></button>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-11 border\">\n            <div class=\"row pb-2\">\n                <div class=\"col-6\">\n                    <h5 class=\"font-weight-bold text-pink\">\n                        Location Information\n                    </h5>\n                </div>\n                <div class=\"col text-right\">\n                    <button class=\"btn btn-link text-pink\" (click) = \"bl_edit_address = true\" [class.d-none]=\"bl_edit_address\"> <span class=\"fa fa-edit item\"></span></button>\n                </div>\n            </div>\n            <div class=\" row justify-content-center\">\n                <div class=\"col-11\">\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\" [class.text-dark]=\"bl_edit_address\">\n                                    <label>Postal Code <span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.postal_code\" [disabled]=\"!bl_edit_address\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Address 1<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>: </label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.address_1\" [disabled]=\"!bl_edit_address\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Address 2<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.address_2\" [disabled]=\"!bl_edit_address\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>city<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.city\" [disabled]=\"!bl_edit_address\">\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>region<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.region\" [disabled]=\"!bl_edit_address\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>country<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.country\" [disabled]=\"!bl_edit_address\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 text-left item\">\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <label>Shipping Region<span *ngIf=\"bl_edit_address\" class=\"text-danger font-weight-bold\">*</span>:</label>\n                                </div>\n                                <div class=\"col\">\n                                    <span *ngIf=\"(!bl_edit_address && local_user.shipping_region_id == 1)\">{{user_shipping}}</span>\n                                    <select *ngIf=\"((bl_edit_address || local_user.shipping_region_id != 1) && shippings)\" class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"local_user.shipping_region_id\" [disabled]=\"!bl_edit_address\">\n                                        <option *ngFor=\"let shipping of shippings\" value=\"{{shipping.shipping_region_id}}\">{{shipping.shipping_region}}</option>\n                                    </select>\n                                </div>\n                              </div>\n                            </div>\n\n                        </div>\n                        <div class=\"row pb-2 justify-content-center\" *ngIf=\"bl_edit_address\">\n                            <div class=\"col-4 text-center\">\n                                <button class=\"btn btn-pink btn-sm btn-block\" (click) = \"updateAddress()\"> Salvar </button>\n                            </div>\n                            <div class=\"col-4 text-center btn-block\">\n                                <button class=\"btn btn-secondary btn-block btn-sm \" (click) = \"closeAddress()\" > Cancelar </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"row justify-content-center mt-4 mb-4\">\n        <div class=\"col-6 text-center\">\n           <button class=\"btn btn-secondary btn-block btn-sm\" (click)=\"logout()\"> <b>Logout</b></button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/site/user/edit-user/edit-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/site/user/edit-user/edit-user.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-user works!</p>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _site_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site/main-page/main-page.component */ "./src/app/site/main-page/main-page.component.ts");
/* harmony import */ var _site_main_page_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site/main-page/products/products-list/products-list.component */ "./src/app/site/main-page/products/products-list/products-list.component.ts");





const routes = [
    { path: '', component: _site_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], children: [
            { path: '', component: _site_main_page_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListComponent"] }
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _site_main_page_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site/main-page/nav-bar/nav-bar.component */ "./src/app/site/main-page/nav-bar/nav-bar.component.ts");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/departments.service */ "./src/app/services/departments.service.ts");
/* harmony import */ var _site_main_page_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site/main-page/category-list/category-list.component */ "./src/app/site/main-page/category-list/category-list.component.ts");
/* harmony import */ var _site_main_page_nav_bar_second_nav_bar_second_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site/main-page/nav-bar/second-nav-bar/second-nav-bar.component */ "./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.ts");
/* harmony import */ var _site_main_page_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site/main-page/products/products-list/products-list.component */ "./src/app/site/main-page/products/products-list/products-list.component.ts");
/* harmony import */ var _site_main_page_products_products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./site/main-page/products/products-detail/products-detail.component */ "./src/app/site/main-page/products/products-detail/products-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _site_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./site/main-page/main-page.component */ "./src/app/site/main-page/main-page.component.ts");
/* harmony import */ var _site_main_page_products_products_detail_complete_products_detail_complete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./site/main-page/products/products-detail-complete/products-detail-complete.component */ "./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _site_main_page_products_products_detail_complete_list_reviews_list_reviews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./site/main-page/products/products-detail-complete/list-reviews/list-reviews.component */ "./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.ts");
/* harmony import */ var _site_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./site/auth/login/login.component */ "./src/app/site/auth/login/login.component.ts");
/* harmony import */ var _site_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./site/auth/register/register.component */ "./src/app/site/auth/register/register.component.ts");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _interceptors_http_client_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interceptors/http-client.interceptor */ "./src/app/interceptors/http-client.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _site_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./site/user/edit-user/edit-user.component */ "./src/app/site/user/edit-user/edit-user.component.ts");
/* harmony import */ var _site_user_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./site/user/detail-user/detail-user.component */ "./src/app/site/user/detail-user/detail-user.component.ts");
/* harmony import */ var _site_main_page_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./site/main-page/cart/cart-list/cart-list.component */ "./src/app/site/main-page/cart/cart-list/cart-list.component.ts");
/* harmony import */ var _site_main_page_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./site/main-page/cart/cart.component */ "./src/app/site/main-page/cart/cart.component.ts");
/* harmony import */ var _site_shipping_check_shipping_address_check_shipping_address_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./site/shipping/check-shipping-address/check-shipping-address.component */ "./src/app/site/shipping/check-shipping-address/check-shipping-address.component.ts");
/* harmony import */ var _site_shipping_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./site/shipping/payment-form/payment-form.component */ "./src/app/site/shipping/payment-form/payment-form.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");


































function getAuthServiceConfigs() {
    const config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"]('352854622106208')
        }
    ]);
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _site_main_page_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
            _site_main_page_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__["CategoryListComponent"],
            _site_main_page_nav_bar_second_nav_bar_second_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["SecondNavBarComponent"],
            _site_main_page_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
            _site_main_page_products_products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductsDetailComponent"],
            _site_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"],
            _site_main_page_products_products_detail_complete_products_detail_complete_component__WEBPACK_IMPORTED_MODULE_15__["ProductsDetailCompleteComponent"],
            _site_main_page_products_products_detail_complete_list_reviews_list_reviews_component__WEBPACK_IMPORTED_MODULE_18__["ListReviewsComponent"],
            _site_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _site_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
            _site_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_27__["EditUserComponent"],
            _site_user_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_28__["DetailUserComponent"],
            _site_main_page_cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_29__["CartListComponent"],
            _site_main_page_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
            _site_shipping_check_shipping_address_check_shipping_address_component__WEBPACK_IMPORTED_MODULE_31__["CheckShippingAddressComponent"],
            _site_shipping_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_32__["PaymentFormComponent"]
        ],
        imports: [
            ngx_stripe__WEBPACK_IMPORTED_MODULE_33__["NgxStripeModule"].forRoot('pk_test_NcwpaplBCuTL6I0THD44heRe'),
            _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__["SocialLoginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig)
        ],
        entryComponents: [
            _site_main_page_products_products_detail_complete_products_detail_complete_component__WEBPACK_IMPORTED_MODULE_15__["ProductsDetailCompleteComponent"],
            _site_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _site_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
            _site_user_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_28__["DetailUserComponent"],
            _site_main_page_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
            _site_shipping_check_shipping_address_check_shipping_address_component__WEBPACK_IMPORTED_MODULE_31__["CheckShippingAddressComponent"],
            _site_shipping_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_32__["PaymentFormComponent"]
        ],
        providers: [
            _services_departments_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"],
            {
                provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_23__["AuthServiceConfig"],
                useFactory: getAuthServiceConfigs
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_client_interceptor__WEBPACK_IMPORTED_MODULE_25__["HttpClientInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/interceptors/http-client.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptors/http-client.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: HttpClientInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInterceptor", function() { return HttpClientInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HttpClientInterceptor = class HttpClientInterceptor {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(request, next) {
        const token = localStorage.getItem('accessToken');
        if (token != 'undefined' && token) {
            request = request.clone({ headers: request.headers.set('user-key', token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            const data = {
                reason: error.error && error.error.error.message ? error.error.error.message : ' unidentified error ',
                status: error.error && error.error.error.code ? error.error.error.code : '500'
            };
            this.toastr.error(data.reason, data.status);
            if (error.error && error.error.error.field) {
                this.toastr.warning(error.error.error.field, 'Field(s)');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
HttpClientInterceptor.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpClientInterceptor);



/***/ }),

/***/ "./src/app/models/customer.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/customer.model.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(customer_id, name, email, address_1, address_2, city, region, postal_code, country, shipping_region_id, day_phone, eve_phone, mob_phone, credit_card) {
        this.customer_id = customer_id;
        this.name = name;
        this.email = email;
        this.address_1 = address_1;
        this.address_2 = address_2;
        this.city = city;
        this.region = region;
        this.postal_code = postal_code;
        this.country = country;
        this.shipping_region_id = shipping_region_id;
        this.day_phone = day_phone;
        this.eve_phone = eve_phone;
        this.mob_phone = mob_phone;
        this.credit_card = credit_card;
    }
    userCanBuy() {
        let can_buy = false;
        can_buy = !!(this.email &&
            this.name &&
            this.address_1 &&
            this.address_2 &&
            this.country &&
            this.credit_card &&
            this.shipping_region_id &&
            this.postal_code &&
            this.region &&
            this.city);
        return can_buy;
    }
}
Customer.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/services/attributes.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/attributes.service.ts ***!
  \************************************************/
/*! exports provided: AttributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesService", function() { return AttributesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AttributesService = class AttributesService {
    constructor(client) {
        this.client = client;
        this.base_url = '/attributes';
    }
    find(id) {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/' + id);
    }
    findByProductId(id) {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/inProduct/' + id);
    }
    get() {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url);
    }
};
AttributesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AttributesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AttributesService);



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CategoriesService = class CategoriesService {
    constructor(client) {
        this.client = client;
        this.base_url = '/categories';
    }
    get() {
        return this.client.get('https://backendapi.turing.com' + this.base_url);
    }
    getByDepartmentId(id) {
        return this.client.get('https://backendapi.turing.com' + this.base_url + '/inDepartment/' + id);
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");

var CustomersService_1;








let CustomersService = CustomersService_1 = class CustomersService {
    constructor(client, socialAuthService) {
        this.client = client;
        this.socialAuthService = socialAuthService;
        this.base_url = '/customers';
    }
    get user() {
        return CustomersService_1._customer;
    }
    set user(customer) {
        CustomersService_1._customer = customer;
    }
    loginFacebookTuringApi(accessToken) {
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + this.base_url + '/facebook', { access_token: accessToken });
    }
    logout() {
        localStorage.setItem('facebookToken', '');
        localStorage.setItem('accessToken', '');
        this.user = new _models_customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        return true;
    }
    loginFacebookApi() {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(this.socialAuthService.signIn(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(userData => {
            localStorage.setItem('facebookToken', userData.token);
            return this.loginFacebookTuringApi(userData.token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(error => {
            localStorage.setItem('facebookToken', '');
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])();
        }));
    }
    updateCreditCard(credit_card) {
        return this.client.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + this.base_url + '/creditCard', { credit_card: credit_card });
    }
    updateAddress(user) {
        return this.client.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + this.base_url + '/address', user);
    }
    find() {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/customer');
    }
    login(email, password) {
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + this.base_url + '/login', { email: email, password: password });
    }
    register(name, email, password) {
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + this.base_url, { name: name, email: email, password: password });
    }
};
CustomersService._customer = new _models_customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
CustomersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
CustomersService = CustomersService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ "./src/app/services/departments.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/departments.service.ts ***!
  \*************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DepartmentsService = class DepartmentsService {
    constructor(client) {
        this.client = client;
        this.base_url = '/departments';
    }
    get() {
        return this.client.get('https://backendapi.turing.com' + this.base_url);
    }
};
DepartmentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DepartmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DepartmentsService);



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let OrdersService = class OrdersService {
    constructor(client) {
        this.client = client;
        this.base_url = '/orders';
    }
    create(cart_id, shipping_id, tax_id = 2) {
        let params = { cart_id, shipping_id, tax_id };
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url, params);
    }
    shortDetail(id) {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/shortDetail/' + id);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ProductsService = class ProductsService {
    constructor(client) {
        this.client = client;
        this.base_url = '/products';
    }
    find(id) {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/' + id);
    }
    get(page = 1, limit = 20, description_lenght = 200) {
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
                .append('limit', limit.toString())
                .append('description_lenght', description_lenght.toString()) };
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url, options);
    }
    getByDepartment(page = 1, limit = 20, department_id, description_lenght = 200) {
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
                .append('limit', limit.toString())
                .append('description_lenght', description_lenght.toString()) };
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/inDepartment/' + department_id, options);
    }
    getByCategory(page = 1, limit = 20, category_id, description_lenght = 200) {
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
                .append('limit', limit.toString())
                .append('description_lenght', description_lenght.toString()) };
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/inCategory/' + category_id, options);
    }
    search(page = 1, limit = 20, query_string, description_lenght = 200) {
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
                .append('limit', limit.toString())
                .append('description_lenght', description_lenght.toString())
                .append('query_string', query_string)
                .append('all_words', 'off') };
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/search', options);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/app/services/shipping.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/shipping.service.ts ***!
  \**********************************************/
/*! exports provided: ShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingService", function() { return ShippingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ShippingService = class ShippingService {
    constructor(client) {
        this.client = client;
        this.base_url = '/shipping';
    }
    find(id) {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/regions/' + id);
    }
    get() {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/regions');
    }
};
ShippingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShippingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShippingService);



/***/ }),

/***/ "./src/app/services/shoppingcart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shoppingcart.service.ts ***!
  \**************************************************/
/*! exports provided: ShoppingcartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartService", function() { return ShoppingcartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var ShoppingcartService_1;



let ShoppingcartService = ShoppingcartService_1 = class ShoppingcartService {
    constructor(client) {
        this.client = client;
        this.base_url = '/shoppingcart';
    }
    get amount() {
        return ShoppingcartService_1._amount;
    }
    set amount(amount) {
        ShoppingcartService_1._amount = amount;
    }
    find() {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/' + localStorage.getItem('cart_id'));
    }
    getTotalAmout() {
        this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/totalAmount/' + localStorage.getItem('cart_id'))
            .subscribe((result) => {
            this.amount = result.total_amount || 0;
        }, error => {
        });
    }
    add(product_id, attributes) {
        let params = {
            product_id: product_id,
            attributes: attributes,
            cart_id: localStorage.getItem('cart_id')
        };
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/add', params);
    }
    removeProduct(item_id) {
        return this.client.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/removeProduct/' + item_id);
    }
    update(item_id, quantity) {
        const params = {
            item_id: item_id,
            quantity: quantity
        };
        return this.client.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/update/' + item_id, params);
    }
    startCart() {
        if (!localStorage.getItem('cart_id')) {
            this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/generateUniqueId')
                .subscribe((result) => {
                localStorage.setItem('cart_id', result.cart_id);
                this.getTotalAmout();
            }, error => {
            });
        }
        else {
            this.getTotalAmout();
        }
    }
    get() {
        return this.client.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/' + localStorage.getItem('cart_id'));
    }
};
ShoppingcartService._amount = 0;
ShoppingcartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShoppingcartService = ShoppingcartService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingcartService);



/***/ }),

/***/ "./src/app/services/stripe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/stripe.service.ts ***!
  \********************************************/
/*! exports provided: StripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let StripeService = class StripeService {
    constructor(client) {
        this.client = client;
        this.base_url = '/stripe';
    }
    charge(stripeToken, order_id, description, amount, currency = 'USD') {
        const params = { stripeToken, order_id, description, amount, currency };
        return this.client.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + this.base_url + '/charge', params);
    }
};
StripeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StripeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StripeService);



/***/ }),

/***/ "./src/app/site/auth/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/site/auth/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin_button_div {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaXRlL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluX2J1dHRvbl9kaXZ7XG4gIGZvbnQtc2l6ZToxMnB4O1xufVxuIiwiLnNpZ25pbl9idXR0b25fZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/site/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.component */ "./src/app/site/auth/register/register.component.ts");





let LoginComponent = class LoginComponent {
    constructor(customersService, bsModalRef, bsModalService) {
        this.customersService = customersService;
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
    }
    goToRegister() {
        this.bsModalRef.hide();
        this.bsModalService.show(_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]);
    }
    loginFacebook() {
        this.customersService.loginFacebookApi().subscribe(result => {
            this.customersService.user = result.customer;
            localStorage.setItem('accessToken', result.accessToken);
            this.bsModalRef.hide();
        }, error => {
            console.log(error);
            // localStorage.setItem('accessToken', '');
        });
    }
    login() {
        this.customersService.login(this.email, this.password)
            .subscribe(result => {
            this.customersService.user = result.customer;
            localStorage.setItem('accessToken', result.accessToken);
            this.bsModalRef.hide();
        }, error => {
            localStorage.setItem('accessToken', '');
        });
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/site/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/site/auth/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/site/auth/register/register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin_button_div {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaXRlL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluX2J1dHRvbl9kaXZ7XG4gIGZvbnQtc2l6ZToxMnB4O1xufVxuXG4iLCIuc2lnbmluX2J1dHRvbl9kaXYge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/site/auth/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/site/auth/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/site/auth/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let RegisterComponent = class RegisterComponent {
    constructor(customersService, bsModalRef, bsModalService, toastr) {
        this.customersService = customersService;
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.toastr = toastr;
    }
    goToLogin() {
        this.bsModalRef.hide();
        this.bsModalService.show(_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]);
    }
    register() {
        if (this.password == this.password_copy) {
            this.customersService.register(this.name, this.email, this.password)
                .subscribe(result => {
                this.customersService.user = result.customer;
                localStorage.setItem('accessToken', result.accessToken);
                this.toastr.success('Successfully registered', 'Success');
                this.bsModalRef.hide();
            }, error => {
                localStorage.setItem('accessToken', '');
            });
        }
    }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/auth/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/site/auth/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/site/main-page/cart/cart-list/cart-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/site/main-page/cart/cart-list/cart-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-350 {\n  height: 350px;\n  overflow: auto;\n}\n\n.h-80 {\n  height: 80px;\n}\n\n.item_div {\n  min-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvY2FydC9jYXJ0LWxpc3QvY2FydC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL21haW4tcGFnZS9jYXJ0L2NhcnQtbGlzdC9jYXJ0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvbWFpbi1wYWdlL2NhcnQvY2FydC1saXN0L2NhcnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLTM1MHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uaC04MHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaXRlbV9kaXZ7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cblxuIiwiLmgtMzUwIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5oLTgwIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaXRlbV9kaXYge1xuICBtaW4td2lkdGg6IDYwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/cart/cart-list/cart-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/site/main-page/cart/cart-list/cart-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListComponent", function() { return CartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");



let CartListComponent = class CartListComponent {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.onRemoveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    alterQuantity(add_number, item) {
        if ((add_number + item.quantity) > 1 && (add_number + item.quantity) < 99) {
            item.quantity += add_number;
            this.shoppingCartService.update(item.item_id, item.quantity)
                .subscribe();
        }
    }
    removeItem(item_id) {
        this.onRemoveItem.emit(item_id);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.shoppingCartService.getTotalAmout();
    }
};
CartListComponent.ctorParameters = () => [
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartListComponent.prototype, "cart_itens", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CartListComponent.prototype, "onRemoveItem", void 0);
CartListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-list',
        template: __webpack_require__(/*! raw-loader!./cart-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/cart/cart-list/cart-list.component.html"),
        styles: [__webpack_require__(/*! ./cart-list.component.scss */ "./src/app/site/main-page/cart/cart-list/cart-list.component.scss")]
    })
], CartListComponent);



/***/ }),

/***/ "./src/app/site/main-page/cart/cart.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/site/main-page/cart/cart.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radius-25 {\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL21haW4tcGFnZS9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGl1cy0yNXtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbiIsIi5yYWRpdXMtMjUge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/cart/cart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/site/main-page/cart/cart.component.ts ***!
  \*******************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/login/login.component */ "./src/app/site/auth/login/login.component.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _shipping_check_shipping_address_check_shipping_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shipping/check-shipping-address/check-shipping-address.component */ "./src/app/site/shipping/check-shipping-address/check-shipping-address.component.ts");








let CartComponent = class CartComponent {
    constructor(bsModalRef, bsModalService, shoppingCartService, customersService, orderService) {
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.shoppingCartService = shoppingCartService;
        this.customersService = customersService;
        this.orderService = orderService;
        this.cart_itens = [];
    }
    tryCheckout() {
        if (this.customersService.user) {
            if (this.customersService.user.name) {
                this.bsModalService.show(_shipping_check_shipping_address_check_shipping_address_component__WEBPACK_IMPORTED_MODULE_7__["CheckShippingAddressComponent"], { class: 'modal-lg' });
            }
            else {
                this.bsModalService.show(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]);
            }
        }
    }
    removeItem(item_id) {
        this.shoppingCartService.removeProduct(item_id)
            .subscribe(() => {
            this.cart_itens = this.cart_itens.filter(item => item.item_id !== item_id);
        });
    }
    getItensCart() {
        this.shoppingCartService.get()
            .subscribe(result => {
            this.cart_itens = result;
        });
    }
    ngOnInit() {
        this.getItensCart();
    }
};
CartComponent.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/site/main-page/cart/cart.component.scss")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/site/main-page/category-list/category-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/site/main-page/category-list/category-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-list-categories {\n  background: #efefef;\n}\n\n.full-shadow-inset {\n  box-shadow: inset 1px 1px 7px 2px gray;\n}\n\n.category .off {\n  font-size: 15px;\n  color: #2e2e2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL21haW4tcGFnZS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaXRlL21haW4tcGFnZS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1saXN0LWNhdGVnb3JpZXN7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5mdWxsLXNoYWRvdy1pbnNldHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA3cHggMnB4IGdyYXk7XG59XG5cbi5jYXRlZ29yeSAub2Zme1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMmUyZTJlO1xufSIsIi5iYWNrZ3JvdW5kLWxpc3QtY2F0ZWdvcmllcyB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5mdWxsLXNoYWRvdy1pbnNldCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggN3B4IDJweCBncmF5O1xufVxuXG4uY2F0ZWdvcnkgLm9mZiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyZTJlMmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/site/main-page/category-list/category-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/site/main-page/category-list/category-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");



let CategoryListComponent = class CategoryListComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.onChooseCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    chooseCategory(category_id) {
        this.active_category = category_id == this.active_category ? null : category_id;
        this.onChooseCategory.emit(category_id);
    }
    getCategories() {
        this.categoryService.get()
            .subscribe((result) => {
            let category_itens_ordered_by_department = [];
            result['rows'].forEach((category) => {
                category_itens_ordered_by_department[category.department_id] = category_itens_ordered_by_department[category.department_id] || [];
                category_itens_ordered_by_department[category.department_id].push(category);
            });
            this.categories = [];
            this.categories = category_itens_ordered_by_department;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.getCategories();
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoryListComponent.prototype, "department_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CategoryListComponent.prototype, "onChooseCategory", void 0);
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/category-list/category-list.component.html"),
        styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/site/main-page/category-list/category-list.component.scss")]
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/site/main-page/main-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/site/main-page/main-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/site/main-page/main-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/site/main-page/main-page.component.ts ***!
  \*******************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products-list/products-list.component */ "./src/app/site/main-page/products/products-list/products-list.component.ts");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MainPageComponent = class MainPageComponent {
    constructor(cartService, customersService, activedRouter) {
        this.cartService = cartService;
        this.customersService = customersService;
        this.activedRouter = activedRouter;
        this.title = 'turingFrontEndChallenge';
    }
    onSearch(text = '') {
        this.department_id = null;
        this.category_id = null;
        if (text.length > 0) {
            this.product_list.setSearchText(text);
        }
        else {
            this.product_list.setListFilter();
        }
    }
    tryOpenCategory(department_id) {
        this.department_id = (this.department_id === department_id ? null : department_id);
        if (this.department_id == null) {
            this.category_id = null;
        }
        let item_id = this.department_id || 0;
        let list_type = item_id > 0 ? 'department' : '';
        this.product_list.setListFilter(list_type, item_id);
    }
    tryFilterByCategory(category_id) {
        this.category_id = (this.category_id === category_id ? null : category_id);
        let item_id = this.category_id || 0;
        let list_type = item_id > 0 ? 'category' : 'department';
        this.product_list.setListFilter(list_type, (item_id || this.department_id));
    }
    autoConnectUser() {
        this.customersService.find()
            .subscribe(result => {
            this.customersService.user = result;
        }, error => {
            localStorage.setItem('accessToken', '');
        });
    }
    autoConnectFacebook(facebookToken) {
        this.customersService.loginFacebookTuringApi(facebookToken)
            .subscribe(result => {
            this.customersService.user = result.customer;
            localStorage.setItem('accessToken', result.accessToken);
        }, error => {
            localStorage.setItem('facebookToken', '');
        });
    }
    ngOnInit() {
        this.cartService.startCart();
        if (localStorage.getItem('accessToken')) {
            this.autoConnectUser();
        }
        else if (localStorage.getItem('facebookToken')) {
            this.autoConnectFacebook(localStorage.getItem('facebookToken'));
        }
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"], { static: false })
], MainPageComponent.prototype, "product_list", void 0);
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: __webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/main-page.component.html"),
        styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/site/main-page/main-page.component.scss")]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/site/main-page/nav-bar/nav-bar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/site/main-page/nav-bar/nav-bar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-shop-mate-title {\n  /* Style for \"SHOPMATE\" */\n  width: 177px;\n  height: 30px;\n  color: #f62f5e;\n  font-family: Montserrat, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n\n.search {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n\n.nav-background-size {\n  width: 1000px;\n  height: 72px;\n  background-color: #ffffff;\n}\n\n.department .off {\n  font-size: 15px;\n  color: #2e2e2e;\n}\n\ninput[type=text] {\n  width: 50%;\n  transition: width 0.4s ease-in-out;\n  border-radius: 25px;\n}\n\n/* When the input field gets focus, change its width to 100% */\n\ninput[type=text]:focus {\n  width: 100%;\n}\n\n.searchContainer {\n  display: inline-flex;\n  position: relative;\n  border: 1px solid #ccc;\n  border-radius: 24px;\n  overflow: hidden;\n}\n\n.searchIcon {\n  padding: 0.5rem;\n}\n\n.searchBox {\n  border: 0;\n  padding: 0.5rem 0.5rem 0.5rem 0;\n  flex: 1;\n}\n\n.searchButton {\n  background: #538AC5;\n  border: 0;\n  color: white;\n  padding: 0.5rem;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL21haW4tcGFnZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FOSztFQU9MLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFFQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUEsOERBQUE7O0FBQ0E7RUFDRSxXQUFBO0FDQ0Y7O0FES0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxPQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zaXRlL21haW4tcGFnZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGluayA6ICAjZjYyZjVlO1xuXG4ubmF2LXNob3AtbWF0ZS10aXRsZXtcbiAgLyogU3R5bGUgZm9yIFwiU0hPUE1BVEVcIiAqL1xuICAgIHdpZHRoOiAxNzdweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICRwaW5rO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWFyY2h7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuLm5hdi1iYWNrZ3JvdW5kLXNpemV7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlcGFydG1lbnQgLm9mZntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzJlMmUyZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLyogV2hlbiB0aGUgaW5wdXQgZmllbGQgZ2V0cyBmb2N1cywgY2hhbmdlIGl0cyB3aWR0aCB0byAxMDAlICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuXG5cbi5zZWFyY2hDb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VhcmNoSWNvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnNlYXJjaEJveCB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcbiAgZmxleDogMTtcbn1cblxuLnNlYXJjaEJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM1MzhBQzU7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cblxuIiwiLm5hdi1zaG9wLW1hdGUtdGl0bGUge1xuICAvKiBTdHlsZSBmb3IgXCJTSE9QTUFURVwiICovXG4gIHdpZHRoOiAxNzdweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2Y2MmY1ZTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ubmF2LWJhY2tncm91bmQtc2l6ZSB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlcGFydG1lbnQgLm9mZiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyZTJlMmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi8qIFdoZW4gdGhlIGlucHV0IGZpZWxkIGdldHMgZm9jdXMsIGNoYW5nZSBpdHMgd2lkdGggdG8gMTAwJSAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYXJjaEljb24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5zZWFyY2hCb3gge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XG4gIGZsZXg6IDE7XG59XG5cbi5zZWFyY2hCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjNTM4QUM1O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/nav-bar/nav-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/site/main-page/nav-bar/nav-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/departments.service */ "./src/app/services/departments.service.ts");



let NavBarComponent = class NavBarComponent {
    constructor(departmentService) {
        this.departmentService = departmentService;
        this.title = 'SHOPMATE';
        this.onTryOpenCategories = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    search(text) {
        this.active_department = 0;
        this.onSearch.emit(text);
    }
    openCategories(department_id) {
        this.active_department = (this.active_department === department_id ? 0 : department_id);
        this.onTryOpenCategories.emit(department_id);
    }
    setDepartmentsNames() {
        this.departmentService.get()
            .subscribe((result) => {
            this.departments = [];
            this.departments = result;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.setDepartmentsNames();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _services_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavBarComponent.prototype, "onTryOpenCategories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavBarComponent.prototype, "onSearch", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/site/main-page/nav-bar/nav-bar.component.scss")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvbWFpbi1wYWdlL25hdi1iYXIvc2Vjb25kLW5hdi1iYXIvc2Vjb25kLW5hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SecondNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondNavBarComponent", function() { return SecondNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/login/login.component */ "./src/app/site/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/register/register.component */ "./src/app/site/auth/register/register.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _user_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../user/detail-user/detail-user.component */ "./src/app/site/user/detail-user/detail-user.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cart/cart.component */ "./src/app/site/main-page/cart/cart.component.ts");









let SecondNavBarComponent = class SecondNavBarComponent {
    constructor(bsModalService, customersService, cartService) {
        this.bsModalService = bsModalService;
        this.customersService = customersService;
        this.cartService = cartService;
    }
    openLoginModal() {
        this.bsModalService.show(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
    }
    openUserDetail() {
        this.bsModalService.show(_user_detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_7__["DetailUserComponent"], { class: 'modal-lg' });
    }
    openCart() {
        this.bsModalService.show(_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], { class: 'max-w-1200' });
    }
    openRegisterModal() {
        this.bsModalService.show(_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]);
    }
    ngOnInit() {
    }
};
SecondNavBarComponent.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] },
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_6__["ShoppingcartService"] }
];
SecondNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second-nav-bar',
        template: __webpack_require__(/*! raw-loader!./second-nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./second-nav-bar.component.scss */ "./src/app/site/main-page/nav-bar/second-nav-bar/second-nav-bar.component.scss")]
    })
], SecondNavBarComponent);



/***/ }),

/***/ "./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvbWFpbi1wYWdlL3Byb2R1Y3RzL3Byb2R1Y3RzLWRldGFpbC1jb21wbGV0ZS9saXN0LXJldmlld3MvbGlzdC1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ListReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReviewsComponent", function() { return ListReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListReviewsComponent = class ListReviewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-reviews',
        template: __webpack_require__(/*! raw-loader!./list-reviews.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.html"),
        styles: [__webpack_require__(/*! ./list-reviews.component.scss */ "./src/app/site/main-page/products/products-detail-complete/list-reviews/list-reviews.component.scss")]
    })
], ListReviewsComponent);



/***/ }),

/***/ "./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-200 {\n  height: 200px;\n}\n\n.btn-quantity {\n  width: 30px;\n  height: 30px;\n}\n\n.line-through {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtZGV0YWlsLWNvbXBsZXRlL3Byb2R1Y3RzLWRldGFpbC1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtZGV0YWlsLWNvbXBsZXRlL3Byb2R1Y3RzLWRldGFpbC1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDQyw2QkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtZGV0YWlsLWNvbXBsZXRlL3Byb2R1Y3RzLWRldGFpbC1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLTIwMHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5idG4tcXVhbnRpdHl7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5saW5lLXRocm91Z2h7XG4gdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4iLCIuaC0yMDAge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYnRuLXF1YW50aXR5IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmxpbmUtdGhyb3VnaCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProductsDetailCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailCompleteComponent", function() { return ProductsDetailCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_attributes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/attributes.service */ "./src/app/services/attributes.service.ts");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");






let ProductsDetailCompleteComponent = class ProductsDetailCompleteComponent {
    constructor(productService, activatedRouter, attributesService, cartService) {
        this.productService = productService;
        this.activatedRouter = activatedRouter;
        this.attributesService = attributesService;
        this.cartService = cartService;
        this.size = 'M';
        this.quantity = 1;
        this.last_valid_quantity = 1;
        this.attributes = [];
        this.attributes_selected = [];
    }
    formatAttributes(attributes) {
        let index = -1;
        let attribute_name = '';
        attributes.forEach((attribute) => {
            if (attribute.attribute_name != attribute_name) {
                index++;
                this.attributes[index] = [];
                attribute_name = attribute.attribute_name;
                this.attributes_selected[index] = attribute.attribute_value;
            }
            this.attributes[index].push(attribute);
        });
    }
    getAttributes() {
        this.attributesService.findByProductId(this.product_id)
            .subscribe(result => {
            this.formatAttributes(result);
        }, error => {
        });
    }
    getProduct() {
        this.productService.find(this.product_id)
            .subscribe(result => {
            this.product = result;
            this.selected_image = this.product.image;
        }, error => {
        });
    }
    addToCart() {
        this.cartService.add(this.product_id, this.attributes_selected.join(','))
            .subscribe(result => {
            this.cartService.getTotalAmout();
        }, error => {
        });
    }
    ngOnInit() {
        this.getProduct();
        this.getAttributes();
    }
};
ProductsDetailCompleteComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_attributes_service__WEBPACK_IMPORTED_MODULE_4__["AttributesService"] },
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartService"] }
];
ProductsDetailCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-detail-complete',
        template: __webpack_require__(/*! raw-loader!./products-detail-complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.html"),
        styles: [__webpack_require__(/*! ./products-detail-complete.component.scss */ "./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.scss")]
    })
], ProductsDetailCompleteComponent);



/***/ }),

/***/ "./src/app/site/main-page/products/products-detail/products-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail/products-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-shadow {\n  box-shadow: grey 1px 1px 5px 2px;\n}\n\n.grow .grow-display {\n  position: absolute;\n  opacity: 0;\n}\n\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  box-shadow: grey 1px 1px 5px 2px;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.grow:hover .grow-display {\n  opacity: 1;\n  bottom: 25%;\n  left: 25%;\n}\n\n.grow:hover .grow-blur {\n  opacity: 0.1;\n}\n\n.border-radius-24 {\n  border-radius: 24px;\n}\n\n.size-12 {\n  font-size: 12px;\n}\n\n.modal-dialog {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.modal-content {\n  height: 100%;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtZGV0YWlsL3Byb2R1Y3RzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtZGV0YWlsL3Byb2R1Y3RzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUFRLGdDQUFBO0FDR1I7O0FERkE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNLRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0tGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zaXRlL21haW4tcGFnZS9wcm9kdWN0cy9wcm9kdWN0cy1kZXRhaWwvcHJvZHVjdHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtc2hhZG93e1xuICBib3gtc2hhZG93OiBncmV5IDFweCAxcHggNXB4IDJweDtcbn1cblxuLmdyb3cgLmdyb3ctZGlzcGxheXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLmdyb3cgeyB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0OyB9XG4uZ3Jvdzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IGdyZXkgMXB4IDFweCA1cHggMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ncm93OmhvdmVyIC5ncm93LWRpc3BsYXkge1xuICBvcGFjaXR5OiAxO1xuICBib3R0b206IDI1JTtcbiAgbGVmdDogMjUlO1xuXG5cbn1cbi5ncm93OmhvdmVyIC5ncm93LWJsdXIge1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbi5ib3JkZXItcmFkaXVzLTI0e1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2l6ZS0xMntcbiAgZm9udC1zaXplOjEycHg7XG59XG4ubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4iLCIuZnVsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiBncmV5IDFweCAxcHggNXB4IDJweDtcbn1cblxuLmdyb3cgLmdyb3ctZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmdyb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmdyb3c6aG92ZXIge1xuICBib3gtc2hhZG93OiBncmV5IDFweCAxcHggNXB4IDJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZ3Jvdzpob3ZlciAuZ3Jvdy1kaXNwbGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgYm90dG9tOiAyNSU7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmdyb3c6aG92ZXIgLmdyb3ctYmx1ciB7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLmJvcmRlci1yYWRpdXMtMjQge1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/products/products-detail/products-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-detail/products-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailComponent", function() { return ProductsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _products_detail_complete_products_detail_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products-detail-complete/products-detail-complete.component */ "./src/app/site/main-page/products/products-detail-complete/products-detail-complete.component.ts");




let ProductsDetailComponent = class ProductsDetailComponent {
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }
    openProduct() {
        const initialState = { product_id: this.product.product_id };
        this.bsModalService.show(_products_detail_complete_products_detail_complete_component__WEBPACK_IMPORTED_MODULE_3__["ProductsDetailCompleteComponent"], { initialState, class: 'max-w-1200' });
    }
    ngOnInit() {
    }
};
ProductsDetailComponent.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsDetailComponent.prototype, "product", void 0);
ProductsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-detail',
        template: __webpack_require__(/*! raw-loader!./products-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-detail/products-detail.component.html"),
        styles: [__webpack_require__(/*! ./products-detail.component.scss */ "./src/app/site/main-page/products/products-detail/products-detail.component.scss")]
    })
], ProductsDetailComponent);



/***/ }),

/***/ "./src/app/site/main-page/products/products-list/products-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-list/products-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-div {\n  width: 180px;\n  height: 250px;\n}\n\n.w-200 {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL21haW4tcGFnZS9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS9tYWluLXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGl2e1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG4udy0yMDB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiIsIi5wcm9kdWN0LWRpdiB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLnctMjAwIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/main-page/products/products-list/products-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/site/main-page/products/products-list/products-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductsListComponent = class ProductsListComponent {
    constructor(productsService, activeRouter) {
        this.productsService = productsService;
        this.activeRouter = activeRouter;
        this.list_type = '';
        this.page = 1;
        this.page_sent = 0;
        this.products_per_page = 6;
        this.setListFilter = (list_type = '', item_id = 0) => {
            this.list_type = list_type;
            this.filter_id = item_id;
            this.getProducts();
        };
    }
    getProductsByDepartment(page = 1) {
        this.productsService.getByDepartment(page, this.products_per_page, this.filter_id).subscribe(result => {
            this.page = page;
            this.products_list = result.rows;
            this.total_products = result.count;
            this.total_pages = Math.ceil((this.total_products / this.products_per_page));
            this.page_sent = page;
        });
    }
    alterPage(event) {
        event.preventDefault();
        if (Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(event.target.value)) {
            let actual_page = event.target.value > this.total_pages ? this.page_sent : event.target.value;
            actual_page = actual_page == 0 ? 1 : actual_page;
            this.page = actual_page;
            event.target.value = actual_page;
            if (this.page_sent != actual_page) {
                this.getProducts(actual_page);
            }
        }
        else {
            this.page = this.page_sent;
            event.target.value = this.page_sent;
        }
    }
    sumPage(sum) {
        this.page = this.page + sum > this.total_pages || this.page + sum < 1 ? this.page : this.page + sum;
        if (this.page != this.page_sent) {
            this.getProducts(this.page);
        }
    }
    getProductsByCategory(page = 1) {
        this.productsService.getByCategory(page, this.products_per_page, this.filter_id).subscribe(result => {
            this.page = page;
            this.products_list = result.rows;
            this.total_products = result.count;
            this.total_pages = Math.ceil((this.total_products / this.products_per_page));
            this.page_sent = page;
        });
    }
    getProductsAll(page = 1) {
        this.productsService.get(page, this.products_per_page).subscribe(result => {
            this.page = page;
            this.products_list = result.rows;
            this.total_products = result.count;
            this.total_pages = Math.ceil((this.total_products / this.products_per_page));
            this.page_sent = page;
        });
    }
    getProductsBySearch(page = 1) {
        this.productsService.search(page, this.products_per_page, this.search_value).subscribe(result => {
            this.page = page;
            this.products_list = result.rows;
            this.total_products = result.count;
            this.total_pages = Math.ceil((this.total_products / this.products_per_page));
            this.page_sent = page;
        });
    }
    getProducts(page = 1) {
        if ((this.list_type).toLowerCase() === 'department') {
            this.getProductsByDepartment(page);
        }
        else if ((this.list_type).toLowerCase() === 'category') {
            this.getProductsByCategory(page);
        }
        else if ((this.list_type).toLowerCase() === 'search') {
            this.getProductsBySearch(page);
        }
        else {
            this.getProductsAll(page);
        }
    }
    setSearchText(text = '') {
        if (text.length > 0) {
            this.list_type = 'search';
        }
        else {
            this.list_type = '';
        }
        this.search_value = text;
        this.getProducts();
    }
    ngOnInit() {
        this.filter_id = this.activeRouter.snapshot.paramMap.get('id');
        this.getProducts();
    }
};
ProductsListComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-list',
        template: __webpack_require__(/*! raw-loader!./products-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/main-page/products/products-list/products-list.component.html"),
        styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/site/main-page/products/products-list/products-list.component.scss")]
    })
], ProductsListComponent);



/***/ }),

/***/ "./src/app/site/shipping/check-shipping-address/check-shipping-address.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/site/shipping/check-shipping-address/check-shipping-address.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvc2hpcHBpbmcvY2hlY2stc2hpcHBpbmctYWRkcmVzcy9jaGVjay1zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/site/shipping/check-shipping-address/check-shipping-address.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/site/shipping/check-shipping-address/check-shipping-address.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CheckShippingAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckShippingAddressComponent", function() { return CheckShippingAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payment-form/payment-form.component */ "./src/app/site/shipping/payment-form/payment-form.component.ts");







let CheckShippingAddressComponent = class CheckShippingAddressComponent {
    constructor(customersService, shippingService, bsModalRef, bsModalService) {
        this.customersService = customersService;
        this.shippingService = shippingService;
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.user_shipping = 'No shipping Region Selected';
    }
    confirmShippingInformation() {
        this.bsModalService.show(_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_6__["PaymentFormComponent"]);
        this.bsModalRef.hide();
    }
    checkUser() {
        let user_active = false;
        if (this.customersService.user) {
            if (this.customersService.user.name) {
                user_active = true;
            }
        }
        return true;
    }
    getShippings() {
        this.shippingService.get()
            .subscribe(result => {
            this.shippings = result;
        });
    }
    ngOnInit() {
        if (this.checkUser()) {
            this.getShippings();
            this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
        }
        else {
            this.customersService.user = new _models_customer_model__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
            this.bsModalRef.hide();
        }
    }
};
CheckShippingAddressComponent.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] },
    { type: _services_shipping_service__WEBPACK_IMPORTED_MODULE_4__["ShippingService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
CheckShippingAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-shipping-address',
        template: __webpack_require__(/*! raw-loader!./check-shipping-address.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/shipping/check-shipping-address/check-shipping-address.component.html"),
        styles: [__webpack_require__(/*! ./check-shipping-address.component.scss */ "./src/app/site/shipping/check-shipping-address/check-shipping-address.component.scss")]
    })
], CheckShippingAddressComponent);



/***/ }),

/***/ "./src/app/site/shipping/payment-form/payment-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/site/shipping/payment-form/payment-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".StripeElement {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS9zaGlwcGluZy9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL3NoaXBwaW5nL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO0VBRUEsaUNBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvc2hpcHBpbmcvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5TdHJpcGVFbGVtZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBoZWlnaHQ6IDQwcHg7XG5cbiAgcGFkZGluZzogMTBweCAxMnB4O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuIiwiLlN0cmlwZUVsZW1lbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/shipping/payment-form/payment-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/site/shipping/payment-form/payment-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormComponent", function() { return PaymentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/shoppingcart.service */ "./src/app/services/shoppingcart.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_stripe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/stripe.service */ "./src/app/services/stripe.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










let PaymentFormComponent = class PaymentFormComponent {
    constructor(fb, stripeService, shoppingCartService, orderService, customersService, bsModalRef, apiStripeService, toastr) {
        this.fb = fb;
        this.stripeService = stripeService;
        this.shoppingCartService = shoppingCartService;
        this.orderService = orderService;
        this.customersService = customersService;
        this.bsModalRef = bsModalRef;
        this.apiStripeService = apiStripeService;
        this.toastr = toastr;
        this.cardOptions = {
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    lineHeight: '40px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#CFD7E0'
                    }
                }
            }
        };
        this.elementsOptions = {
            locale: 'en'
        };
    }
    createOrder(stripe_token) {
        this.orderService.create(localStorage.getItem('cart_id'), this.customersService.user.shipping_region_id)
            .subscribe(result => {
            this.orderService.shortDetail(result.orderId)
                .subscribe(order => {
                // Api amount value is retorning like  Float string. and the Stripe Api need a integer
                let amount = parseInt((parseFloat(order.total_amount) * 100).toFixed(0), 10);
                this.apiStripeService.charge(stripe_token, order.order_id, order.name, amount)
                    .subscribe(success => {
                    this.toastr.success('Your order was concluded with success', 'Success');
                    window.location.href = '';
                });
            });
        }, error => {
            this.bsModalRef.hide();
        });
    }
    ngOnInit() {
        this.shoppingCartService.getTotalAmout();
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    buy() {
        const name = this.stripeTest.get('name').value;
        this.stripeService
            .createToken(this.card.getCard(), { name })
            .subscribe(result => {
            if (result.token) {
                this.createOrder(result.token.id);
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
            }
            else if (result.error) {
                // Error creating the token
            }
        });
    }
};
PaymentFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeService"] },
    { type: _services_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"] },
    { type: _services_stripe_service__WEBPACK_IMPORTED_MODULE_8__["StripeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeCardComponent"], { static: false })
], PaymentFormComponent.prototype, "card", void 0);
PaymentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-form',
        template: __webpack_require__(/*! raw-loader!./payment-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/shipping/payment-form/payment-form.component.html"),
        styles: [__webpack_require__(/*! ./payment-form.component.scss */ "./src/app/site/shipping/payment-form/payment-form.component.scss")]
    })
], PaymentFormComponent);



/***/ }),

/***/ "./src/app/site/user/detail-user/detail-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/site/user/detail-user/detail-user.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item label {\n  font-weight: bold;\n  color: #f62f5e;\n}\n\n.item span {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvdWdsYXMvRG9jdW1lbnRvcy9wcm9qZWN0L1R1cmluZ0Zyb250RW5kQ2hhbGxlbmdlL3NyYy9hcHAvc2l0ZS91c2VyL2RldGFpbC11c2VyL2RldGFpbC11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaXRlL3VzZXIvZGV0YWlsLXVzZXIvZGV0YWlsLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxpQkFBQTtFQUNBLGNBUE87QUNFVDs7QURRQTtFQUNFLGlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaXRlL3VzZXIvZGV0YWlsLXVzZXIvZGV0YWlsLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiRwaW5rIDogICNmNjJmNWU7XG4kZGFyazogIzJlMmUyZTtcbiRncmV5OiAjZWZlZmVmO1xuJGJsdWUtZmFjZWJvb2s6ICMzYjU5OTg7XG5cbi5pdGVtIGxhYmVse1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICRwaW5rO1xufVxuXG4uaXRlbSBzcGFue1xuICBmb250LXdlaWdodDogYm9sZDtcblxufVxuIiwiLml0ZW0gbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNjJmNWU7XG59XG5cbi5pdGVtIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/site/user/detail-user/detail-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/site/user/detail-user/detail-user.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserComponent", function() { return DetailUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/customer.model */ "./src/app/models/customer.model.ts");






let DetailUserComponent = class DetailUserComponent {
    constructor(customersService, shippingService, bsModalRef) {
        this.customersService = customersService;
        this.shippingService = shippingService;
        this.bsModalRef = bsModalRef;
        this.user_shipping = 'No shipping Region Selected';
        this.bl_edit_address = false;
        this.bl_edit_credit_card = false;
    }
    updateCreditCard() {
        this.customersService.updateCreditCard(this.local_user.credit_card)
            .subscribe(result => {
            this.customersService.user = result;
            this.closeCreditCard();
        });
    }
    logout() {
        if (this.customersService.logout()) {
            this.bsModalRef.hide();
        }
    }
    updateAddress() {
        this.customersService.updateAddress(this.local_user)
            .subscribe(result => {
            this.customersService.user = result;
            this.closeAddress();
        });
    }
    closeCreditCard(edited = false) {
        if (!edited) {
            this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
        }
        this.bl_edit_credit_card = false;
    }
    closeAddress(edited = false) {
        if (!edited) {
            this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
        }
        this.bl_edit_address = false;
    }
    checkUser() {
        let user_active = false;
        if (this.customersService.user) {
            if (this.customersService.user.name) {
                user_active = true;
            }
        }
        return true;
    }
    getShippings() {
        this.shippingService.get()
            .subscribe(result => {
            this.shippings = result;
        });
    }
    // private getShippingUser(bl_select_shippings:boolean = true){
    //   this.shippingService.find(this.customersService.user.shipping_region_id)
    //       .subscribe(
    //           result => {
    //               this.user_shipping = result[0] ? result[0].shipping_region : this.user_shipping;
    //               if(bl_select_shippings) {this.getShippings();}
    //           }
    //       );
    // }
    ngOnInit() {
        if (this.checkUser()) {
            this.getShippings();
            this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
        }
        else {
            this.customersService.user = new _models_customer_model__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
            this.bsModalRef.hide();
        }
    }
};
DetailUserComponent.ctorParameters = () => [
    { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
    { type: _services_shipping_service__WEBPACK_IMPORTED_MODULE_3__["ShippingService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
DetailUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-user',
        template: __webpack_require__(/*! raw-loader!./detail-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/user/detail-user/detail-user.component.html"),
        styles: [__webpack_require__(/*! ./detail-user.component.scss */ "./src/app/site/user/detail-user/detail-user.component.scss")]
    })
], DetailUserComponent);



/***/ }),

/***/ "./src/app/site/user/edit-user/edit-user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/site/user/edit-user/edit-user.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvdXNlci9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/site/user/edit-user/edit-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/site/user/edit-user/edit-user.component.ts ***!
  \************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditUserComponent = class EditUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: __webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/site/user/edit-user/edit-user.component.html"),
        styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/site/user/edit-user/edit-user.component.scss")]
    })
], EditUserComponent);



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
const environment = {
    production: false,
    api_url: 'https://backendapi.turing.com',
    firebaseConfig: {
        apiKey: "AIzaSyC1UgUPjz_m70ddLfWAFQHuKy4NCeyJdQY",
        authDomain: "turing-challenge-a92f9.firebaseapp.com",
        databaseURL: "https://turing-challenge-a92f9.firebaseio.com",
        projectId: "turing-challenge-a92f9",
        storageBucket: "",
        messagingSenderId: "939355548801",
        appId: "1:939355548801:web:68bff21e4c266258"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/douglas/Documentos/project/TuringFrontEndChallenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map