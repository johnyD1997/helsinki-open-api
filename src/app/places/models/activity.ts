export interface Activity {
    meta: Meta;
    data: Datum[];
    tags: { [key: string]: string };
}

export interface Datum {
    id:                  string;
    name:                NameClass;
    source_type:         EType;
    info_url:            string;
    modified_at:         Date;
    location:            Location;
    description:         Description;
    tags:                Tag[];
    where_when_duration: WhereWhenDuration;
}

export interface Description {
    intro:  null;
    body:   string;
    images: Image[];
}

export interface Image {
    url:              string;
    copyright_holder: string;
    license_type:     EType;
    media_id:         null;
}

export interface EType {
    id:   number;
    name: NameEnum;
}

export enum NameEnum {
    AllRightsReserved = "All rights reserved.",
    MyHelsinki = "MyHelsinki",
}

export interface Location {
    lat:     number;
    lon:     number;
    address: Address;
}

export interface Address {
    street_address: null | string;
    postal_code:    null | string;
    locality:       Locality;
    neighbourhood:  null;
}

export enum Locality {
    Espoo = "Espoo",
    Helsinki = "Helsinki",
    Tampere = "Tampere",
    Vantaa = "Vantaa",
}

export interface NameClass {
    fi: string;
    en: string;
    sv: null | string;
    zh: null;
}

export interface Tag {
    id:   string;
    name: string;
}

export interface WhereWhenDuration {
    where_and_when: null | string;
    duration:       null | string;
}

export interface Meta {
    count: string;
}
