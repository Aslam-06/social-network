
  export const getUserFromStorage = () => {
    const data = localStorage.getItem("social_user");
    return data ? JSON.parse(data) : null;
  };
  
  export const saveUserToStorage = (user) => {
    localStorage.setItem("social_user", JSON.stringify(user));
  };
  
  export const removeUserFromStorage = () => {
    localStorage.removeItem("social_user");
  };