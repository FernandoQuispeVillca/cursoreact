import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, saveEmployee, searchEmployee, searchEmployeeById } from './EmployeeApi';
// import './EmployeeList.css';

const EmployeeEdit: React.FC = () => {

    const { name } = useParams<{ name: string;  }>();

    const [employee, setEmployee] = useState<Employee>({});

    const history = useHistory();

    const routeMatch: any = useRouteMatch("/page/employee/:id");

    const id = routeMatch?.params?.id;


    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        if(id === 'new'){
            setEmployee({});
        }else{
            let result = await searchEmployeeById(id);
            setEmployee(result);
        }
    }

    const save = async () => {
        await saveEmployee(employee);
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
                                    <IonInput  onIonChange = {e => employee.typeProduct = String(e.detail.value)}
                                    value={employee.typeProduct}></IonInput>
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
                                    <IonInput onIonChange = {e => employee.dateOfCreation = String(e.detail.value)} 
                                    value={employee.dateOfCreation}></IonInput>
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
