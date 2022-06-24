import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({
  title,
  page,
  selected,
}: {
  title: string;
  page: string;
  selected: boolean;
}) => {
  return (
    <Link to={page} className={selected ? "selected" : ""}>
      {title}
    </Link>
  );
};

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="logo">
        <a
          aria-label="Link to home"
          rel="noreferrer"
          href="https://www.hackyourfuture.dk/"
          target="_blank"
        >
          <img
            src="https://www.hackyourfuture.dk/static/logo-round.svg"
            alt="HackYourFuture Copenhagen"
          />
        </a>
      </div>
      <nav>
        <HeaderLink title="home" page="/" selected={pathname === "/"} />
        <HeaderLink
          title="past events"
          page="/past"
          selected={pathname === "/past"}
        />
        <HeaderLink
          title="graphs"
          page="/graphs"
          selected={pathname === "/graphs"}
        />
        <HeaderLink
          title="list"
          page="/list"
          selected={pathname === "/list"}
        />
      </nav>
    </header>
  );
};
