import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerbg from '../assets/img/banner-bg.png';

class TrainerBanner extends React.Component {

  render() {
    return(
      <div
        className="banner"
        style = {{ backgroundImage: `url(${ bannerbg })`,
          backgroundColor: "#fbfafa",
          backgroundRepeat: "repeat-x",
          height: "100px",
          backgroundPosition: "center",
          width: "100%",
        }}>
        <Container>
          <Row>
            <div className="col-sm-10">
              <h1 className="banner-title">Schedule</h1>
              <p className="banner-right">Next Class:</p>
            </div>
            <p className="appointment">Time/Date</p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TrainerBanner;
