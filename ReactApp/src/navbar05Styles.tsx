export default function NavBar() {
    return (
      <nav className="navbar">
        <h1>React App</h1>
        <div className="links">
          <a href="/">Home</a> |
          <a
            href="/create"
            style={{
              color: "white",
              backgroundColor: "rgb(133, 16, 16)",
              borderRadius: "6px"
            }}
          >
            New Post
          </a>
        </div>
      </nav>
    );
  }
  