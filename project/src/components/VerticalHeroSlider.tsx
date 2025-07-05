import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const progressRef = useRef(null);
  const timerRef = useRef(null);

  const cards = [
    {
      id: 1,
      label: "IDCode overview",
      img: "/2card-IDcode-img-2048x1212.jpg",
      title: "Your trusted partner for guaranteed software delivery",
      description: "Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.",
      type: "overview",
      
    },
    {
      id: 2,
      label: "Data & AI",
      img: "/card-data-ai-img-2048x1212.jpg",
      title: "Turn data into opportunity with AI-powered insights",
      description: "We help you unlock the full potential of your data by building AI-driven platforms that enable predictive analytics, intelligent automation, and strategic decision-making.",
      type: "service",
      button: { text: "View service", link: "/services/data-science" },
      services: [
        { name: "Business intelligence", link: "/services/business-intelligence" },
        { name: "Artificial intelligence", link: "/services/ai-development" },
        { name: "Machine learning", link: "/services/machine-learning" },
        { name: "Data strategy", link: "/services/data-strategy" },
        { name: "Intelligent automation", link: "/services/intelligent-automation" },
        { name: "MLOps", link: "/services/mlops" }
      ]
    },
    {
      id: 3,
      label: "Energy",
      img: "/card-insurance-img-2048x1212.jpg",
      title: "Empowering energy transformation through software",
      description: "From grid modernization to energy trading platforms, we develop smart, secure solutions that support sustainability, regulatory compliance, and operational efficiency.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/industries/energy" },
      
    },
    {
      id: 4,
      label: "Fintech",
      img: "/card-finance-img-2048x1212.jpg",
      title: "Revolutionizing finance through innovation",
      description: "We build modern financial solutions that streamline transactions, ensure security, and deliver seamless digital experiences—from banking apps to payment gateways.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/industries/fintech" },
      
    },
    {
      id: 5,
      label: "Healthcare",
      img: "/card-healthcare-img-2048x1212.jpg",
      title: "Digitizing healthcare to improve patient outcomes",
      description: "Our custom healthcare platforms enhance care delivery, enable real-time data sharing, and support compliance, helping providers offer efficient and secure services.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/industries/healthcare" },
      
    }
  ];

  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      void progressRef.current.offsetWidth;
      progressRef.current.style.animation = 'slide-progress 15s linear forwards';
    }
  };

  useEffect(() => {
    resetProgressBar();
    timerRef.current = setInterval(() => {
      setOpenIndex(prev => (prev + 1) % cards.length);
    }, 15000);
    return () => clearInterval(timerRef.current);
  }, [openIndex]);

  const goToPrevious = () => {
    setOpenIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToNext = () => {
    setOpenIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  const handleCardClick = (index) => {
    setOpenIndex(index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slide-progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .card-mask {
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%);
        }
        
        .card-closed {
          backdrop-filter: blur(28px);
        }
        
        .card-name-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>

      {/* Mobile View */}
      <section className="md:hidden bg-white h-[520px] relative overflow-hidden px-4 py-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-[92%] max-w-md transition-opacity duration-500 ease-in-out rounded-lg overflow-hidden shadow-lg ${
              index === openIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm text-white p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm font-medium block mb-1">{card.label}</span>
                <h2 className="text-2xl font-serif font-light leading-snug mb-2">{card.title}</h2>
                <p className="text-sm leading-relaxed opacity-90 mt-10">{card.description}</p>
              </div>
              
              <div className="mt-6 relative w-full h-[2px] bg-white/30">
                <div 
                  ref={progressRef} 
                  className="absolute top-0 left-0 h-full bg-white w-full" 
                  style={{ animation: 'slide-progress 15s linear forwards' }} 
                />
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={goToPrevious} 
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full bg-black/40"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button 
                  onClick={goToNext} 
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full bg-black/40"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Desktop View */}
      <section className="hidden md:flex items-start gap-4 px-4 py-8 bg-white h-[58vh] min-h-[500px] w-full">
        {cards.map((card, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`relative rounded-lg overflow-hidden flex-shrink-0 group transition-all duration-500 cursor-pointer ${
                isOpen ? "w-[85%]" : "w-[95px] hover:w-[110px]"
              } h-full`}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {!isOpen && (
                <div className="absolute inset-0 card-closed bg-black/10 group-hover:bg-black/20 transition-all" />
              )}

              {isOpen ? (
                <div className="absolute inset-0 text-white px-20 py-14 flex flex-col justify-center">
                  <div className="absolute inset-0 card-mask z-0"></div>
                  
                  <div className="relative z-10 max-w-2xl">
                    <div className="text-sm font-medium mb-4">{card.label}</div>
                    <h1 className="text-5xl font-serif font-light leading-snug mb-6">
                      {card.title}
                    </h1>
                    <p className="text-base leading-relaxed opacity-90 pl-2 mb-6">{card.description}</p>
                    
                    {card.button && (
                      <div className="mb-8">
                        <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                          {card.button.text}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="relative w-full h-[2px] bg-white/30 mb-6">
                      <div 
                        ref={progressRef} 
                        className="absolute top-0 left-0 h-full bg-white w-full" 
                        style={{ animation: 'slide-progress 15s linear forwards' }} 
                      />
                    </div>
                    
                    {card.type === 'overview' && card.awards && (
                      <div className="mb-4">
                        <h3 className="text-lg font-medium mb-3">Awards</h3>
                        <div className="flex gap-4 items-center">
                          {card.awards.map((award, idx) => (
                            <img 
                              key={idx}
                              src={award.logo} 
                              alt={award.name}
                              className="h-8 object-contain opacity-80"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {card.services && (
                      <div className="mb-4">
                        <h3 className="text-lg font-medium mb-3">Services</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {card.services.map((service, idx) => (
                            <a 
                              key={idx}
                              href={service.link}
                              className="text-sm hover:underline opacity-90 hover:opacity-100"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {card.clients && (
                      <div className="mb-4">
                        <h3 className="text-lg font-medium mb-3">Clients</h3>
                        <div className="flex gap-4 items-center flex-wrap">
                          {card.clients.map((client, idx) => (
                            <img 
                              key={idx}
                              src={client.logo} 
                              alt={client.name}
                              className="h-6 object-contain opacity-80"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-4 mt-4">
                      <button 
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }} 
                        className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4 text-white" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); goToNext(); }} 
                        className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-between items-center py-4 px-1">
                  <div className="w-3 h-3 rounded-full border border-white mb-2" />
                  <span className="text-white text-[13px] font-semibold tracking-tight card-name-vertical">
                    {card.label}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center mt-auto group-hover:bg-white/10 transition-colors">
                    <span className="text-white text-xl font-light">+</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HeroSlider;