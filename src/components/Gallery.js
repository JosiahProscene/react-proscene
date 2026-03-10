import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Gallery() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Safaricom HQ Boardroom",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      location: "Nairobi, Kenya",
      stats: {
        screens: "4K Video Wall",
        audio: "Ceiling Array",
        control: "Touch Panel"
      },
      outcome: "Meeting efficiency up 40%",
      description: "State-of-the-art boardroom with integrated video conferencing for Kenya's leading telecom provider."
    },
    {
      id: 2,
      title: "Strathmore University Lecture Halls",
      category: "education",
      image: `${process.env.PUBLIC_URL}/Strathmorelecturehalls.jpg`,
      location: "Nairobi, Kenya",
      stats: {
        capacity: "500 Students",
        displays: "Dual 98\" Screens",
        audio: "Wireless System"
      },
      outcome: "Student engagement up 65%",
      description: "Advanced lecture capture system with seamless content sharing across multiple halls."
    },
    {
      id: 3,
      title: "Boma Hotels Conference Center",
      category: "hospitality",
      image: `${process.env.PUBLIC_URL}/Boma.webp `,
      location: "Nairobi, Kenya",
      stats: {
        rooms: "8 Meeting Rooms",
        system: "Central Control",
        video: "HD Conferencing"
      },
      outcome: "Setup time reduced 70%",
      description: "Flexible AV solution supporting multiple configurations for conferences and events."
    },
    {
      id: 4,
      title: "ICIPE Research Center",
      category: "research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      location: "Nairobi, Kenya",
      stats: {
        cameras: "4K PTZ Cameras",
        recording: "Live Stream Ready",
        displays: "Lab Displays"
      },
      outcome: "Research reach up 300%",
      description: "Integrated AV system for insect research presentations and international collaboration."
    },
    {
      id: 5,
      title: "KRA Tax Center Digital Signage",
      category: "government",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      location: "Nairobi, Kenya",
      stats: {
        display: "LED Video Wall",
        content: "Dynamic CMS",
        locations: "12 Centers"
      },
      outcome: "Visitor engagement up 85%",
      description: "Digital wayfinding and information displays across Kenya Revenue Authority offices."
    },
    {
      id: 6,
      title: "University of Nairobi Auditorium",
      category: "education",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      location: "Nairobi, Kenya",
      stats: {
        seating: "1000 Capacity",
        audio: "Line Array System",
        lighting: "Stage Lighting"
      },
      outcome: "Event quality up 90%",
      description: "Complete theatrical AV system for Kenya's premier university auditorium."
    },
    {
      id: 7,
      title: "DHL East Africa Operations",
      category: "logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      location: "Nairobi, Kenya",
      stats: {
        locations: "8 Facilities",
        displays: "55\" Displays",
        integration: "Ops System"
      },
      outcome: "Efficiency improved 45%",
      description: "Digital operations boards and video conferencing across East African logistics hubs."
    },
    {
      id: 8,
      title: "NCBA Bank Branch Network",
      category: "banking",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      location: "Nairobi, Kenya",
      stats: {
        branches: "30+ Branches",
        displays: "Digital Signage",
        queue: "Queue Management"
      },
      outcome: "Customer satisfaction up 60%",
      description: "Integrated digital signage and queue management system across banking network."
    },
    {
      id: 9,
      title: "Coca-Cola Distribution Center",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      location: "Nairobi, Kenya",
      stats: {
        display: "Video Wall",
        zones: "3 Areas",
        integration: "KPI Dashboard"
      },
      outcome: "Operations visibility up 80%",
      description: "Real-time operations displays and video conferencing for East Africa distribution."
    },
    {
      id: 10,
      title: "Oraro & Company Law Offices",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      location: "Nairobi, Kenya",
      stats: {
        rooms: "12 Meeting Rooms",
        video: "Auto-track Camera",
        booking: "Room Scheduling"
      },
      outcome: "Collaboration up 75%",
      description: "Premium video conferencing and presentation systems for leading law firm."
    },
    {
      id: 11,
      title: "Ridgeway Baptist Church",
      category: "worship",
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800",
      location: "Nairobi, Kenya",
      stats: {
        seating: "2000 Capacity",
        screens: "LED Screens",
        streaming: "Live Broadcast"
      },
      outcome: "Online reach up 400%",
      description: "Complete worship experience with live streaming and multi-campus connectivity."
    },
    {
      id: 12,
      title: "Baraton University Campus",
      category: "education",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      location: "Eldoret, Kenya",
      stats: {
        classrooms: "50+ Rooms",
        system: "Unified Platform",
        recording: "Lecture Capture"
      },
      outcome: "Learning outcomes up 55%",
      description: "Campus-wide AV infrastructure for interactive learning and remote education."
    },
    {
      id: 13,
      title: "International Rescue Committee",
      category: "nonprofit",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
      location: "Nairobi, Kenya",
      stats: {
        offices: "Regional HQ",
        video: "Multi-point VC",
        security: "Encrypted Comms"
      },
      outcome: "Field coordination up 85%",
      description: "Secure video conferencing connecting humanitarian operations across East Africa."
    },
    {
      id: 14,
      title: "Lafarge Cement Operations",
      category: "manufacturing",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
      location: "Nairobi, Kenya",
      stats: {
        sites: "3 Plants",
        displays: "Control Room",
        monitoring: "24/7 Operations"
      },
      outcome: "Safety incidents down 50%",
      description: "Operations monitoring and communication systems across cement manufacturing sites."
    },
    {
      id: 15,
      title: "Rockefeller Foundation Africa",
      category: "nonprofit",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      location: "Nairobi, Kenya",
      stats: {
        office: "Regional Office",
        video: "Global VC System",
        displays: "Interactive"
      },
      outcome: "Global collaboration up 70%",
      description: "Advanced collaboration technology connecting Africa programs with global network."
    },
    {
      id: 16,
      title: "Bowmans Law Firm",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      location: "Nairobi, Kenya",
      stats: {
        rooms: "8 Boardrooms",
        video: "4K Conferencing",
        integration: "Case Management"
      },
      outcome: "Client satisfaction up 65%",
      description: "Premium legal presentation and video conferencing infrastructure."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'education', label: 'Education' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'banking', label: 'Banking' },
    { id: 'government', label: 'Government' },
    { id: 'nonprofit', label: 'Non-Profit' },
    { id: 'worship', label: 'Worship' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f24b00] to-[#ff6b35] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#16213d] rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 mt-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Work in Action
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              See how our AV systems come to life—from corporate boardrooms to lecture halls.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-[#f24b00] text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#f24b00] bg-opacity-95 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center overflow-hidden">
                  <h3 className="text-xl font-bold text-white mb-3">Key Stats</h3>
                  <div className="space-y-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                          <div className="text-orange-200 text-xs capitalize truncate">{key}</div>
                          <div className="text-white font-semibold text-sm truncate">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-orange-200 text-xs mb-1">Outcome</div>
                    <div className="text-white font-bold text-sm line-clamp-2">{project.outcome}</div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-[#f24b00] text-xs font-semibold rounded-full mb-3 capitalize">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f24b00] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* View Details Button */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white text-[#f24b00] px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 pt-[130px]"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 inline-block px-4 py-2 bg-[#f24b00] text-white font-semibold rounded-full capitalize">
                {selectedProject.category}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {selectedProject.location}
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-[#f24b00] mb-4">Technical Specs</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-green-700 mb-4">Project Outcome</h3>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">✓</div>
                    <p className="text-gray-700 font-semibold text-lg">{selectedProject.outcome}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/bookDemo')}
                className="w-full bg-[#f24b00] text-white py-4 rounded-2xl font-bold hover:bg-[#e54600] transition-colors"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can bring your audio-visual vision to life with cutting-edge technology and expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/bookDemo')}
              className="bg-[#f24b00] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#e54600] transition-all duration-300 transform hover:scale-105"
            >
              Request a Consultation
            </button>
            <button 
              onClick={() => navigate('/case-studies')}
              className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-[#f24b00] hover:text-white transition-all duration-300"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;