export const addBoxToDB = (box) => {
  const getBox = localStorage.getItem("shipping_box");
  const boxes = JSON.parse(getBox) || [];
  boxes.push(box);
  localStorage.setItem("shipping_box", JSON.stringify(boxes));
};
export const getBoxesFromDB = () => {
  const getBox = localStorage.getItem("shipping_box");
  return JSON.parse(getBox) || [];
};
