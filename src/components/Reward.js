import { useParams } from 'react-router-dom';

function Reward() {
  const { tier } = useParams();
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  return (
    <div>
      <h1>
        Welcome to the&nbsp;
        {capitalize(tier)}
        &nbsp;Tier!
      </h1>
      <p>
        Here you can find out information about the&nbsp;
        {tier}
        &nbsp;tier
      </p>
    </div>
  );
}

export default Reward;
