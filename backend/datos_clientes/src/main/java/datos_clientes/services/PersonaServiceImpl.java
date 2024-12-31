package datos_clientes.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import datos_clientes.entities.Persona;
import datos_clientes.repositories.PersonaRepository;

@Service
public class PersonaServiceImpl implements PersonaService{

    private PersonaRepository personaRepository;
    

    public PersonaServiceImpl(PersonaRepository repository) {
        this.personaRepository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Persona> findAll() {
        return (List)this.personaRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Persona> findById(Long id) {
        return this.personaRepository.findById(id);
    }

    @Override
    @Transactional
    public Persona save(Persona persona) {
        return this.personaRepository.save(persona);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        this.personaRepository.deleteById(id);
    }
}
