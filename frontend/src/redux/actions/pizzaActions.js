import axios from "axios";

export const getAllPizzas = () => (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = axios.get("/api/pizzas/getpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
    console.log(response);
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
