import Navbar from "../components/Navbar.jsx";
//import Banner from "../components/Banner.jsx";
import StudentForm from "../components/StudentForm.jsx";
import '../studentForm.css';
import '../index.css'

const Home = () => {
    return (
        <div className="main-wrapper">
            <Navbar/>
            <StudentForm />
        </div>
    );
};

export default Home;

