import Customer from "./Customer";

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
    let indice = customers.findIndex((customer: Customer) => customer.id == id);
    customers.splice(indice , 1);
    localStorage['customers'] = JSON.stringify(customers);
}

export function saveCustomer(customer: Customer){
    let customers = searchCustomer();
    if(customer.id){
     //editar
     let indice = customers.findIndex((c: Customer) => c.id == customer.id);
     customers[indice] = customer;
    }else{
     //nuevo
     customer.id = String(Math.round(Math.random() * 100000));  
     customers.push(customer);
    }
    localStorage['customers'] = JSON.stringify(customers);
}

export function searchCustomerById(id: string){
    let customers = searchCustomer();
    return customers.find((customer:any) => customer.id == id);
}