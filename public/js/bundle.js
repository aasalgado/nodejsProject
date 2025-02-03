
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("5CMuc", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $lAjMR = parcelRequire("lAjMR");

var $eCW9J = parcelRequire("eCW9J");

var $4H9vh = parcelRequire("4H9vh");

var $66Hfb = parcelRequire("66Hfb");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function $41861caf2f99e592$var$createInstance(defaultConfig) {
    var context = new $eCW9J(defaultConfig);
    var instance = $lAjMR($eCW9J.prototype.request, context);
    // Copy axios.prototype to instance
    $5L9iB.extend(instance, $eCW9J.prototype, context);
    // Copy context to instance
    $5L9iB.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $41861caf2f99e592$var$createInstance($4H9vh(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var $41861caf2f99e592$var$axios = $41861caf2f99e592$var$createInstance($66Hfb);
// Expose Axios class to allow class inheritance
$41861caf2f99e592$var$axios.Axios = $eCW9J;

// Expose Cancel & CancelToken
$41861caf2f99e592$var$axios.CanceledError = (parcelRequire("2ec4o"));

$41861caf2f99e592$var$axios.CancelToken = (parcelRequire("gM8tV"));

$41861caf2f99e592$var$axios.isCancel = (parcelRequire("lVOtS"));

$41861caf2f99e592$var$axios.VERSION = (parcelRequire("j3qOn")).version;

$41861caf2f99e592$var$axios.toFormData = (parcelRequire("dXBUD"));

// Expose AxiosError class
$41861caf2f99e592$var$axios.AxiosError = (parcelRequire("5vfnB"));
// alias for CanceledError for backward compatibility
$41861caf2f99e592$var$axios.Cancel = $41861caf2f99e592$var$axios.CanceledError;
// Expose all/spread
$41861caf2f99e592$var$axios.all = function all(promises) {
    return Promise.all(promises);
};

$41861caf2f99e592$var$axios.spread = (parcelRequire("9abYU"));

// Expose isAxiosError
$41861caf2f99e592$var$axios.isAxiosError = (parcelRequire("7HwIz"));
module.exports = $41861caf2f99e592$var$axios;
// Allow use of default import syntax in TypeScript
module.exports.default = $41861caf2f99e592$var$axios;

});
parcelRegister("5L9iB", function(module, exports) {
'use strict';

var $lAjMR = parcelRequire("lAjMR");
// utils is a library of generic helper functions non-specific to axios
var $43188e2628f109d7$var$toString = Object.prototype.toString;
// eslint-disable-next-line func-names
var $43188e2628f109d7$var$kindOf = function(cache) {
    // eslint-disable-next-line func-names
    return function(thing) {
        var str = $43188e2628f109d7$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
}(Object.create(null));
function $43188e2628f109d7$var$kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
        return $43188e2628f109d7$var$kindOf(thing) === type;
    };
}
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function $43188e2628f109d7$var$isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function $43188e2628f109d7$var$isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $43188e2628f109d7$var$isBuffer(val) {
    return val !== null && !$43188e2628f109d7$var$isUndefined(val) && val.constructor !== null && !$43188e2628f109d7$var$isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ var $43188e2628f109d7$var$isArrayBuffer = $43188e2628f109d7$var$kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $43188e2628f109d7$var$isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $43188e2628f109d7$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function $43188e2628f109d7$var$isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function $43188e2628f109d7$var$isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function $43188e2628f109d7$var$isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function $43188e2628f109d7$var$isPlainObject(val) {
    if ($43188e2628f109d7$var$kindOf(val) !== 'object') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ var $43188e2628f109d7$var$isDate = $43188e2628f109d7$var$kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var $43188e2628f109d7$var$isFile = $43188e2628f109d7$var$kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ var $43188e2628f109d7$var$isBlob = $43188e2628f109d7$var$kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var $43188e2628f109d7$var$isFileList = $43188e2628f109d7$var$kindOfTest('FileList');
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function $43188e2628f109d7$var$isFunction(val) {
    return $43188e2628f109d7$var$toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function $43188e2628f109d7$var$isStream(val) {
    return $43188e2628f109d7$var$isObject(val) && $43188e2628f109d7$var$isFunction(val.pipe);
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function $43188e2628f109d7$var$isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (typeof FormData === 'function' && thing instanceof FormData || $43188e2628f109d7$var$toString.call(thing) === pattern || $43188e2628f109d7$var$isFunction(thing.toString) && thing.toString() === pattern);
}
/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ var $43188e2628f109d7$var$isURLSearchParams = $43188e2628f109d7$var$kindOfTest('URLSearchParams');
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function $43188e2628f109d7$var$trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function $43188e2628f109d7$var$isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function $43188e2628f109d7$var$forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($43188e2628f109d7$var$isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function $43188e2628f109d7$var$merge() {
    var result = {};
    function assignValue(val, key) {
        if ($43188e2628f109d7$var$isPlainObject(result[key]) && $43188e2628f109d7$var$isPlainObject(val)) result[key] = $43188e2628f109d7$var$merge(result[key], val);
        else if ($43188e2628f109d7$var$isPlainObject(val)) result[key] = $43188e2628f109d7$var$merge({}, val);
        else if ($43188e2628f109d7$var$isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)$43188e2628f109d7$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function $43188e2628f109d7$var$extend(a, b, thisArg) {
    $43188e2628f109d7$var$forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = $lAjMR(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function $43188e2628f109d7$var$stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */ function $43188e2628f109d7$var$inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
}
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */ function $43188e2628f109d7$var$toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
}
/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */ function $43188e2628f109d7$var$endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
}
/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */ function $43188e2628f109d7$var$toArray(thing) {
    if (!thing) return null;
    var i = thing.length;
    if ($43188e2628f109d7$var$isUndefined(i)) return null;
    var arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
}
// eslint-disable-next-line func-names
var $43188e2628f109d7$var$isTypedArray = function(TypedArray) {
    // eslint-disable-next-line func-names
    return function(thing) {
        return TypedArray && thing instanceof TypedArray;
    };
}(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
module.exports = {
    isArray: $43188e2628f109d7$var$isArray,
    isArrayBuffer: $43188e2628f109d7$var$isArrayBuffer,
    isBuffer: $43188e2628f109d7$var$isBuffer,
    isFormData: $43188e2628f109d7$var$isFormData,
    isArrayBufferView: $43188e2628f109d7$var$isArrayBufferView,
    isString: $43188e2628f109d7$var$isString,
    isNumber: $43188e2628f109d7$var$isNumber,
    isObject: $43188e2628f109d7$var$isObject,
    isPlainObject: $43188e2628f109d7$var$isPlainObject,
    isUndefined: $43188e2628f109d7$var$isUndefined,
    isDate: $43188e2628f109d7$var$isDate,
    isFile: $43188e2628f109d7$var$isFile,
    isBlob: $43188e2628f109d7$var$isBlob,
    isFunction: $43188e2628f109d7$var$isFunction,
    isStream: $43188e2628f109d7$var$isStream,
    isURLSearchParams: $43188e2628f109d7$var$isURLSearchParams,
    isStandardBrowserEnv: $43188e2628f109d7$var$isStandardBrowserEnv,
    forEach: $43188e2628f109d7$var$forEach,
    merge: $43188e2628f109d7$var$merge,
    extend: $43188e2628f109d7$var$extend,
    trim: $43188e2628f109d7$var$trim,
    stripBOM: $43188e2628f109d7$var$stripBOM,
    inherits: $43188e2628f109d7$var$inherits,
    toFlatObject: $43188e2628f109d7$var$toFlatObject,
    kindOf: $43188e2628f109d7$var$kindOf,
    kindOfTest: $43188e2628f109d7$var$kindOfTest,
    endsWith: $43188e2628f109d7$var$endsWith,
    toArray: $43188e2628f109d7$var$toArray,
    isTypedArray: $43188e2628f109d7$var$isTypedArray,
    isFileList: $43188e2628f109d7$var$isFileList
};

});
parcelRegister("lAjMR", function(module, exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

});


parcelRegister("eCW9J", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $hJwOe = parcelRequire("hJwOe");

var $aThYR = parcelRequire("aThYR");

var $4BlRR = parcelRequire("4BlRR");

var $4H9vh = parcelRequire("4H9vh");

var $ftcTt = parcelRequire("ftcTt");

var $2fOIl = parcelRequire("2fOIl");
var $aa61b9de0c435b24$var$validators = $2fOIl.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function $aa61b9de0c435b24$var$Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new $aThYR(),
        response: new $aThYR()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ $aa61b9de0c435b24$var$Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else config = configOrUrl || {};
    config = $4H9vh(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    var transitional = config.transitional;
    if (transitional !== undefined) $2fOIl.assertOptions(transitional, {
        silentJSONParsing: $aa61b9de0c435b24$var$validators.transitional($aa61b9de0c435b24$var$validators.boolean),
        forcedJSONParsing: $aa61b9de0c435b24$var$validators.transitional($aa61b9de0c435b24$var$validators.boolean),
        clarifyTimeoutError: $aa61b9de0c435b24$var$validators.transitional($aa61b9de0c435b24$var$validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            $4BlRR,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = $4BlRR(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
$aa61b9de0c435b24$var$Axios.prototype.getUri = function getUri(config) {
    config = $4H9vh(this.defaults, config);
    var fullPath = $ftcTt(config.baseURL, config.url);
    return $hJwOe(fullPath, config.params, config.paramsSerializer);
};
// Provide aliases for supported request methods
$5L9iB.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $aa61b9de0c435b24$var$Axios.prototype[method] = function(url, config) {
        return this.request($4H9vh(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
$5L9iB.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request($4H9vh(config || {}, {
                method: method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $aa61b9de0c435b24$var$Axios.prototype[method] = generateHTTPMethod();
    $aa61b9de0c435b24$var$Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
module.exports = $aa61b9de0c435b24$var$Axios;

});
parcelRegister("hJwOe", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
function $ce9016dfe031c60d$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if ($5L9iB.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        $5L9iB.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if ($5L9iB.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            $5L9iB.forEach(val, function parseValue(v) {
                if ($5L9iB.isDate(v)) v = v.toISOString();
                else if ($5L9iB.isObject(v)) v = JSON.stringify(v);
                parts.push($ce9016dfe031c60d$var$encode(key) + '=' + $ce9016dfe031c60d$var$encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

});

parcelRegister("aThYR", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
function $7edcfd05d353a263$var$InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ $7edcfd05d353a263$var$InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ $7edcfd05d353a263$var$InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ $7edcfd05d353a263$var$InterceptorManager.prototype.forEach = function forEach(fn) {
    $5L9iB.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = $7edcfd05d353a263$var$InterceptorManager;

});

parcelRegister("4BlRR", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $5I3mI = parcelRequire("5I3mI");

var $lVOtS = parcelRequire("lVOtS");

var $66Hfb = parcelRequire("66Hfb");

var $2ec4o = parcelRequire("2ec4o");
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ function $359b9495a9e42485$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new $2ec4o();
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    $359b9495a9e42485$var$throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = $5I3mI.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = $5L9iB.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    $5L9iB.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || $66Hfb.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        $359b9495a9e42485$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = $5I3mI.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!$lVOtS(reason)) {
            $359b9495a9e42485$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = $5I3mI.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

});
parcelRegister("5I3mI", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $66Hfb = parcelRequire("66Hfb");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || $66Hfb;
    /*eslint no-param-reassign:0*/ $5L9iB.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

});
parcelRegister("66Hfb", function(module, exports) {

var $hxXMC = parcelRequire("hxXMC");
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $1TKGw = parcelRequire("1TKGw");

var $5vfnB = parcelRequire("5vfnB");

var $8D2fC = parcelRequire("8D2fC");

var $dXBUD = parcelRequire("dXBUD");
var $4724d8f7c9696468$var$DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function $4724d8f7c9696468$var$setContentTypeIfUnset(headers, value) {
    if (!$5L9iB.isUndefined(headers) && $5L9iB.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}


function $4724d8f7c9696468$var$getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = (parcelRequire("dCgal"));
    else if (typeof $hxXMC !== 'undefined' && Object.prototype.toString.call($hxXMC) === '[object process]') // For node use HTTP adapter
    adapter = (parcelRequire("dCgal"));
    return adapter;
}
function $4724d8f7c9696468$var$stringifySafely(rawValue, parser, encoder) {
    if ($5L9iB.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return $5L9iB.trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}

var $4724d8f7c9696468$var$defaults = {
    transitional: $8D2fC,
    adapter: $4724d8f7c9696468$var$getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            $1TKGw(headers, 'Accept');
            $1TKGw(headers, 'Content-Type');
            if ($5L9iB.isFormData(data) || $5L9iB.isArrayBuffer(data) || $5L9iB.isBuffer(data) || $5L9iB.isStream(data) || $5L9iB.isFile(data) || $5L9iB.isBlob(data)) return data;
            if ($5L9iB.isArrayBufferView(data)) return data.buffer;
            if ($5L9iB.isURLSearchParams(data)) {
                $4724d8f7c9696468$var$setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            var isObjectPayload = $5L9iB.isObject(data);
            var contentType = headers && headers['Content-Type'];
            var isFileList;
            if ((isFileList = $5L9iB.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
                var _FormData = this.env && this.env.FormData;
                return $dXBUD(isFileList ? {
                    'files[]': data
                } : data, _FormData && new _FormData());
            } else if (isObjectPayload || contentType === 'application/json') {
                $4724d8f7c9696468$var$setContentTypeIfUnset(headers, 'application/json');
                return $4724d8f7c9696468$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || $4724d8f7c9696468$var$defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && $5L9iB.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === 'SyntaxError') throw $5vfnB.from(e, $5vfnB.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (parcelRequire("jnQsJ"))
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
$5L9iB.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    $4724d8f7c9696468$var$defaults.headers[method] = {};
});
$5L9iB.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    $4724d8f7c9696468$var$defaults.headers[method] = $5L9iB.merge($4724d8f7c9696468$var$DEFAULT_CONTENT_TYPE);
});
module.exports = $4724d8f7c9696468$var$defaults;

});
parcelRegister("hxXMC", function(module, exports) {
// shim for using process in browser
var $cc63e46e5c11757c$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $cc63e46e5c11757c$var$cachedSetTimeout;
var $cc63e46e5c11757c$var$cachedClearTimeout;
function $cc63e46e5c11757c$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $cc63e46e5c11757c$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $cc63e46e5c11757c$var$cachedSetTimeout = setTimeout;
        else $cc63e46e5c11757c$var$cachedSetTimeout = $cc63e46e5c11757c$var$defaultSetTimout;
    } catch (e) {
        $cc63e46e5c11757c$var$cachedSetTimeout = $cc63e46e5c11757c$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $cc63e46e5c11757c$var$cachedClearTimeout = clearTimeout;
        else $cc63e46e5c11757c$var$cachedClearTimeout = $cc63e46e5c11757c$var$defaultClearTimeout;
    } catch (e) {
        $cc63e46e5c11757c$var$cachedClearTimeout = $cc63e46e5c11757c$var$defaultClearTimeout;
    }
})();
function $cc63e46e5c11757c$var$runTimeout(fun) {
    if ($cc63e46e5c11757c$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($cc63e46e5c11757c$var$cachedSetTimeout === $cc63e46e5c11757c$var$defaultSetTimout || !$cc63e46e5c11757c$var$cachedSetTimeout) && setTimeout) {
        $cc63e46e5c11757c$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cc63e46e5c11757c$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $cc63e46e5c11757c$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $cc63e46e5c11757c$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $cc63e46e5c11757c$var$runClearTimeout(marker) {
    if ($cc63e46e5c11757c$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($cc63e46e5c11757c$var$cachedClearTimeout === $cc63e46e5c11757c$var$defaultClearTimeout || !$cc63e46e5c11757c$var$cachedClearTimeout) && clearTimeout) {
        $cc63e46e5c11757c$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cc63e46e5c11757c$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $cc63e46e5c11757c$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $cc63e46e5c11757c$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $cc63e46e5c11757c$var$queue = [];
var $cc63e46e5c11757c$var$draining = false;
var $cc63e46e5c11757c$var$currentQueue;
var $cc63e46e5c11757c$var$queueIndex = -1;
function $cc63e46e5c11757c$var$cleanUpNextTick() {
    if (!$cc63e46e5c11757c$var$draining || !$cc63e46e5c11757c$var$currentQueue) return;
    $cc63e46e5c11757c$var$draining = false;
    if ($cc63e46e5c11757c$var$currentQueue.length) $cc63e46e5c11757c$var$queue = $cc63e46e5c11757c$var$currentQueue.concat($cc63e46e5c11757c$var$queue);
    else $cc63e46e5c11757c$var$queueIndex = -1;
    if ($cc63e46e5c11757c$var$queue.length) $cc63e46e5c11757c$var$drainQueue();
}
function $cc63e46e5c11757c$var$drainQueue() {
    if ($cc63e46e5c11757c$var$draining) return;
    var timeout = $cc63e46e5c11757c$var$runTimeout($cc63e46e5c11757c$var$cleanUpNextTick);
    $cc63e46e5c11757c$var$draining = true;
    var len = $cc63e46e5c11757c$var$queue.length;
    while(len){
        $cc63e46e5c11757c$var$currentQueue = $cc63e46e5c11757c$var$queue;
        $cc63e46e5c11757c$var$queue = [];
        while(++$cc63e46e5c11757c$var$queueIndex < len)if ($cc63e46e5c11757c$var$currentQueue) $cc63e46e5c11757c$var$currentQueue[$cc63e46e5c11757c$var$queueIndex].run();
        $cc63e46e5c11757c$var$queueIndex = -1;
        len = $cc63e46e5c11757c$var$queue.length;
    }
    $cc63e46e5c11757c$var$currentQueue = null;
    $cc63e46e5c11757c$var$draining = false;
    $cc63e46e5c11757c$var$runClearTimeout(timeout);
}
$cc63e46e5c11757c$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $cc63e46e5c11757c$var$queue.push(new $cc63e46e5c11757c$var$Item(fun, args));
    if ($cc63e46e5c11757c$var$queue.length === 1 && !$cc63e46e5c11757c$var$draining) $cc63e46e5c11757c$var$runTimeout($cc63e46e5c11757c$var$drainQueue);
};
// v8 likes predictible objects
function $cc63e46e5c11757c$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$cc63e46e5c11757c$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$cc63e46e5c11757c$var$process.title = 'browser';
$cc63e46e5c11757c$var$process.browser = true;
$cc63e46e5c11757c$var$process.env = {};
$cc63e46e5c11757c$var$process.argv = [];
$cc63e46e5c11757c$var$process.version = ''; // empty string to avoid regexp issues
$cc63e46e5c11757c$var$process.versions = {};
function $cc63e46e5c11757c$var$noop() {}
$cc63e46e5c11757c$var$process.on = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.addListener = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.once = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.off = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.removeListener = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.removeAllListeners = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.emit = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.prependListener = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.prependOnceListener = $cc63e46e5c11757c$var$noop;
$cc63e46e5c11757c$var$process.listeners = function(name) {
    return [];
};
$cc63e46e5c11757c$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$cc63e46e5c11757c$var$process.cwd = function() {
    return '/';
};
$cc63e46e5c11757c$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$cc63e46e5c11757c$var$process.umask = function() {
    return 0;
};

});

parcelRegister("1TKGw", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    $5L9iB.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

});

parcelRegister("5vfnB", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ function $401bc71700d38834$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
$5L9iB.inherits($401bc71700d38834$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
var $401bc71700d38834$var$prototype = $401bc71700d38834$var$AxiosError.prototype;
var $401bc71700d38834$var$descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED'
].forEach(function(code) {
    $401bc71700d38834$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($401bc71700d38834$var$AxiosError, $401bc71700d38834$var$descriptors);
Object.defineProperty($401bc71700d38834$var$prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
$401bc71700d38834$var$AxiosError.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create($401bc71700d38834$var$prototype);
    $5L9iB.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    });
    $401bc71700d38834$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
module.exports = $401bc71700d38834$var$AxiosError;

});

parcelRegister("8D2fC", function(module, exports) {
'use strict';
module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

});

parcelRegister("dXBUD", function(module, exports) {

var $5nEY3 = parcelRequire("5nEY3");
var $a29e31b044ff1280$require$Buffer = $5nEY3.Buffer;
'use strict';

var $5L9iB = parcelRequire("5L9iB");
/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/ function $a29e31b044ff1280$var$toFormData(obj, formData) {
    // eslint-disable-next-line no-param-reassign
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
        if (value === null) return '';
        if ($5L9iB.isDate(value)) return value.toISOString();
        if ($5L9iB.isArrayBuffer(value) || $5L9iB.isTypedArray(value)) return typeof Blob === 'function' ? new Blob([
            value
        ]) : $a29e31b044ff1280$require$Buffer.from(value);
        return value;
    }
    function build(data, parentKey) {
        if ($5L9iB.isPlainObject(data) || $5L9iB.isArray(data)) {
            if (stack.indexOf(data) !== -1) throw Error('Circular reference detected in ' + parentKey);
            stack.push(data);
            $5L9iB.forEach(data, function each(value, key) {
                if ($5L9iB.isUndefined(value)) return;
                var fullKey = parentKey ? parentKey + '.' + key : key;
                var arr;
                if (value && !parentKey && typeof value === 'object') {
                    if ($5L9iB.endsWith(key, '{}')) // eslint-disable-next-line no-param-reassign
                    value = JSON.stringify(value);
                    else if ($5L9iB.endsWith(key, '[]') && (arr = $5L9iB.toArray(value))) {
                        // eslint-disable-next-line func-names
                        arr.forEach(function(el) {
                            !$5L9iB.isUndefined(el) && formData.append(fullKey, convertValue(el));
                        });
                        return;
                    }
                }
                build(value, fullKey);
            });
            stack.pop();
        } else formData.append(parentKey, convertValue(data));
    }
    build(obj);
    return formData;
}
module.exports = $a29e31b044ff1280$var$toFormData;

});
parcelRegister("5nEY3", function(module, exports) {

$parcel$export(module.exports, "Buffer", function () { return $3eaee10c5d82efb4$export$a143d493d941bafc; }, function (v) { return $3eaee10c5d82efb4$export$a143d493d941bafc = v; });
$parcel$export(module.exports, "INSPECT_MAX_BYTES", function () { return $3eaee10c5d82efb4$export$f99ded8fe4b79145; }, function (v) { return $3eaee10c5d82efb4$export$f99ded8fe4b79145 = v; });
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ var $3eaee10c5d82efb4$export$a143d493d941bafc;
var $3eaee10c5d82efb4$export$e4cf37d7f6fb9e0a;
var $3eaee10c5d82efb4$export$f99ded8fe4b79145;
var $3eaee10c5d82efb4$export$599f31c3813fae4d;
'use strict';

var $kthLs = parcelRequire("kthLs");

var $7YdIq = parcelRequire("7YdIq");
const $3eaee10c5d82efb4$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
$3eaee10c5d82efb4$export$a143d493d941bafc = $3eaee10c5d82efb4$var$Buffer;
$3eaee10c5d82efb4$export$e4cf37d7f6fb9e0a = $3eaee10c5d82efb4$var$SlowBuffer;
$3eaee10c5d82efb4$export$f99ded8fe4b79145 = 50;
const $3eaee10c5d82efb4$var$K_MAX_LENGTH = 0x7fffffff;
$3eaee10c5d82efb4$export$599f31c3813fae4d = $3eaee10c5d82efb4$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $3eaee10c5d82efb4$var$Buffer.TYPED_ARRAY_SUPPORT = $3eaee10c5d82efb4$var$typedArraySupport();
if (!$3eaee10c5d82efb4$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $3eaee10c5d82efb4$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($3eaee10c5d82efb4$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($3eaee10c5d82efb4$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $3eaee10c5d82efb4$var$createBuffer(length) {
    if (length > $3eaee10c5d82efb4$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $3eaee10c5d82efb4$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $3eaee10c5d82efb4$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return $3eaee10c5d82efb4$var$allocUnsafe(arg);
    }
    return $3eaee10c5d82efb4$var$from(arg, encodingOrOffset, length);
}
$3eaee10c5d82efb4$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $3eaee10c5d82efb4$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return $3eaee10c5d82efb4$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $3eaee10c5d82efb4$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if ($3eaee10c5d82efb4$var$isInstance(value, ArrayBuffer) || value && $3eaee10c5d82efb4$var$isInstance(value.buffer, ArrayBuffer)) return $3eaee10c5d82efb4$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && ($3eaee10c5d82efb4$var$isInstance(value, SharedArrayBuffer) || value && $3eaee10c5d82efb4$var$isInstance(value.buffer, SharedArrayBuffer))) return $3eaee10c5d82efb4$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $3eaee10c5d82efb4$var$Buffer.from(valueOf, encodingOrOffset, length);
    const b = $3eaee10c5d82efb4$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return $3eaee10c5d82efb4$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $3eaee10c5d82efb4$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $3eaee10c5d82efb4$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($3eaee10c5d82efb4$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($3eaee10c5d82efb4$var$Buffer, Uint8Array);
function $3eaee10c5d82efb4$var$assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $3eaee10c5d82efb4$var$alloc(size, fill, encoding) {
    $3eaee10c5d82efb4$var$assertSize(size);
    if (size <= 0) return $3eaee10c5d82efb4$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? $3eaee10c5d82efb4$var$createBuffer(size).fill(fill, encoding) : $3eaee10c5d82efb4$var$createBuffer(size).fill(fill);
    return $3eaee10c5d82efb4$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $3eaee10c5d82efb4$var$Buffer.alloc = function(size, fill, encoding) {
    return $3eaee10c5d82efb4$var$alloc(size, fill, encoding);
};
function $3eaee10c5d82efb4$var$allocUnsafe(size) {
    $3eaee10c5d82efb4$var$assertSize(size);
    return $3eaee10c5d82efb4$var$createBuffer(size < 0 ? 0 : $3eaee10c5d82efb4$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $3eaee10c5d82efb4$var$Buffer.allocUnsafe = function(size) {
    return $3eaee10c5d82efb4$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $3eaee10c5d82efb4$var$Buffer.allocUnsafeSlow = function(size) {
    return $3eaee10c5d82efb4$var$allocUnsafe(size);
};
function $3eaee10c5d82efb4$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$3eaee10c5d82efb4$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = $3eaee10c5d82efb4$var$byteLength(string, encoding) | 0;
    let buf = $3eaee10c5d82efb4$var$createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $3eaee10c5d82efb4$var$fromArrayLike(array) {
    const length = array.length < 0 ? 0 : $3eaee10c5d82efb4$var$checked(array.length) | 0;
    const buf = $3eaee10c5d82efb4$var$createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $3eaee10c5d82efb4$var$fromArrayView(arrayView) {
    if ($3eaee10c5d82efb4$var$isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return $3eaee10c5d82efb4$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $3eaee10c5d82efb4$var$fromArrayLike(arrayView);
}
function $3eaee10c5d82efb4$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $3eaee10c5d82efb4$var$Buffer.prototype);
    return buf;
}
function $3eaee10c5d82efb4$var$fromObject(obj) {
    if ($3eaee10c5d82efb4$var$Buffer.isBuffer(obj)) {
        const len = $3eaee10c5d82efb4$var$checked(obj.length) | 0;
        const buf = $3eaee10c5d82efb4$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || $3eaee10c5d82efb4$var$numberIsNaN(obj.length)) return $3eaee10c5d82efb4$var$createBuffer(0);
        return $3eaee10c5d82efb4$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return $3eaee10c5d82efb4$var$fromArrayLike(obj.data);
}
function $3eaee10c5d82efb4$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $3eaee10c5d82efb4$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $3eaee10c5d82efb4$var$K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function $3eaee10c5d82efb4$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $3eaee10c5d82efb4$var$Buffer.alloc(+length);
}
$3eaee10c5d82efb4$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $3eaee10c5d82efb4$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$3eaee10c5d82efb4$var$Buffer.compare = function compare(a, b) {
    if ($3eaee10c5d82efb4$var$isInstance(a, Uint8Array)) a = $3eaee10c5d82efb4$var$Buffer.from(a, a.offset, a.byteLength);
    if ($3eaee10c5d82efb4$var$isInstance(b, Uint8Array)) b = $3eaee10c5d82efb4$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(a) || !$3eaee10c5d82efb4$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$3eaee10c5d82efb4$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
$3eaee10c5d82efb4$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $3eaee10c5d82efb4$var$Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = $3eaee10c5d82efb4$var$Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if ($3eaee10c5d82efb4$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(buf)) buf = $3eaee10c5d82efb4$var$Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $3eaee10c5d82efb4$var$byteLength(string, encoding) {
    if ($3eaee10c5d82efb4$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $3eaee10c5d82efb4$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return $3eaee10c5d82efb4$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return $3eaee10c5d82efb4$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $3eaee10c5d82efb4$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
$3eaee10c5d82efb4$var$Buffer.byteLength = $3eaee10c5d82efb4$var$byteLength;
function $3eaee10c5d82efb4$var$slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return $3eaee10c5d82efb4$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return $3eaee10c5d82efb4$var$utf8Slice(this, start, end);
        case 'ascii':
            return $3eaee10c5d82efb4$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return $3eaee10c5d82efb4$var$latin1Slice(this, start, end);
        case 'base64':
            return $3eaee10c5d82efb4$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $3eaee10c5d82efb4$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$3eaee10c5d82efb4$var$Buffer.prototype._isBuffer = true;
function $3eaee10c5d82efb4$var$swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$3eaee10c5d82efb4$var$Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)$3eaee10c5d82efb4$var$swap(this, i, i + 1);
    return this;
};
$3eaee10c5d82efb4$var$Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        $3eaee10c5d82efb4$var$swap(this, i, i + 3);
        $3eaee10c5d82efb4$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$3eaee10c5d82efb4$var$Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        $3eaee10c5d82efb4$var$swap(this, i, i + 7);
        $3eaee10c5d82efb4$var$swap(this, i + 1, i + 6);
        $3eaee10c5d82efb4$var$swap(this, i + 2, i + 5);
        $3eaee10c5d82efb4$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$3eaee10c5d82efb4$var$Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $3eaee10c5d82efb4$var$utf8Slice(this, 0, length);
    return $3eaee10c5d82efb4$var$slowToString.apply(this, arguments);
};
$3eaee10c5d82efb4$var$Buffer.prototype.toLocaleString = $3eaee10c5d82efb4$var$Buffer.prototype.toString;
$3eaee10c5d82efb4$var$Buffer.prototype.equals = function equals(b) {
    if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $3eaee10c5d82efb4$var$Buffer.compare(this, b) === 0;
};
$3eaee10c5d82efb4$var$Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = $3eaee10c5d82efb4$export$f99ded8fe4b79145;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if ($3eaee10c5d82efb4$var$customInspectSymbol) $3eaee10c5d82efb4$var$Buffer.prototype[$3eaee10c5d82efb4$var$customInspectSymbol] = $3eaee10c5d82efb4$var$Buffer.prototype.inspect;
$3eaee10c5d82efb4$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($3eaee10c5d82efb4$var$isInstance(target, Uint8Array)) target = $3eaee10c5d82efb4$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $3eaee10c5d82efb4$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($3eaee10c5d82efb4$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = $3eaee10c5d82efb4$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($3eaee10c5d82efb4$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $3eaee10c5d82efb4$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $3eaee10c5d82efb4$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function $3eaee10c5d82efb4$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
$3eaee10c5d82efb4$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$3eaee10c5d82efb4$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $3eaee10c5d82efb4$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$3eaee10c5d82efb4$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $3eaee10c5d82efb4$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $3eaee10c5d82efb4$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($3eaee10c5d82efb4$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $3eaee10c5d82efb4$var$utf8Write(buf, string, offset, length) {
    return $3eaee10c5d82efb4$var$blitBuffer($3eaee10c5d82efb4$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $3eaee10c5d82efb4$var$asciiWrite(buf, string, offset, length) {
    return $3eaee10c5d82efb4$var$blitBuffer($3eaee10c5d82efb4$var$asciiToBytes(string), buf, offset, length);
}
function $3eaee10c5d82efb4$var$base64Write(buf, string, offset, length) {
    return $3eaee10c5d82efb4$var$blitBuffer($3eaee10c5d82efb4$var$base64ToBytes(string), buf, offset, length);
}
function $3eaee10c5d82efb4$var$ucs2Write(buf, string, offset, length) {
    return $3eaee10c5d82efb4$var$blitBuffer($3eaee10c5d82efb4$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$3eaee10c5d82efb4$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return $3eaee10c5d82efb4$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return $3eaee10c5d82efb4$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return $3eaee10c5d82efb4$var$asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return $3eaee10c5d82efb4$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $3eaee10c5d82efb4$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
$3eaee10c5d82efb4$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $3eaee10c5d82efb4$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $kthLs.fromByteArray(buf);
    else return $kthLs.fromByteArray(buf.slice(start, end));
}
function $3eaee10c5d82efb4$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $3eaee10c5d82efb4$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const $3eaee10c5d82efb4$var$MAX_ARGUMENTS_LENGTH = 0x1000;
function $3eaee10c5d82efb4$var$decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= $3eaee10c5d82efb4$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $3eaee10c5d82efb4$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $3eaee10c5d82efb4$var$asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function $3eaee10c5d82efb4$var$latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $3eaee10c5d82efb4$var$hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += $3eaee10c5d82efb4$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $3eaee10c5d82efb4$var$utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$3eaee10c5d82efb4$var$Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $3eaee10c5d82efb4$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $3eaee10c5d82efb4$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
$3eaee10c5d82efb4$var$Buffer.prototype.readUintLE = $3eaee10c5d82efb4$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUintBE = $3eaee10c5d82efb4$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUint8 = $3eaee10c5d82efb4$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUint16LE = $3eaee10c5d82efb4$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUint16BE = $3eaee10c5d82efb4$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUint32LE = $3eaee10c5d82efb4$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readUint32BE = $3eaee10c5d82efb4$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$3eaee10c5d82efb4$var$Buffer.prototype.readBigUInt64LE = $3eaee10c5d82efb4$var$defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    $3eaee10c5d82efb4$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $3eaee10c5d82efb4$var$boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
$3eaee10c5d82efb4$var$Buffer.prototype.readBigUInt64BE = $3eaee10c5d82efb4$var$defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    $3eaee10c5d82efb4$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $3eaee10c5d82efb4$var$boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
$3eaee10c5d82efb4$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$3eaee10c5d82efb4$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$3eaee10c5d82efb4$var$Buffer.prototype.readBigInt64LE = $3eaee10c5d82efb4$var$defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    $3eaee10c5d82efb4$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $3eaee10c5d82efb4$var$boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
$3eaee10c5d82efb4$var$Buffer.prototype.readBigInt64BE = $3eaee10c5d82efb4$var$defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    $3eaee10c5d82efb4$var$validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) $3eaee10c5d82efb4$var$boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
$3eaee10c5d82efb4$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return $7YdIq.read(this, offset, true, 23, 4);
};
$3eaee10c5d82efb4$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 4, this.length);
    return $7YdIq.read(this, offset, false, 23, 4);
};
$3eaee10c5d82efb4$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 8, this.length);
    return $7YdIq.read(this, offset, true, 52, 8);
};
$3eaee10c5d82efb4$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkOffset(offset, 8, this.length);
    return $7YdIq.read(this, offset, false, 52, 8);
};
function $3eaee10c5d82efb4$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
$3eaee10c5d82efb4$var$Buffer.prototype.writeUintLE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $3eaee10c5d82efb4$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUintBE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $3eaee10c5d82efb4$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUint8 = $3eaee10c5d82efb4$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUint16LE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUint16BE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUint32LE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeUint32BE = $3eaee10c5d82efb4$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function $3eaee10c5d82efb4$var$wrtBigUInt64LE(buf, value, offset, min, max) {
    $3eaee10c5d82efb4$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function $3eaee10c5d82efb4$var$wrtBigUInt64BE(buf, value, offset, min, max) {
    $3eaee10c5d82efb4$var$checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
$3eaee10c5d82efb4$var$Buffer.prototype.writeBigUInt64LE = $3eaee10c5d82efb4$var$defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return $3eaee10c5d82efb4$var$wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$3eaee10c5d82efb4$var$Buffer.prototype.writeBigUInt64BE = $3eaee10c5d82efb4$var$defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return $3eaee10c5d82efb4$var$wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$3eaee10c5d82efb4$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $3eaee10c5d82efb4$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        $3eaee10c5d82efb4$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeBigInt64LE = $3eaee10c5d82efb4$var$defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return $3eaee10c5d82efb4$var$wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
$3eaee10c5d82efb4$var$Buffer.prototype.writeBigInt64BE = $3eaee10c5d82efb4$var$defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return $3eaee10c5d82efb4$var$wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function $3eaee10c5d82efb4$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function $3eaee10c5d82efb4$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    $7YdIq.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$3eaee10c5d82efb4$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $3eaee10c5d82efb4$var$writeFloat(this, value, offset, true, noAssert);
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $3eaee10c5d82efb4$var$writeFloat(this, value, offset, false, noAssert);
};
function $3eaee10c5d82efb4$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $3eaee10c5d82efb4$var$checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $7YdIq.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$3eaee10c5d82efb4$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $3eaee10c5d82efb4$var$writeDouble(this, value, offset, true, noAssert);
};
$3eaee10c5d82efb4$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $3eaee10c5d82efb4$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$3eaee10c5d82efb4$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$3eaee10c5d82efb4$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$3eaee10c5d82efb4$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !$3eaee10c5d82efb4$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = $3eaee10c5d82efb4$var$Buffer.isBuffer(val) ? val : $3eaee10c5d82efb4$var$Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const $3eaee10c5d82efb4$var$errors = {};
function $3eaee10c5d82efb4$var$E(sym, getMessage, Base) {
    $3eaee10c5d82efb4$var$errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
$3eaee10c5d82efb4$var$E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
$3eaee10c5d82efb4$var$E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
$3eaee10c5d82efb4$var$E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = $3eaee10c5d82efb4$var$addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = $3eaee10c5d82efb4$var$addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function $3eaee10c5d82efb4$var$addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function $3eaee10c5d82efb4$var$checkBounds(buf, offset, byteLength) {
    $3eaee10c5d82efb4$var$validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) $3eaee10c5d82efb4$var$boundsError(offset, buf.length - (byteLength + 1));
}
function $3eaee10c5d82efb4$var$checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new $3eaee10c5d82efb4$var$errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    $3eaee10c5d82efb4$var$checkBounds(buf, offset, byteLength);
}
function $3eaee10c5d82efb4$var$validateNumber(value, name) {
    if (typeof value !== 'number') throw new $3eaee10c5d82efb4$var$errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function $3eaee10c5d82efb4$var$boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        $3eaee10c5d82efb4$var$validateNumber(value, type);
        throw new $3eaee10c5d82efb4$var$errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new $3eaee10c5d82efb4$var$errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new $3eaee10c5d82efb4$var$errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const $3eaee10c5d82efb4$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $3eaee10c5d82efb4$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($3eaee10c5d82efb4$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function $3eaee10c5d82efb4$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function $3eaee10c5d82efb4$var$asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function $3eaee10c5d82efb4$var$utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $3eaee10c5d82efb4$var$base64ToBytes(str) {
    return $kthLs.toByteArray($3eaee10c5d82efb4$var$base64clean(str));
}
function $3eaee10c5d82efb4$var$blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $3eaee10c5d82efb4$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $3eaee10c5d82efb4$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const $3eaee10c5d82efb4$var$hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function $3eaee10c5d82efb4$var$defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? $3eaee10c5d82efb4$var$BufferBigIntNotDefined : fn;
}
function $3eaee10c5d82efb4$var$BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

});
parcelRegister("kthLs", function(module, exports) {

$parcel$export(module.exports, "toByteArray", function () { return $ee744bc0a53dc891$export$d622b2ad8d90c771; }, function (v) { return $ee744bc0a53dc891$export$d622b2ad8d90c771 = v; });
$parcel$export(module.exports, "fromByteArray", function () { return $ee744bc0a53dc891$export$6100ba28696e12de; }, function (v) { return $ee744bc0a53dc891$export$6100ba28696e12de = v; });
var $ee744bc0a53dc891$export$a48f0734ac7c2329;
var $ee744bc0a53dc891$export$d622b2ad8d90c771;
var $ee744bc0a53dc891$export$6100ba28696e12de;
'use strict';
$ee744bc0a53dc891$export$a48f0734ac7c2329 = $ee744bc0a53dc891$var$byteLength;
$ee744bc0a53dc891$export$d622b2ad8d90c771 = $ee744bc0a53dc891$var$toByteArray;
$ee744bc0a53dc891$export$6100ba28696e12de = $ee744bc0a53dc891$var$fromByteArray;
var $ee744bc0a53dc891$var$lookup = [];
var $ee744bc0a53dc891$var$revLookup = [];
var $ee744bc0a53dc891$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $ee744bc0a53dc891$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $ee744bc0a53dc891$var$i = 0, $ee744bc0a53dc891$var$len = $ee744bc0a53dc891$var$code.length; $ee744bc0a53dc891$var$i < $ee744bc0a53dc891$var$len; ++$ee744bc0a53dc891$var$i){
    $ee744bc0a53dc891$var$lookup[$ee744bc0a53dc891$var$i] = $ee744bc0a53dc891$var$code[$ee744bc0a53dc891$var$i];
    $ee744bc0a53dc891$var$revLookup[$ee744bc0a53dc891$var$code.charCodeAt($ee744bc0a53dc891$var$i)] = $ee744bc0a53dc891$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$ee744bc0a53dc891$var$revLookup['-'.charCodeAt(0)] = 62;
$ee744bc0a53dc891$var$revLookup['_'.charCodeAt(0)] = 63;
function $ee744bc0a53dc891$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $ee744bc0a53dc891$var$byteLength(b64) {
    var lens = $ee744bc0a53dc891$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $ee744bc0a53dc891$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $ee744bc0a53dc891$var$toByteArray(b64) {
    var tmp;
    var lens = $ee744bc0a53dc891$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $ee744bc0a53dc891$var$Arr($ee744bc0a53dc891$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i)] << 18 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i)] << 2 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i)] << 10 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $ee744bc0a53dc891$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function $ee744bc0a53dc891$var$tripletToBase64(num) {
    return $ee744bc0a53dc891$var$lookup[num >> 18 & 0x3F] + $ee744bc0a53dc891$var$lookup[num >> 12 & 0x3F] + $ee744bc0a53dc891$var$lookup[num >> 6 & 0x3F] + $ee744bc0a53dc891$var$lookup[num & 0x3F];
}
function $ee744bc0a53dc891$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push($ee744bc0a53dc891$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $ee744bc0a53dc891$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($ee744bc0a53dc891$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($ee744bc0a53dc891$var$lookup[tmp >> 2] + $ee744bc0a53dc891$var$lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($ee744bc0a53dc891$var$lookup[tmp >> 10] + $ee744bc0a53dc891$var$lookup[tmp >> 4 & 0x3F] + $ee744bc0a53dc891$var$lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

});

parcelRegister("7YdIq", function(module, exports) {

$parcel$export(module.exports, "read", function () { return $5cd8c699a0933dc8$export$aafa59e2e03f2942; }, function (v) { return $5cd8c699a0933dc8$export$aafa59e2e03f2942 = v; });
$parcel$export(module.exports, "write", function () { return $5cd8c699a0933dc8$export$68d8715fc104d294; }, function (v) { return $5cd8c699a0933dc8$export$68d8715fc104d294 = v; });
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $5cd8c699a0933dc8$export$aafa59e2e03f2942;
var $5cd8c699a0933dc8$export$68d8715fc104d294;
$5cd8c699a0933dc8$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$5cd8c699a0933dc8$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

});



parcelRegister("dCgal", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");

var $7eJ3M = parcelRequire("7eJ3M");

var $jfXk5 = parcelRequire("jfXk5");

var $hJwOe = parcelRequire("hJwOe");

var $ftcTt = parcelRequire("ftcTt");

var $6mUM7 = parcelRequire("6mUM7");

var $ceAvV = parcelRequire("ceAvV");

var $8D2fC = parcelRequire("8D2fC");

var $5vfnB = parcelRequire("5vfnB");

var $2ec4o = parcelRequire("2ec4o");

var $fiQjT = parcelRequire("fiQjT");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener('abort', onCanceled);
        }
        if ($5L9iB.isFormData(requestData) && $5L9iB.isStandardBrowserEnv()) delete requestHeaders['Content-Type']; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = $ftcTt(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), $hJwOe(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? $6mUM7(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            $7eJ3M(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new $5vfnB('Request aborted', $5vfnB.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new $5vfnB('Network Error', $5vfnB.ERR_NETWORK, config, request, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || $8D2fC;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new $5vfnB(timeoutErrorMessage, transitional.clarifyTimeoutError ? $5vfnB.ETIMEDOUT : $5vfnB.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ($5L9iB.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || $ceAvV(fullPath)) && config.xsrfCookieName ? $jfXk5.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) $5L9iB.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!$5L9iB.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new $2ec4o() : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
        if (!requestData) requestData = null;
        var protocol = $fiQjT(fullPath);
        if (protocol && [
            'http',
            'https',
            'file'
        ].indexOf(protocol) === -1) {
            reject(new $5vfnB('Unsupported protocol ' + protocol + ':', $5vfnB.ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData);
    });
};

});
parcelRegister("7eJ3M", function(module, exports) {
'use strict';

var $5vfnB = parcelRequire("5vfnB");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new $5vfnB('Request failed with status code ' + response.status, [
        $5vfnB.ERR_BAD_REQUEST,
        $5vfnB.ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
};

});

parcelRegister("jfXk5", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
module.exports = $5L9iB.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if ($5L9iB.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if ($5L9iB.isString(path)) cookie.push('path=' + path);
            if ($5L9iB.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

});

parcelRegister("ftcTt", function(module, exports) {
'use strict';

var $bXTuI = parcelRequire("bXTuI");

var $aAGFx = parcelRequire("aAGFx");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !$bXTuI(requestedURL)) return $aAGFx(baseURL, requestedURL);
    return requestedURL;
};

});
parcelRegister("bXTuI", function(module, exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

});

parcelRegister("aAGFx", function(module, exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

});


parcelRegister("6mUM7", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var $4a30d681516e4260$var$ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    $5L9iB.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = $5L9iB.trim(line.substr(0, i)).toLowerCase();
        val = $5L9iB.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && $4a30d681516e4260$var$ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

});

parcelRegister("ceAvV", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
module.exports = $5L9iB.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = $5L9iB.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

});

parcelRegister("2ec4o", function(module, exports) {
'use strict';

var $5vfnB = parcelRequire("5vfnB");

var $5L9iB = parcelRequire("5L9iB");
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function $19f6406182087def$var$CanceledError(message) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    $5vfnB.call(this, message == null ? 'canceled' : message, $5vfnB.ERR_CANCELED);
    this.name = 'CanceledError';
}
$5L9iB.inherits($19f6406182087def$var$CanceledError, $5vfnB, {
    __CANCEL__: true
});
module.exports = $19f6406182087def$var$CanceledError;

});

parcelRegister("fiQjT", function(module, exports) {
'use strict';
module.exports = function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
};

});


parcelRegister("jnQsJ", function(module, exports) {
// eslint-disable-next-line strict
module.exports = null;

});



parcelRegister("lVOtS", function(module, exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

});


parcelRegister("4H9vh", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if ($5L9iB.isPlainObject(target) && $5L9iB.isPlainObject(source)) return $5L9iB.merge(target, source);
        else if ($5L9iB.isPlainObject(source)) return $5L9iB.merge({}, source);
        else if ($5L9iB.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!$5L9iB.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!$5L9iB.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!$5L9iB.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!$5L9iB.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!$5L9iB.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'beforeRedirect': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    $5L9iB.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        $5L9iB.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

});

parcelRegister("2fOIl", function(module, exports) {
'use strict';

var $j3qOn = parcelRequire("j3qOn");
var $1a445244957196f0$require$VERSION = $j3qOn.version;

var $5vfnB = parcelRequire("5vfnB");
var $1a445244957196f0$var$validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    $1a445244957196f0$var$validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var $1a445244957196f0$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ $1a445244957196f0$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + $1a445244957196f0$require$VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new $5vfnB(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), $5vfnB.ERR_DEPRECATED);
        if (version && !$1a445244957196f0$var$deprecatedWarnings[opt]) {
            $1a445244957196f0$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function $1a445244957196f0$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new $5vfnB('options must be an object', $5vfnB.ERR_BAD_OPTION_VALUE);
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new $5vfnB('option ' + opt + ' must be ' + result, $5vfnB.ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new $5vfnB('Unknown option ' + opt, $5vfnB.ERR_BAD_OPTION);
    }
}
module.exports = {
    assertOptions: $1a445244957196f0$var$assertOptions,
    validators: $1a445244957196f0$var$validators
};

});
parcelRegister("j3qOn", function(module, exports) {
module.exports = {
    "version": "0.27.2"
};

});



parcelRegister("gM8tV", function(module, exports) {
'use strict';

var $2ec4o = parcelRequire("2ec4o");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function $c367b553bd69b270$var$CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new $2ec4o(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ $c367b553bd69b270$var$CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ $c367b553bd69b270$var$CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ $c367b553bd69b270$var$CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ $c367b553bd69b270$var$CancelToken.source = function source() {
    var cancel;
    var token = new $c367b553bd69b270$var$CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = $c367b553bd69b270$var$CancelToken;

});

parcelRegister("9abYU", function(module, exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

});

parcelRegister("7HwIz", function(module, exports) {
'use strict';

var $5L9iB = parcelRequire("5L9iB");
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return $5L9iB.isObject(payload) && payload.isAxiosError === true;
};

});


/* eslint-disable */ // import 'core-js/stable';
// import 'regenerator-runtime/runtime';
/* eslint-disable */ const $cd0fa37e6ea74d26$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhbGdhZG8iLCJhIjoiY201aGxnODNkMG01NzJscHdoMGZoZnRsdiJ9.-VrAGV4v0O9pvBZdayP7FA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/asalgado/cm5j75agi001v01rdfxbkfc2b',
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};


/* eslint-disable */ var $29c9d3bc62897372$exports = {};

$29c9d3bc62897372$exports = (parcelRequire("5CMuc"));


const $55985790f9608b56$export$596d806903d1f59e = async (email, password)=>{
    console.log(email, password);
    try {
        const res = await (0, (/*@__PURE__*/$parcel$interopDefault($29c9d3bc62897372$exports)))({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        // const res = axios
        //   .post('http://127.0.0.1:3000/api/v1/users/login', {
        //     email: 'user@example.com',
        //     password: 'yourpassword',
        //   })
        //   .then((response) => console.log(response))
        //   .catch((error) => console.error(error));
        if (res.data.status === 'success') {
            alert('Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        alert(err.response.data.message);
    }
};


const $29b16a4b262d9fb1$var$mapBox = document.getElementById('map');
const $29b16a4b262d9fb1$var$loginForm = document.querySelector('.form--login');
if ($29b16a4b262d9fb1$var$mapBox) {
    const locations = JSON.parse($29b16a4b262d9fb1$var$mapBox.dataset.locations);
    (0, $cd0fa37e6ea74d26$export$4c5dd147b21b9176)(locations);
}
if ($29b16a4b262d9fb1$var$loginForm) $29b16a4b262d9fb1$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $55985790f9608b56$export$596d806903d1f59e)(email, password);
});


//# sourceMappingURL=bundle.js.map
