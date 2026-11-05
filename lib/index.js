/**
 * dsh-rococo-theme — host half.
 *
 * 纯浏览器端主题插件：Host 侧没有任何宿主能力，
 * 保留一个空 apply，让该行在 Host 的 Loader 名册中可寻址。
 */

/** Host plugin body — all behavior lives in the browser entry (./client.js). */
export function apply() {}
