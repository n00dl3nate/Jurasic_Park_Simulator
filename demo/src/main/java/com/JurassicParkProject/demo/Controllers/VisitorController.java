package com.JurassicParkProject.demo.Controllers;

import com.JurassicParkProject.demo.Repository.Visitors.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/visitors")
public class VisitorController {

    @Autowired
    VisitorRepository visitorRepository;
}





