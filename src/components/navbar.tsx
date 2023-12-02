import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import UserCard from "./card/usercard";
import ThemeSwitch from "./switch/themeswitch";

export default function ChatNavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Navbar className="shadow-md">
      <NavbarBrand>
        <p className="font-bold text-inherit">MESSENGER 💬</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <ThemeSwitch
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        />
        <UserCard />
      </NavbarContent>
    </Navbar>
  );
}
