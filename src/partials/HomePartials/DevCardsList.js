import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../index.css";
import "./css/devcardslist.css";
import pedro from './img/pedro.png'
import victor from './img/victor.png'
import sarah from './img/sarah.png'
import vitoria from './img/vitoria.png'
import sophia from './img/sophia.png'

function DevCards({ name, surname, job, image, color }) {
  return (
    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 custom-col"  style={{borderColor: color}}>
      <div className="card">
        <img src={image} alt="" className="devs-img" />
        <div className="devs-info text-center" style={{color: color}}>
          <h1>{name}</h1>
          <h2>{surname}</h2>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

const devList = [
  {
    name: "Victor", surname: "Nadalini",
    job: "Back-end Developer",
    image: victor,
    color: "#FCD074"
  },
  {
    name: "Sarah", surname: "Guelere",
    job: "Documentação, Gestão de Projeto, Diario de Bordo e Ilustração.",
    image: sarah,
    color: "#FC7474"
  },
  {
    name: "Sophia", surname: "Gonçalves",
    job: "Designer, Diario de Bordo e Documentação.",
    image: sophia,
    color: "#74A2FC"
  },
  {
    name: "Vitoria", surname: "Izabel",
    job: "ilustração, Banco de Dados, Programadora",
    image: vitoria,
    color: "#A874FC"
  },
  {
    name: "Pedro", surname: "Bueno",
    job: "Programador Front-End e suporte no Back-End",
    image: pedro,
    color: "#51A31F"
  },
];

function DevCardsList() {
  return (
    <div className="row justify-content-center">
      {devList.map((dev, index) => (
        <DevCards
          key={index}
          name={dev.name}
          surname={dev.surname}
          job={dev.job}
          image={dev.image}
          color={dev.color}
        />
      ))}
    </div>
  );
}

export default DevCardsList;
