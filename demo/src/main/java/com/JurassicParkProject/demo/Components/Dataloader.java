package com.JurassicParkProject.demo.Components;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Models.Paddock;
import com.JurassicParkProject.demo.Models.Visitor;
import com.JurassicParkProject.demo.Models.Zone;
import com.JurassicParkProject.demo.Repository.Dinosaurs.DinosaurRepository;
import com.JurassicParkProject.demo.Repository.Paddocks.PaddockRepository;
import com.JurassicParkProject.demo.Repository.Visitors.VisitorRepository;
import com.JurassicParkProject.demo.Repository.Zones.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Dataloader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    VisitorRepository visitorRepository;

    @Autowired
    ZoneRepository zoneRepository;



    public void run(ApplicationArguments args){

        Zone zone = new Zone("Zone 1");
        zoneRepository.save(zone);

        Paddock Lab = new Paddock("Omnivore", "Lab" , zone);
        paddockRepository.save(Lab);

        Paddock paddock1 = new Paddock("Herbivore","Safari Enclosure",zone);
        paddockRepository.save(paddock1);

        Paddock paddock2 = new Paddock("Carnivore","Raptor Enclosure",zone);
        paddockRepository.save(paddock2);

        Paddock paddock3 = new Paddock("Carnivore","T-rex Enclosure",zone);
        paddockRepository.save(paddock3);

        Visitor visitor1 = new Visitor("James Jimmy",22,100,zone);
        visitorRepository.save(visitor1);

        Visitor visitor2 = new Visitor("Harry Hamilton",43,100,zone);
        visitorRepository.save(visitor2);

        Visitor visitor3 = new Visitor("Jon Jones",32,100,zone);
        visitorRepository.save(visitor3);

        Dinosaur dinosaur1 = new Dinosaur("Sam","Tyrannosaurus Rex","Male","Carnivore",paddock3);
        dinosaurRepository.save(dinosaur1);

        Dinosaur dinosaur2 = new Dinosaur("Buster","Velociraptor","Male","Carnivore",paddock2);
        dinosaurRepository.save(dinosaur2);

        Dinosaur dinosaur3 = new Dinosaur("Oz","Stegosaurus","Male","Herbivore",paddock1);
        dinosaurRepository.save(dinosaur3);


    }

}
