import React from 'react';
 
// Define the product names
const products = [
  'RealPage Exchange',
  'On-Site',
  'YieldStar',
  'PropertyWare',
  'RealpagePayments',
  'UPP',
  'ClickPay'
];
 
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 
const Table = ({data1}) => {
    console.log(data1);
    const check=(product,key,month)=>{
       var sum=0
       var count=0;
       console.log("product is",product)
       const fil=data1.filter((prod)=>{
        return prod.product_name==product;
       })
        console.log("filtered",fil);
        fil[0].info.map((prod)=>{
            if(key==0)
            {
                sum+=prod.mttr_by_sre;
                count++;
            }
            else
            {
                sum+=prod.mttr_by_nonsre;
                count++;
            }
        })
        return sum;
    }
    const generateDummyData = () => {
        const data = {};
        products.forEach(product => {
          data[product] = {};
          months.forEach(month => {
            data[product][month] = {
              sre: check(product,0,month),
              nonSre: check(product,1,month)
            };
          });
        });
        return data;
      };
      const mttrData = generateDummyData();
      
     
  const tableContainerStyle = {
    margin: '20px'
  };
 
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };
 
  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#0b1826',
    color: '#ffffff'
  };
 
  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2'
  };
 
 
  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle} rowSpan="2">Product</th>
            {months.map((month, index) => (
              <th style={thTdStyle} colSpan="2" key={index}>{month}</th>
            ))}
          </tr>
          <tr>
            {months.map((month, index) => (
              <React.Fragment key={index}>
                <th style={thTdStyle}>SRE</th>
                <th style={thTdStyle}>Non-SRE</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{product}</td>
              {months.map((month, monthIndex) => (
                <React.Fragment key={monthIndex}>
                  <td style={thTdStyle}>{mttrData[product][month].sre}</td>
                  <td style={thTdStyle}>{mttrData[product][month].nonSre}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Table;