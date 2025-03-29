import { lazy , Suspense} from "react";
//  Navbar
const HomeComponent = lazy(() => import("./Home"));
export const Navbar = () => (
    <Suspense>
      <HomeComponent/>
    </Suspense>
  );

// const HeroComponent = lazy(() => import("./Hero"));
// export const Hero = () => (
//     <Suspense>
//       <HeroComponent/>
//     </Suspense>
//   );

  