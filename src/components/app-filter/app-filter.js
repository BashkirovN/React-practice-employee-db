import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'filter_none', label: 'All Employees'},
        {name: 'filter_bonus', label: 'Getting Bonus'},
        {name: 'filter_salary', label: 'Salary over $10k'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        return (
            <button
                onClick={() => props.onFilterSelect(name)}
                key={name}
                className={`btn ${active ? 'btn-light' : 'btn-outline-light'}`}
                type='button'>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
        
    )
}


export default AppFilter;