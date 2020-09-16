export const errorHandler = (error) => {
  return error.message ? error.message : "Check your Internet connection!";
}