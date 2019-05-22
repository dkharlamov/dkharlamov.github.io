import BikeImage from './static/images/bike.jpg'
import VRDriveImage from './static/images/CST426VRDRIVE.png'
import AirCycleImage from './static/images/aircycle.png'
import TickTockRayImage from './static/images/ticktock.png'
import ClamParkImage from './static/images/clampark.jpg'
import GameJamImage from './static/images/vrgj.jpg'
import LiftSimulationImage from './static/images/lift.png'
import RoboticArmImage from './static/images/robotic_arm.jpg'
import ForceOutImage from './static/images/forceout.png'
import VRDrivePosterImage from './static/images/vrd.png'
import AircyclePosterImage from './static/images/airposter.png'
import TickTockRayPosterImage from './static/images/postersui.png'
import EPortfolioImage from './static/images/site.png'
import ClamParkP1Image from './static/images/Picture2.jpg'
import ClamParkP2Image from './static/images/Picture3.png'
import ClamParkP3Image from './static/images/Picture4.png'
import SiteTechImage from './static/images/sitetech.png'
import SimpleTerrainImage from './static/images/simple_terrain.png'
import SimpleFPSImage from './static/images/simple_fps.png'
import CapstoneImage from './static/images/capstone.jpg'
import CapstoneP1Image from './static/images/cap1.jpg'
import CapstoneP2Image from './static/images/cap2.jpg'
import CapstoneP3Image from './static/images/cap3.jpg'
import LiftPoster from './static/images/UROC_Poster_CE.png'
import LiftP1 from './static/images/diagram.png'
import LiftP2 from './static/images/diagram2.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faProjectDiagram,
  faFileAlt,
  faCar,
  faPlane,
  faClock,
  faParking,
  faGamepad,
  faWind,
  faMicrochip,
  faCubes,
  faTractor
} from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faProjectDiagram,
  faFileAlt,
  faReact,
  faCar,
  faPlane,
  faClock,
  faParking,
  faGamepad,
  faWind,
  faMicrochip,
  faCubes,
  faTractor
)

const createSection = (title, content) => {
  return {
    type: 'Section',
    title: title,
    content: content
  }
}
const createLink = (title, url) => {
  return {
    type: 'Link',
    title: title,
    url: url
  }
}
const createSubSection = (content) => {
  return {
    type: 'SubSection',
    content: content
  }
}
const createImage = (title, src) => {
  return {
    type: 'Image',
    title: title,
    src: src
  }
}
const createThumb = (title, src) => {
  return {
    type: 'Thumbnail',
    title: title,
    src: src
  }
}

export default {
  Pages: {
    About: { name: 'About Me', icon: 'user' },
    Projects: {
      name: 'Projects',
      icon: 'project-diagram'
    },
    Resume: { name: 'Resume', icon: 'file-alt' }
    // LSystem: { name: 'L-System Viewer', icon: 'file-alt' }
  },
  ProjectList: {
    EPortfolio: { name: 'EPortfolio', icon: ['fab', 'react'] },
    Capstone: { name: 'Capstone', icon: 'tractor' },
    VRDrive: { name: 'VRDrive', icon: 'car' },
    Aircycle: { name: 'Aircycle', icon: 'plane' },
    TickTockRay: { name: 'TickTockRay', icon: 'clock' },
    ClamPark: { name: 'ClamPark', icon: 'parking' },
    GameJam: { name: 'GameJam', icon: 'gamepad' },
    Lift: { name: 'Lift', icon: 'wind' },
    RoboticArm: { name: 'RoboticArm', icon: 'microchip' },
    DX11: { name: 'DX11', icon: 'cubes' }
  },
  AboutMe: {
    PersonalDescription:
      'I am a Software Engineer with a breadth of experience in many topics including game development and computer graphics, web development, computer architecture and networking, multimedia, research, and basic electrical engineering. I have a Bachelor of Science, Computer Science Degree and have been honored with a Distinction in Major and summa cum laude from the California State University, Monterey Bay. Below is an assortment of the projects that I have worked on both during my courses and outside of my courses as either hobby projects or research projects.'
  },
  Projects: {
    EPortfolio: {
      Card: {
        Title: 'React ePortfolio',
        Description:
          'The site you are currently on! One of my on-going projects that is written in React.js using a data-driven architecture.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            `Welcome to my ePortfolio! It contains a bunch of information about myself and my projects. I had a previous iteration of this site written is raw HTML and Bootstrap but I felt that it was time for an update. This site is written in React.js and uses the Material-UI framework to give it that clean and fresh look and feel. I focused on developing this site using a data-driven architecture to challenge myself and to actually make use of the reuseable components that I had made. Feel free to check out the code by clicking the button below!`
          ),
          createLink(
            'GitHub',
            'https://github.com/dkharlamov/dkharlamov.github.io'
          ),
          createSection(
            'Why Data Driven?',
            `I chose to build the site using a data-driven architecture so that there is the possibility to expand the site easily and potentially host the pages on a content management system. This also worked as an exercise of building fully dynamic sites. Every project card and page on this site is generated dynamically sourcing all of their content from a JSON object. If I want to expand any section of my site, it is as easy as going to the content file and adding more stuff. If I need to add more functionality, I only have to write a generator and choose a key to invoke that generator. I wanted the site to be easily expanded and with this architecture, that is entirely possible.`
          )
        ],
        Right: [createImage('Site Technologies', SiteTechImage)]
      }
    },
    Capstone: {
      Card: {
        Title: 'Autonomous Vehicle (Capstone)',
        Description:
          'Developed a prototype of navigation control for an agricultural vehicle.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            `We developed a prototype of autonomous navigational control for an agricultural vehicle that would track over a line (such as a row of crops). This system is integratabtle into any existing hardware solutions such as the Food Origin's inspection vehicle. Our objective is to advance the agricultural industry by providing autonomous solutions to common problems.`
          ),

          createSection(
            'How we Did it',
            `Our approach was based around finding a valid scope, designing a solution, building our designs, developing the software, algorithms, and finally integrating all the hardware with software. We sourced parts and IoT modules in order to assemble our prototype over the course of a couple weeks. Once completed, we began writing the code for the computer vision algorithms in OpenMV and developing both the front and back end for the web view. The biggest challenge we encountered was the final step: integration. Integrating the hardware together with the software required numerous servers and web hooks to connect everything together.`
          ),
          createSection(
            'The Outcome',
            `We developed a standalone system that is integratabtle into any hardware solution currently available. Our solution makes use of an OpenMV camera and machine vision algorithms to detect the amount of veering and then output the determined deflection in degrees, which can then be directly translated as a steering input for the vehicle. `
          )
        ],
        Right: [
          createImage('OpenMV Solution', CapstoneP2Image),
          createImage('OpenMV Hardware', CapstoneP1Image),
          createImage('OpenMV Output', CapstoneP3Image)
        ]
      }
    },
    VRDrive: {
      Card: {
        Title: 'VRDrive',
        Description:
          'Virtual reality framework for creating first person driving games in VR with Oculus Touch steering wheel interaction.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'VR driving framework implemented for Unity so that people could develop first person driving experiences quickly without having to implement the complex mathematics assosiated with virtual reality inputs.'
          ),
          createSection(
            'Solving Steering',
            'Steering was the biggest challenge while developing this framework. I focused on developing a first person solution in order to maintain the immersion that virtual reality is so famous for. This made it very challenging to wrap my head around how to solve the problem of grabbing a rotating object with oculus touch controllers and offering accurate and intentful controls to the VR Drive framework. After many failed models, I finally was able to come up with a solution that delivered 1 to 1 steering interaction. The final solution relied on simplifying the sensor input from the oculus touch controllers once the player grabs the steering wheel. Also, care had to be taken to support both one handled and two handed steering behavior. In the end, I mapped the oculus touch controllers’ inputs to the local space of the in-game steering wheel and calculated angle differences every frame. A run-through of the steering behavior goes as follows: If gripping gesture detected -> if holding steering wheel -> calculate rotation difference per hand based on the steering wheel -> apply rotation to steering wheel -> rotate wheels of the vehicle -> repeat. Also, in order to create the illusion that the player was gripping the steering when, I locked the view models for the oculus controllers when a grip of the steering wheel has been initiated. This made it easier to feel like players were actually steering the car because they didn’t get incorrect visual cues from the view models going off the steering wheel and occasionally changing depth. All in all, the steering experience felt very realistic.'
          ),
          createSection(
            'Gamemodes',
            'In order to supply some game-making inspiration to those who might use my VR Drive framework, I supplied the basic framework for some game modes with AI cars. These cars could either race around a waypoint set or chase the player around the map. The AI was implemented using the Strategy pattern for easy behavior change mid-game and extensibility. Even with these simple gamemodes, the framework provided a good starting point for anyone who wanted to make a VR driving game.'
          )
        ],
        Right: [createImage('VRDrive Poster', VRDrivePosterImage)]
      }
    },
    Aircycle: {
      Card: {
        Title: 'Aircycle',
        Description:
          'Group project from Game Engine Programming where we worked with designers to develop a mobile VR exercise game.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            `Aircycle is a mobile VR exer-game where the goal is to pedal a plane through a canyon. I was in charge of developing the controls for Aircycle. For that, I had to create my own IMU Bluetooth LE circuit that detected the motion for pedalling which directly controlled the aceleration of the plane. Since my part of the project was very important to the project's success, I completed my part as soon as possible to ensure a prototype would be ready to test. After the controller was complete and the controller scripts were ready, I took on a leadership position to make sure that the other developers would be successful at delivering their milestones. Towards the end of the project, I helped assemble the final deliverables and presented the game at a games festival for the class. I created a poster for the game (shown below) and the game won second place in the "Best Programming" category.`
          ),
          createLink('Itch.io Link', 'https://studentgames.itch.io/aircycle'),
          createSection(
            'Early Development',
            `Early on in this game’s development, My team and I were trying to find an inside-out tracking solution for detecting a user pedaling but we failed quick and iterated even faster. It was clear after several iterations that a controller had to be built. I volunteered to take full responsibility of building the device. After researching and purchasing the parts to build our custom controller, we started to focus on developing the simple game rules and simulated the pedaling controls on the keyboard. We couldn’t test the game on the mobile device (which was the target platform) since it was a GearVR game and we would have no way of controlling the game. Once the parts came, I started prototyping the device and tested the game in VR.`
          ),
          createSection(
            'Building the Controller',
            `The controller was the main part of the game. It translated real world pedaling into game input and provided the main form of interaction for the game. I had to build a low profile and lightweight device that was comfortable to wear on your leg in order to detect the rotational differences induced by the pedaling gesture. The main challenge was connecting the Bluetooth LE interface on the device to the android and then relay the data to Unity. Once the data was fed in (accomplished by using AndroidJNI in Unity), deriving the pedaling gesture was fairly simple. From there, we provided difficultly settings determined by how fast you pedaled and how far you rotated your leg. The final device was an Arduino wired to both a IMU sensor and a Bluetooth LE module with a small battery.`
          ),
          createSection(
            'Reception',
            `During the games festival where our game was presented. We had a large number of players try out the custom controller with the VR. We had a surprising amount of engagement from the players and good feedback. All in all, we aimed to make exercising fun and based on the reaction of the players, we succeeded. We won 2nd place in the “Best Programming” category because of our unique game idea and original controller device.`
          )
        ],
        Right: [createImage('Aircycle Poster', AircyclePosterImage)]
      }
    },
    TickTockRay: {
      Card: {
        Title: 'TickTockRay',
        Description:
          'Worked with a research mentor to develop a 3D pointing solution for mobile virtual reality using a smartwatch.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            `TickTockRay was a research project that I took on with Dr. Krzysztof Pietroszek to research the possiblity of using a smartwatch as a 3D pointing device in mobile virtual reality. For this research project, I took on the tasking of doing all of the system design and programming. At the end of the research experience, I had learned integrating bluetooth communications between an android device and an android smartwatch with controlling a mobile vr game. Using a simple minecraft clone as a template, I was able to implement the functionality to use a smartwatch to place and remove blocks as well as interact with UI elements. This research was published at two international computer science conferences (VRST'16 and SUI'16). Below is the poster used for SUI and image below that one is me presenting my research at the CSUMB UROC Symposium.`
          ),
          createLink(
            'ACM Link',
            'https://dl.acm.org/author_page.cfm?id=99659076440&coll=DL&dl=ACM&trk=0'
          ),
          createSection(
            'Research and Development',
            `This project started as an extension to a project my Professor had worked on before developing a 3D pointing device from a smartwatch to interact with 3D scenes. TickTockRay aimed to bring that kind of interaction to VR but in a more natural sense. We wanted to produce an interaction model that made it quick and easy for anyone to go into VR wearing a smartwatch and begin interacting with the world around them by moving their arms. Along the way we met many challenges, both with hardware and with theory. Every time we iterated our model, we had a new issue that required literature review and revision. Once we finally developed a working model, we began tweaking it to get the most natural and precise 3D interaction. This project is called TickTockRay because of the technologies made to use it possible: a smartwatch and fixed-origin raycasting. Fixed-origin raycasting made it possible for our model to work naturally at providing 3D pointing. We found that this solution, despite being simple, was the most intuitive to users. Most of the development time for TickTockRay was in producing the communication between devices and tweaking the model to be as accurate as possible.`
          ),
          createLink(
            'Github',
            'https://github.com/gameresearchlab/TickTockRayPlugin'
          )
        ],
        Right: [createImage('TickTockRay Poster', TickTockRayPosterImage)]
      }
    },
    ClamPark: {
      Card: {
        Title: 'ClamPark',
        Description:
          'Group project from Computer Architecture course where we designed and built parking management hardware.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'ClamParking is a self-sustained parking detector that can detect if a vehicle is parked on a parking spot. It is meant to reduce traffic during passing periods at my university and to make finding parking a safer experience. My team and I designed, built, and integrated ClamParking to reduce the hassles and dangers of looking for parking in the middle of the school day. With ClamParking, we aimed to solve many campus safety issues as well as get people to class on time.'
          ),
          createImage('ClamPark Finished Prototype', ClamParkP1Image),
          createSection(
            'Design and Hardware',
            `I was responsible for designing the electronics and outer casing of the ClamPark. For the electronics, we wanted to design a self-sustaining system to reduce as much maintenance as possible. For this we chose to use a large battery, a low power raspberry pi, an ultrasonic distance sensor, and a solar panel for charging the battery over time. The sensor would sense vehicles parked over the sensor and the raspberry pi would contact an api to notify our system of occupied parking spots. For the outer casing, I used Autodesk Inventor and our lab 3D printer to develop prototypes. The first prototype was a complete failure because I failed to realize that I cannot put an ultrasonic sensor at a 45 degree angle as it would never reflect the signal. After a couple iteration, the model on the right was developed. It allows the solar panel to be mounted on the top and the ultrasonic sensors face up toward the bottom of a car. The raspberry pi would be hidden inside along with the battery.`
          )
        ],
        Right: [
          createImage('ClamPark Model', ClamParkP3Image),
          createImage('ClamPark Drawing', ClamParkP2Image)
        ]
      }
    },
    GameJam: {
      Card: {
        Title: 'GameJam Framework',
        Description:
          'Worked with a colleague to develop a virtual reality framework for teaching students how to make VR games in a limited time period.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'I worked with a colleague to write a framework to help teach students about developing virtual reality games in the Unity Engine. This framework aimed and succeeded at making it easy for students to create a virtual reality game in a week. During the Game Jam, I helped students solve problems with the Unity Engine, general virtual reality concepts, and sometimes issues with art assets and the implementation of game features.'
          ),
          createSection(
            'How to Make VR Simple',
            'The major challenge of this project was to figure out how to make VR simple. My colleague Clay and I were tasked with developing a framework that should be easy enough to use that someone with no programming experience could open Unity and start producing simple VR games. To do this, we relied heavily on the Unity prefab engine. We spent less than a week developing the code and prefabs for Game Jam Participants to use to develop a VR game in a week. We focused our framework around a FPS model since that kind of game mode is easy to understand and implement. Overall, the code we produced was supposed to be as simple and readable as possible, however we also made a large amount of documentation to help the users of our framework.'
          ),
          createSection(
            'On the Front Line',
            'Writing the framework was half the battle. We also had the opportunity to help the students understand the framework and extend it during the game jam. It was clear that people had a very clear and quick grasp of the framework and quickly started producing more content for their custom games. We rarely had to write code for any group and the students were asking great questions that lead them to their own creative solutions. It was from this and the final games that they were able to produce that I felt that our framework was a great success. I wish to this day that I had copies of these games to show off to others, but unfortunately the University where the game jam was held did not support the game jam page for long enough and I had lost most of the images and files.'
          )
        ],
        Right: [createImage('VR Headset', GameJamImage)]
      }
    },
    Lift: {
      Card: {
        Title: 'Lift Simulation',
        Description:
          'Worked with a research mentor to research areodynamic lift simulation methods.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'While working with a Research Mentor who developed a model for aerodynamic lift and drag simulation, I implemented physical models into a simulation based in DirectX11. This simulation utilized deferred rendering and compute shaders to calculate singular air particles interacting with an airfoil’s surface. This approach relied on a model that increase resolution with decreased time slices over a mesh.'
          ),
          createImage('Particle Condition', LiftP1),
          createSection(
            'Shader Methodology',
            `This project was an exercise in deferred shading and compute shader manipulation. We would take a mesh and render slices of the mesh and do volumetric force calculations on each slice. This made it possible to dial in the accuracy of the model. The more slices we rendered and calculated, the more accurate our model got but at the same time we lost performance. I was not able to complete this research project as the professor had moved on to another university and took the project with them. By the time I wrote the last line of code in this project, it was able to simulate air particles interacting with the mesh with a set of rules. First, if the air particle was too far away from the mesh, it would be deleted as it no longer affects the aerodynamic lift and drag of the plane. Second, if the air particle collided against the mesh, we would calculate forces against it. Third, if the particle was close enough to the mesh, we calculated the decay of the air particle outward from the initial impulse. All of these calculations took place in the compute shader.`
          ),
          createThumb('Lift Methodology', LiftP2)
        ],
        Right: [
          createImage('Lift Simulation Screenshot', LiftSimulationImage),
          createImage('Lift Poster', LiftPoster)
        ]
      }
    },
    RoboticArm: {
      Card: {
        Title: 'Robotic Arm',
        Description:
          'Worked with a research group to develop a 3D printed robotic arm to design a solution for low cost prosthetics.'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'Worked with a group of fellow researchers to develop a low-cost solution for arm prosthetics that could be 3D printed. I worked on developing sensors that would detect minute muscle movements in a patient’s arm that would control the servos inside the prosthesis. By using a simple op-amp array and Arduino data visualization and processing, I helped to develop an easily adjustable model for muscle movement detection using flex sensors.'
          )
        ],
        Right: [createImage('Robotic Arm Circuitry', RoboticArmImage)]
      }
    },
    DX11: {
      Card: {
        Title: 'DirectX11 Projects',
        Description:
          'A variety of DirectX projects I made in my Graphics Programming class. I also talk about my Teaching Assistant experience here!'
      },
      DetailsPage: {
        Left: [
          createSection(
            'Brief',
            'These are some of my early DirectX11 projects from my Graphics Programming course. You can look at the code for these on my GitHub profile.'
          ),
          createLink(
            'Github',
            'https://github.com/dkharlamov?tab=repositories'
          ),
          createSection(
            'ForceOut',
            `ForceOut was a shader experiment were environmental destruction could be simply generated using shaders. While heavily using the depth stencil, I was able to create believable environmental destruction illusions. In the simple game, a player could click on the wall and produce a destructive sphere, and from that sphere they can traverse the level and beyond. I solved the collisions for the tunnels created by keeping references of destruction sphere positions and simply ignoring wall collisions inside that sphere’s volume. This shader set heavily relies on deferred shading to create the destructive illusion. Also, any mesh with inverted normals could be used as the destruction mesh, I just chose a sphere for simplicity’s sake.`
          ),
          createImage('ForceOut DirectX11 Project', ForceOutImage)
        ],
        Right: [
          createImage('Simple DirectX11 Terrain', SimpleTerrainImage),
          createImage('Simple DirectX11 FPS', SimpleFPSImage)
        ]
      }
    }
  },
  Images: {
    Bike: BikeImage,
    EPortfolio: EPortfolioImage,
    VRDrive: VRDriveImage,
    Aircycle: AirCycleImage,
    TickTockRay: TickTockRayImage,
    ClamPark: ClamParkImage,
    GameJam: GameJamImage,
    Lift: LiftSimulationImage,
    RoboticArm: RoboticArmImage,
    DX11: ForceOutImage,
    Capstone: CapstoneImage
  }
}
