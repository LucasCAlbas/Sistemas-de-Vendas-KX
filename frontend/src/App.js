import React from 'react';
import ClienteList from './components/ClienteList';
import VendaList from './components/VendaList';

function App() {
    return (
        <div className="App">
            <h1>Controle de Vendas da Loja KX</h1>
            <ClienteList />
            <VendaList />
        </div>
    );
}

export default App;
