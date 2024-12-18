```javascript
import React from 'react';

// Ensure Tailwind directives are correctly configured in your PostCSS configuration
// and that the Tailwind styles are properly imported into your main CSS file

// Import styles
import '../styles.css'; // Or your main CSS file

const MyComponent = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md">
      <div className="text-xl font-bold">
        My Component
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default MyComponent;
```