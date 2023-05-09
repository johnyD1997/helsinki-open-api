export interface Place {
    data: Datum[];
    meta: Meta;
    tags: { [key: string]: string };
}

export interface Datum {
    description:       Description;
    extra_searchwords: null;
    id:                string;
    info_url:          string;
    location:          Location;
    modified_at:       Date;
    name:              NameClass;
    opening_hours:     OpeningHours;
    source_type:       EType;
    tags:              Tag[];
}

export interface Description {
    body:   string;
    images: Image[] | null;
    intro:  null;
}

export interface Image {
    copyright_holder: string;
    license_type:     EType;
    media_id:         string;
    url:              string;
}

export interface EType {
    id:   number;
    name: NameEnum;
}

export enum NameEnum {
    AllRightsReserved = "All rights reserved.",
    Matko = "Matko",
    MyHelsinkiLicenseTypeA = "MyHelsinki license type A",
    MyHelsinkiLicenseTypeB = "MyHelsinki license type B",
}

export interface Location {
    address: Address;
    lat:     number;
    lon:     number;
}

export interface Address {
    locality:       Locality | null;
    neighbourhood:  null;
    postal_code:    string;
    street_address: string;
}

export enum Locality {
    Espoo = "Espoo",
    Harviala = "Harviala,",
    Helsingfors = "Helsingfors",
    Helsingin = "Helsingin",
    Helsinki = "Helsinki",
    Hyvinkää = "Hyvinkää",
    Hämeenlinna = "Hämeenlinna",
    Inkoo = "Inkoo",
    Järvenpää = "Järvenpää",
    Kirkkonummi = "Kirkkonummi",
    Lapinjärvi = "Lapinjärvi",
    LocalityHELSINKI = "HELSINKI",
    LocalityVantaa = "vantaa",
    Luoma = "Luoma,",
    Masala = "Masala",
    Ojakkala = "Ojakkala",
    Otalampi = "Otalampi",
    Palojoki = "Palojoki",
    Porvoo = "Porvoo",
    Sipoo = "Sipoo",
    Söderkulla = "Söderkulla",
    Talma = "Talma",
    Tervalampi = "Tervalampi",
    The00100 = "00100",
    The00180 = "00180",
    Tuusula = "Tuusula",
    Vanda = "Vanda",
    Vantaa = "Vantaa",
}

export interface NameClass {
    en: null | string;
    fi: string;
    sv: null | string;
    zh: null | string;
}

export interface OpeningHours {
    hours:                  Hour[] | null;
    openinghours_exception: null | string;
}

export interface Hour {
    closes:     null | string;
    open24h:    boolean;
    opens:      null | string;
    weekday_id: number;
}

export interface Tag {
    id:   string;
    name: string;
}

export interface Meta {
    count: string;
}
