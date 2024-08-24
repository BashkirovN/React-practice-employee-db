import './app-info.css';

const AppInfo = ({totalEmps, totalBonusReceivers}) => {
    return (
        <div className="app-info">
            <h1>Employees of Boogle LLC</h1>
            <h2>Total Employees: {totalEmps}</h2>
            <h2>Will reveive bonus: {totalBonusReceivers}</h2>
        </div>
    )
}

export default AppInfo;