import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";

export default function SwCharacters() {
  return (
    <div>
      {TabsController()}
    </div>
  );
};

function TabsController() {
 const [key, setKey] = useState('home');

 return (
  <Tabs id='tab-controller'
  activeKey={key}
  onSelect={(k)=>setKey(k as string)}
  className='mb-3'>
    <Tab eventKey="luke" title="Luke">
      
    </Tab>
    <Tab eventKey="leia" title="Leia">
      
    </Tab>
    <Tab eventKey="Han" title="Han">
      
    </Tab>
  </Tabs>
 )
}