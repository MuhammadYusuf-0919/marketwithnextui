export interface StoreItem {
    id: number;
    img: string;
    name: string;
    desc: string;
    jiry: string;
    kcal: number;
    title: string;
    belki: string;
    price: string;
    count: number;
    objId: number;
    uglevody: string;
    itemIndex: number;
    description: string;
}

export interface StoreInfo {
    description: string;
    costAndDelivery: string;
    ordersForTomorrow: string;
    deliveryAndPackaging: string;
    minimumOrderAndWeight: string;
}

export interface StoreData {
    id: number;
    img: string;
    soon: boolean;
    storeInfo: StoreInfo[];
    list: StoreItem[];
    storeName: string;
}

export interface CardItemProps {
    objId: number
    row: StoreItem
    itemIndex: number
}
