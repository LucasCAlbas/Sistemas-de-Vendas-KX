import React, { useEffect, useState } from 'react';

const VendaList = () => {
    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/vendas')
            .then(response => response.json())
            .then(data => setVendas(data));
    }, []);

    return (
        <div>
            <h1>Lista de Vendas</h1>
            <ul>
                {vendas.map(venda => (
                    <li key={venda.id}>
                        Cliente ID: {venda.cliente?.id}, 
                        Data: {new Date(venda.dataVenda).toLocaleDateString()}, 
                        Valor Total: R$ {venda.valorTotal.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendaList;
