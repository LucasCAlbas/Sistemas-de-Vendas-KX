package com.kxstore.controller;

import com.kxstore.model.Venda;
import com.kxstore.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendas")
public class VendaController {

    @Autowired
    private VendaRepository vendaRepository;

    @GetMapping
    public List<Venda> getAllVendas() {
        return vendaRepository.findAll();
    }

    @PostMapping
    public Venda createVenda(@RequestBody Venda venda) {
        return vendaRepository.save(venda);
    }

    @PutMapping("/{id}")
    public Venda updateVenda(@PathVariable Long id, @RequestBody Venda vendaDetails) {
        Venda venda = vendaRepository.findById(id).orElseThrow();
        venda.setCliente(vendaDetails.getCliente());
        venda.setDataVenda(vendaDetails.getDataVenda());
        venda.setValorTotal(vendaDetails.getValorTotal());
        return vendaRepository.save(venda);
    }

    @DeleteMapping("/{id}")
    public void deleteVenda(@PathVariable Long id) {
        vendaRepository.deleteById(id);
    }
}
