import { lazy , Suspense} from "react";
//  Navbar
const NavbarComponent = lazy(() => import("./Navbar"));
export const Navbar = () => (
    <Suspense>
      <NavbarComponent/>
    </Suspense>
  );

const HeroComponent = lazy(() => import("./Hero"));
export const Hero = () => (
    <Suspense>
      <HeroComponent/>
    </Suspense>
  );

  