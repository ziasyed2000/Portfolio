import { v4 as uuidv4 } from 'uuid';
import jBoard from '../images/jboard.jpg';
import signLang from '../images/signLang.png';
import chatApp from '../images/chatApp.png';
import banker from '../images/banker.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Banker',
    desc:
      'ATM inspired banking app made to manage individual accounts and transfers. Security implementation with automation logout timer and logic based loan requests based on past balance history. Created using Javascript, HTML/CSS. "LINK"',
    img: banker,
    link: 'https://github.com/ziasyed2000/Banker',
  },
  {
    id: uuidv4(),
    name: 'Sign Language Detector',
    desc:
      'Real time Object detection using the camera to interpret Sign Language and display the message on-screen with object tracking by pulling Pre-trained object models from AWS S3. Created using ReactJS, TensorFlowJS & Python Models. "LINK"',
    img: signLang,
    link: 'https://github.com/ziasyed2000/Sign-Language-Detector',
  },
  {
    id: uuidv4(),
    name: 'Chat Application',
    desc:
      'Web based Chat Application, using sockets to transfer messages instantly. Includes embedded custom rooms with user defined aliases. Created using Javascript, ExpressJS & SocketIO. "LINK"',
    img: chatApp,
    link: 'https://github.com/ziasyed2000/Chat-Application',
  },
  {
    id: uuidv4(),
    name: 'Job Board',
    desc:
      'Aggregate Job Board web app, using API to fetch data catered to remote work. Created using Javascript, HTML/CSS. "LINK"',
    img: jBoard,
    link: 'https://github.com/ziasyed2000/Job-Board',
  },
];

export default projects;
