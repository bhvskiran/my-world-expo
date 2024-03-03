export const DARK1 = "#27374D";
export const DARK2 = "#526D82";
export const LIGHT1 = "#DDE6ED";
export const LIGHT2 = "#9DB2BF";

export const getBgColor = (theme: string) => {
  if (theme === "light") {
    return { backgroundColor: LIGHT1 };
  } else {
    return { backgroundColor: DARK1 };
  }
};

export const getColor = (theme: string) => {
  if (theme === "light") {
    return { color: DARK1 };
  } else {
    return { color: LIGHT1 };
  }
};

export const getBorderColor = (theme: string) => {
  if (theme === "light") {
    return { borderColor: DARK1 };
  } else {
    return { borderColor: LIGHT1 };
  }
};
