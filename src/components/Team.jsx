import Lashen from "../assets/images/developers/lashen.jpeg";
import Yoshani from "../assets/images/developers/yoshani.jpg";
import Rehan from "../assets/images/developers/rehan.jpg";
import Amadi from "../assets/images/developers/amadi.jpg";
import Malindu from "../assets/images/developers/malindu.jpg";
import Thiseni from "../assets/images/developers/thiseni.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const data = [
  {
    name: "Lashen Martino",
    desc: "The team was guided to success by Lashen's innovative leadership, which played a pivotal role in the full-stack development of the project.",
    image: Lashen,
    git: "https://github.com/Lashen1227",
    linkdn: "https://www.linkedin.com/in/lashen-martino/",
  },
  {
    name: "Yoshani Gamage",
    desc: "Yoshani's blend of passion and technical expertise shines in full-stack development, highlighting her pivotal role in the project's success.",
    image: Yoshani,
    git: "https://github.com/yrgamage",
    linkdn: "https://www.linkedin.com/in/yoshani-gamage/",
  },
  {
    name: "Malasha Amadi",
    desc: "Amadi played a crucial role in shaping LearnHeart's frontend, utilizing her expertise to breathe life into its user-friendly project interface.",
    image: Amadi,
    git: "https://github.com/MalshaAmadi",
    linkdn: "https://www.linkedin.com/in/malsha-amadi-349449299",
  },
  {
    name: "Thiseni Perera",
    desc: "Thiseni's passion and technical expertise shine through in the backend development, highlighting her crucial role in the project's success.",
    image: Thiseni,
    git: "https://github.com/Thiseni-D",
    linkdn: "https://www.linkedin.com/in/thiseni-perera-486530274",
  },
  {
    name: "Rehan Godakumbura",
    desc: "Rehan is the Social Media & Marketing Lead and played a crucial role in the frontend development, crafting a user-friendly design.",
    image: Rehan,
    git: "https://github.com/rehangodakumbura",
    linkdn: "https://www.linkedin.com/in/rehan-dewkalana-1b9915292/",
  },
  {
    name: "Malindu Kalhara",
    desc: "Malindu made a significant contribution to LearnHeart by leading the frontend development, creating an intuitive user experience.",
    image: Malindu,
    git: "https://github.com/malindu29",
    linkdn: "http://www.linkedin.com/in/malindu-kalhara",
  },
];

const Team = () => {
  
  return (
    <section id="team" className="text-gray-600 body-font">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-2xl font-medium text-darkblue sm:text-4xl">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {data.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5 transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 border-4 border-gray-300 rounded-full sm:w-40 sm:h-40 lg:w-48 lg:h-48"
              />
              <h2 className="mt-4 text-lg font-semibold text-black">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.desc}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-600 hover:text-black"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.linkdn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-600 hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
