import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import logo from '../../FEUP.png'; 

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[
        {
            className: 'appointments',
           label:'Appointment',
           icon:'pi pi-fw pi-calendar',
           items:[
               {
                   className: 'list-appointments',
                   label:'List',
                   icon:'pi pi-fw pi-bars',
                   url: '/appointment/list'
               },
              {
                  className: 'add-new-appointment',
                 label:'New',
                 icon:'pi pi-fw pi-plus',
                 url: '/appointment/add'
              },
           ]
        }
     ]
    }
  }

  render() {
   
    const start = <a href="/"><img alt="logo" src={logo} height="40" className="p-mr-2"></img></a>;
      const end = <div></div>;

    return (
          <div>
              <div className="card">
                  <Menubar model={this.state.items} start={start} end={end} />
              </div>
          </div>
    );

  }
}

export default Header;