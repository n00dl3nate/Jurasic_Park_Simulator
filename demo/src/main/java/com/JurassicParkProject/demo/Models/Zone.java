package com.JurassicParkProject.demo.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "zones")
public class Zone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "rampage")
    private Boolean rampage;

    @JsonIgnore
    @OneToMany(mappedBy = "zone", fetch = FetchType.LAZY)
    private List<Paddock> paddocks;

    @JsonIgnore
    @OneToMany(mappedBy = "zone", fetch=FetchType.LAZY)
    private List<Visitor> visitors;

    public Zone(String name){
        this.name = name;
        this.rampage = false;
        this.paddocks = new ArrayList<>();
        this.visitors = new ArrayList<>();
        }

    public Zone() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Paddock> getPaddocks() {
        return paddocks;
    }

    public void setPaddocks(List<Paddock> paddocks) {
        this.paddocks = paddocks;
    }
//
    public List<Visitor> getVisitors() {
        return visitors;
    }

    public void setVisitors(List<Visitor> visitors) {
        this.visitors = visitors;
    }

    public Boolean getRampage() {
        return rampage;
    }

    public void setRampage(Boolean rampage) {
        this.rampage = rampage;
    }
}

