import environments from './environments';

if (process.env.NODE_ENV !== 'production') {
    const environment = environments;
}

// Añade tus constantes aquí, si hace falta cogiendo de las variables de entorno

export const enum COLLECTIONS {
    PRODUCTS = 'products'
}

export const UPDATE_STOCK = 'UPDATE_STOCK';