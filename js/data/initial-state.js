import React from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react-dom@18';


export const GlobalContext = React.createContext();

export const { 
  useState, 
  useEffect, 
  useContext,
  useRef
} = React;


export const {
  createRoot,
} = ReactDOM;


export const e = React.createElement;
export const c = useContext;
export const f = useEffect;
export const s = () => c(GlobalContext);


import * as Router from 'https://esm.sh/react-router-dom@6.22.3?deps=react@18';


export const {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
  Outlet,
} = Router;
