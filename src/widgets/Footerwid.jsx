import { NavLink } from 'react-router-dom';
import FooterSocialCard from "./FooterSocialCards";
import { assets } from '../assets/asset';

function Footer() {
  return (
    <footer>
      <div className="p-3 w-full bg-cover bg-[url('./assets/footerimage/insurance-footer-background.png')]">
        <div className="text-center text-white text-lg">
          <div className="flex items-center justify-center pl-10">
            <img src={assets.image6} width={90} className='text-white' />
          </div>
          <br />
          <div className="flex flex-wrap justify-around gap-7 items-center h-auto mt-6">
            <FooterSocialCard
              SocialIcon="fa-solid fa-globe text-2xl"
              FirstText="Saidpur Mahadev Asthan Patna- 800004, Bihar"
              secondText="Our Address"
            />
            <FooterSocialCard
              SocialIcon="fa-solid fa-envelope text-2xl"
              FirstText="mayankmehar4@gmail.com"
              secondText="Our Mailbox"
            />
            <FooterSocialCard
              SocialIcon="fa-solid fa-phone text-2xl"
              FirstText="91+ 9128102151"
              secondText="Our Phone"
            />
          </div>

          {/* Footer Navigation */}
          <div className="flex justify-around mt-20 text-lg font-semibold">
          <div className= "hover:text-blue-300 transition-all">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-300" : "")}
              >
                Home
              </NavLink>
            </div>

            <div className= "hover:text-blue-300 transition-all">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-blue-300" : "")}
              >
                About
              </NavLink>
            </div>

            <div className= "hover:text-blue-300 transition-all">
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "text-blue-300" : "")}
              >
                Project
              </NavLink>
            </div>

            <div className= "hover:text-blue-300 transition-all">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-blue-300" : "")}
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="text-base font-bold mt-16">
            <p>Copyright © 2024 MIT by MayankMehar. All Rights Reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="text-black text-2xl flex align-middle justify-center gap-6 w-full mt-16 h-16">
            <div className='flex items-center justify-center hover:mb-7 transition-all'>
              <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </NavLink>
            </div>
            <div className=' flex items-center justify-center hover:mb-7 transition-all'>
              <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                    <i className="fa-brands fa-linkedin"></i>
                </div>
              </NavLink>
            </div>
            <div className=' flex items-center justify-center hover:mb-7 transition-all'>
              <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </NavLink>
            </div>
            <div className=' flex items-center justify-center hover:mb-7 transition-all'>
              <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

