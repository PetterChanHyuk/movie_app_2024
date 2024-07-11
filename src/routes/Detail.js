import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

class Detail extends React.Component {
  componentDidMount() {
    this.checkLocationState();
  }

  componentDidUpdate() {
    this.checkLocationState();
  }

  checkLocationState() {
    const { location, navigate } = this.props;
    if (!location.state) {
      navigate('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location && location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

function DetailWrapper(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return <Detail {...props} location={location} navigate={navigate} />;
}

export default DetailWrapper;
