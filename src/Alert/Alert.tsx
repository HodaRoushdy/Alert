import './index.scss'
import{ X } from 'lucide-react';
import IProps from '../interfaces';



const Alert =({type,icone,title,description,children}:IProps)=>{
    return(
        <div className={type}>
            <div className='alert-header'>
            <div className='title'>
                <span>{icone}</span>
            <h1>{title}</h1>
            </div>
            <X className='close'/>
            </div>
            {children? children : <p>{description}</p>}
            
        </div>
    )
}
export default Alert
