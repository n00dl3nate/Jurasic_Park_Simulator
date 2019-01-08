package com.JurassicParkProject.demo.Projections;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Models.Paddock;
import com.JurassicParkProject.demo.Models.Visitor;
import com.JurassicParkProject.demo.Models.Zone;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedZone", types = Zone.class)
public interface ZoneProjection {

    long getid();
    String getName();
    boolean getRampage();
    List<Paddock> getPaddocks();
    List<Visitor> getVisitors();

}
