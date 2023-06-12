import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-32 h-32 object-contain' src={logo} alt="" />
                    <p>Language Learning School<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="footer footer-center p-4 bg-base-300 text-base-content">
                    <p className=''>address: new york city(NA)</p>
                    <p className=''>contact: +990 45451 11525</p>
                    <p className=''>United States (USA)</p>
                    <div>
                        <p>Copyright © 2023 - All right reserved by Language Learning School</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;