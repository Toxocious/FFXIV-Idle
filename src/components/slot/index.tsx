import './index.css';

interface Props {
  image: string;
  name: string;
  amount: number;
}

export const Slot = (props: Props) => {
  const { image, name, amount } = props;

  return (
    <div className='slot'>
      <div className='icon'>
        <img src={image} alt={name} title={name} />
      </div>
      <div className='value'>{amount.toLocaleString()}</div>
    </div>
  );
};
