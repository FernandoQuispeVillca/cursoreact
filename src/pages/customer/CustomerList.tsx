import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
// import './CustomerList.css';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  
  const  [clientes, setClientes] = useState<any>([]);


  useEffect(() => {
     search();
  }, []);

  const search = () => {
     const datosEjemplo = [
       {
         id: '1',
         fistname: 'Fernando',
         lastname: 'Gonzalez',
         email: 'Fernando@gmail.com',
         phone: '123456789',
         address: 'Calle 123 #123-123'
       },
       {
        id: '2',
        fistname: 'Luis',
        lastname: 'Alvarez',
        email: 'Luis@gmail.com',
        phone: '98576456',
        address: 'Calle 1464 #123-123'
      },
      {
        id: '3',
        fistname: 'Carlos',
        lastname: 'Chavez',
        email: 'carlos@gmail.com',
        phone: '98573456',
        address: 'Calle 14 #123-123'
      } 
     ];
     setClientes(datosEjemplo);
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
            <IonButton color="primary" fill="solid" slot="end" size="default">
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
              <IonButton color="primary" fill="clear">
                 <IonIcon icon={pencil} slot={"icon-only"}/>
              </IonButton>

              <IonButton color="danger" fill="clear">
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
