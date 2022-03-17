import Employee from "./Employee";

export async function searchEmployee(){
    let url = process.env.REACT_APP_API+'products'
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
          "Content-Type": 'application/json'
        }
    })
    
    return await response.json();
}

export async function removeEmployee(id: string){
    let url = process.env.REACT_APP_API+'products/'+id
    await fetch(url,{
        "method": 'DELETE',
        "headers": {
          "Content-Type": 'application/json'
        }
    })
}

export async function saveEmployee(employee: Employee){
   let url = process.env.REACT_APP_API+'products'
    await fetch(url,{
        "method": 'POST',
        "body": JSON.stringify(employee),
        "headers": {
          "Content-Type": 'application/json'
        }
    })
}

export async function searchEmployeeById(id: string){
    let url = process.env.REACT_APP_API+'products/'+id
    let response = await fetch(url,{
        "method": 'GET',
        "headers": {
          "Content-Type": 'application/json'
        }
    })
    
    return await response.json();
}