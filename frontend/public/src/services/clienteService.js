const API_URL = 'http://localhost:8080/clientes';

export const getClientes = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createCliente = async (cliente) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
    });
    return response.json();
};

export const updateCliente = async (id, cliente) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
    });
    return response.json();
};

export const deleteCliente = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
