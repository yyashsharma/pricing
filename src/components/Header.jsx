import React from "react";
import { Navbar } from "flowbite-react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CareerGuide.com
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Class 10
        </Navbar.Link>
        <Navbar.Link  href="#">
        Class 11 to 12
        </Navbar.Link>
        <Navbar.Link  href="#">
        Class 11 to 12
        </Navbar.Link>
        <Navbar.Link  href="#">
        Counsellors
        </Navbar.Link>
        <Navbar.Link  href="#">
        Counsellors
        </Navbar.Link>
        <Navbar.Link  href="#">
        Professionals
        </Navbar.Link>
        <Navbar.Link  href="#">
        Study Abroad
        </Navbar.Link>
        <Navbar.Link  href="#">
        Courses
        </Navbar.Link>
        <Navbar.Link  href="#">
        Sign in
        </Navbar.Link>
        <Navbar.Link  href="#">
        My Profile
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
