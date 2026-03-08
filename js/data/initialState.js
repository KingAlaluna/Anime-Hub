const GlobalContext = React.createContext();

const { useState, useEffect, useContext } = React;

const {
    HashRouter,
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
    useSearchParams,
    Outlet,
} = ReactRouterDOM;


const e = React.createElement;
const c = useContext;
const f = useEffect;
const s = () => c(GlobalContext);