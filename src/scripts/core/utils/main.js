define(function() {
    return {
        isEmpty: function(obj) {
            var objType = typeof obj;

            if (objType === 'undefined' || obj === null) {
                return true;
            }

            if (objType === 'function') {
                return false;
            }

            if (objType === 'number') {
                return false;
            }

            if (objType === 'string') {
                return obj.trim().length === 0;
            }

            if (obj instanceof Array) {
                return obj.length === 0;
            }

            var keys = [];

            for (var k in obj) {
                keys.push(k);
            }

            return keys.length === 0;
        }
    };
});
