const GlobalContext = React.createContext();

const { useState, useEffect, useContext } = React;

const {
    HashRouter,    // Главный компонент-обертка для всего приложения (следит за URL)
    Routes,           // Контейнер для маршрутов (ищет совпадение)
    Route,            // Один маршрут (путь и что показать)
    useNavigate,      // Хук для навигации (кнопки, переходы)
    useParams,     // Хук для параметров из URL (user/123)
    useLocation,    // Хук для информации о текущем URL
    Outlet,
} = ReactRouterDOM;


const e = React.createElement;
const c = useContext;
const f = useEffect;
const s = () => c(GlobalContext);