import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

/**
 * ResourceLoader component loads a resource from a given URL and passes it as a prop to its children.
 *
 * @param {string} resourceUrl - The URL of the resource to load.
 * @param {string} resourceName - The name of the prop to pass the loaded resource as.
 * @param {ReactNode} children - The child components to render.
 * @returns {ReactNode} - The rendered child components with the loaded resource as a prop.
 */
export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    /**
     * Fetches the resource from the specified URL and updates the state with the loaded data.
     */
    const fetchResource = async () => {
      try {
        const response = await axios.get(resourceUrl);
        setResource(response.data);
      } catch (error) {
        console.error("Failed to load resource:", error);
      }
    };

    fetchResource();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Clone the child component and pass the loaded resource as a prop
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
