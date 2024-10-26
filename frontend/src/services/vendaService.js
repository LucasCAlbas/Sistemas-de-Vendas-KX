const API_URL = 'http://localhost:8080/vendas';

export const getVendas = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createVenda = async (venda) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(venda),
    });
    return response.json();
};

export const updateVenda = async (id, venda) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(venda),
    });
    return response.json();
};

export const deleteVenda = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
