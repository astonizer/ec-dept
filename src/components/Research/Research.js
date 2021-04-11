import React from 'react';
import { useHistory } from 'react-router';
import Sponsored from './Sponsored/Sponsored';
import Facilities from './Facilities/Facilities';
import PGdissertation from './PGdissertation/PGdissertation';
import PGseminar from './PGseminar/PGseminar';
import UGproject from './UGproject/UGproject';
import UGseminar from './UGseminar/UGseminar';

function Research() {
  const path = useHistory().location;
  const tab = path.pathname.split('/')[2];

	return(
    <>
    {tab === 'sponsored' ? (
      <Sponsored />
    ) : tab === 'facilities' ? (
      <Facilities />
    ) : tab === 'pgdissertation' ? (
      <PGdissertation />
    ) : tab === 'pgseminar' ? (
      <PGseminar />
    ) : tab === 'ugproject' ? (
      <UGproject />
    ) : tab === 'upseminar' ? (
      <UGseminar />
    ) : (
      null
    )}
    </>
  );
}

export default Research;
