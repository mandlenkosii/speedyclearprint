import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/60 bg-[var(--paper)]/85 backdrop-blur-xl">
      <Container className="flex h-24 items-center justify-between">
        <div className = "mr-8">
        <Logo />
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavLinks />
        </div>

        <div className="hidden items-center lg:flex">
          <Button href="#contact">
            Get a Quote
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}

export default Navbar;