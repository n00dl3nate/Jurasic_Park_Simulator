package com.JurassicParkProject.demo.Repository.Visitors;

import com.JurassicParkProject.demo.Models.Visitor;
import com.JurassicParkProject.demo.Projections.VisitorProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = VisitorProjection.class)
public interface VisitorRepository extends JpaRepository<Visitor , Long> , VisitorRepositoryCustom {
}
