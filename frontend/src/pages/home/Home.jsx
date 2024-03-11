import React from 'react';

const Home = () => {
  const visitorCount = 1200000; // Example number of visitors per year
  const revenue = "$2.5 billion"; // Example revenue generated by tourism

  return (
    <div className="bg-green-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to EthioExplore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Number of Visitors per Year</h2>
          <p className="text-lg">{visitorCount} people visit Ethiopia annually to explore its rich culture, history, and natural beauty.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Economic Impact</h2>
          <p className="text-lg">Ethiopia's tourism industry generates {revenue} in revenue, contributing significantly to the country's economy.</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Ethiopia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1604267118249-f411c7c442db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ethiopia Image 1" className="rounded-lg shadow-md" />
          <img src="https://images.unsplash.com/photo-1634029729106-a18cfffb4476?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ethiopia Image 2" className="rounded-lg shadow-md" />
          <img src="https://images.unsplash.com/photo-1564101151838-630e722d7b1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ethiopia Image 3" className="rounded-lg shadow-md" />
        </div>
      </div>
      
      {/* Additional Features */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Cultural Diversity</h2>
            <p className="text-lg">Ethiopia is known for its diverse cultural heritage, with over 80 ethnic groups each contributing to the country's rich tapestry.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Adventure Opportunities</h2>
            <p className="text-lg">From trekking in the Simien Mountains to exploring ancient ruins, Ethiopia offers a wide range of adventure activities for thrill-seekers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
