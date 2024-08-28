import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <div className='d-flex justify-content-center align-item-center '>
    <h5 className='text-white me-2'>Generi:</h5>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Scegli il genere
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Giallo</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Documentari</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Serie-tv</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Commedie</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Fantasy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
  );
}

export default BasicExample;