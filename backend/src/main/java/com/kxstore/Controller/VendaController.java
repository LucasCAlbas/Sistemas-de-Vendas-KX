@RestController
@RequestMapping("/vendas")
public class VendaController {

    @Autowired
    private VendaRepository vendaRepository;

    @PostMapping
    public Venda criarVenda(@RequestBody Venda venda) {
        return vendaRepository.save(venda);
    }

    @GetMapping
    public List<Venda> listarVendas() {
        return vendaRepository.findAll();
    }

    @PutMapping("/{id}")
    public Venda atualizarVenda(@PathVariable Long id, @RequestBody Venda vendaAtualizada) {
        Venda venda = vendaRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Venda não encontrada"));
        venda.setValor(vendaAtualizada.getValor());
        return vendaRepository.save(venda);
    }

    @DeleteMapping("/{id}")
    public void deletarVenda(@PathVariable Long id) {
        vendaRepository.deleteById(id);
    }
}
