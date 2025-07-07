//***/ CENTRALISER LES APPELS API /***//
// Fonction générique pour simplifier les appels fetch //

export async function apiFetch(url, options = {}, token = null) {
  // Définition des headers standards
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  // Ajout du jeton token si présent
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  };

  // Appel fetch() avec headers et options
  const res = await fetch(url, {
    ...options,
    headers,
  });

  // On tente de parser la réponse en JSON. 
  // Si ce n’est pas possible (réponse vide ou invalide) : on renvoie un objet vide pour éviter un crash.
  const data = await res.json().catch(() => ({}));
  // Message console en cas d'erreur ou statut de la réponse si message d'erreur inexistant
  if (!res.ok) {
    const errors = data.message
      ? `${data.message}`
      : `${res.status} ${res.statusText}`;
    throw new Error(errors);
  };

  return data;
}