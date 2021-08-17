import React from 'react';
import './Coin.css';

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coin_container'>
            <div className='coin_row'>
                <div className='coin'>
                    <img src= {image} alt=""></img>
                        <h1>{name}</h1>
                        <p className='coin_symbol'>{symbol}</p>
                </div>
                <div className='coin_data'>
                    <p className='coin_price'>INR{price}</p>
                    <p className='coin_volume'>INR{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin_percent red'>{priceChange.toFixed(2)}%</p>
                    ) : ( 
                        <p className='coin_percent green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin_marketcap'>
                        Market Capital: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
