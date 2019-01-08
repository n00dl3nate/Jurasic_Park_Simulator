package com.JurassicParkProject.demo.Repository.Dinosaurs;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Projections.DinosaurProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = DinosaurProjection.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {
}
