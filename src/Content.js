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
  faCubes
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
  faCubes
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
          )
        ],
        Right: [createImage('Site Technologies', SiteTechImage)]
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
          createLink('Itch.io Link', 'https://studentgames.itch.io/aircycle')
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
          createImage('ClamPark Finished Prototype', ClamParkP1Image)
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
          )
        ],
        Right: [createImage('Lift Simulation Screenshot', LiftSimulationImage)]
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
          createLink('Github', 'https://github.com/dkharlamov?tab=repositories')
        ],
        Right: [
          createImage('ForceOut DirectX11 Project', ForceOutImage),
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
    DX11: ForceOutImage
  }
}
