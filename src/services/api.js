//Este arquivo centraliza as chamadas HTTP para o backend. alterar a URL base (API_URL) para o endereço do servidor do grupo

const API_URL = 'http://localhost:3333'; // Altere para a URL da API do grupo

export async function getPets(token) {
  const response = await fetch(`${API_URL}/pets`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Erro ao buscar pets.');
  return response.json();
}

export async function createPet(petData, token) {
  const response = await fetch(`${API_URL}/pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(petData)
  });
  if (!response.ok) throw new Error('Erro ao cadastrar pet.');
  return response.json();
}

export async function updatePet(id, petData, token) {
  const response = await fetch(`${API_URL}/pets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(petData)
  });
  if (!response.ok) throw new Error('Erro ao atualizar pet.');
  return response.json();
}

export async function deletePet(id, token) {
  const response = await fetch(`${API_URL}/pets/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Erro ao excluir pet.');
  return true;
}