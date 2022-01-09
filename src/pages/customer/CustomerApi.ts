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
    if(customer.id){
     //editar
     let indice = customers.findIndex((c:any) => c.id == customer.id);
     customers[indice] = customer;
    }else{
     //nuevo
     customer.id = Math.round(Math.random() * 100000) ;  
     customers.push(customer);
    }
    localStorage['customers'] = JSON.stringify(customers);
}

export function searchCustomerById(id: string){
    let customers = searchCustomer();
    return customers.find((customer:any) => customer.id == id);
}