import React from 'react';
import { travelFeatures } from '../../data/features';

const FeatureBanner = ({ features = travelFeatures }) => {
  return (
    <div className="bg-white/90 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-6 px-4 md:py-8 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-5xl mx-auto border border-tertiary/10 backdrop-blur-xl">
      {features.map((feature) => (
        <div key={feature.id} className="flex flex-col items-center gap-2 md:gap-4 group">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-transform group-hover:-translate-y-1 duration-300">
            {feature.icon}
          </div>
          <span className="text-primary font-bold text-sm text-center">
            {feature.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureBanner;
