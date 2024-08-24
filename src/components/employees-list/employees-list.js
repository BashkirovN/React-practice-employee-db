import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onUpdateSalary, onDelete, onToggleBonus, onToggleStar}) => {
    return (
        <ul className="app-list list-group">
            {
                data.map(emp => {
                    const {id, ...empProps} = emp;
                    return (
                    <EmployeesListItem 
                        key={id}
                        {...empProps}   // using spread operator
                        onUpdateSalary={(salary) => onUpdateSalary(id, salary)}
                        onDelete={() => onDelete(id)}
                        onToggleBonus={() => onToggleBonus(id)}
                        onToggleStar={() => onToggleStar(id)}
                    />)
                })  
            }
        </ul>
    )
}

export default EmployeesList;