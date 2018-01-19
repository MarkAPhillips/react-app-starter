export default function build(params) {
  if (params == null) return '';
  const queryString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
  return `?${queryString}`;
}
