import React from "react";
import photoJpg from "../../assets/photo.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="bg-#171d32 py-40 px-6 md:px-12">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">About Me</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        
        {/* About Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          
          <p className="text-white text-lg leading-relaxed">
  I'm <span className="font-semibold text-[#465697]">Shadman Sarfaraz</span>, a passionate 
  <strong> Full-Stack Web Developer</strong> skilled in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Express.js.
  <br /><br />
  As a fresher, I love building user-friendly web apps, learning new technologies, and solving real-world problems.
  <br /><br />
  My projects showcase my ability to handle both frontend and backend tasks with clean, efficient, and scalable code.
  <br /><br />
  I'm seeking a dynamic team where I can contribute, learn, and grow as a professional developer.
</p>

        </div>

        {/* Profile Image */}
        <div 
        className="w-full md:w-1/4 flex justify-center">
          <img
            src={photoJpg}
            alt="Profile"
            // className="rounded-xl  w-3/5 "
            className="w-full h-full rounded"
          />
        </div>



      </div>
    </section>
  );
};

export default About;
