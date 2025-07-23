"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  X,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Mail,
} from "lucide-react";

// Board of Directors (with images)
const boardMembers = [
  {
    name: "Siddhant Panthi",
    position: "President",
    image: "/images/siddhant-panthi.jpg",
    bio: "Leading the club with passion for technology and innovation.",
    skills: [
      "Leadership",
      "Web Development",
      "Project Management",
      "Graphics Designing",
    ],
    social: {
      linkedin: "https://linkedin.com/in/siddhantpanthi",
      github: "https://github.com/siddhantpanthi",
      instagram: "https://instagram.com/siddu.psd",
    },
  },
  {
    name: "SANJOG PANDEY",
    position: "Vice President",
    image: "/images/sanjog-pandey.jpg",
    bio: "Coordinating events and fostering collaboration among members.",
    skills: ["Event Management", "UI/UX Design", "Team Building"],
    social: {
      linkedin: "https://linkedin.com/in/sangogpandey",
      github: "https://github.com/sangogpandey",
      instagram: "https://instagram.com/sangogpandey",
    },
  },
  {
    name: "RAMIT NEUPANE",
    position: "Secretary",
    image:
      "https://storage.tally.so/private/FD5BA672-63AF-4B2C-A887-F2AAE4F8DB36.jpeg?id=rELzz2&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJFTHp6MiIsImZvcm1JZCI6Ind6UkVPRSIsImlhdCI6MTc0OTE3MDkzNX0.q1KSfNrGo0X7oU61qISdLC44yDzi6CykZBlZSb2RWfE&signature=c3d5bcef9ab99017807025d6188ef37b6abb20f7a553cebbdeaff8d2e8e8cb74",
    bio: "Documentation for the club.",
    skills: ["Documentation", "Communication", "Organization"],
    social: {
      linkedin: "https://linkedin.com/in/ramatneupane",
      github: "https://github.com/ramatneupane",
      website: "https://ramatneupane.dev",
    },
  },
  {
    name: "SHASANK SHRESTHA",
    position: "Treasurer",
    image: "/images/shasank-shrestha.jpg",
    bio: "Managing club finances and resource allocation.",
    skills: ["Financial Management", "Planning", "Analytics"],
    social: {
      linkedin: "https://linkedin.com/in/shasankshrestha",
      email: "shasankshrestha59@gmail.com",
      github:"https://github.com/shasank00",
    },
  },
  {
    name: "NAYAN ACHARYA",
    position: "IT Head",
    image: "/images/nayan-acharya.jpg",
    bio: "Overseeing technical projects and infrastructure.",
    skills: ["System Administration", "DevOps", "Technical Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/nayan135",
      twitter: "https://twitter.com/nooneknows135",
      email: "nayan@ypstem.org",
    },
  },
  {
    name: "NARAYAN BHUSAL",
    position: "IT Officer",
    image: "/images/narayan-bhusal.jpg",
    bio: "Supporting technical initiatives and member development.",
    skills: ["Web Development", "Mentoring", "Project Coordination"],
    social: {
      linkedin: "https://linkedin.com/in/naranbhusal02",
      twitter: "https://twitter.com/naranbhusal02",
      email: "narayan@ypstem.org",
    },
  },
  {
    name: "NISHAN REGMI",
    position: "Media",
    image:
      "https://storage.tally.so/private/inbound5447591931717511682.jpg?id=E0DyjB&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkUwRHlqQiIsImZvcm1JZCI6Ind6UkVPRSIsImlhdCI6MTc0OTEyODA3NX0.2CTpAvwu_RXW9bSYkVgRcAbtM_YwzDSAoVn7n6u7FDw&signature=0f81f6034d38c3925c078457f14b42bf6c600c75b98d11e0b9eebf44a279df37",
    bio: "Managing club media presence and communications.",
    skills: ["Content Creation", "Social Media", "Photography"],
    social: {
      linkedin: "https://linkedin.com/in/nishanregmi",
      email: "nishanregmi@gmail.com",
    },
  },
  {
    name: "Bishnu Adhikari",
    position: "Head of Executive",
    image: "/images/bishnu-adhikari.jpg",
    bio: "Contributing to strategic planning and club operations.",
    skills: ["Strategy", "Operations", "Member Engagement"],
    social: {
      linkedin: "https://www.linkedin.com/in/bishnu-adhikari-8bb6242a5/",
      email: "yamadeath0@gmail.com",
    },
  },
  
   {
    name: "Sweta lamsal",
    position: "Joint Secretary",
    image: "/images/sweta-lamsal.jpg",
    bio: "Contributing to strategic planning and club operations.",
    skills: ["Communication", "Organization", "Event Planning"],
    social: {
      facebook: "https://www.facebook.com/swe.ta.119000",
      email: "swetadonna@gmail.com",
    },
  },

   {
    name: "Aaditya Khanal",
    position: "Leader Of 11",
    image: "/images/aaditya-khanal.jpg",
    bio: "Engaging team with various events throughout the club.",
    skills: ["Leadership", "Communication", "Management"],
    social: {
      facebook: "https://www.facebook.com/aaditya.khanal.7999",
      email: "khanalaaditya27@gmail.com",
    },
  },

  {
    name: "Himanshu Sapkota",
    position: "Leader Of 10",
    image: "/images/himanshu-sapkota.jpg",
    bio: "Engaging team with various events throughout the club.",
    skills: ["Leadership", "Communication", "Management"],
    social: {
      linkedin: "https://www.linkedin.com/in/himanshusapkota/",
      email: "himanshuspkt@gmail.com",
    },
  },

  {
    name: "Samriddha poudel",
    position: "Leader Of 9",
    image: "/images/samriddha-poudel.jpg",
    bio: "Engaging team with various events throughout the club.",
    skills: ["Leadership", "Communication", "Management"],
    social: {
      facebook: "https://www.facebook.com/samriddha.poudel.869291",
      email: "poudelsamriddha46@gmail.com",
    },
  },

   {
    name: "PRAZWAL ROKA",
    position: "Executive Member",
    image: "/images/prazwal-roka.jpg",
    bio: "Contributing to strategic planning and club operations.",
    skills: ["Strategy", "Operations", "Engagement"],
    social: {
      linkedin: "https://linkedin.com/in/prazwalroka",
      email: "prazwalroka@gmail.com",
    },
  },
  {
    name: "Amit Pandey",
    position: "Executive Member",
    image: "/images/amit-pandey.jpg",
    bio: "Contributing to strategic planning and club operations.",
    skills: ["Strategy", "Operations", "Engagement"],
    social: {
      facebook: "https://www.facebook.com/amit.pandey.922255",
      email: "pandeyamit2064@gmail.com",
    },
  },

  {
  name: "Raunak Acharya",
  position: "Executive Member",
  image: "/images/raunak-acharya.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    facebook: "https://www.facebook.com/share/18xxwiHzee/",
    email: "raunakacharya0@gmail.com"
  },
},

  {
  name: "Aman Pokharel",
  position: "Executive Member",
  image: "/images/aman-pokharel.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
   "Strategy", "Operations", "Engagement"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/aman-pokharel-59b146287/",
    email: "amanpokharel69@gmail.com"
  },
},

  {
  name: "Nischal Darnal",
  position: "Executive Member",
  image: "/images/nischal-darnal.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    facebook: "https://www.facebook.com/share/1LeiXMA3Zb/",
    email: "nischaldarnal69@gmail.com"
  },
},
  
  {
  name: "Anushka Pokhrel",
  position: "Executive Member",
  image: "/images/anushka-pokhrel.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    facebook: "https://www.facebook.com/anushka.pokhrel.871838/",
    email: "shovasasa0@gmail.com"
  },
},

{
  name: "Rabin Chudali",
  position: "Executive Member",
  image: "/images/rabin-chudali.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/rabin-chudali-9600b934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "rabinchudali07@gmail.com"
  },
},

{
  name: "Girija Karki",
  position: "Executive Member",
  image: "/images/girija-karki.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    instagram: "https://www.instagram.com/_sanjokkarki?igsh=MXhmbmQxZno3eWFjaA==",
    email: "karkisanjok06@gmail.com"
  },
},

{
  name: "Sumit Kawar Magar",
  position: "Executive Member",
  image: "/images/sumit-kawar-magar.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    instagram: "https://www.instagram.com/aridorikichi/profilecard/?igsh=cWtwbjBreGNhZHE0",
    email: "aridorikichi@gmail.com"
  },
},

{
  name: "Aman Pokharel",
  position: "Executive Member",
  image: "/images/aman-pokharel.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/aman-pokharel-59b146287/",
    email: "amanpokharel69@gmail.com"
  },
},

{
  name: "Anshu Aryal",
  position: "Executive Member",
  image: "/images/anshu-aryal.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
   instagram: "https://www.instagram.com/anshuaryal15?igsh=MWgwZnpkNnR3dWF1cw==",
    email: "aryalanshu64@gmail.com"
  },
},

{
  name: "Susant Gautam",
  position: "Executive Member",
  image: "/images/susant-gautam.jpg",
  bio: `Contributing to strategic planning and club operations`,
  skills: [
    "Strategy", "Operations", "Engagement"
  ],
  social: {
   linkedin: "https://www.linkedin.com/in/sushant-gautam-705144314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "sushantgautam854@gmail.com"
  },
},

]

// Regular Members (names only)
const members = [
  {
    name: "Awashkar Shrestha Nagarkoti",
    position: "MEMBER",
  },
  {
    name: "Lakshya Khanal",
    position: "MEMBER",
  },
  {
    name: "Pari Adhikari",
    position: "MEMBER",
  },
  {
    name: "Abhay Mishra",
    position: "MEMBER",
  },
  {
    name: "Shisir Dhakal",
    position: "MEMBER",
  },
  {
    name: "Aayush Kunwar Chhetri",
    position: "MEMBER",
  },
  {
    name: "Ravi Tharu",
    position: "MEMBER",
  },
  {
    name: "Kamal Prasad Bhandari",
    position: "MEMBER",
  },
  {
    name: "Anjish Nyoupane ",
    position: "MEMBER",
  },
  {
    name: "Bishal Pokhrel",
    position: "MEMBER",
  },
  {
    name: "Aayush Kalwar",
    position: "MEMBER",
  },
  {
    name: "Prashant Pandey",
    position: "MEMBER",
  },
  {
    name: "Shrijan Pandey",
    position: "MEMBER",
  },
  {
    name: "Sagar Sharma",
    position: "MEMBER",
  },
  {
    name: "Keshav Sharma Ghimire",
    position: "MEMBER",
  },
  {
    name: "Aswin Gautam",
    position: "MEMBER",
  },

  {
    name: "Asim Kandel",
    position: "MEMBER",
  },
  {
    name: "Sujan Barghare",
    position: "MEMBER",
  },
  {
    name: "Sugam Neupane ",
    position: "MEMBER",
  },
  {
    name: "Danish Chidi",
    position: "MEMBER",
  },
];

// Advisors
const Advisors = [
  {
    name: "Dinesh Thapa",
    position: "Advisor",
    image:
      "https://kalikaschoolbtl.edu.np/public/storage/profiles/February2023/U760qbJVMpmeAEL1PpMK.jpg",
    social: {
      linkedin: "",
      twitter: "",
    },
  },
  {
    name: "Arbind Kumar Dubey",
    position: "Advisor",
    image:
      "https://scontent.fkep3-1.fna.fbcdn.net/v/t1.6435-9/80609008_2556502627797679_3545427414731456512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rTOQW34e4eQQ7kNvwFitxSP&_nc_oc=AdktgjOHteoS5m_-WdsGu3KAdNfqn7IwvPlFD7HcHTV1qzZTtSu8-X-QW4NWBicrLMw&_nc_zt=23&_nc_ht=scontent.fkep3-1.fna&_nc_gid=u1J1CwPFySmD-qdZi6SKiA&oh=00_AfNgAYjfo96E60U0KcXi75hYht7-Ov4IRgxUeUouERYBbw&oe=6869FA03",
    social: {
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Vishnu Neupane",
    position: "Advisor",
    image:
      "https://scontent.fkep3-1.fna.fbcdn.net/v/t39.30808-6/494478540_23908497598744229_4993761312091139037_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vRTtHnk10s4Q7kNvwF3cidC&_nc_oc=Adm8lUuyIavj9plscNLGsoTzOYShgh6qB5PeaeJxKrOQMJFzwLQr9kw1IyQ7XjI3Ypk&_nc_zt=23&_nc_ht=scontent.fkep3-1.fna&_nc_gid=AZ3RRsTb__Ul01vWrSF5OA&oh=00_AfNDAXQmt5DxGAHx87LToXL9BNdGZHGbx7NxsuGZxOBZzg&oe=68484F1E",
    social: {
      linkedin: "",
      website: "",
    },
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof boardMembers)[0] | null
  >(null);

  const getSocialIcon = (platform: string, url: string) => {
    const iconProps = {
      size: 18,
      className:
        "text-[#9bd3ff] hover:text-white transition-colors duration-300",
    };

    switch (platform) {
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "github":
        return <Github {...iconProps} />;
      case "twitter":
        return <Twitter {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "website":
      case "behance":
      case "facebook":
        return <ExternalLink {...iconProps} />;
      case "email":
        return <Mail {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 glow-text"
          >
            Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the passionate individuals who drive innovation and excellence
            in the ICT Club. Our diverse team brings together unique skills,
            perspectives, and experiences to create an inspiring learning
            environment.
          </motion.p>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Board of Directors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center cursor-pointer transition-all duration-300 group relative"
                onClick={() => setSelectedMember(member)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full mx-auto mb-4 glow-border object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2 uppercase">
                  {member.name}
                </h3>
                <p className="text-[#9bd3ff] font-medium mb-4">
                  {member.position}
                </p>

                {/* Social Links on Hover */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4 mb-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={platform === "email" ? `mailto:${url}` : url}
                        target={platform === "email" ? undefined : "_blank"}
                        rel={
                          platform === "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getSocialIcon(platform, url)}
                      </a>
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium">
                    Click for details
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Members
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-white mb-1 uppercase">
                  {member.name}
                </h3>
                <p className="text-[#9bd3ff] text-sm font-medium mb-4">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 glow-text"
          >
            Advisors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Advisors.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl p-6 text-center transition-all duration-300"
              >
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full mx-auto mb-4 glow-border object-cover"
                />
                <h3 className="text-lg font-bold text-white mb-2 uppercase">
                  {person.name}
                </h3>
                <p className="text-[#9bd3ff] text-sm mb-2">{person.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="card-glow rounded-xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              title="Close details"
              aria-label="Close details"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <Image
                src={selectedMember.image || "/placeholder.svg"}
                alt={selectedMember.name}
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-6 glow-border object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">
                {selectedMember.name}
              </h3>
              <p className="text-[#9bd3ff] font-medium mb-4">
                {selectedMember.position}
              </p>
              <p className="text-gray-300 mb-6">{selectedMember.bio}</p>

              <div>
                <h4 className="text-white font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#5bbcff]/20 text-[#9bd3ff] px-3 py-1 rounded-full text-sm border border-[#5bbcff]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
