import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="hidden lg:block">
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