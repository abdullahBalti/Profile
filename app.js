window.addEventListener("scroll", ()=>{
	let mainNav = document.querySelector('.main-nav');
	let linksColor = document.querySelector('.nav-list');
	linksColor.classList.toggle("on-scroll", window.scrollY > 130);
	mainNav.classList.toggle("nav-fixed", window.scrollY > 130);
});


// let projectslist = document.getElementById('myDIV');
let list = document.querySelector('.projects-list');
let btns = document.querySelectorAll('.projects-li');
	btns.forEach(btn =>{
		btn.addEventListener("click", function(){
			// alert("message?: DOMString");
			list.querySelector('.active').classList.remove('active');
			btn.classList.add('active');
		});
});

//projects list

const projects = [
	{
		id: 1,
		img: "./projects/projects_1.jpg",
		githubSrc: "https://github.com/abdullahBaaaealti/electronics_store",
		liveView: "https://vigorous-bassi-5f6caaw1aa2.netlify.app/",
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Html5 Css3 Js"
	},
	{
		id: 2,
		img: "./projects/projects_2.jpg",
		githubSrc: "https://github.com/abdaeegdullahBalti/aroma",
		liveView: "https://abdullahbaltaai.gaeeeithub.io/aroma/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Html5 Css3 Js"
	},
	{
		id: 3,
		img: "./projects/projects_3.jpg",
		githubSrc: "https://github.com/abdullahBalaaeeti/Styler-shop",
		liveView: "https://abdullahbalti.github.io/Staeeeqyler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Html5 Css3 Js"
	},	
	{
		id: 4,
		img: "./projects/projects_3.jpg",
		githubSrc: "https://github.com/abdullahBaaeeelti/Styler-shop",
		liveView: "https://abdullahbalti.github.iaao/Staeeyler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Sass"
		// category:"Html5 Css3 Js"
	},
	{
		id: 5,
		img: "./projects/projects_1.jpg",
		githubSrc: "https://github.com/aeeabdullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.giaeeethub.io/Styler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Sass"
	},
	{
		id: 6,
		img: "./projects/projects_2.jpg",
		githubSrc: "https://github.com/aaeebdullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.giaeethub.io/Styler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Bootstrap"
	},
	{
		id: 7,
		img: "./projects/projects_3.jpg",
		githubSrc: "https://github.com/abweedullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.gitaeehub.io/Styler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Bootstrap"
	},
	{
		id: 8,
		img: "./projects/projects_1.jpg",
		githubSrc: "https://github.com/abaeedullahBalti/Styler-shop",
		liveView: "https://abdullahbalti.gitaeehub.io/Styler-shop/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"Bootstrap"
	},
	{
		id: 9,
		img: "./projects/jsShoppingCart.jpg",
		githubSrc: "https://github.com/abdullahBalaaeti/javascriptShoppingCart",
		liveView: "https://abdullahbalti.github.io/jaeavascriptShoppingCart/",		
		decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur quasi nostrum doloremque. Debitis iusto corporis, fugiat beatae modi vero quis nesciunt sunt.",
		category:"JavaScript"
	},
];
const banners = [
	{
		id: 1,
		title: "Hi, I' Am Abdullah Khan",
		heading: "Junior Front-end Developer & Intern Web Designer",
		decs: "I am looking for an opportunity in a reputed organization which will help me deliver my best and upgrade my skills and to work in dynamic, professional and enterprising environment.",
	}
];
const skills = [
	{
		id: 1,
		img: "./skillsIcon/html5.svg",
	},
	{
		id: 2,
		img: "./skillsIcon/css3.svg",
	},
	{
		id: 3,
		img: "./skillsIcon/logo-javascript.svg",
	},
	{
		id: 4,
		img: "./skillsIcon/jquery.svg",
	},
	{
		id: 5,
		img: "./skillsIcon/sass-1.svg",
	},
	{
		id: 6,
		img: "./skillsIcon/bootstrap-4.svg",
	},
	{
		id: 7,
		img: "./skillsIcon/react-1.svg",
	},
	{
		id: 8,
		img: "./skillsIcon/api.svg",
	},
	{
		id: 9,
		img: "./skillsIcon/vue-js-1.svg",
	},
	{
		id: 10,
		img: "./skillsIcon/adobe-photoshop-cs6.svg",
	},
	{
		id: 11,
		img: "./skillsIcon/figma-1.svg",
	},
	{
		id: 12,
		img: "./skillsIcon/adobe-xd.svg",
	}
];
const tools = [
	{
		id: 1,
		img: "./toolsIcon/sublime-text.svg",
	},
	{
		id: 2,
		img: "./toolsIcon/visual-studio-code.svg",
	},
	{
		id: 3,
		img: "./toolsIcon/github-icon-1.svg",
	},
	{
		id: 4,
		img: "./toolsIcon/git.svg",
	},
	{
		id: 5,
		img: "./toolsIcon/npm.svg",
	},
	{
		id: 6,
		img: "./toolsIcon/atom-4.svg",
	},
	{
		id: 7,
		img: "./toolsIcon/adobe-photoshop-cs6.svg",
	},
	{
		id: 8,
		img: "./toolsIcon/figma-1.svg",
	},
	{
		id: 9,
		img: "./toolsIcon/adobe-xd.svg",
	}
];
// get parent element
const projectsContainer = document.querySelector(".projects-container");
const headerContent = document.querySelector(".header-content");
const skillsContent = document.querySelector(".skills-content");
const toolsContent = document.querySelector(".tools-content");
const sortBtn = document.querySelectorAll(".sort-btn");

window.addEventListener("DOMContentLoaded", function () {
  diplayProjects(projects);
  // displayMenuButtons();
  displayBannerContent(banners);
  displaySkills(skills);
  displayTools(tools);
});

//sorting category button
sortBtn.forEach(function (btn) {
	btn.addEventListener("click", function(e){
		// console.log(e.currentTarget.dataset.id);
		const category = e.currentTarget.dataset.id;
		const menuCategory = projects.filter(function(project){
			// console.log(project.category);
			if (project.category === category) {
				return project;
			}
		});
		diplayCategory(menuCategory);		
		function diplayCategory(menuCategory) {
		  let displayProject = menuCategory.map(function (project) {
			    return `<div class="projects-item">
						<img src="${project.img}" alt="">
						<div class="on-hvoer">
							<ul class="hove-list" align="center">
								<li>
									<a href="${project.githubSrc}">
									<i class="fab fa-github"></i>&nbsp;&nbsp;View Sorce Code</a>
								</li>
								<li>
									<a href="${project.liveView}">
									<i class="far fa-browser"></i>&nbsp;&nbsp;Live Website</a>
								</li>
							</ul>
						</div>
						<div class="about-projects" align="center">
							<p>${project.decs}</p>
						</div>
					</div>`;					
		  });
		  displayProject = displayProject.join("");
		  // console.log(displayMenu);
		  projectsContainer.innerHTML = displayProject; 
		}

	});
});


function diplayProjects(projects) {
  let displayProject = projects.map(function (project) {
			if (project.category === 'Html5 Css3 Js') {
			    return `<div class="projects-item">
							<img src="${project.img}" alt="">
							<div class="on-hvoer">
								<ul class="hove-list" align="center">
									<li>
										<a href="${project.githubSrc}">
										<i class="fab fa-github"></i>&nbsp;&nbsp;View Sorce Code</a>
									</li>
									<li>
										<a href="${project.liveView}">
										<i class="far fa-browser"></i>&nbsp;&nbsp;Live Website</a>
									</li>
								</ul>
							</div>
							<div class="about-projects" align="center">
								<p>${project.decs}</p>
							</div>
						</div>`;
			}  	
  });
  displayProject = displayProject.join("");
  // console.log(displayMenu);
  projectsContainer.innerHTML = displayProject; 
}
function displayBannerContent(banners) {
  let bannerContent = banners.map(function (banner) {
  				if (banner.id == 1) {
			  	// console.log(banner.title);
			    return `
						<div class="header-text" align="center">
							<h2 data-aos="fade-down-left">${banner.title}</h2>			
							<h1 data-aos="flip-left" data-aos-duration="2000">${banner.heading}</h1>
							<p data-aos="flip-right" data-aos-duration="3000">${banner.decs}</p>
						</div>
			    `;
			}  	
  });
  bannerDisplay = bannerContent.join("");
  // console.log(bannerDisplay);
  headerContent.innerHTML = bannerDisplay; 
}
function displaySkills(skills) {
  let mySkills = skills.map(function (skill) {
  				if (skill.id > 0) {
			  	// console.log(banner.title);
			    return `
				    <div class="siklls-item html" data-aos="fade-right">
						<img src="${skill.img}" alt="">
					</div>
			    `;
			}  	
  });
  displyMyskills = mySkills.join("");
  console.log(displyMyskills);
  skillsContent.innerHTML = displyMyskills; 
}
function displayTools(tools) {
  let myTools = tools.map(function (tool) {
  				if (tool.id > 0) {
			  	// console.log(banner.title);
			    return `
					<div class="tools-item" data-aos="fade-up-right">
						<img src="${tool.img}" alt="">
					</div>
			    `;
			}  	
  });
  displyMytools = myTools.join("");
  // console.log(displyMytools);
  toolsContent.innerHTML = displyMytools; 
}