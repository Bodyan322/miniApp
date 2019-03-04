'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.converterPagePrealoading = converterPagePrealoading;
        this.$get = function() { return this; };
    }

    
        function converterPagePrealoading ($q, $ocLazyLoad) {
            "ngInject";

            const deferred = $q.defer();
            require.ensure([], require => {
                const converterModule = require('../../pages/converter/converter.module');
                $ocLazyLoad.load({
                    name: converterModule.default.name,
                });
                deferred.resolve(converterModule.default.controller);
            });
            return deferred.promise;
        }
    

}
