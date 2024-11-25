import { assets } from "../assets/asset";

function About() {
    return (
      <main>
        <div className=" flex flex-wrap lg:flex-nowrap items-center justify-center p-5 gap-9">
            <div className="about-main-text lg:basis-1/2">
              <p className="text-2xl">// what we offer</p>
              <br />
              <div className="text-4xl font-bold"><h2>Your Partner for Software Innovation</h2></div>
              <br />
              <p className="text-lg text-wrap">Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
              <br />
              <p class="text-lg font-semibold italic text-wrap">We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.</p>
            </div>
            <br />
            <div className="lg:basis-1/2 flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-center lg:gap-8 items-center justify-center gap-10">
                <div className="flex flex-col gap-5">
                    <div className="text-white flex items-center justify-center font-bold text-2xl w-64 h-64 bg-cover bg-[url('./assets/aboutimages/image-boxabout.jpg')]"><h4>Our Mission</h4></div>
                    <div className="text-white flex items-center justify-center font-bold text-2xl w-64 h-64 bg-cover bg-[url('./assets/aboutimages/image-boxabout2.png')]"><h4>Our Philosophy</h4></div>
                </div>
                <div className="">
                    <div className="text-white flex items-center justify-center font-bold text-2xl w-64 h-64 bg-cover bg-[url('./assets/aboutimages/image-box3about.jpg.png')]"><h4>Our Vision</h4></div>
                </div>
            </div>
        </div>

        <div className="text-white p-5 flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-center lg:p-6 w-full bg-cover bg-[url('./assets/aboutimages/techback-aboutmit.png')]">
          <div className="w-full flex items-center justify-center"><img src={assets.image4}  width="520px" /></div>
          <div className="main-cont2-text">
            <p className="text-xl font-semibold">// Experience. Execution. Excellence.</p>
            <br />
            <div className="text-3xl font-bold"><h1>What We Actually Do</h1></div>
            <br />
            <div class="flex items-center justify-start gap-10 text-5xl text-purple-500">
              <div className="bg-blue-950 rounded-lg p-1 hover:text-purple-300 transition ease-in-out duration-500"><i class="fa-brands fa-php"></i></div>
              <div className="bg-blue-950 rounded-lg p-1 hover:text-purple-300 transition ease-in-out duration-500"><i class="fa-brands fa-react"></i></div>
              <div className="bg-blue-950 rounded-lg p-1 hover:text-purple-300 transition ease-in-out duration-500"><i class="fa-brands fa-js"></i></div>
              <div className="bg-blue-950 rounded-lg p-1 hover:text-purple-300 transition ease-in-out duration-500"><i class="fa-brands fa-css3"></i></div>
            </div>
            <br />
            <h4 className="text-lg font-medium">PHP Website Development Services</h4>
            <br />
            <div className="text-lg font-medium"><span>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</span></div>
          </div>
        </div>
      </main>
    );
  }
  
export default About;