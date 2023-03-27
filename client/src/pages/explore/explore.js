import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getExploreData } from '../../api';
import commentsIcon from './img/heart.png'
import heartIcon from './img/comments.png'
function Explore() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getExploreData();
      setModels(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container pt-5">
      <div className="d-flex flex-column align-items-center mb-5">
        <h1
          style={{
            fontFamily: 'POSTMAN',
            letterSpacing: '1px',
            fontSize: '60px',
          }}
        >
          O melhor do Linniê
        </h1>
        <h4>os projetos no destaque de hoje</h4>
      </div>
      <div className="row">
        {models.map((model) => {
          const image = model.imageUrl;
          const avatar = model.userAvatarUrl;
          return (
            <div
              key={model.id}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5"
            >
              <Link
                to={`/model/${model.id}`}
                className="text-decoration-none"
                style={{ color: 'black' }}
              >
                <div className="shadow-lg card card-link">
                  <img
                    src={image}
                    alt={model.name}
                    className="card-img-top"
                    style={{ height: '400px' }}
                  />
                  <div className="card-footer d-inline-flex justify-content-between">
                    <div className="user d-inline-flex">
                      <img
                        src={avatar}
                        alt={model.userName}
                        style={{ width: '26px', height: '26px' }}
                      />
                      <p className="ms-1">{model.userName}</p>
                    </div>
                    <div className="d-inline-flex">
                      <img src={commentsIcon} alt="" width="28px" height="28px"/>
                      <p className="ms-1">{model.likes}</p>
                      <img src={heartIcon} alt="" width="28px" height="28px"/>
                      <p className="ms-1">{model.likes}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
