import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Home.css";

const ExpCounter = () => {
  const clientsCount = 500;
  const yearsCount = 25;

  const [counters, setCounters] = useState({ clientsCounter: 0, yearsCounter: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const updateCounters = useCallback(() => {
    setCounters((prevCounters) => ({
      clientsCounter: Math.min(prevCounters.clientsCounter + 25, clientsCount),
      yearsCounter: Math.min(prevCounters.yearsCounter + 1, yearsCount),
    }));
  }, [clientsCount, yearsCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0);
    }, { threshold: 0.5 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const clientsInterval = setInterval(updateCounters, 100);
      const yearsInterval = setInterval(updateCounters, 100);

      return () => {
        clearInterval(clientsInterval);
        clearInterval(yearsInterval);
      };
    }
  }, [isVisible, updateCounters]);

  return (
    <div ref={elementRef} className="container">
      <div className="row counter-row">
        <div className="counter-box col-md-4 text-center">
          <p className="counter clients-counter">{counters.clientsCounter}+</p>
          <p className="h6">Number of clients served</p>
        </div>
        <div className=" counter-box col-md-4 text-center">
          <p className="counter years-counter">{counters.yearsCounter}</p>
          <p className="h6">Number of years experience</p>
        </div>
      </div>
    </div>
  );
};

export default ExpCounter;
