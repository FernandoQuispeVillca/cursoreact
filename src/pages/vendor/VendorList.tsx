import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Vendor from './Vendor';
import { removeVendor, saveVendor, searchVendor } from './VendorApi';
// import './VendorList.css';

const VendorList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const  [clientes, setClientes] = useState<Vendor[]>([]);
  const history = useHistory();

  useEffect(() => {
     search();
  }, [history.location.pathname]);

  const search = () => {
     let result = searchVendor();
     setClientes(result);
  }

  const remove = (id: string) => {
        removeVendor(id);
        search();
  }

  const addVendor = () => {
     history.push('/page/vendor/new');
  }

  const editVendor = (id: string) => {
    history.push('/page/vendor/' + id);
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
          <IonTitle>Gestión de Proveedor</IonTitle>
          <IonItem>
            <IonButton onClick={addVendor} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Proveedor
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
            {clientes.map( (cliente: Vendor) => 
            <IonRow>
            <IonCol>{cliente.firstname}  {cliente.lastname}</IonCol>
            <IonCol>{cliente.email}</IonCol>
            <IonCol>{cliente.phone}</IonCol>
            <IonCol>{cliente.address}</IonCol>   
            <IonCol>
              <IonButton color="primary" fill="clear"
                  onClick= {() => editVendor(String(cliente.id)) }>
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

export default VendorList;
