//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.transaccion = designerEvents.api.transaccion || designer.dsgEvents();

function VC_TRANSACCOO_767180(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_TRANSACCOO_767180_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_TRANSACCOO_767180_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "INTRD",
            subModuleId: "FRMCN",
            taskId: "T_INTRDOMAGPMGE_180",
            taskVersion: "1.0.0",
            viewContainerId: "VC_TRANSACCOO_767180",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/INTRD/FRMCN/T_INTRDOMAGPMGE_180",
        designerEvents.api.transaccion,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: true,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_TRANSACCOO_767180'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'INTRD',
                    subModuleId: 'FRMCN',
                    taskId: 'T_INTRDOMAGPMGE_180',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    CuentaDestino: "CuentaDestino",
                    CuentaOrigen: "CuentaOrigen"
                },
                entities: {
                    CuentaDestino: {
                        saldo: 'AT51_SALDOYYX197',
                        numeroCuenta: 'AT81_NUMERONN197',
                        _pks: [],
                        _entityId: 'EN_CUENTADSO_197',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    CuentaOrigen: {
                        valorTransferencia: 'AT40_VALORTFA671',
                        numeroCuenta: 'AT65_NUMEROUU671',
                        saldo: 'AT98_SALDOAAE671',
                        _pks: [],
                        _entityId: 'EN_CUENTAORN_671',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            var defaultValues = {
                CuentaDestino: {},
                CuentaOrigen: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_TRANSACCOO_767180, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_TRANSACCOO_767180, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_TRANSACCOO_767180, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_TRANSACCOO_767180 = {
                style: []
            };
            $scope.vc.model.CuentaOrigen = {
                valorTransferencia: $scope.vc.channelDefaultValues("CuentaOrigen", "valorTransferencia"),
                numeroCuenta: $scope.vc.channelDefaultValues("CuentaOrigen", "numeroCuenta"),
                saldo: $scope.vc.channelDefaultValues("CuentaOrigen", "saldo")
            };
            //ViewState - Group: Group1601
            $scope.vc.createViewState({
                id: "G_TRANSACNII_275244",
                hasId: true,
                componentStyle: [],
                label: "INTRD.LBL_INTRD_CUENTAONN_93646",
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: CuentaOrigen, Attribute: numeroCuenta
            $scope.vc.createViewState({
                id: "VA_NUMEROCUENTAUTR_271244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_NMEROCUNN_77936",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: CuentaOrigen, Attribute: numeroCuenta
            $scope.$watch('vc.model.CuentaOrigen.numeroCuenta', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.CuentaOrigen)) {
                        $scope.vc.tmpModel.CuentaOrigen.numeroCuenta = newValue;
                    } else {
                        $scope.vc.tmpModel.CuentaOrigen = {
                            numeroCuenta: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: CuentaOrigen, Attribute: saldo
            $scope.vc.createViewState({
                id: "VA_SALDOYZUNFMDJCX_514244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_SALDOTZIM_71982",
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: CuentaOrigen, Attribute: saldo
            $scope.$watch('vc.model.CuentaOrigen.saldo', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.CuentaOrigen)) {
                        $scope.vc.tmpModel.CuentaOrigen.saldo = newValue;
                    } else {
                        $scope.vc.tmpModel.CuentaOrigen = {
                            saldo: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: CuentaOrigen, Attribute: valorTransferencia
            $scope.vc.createViewState({
                id: "VA_VALORTRANSFEIAR_556244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_VALORATRN_66758",
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: CuentaOrigen, Attribute: valorTransferencia
            $scope.$watch('vc.model.CuentaOrigen.valorTransferencia', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.CuentaOrigen)) {
                        $scope.vc.tmpModel.CuentaOrigen.valorTransferencia = newValue;
                    } else {
                        $scope.vc.tmpModel.CuentaOrigen = {
                            valorTransferencia: newValue
                        };
                    }
                }
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONFSWHDOD_499244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_TRANSFEIR_72222",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.model.CuentaDestino = {
                saldo: $scope.vc.channelDefaultValues("CuentaDestino", "saldo"),
                numeroCuenta: $scope.vc.channelDefaultValues("CuentaDestino", "numeroCuenta")
            };
            //ViewState - Group: Group2134
            $scope.vc.createViewState({
                id: "G_TRANSACNOO_923244",
                hasId: true,
                componentStyle: [],
                label: "INTRD.LBL_INTRD_CUENTADEO_52753",
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: CuentaDestino, Attribute: numeroCuenta
            $scope.vc.createViewState({
                id: "VA_NUMEROCUENTAHVG_617244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_NMEROCUOO_72761",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: CuentaDestino, Attribute: numeroCuenta
            $scope.$watch('vc.model.CuentaDestino.numeroCuenta', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.CuentaDestino)) {
                        $scope.vc.tmpModel.CuentaDestino.numeroCuenta = newValue;
                    } else {
                        $scope.vc.tmpModel.CuentaDestino = {
                            numeroCuenta: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: CuentaDestino, Attribute: saldo
            $scope.vc.createViewState({
                id: "VA_SALDOEPMMKLUCGH_506244",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_SALDOTZIM_71982",
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: CuentaDestino, Attribute: saldo
            $scope.$watch('vc.model.CuentaDestino.saldo', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.CuentaDestino)) {
                        $scope.vc.tmpModel.CuentaDestino.saldo = newValue;
                    } else {
                        $scope.vc.tmpModel.CuentaDestino = {
                            saldo: newValue
                        };
                    }
                }
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_INTRDOMAGPMGE_180_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_INTRDOMAGPMGE_180_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_TRANSACCOO_767180');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_TRANSACCOO_767180", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "INTRD"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_TRANSACCOO_767180", {
            templateUrl: "VC_TRANSACCOO_767180_FORM.html",
            controller: "VC_TRANSACCOO_767180_CTRL",
            label: "Transaccion",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('INTRD');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_TRANSACCOO_767180?" + $.param(search);
            }
        });
        VC_TRANSACCOO_767180(cobisMainModule);
    }]);
} else {
    VC_TRANSACCOO_767180(cobisMainModule);
}