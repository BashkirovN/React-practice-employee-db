import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, salary, id, onUpdateSalary, onDelete, onToggleBonus, onToggleStar, bonus, star} = props;
    let className = "list-group-item d-flex justify-content-between";
    if (bonus) className += " bonus";
    if (star) className += " star";

    const onChange = (e) => {
        onUpdateSalary(e.target.value.slice(1))
    }
    
    return (
        <li key={id} className={className}>
            <span 
                onClick={onToggleStar}
                className="list-group-item-label">{name}
            </span>
            <input type="text"
                onChange={onChange}
                className="list-group-item-input"
                defaultValue={`$${salary}`}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleBonus}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;