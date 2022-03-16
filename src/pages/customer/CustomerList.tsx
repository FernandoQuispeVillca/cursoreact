import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
// import './CustomerList.css';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const  [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(() => {
     search();
  }, [history.location.pathname]);

  const search = () => {
     let result = searchCustomer();
     setClientes(result);
  }

  const remove = (id: string) => {
        removeCustomer(id);
        search();
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
              <IonCol>Apellido</IonCol>
              <IonCol>Tipo de documento</IonCol>
              <IonCol>documento de identidad</IonCol>
              <IonCol>Fecha de nacimiento</IonCol>
              <IonCol>Genero</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            {clientes.map( (cliente: Customer) => 
            <IonRow>
            <IonCol>{cliente.firstname}  {cliente.lastname}</IonCol>
            <IonCol>{cliente.lastname}</IonCol>
            <IonCol>{cliente.typedocument}</IonCol>
            <IonCol>{cliente.numberdocument}</IonCol>   
            <IonCol>{cliente.birthday}</IonCol>  
            <IonCol>{cliente.gender}</IonCol> 
            <IonCol>
              <IonButton color="primary" fill="clear"
                  onClick= {() => editCustomer(String(cliente.id)) }>
                 <IonIcon icon={pencil} slot={"icon-only"}/>
              </IonButton>

              <IonButton color="danger" fill="clear"
                 onClick= {() => remove(String(cliente.id))}>
                 <IonIcon icon={close} slot={"icon-only"}/>
              </IonButton>
            </IonCol>
          </IonRow>
              )}
          </IonGrid>
        </IonCard> 
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
