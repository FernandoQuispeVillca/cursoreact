import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
// import './CustomerList.css';

const CustomerEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  
  const  [clientes, setClientes] = useState<any>([]);


  useEffect(() => {
     search();
  }, []);

  const search = () => {
    //  let result = searchCustomer();
    //  setClientes(result);
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
              Guardar
            </IonButton>
          </IonItem>
          

        </IonCard>

        <IonButton onClick={pruebaLocalStorage}  color="danger" fill="clear">
                 <IonIcon icon={close} slot={"icon-only"}/>
                 Prueba Local Storage
       </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
