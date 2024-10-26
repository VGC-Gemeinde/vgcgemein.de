const useHeaderSize = () => {
  const header = document.getElementById("header");

  if (header === null) {
    return 0;
  }

  return header.offsetHeight;
};

export { useHeaderSize };
