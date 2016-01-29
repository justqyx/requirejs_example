define(function() {
    var controller = function($scope, $state) {
        console.info('This is an Angular controller.');
    };

    return ['$scope', '$state', controller];
});
