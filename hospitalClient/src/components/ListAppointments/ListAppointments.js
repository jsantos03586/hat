import React from "react";
import Header from "../Header/Header";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

class ListAppointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDoctorId: "",
            selectedDoctorName: "",
            hospitals: [],
            doctors: [],
            patients: [],
            appointments: [],
            redirectToReferrer: false,
            showDoctors: false
        };

        this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/appointments/")
            .then((response) => response.json())
            .then((data) => this.setState({ appointments: data }))
            .catch((error) => alert("algo correu mal: " + error));
    }

    handleErrors(data, attr) {
        if (data[attr]) this.setState({ [attr + "Error"]: data[attr] });
        else this.setState({ [attr + "Error"]: "" });
    }

    renderHeader() {
        return (
            <div className="p-d-flex p-jc-between p-ai-center">
                <span className="p-input-icon-left">
                    <InputText value={this.state.globalFilterValue} onChange={this.onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Panel header="Add appointment" className="Container">
                        <div className="datatable-doc-demo">
                            <div className="card">
                                <DataTable value={this.state.appointments} paginator className="p-datatable-appointments" rows={10}
                                           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                                           dataKey="id" rowHover selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({ selectedCustomers: e.value })}
                                           filters={this.state.filters} filterDisplay="menu" loading={this.state.loading} responsiveLayout="scroll"
                                           globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No appointments found."
                                           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                                    <Column class="id" field="id" header="Id" sortable style={{ minWidth: '14rem' }} />
                                    <Column class="doctor_name" field="doctor.name" header="Doctor" sortable style={{ minWidth: '14rem' }} />
                                    <Column field="patient.name" header="Patient" sortable style={{ minWidth: '14rem' }} />
                                    <Column class="date_input" field="date" header="Date" sortable  dataType="date" style={{ minWidth: '8rem' }} />
                                    <Column field="local" header="Local" sortable style={{ minWidth: '14rem' }} />
                                </DataTable>
                            </div>
                        </div>
                </Panel>
            </div>
        );
    }
}

export default ListAppointments;
