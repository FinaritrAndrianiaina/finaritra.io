export const createScript = (src) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  return script;
};
