const toString = Object.prototype.toString;

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
	return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
	return is(val, "Number");
}
