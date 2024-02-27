import logo from './logo.png'; // Replace with the path to your logo image
import image1 from './image1.png'; // Replace with the path to your first image
import image2 from './image2.png'; // Replace with the path to your second image
import image3 from './image3.png'; // Replace with the path to your third image
import cImage from './c.png'; // Replace with the path to your c image
import fImage from './f.png'; // Replace with the path to your f image
import wImage from './w.png'; // Replace with the path to your w image
import './CriPumps.css';

const CriPumps = () => {
    return (
        <>
            <div className="cri-pumps-container flex-container">
                {/* Left side */}
                <div className="left-container">
                    <img src={image3} alt="Image 3" className="cri-image" />
                </div>

                {/* Right side */}
                <div className="right-container">
                    <img src={logo} alt="CRI Logo" className="cri-logo" />
                    <div className="cri-logo-container">
                        <p>
                            <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
                        </p>
                        <ol className='cr'>
                            <li>• C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>• C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ol>
                    </div>
                    <img src={image2} alt="Image 2" className="cri-image" />
                    <p className='gov'>
                    Government of India has awarded the <b> "National Energy Conservation Award 2018" </b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
    </p>
                </div>
            </div>

            <br /><br />
            <div className='insta'>
                <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
            </div>
            <div className="cri-images-container">
                <img src={image1} alt="Image1" className="cri-image1" />
            </div>

            <div className='value'>
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            </div>

            <div className='red'>

            </div>

            <div className='sys'>
                <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
            </div>

            <div className='che'>
                <p>CHEMICALS & PROCESS POWER<span className='red-background'> | </span>WATER & WASTE WATER<span className='red-background'> | </span>OILS & GAS<span className='red-background'> | </span>PHARMA<span className='red-background'> | </span>SUGARS & DISTILLERIES<span className='red-background'> | </span>PAPER & PULP<span className='red-background'> | </span>MARINE & DEFENCE<span className='red-background'> | </span>METAL & MINING<span className='red-background'> | </span>FOOD & BEVERAGE</p>
            </div>

            <div className='pet'>
                <p>PETROCHEMICAL & REFINERIES<span className='red-background'> | </span>SOLAR<span className='red-background'> | </span>BUILDING<span className='red-background'> | </span>HVAC<span className='red-background'> | </span>FIRE FIGHTING<span className='red-background'> | </span>AGRICULTURE & RESIDENTIAL</p>
            </div>

            {/* Footer Section */}
            <div className="footer-container">
                <div className="footer-item">
                    <a href="tel:18002001234"> <span id="cri">Toll Free 18002001234</span><img src={cImage} alt="Toll Free 18002001234" /></a>
                </div>
                <div className="footer-item">
                    <a href="https://www.facebook.com/cripumps"> <span id="cri">www.facebook.com/cripumps</span>
  <img src={fImage} alt="www.facebook.com/cripumps" /></a>
                </div>
                <div className="footer-item">
                    <a href="https://www.crigroups.com"><span id="cri">www.CriGroups.com</span><img src={wImage} alt="www.CriGroups.com" /></a>
                </div>
            </div>
        </>
    );
};

export default CriPumps;