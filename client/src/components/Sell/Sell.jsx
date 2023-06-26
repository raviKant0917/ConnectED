import React from 'react';
import "./sell.scss"

const Sell = () => {
  return (
    <div className="sellWrapper">
      <form >
        <label for="image">Image</label>
        <input type="file" className='file' title="choose"></input>
        <label for="item-name">Item Name</label>
        <input type="text" placeholder="Enter Your Item Name"></input>
        <label for="description">Description</label>
        <textarea rows="4" cols="60" name="comment" form="usrform">
          Enter Description Here
        </textarea>
        <label for="price">Enter Price</label>
        <input type="number"></input>

        <input type='submit'></input>
      </form>
      
    </div>
  );
}

export default Sell