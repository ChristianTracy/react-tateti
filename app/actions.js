export const CLICK_CELL = 'CLICK_CELL';

let clickCell = (position) => {
  return {
    type: CLICK_CELL,
    position: position
  };
}

export {clickCell};
