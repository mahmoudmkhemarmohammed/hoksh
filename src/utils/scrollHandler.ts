const scrollHandler = (
  value: string | number,
  behavior: "smooth" | "auto" | "instant" = "smooth"
) => {
  if (typeof value === "string") {
    document.getElementById(value)?.scrollIntoView({
      behavior: behavior,
    });
  } else {
    window.scrollTo({ top: value, behavior: "smooth" });
  }
};

export default scrollHandler;
