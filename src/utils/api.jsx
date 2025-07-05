export async function apiFetch(url, options = {}, token = null) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const errors = data.message
      ? `${data.message}`
      : `${res.status} ${res.statusText}`;

    throw new Error(errors);
  };

  return data;
}