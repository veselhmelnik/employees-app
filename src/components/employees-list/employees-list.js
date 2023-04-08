import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(e => {
        const {id, ...itemProps} = e;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );  
}

export default EmployeesList;