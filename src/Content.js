import BikeImage from './static/images/bike.jpg'
import VRDriveImage from './static/images/CST426VRDRIVE.png'
import AirCycleImage from './static/images/aircycle.png'
import TickTockRayImage from './static/images/ticktock.png'
import ClamParkImage from './static/images/clampark.jpg'
import GameJamImage from './static/images/vrgj.jpg'
import LiftSimulationImage from './static/images/lift.png'
import RoboticArmImage from './static/images/robotic_arm.jpg'
import ForceOutImage from './static/images/forceout.png'

export default {
  ProjectList: [
    'VRDrive',
    'Aircycle',
    'TickTockRay',
    'ClamPark',
    'GameJam',
    'Lift',
    'RoboticArm',
    'DX11'
  ],
  AboutMe: {
    PersonalDescription:
      'I am a Software Engineer with a breadth of experience in many topics including game development and computer graphics, web development, computer architecture and networking, multimedia, research, and basic electrical engineering. I have a Bachelor of Science, Computer Science Degree and have been honored with a Distinction in Major and summa cum laude from the California State University, Monterey Bay. Below is an assortment of the projects that I have worked on both during my courses and outside of my courses as either hobby projects or research projects.'
  },
  Projects: {
    VRDrive: {
      Card: {
        Title: 'VRDrive',
        Description:
          'Virtual reality framework for creating first person driving games in VR with Oculus Touch steering wheel interation.'
      }
    },
    Aircycle: {
      Card: {
        Title: 'Aircycle',
        Description:
          'Group project from Game Engine Programming where we worked with designers to develop a mobile VR exercise game.'
      }
    },
    TickTockRay: {
      Card: {
        Title: 'TickTockRay',
        Description:
          'Worked with a research mentor to develop a 3D pointing solution for mobile virtual reality using a smartwatch.'
      }
    },
    ClamPark: {
      Card: {
        Title: 'ClamPark',
        Description:
          'Group project from Computer Architecture course where we designed and built parking management hardware.'
      }
    },
    GameJam: {
      Card: {
        Title: 'GameJam Framework',
        Description:
          'Worked with a colleague to develop a virtual reality framework for teaching students how to make VR games in a limited time period.'
      }
    },
    Lift: {
      Card: {
        Title: 'Lift Simulation',
        Description:
          'Worked with a research mentor to research areodynamic lift simulation methods.'
      }
    },
    RoboticArm: {
      Card: {
        Title: 'Robotic Arm',
        Description:
          'Worked with a research group to develop a 3D printed robotic arm to design a solution for low cost prosthetics.'
      }
    },
    DX11: {
      Card: {
        Title: 'DirectX11 Projects',
        Description:
          'A variety of DirectX projects I made in my Graphics Programming class. I also talk about my Teaching Assistant experience here!'
      }
    }
  },
  Images: {
    Bike: BikeImage,
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
