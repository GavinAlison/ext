package com.alison.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WorldController {
	@RequestMapping("/hello_world.dd")
	public ModelAndView work(){
		ModelAndView mv = new ModelAndView("com/alison/controller/page/hello.jsp");
		mv.addObject("message", "nice!!");
		return mv;
	}
}
