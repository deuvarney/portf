import { useState, useEffect } from 'react';

const useBodyClass = (initialClassName) => {
  const [className, setClassName] = useState(initialClassName);

    // Function to update the class name on the body element
    const updateBodyClass = (newClassName) => {
        if (newClassName !== className) {
        document.body.classList.remove(className); // Remove the current class
        document.body.classList.add(newClassName); // Add the new class
        setClassName(newClassName); // Update the current class name
        }
    };

  useEffect(() => {
    // Add the initial class name to the body element
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className); // Clean up by removing the class
    };
  }, [className]);

  return { className, updateBodyClass };
};

export default useBodyClass;