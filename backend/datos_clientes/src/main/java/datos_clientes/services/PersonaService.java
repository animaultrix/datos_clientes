package datos_clientes.services;

import java.util.List;
import java.util.Optional;

import datos_clientes.entities.Persona;

public interface PersonaService {

    List<Persona> findAll();

    Optional<Persona> findById(Long id);

    Persona save(Persona persona);

    void deleteById(Long id);
}
