import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">HeroUI01</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.alpha} title="Alpha">
            Alpha
          </Link>
          <Link isExternal href={siteConfig.links.beta} title="Beta">
            Beta
          </Link>
          <Link isExternal href={siteConfig.links.gamma} title="Gamma">
            Gamma
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
