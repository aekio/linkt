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
    aptOrders: boolean;
    certification: boolean;
    email: string;
}
export interface Equipment {
    id: number;
    line: string;
    nomenclature: string;
    type: string;
    hazmat: boolean;
}
export interface Transportation {
    id: number;
    transportationType: string;
}   