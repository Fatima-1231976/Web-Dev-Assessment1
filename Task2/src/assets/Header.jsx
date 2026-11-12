function Header() {
  return (
    <header className="header">
      <h1 className="logo">watch.it</h1>

      <nav>
        <a href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Romance</a>
      </nav>

      <button className="search-btn">
        Search
      </button>
    </header>
  );
}

export default Header;