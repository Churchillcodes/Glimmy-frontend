import api from "./axiosInstance";

// Public
export const getProducts = async (params = {}) => {
  const { data } = await api.get("/products", { params });
  return data;
};

export const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

// Admin — product management
export const createProduct = async (productData) => {
  const { data } = await api.post("/products", productData);
  return data;
};

export const updateProduct = async (id, productData) => {
  const { data } = await api.patch(`/products/${id}`, productData);
  return data;
};

export const archiveProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`); // soft delete on backend
  return data;
};

export const restoreProduct = async (id) => {
  const { data } = await api.patch(`/products/${id}/restore`);
  return data;
};

export const increaseStock = async (id, quantity) => {
  const { data } = await api.patch(`/products/${id}/increase-stock`, {
    quantity,
  });
  return data;
};

export const reduceStock = async (id, quantity) => {
  const { data } = await api.patch(`/products/${id}/reduce-stock`, {
    quantity,
  });
  return data;
};

export const getLowStockProducts = async () => {
  const { data } = await api.get("/products/low-stock");
  return data;
};

export const getArchivedProducts = async () => {
  const { data } = await api.get("/products/archived");
  return data;
};

// Images
export const uploadProductImages = async (id, formData) => {
  const { data } = await api.post(`/products/${id}/images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteProductImage = async (productId, imageId) => {
  const { data } = await api.delete(`/products/${productId}/images/${imageId}`);
  return data;
};
