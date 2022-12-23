import { API_URL } from "@/api";

export class ProductsService {
    async getProducts(){
        return await fetch(`${API_URL}/products`).then(res => res.json());
    }
    async getProduct(id){
        return await fetch(`${API_URL}/products/${id}`).then(res => res.json());
    }
}

export const productsService = new ProductsService();