const scrollHandler = (value: string | number) => {
  if (typeof value === "string") {
    document.getElementById(value)?.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    window.scrollTo({ top: value, behavior: "smooth" });
  }
};

export default scrollHandler;