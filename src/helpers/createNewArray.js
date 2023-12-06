export function createNewArray(array, input, value, id) {
  return array.map((element) => {
    if (element.id === id) {
      return {
        ...element,
        [input]: value,
      };
    }
    return element;
  });
}
