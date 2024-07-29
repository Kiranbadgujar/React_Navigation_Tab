import React, { useState } from 'react';

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full mt-20 max-w-xl mx-auto">
      {/* Tab Buttons */}
      <div className="bg-blue-500 p-2 rounded-t-lg">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 ${activeTab === 'tab1' ? 'border-blue-700' : 'border-transparent'} hover:bg-blue-700 focus:outline-none tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            Tab 1
          </button>
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 ${activeTab === 'tab2' ? 'border-blue-700' : 'border-transparent'} hover:bg-blue-700 focus:outline-none tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            Tab 2
          </button>
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 ${activeTab === 'tab3' ? 'border-blue-700' : 'border-transparent'} hover:bg-blue-700 focus:outline-none tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            Tab 3
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div id="tab1" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab1' ? '' : 'hidden'}`}>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 1 Content</h2>
        <p>
          Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis urna posuere quam porta consequat. Donec
          commodo diam lectus, sit amet tempor dolor scelerisque eget. Vestibulum at lectus dui. Maecenas consectetur tempor
          ipsum non porttitor. Cras accumsan mattis aliquam. Fusce eleifend maximus elit facilisis condimentum. Mauris non
          risus sed ligula convallis fermentum.
          <br />
          Quisque eu purus nunc. Ut eget ligula ac lorem laoreet scelerisque in ut nulla. Quisque volutpat elit eget tellus pharetra, vel sollicitudin velit scelerisque. Vivamus ac libero eu nunc congue malesuada eu vitae est.
        </p>
      </div>
      <div id="tab2" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab2' ? '' : 'hidden'}`}>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 2 Content</h2>
        <p>
          Phasellus eget euismod libero, nec ullamcorper justo. Phasellus eget euismod libero, nec ullamcorper justo.
          Phasellus eget euismod libero, nec ullamcorper justo. Etiam eget augue in ante gravida facilisis.
        </p>
      </div>
      <div id="tab3" className={`p-4 tab-content bg-white shadow-md rounded-lg ${activeTab === 'tab3' ? '' : 'hidden'}`}>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tab 3 Content</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis
          unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
    </div>
  );
};

export default Tab2;
