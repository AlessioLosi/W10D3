import { Container, Nav, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Instagram from 'react-bootstrap-icons/dist/icons/instagram';
import Facebook from 'react-bootstrap-icons/dist/icons/facebook';
import X from 'react-bootstrap-icons/dist/icons/x';
import Youtube from 'react-bootstrap-icons/dist/icons/youtube';

const Footercustom = function () {
  return (
    <footer>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-2">
                <div className="row text-secondary text-align-center flex-column">
                    <div className="col">
                        <Instagram ></Instagram>
                        <Facebook></Facebook>
                        <X></X>
                        <Youtube></Youtube>
                        <icon className="bi bi-facebook"></icon>
                        <icon className="bi bi-twitter-x"></icon>
                        <icon className="bi bi-youtube"></icon>
                    </div>
                    <div className="col text-secondary">
                        <ul className="list-unstyled">
                            <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Audio & Subtitles</a></li>
                            <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Media Center</a></li>
                            <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Privacy</a></li>
                            <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-2 text-secondary">
                <ul className="list-unstyled">
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Audio Description</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Investor Relations</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Legal Notices</a></li>
                </ul>
            </div>
            <div className="col-12 col-md-2 text-secondary">
                <ul className="list-unstyled">
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Help Center</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Jobs</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Cookie Preferences</a></li>
                </ul>
            </div>
            <div className="col-12 col-md-2 text-secondary">
                <ul className="list-unstyled">
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Gift Cards</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Term Of Use</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-secondary">Corporate Information</a></li>
                </ul>
            </div>
        </div>
        <div className="row flex-column mx-md-5 align-content-start">
            <div className="col-4">
            <button className="p-2 bg-dark text-secondary border border-secondary ">service Code</button></div>
            <div className="col-4">
            <p className="text-secondary">&copy;1997-2019 Netflix,inc.</p></div>
        </div>
    </div>
</footer>
  );
}


export default Footercustom