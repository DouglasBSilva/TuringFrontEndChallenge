'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">turing-front-end-challenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' : 'data-target="#xs-components-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' :
                                            'id="xs-components-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckShippingAddressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckShippingAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListReviewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListReviewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsDetailCompleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsDetailCompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondNavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecondNavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' : 'data-target="#xs-injectables-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' :
                                        'id="xs-injectables-links-module-AppModule-b0c3da9087e72d6cb8f62fd3c616d144"' }>
                                        <li class="link">
                                            <a href="injectables/DepartmentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DepartmentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link">Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartWithProduct.html" data-type="entity-link">CartWithProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryBasic.html" data-type="entity-link">CategoryBasic</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link">Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerRegister.html" data-type="entity-link">CustomerRegister</a>
                            </li>
                            <li class="link">
                                <a href="classes/Department.html" data-type="entity-link">Department</a>
                            </li>
                            <li class="link">
                                <a href="classes/Error.html" data-type="entity-link">Error</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductComplete.html" data-type="entity-link">ProductComplete</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDetail.html" data-type="entity-link">ProductDetail</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInDepartment.html" data-type="entity-link">ProductInDepartment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Review.html" data-type="entity-link">Review</a>
                            </li>
                            <li class="link">
                                <a href="classes/Review-1.html" data-type="entity-link">Review</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AttributesService.html" data-type="entity-link">AttributesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link">BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link">CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomersService.html" data-type="entity-link">CustomersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link">OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link">ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShippingService.html" data-type="entity-link">ShippingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingcartService.html" data-type="entity-link">ShoppingcartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StripeService.html" data-type="entity-link">StripeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxService.html" data-type="entity-link">TaxService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpClientInterceptor.html" data-type="entity-link">HttpClientInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});