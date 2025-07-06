import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [vatRate, setVatRate] = useState('');

  const priceNum = parseFloat(price) || 0;
  const discountNum = parseFloat(discount) || 0;
  const vatPercent = parseFloat(vatRate) || 0;

  const discountAmount = (priceNum * discountNum) / 100;
  const discountedPrice = priceNum - discountAmount;
  const vat = discountedPrice * (vatPercent / 100);
  const total = discountedPrice + vat;

  return (
    <div className="container">
      <h1 className="title">React VAT Calculator</h1>

      <div className="card">
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            placeholder="e.g. 1000"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input
            type="number"
            value={discount}
            placeholder="e.g. 10"
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>VAT (%)</label>
          <input
            type="number"
            value={vatRate}
            placeholder="e.g. 7"
            onChange={(e) => setVatRate(e.target.value)}
          />
        </div>

        <div className="results">
          <h3>Summary</h3>
          <p><span>Original Price:</span> ฿{priceNum.toFixed(2)}</p>
          <p><span>Discount Amount:</span> ฿{discountAmount.toFixed(2)}</p>
          <p><span>Price After Discount:</span> ฿{discountedPrice.toFixed(2)}</p>
          <p><span>VAT ({vatPercent.toFixed(2)}%):</span> ฿{vat.toFixed(2)}</p>
          <p className="total"><span>Total:</span> ฿{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
