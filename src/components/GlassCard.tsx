import React from 'react';

interface GlassCardProps {
	  children: React.ReactNode; // Allows any React node to be passed as children
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
	  return (
			<div className="blurEnv ">
				  {children}
			</div>
	  );
};

export default GlassCard;