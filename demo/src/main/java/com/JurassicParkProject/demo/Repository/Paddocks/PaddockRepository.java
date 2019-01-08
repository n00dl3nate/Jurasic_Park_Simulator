package com.JurassicParkProject.demo.Repository.Paddocks;

import com.JurassicParkProject.demo.Models.Paddock;
import com.JurassicParkProject.demo.Projections.PaddockProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = PaddockProjection.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long> , PaddockRepositoryCustom {
}
