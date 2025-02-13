import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Gaurav",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Former Product Lead at Google with expertise in AI and voice technology. IIT Kharagpur alumnus with a vision to revolutionize voice communication.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "gaurav@dhwaniai.com"
      }
    },
    {
      name: "Shriyanshu Kumar",
      role: "AI & Electrical Systems Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "IIT KGP dual degree holder specializing in AI and electrical systems. Published researcher in speech recognition and natural language processing.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shriyanshu@dhwaniai.com"
      }
    },
    {
      name: "Pratik Agarwal",
      role: "Engineering & Operations Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "IIT KGP graduate with expertise in scalable systems. Previously led engineering teams at Microsoft and Amazon.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "pratik@dhwaniai.com"
      }
    },
    {
      name: "Swadhin Satyaprakash Majhi",
      role: "AI & Software Development Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "IIT KGP Computer Science graduate specializing in machine learning and software architecture. Published author in AI research.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "swadhin@dhwaniai.com"
      }
    },
    {
      name: "Shreyansh Gupta",
      role: "Full-Stack & Backend Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "PEC Computer Science graduate with expertise in scalable backend systems and cloud architecture. Previously worked at Adobe.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shreyansh@dhwaniai.com"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              A team of passionate engineers and innovators from IIT Kharagpur & PEC, 
              dedicated to revolutionizing voice technology
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that drive our innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We're constantly pushing the boundaries of what's possible with AI and voice technology"
              },
              {
                title: "Customer Success",
                description: "Our success is measured by the value we create for our customers"
              },
              {
                title: "Engineering Excellence",
                description: "We maintain the highest standards in everything we build"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;