export interface Group {
    id: number;
    name: string;
    personnel: Personnel[];
    equipment: Equipment[];
    transportation: Transportation[];
    active: boolean;
}

export interface Personnel {
    id: number;
    name: string;
    rank: string;
    srp: boolean;
    role: string;
    aptOrders: string;
    certification: boolean;
    email: string;
}
export interface Equipment {
    nomenclature: string;
    type: string;
    hazmat: boolean;
}
export interface Transportation {
    transportationLeg: string;
    transportationType: string;
}   