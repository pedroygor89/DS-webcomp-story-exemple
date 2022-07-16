export const calculateXfromEvent = (event, offsetElement) => {
  let clientX = 0;
  if (event instanceof MouseEvent) {
    clientX = event.clientX;
  }
  else if (event instanceof TouchEvent) {
    clientX = event.touches[0].clientX;
  }
  const offsetLeft = (offsetElement === null || offsetElement === void 0 ? void 0 : offsetElement.getBoundingClientRect().left) || 0;
  return clientX - offsetLeft;
};
