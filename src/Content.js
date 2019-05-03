import BikeImage from './static/images/bike.jpg'
import VRDriveImage from './static/images/CST426VRDRIVE.png'
import AirCycleImage from './static/images/aircycle.png'
import TickTockRayImage from './static/images/ticktock.png'

export default {
  AboutMe: {
    PersonalDescription:
      'I am a Software Engineer with a breadth of experience in many topics including game development and computer graphics, web development, computer architecture and networking, multimedia, research, and basic electrical engineering. I have a Bachelor of Science, Computer Science Degree and have been honored with a Distinction in Major and summa cum laude from the California State University, Monterey Bay. Below is an assortment of the projects that I have worked on both during my courses and outside of my courses as either hobby projects or research projects. You can find more projects on my Projects page.'
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
    }
  },
  Images: {
    Bike: BikeImage,
    VRDrive: VRDriveImage,
    Aircycle: AirCycleImage,
    TickTockRay: TickTockRayImage
  }
}
