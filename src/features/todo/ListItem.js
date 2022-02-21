const ListItem = ({item}) => {
    return (  
       
            <div className='list-item'> 
              <button className='remove-item-button' onClick={() => true}>X</button>
              <p className='item-text'>{item.name}</p>
            </div>
    );
}
 
export default ListItem;