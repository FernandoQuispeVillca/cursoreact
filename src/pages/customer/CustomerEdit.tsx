import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomer, searchCustomerById } from './CustomerApi';
// import './CustomerList.css';

const CustomerEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();

    const [customer, setCustomer] = useState<Customer>({});

    const history = useHistory();


    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchCustomerById(id);
            setCustomer(result);
        }
    }

    const save = () => {
        saveCustomer(customer);
        history.push('/page/customers');
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
                    <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombres:</IonLabel>
                                    <IonInput  onIonChange = {e => customer.firstName = String(e.detail.value)}
                                    value={customer.firstName}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellidos:</IonLabel>
                                    <IonInput onIonChange = {e => customer.lastName = String(e.detail.value)} 
                                    value={customer.lastName}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Tipo de documento:</IonLabel>
                                    <IonInput onIonChange = {e => customer.typeDocument = String(e.detail.value)}
                                     value={customer.typeDocument}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Numero de documento:</IonLabel>
                                    <IonInput onIonChange = {e => customer.numberDocument = String(e.detail.value)}
                                     value={customer.numberDocument}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Fecha de nacimiento:</IonLabel>
                                    <IonInput onIonChange = {e => customer.birthDate = String(e.detail.value)} 
                                    value={customer.birthDate}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Genero:</IonLabel>
                                    <IonInput onIonChange = {e => customer.gender = String(e.detail.value)} 
                                    value={customer.gender}></IonInput>
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

export default CustomerEdit;
