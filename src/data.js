const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const DEFAULT_OPTIONS = {};

export async function request(url, options = {}) {
  // Merge headers specially
  options.headers = Object.assign({}, DEFAULT_HEADERS, options.headers);

  let fetchUrl;
  if (url.indexOf('/') === 0) {
    fetchUrl = API_URL + url;
  } else {
    fetchUrl = `${API_URL}/${url}`;
  }
  const response = await fetch(fetchUrl, Object.assign({}, DEFAULT_OPTIONS, options));

  // Resolve JSON if response was JSON
  if (response.headers.get('content-type').includes('application/json')) {
    return response.json();
  } else {
    return response.text();
  }
}

export function get(url, options) {
  return request(url, Object.assign({ method: 'GET' }, options));
}

export function post(url, options) {
  return request(url, Object.assign({ method: 'POST' }, options));
}

export function put(url, options) {
  return request(url, Object.assign({ method: 'PUT' }, options));
}

export function _delete(url, options) {
  return request(url, Object.assign({ method: 'DELETE' }, options));
}
