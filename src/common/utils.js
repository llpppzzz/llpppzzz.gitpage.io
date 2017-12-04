
export default {
	/**
	 * 将数据对象序列化成query string
	 * @param data
	 * @param ignoreEmpty
	 * @returns {string}
	 */
	param: function (data, ignoreEmpty) {
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
	},
}