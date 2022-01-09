export function searchCustomer (){
    if (!localStorage['customers']){
        localStorage['customers'] = '[]';
    }
    let customers = localStorage['customers'];
    customers = JSON.parse(customers);
    return customers; 
}

export function removeCustomer(id: string){
    let customers = searchCustomer();
    let indice = customers.findIndex((customer:any) => customer.id == id);
    customers.splice(indice , 1);
    localStorage['customers'] = JSON.stringify(customers);
}

export function saveCustomer(customer: any){
    let customers = searchCustomer();
    customers.push(customer);
    localStorage['customers'] = JSON.stringify(customers);
}