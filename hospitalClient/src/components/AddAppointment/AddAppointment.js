import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../Header/Header";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

class AddAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctorId: "",
      selectedDoctorName: "",
      selectedPatient: "",
      selectedPatientId: "",
      selectedDate: "",
      selectedLocal: "",
      hospitals: [],
      doctors: [],
      patients: [],
      redirectToReferrer: false,
      showDoctors: false
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "/doctors/")
      .then((response) => response.json())
      .then((data) => this.setState({ doctors: data }))
      .catch((error) => alert("algo correu mal: " + error));
    fetch(process.env.REACT_APP_API_URL + "/patients/")
      .then((response) => response.json())
      .then((data) => this.setState({ patients: data }))
      .catch((error) => alert("algo correu mal: " + error));
  }

  onChange(e) {
    if (
      e.target.name === "selectedDoctor" ||
      e.target.name === "selectedPatient"
    ) {
      this.setState({ [e.target.name + "Id"]: e.target.value.id });
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  handleErrors(data, attr) {
    if (data[attr]) this.setState({ [attr + "Error"]: data[attr] });
    else this.setState({ [attr + "Error"]: "" });
  }

  handleSubmit(event) {
    event.preventDefault();

    const dateToSend = new Date(this.state.selectedDate)
      .toISOString()
      .split("T")[0];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctor: this.state.selectedDoctorId,
        patient: this.state.selectedPatientId,
        date: dateToSend,
        local: this.state.selectedLocal,
      }),
    };
    fetch("http://localhost:8000/api/appointments/", requestOptions)
      .then((response) => {
        if (response.ok) {
          this.setState({redirectToReferrer: true})
        } else return response.json();
      })
      .then((data) => {
        this.handleErrors(data, "doctor");
        this.handleErrors(data, "patient");
        this.handleErrors(data, "local");
        this.handleErrors(data, "date");
      })
      .catch((error) => console.log(error));
  }

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer) {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <Header></Header>
          <Panel header="Add appointment" className="Container">
            <div className="card">
              <form onSubmit={this.handleSubmit} className="p-fluid">
                <div className="p-field p-mt-2 p-mb-4">
                  <span className="p-float-label">
                    <Dropdown
                      name="selectedDoctor"
                      value={this.state.selectedDoctor}
                      options={this.state.doctors}
                      onChange={this.onChange}
                      optionLabel="name"
                      id="doctor-select"
                    />
                    <label htmlFor="doctor">Doctor*</label>
                  </span>
                </div>
                <div className="p-field p-mb-4">
                  <span className="p-float-label">
                    <Dropdown
                      name="selectedPatient"
                      value={this.state.selectedPatient}
                      options={this.state.patients}
                      onChange={this.onChange}
                      optionLabel="name"
                      id="patient-select"
                    />
                    <label htmlFor="patient">Patient*</label>
                  </span>
                </div>
                <div className="p-field p-mb-4">
                  <span className="p-float-label">
                    <InputText
                        name="selectedDate"
                        value={this.state.selectedDate}
                        onChange={this.onChange}
                        className="date-input"
                    />
                    <label htmlFor="selectedDate">Date*</label>
                  </span>
                </div>
                <div className="p-field">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText
                      name="selectedLocal"
                      value={this.state.selectedLocal}
                      onChange={this.onChange}
                      className="local-input"
                    />
                    <label htmlFor="selectedLocal">Local*</label>
                  </span>
                </div>
                <Button id="submit-button" type="submit" label="Submit" className="p-button-secondary p-mt-2" />
              </form>
            </div>
          </Panel>
        </div>
      );
    }
  }
}

export default AddAppointment;
