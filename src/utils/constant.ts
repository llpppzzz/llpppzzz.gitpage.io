/**
 * HTTP 状态吗
 */
export const STATUS_OK = 200
export const STATUS_BAD_REQUEST = 400
export const STATUS_UNAUTHORIZED = 401
export const STATUS_FORBIDDEN = 403
export const STATUS_NOT_FOUND = 404
export const STATUS_REQUEST_TIMEOUT = 408
export const STATUS_NO_MORE = 410
export const STATUS_ENTITY_TWO_LARGE = 413
export const STATUS_INTERNAL_SERVER_ERROR = 500
export const STATUS_BAD_GATEWAY = 502
export const STATUS_SERVICE_UNAVAILABLE = 503
export const STATUS_GATEWAY_TIMEOUT = 504 // 网关超时, 一般是后台服务挂
export const STATUS_NETWOEK_ERROR = 0 // 没有网络

export const API_REQUEST_TIMEOUT = 60000 // API 超时时间，ms
export const API_REQUEST_CONTENT_TYPE = 'application/json' // API Content-Type 默认类型
