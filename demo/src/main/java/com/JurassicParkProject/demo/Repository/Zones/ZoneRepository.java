package com.JurassicParkProject.demo.Repository.Zones;

import com.JurassicParkProject.demo.Models.Zone;
import com.JurassicParkProject.demo.Projections.ZoneProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = ZoneProjection.class)
public interface ZoneRepository extends JpaRepository<Zone, Long>, ZoneRepositoryCustom {
}
