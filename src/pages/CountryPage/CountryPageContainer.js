import { useParams } from 'react-router-dom';
import { getCountry } from '../../utils/filter';

const CountryPageContainer = () => {
  const params = useParams();
  const country = getCountry(Number(params.countryId));

  return (
    <>
      <h1>
        {country.name}
      </h1>
      <h1>
        {country.airIdx}
      </h1>
    </>
  );
};

export default CountryPageContainer;
