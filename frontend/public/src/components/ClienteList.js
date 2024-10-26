import React, { useEffect, useState } from 'react';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/clientes')
            .then(response => response.json())
            .then(data => setClientes(data));
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteList;
