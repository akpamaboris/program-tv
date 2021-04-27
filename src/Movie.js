import logoM6 from "./M6.png";
import program from "./programme-tv.json";

const Movie = () => {
  return (
    <div className="container">
      <div className="title">
        <img className="logo-img" alt="logo M6" src={logoM6} />
        <h7>M6</h7>
      </div>{" "}
      <div className="bl-pr">
        {program.map((prog) => {
          return (
            <div className="block-prog">
              <div className="horaire">
                <span>{prog.time}</span>
              </div>
              <div className="img-prog">
                <img alt="tv program image" src={prog.image} />
              </div>
              <div className="info-prog">
                <h3>{prog.title}</h3>
                <p>{prog.type}</p>
                <div className="info-det">
                  <h5>{prog.duration}</h5>
                  <h6>
                    {prog.direct ? "Direct" : prog.isUnseen ? "Inédit" : null}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
