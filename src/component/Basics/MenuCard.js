import React from 'react'

const menuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--container'>
        {menuData.map ((curElem) => {
            const {id, image, name, category, price, description} = curElem
            return(
            <>
            <div className="card-container" key={curElem.id}>
              <div className="card">
                  <div className='card-body'>
                      <span className='card-number card-circle subtle'>{id}</span>
                      <span className='card-author subtle'>{category}</span>
                      <h2 className='card-name'>{name}</h2>
                      <span className='card-description subtle'>{description}</span>
                        <div className='card-read'>{price}</div>
                        <img src={image} alt="images" className='card-media'/>
                        <span className='card-tag subtle'>Click to order</span>
                  </div>
              </div>
            </div>
              </>
        )})}
    </section>
    </>
  )      
}

export default menuCard
