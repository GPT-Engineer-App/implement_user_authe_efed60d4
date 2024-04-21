import React, { useState, useEffect } from "react";

const AreaGraph = () => {
  // Function to generate random graph data
  const generateGraphData = () => {
    let data = [];
    for (let i = 0; i < 30; i++) {
      // 30 data points
      const value = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100
      const date = new Date();
      date.setDate(date.getDate() + i);
      data.push({ date: date.toISOString().substring(0, 10), value });
    }
    return data;
  };

  // State for the graph data
  const [graphData, setGraphData] = useState(generateGraphData());

  // Effect hook to regenerate data on mount (or you can trigger it on some other event)
  useEffect(() => {
    const interval = setInterval(() => {
      setGraphData(generateGraphData());
    }, 5000); // Regenerate data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Convert the data points into SVG path commands
  const pathData = graphData.reduce((acc, point, index, arr) => {
    const x = (index / (arr.length - 1)) * 100;
    const y = 100 - (point.value / 100) * 100; // Scale the value to fit in the SVG view box
    return `${acc} ${x},${y}`;
  }, "M");

  // Removed the erroneous duplicate pathData declaration

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "200px" }}>
      <path d={`${pathData} V100 H0 Z`} fill="blue" opacity="0.3" />
      <path d={pathData} fill="none" stroke="blue" strokeWidth="2" />
    </svg>
  );
};

export default AreaGraph;
