import Vendor from "./Vendor";

export function searchVendor(){
    if (!localStorage['vendors']){
        localStorage['vendors'] = '[]';
    }
    let vendors = localStorage['vendors'];
    vendors = JSON.parse(vendors);
    return vendors; 
}

export function removeVendor(id: string){
    let vendors = searchVendor();
    let indice = vendors.findIndex((vendor: Vendor) => vendor.id == id);
    vendors.splice(indice , 1);
    localStorage['vendors'] = JSON.stringify(vendors);
}

export function saveVendor(vendor: Vendor){
    let vendors = searchVendor();
    if(vendor.id){
     //editar
     let indice = vendors.findIndex((c: Vendor) => c.id == vendor.id);
     vendors[indice] = vendor;
    }else{
     //nuevo
     vendor.id = String(Math.round(Math.random() * 100000));  
     vendors.push(vendor);
    }
    localStorage['vendors'] = JSON.stringify(vendors);
}

export function searchVendorById(id: string){
    let vendors = searchVendor();
    return vendors.find((vendor:any) => vendor.id == id);
}