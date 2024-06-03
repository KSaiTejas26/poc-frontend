import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      style={{fontSize:'18px'}}
      
    >
      
      <Tab eventKey="newest" title="Newest" style={{}} >
      </Tab>
      <Tab eventKey="profile" title="Best Rating">
      </Tab>
      <Tab eventKey="Price: High to Low" title="Price: High to Low" >
      </Tab>
      <Tab eventKey="Price: Low to High" title="Price: Low to High" >
      </Tab>
      <Tab eventKey="Most Popular" title="Most Popular" >
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;