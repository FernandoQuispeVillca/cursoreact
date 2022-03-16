import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, saveEmployee, searchEmployee, searchEmployeeById } from './EmployeeApi';
// import './EmployeeList.css';

const EmployeeEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();

    const [employee, setEmployee] = useState<Employee>({});

    const history = useHistory();


    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchEmployeeById(id);
            setEmployee(result);
        }
    }

    const save = () => {
        saveEmployee(employee);
        history.push('/page/employees');
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
                    <IonTitle>{id === 'new' ? 'Agregar Producto' : 'Editar Producto'}</IonTitle>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Tipo de producto:</IonLabel>
                                    <IonInput  onIonChange = {e => employee.typeproduct = String(e.detail.value)}
                                    value={employee.typeproduct}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Número de cuenta:</IonLabel>
                                    <IonInput onIonChange = {e => employee.number = String(e.detail.value)} 
                                    value={employee.number}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Moneda(BS/Sus):</IonLabel>
                                    <IonInput onIonChange = {e => employee.money = String(e.detail.value)}
                                     value={employee.money}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Monto:</IonLabel>
                                    <IonInput onIonChange = {e => employee.amount = String(e.detail.value)}
                                     value={employee.amount}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Fecha de creación:</IonLabel>
                                    <IonInput onIonChange = {e => employee.date_of_creation = String(e.detail.value)} 
                                    value={employee.date_of_creation}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Sucursal:</IonLabel>
                                    <IonInput onIonChange = {e => employee.sucursal = String(e.detail.value)} 
                                    value={employee.sucursal}></IonInput>
                                </IonItem>
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

export default EmployeeEdit;
