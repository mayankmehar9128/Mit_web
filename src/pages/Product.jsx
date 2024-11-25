import { useState, useEffect } from "react";
import { assets } from "../assets/asset";
import ProductCardsInfo from "../widgets/productCard";

function Product() {
  const images = [assets.image7, assets.image8, assets.image5]; // Add more images here
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      <div className="p-4 flex flex-col-reverse justify-around items-center text-lg lg:flex lg:flex-row lg:items-start">
        <div className="basis-1/2">
          <p className="text-xl">// About Company</p>
          <div className="text-3xl font-bold pt-3">
            <h1>Your Partner for Software Innovation</h1>
          </div>
          <div className="text-xl pt-5 mt-2 w-full">
            <p>
              The Smart School Management System (SSMS) is a comprehensive
              software solution designed to simplify and streamline school
              administration. It integrates various academic and administrative
              processes into a single platform, enabling educational
              institutions to operate efficiently and focus more on delivering
              quality education. With its user-friendly interface and powerful
              features, SSMS caters to the diverse needs of administrators,
              teachers, parents, and students. The system automates
              time-consuming tasks such as attendance tracking, fee collection,
              and timetable scheduling, reducing manual errors and saving
              valuable time. Additionally, it offers real-time insights and
              analytics, empowering schools to make data-driven decisions.
            </p>

            <br />

            <p>
              <p className="font-bold">
                "Revolutionize Education with Smart Management Solutions"
              </p>
              <p className="italic text-lg">
                Effortlessly manage your school with our cutting-edge software
                designed to enhance efficiency and streamline operations.
              </p>
            </p>
            <br />

            <div>
              <p className="text-2xl">Key Features to Highlight</p>
              <br />
              <ul>
                <div className="flex gap-5 flex-wrap">
                  <ProductCardsInfo
                    title={"1. Comprehensive Dashboard"}
                    Text1={
                      "Real-time data visualization for attendance, fees, and academic performance."
                    }
                    Text2={"Customizable widgets for quick insights."}
                  />
                  <ProductCardsInfo
                    title={"1. Comprehensive Dashboard"}
                    Text1={
                      "Real-time data visualization for attendance, fees, and academic performance."
                    }
                    Text2={"Customizable widgets for quick insights."}
                  />

                  <ProductCardsInfo
                    title={"2. Student Information Management"}
                    Text1={
                      "Centralized database for student details, attendance, grades, and activities."
                    }
                    Text2={"Quick search and filter functionality."}
                  />

                  <ProductCardsInfo
                    title={"3. Attendance Tracking"}
                    Text1={
                      "Automated attendance using biometric integration, RFID, or manual entry."
                    }
                    Text2={"Instant SMS/Email notifications for absentees."}
                  />

                  <ProductCardsInfo
                    title={"4. Fee Management"}
                    Text1={
                      "Simplified fee collection with online payment gateways."
                    }
                    Text2={
                      "Generate invoices and receipts automatically. Customizable fee structures for classes and extracurriculars."
                    }
                  />

                  <ProductCardsInfo
                    title={"5. Teacher and Staff Management"}
                    Text1={
                      "Maintain records of staff profiles, schedules, and salaries."
                    }
                    Text2={"Automated payroll generation with leave tracking."}
                  />

                  <ProductCardsInfo
                    title={"6. Timetable and Scheduling"}
                    Text1={
                      "Easily create, edit, and manage timetables for students and staff."
                    }
                    Text2={
                      "Automated conflict detection for class and teacher availability."
                    }
                  />

                  <ProductCardsInfo
                    title={"7. Exam and Results Management"}
                    Text1={
                      "Online and offline exam scheduling with integrated grading tools."
                    }
                    Text2={"Generate report cards with detailed analytics."}
                  />

                  <ProductCardsInfo
                    title={"8. Library Management"}
                    Text1={"Track book inventory, issues, returns, and fines."}
                    Text2={"Integrated student and staff library accounts."}
                  />

                  <ProductCardsInfo
                    title={"9. Parent-Teacher Communication"}
                    Text1={
                      "Dedicated parent and teacher portals for seamless communication."
                    }
                    Text2={
                      "Instant notifications for updates, performance, and events."
                    }
                  />

                  <ProductCardsInfo
                    title={"10. Online Learning Integration"}
                    Text1={
                      "Built-in tools for live classes, video uploads, and assignments."
                    }
                    Text2={
                      "Integration with platforms like Zoom, Google Meet, or Microsoft Teams."
                    }
                  />

                  <ProductCardsInfo
                    title={"11. Hostel and Transport Management"}
                    Text1={
                      "Manage hostel assignments, occupancy, and maintenance records."
                    }
                    Text2={
                      "GPS-enabled transport tracking for buses with live updates."
                    }
                  />

                  <ProductCardsInfo
                    title={"12. Custom Reports and Analytics"}
                    Text1={
                      "Generate detailed reports for attendance, grades, fees, and more."
                    }
                    Text2={
                      "Data-driven insights to improve school performance."
                    }
                  />
                </div>
              </ul>
              <br />
              <div>
                <p>Benefits for Your School</p>
                <div>
                  <p>1. Increased Efficiency:</p>
                  <p>Automate time-consuming tasks to save time and reduce human errors.</p>
                </div>
              </div>
              <div>
                <p>Benefits for Your School</p>
                <div>
                  <p>1. Increased Efficiency:</p>
                  <p>Automate time-consuming tasks to save time and reduce human errors.</p>
                </div>
              </div>
              <div>
                <p>Benefits for Your School</p>
                <div>
                  <p>1. Increased Efficiency:</p>
                  <p>Automate time-consuming tasks to save time and reduce human errors.</p>
                </div>
              </div>
              <div>
                <p>Benefits for Your School</p>
                <div>
                  <p>1. Increased Efficiency:</p>
                  <p>Automate time-consuming tasks to save time and reduce human errors.</p>
                </div>
              </div>
              <div>
                <p>Benefits for Your School</p>
                <div>
                  <p>1. Increased Efficiency:</p>
                  <p>Automate time-consuming tasks to save time and reduce human errors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 relative">
          <img
            className="basis-1/2 w-full h-full animate-pulse"
            src={images[currentImage]}
            alt="Description"
            width={400}
            height={400}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="p-4 flex flex-col-reverse justify-around items-center text-lg lg:flex lg:flex-row-reverse lg:items-start">
        <div className="basis-1/2">
          <p className="text-xl">// About Company</p>
          <div className="text-3xl font-bold pt-3">
            <h1>Your Partner for Software Innovation</h1>
          </div>
          <div className="text-xl pt-5 mt-2 w-full">
            <p>
              Engitech is the partner of choice for many of the world’s leading
              enterprises, SMEs, and technology challengers. We help businesses
              elevate their value through custom software development, product
              design, QA, and consultancy services.
            </p>
          </div>
        </div>
        <div className="w-80 relative">
          <img
            className="basis-1/2 w-full h-full animate-pulse"
            src={images[currentImage]}
            alt="Description"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}

export default Product;
