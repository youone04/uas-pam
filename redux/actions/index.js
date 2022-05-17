export const getDataAction = (page) => (dispatch) => {
    return new Promise(async (resolve) => {
      try {
      const data = await fetch(`https://dummyjson.com/products?limit=5&skip=${page}`, {
        method: "GET",
      });
      const hasil = await data.json();
      dispatch({
        type: "GET_DATA_PRODUCT_SUCCESS",
        value: hasil,
        loading: false,
      });
      resolve(hasil);
    }catch (error) {
      // console.log(error)
      dispatch({
        type: "GET_DATA_PRODUCT_FAILED",
        value: [],
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        loading: false,
      });
      // alert(error)
    }
    });
  
};

export const getDataActionDetail = (id) => (dispatch) => {
  return new Promise(async (resolve) => {
    try {
    const data = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
    });
    const hasil = await data.json();
    dispatch({
      type: "GET_DATA_DETAIL_PRODUCT_SUCCESS",
      value: hasil,
      loading: false,
    });
    resolve(hasil);
  }catch (error) {
    // console.log(error)
    dispatch({
      type: "GET_DATA_DETAIL_PRODUCT_FAILED",
      value: [],
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      loading: false,
    });
    // alert(error)
  }
  });

};
