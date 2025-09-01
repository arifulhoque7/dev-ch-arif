import React from 'react';

const CreditCards = () => {
  const cards = [
    { 
      id: 1, 
      angle: '-rotate-12', 
      position: 'left-[10%] bottom-[15%]',
      cardNumber: '1234 1234 1234 1234',
      name: 'OLIVIA RHYE',
      expiry: '06/24',
      label: 'Untitled'
    },
    { 
      id: 2, 
      angle: 'rotate-6', 
      position: 'left-[25%] bottom-[25%]',
      cardNumber: '1234 1234 1234 1234',
      name: 'LANA STEINER',
      expiry: '06/24',
      label: 'Untitled'
    },
    { 
      id: 3, 
      angle: '-rotate-6', 
      position: 'right-[25%] bottom-[25%]',
      cardNumber: '1234 1234 1234 1234',
      name: 'DEVIN WILSON',
      expiry: '06/24',
      label: 'Untitled'
    },
    { 
      id: 4, 
      angle: 'rotate-12', 
      position: 'right-[10%] bottom-[15%]',
      cardNumber: '1234 1234 1234 1234',
      name: 'CANDICE WU',
      expiry: '06/24',
      label: 'Untitled'
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`absolute ${card.position} ${card.angle} transform transition-all duration-700 hover:scale-105`}
          style={{ 
            animation: `float${card.id} 6s ease-in-out infinite`,
            animationDelay: `${card.id * 0.5}s`
          }}
        >
          <div className="w-72 h-44 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex justify-between items-start mb-8">
              <span className="text-white/80 text-sm font-medium">{card.label}</span>
              <div className="w-10 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded opacity-80"></div>
            </div>
            <div className="text-white/90 text-lg tracking-wider mb-4 font-mono">
              {card.cardNumber}
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide">{card.name}</p>
              </div>
              <div>
                <p className="text-white/60 text-xs">{card.expiry}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-18px) rotate(-6deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-22px) rotate(12deg); }
        }
      `}</style>
    </div>
  );
};

export default CreditCards;