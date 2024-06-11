// Import the axios library, which is used to make HTTP requests
import axios from "axios";

// Import the React library, along with the useEffect hook
import React, { useEffect } from "react";

// Import the useState hook from React
import { useState } from "react";

// Define a functional component called CurrentUserLoader. This component accepts a prop called 'children'.
// 'children' is a special prop in React that allows components to be passed as data to other components.
export const CurrentUserLoader = ({ children }) => {
  // Use the useState hook to create a state variable called 'user', and a function to update it, called 'setUser'.
  // The initial value of 'user' is null.
  const [user, setUser] = useState(null);

  // Use the useEffect hook to run a side effect after the component has rendered.
  // The side effect is an asynchronous function that fetches the current user from the '/current-user' endpoint and updates 'user' with the response data.
  // The second argument to useEffect is an empty array, which means the side effect runs once after the initial render, and not on subsequent re-renders.
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  // The component returns a fragment. Inside the fragment, it maps over the children.
  // For each child, if the child is a valid React element, it clones the element and passes the 'user' state variable as a prop.
  // If the child is not a valid React element, it simply returns the child as is.
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};