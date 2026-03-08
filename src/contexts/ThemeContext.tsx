import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type ThemeId = "tema1" | "tema2" | "tema3";

interface ThemeColors {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--muted": string;
  "--muted-foreground": string;
  "--card": string;
  "--card-foreground": string;
  "--border": string;
  "--input": string;
  "--ring": string;
  "--navy": string;
  "--navy-foreground": string;
  "--steel": string;
  "--steel-light": string;
  "--shadow-card": string;
  "--shadow-card-hover": string;
}

const themes: Record<ThemeId, { label: string; colors: ThemeColors; dot: string }> = {
  tema1: {
    label: "Tema 1",
    dot: "#1F3A5F",
    colors: {
      "--background": "216 33% 97%",
      "--foreground": "0 0% 10%",
      "--primary": "214 51% 25%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "210 20% 93%",
      "--secondary-foreground": "0 0% 10%",
      "--accent": "38 92% 50%",
      "--accent-foreground": "0 0% 100%",
      "--muted": "216 20% 95%",
      "--muted-foreground": "214 15% 45%",
      "--card": "0 0% 100%",
      "--card-foreground": "0 0% 10%",
      "--border": "214 20% 88%",
      "--input": "214 20% 88%",
      "--ring": "214 51% 25%",
      "--navy": "214 51% 25%",
      "--navy-foreground": "0 0% 100%",
      "--steel": "210 29% 41%",
      "--steel-light": "210 15% 93%",
      "--shadow-card": "0 4px 24px -4px hsl(214 51% 25% / 0.08)",
      "--shadow-card-hover": "0 8px 32px -4px hsl(214 51% 25% / 0.15)",
    },
  },
  tema2: {
    label: "Tema 2",
    dot: "#2B2F36",
    colors: {
      "--background": "220 27% 98%",
      "--foreground": "222 39% 11%",
      "--primary": "218 11% 19%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "217 10% 93%",
      "--secondary-foreground": "222 39% 11%",
      "--accent": "48 96% 53%",
      "--accent-foreground": "222 39% 11%",
      "--muted": "220 15% 95%",
      "--muted-foreground": "218 10% 45%",
      "--card": "0 0% 100%",
      "--card-foreground": "222 39% 11%",
      "--border": "218 15% 88%",
      "--input": "218 15% 88%",
      "--ring": "218 11% 19%",
      "--navy": "218 11% 19%",
      "--navy-foreground": "0 0% 100%",
      "--steel": "217 8% 39%",
      "--steel-light": "217 10% 93%",
      "--shadow-card": "0 4px 24px -4px hsl(218 11% 19% / 0.08)",
      "--shadow-card-hover": "0 8px 32px -4px hsl(218 11% 19% / 0.15)",
    },
  },
  tema3: {
    label: "Tema 3",
    dot: "#1F7A63",
    colors: {
      "--background": "160 18% 96%",
      "--foreground": "222 39% 11%",
      "--primary": "165 59% 30%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "160 20% 93%",
      "--secondary-foreground": "222 39% 11%",
      "--accent": "222 47% 11%",
      "--accent-foreground": "0 0% 100%",
      "--muted": "160 15% 95%",
      "--muted-foreground": "165 15% 40%",
      "--card": "0 0% 100%",
      "--card-foreground": "222 39% 11%",
      "--border": "165 15% 88%",
      "--input": "165 15% 88%",
      "--ring": "165 59% 30%",
      "--navy": "165 59% 30%",
      "--navy-foreground": "0 0% 100%",
      "--steel": "166 55% 39%",
      "--steel-light": "160 15% 93%",
      "--shadow-card": "0 4px 24px -4px hsl(165 59% 30% / 0.08)",
      "--shadow-card-hover": "0 8px 32px -4px hsl(165 59% 30% / 0.15)",
    },
  },
};

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: typeof themes;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("tema1");

  const setTheme = useCallback((id: ThemeId) => {
    setCurrentTheme(id);
    const root = document.documentElement;
    const colors = themes[id].colors;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
