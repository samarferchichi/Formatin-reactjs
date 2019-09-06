import React, { Component } from 'react';


class Convertisseur extends Component {

  state ={
    currencies : ['USD', 'AUD', 'SGD', 'RUB', 'MYR', 'JPY'],
    base : 'USD',
    amount: '',
    convertTo : 'USD',
    result : '',
    date : ''
    }

    handleSelect = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        result: null,
      },
      this.calulate
      );
    };


    handleInput = (e) => {
      this.setState({
        amount: e.target.value
      },
      this.calulate
      );
    };

    calulate = () => {
      const amount = this.state.amount;
      if(amount === isNaN){
        return;
      }else{
        fetch(`https://api.exchangeratesapi.io/latest?base${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const date = data.dates;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result, 
            date
          });
        });
        
      }
    };

    handleSwap = (e) =>{
      const base = this.state.base
      const convertTo = this.state.convertTo
      e.preventDefault();
      this.setState({
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calulate
      );
    };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;

    return (

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 max-auto">
          <div className="card card-body">
              <h2>{amount} {base} is aquevalent to </h2>
              <h1>{result === null ? "Calculating..." : result}  {convertTo}</h1>
              <p>As of {date}</p>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10">
                  <form className="form-inline mb-4">
                    <input
                    type="number"
                    value={amount}
                    onChange={this.handleInput}
                    className="form-control form-control-lg mx-3"/>
                    <select 
                    name="base" 
                    value= {base} 
                    onChange={this.handleSelect} 
                    className="form-control form-control-lg">
                        {currencies.map(currency => 
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                          )}

                    </select>
                  </form>
                  <br></br>
                  <form className="form-inline mb-4">
                    <input
                     value= {result === "" ? "Calculating..." : result} 
                     disabled="true" 
                     className="form-control form-control-lg mx-3"></input>
                    <select
                    name="convertTo" 
                    value={convertTo} 
                    onChange={this.handleSelect} 
                    className="form-control form-control-lg">
                        {currencies.map(currency => 
                            <option key={currency} value={currency}>
                              {currency}
                            </option>
                          )}
                    </select>
                  </form>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                    <h1 onClick={this.handleSwap} className="swap">&#8595; &#8593;</h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

   
    );
  }
}

export default Convertisseur;
