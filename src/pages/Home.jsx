import { assets } from "../assets/asset";
import ProductCards from "../widgets/Productdesigncard";
import ServiceCards from "../widgets/ServiceCards";
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <main className="p-5">
      <div className=" p-4  flex flex-col-reverse justify-around items-center text-lg lg:flex lg:flex-row lg:items-start ">
        <div className="basis-1/2">
          <p className="text-xl">// About Complany</p>
          <div className="text-3xl font-bold pt-3">
            <h1>Your Partner for Software Innovation</h1>
          </div>
          <div className="text-xl pt-5 mt-2 w-full">
            <p>
              Engitech is the partner of choice for many of the world’s leading
              enterprises, SMEs and technology challengers. We help businesses
              elevate their value through custom software development, product
              design, QA and consultancy services.
            </p>
          </div>
            <div className="flex items-center justify-start gap-12 mt-5 ">
                <div className="p-2">
                    <img src={assets.image2} alt="" srcset="" className="w-20" />
                    <p>Experience</p>
                    <div className="mt-3 mb-3 w-32 hover:w-52 hover:h-2 hover:bg-slate-400 transition-all bg-slate-400 h-2">
                    </div>
                    <p>Our great team of more <br />
                       than 1400 software experts.
                    </p>
                </div>
                <div className="p-2">
                    <img src={assets.image3} alt="" srcset="" className="w-20" />
                    <p>Experience</p>
                    <div className="mt-3 mb-3 w-32 hover:w-52 hover:h-2 hover:bg-slate-400 transition-all bg-slate-400 h-2">
                    </div>
                    <p>We’ll help you test bold <br /> 
                       new ideas while sharing your.
                    </p>
                </div>
            </div>
        </div>
            <img className="basis-1/2" src={assets.image1} alt="Description" width={"500px"} />
      </div>
        <div className="p-7 mt-10 w-full h-5/6 bg-cover bg-[url('./assets/homeimage/Blue-Futuristic-Banner.png')]">
            <div className="text-2xl font-bold text-white text-center">
                <p>//why choose us</p>
                <p className="text-3xl">Design the Concept</p>
                <p className="text-3xl">of Your Business Idea Now</p>
            </div>
            <div className=" mt-6 gap-8 flex flex-wrap justify-evenly items-center">
                <ProductCards number={"01"} title={"Product Design"} Text={"Our product design service lets you prototype, test and validate your ideas."}/>
                <ProductCards number={"02"} title={"Product Design"} Text={"Our product design service lets you prototype, test and validate your ideas."}/>
                <ProductCards number={"03"} title={"Product Design"} Text={"Our product design service lets you prototype, test and validate your ideas."}/>
            </div>

        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
            <div className="flex flex-col  items-center justify-center p-3 text-white w-full h-full lg:shrink-0 lg:h-64 lg:w-[900px] bg-cover bg-[url('./assets/homeimage/bg-counter-2.jpg')]">
                <div class="info-img-back">
                    <h1 className="text-5xl font-bold">15 +</h1>
                    <br />
                    <h2 className="text-4xl font-bold">Countries Worldwide</h2>
                    <div className="text-xl mt-3"><p>To succeed, every software solution must be deeply integrated into the existing tech environment..</p></div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-white w-full h-full md:shrink-0 lg:h-64 lg:w-[900px] bg-cover bg-[url('./assets/homeimage/bg-counter-2.jpg')]">
                <div class="info-img-back">
                    <h1 className="text-5xl font-bold">15 +</h1>
                    <br />
                    <h2 className="text-4xl font-bold">Countries Worldwide</h2>
                    <div className="text-xl mt-3"><p>To succeed, every software solution must be deeply integrated into the existing tech environment..</p></div>
                </div>
            </div>
        </div>
        <div className="mt-24">
            <div className="flex items-center justify-around gap-64 flex-col gap-5">
                <div className="text-2xl">
                    <p className="text-2xl">// our service</p>
                    <h1 className="text-3xl font-bold">We Offer a Wide</h1>
                    <h1 className="text-3xl">Variety of IT Services</h1>
                </div>
                <button className="bg-blue-950 text-white hover:bg-blue-600 transition-all p-4 pl-6 pr-6 rounded-lg text-xl font-bold">Services</button>
            </div>
            <div class="mt-5 flex flex-wrap items-center justify-center gap-8 pl-2 pr-2">
                <ServiceCards title={"Web Development"} Text={"We carry more than just good coding skills. Our experience makes us stand out from other web development."}/>
                <ServiceCards title={"UI/UX Design"} Text={"Build the product you need on time with an experienced team that uses a clear and effective design process."}/>
                <ServiceCards title={"QA & Testing"} Text={"Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software."}/>
                <ServiceCards title={"IT Counsultancy"} Text={"Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios."}/>
                <ServiceCards title={"Dedicated Team"} Text={"Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating."}/>
            </div>
        </div>

       <div className="flex items-center justify-center">
            <div className="p-3 mt-14 flex items-start justify-between gap-10 w-full h-72 lg:h-72 lg:w-[1000px] bg-cover bg-[url('./assets/homeimage/bg-cta1-home1.jpg')]">
                <div className="text-black">
                    <p className="text-lg font-semibold lg:text-2xl">// We Carry more Than Just Good Coding Skills</p>
                    <p className="text-xl font-bold lg:text-4xl">Let's Build Your Website!</p>
                </div>
                <button className="bg-blue-900 text-white p-4 rounded-lg font-bold text-lg lg:text-xl "><NavLink to="/contact">Contact Us</NavLink></button>
            </div>
       </div>
    </main>
  );
}

export default Home;
