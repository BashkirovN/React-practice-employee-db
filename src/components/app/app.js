import {Component} from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "John Connor", salary: 7000, bonus: true, star: true, id: 1},
                {name: "Jane Doe", salary: 8000, bonus: false, star: false, id: 2},
                {name: "Alex White", salary: 5500, bonus: false, star: false, id: 3}
            ],
            term: '',
            filter: 'filter_none'
        }
        this.maxId = 4;   
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(el => el.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            return {
                data : [...data, {name, salary, bonus: false, star: false, id: this.maxId++}]
            }
        });
    }

    onUpdateSalary = (id, salary) => {
        console.log(`Received: ${id}, ${salary}`)
        this.setState(({data}) => ({
            data: data.map(el => el.id !== id ? el : {...el, salary})
        }))
    }

    onToggleBonus = (id) => {
        /* Works but cumbersome
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            const newItem = {...data[index], bonus: !data[index].bonus} // updated copy. new object
            const newData = [...data.slice(0,index), newItem, ...data.slice(index+1)];
            return {
                data: newData
            }
        })
        */
        this.setState(({data}) => ({
            // map returns new array!
            data : data.map(el => el.id !== id ? el : {...el, bonus: !el.bonus})    // everything in el with the bonus field updated
        }))
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(el => el.id !== id ? el : {...el, star: !el.star})
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(el => el.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'filter_bonus':
                return items.filter(el => el.bonus);
            case 'filter_salary':
                return items.filter(el => el.salary > 10000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    
    render() {
        const { data, term, filter } = this.state;
        const totalEmps = data.length;
        const totalBonusReceivers = data.filter(el => el.bonus).length;
        const filteredData = this.filterEmp(
                                this.searchEmp(data, term),
                                filter
                            );

        return (
            <div className="app">
                <AppInfo
                    totalEmps={totalEmps}
                    totalBonusReceivers={totalBonusReceivers}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={filteredData}
                    onUpdateSalary={this.onUpdateSalary}
                    onDelete={this.deleteItem}
                    onToggleBonus={this.onToggleBonus}
                    onToggleStar={this.onToggleStar}  
                />

                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App;