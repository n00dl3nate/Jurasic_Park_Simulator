package com.JurassicParkProject.demo;

import com.JurassicParkProject.demo.Models.Dinosaur;
import com.JurassicParkProject.demo.Models.Visitor;
import com.JurassicParkProject.demo.Models.Zone;
import com.JurassicParkProject.demo.Repository.Dinosaurs.DinosaurRepository;
import com.JurassicParkProject.demo.Repository.Paddocks.PaddockRepository;
import com.JurassicParkProject.demo.Repository.Visitors.VisitorRepository;
import com.JurassicParkProject.demo.Repository.Zones.ZoneRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	DinosaurRepository dinosaurRepository;

	@Autowired
	PaddockRepository paddockRepository;

	@Autowired
	VisitorRepository visitorRepository;

	@Autowired
	ZoneRepository zoneRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canSaveEach(){
		Zone zone = new Zone("Zone 1");
		zoneRepository.save(zone);
		assertEquals(1,zoneRepository.findAll().size());
	}





}

