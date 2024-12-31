package datos_clientes.controllers;

import org.springframework.web.bind.annotation.RestController;

import datos_clientes.entities.Persona;
import datos_clientes.services.PersonaService;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("api/personas")
public class PersonaController {

    private PersonaService personaService;    

    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    };

    @GetMapping
    public List<Persona> list() {
        return personaService.findAll();
    };

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<Persona> personaOptional = personaService.findById(id);
        if(personaOptional.isPresent()){
            //return ResponseEntity.ok().body(personaOptional.orElseThrow());
            return ResponseEntity.status(HttpStatus.OK).body(personaOptional.orElseThrow());
        }
        //return ResponseEntity.notFound().build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("error","Persona no se encontro por el id:"+id));
    }
    @PostMapping
    public ResponseEntity<Persona> create(@RequestBody Persona persona) {                
        return ResponseEntity.status(HttpStatus.CREATED).body(personaService.save(persona));
    };
    
    @PutMapping("/{id}")
    public ResponseEntity<Persona> update(@PathVariable Long id, @RequestBody Persona persona) {
        Optional<Persona> personaOptional = personaService.findById(id);
        if(personaOptional.isPresent()){
            Persona personaDB = personaOptional.get();
            personaDB.setNombre(persona.getNombre());
            personaDB.setApellido1(persona.getApellido1());
            personaDB.setApellido2(persona.getApellido2());
            return ResponseEntity.status(HttpStatus.OK).body(personaService.save(personaDB));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    };
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Persona> personaOptional = personaService.findById(id);
        if(personaOptional.isPresent()){
            personaService.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);    
    };
}
