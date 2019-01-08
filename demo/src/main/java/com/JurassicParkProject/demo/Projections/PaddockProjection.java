package com.JurassicParkProject.demo.Projections;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Models.Paddock;
import com.JurassicParkProject.demo.Models.Zone;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;
@Projection(name= "embedPaddock", types = Paddock.class)
public interface PaddockProjection {

    long getid();
    String getType();
    String getName();
    Zone getZone();
    List<Dinosaur> getDinosaurs();
}
