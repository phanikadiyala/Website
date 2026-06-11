import React from 'react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">Phani Kadiyala</div>
      <ul className="nav-links">
        {['skills', 'experience', 'education', 'contact'].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
