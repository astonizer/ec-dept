import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Facultys from './Facultys/Facultys';
import Staff from './Staff/Staff';
import PhD from './PhD/PhD';
import Mtech from './Mtech/Mtech';

function People() {
  const path = useHistory().location;
  const tab = path.pathname.split('/')[2];

	return (
    <>
    {tab === 'faculty' ? (
      <Facultys />
    ) : tab === 'staff' ? (
      <Staff />
    ) : tab === 'phd' ? (
      <PhD />
    ) : tab == 'mtech' ? (
      <Mtech />
    ) : (
      null
    )}
    </>
	);
}

export default People;
