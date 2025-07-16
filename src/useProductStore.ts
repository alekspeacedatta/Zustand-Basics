import { create } from "zustand"
interface Product {
    id: number
    name: string,
    price: number,
    category: string
}
interface ProductState {
    products: Product[] | null,
    addProduct: (productInfo: Omit<Product, 'id'>) => void
    deleteProduct: (productId: number) => void
}
export const useProductStore = create<ProductState>((set, get) => ({

    products: null,
    nextId: 1,


    addProduct: (productInfo : Product) => {
        const { products, nextId } = get();
        const newProduct: Product = {
            id: nextId,
            ...productInfo
        }

        set({ 
            products: products ?  [...products, newProduct ] : [newProduct],
            nextId: nextId + 1
        })

    },
    deleteProduct: (productId: number) => {
        const currentProducts = get().products;
        if (!currentProducts) return;

        const updatedProducts = currentProducts.filter(product => product.id !== productId);
        set({ products: updatedProducts });
    }


}))