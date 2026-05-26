import { useLocation } from "react-router";
import { NAVIGATION } from "../../shared";
import "./_navigation.scss";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  return (
    <>
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
      <button className="navigation__button">
        <Menu strokeWidth={3} size={50} />
      </button>
    </>
  );
};
