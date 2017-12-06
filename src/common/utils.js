/**
 * 将数据对象序列化成query string
 * @param data
 * @param ignoreEmpty
 * @returns {string}
 */
function param (data, ignoreEmpty) {
    var str = '';
    for (var key in data) {
        if (!data.hasOwnProperty(key))
            continue;
        var value = data[key];
        var type = typeof value;
        if (ignoreEmpty && (value === null || value === ''))
            continue;
        if (value == null)
            value = '';
        if (str.length > 0)
            str += "&";
        str += encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }
    return str;
}

// 判断指定值是否object类型，且排除null值
function isObject (value) {
    return value !== null && typeof value === 'object';
}

function isArray (value) {
    if (value instanceof Array)
        return true;
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
}

function is (obj, type) {
    var toString = Object.prototype.toString, undefined;
    return (type === "Null" && obj === null)
        || (type === "Undefined" && obj === undefined)
        || toString.call(obj).slice(8, -1) === type;
}

/**
 * 深拷贝
 */
function deepCopy (target, source) {
    if (arguments.length == 1) {
        source = target;
    }
    if (target == null) {
        if (isArray(source))
            target = [];
        else if (isObject(source))
            target = {};
        else
            target = source;
    }
    for (var key in source) {
        var copy = source[key];
        if (target === copy)
            continue; // to avoid endless loop, such as window.window === window
        if (is(copy, "Object")) {
            target[key] = deepCopy(target[key] || {}, copy);
        }
        else if (is(copy, "Array")) {
            target[key] = deepCopy(target[key] || [], copy);
        }
        else {
            target[key] = copy;
        }
    }
    return target;
}

export default {
	param,
    isObject,
    deepCopy
}