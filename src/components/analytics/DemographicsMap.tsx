
import React from 'react';
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

// Country data with flag codes and visitors
const countryData = [
  { country: 'India', code: 'IN', visitors: 434, flagCode: '🇮🇳' },
  { country: 'USA', code: 'US', visitors: 390, flagCode: '🇺🇸' },
  { country: 'Canada', code: 'CA', visitors: 145, flagCode: '🇨🇦' },
  { country: 'UAE', code: 'AE', visitors: 78, flagCode: '🇦🇪' },
];

// Hotspot positions on world map (approximate, would need fine-tuning)
const hotspots = [
  { id: 1, left: '70%', top: '30%' },  // India
  { id: 2, left: '20%', top: '35%' },  // USA
  { id: 3, left: '18%', top: '28%' },  // Canada
  { id: 4, left: '55%', top: '42%' },  // UAE
  { id: 5, left: '48%', top: '20%' },  // Europe
  { id: 6, left: '80%', top: '60%' },  // Australia
];

const DemographicsMap = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="bg-card p-4 overflow-hidden">
      <div className={`${!isMobile ? 'flex' : ''}`}>
        <div className={`relative ${!isMobile ? 'w-3/5' : 'h-[200px] mb-4'} world-map-container`}>
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="demo-hotspot"
              style={{ left: spot.left, top: spot.top }}
            />
          ))}
          <div className="absolute bottom-1 left-1 flex space-x-2">
            {['🇮🇳', '🇺🇸', '🇨🇦', '🇦🇪'].map((flag, idx) => (
              <span key={idx} className="text-xs px-1 bg-black/30 rounded-sm">
                {flag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`${!isMobile ? 'w-2/5 pl-4' : ''}`}>
          <div className="space-y-3">
            {countryData.map((country) => (
              <div key={country.code} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-base">{country.flagCode}</span>
                  <span className="uppercase text-xs font-medium">{country.country}</span>
                </div>
                <span className="text-xs text-muted-foreground">{country.visitors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DemographicsMap;
