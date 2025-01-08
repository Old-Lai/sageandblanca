export const formatCent = (cent: number | undefined) => {
    let centDisplay: string = "00";
  //format cent string (add 0 if less than 10, only takes first two digits if cent have three digits)
  if (cent && cent != 0)
    if (cent < 10) centDisplay = `0${cent}`;
    else if (cent > 99) centDisplay = cent.toString().split(".")[0];
    else centDisplay = `${cent}`;
  return centDisplay;
};
