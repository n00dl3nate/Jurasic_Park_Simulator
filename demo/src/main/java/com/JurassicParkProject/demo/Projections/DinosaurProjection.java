package com.JurassicParkProject.demo.Projections;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Models.Paddock;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedDinosaur", types = Dinosaur.class)
public interface DinosaurProjection {

    long getid();
    String getName();
    String getType();
    String getGender();
    String getDiet();
    int getFood();
    Paddock getPaddock();
}
