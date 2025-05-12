
import React, { useEffect, useState } from 'react';
import SkipCard from './components/SkipCard';

const SkipGrid = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch skip data');
        return response.json();
      })
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status-text">Loading skips...</p>;
  if (error) return <p className="status-text error">Error: {error}</p>;

  return (
    <div className="container">
      <h2>Choose Your Skip Size</h2>
      <p className="subtext">Select the skip size that best suits your needs.</p>
      <div className="grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            size={`${skip.size} Yard`}
            duration={`${skip.hire_period_days}-day hire period`}
            price={(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
            allowsHeavy={skip.allows_heavy_waste}
            allowedOnRoad={skip.allowed_on_road}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipGrid;
