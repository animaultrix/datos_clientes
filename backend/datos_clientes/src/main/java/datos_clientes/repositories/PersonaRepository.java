package datos_clientes.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import datos_clientes.entities.Persona;

@Repository
public interface PersonaRepository extends CrudRepository<Persona, Long>{

}
