import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
// import './CustomerList.css';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const  [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
     search();
  }, []);

  const search = () => {
     let result = searchCustomer();
     setClientes(result);
  }

  const remove = (id: string) => {
        removeCustomer(id);
        search();
  }

  const pruebaLocalStorage = () => {
    const ejemplo  = {
      id: '1',
      firstname: 'Juan',
      lastname: 'Perez',
      email: 'moyo@gmail.com',
      phone: '05345345',
      address: 'av. siempre viva 123'
    }
    saveCustomer(ejemplo);
  }

  const addCustomer = () => {
     history.push('/page/customer/new');
  }

  const editCustomer = (id: string) => {
    history.push('/page/customer/' + id);
 }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonTitle>Gestión de Clientes</IonTitle>
          <IonItem>
            <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Cliente
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            {clientes.map( (cliente:any) => 
            <IonRow>
            <IonCol>{cliente.firstname}  {cliente.lastname}</IonCol>
            <IonCol>{cliente.email}</IonCol>
            <IonCol>{cliente.phone}</IonCol>
            <IonCol>{cliente.address}</IonCol>   
            <IonCol>
              <IonButton color="primary" fill="clear"
                  onClick= {() => editCustomer(cliente.id) }>
                 <IonIcon icon={pencil} slot={"icon-only"}/>
              </IonButton>

              <IonButton color="danger" fill="clear"
                 onClick= {() => remove(cliente.id)}>
                 <IonIcon icon={close} slot={"icon-only"}/>
              </IonButton>
            </IonCol>
          </IonRow>
              )}
          </IonGrid>
        </IonCard>

        <IonButton onClick={pruebaLocalStorage}  color="danger" fill="clear">
                 <IonIcon icon={close} slot={"icon-only"}/>
                 Prueba Local Storage
       </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
