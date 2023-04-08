import './employees-list-item.css'

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;
    const defaultClassNames = 'list-group-item d-flex justify-content-between';

    let classNames = increase ? defaultClassNames + ' increase' : defaultClassNames
    classNames = rise ? classNames + ' like' : classNames

    return (
        <li className={classNames}>
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + `$`} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;