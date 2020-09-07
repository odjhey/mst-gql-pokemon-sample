import React, { useState, useEffect } from "react";
import { createRootStore } from "./store";

const useStore = () => {
  const [state, setState] = useState({
    store: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    setState((prev) => ({ ...prev, loading: false, store: createRootStore() }));
  }, []);

  return state;
};

export { useStore };
