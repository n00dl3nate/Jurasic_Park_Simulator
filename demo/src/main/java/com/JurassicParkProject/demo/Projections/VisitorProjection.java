package com.JurassicParkProject.demo.Projections;


import com.JurassicParkProject.demo.Models.Visitor;
import com.JurassicParkProject.demo.Models.Zone;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedVisitor", types = Visitor.class)
public interface VisitorProjection {

    long getid();
    String getName();
    int getAge();
    int getMoney();
    Zone getZone();

}