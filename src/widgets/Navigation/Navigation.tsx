import { useLocation } from "react-router";
import { NAVIGATION } from "../../shared";
import "./_navigation.scss";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {NAVIGATION.map((item) => (
          <li className="navigation__item" key={item.href}>
            <a
              href={item.href}
              className={`navigation__link ${location.pathname === item.href && "navigation__link--active"}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
