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
                    <a href="index.html" data-type="index-link">scicat-backend-next documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' :
                                            'id="xs-controllers-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' :
                                        'id="xs-injectables-links-module-AdminModule-f832a486f55c4cf4faca8d209ccd4431fe884a34af74480d7025b445aadb31001daf16b916806bf27bed8c67b04662661ef2ca780f05673381e0fb820e7f138c"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AttachmentsModule.html" data-type="entity-link" >AttachmentsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AttachmentsModule-cc79ab4946da66f6bb05076b34962d938570bb575cbd8cc9417ee090e1b4587f343fc98032ed1c759eb34b988fed3426f72961780ec009cabdb464a21ceed8c6"' : 'data-bs-target="#xs-injectables-links-module-AttachmentsModule-cc79ab4946da66f6bb05076b34962d938570bb575cbd8cc9417ee090e1b4587f343fc98032ed1c759eb34b988fed3426f72961780ec009cabdb464a21ceed8c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AttachmentsModule-cc79ab4946da66f6bb05076b34962d938570bb575cbd8cc9417ee090e1b4587f343fc98032ed1c759eb34b988fed3426f72961780ec009cabdb464a21ceed8c6"' :
                                        'id="xs-injectables-links-module-AttachmentsModule-cc79ab4946da66f6bb05076b34962d938570bb575cbd8cc9417ee090e1b4587f343fc98032ed1c759eb34b988fed3426f72961780ec009cabdb464a21ceed8c6"' }>
                                        <li class="link">
                                            <a href="injectables/AttachmentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' :
                                            'id="xs-controllers-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' :
                                        'id="xs-injectables-links-module-AuthModule-0fc2e4175a01addae1de62ee95b8b8fa006e6f63e004908365dcbf7dd387f4eae39823a0fcae15b36590a995ec737a9b3050155938aec3a6eb1952a7fda9fdd8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LdapStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LdapStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaslModule.html" data-type="entity-link" >CaslModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CaslModule-c8aacbbac2a218fcdb45c040266b720fedf979866d9e1d303c3384236595b5527c93b17a8418ae8c7abbb455df6f77bf567d264c8b663a87a973756101667294"' : 'data-bs-target="#xs-injectables-links-module-CaslModule-c8aacbbac2a218fcdb45c040266b720fedf979866d9e1d303c3384236595b5527c93b17a8418ae8c7abbb455df6f77bf567d264c8b663a87a973756101667294"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CaslModule-c8aacbbac2a218fcdb45c040266b720fedf979866d9e1d303c3384236595b5527c93b17a8418ae8c7abbb455df6f77bf567d264c8b663a87a973756101667294"' :
                                        'id="xs-injectables-links-module-CaslModule-c8aacbbac2a218fcdb45c040266b720fedf979866d9e1d303c3384236595b5527c93b17a8418ae8c7abbb455df6f77bf567d264c8b663a87a973756101667294"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommonModule-98741d4e0aa0534f6b64eeb4e56813ae69e235395745a4128d030fab56b7f78527221a7825db92a47a862440e11d5a5ff107698af0475335149f046360ec7d30"' : 'data-bs-target="#xs-injectables-links-module-CommonModule-98741d4e0aa0534f6b64eeb4e56813ae69e235395745a4128d030fab56b7f78527221a7825db92a47a862440e11d5a5ff107698af0475335149f046360ec7d30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-98741d4e0aa0534f6b64eeb4e56813ae69e235395745a4128d030fab56b7f78527221a7825db92a47a862440e11d5a5ff107698af0475335149f046360ec7d30"' :
                                        'id="xs-injectables-links-module-CommonModule-98741d4e0aa0534f6b64eeb4e56813ae69e235395745a4128d030fab56b7f78527221a7825db92a47a862440e11d5a5ff107698af0475335149f046360ec7d30"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatablocksModule.html" data-type="entity-link" >DatablocksModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatablocksModule-0be8788e3374b1d88d81025cb93b542b25b94fd710a316eca0ce4fa997f633f87cc3dcdf5c1ce36d639dc01d58560d0bfe9f940e57985d3b5f996e7d90920713"' : 'data-bs-target="#xs-injectables-links-module-DatablocksModule-0be8788e3374b1d88d81025cb93b542b25b94fd710a316eca0ce4fa997f633f87cc3dcdf5c1ce36d639dc01d58560d0bfe9f940e57985d3b5f996e7d90920713"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatablocksModule-0be8788e3374b1d88d81025cb93b542b25b94fd710a316eca0ce4fa997f633f87cc3dcdf5c1ce36d639dc01d58560d0bfe9f940e57985d3b5f996e7d90920713"' :
                                        'id="xs-injectables-links-module-DatablocksModule-0be8788e3374b1d88d81025cb93b542b25b94fd710a316eca0ce4fa997f633f87cc3dcdf5c1ce36d639dc01d58560d0bfe9f940e57985d3b5f996e7d90920713"' }>
                                        <li class="link">
                                            <a href="injectables/DatablocksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatablocksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatasetsModule.html" data-type="entity-link" >DatasetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' : 'data-bs-target="#xs-controllers-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' :
                                            'id="xs-controllers-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' }>
                                            <li class="link">
                                                <a href="controllers/DatasetsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatasetsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' : 'data-bs-target="#xs-injectables-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' :
                                        'id="xs-injectables-links-module-DatasetsModule-47d7047e8bc6f70673d9e0b7cbef5a496e521b62810af62fe23e618d186542011161a7bacfab2664524a721482b224742db7eff9fa2af4ac2d822fa6f5ef8818"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatasetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatasetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InitialDatasetsModule.html" data-type="entity-link" >InitialDatasetsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InitialDatasetsModule-03800e84ce4f34e23e1e7410c271498390c1e0e135ee27867cfb572b509fef28f9605bbfc0fce45de9e0f5ded70323754adabdc861b561abdd25f35917ba5aee"' : 'data-bs-target="#xs-injectables-links-module-InitialDatasetsModule-03800e84ce4f34e23e1e7410c271498390c1e0e135ee27867cfb572b509fef28f9605bbfc0fce45de9e0f5ded70323754adabdc861b561abdd25f35917ba5aee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InitialDatasetsModule-03800e84ce4f34e23e1e7410c271498390c1e0e135ee27867cfb572b509fef28f9605bbfc0fce45de9e0f5ded70323754adabdc861b561abdd25f35917ba5aee"' :
                                        'id="xs-injectables-links-module-InitialDatasetsModule-03800e84ce4f34e23e1e7410c271498390c1e0e135ee27867cfb572b509fef28f9605bbfc0fce45de9e0f5ded70323754adabdc861b561abdd25f35917ba5aee"' }>
                                        <li class="link">
                                            <a href="injectables/InitialDatasetsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitialDatasetsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstrumentsModule.html" data-type="entity-link" >InstrumentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' : 'data-bs-target="#xs-controllers-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' :
                                            'id="xs-controllers-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' }>
                                            <li class="link">
                                                <a href="controllers/InstrumentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' : 'data-bs-target="#xs-injectables-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' :
                                        'id="xs-injectables-links-module-InstrumentsModule-1f583d20df2f2bf122302a516ce59a2d7b75a03154480b52a0b0c261b4eddf72f8e916581a471b50f05379e83a7fccae648808c9d2daecb3904a60af2743fa75"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstrumentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' :
                                            'id="xs-controllers-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' :
                                        'id="xs-injectables-links-module-JobsModule-db18b8d30da472c1f2c7a4ac930b4b301bbdea52461d90266928b7036e755169b7910b01fd53350c02b4c82d98270e7aebf21aa4bf95d4375b6add66b3f327c8"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogbooksModule.html" data-type="entity-link" >LogbooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' : 'data-bs-target="#xs-controllers-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' :
                                            'id="xs-controllers-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' }>
                                            <li class="link">
                                                <a href="controllers/LogbooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogbooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' : 'data-bs-target="#xs-injectables-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' :
                                        'id="xs-injectables-links-module-LogbooksModule-3f8e2822fe9ba44d6f38b284026f2d6beefcc38b2913ceb19336efcb1be8f11b563c78deee348fb3defe5537afc68eb8be132c69bf28d43c18f6237cda8d861b"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogbooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogbooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrigDatablocksModule.html" data-type="entity-link" >OrigDatablocksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' : 'data-bs-target="#xs-controllers-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' :
                                            'id="xs-controllers-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' }>
                                            <li class="link">
                                                <a href="controllers/OrigDatablocksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrigDatablocksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' : 'data-bs-target="#xs-injectables-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' :
                                        'id="xs-injectables-links-module-OrigDatablocksModule-893accfdf8c7b1fe4779cab0e31435755823286b7465d4afaf04ce8e3b2c244a903cf54e45ca451cd89035f78694c314021520c9ee61fa31f9353f365252ac48"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrigDatablocksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrigDatablocksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoliciesModule.html" data-type="entity-link" >PoliciesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' : 'data-bs-target="#xs-controllers-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' :
                                            'id="xs-controllers-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' }>
                                            <li class="link">
                                                <a href="controllers/PoliciesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoliciesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' : 'data-bs-target="#xs-injectables-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' :
                                        'id="xs-injectables-links-module-PoliciesModule-5af91051d7e4423b6f77e812545cd9e246b561abe8616685ed9831df688dc49a57ed6d328b1c97e8cf675ced9dbe625a2c20d34e90eb4c5026878655c0f11544"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PoliciesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoliciesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProposalsModule.html" data-type="entity-link" >ProposalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' : 'data-bs-target="#xs-controllers-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' :
                                            'id="xs-controllers-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' }>
                                            <li class="link">
                                                <a href="controllers/ProposalsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProposalsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' : 'data-bs-target="#xs-injectables-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' :
                                        'id="xs-injectables-links-module-ProposalsModule-39a4a67321fffa3b7a8a5dc5fafa0363b24a832ce498527a8bd28fd94a9214d19b978cbe0f37b2afc53f7cc32299180c2f02a0477d5fd25f13e597f5962a13be"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProposalsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProposalsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublishedDataModule.html" data-type="entity-link" >PublishedDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' : 'data-bs-target="#xs-controllers-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' :
                                            'id="xs-controllers-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' }>
                                            <li class="link">
                                                <a href="controllers/PublishedDataController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublishedDataController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' : 'data-bs-target="#xs-injectables-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' :
                                        'id="xs-injectables-links-module-PublishedDataModule-8a42acf59e91158f9b90623a8b28b282057d244b66e985f8b994c39ff401cc133c148eaa392d9e7b4cc5bc1e8ea99c075014bbaad7623c39627b41ee50a70126"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PublishedDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublishedDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SamplesModule.html" data-type="entity-link" >SamplesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' : 'data-bs-target="#xs-controllers-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' :
                                            'id="xs-controllers-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' }>
                                            <li class="link">
                                                <a href="controllers/SamplesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SamplesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' : 'data-bs-target="#xs-injectables-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' :
                                        'id="xs-injectables-links-module-SamplesModule-1ccb9c3188327ef36368690ddde1fcd454b2310013bca9a3680ef96bd4c3460c15827826bb81bff9de8631542d77e235baa3a50749b4d869ccc20a8bce294fc8"' }>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SamplesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SamplesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' :
                                            'id="xs-controllers-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' }>
                                            <li class="link">
                                                <a href="controllers/UserIdentitiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserIdentitiesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' :
                                        'id="xs-injectables-links-module-UsersModule-6770d1570ea8872b37ba8eea4824863c62c2d3a02324d740b3c7a0498a5ec2e98b6ec4633904d6df6eda18f088eec25c342b6f4745161f8d7ba5ce081745ae97"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserIdentitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserIdentitiesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessGroupService.html" data-type="entity-link" >AccessGroupService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Attachment.html" data-type="entity-link" >Attachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuildOpenIdClient.html" data-type="entity-link" >BuildOpenIdClient</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAttachmentDto.html" data-type="entity-link" >CreateAttachmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCustomJwt.html" data-type="entity-link" >CreateCustomJwt</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDatablockDto.html" data-type="entity-link" >CreateDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDatasetDatablockDto.html" data-type="entity-link" >CreateDatasetDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDatasetDto.html" data-type="entity-link" >CreateDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDatasetOrigDatablockDto.html" data-type="entity-link" >CreateDatasetOrigDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDerivedDatasetDto.html" data-type="entity-link" >CreateDerivedDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInitialDatasetDto.html" data-type="entity-link" >CreateInitialDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInstrumentDto.html" data-type="entity-link" >CreateInstrumentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMeasurementPeriodDto.html" data-type="entity-link" >CreateMeasurementPeriodDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrigDatablockDto.html" data-type="entity-link" >CreateOrigDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePolicyDto.html" data-type="entity-link" >CreatePolicyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProposalDto.html" data-type="entity-link" >CreateProposalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePublishedDataDto.html" data-type="entity-link" >CreatePublishedDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRawDatasetDto.html" data-type="entity-link" >CreateRawDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRelationshipDto.html" data-type="entity-link" >CreateRelationshipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSampleDto.html" data-type="entity-link" >CreateSampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTechniqueDto.html" data-type="entity-link" >CreateTechniqueDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserIdentityDto.html" data-type="entity-link" >CreateUserIdentityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserJWT.html" data-type="entity-link" >CreateUserJWT</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserRoleDto.html" data-type="entity-link" >CreateUserRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserSettingsDto.html" data-type="entity-link" >CreateUserSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CredentialsDto.html" data-type="entity-link" >CredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Datablock.html" data-type="entity-link" >Datablock</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataFile.html" data-type="entity-link" >DataFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataFileDto.html" data-type="entity-link" >DataFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatasetClass.html" data-type="entity-link" >DatasetClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatasetListDto.html" data-type="entity-link" >DatasetListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryClass.html" data-type="entity-link" >HistoryClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitialDataset.html" data-type="entity-link" >InitialDataset</a>
                            </li>
                            <li class="link">
                                <a href="classes/Instrument.html" data-type="entity-link" >Instrument</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/LifecycleClass.html" data-type="entity-link" >LifecycleClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logbook.html" data-type="entity-link" >Logbook</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurementPeriodClass.html" data-type="entity-link" >MeasurementPeriodClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageContent.html" data-type="entity-link" >MessageContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrigDatablock.html" data-type="entity-link" >OrigDatablock</a>
                            </li>
                            <li class="link">
                                <a href="classes/OwnableClass.html" data-type="entity-link" >OwnableClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/OwnableDto.html" data-type="entity-link" >OwnableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartialUpdateDatasetDto.html" data-type="entity-link" >PartialUpdateDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartialUpdateDerivedDatasetDto.html" data-type="entity-link" >PartialUpdateDerivedDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartialUpdateRawDatasetDto.html" data-type="entity-link" >PartialUpdateRawDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Policy.html" data-type="entity-link" >Policy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposalClass.html" data-type="entity-link" >ProposalClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublishedData.html" data-type="entity-link" >PublishedData</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryableClass.html" data-type="entity-link" >QueryableClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelationshipClass.html" data-type="entity-link" >RelationshipClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/SampleClass.html" data-type="entity-link" >SampleClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/SampleWithAttachmentsAndDatasets.html" data-type="entity-link" >SampleWithAttachmentsAndDatasets</a>
                            </li>
                            <li class="link">
                                <a href="classes/TechniqueClass.html" data-type="entity-link" >TechniqueClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAttachmentDto.html" data-type="entity-link" >UpdateAttachmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDatablockDto.html" data-type="entity-link" >UpdateDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDatasetDto.html" data-type="entity-link" >UpdateDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDerivedDatasetDto.html" data-type="entity-link" >UpdateDerivedDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInstrumentDto.html" data-type="entity-link" >UpdateInstrumentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrigDatablockDto.html" data-type="entity-link" >UpdateOrigDatablockDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePolicyDto.html" data-type="entity-link" >UpdatePolicyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProposalDto.html" data-type="entity-link" >UpdateProposalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePublishedDataDto.html" data-type="entity-link" >UpdatePublishedDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRawDatasetDto.html" data-type="entity-link" >UpdateRawDatasetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSampleDto.html" data-type="entity-link" >UpdateSampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserIdentityDto.html" data-type="entity-link" >UpdateUserIdentityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserSettingsDto.html" data-type="entity-link" >UpdateUserSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWherePolicyDto.html" data-type="entity-link" >UpdateWherePolicyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserIdentity.html" data-type="entity-link" >UserIdentity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfile.html" data-type="entity-link" >UserProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRole.html" data-type="entity-link" >UserRole</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSettings.html" data-type="entity-link" >UserSettings</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccessGroupFromGraphQLApiService.html" data-type="entity-link" >AccessGroupFromGraphQLApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccessGroupFromMultipleProvidersService.html" data-type="entity-link" >AccessGroupFromMultipleProvidersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccessGroupFromPayloadService.html" data-type="entity-link" >AccessGroupFromPayloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccessGroupFromStaticValuesService.html" data-type="entity-link" >AccessGroupFromStaticValuesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserSettingsInterceptor.html" data-type="entity-link" >CreateUserSettingsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterPipe.html" data-type="entity-link" >FilterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormatPhysicalQuantitiesInterceptor.html" data-type="entity-link" >FormatPhysicalQuantitiesInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FullQueryInterceptor.html" data-type="entity-link" >FullQueryInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryInterceptor.html" data-type="entity-link" >HistoryInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LdapAuthGuard.html" data-type="entity-link" >LdapAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MainDatasetsPublicInterceptor.html" data-type="entity-link" >MainDatasetsPublicInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MultiUTCTimeInterceptor.html" data-type="entity-link" >MultiUTCTimeInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OidcAuthGuard.html" data-type="entity-link" >OidcAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OidcStrategy.html" data-type="entity-link" >OidcStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisteredInterceptor.html" data-type="entity-link" >RegisteredInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubDatasetsPublicInterceptor.html" data-type="entity-link" >SubDatasetsPublicInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersLogbooksInterceptor.html" data-type="entity-link" >UsersLogbooksInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UTCTimeInterceptor.html" data-type="entity-link" >UTCTimeInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PoliciesGuard.html" data-type="entity-link" >PoliciesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAxiosError.html" data-type="entity-link" >IAxiosError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICount.html" data-type="entity-link" >ICount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatablockFields.html" data-type="entity-link" >IDatablockFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatafileFilter.html" data-type="entity-link" >IDatafileFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatasetFields.html" data-type="entity-link" >IDatasetFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatasetList.html" data-type="entity-link" >IDatasetList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDateRange.html" data-type="entity-link" >IDateRange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFacets.html" data-type="entity-link" >IFacets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilters.html" data-type="entity-link" >IFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormPopulateData.html" data-type="entity-link" >IFormPopulateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILimitsFilter.html" data-type="entity-link" >ILimitsFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrigDatablockFields.html" data-type="entity-link" >IOrigDatablockFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPolicyFilter.html" data-type="entity-link" >IPolicyFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPolicyHandler.html" data-type="entity-link" >IPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProposalAcceptedMessage.html" data-type="entity-link" >IProposalAcceptedMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProposalFieldObject.html" data-type="entity-link" >IProposalFieldObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProposalFields.html" data-type="entity-link" >IProposalFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProposalMember.html" data-type="entity-link" >IProposalMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPublishedDataFilters.html" data-type="entity-link" >IPublishedDataFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegister.html" data-type="entity-link" >IRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISampleFields.html" data-type="entity-link" >ISampleFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IScientificFilter.html" data-type="entity-link" >IScientificFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JWTUser.html" data-type="entity-link" >JWTUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPayload.html" data-type="entity-link" >UserPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});