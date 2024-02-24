import "../../assets/css/Home.css";
import NavbarPage from "./Nav";
import RoofingIcon from "@mui/icons-material/Roofing";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChairIcon from '@mui/icons-material/Chair';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import HomeIcon from '@mui/icons-material/Home';
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="home">
      <NavbarPage />
      <div>
        <h1 style={{ width: "100%", justifyContent: "center" }}>Services</h1>
        <h2 style={{ width: "75%", justifyContent: "center", paddingLeft: "13%" }}>
          Make the most of your event with all the support required to run your event successfully. Choose from a wide range of services that come along
        </h2>
        <div className="icons-container">
          <HomeIcon style={{ fontSize: '70px' }} />
          <RestaurantIcon style={{ fontSize: '70px' }} />
          <ChairIcon style={{ fontSize: '70px' }} />
          <LocalAirportIcon style={{ fontSize: '70px' }} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
