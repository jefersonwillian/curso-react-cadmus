import { createContext, useContext, useState } from "react";
import "./custom-hook.css";

const LoadingContext = createContext({});

const LoadingProvider = (props) => {
  const { children } = props;
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {isLoading && (
        <div className="loading">
          <h3>Carregando . . .</h3>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);
  return context;
};

export { LoadingProvider, useLoading };
