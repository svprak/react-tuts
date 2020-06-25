import React from 'react';
import MyList from './MyList';
function MyInfo() {
  console.log({ username: 'james' });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-primary">Prak Savoeun</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nulla accusantium facere impedit exercitationem corrupti voluptates
            natus consectetur veniam. Velit ex consequuntur sed necessitatibus,
            recusandae inventore ad iure. Minima, facilis.
          </p>
          <MyList />
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
