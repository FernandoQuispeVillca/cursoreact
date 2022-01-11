import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Vendor from './Vendor';
import { removeVendor, saveVendor, searchVendor, searchVendorById } from './VendorApi';
// import './VendorList.css';

const VendorEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();

    const [vendor, setVendor] = useState<Vendor>({});

    const history = useHistory();


    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchVendorById(id);
            setVendor(result);
        }
    }

    const save = () => {
        saveVendor(vendor);
        history.push('/page/vendors');
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
                    <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombre:</IonLabel>
                                    <IonInput  onIonChange = {e => vendor.firstname = String(e.detail.value)}
                                    value={vendor.firstname}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido:</IonLabel>
                                    <IonInput onIonChange = {e => vendor.lastname = String(e.detail.value)} 
                                    value={vendor.lastname}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email:</IonLabel>
                                    <IonInput onIonChange = {e => vendor.email = String(e.detail.value)}
                                     value={vendor.email}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Dirección:</IonLabel>
                                    <IonInput onIonChange = {e => vendor.address = String(e.detail.value)}
                                     value={vendor.address}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Teléfono:</IonLabel>
                                    <IonInput onIonChange = {e => vendor.phone = String(e.detail.value)} 
                                    value={vendor.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                            </IonCol>
                        </IonRow>
                    <IonItem>
                        <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                            <IonIcon icon={checkmark} />
                            Guardar
                        </IonButton>
                    </IonItem>


                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default VendorEdit;
