module.exports = {
    removeListFieldObj: function(sourceObject, arrays = []) {
        
        arrays.forEach(item => {
            delete sourceObject[item];
        })
        return Object.assign({}, sourceObject);
    },
    
    removeListFieldArray: function (sourceArray, arrays) {
        return sourceArray.map(obj => {
            const filterObject = this.removeListFieldObj(obj, arrays);
            
            return filterObject
        })
    },
    getOneValidatorError: function (wrapErrors) {

        const errors = wrapErrors.errors;

        const keys = Object.keys(errors);

        if (keys.length == 0) {
            return new Error("No error fould ??")
        };

        const firstKey = keys[0];
        const firstMessage = errors[firstKey][0];

        return new Error(firstMessage);
    }
}